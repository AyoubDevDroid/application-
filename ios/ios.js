// Fabrique l'appli iPhone (Capacitor) à partir de dist/<appli>.html, puis l'envoie sur App Store Connect (TestFlight).
// À lancer sur un Mac avec Xcode 26+ et Node 22+ (voir ios/IOS.md).
//
//   node ios/ios.js maths-6e                 → compile, signe et envoie (version 1.0.0, build 1)
//   node ios/ios.js maths-6e --version=2:1.0.1
//   node ios/ios.js maths-6e --preparer      → crée seulement le projet Xcode (fonctionne aussi sous Windows, pour tester)
//   node ios/ios.js --identifiants           → enregistre les 6 identifiants (bundle ID) chez Apple avec la clé API
//
// Variables d'environnement (sauf --preparer) :
//   APPLE_TEAM_ID   identifiant d'équipe Apple (10 caractères, developer.apple.com → Membership)
//   ASC_KEY_PATH    chemin du fichier AuthKey_XXXXXXXXXX.p8 (clé API App Store Connect)
//   ASC_KEY_ID      Key ID de cette clé
//   ASC_ISSUER_ID   Issuer ID (App Store Connect → Utilisateurs et accès → Intégrations)
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');

const APPS = {
  'electricien': { id: 'com.sup762.electricien',  nom: 'Électricien Pro', court: 'Électricien' },
  'froid-clim':  { id: 'com.sup762.froidclim',    nom: 'Froid & Clim Pro', court: 'Froid & Clim' },
  'maths-6e':    { id: 'com.sup762.maths6',       nom: 'Maths 6e', court: 'Maths 6e' },
  'maths-5e':    { id: 'com.sup762.maths5',       nom: 'Maths 5e', court: 'Maths 5e' },
  'maths-4e':    { id: 'com.sup762.maths4',       nom: 'Maths 4e', court: 'Maths 4e' },
  'maths-3e':    { id: 'com.sup762.maths3brevet', nom: 'Maths 3e Brevet', court: 'Maths 3e' }
};
const CAP = '8.5.2', CAP_APP = '8.1.2', FOND = '#10142a';
const ROOT = path.join(__dirname, '..');
const PREPARER = process.argv.includes('--preparer');
const VERSION = ((process.argv.find(a => a.startsWith('--version=')) || '--version=1:1.0.0').slice(10)).split(':');
const IDENTIFIANTS = process.argv.includes('--identifiants');
const slugs = process.argv.slice(2).filter(a => !a.startsWith('--'));
const run = (cmd, cwd) => { console.log('  $ ' + cmd.replace(/(-authenticationKey\w+ )\S+/g, '$1…')); execSync(cmd, { cwd, stdio: 'inherit' }); };
const env = k => { const v = process.env[k]; if (!v) throw new Error('Variable manquante : ' + k + ' (voir ios/IOS.md)'); return v; };

// Enregistre les bundle ID chez Apple (API App Store Connect, jeton JWT ES256) pour pouvoir créer les fiches d'applis
async function identifiants() {
  const crypto = require('crypto');
  const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const tete = b64({ alg: 'ES256', kid: env('ASC_KEY_ID'), typ: 'JWT' });
  const corps = b64({ iss: env('ASC_ISSUER_ID'), iat: now, exp: now + 1200, aud: 'appstoreconnect-v1' });
  const sig = crypto.sign('sha256', Buffer.from(tete + '.' + corps), { key: fs.readFileSync(env('ASC_KEY_PATH')), dsaEncoding: 'ieee-p1363' }).toString('base64url');
  const jwt = tete + '.' + corps + '.' + sig;
  for (const app of Object.values(APPS)) {
    const r = await fetch('https://api.appstoreconnect.apple.com/v1/bundleIds', {
      method: 'POST', headers: { Authorization: 'Bearer ' + jwt, 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { type: 'bundleIds', attributes: { identifier: app.id, name: app.nom.normalize('NFD').replace(/[^A-Za-z0-9 ]/g, ''), platform: 'IOS' } } })
    });
    if (r.ok) console.log('✓ ' + app.id + ' enregistré');
    else if (r.status === 409) console.log('= ' + app.id + ' existe déjà');
    else { console.log('✗ ' + app.id + ' : ' + r.status + ' ' + await r.text()); process.exitCode = 1; }
  }
}
if (IDENTIFIANTS) { identifiants().catch(e => { console.error(e.message); process.exit(1); }); return; }

if (!slugs.length) { console.log('Usage : node ios/ios.js ' + Object.keys(APPS).join(' ') + ' [--version=1:1.0.0] [--preparer]'); process.exit(1); }
if (!PREPARER && process.platform !== 'darwin') throw new Error('La compilation iOS demande un Mac avec Xcode (utilise --preparer pour seulement créer le projet).');
const KEY = PREPARER ? null : { team: env('APPLE_TEAM_ID'), path: env('ASC_KEY_PATH'), id: env('ASC_KEY_ID'), issuer: env('ASC_ISSUER_ID') };

for (const slug of slugs) {
  const app = APPS[slug]; if (!app) throw new Error('Appli inconnue : ' + slug);
  const html = path.join(ROOT, 'dist', slug + '.html');
  if (!fs.existsSync(html)) throw new Error('Lance d\'abord node build.js');
  console.log(`\n=== ${app.nom} (${app.id}) — version ${VERSION[1]} (build ${VERSION[0]}) ===`);
  const dir = path.join(__dirname, 'build', slug);
  fs.mkdirSync(path.join(dir, 'www'), { recursive: true });
  fs.copyFileSync(html, path.join(dir, 'www', 'index.html'));

  // 1. Projet Capacitor iOS (Swift Package Manager, pas de CocoaPods)
  if (!fs.existsSync(path.join(dir, 'package.json'))) {
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: slug, private: true, version: '1.0.0' }, null, 2));
    run(`npm install --no-audit --no-fund @capacitor/core@${CAP} @capacitor/cli@${CAP} @capacitor/ios@${CAP} @capacitor/app@${CAP_APP} @capacitor/assets@3`, dir);
  }
  fs.writeFileSync(path.join(dir, 'capacitor.config.json'), JSON.stringify({
    appId: app.id, appName: app.nom, webDir: 'www',
    ios: { backgroundColor: FOND, contentInset: 'never', scrollEnabled: true },
    plugins: { SystemBars: { style: 'DARK' } }
  }, null, 2));
  if (!fs.existsSync(path.join(dir, 'ios'))) run('npx cap add ios', dir);
  run('npx cap sync ios', dir);

  // 2. Icône sans transparence (exigée par Apple) + écran de démarrage
  const ico = path.join(ROOT, 'android', 'icones', slug + '.png');
  fs.mkdirSync(path.join(dir, 'assets'), { recursive: true });
  const plat = path.join(dir, 'assets', 'icon-only.png');
  fs.writeFileSync(path.join(dir, 'aplatir.js'), `require('sharp')(${JSON.stringify(ico)}).resize(1024, 1024).flatten({ background: '${FOND}' }).removeAlpha().png().toFile(${JSON.stringify(plat)});`);
  run('node aplatir.js', dir);
  for (const f of ['splash.png', 'splash-dark.png']) fs.copyFileSync(plat, path.join(dir, 'assets', f));
  run(`npx @capacitor/assets generate --ios --splashBackgroundColor "${FOND}" --splashBackgroundColorDark "${FOND}"`, dir);

  // 3. Réglages du projet : iPhone seulement, version, nom sous l'icône, pas de chiffrement à déclarer
  const pbx = path.join(dir, 'ios', 'App', 'App.xcodeproj', 'project.pbxproj');
  fs.writeFileSync(pbx, fs.readFileSync(pbx, 'utf8')
    .replace(/TARGETED_DEVICE_FAMILY = "?1,2"?;/g, 'TARGETED_DEVICE_FAMILY = 1;')
    .replace(/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${VERSION[1]};`)
    .replace(/CURRENT_PROJECT_VERSION = [^;]+;/g, `CURRENT_PROJECT_VERSION = ${VERSION[0]};`));
  const plist = path.join(dir, 'ios', 'App', 'App', 'Info.plist');
  let p = fs.readFileSync(plist, 'utf8');
  p = p.replace(/(<key>CFBundleDisplayName<\/key>\s*<string>)[^<]*(<\/string>)/, `$1${app.court}$2`);
  if (!p.includes('ITSAppUsesNonExemptEncryption')) p = p.replace(/<dict>/, '<dict>\n\t<key>ITSAppUsesNonExemptEncryption</key>\n\t<false/>');
  // Portrait uniquement sur iPhone (l'appli est pensée pour le portrait)
  p = p.replace(/(<key>UISupportedInterfaceOrientations<\/key>\s*<array>)[\s\S]*?(<\/array>)/, '$1\n\t\t<string>UIInterfaceOrientationPortrait</string>\n\t$2');
  fs.writeFileSync(plist, p);
  if (PREPARER) { console.log('✓ Projet prêt : ' + path.join(dir, 'ios', 'App')); continue; }

  // 4. Archive signée (signature automatique : Xcode crée l'identifiant et le profil grâce à la clé API)
  const ios = path.join(dir, 'ios', 'App'), out = path.join(dir, 'sortie');
  fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
  const auth = `-allowProvisioningUpdates -authenticationKeyPath "${KEY.path}" -authenticationKeyID ${KEY.id} -authenticationKeyIssuerID ${KEY.issuer}`;
  run(`xcodebuild -project App.xcodeproj -scheme App -configuration Release -destination "generic/platform=iOS" -archivePath "${out}/App.xcarchive" DEVELOPMENT_TEAM=${KEY.team} CODE_SIGN_STYLE=Automatic ${auth} archive`, ios);

  // 5. Export + envoi direct sur App Store Connect (la fiche de l'appli doit exister)
  fs.writeFileSync(path.join(out, 'export.plist'), `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
 <key>method</key><string>app-store-connect</string>
 <key>destination</key><string>upload</string>
 <key>teamID</key><string>${KEY.team}</string>
 <key>signingStyle</key><string>automatic</string>
 <key>uploadSymbols</key><true/>
 <key>manageAppVersionAndBuildNumber</key><false/>
</dict></plist>`);
  run(`xcodebuild -exportArchive -archivePath "${out}/App.xcarchive" -exportOptionsPlist "${out}/export.plist" -exportPath "${out}" ${auth}`, ios);
  console.log(`✓ ${app.nom} ${VERSION[1]} (${VERSION[0]}) envoyée sur App Store Connect — elle apparaît dans TestFlight après 10 à 30 min de traitement.`);
}
