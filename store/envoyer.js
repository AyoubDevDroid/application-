// Envoie une appli sur la Play Console via l'API Google Play Developer : AAB signé + fiche fr-FR (textes, icône,
// bannière, captures). L'appli doit déjà exister dans la Play Console (l'API ne sait pas en créer) et le compte de
// service doit y avoir accès (Utilisateurs et autorisations → droit « Publier »).
//
//   PLAY_KEY=chemin/compte-de-service.json node store/envoyer.js <appli> [piste] [statut]
//   appli  : electricien | froid-clim | maths-6e | maths-5e | maths-4e | maths-3e
//   piste  : internal (défaut) | alpha (test fermé) | production
//   statut : draft (défaut, obligatoire tant que l'appli n'a jamais été publiée) | completed
//   --verifier : lecture seule, affiche les pistes existantes sans rien modifier
const fs = require('fs'), path = require('path');
const { google } = require('googleapis');

const PACKAGES = { 'electricien': 'com.sup762.electricien', 'froid-clim': 'com.sup762.froidclim', 'maths-6e': 'com.sup762.maths6',
  'maths-5e': 'com.sup762.maths5', 'maths-4e': 'com.sup762.maths4', 'maths-3e': 'com.sup762.maths3brevet' };
const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
const [app, track = 'internal', status = 'draft'] = args;
const VERIF = process.argv.includes('--verifier');
const PACKAGE = PACKAGES[app];
if (!PACKAGE) { console.log('Usage : node store/envoyer.js ' + Object.keys(PACKAGES).join('|') + ' [piste] [statut]'); process.exit(1); }
const dir = path.join(__dirname, app), AAB = path.join(__dirname, '..', 'android', 'aab', app + '.aab');
const LANG = 'fr-FR';

(async () => {
  const keyFile = process.env.PLAY_KEY;
  if (!keyFile || !fs.existsSync(keyFile)) throw new Error('PLAY_KEY doit pointer vers le JSON du compte de service');
  const auth = new google.auth.GoogleAuth({ keyFile, scopes: ['https://www.googleapis.com/auth/androidpublisher'] });
  const play = google.androidpublisher({ version: 'v3', auth });
  const edit = (await play.edits.insert({ packageName: PACKAGE })).data;
  const P = { packageName: PACKAGE, editId: edit.id };

  if (VERIF) {
    const tracks = (await play.edits.tracks.list(P)).data.tracks || [];
    console.log(PACKAGE + ' : accessible ✔'); for (const t of tracks) for (const r of t.releases || []) console.log(' ', t.track, r.status, (r.versionCodes || []).join(','));
    await play.edits.delete(P); return;
  }
  if (!fs.existsSync(AAB)) throw new Error('AAB introuvable : ' + AAB + ' (node android/apk.js ' + app + ' --aab)');

  // 1. Fichier
  const bundle = (await play.edits.bundles.upload({ ...P, media: { mimeType: 'application/octet-stream', body: fs.createReadStream(AAB) } })).data;
  console.log('AAB envoyé, versionCode', bundle.versionCode);
  await play.edits.tracks.update({ ...P, track, requestBody: { track, releases: [{ name: 'Version ' + bundle.versionCode, versionCodes: [String(bundle.versionCode)], status,
    releaseNotes: [{ language: LANG, text: 'Première version : cours illustrés, jeux, problèmes pas à pas et exercices à l\'infini.' }] }] } });
  console.log('Piste', track, '→', status);

  // 2. Fiche du Store
  const txt = f => fs.readFileSync(path.join(dir, f), 'utf8').trim();
  await play.edits.listings.update({ ...P, language: LANG, requestBody: { language: LANG, title: txt('titre.txt'), shortDescription: txt('description_courte.txt'), fullDescription: txt('description_complete.txt') } });
  const img = async (imageType, f) => { await play.edits.images.upload({ ...P, language: LANG, imageType, media: { mimeType: 'image/png', body: fs.createReadStream(f) } }) };
  await play.edits.images.deleteall({ ...P, language: LANG, imageType: 'phoneScreenshots' });
  await img('icon', path.join(dir, 'icone-512.png'));
  await img('featureGraphic', path.join(dir, 'banniere-1024x500.png'));
  for (const f of fs.readdirSync(path.join(dir, 'captures')).sort()) await img('phoneScreenshots', path.join(dir, 'captures', f));
  console.log('Fiche fr-FR : textes, icône, bannière et captures envoyés');

  await play.edits.commit(P);
  console.log('✓ Édition validée pour', PACKAGE);
})().catch(e => { console.error('✘', e.message); process.exit(1); });
