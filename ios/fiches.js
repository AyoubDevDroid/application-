// Fiches App Store (fr-FR) à partir des textes Play Store : écrit ios/metadata/<appli>/ au format « asc metadata ».
//   node ios/fiches.js            → puis, sur le Mac : asc metadata push … --dir ios/metadata/<appli> (voir ios/publier.sh)
// Limites Apple : nom 30, sous-titre 30, mots-clés 100, texte promotionnel 170, description 4000.
const fs = require('fs'), path = require('path');
const T = require('../store/textes');
const VERSION = '1.0.0';
const POLITIQUE = 'https://762sup.com/App/politique_confidentialite.html', SITE = 'https://762sup.com';

const IOS = {
  'electricien': { sous: 'De zéro à électricien confirmé', cles: 'électricité,électricien,NF C 15-100,câblage,dépannage,habilitation,formation,CAP,bac pro,tableau' },
  'froid-clim':  { sous: 'Devenir technicien frigoriste', cles: 'frigoriste,climatisation,froid,clim,pompe à chaleur,fluide,frigorigène,CAP,bac pro,formation' },
  'maths-6e':    { sous: 'Tout le programme de 6e', cles: 'maths,6e,sixième,collège,fractions,géométrie,calcul,exercices,révision,cours' },
  'maths-5e':    { sous: 'Le nouveau programme de 5e', cles: 'maths,5e,cinquième,collège,fractions,géométrie,calcul,exercices,révision,cours' },
  'maths-4e':    { sous: 'Tout le programme de 4e', cles: 'maths,4e,quatrième,collège,Pythagore,équations,fractions,exercices,révision,cours' },
  'maths-3e':    { sous: 'Prépare le brevet sereinement', cles: 'brevet,maths,3e,troisième,DNB,automatismes,collège,Thalès,révision,exercices' }
};

let ko = 0;
for (const [slug, i] of Object.entries(IOS)) {
  const t = T[slug];
  const info = { name: t.titre, subtitle: i.sous, privacyPolicyUrl: POLITIQUE };

  // Apple refuse les emojis dans la description (« invalid characters ») : on les retire
  const description = t.complete.replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]+\s*/gu, '');
  const version = { description, keywords: i.cles, promotionalText: t.courte, supportUrl: SITE, marketingUrl: SITE };
  for (const [k, v, max] of [['nom', info.name, 30], ['sous-titre', info.subtitle, 30], ['mots-clés', version.keywords, 100],
    ['promo', version.promotionalText, 170], ['description', version.description, 4000]])
    if ([...v].length > max) { console.log(`✘ ${slug} : ${k} trop long (${[...v].length}/${max})`); ko++; }
  const dir = path.join(__dirname, 'metadata', slug);
  fs.mkdirSync(path.join(dir, 'app-info'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'version', VERSION), { recursive: true });
  fs.writeFileSync(path.join(dir, 'app-info', 'fr-FR.json'), JSON.stringify(info, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'version', VERSION, 'fr-FR.json'), JSON.stringify(version, null, 2) + '\n');
}
if (ko) process.exit(1);
console.log('✓ ios/metadata/ (6 applis)');
