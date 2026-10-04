// Fabrique un APK Android (Capacitor) à partir de dist/<appli>.html
//   node android/apk.js maths-6e maths-3e
// Prérequis : Node 22+, SDK Android (%LOCALAPPDATA%\Android\Sdk), Java (celui d'Android Studio convient).
// Le projet Android de chaque appli est créé dans android/build/<appli> (ignoré par git),
// l'APK de test (signé avec la clé de débogage) est copié dans android/apk/.
const fs = require('fs'), path = require('path'), { execSync } = require('child_process');

const APPS = {
  'maths-6e':    { id: 'com.sup762.maths6',       nom: 'Maths 6e' },
  'maths-5e':    { id: 'com.sup762.maths5',       nom: 'Maths 5e' },
  'maths-4e':    { id: 'com.sup762.maths4',       nom: 'Maths 4e' },
  'maths-3e':    { id: 'com.sup762.maths3brevet', nom: 'Maths 3e Brevet' },
  'electricien': { id: 'com.sup762.electricien',  nom: 'Électricien Pro' },
  'froid-clim':  { id: 'com.sup762.froidclim',    nom: 'Froid & Clim Pro' },
  'paie':        { id: 'com.sup762.paie',         nom: 'Paie Pro' },
  'soudeur':     { id: 'com.sup762.soudeur',      nom: 'Soudeur Pro' }
};
const CAP = '8.5.2', CAP_APP = '8.1.2';
const ROOT = path.join(__dirname, '..');
const SDK = process.env.ANDROID_HOME || path.join(process.env.LOCALAPPDATA || '', 'Android', 'Sdk');
const JAVA = process.env.JAVA_HOME || 'C:\\Program Files\\Android\\Android Studio\\jbr';
const run = (cmd, cwd, env) => { console.log('  $ ' + cmd); execSync(cmd, { cwd, stdio: 'inherit', env: Object.assign({}, process.env, env || {}) }); };

const slugs = process.argv.slice(2);
if (!slugs.length) { console.log('Usage : node android/apk.js ' + Object.keys(APPS).join(' ')); process.exit(1); }
fs.mkdirSync(path.join(__dirname, 'apk'), { recursive: true });

for (const slug of slugs) {
  const app = APPS[slug];
  if (!app) throw new Error('Appli inconnue : ' + slug);
  const html = path.join(ROOT, 'dist', slug + '.html');
  if (!fs.existsSync(html)) throw new Error('Lance d\'abord node build.js (' + html + ' introuvable)');
  console.log(`\n=== ${app.nom} (${app.id}) ===`);
  const dir = path.join(__dirname, 'build', slug);
  fs.mkdirSync(path.join(dir, 'www'), { recursive: true });
  fs.copyFileSync(html, path.join(dir, 'www', 'index.html'));

  // 1. Projet Capacitor (créé une seule fois)
  if (!fs.existsSync(path.join(dir, 'package.json'))) {
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: slug, private: true, version: '1.0.0' }, null, 2));
    run(`npm install --no-audit --no-fund @capacitor/core@${CAP} @capacitor/cli@${CAP} @capacitor/android@${CAP} @capacitor/app@${CAP_APP} @capacitor/assets@3`, dir);
  }
  fs.writeFileSync(path.join(dir, 'capacitor.config.json'), JSON.stringify({
    appId: app.id, appName: app.nom, webDir: 'www',
    android: { backgroundColor: '#10142a' },
    plugins: { SystemBars: { style: 'DARK' } }
  }, null, 2));
  if (!fs.existsSync(path.join(dir, 'android'))) run('npx cap add android', dir);
  run('npx cap sync android', dir);

  // 2. Icône et écran de démarrage (android/icones/<appli>.png, 1024 × 1024)
  const ico = path.join(__dirname, 'icones', slug + '.png');
  if (fs.existsSync(ico)) {
    fs.mkdirSync(path.join(dir, 'assets'), { recursive: true });
    for (const f of ['icon-only.png', 'icon-foreground.png', 'icon-background.png', 'splash.png', 'splash-dark.png']) fs.copyFileSync(ico, path.join(dir, 'assets', f));
    run('npx @capacitor/assets generate --android --splashBackgroundColor "#10142a" --splashBackgroundColorDark "#10142a"', dir);
  }

  // 3. Compilation de l'APK de test
  const adir = path.join(dir, 'android');
  fs.writeFileSync(path.join(adir, 'local.properties'), 'sdk.dir=' + SDK.replace(/\\/g, '\\\\').replace(/:/g, '\\:') + '\n');
  run('"' + path.join(adir, process.platform === 'win32' ? 'gradlew.bat' : 'gradlew') + '" assembleDebug --console=plain', adir, { JAVA_HOME: JAVA });
  const out = path.join(adir, 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
  const dest = path.join(__dirname, 'apk', app.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '-') + '.apk');
  fs.copyFileSync(out, dest);
  console.log(`✓ ${dest} (${Math.round(fs.statSync(dest).size / 1024)} Ko)`);
}
