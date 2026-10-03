// Fabrique une appli HTML autonome par fichier de contenu.
//   node build.js            → toutes les apps de contenus/ vers dist/
//   node build.js soudeur    → seulement contenus/soudeur.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const template = fs.readFileSync(path.join(ROOT, 'moteur/template.html'), 'utf8');
const only = process.argv[2];
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });

let errors = 0;
for (const f of fs.readdirSync(path.join(ROOT, 'contenus')).filter(f => f.endsWith('.js')).sort()) {
  const slug = f.replace(/\.js$/, '');
  if (only && only !== slug) continue;
  const src = fs.readFileSync(path.join(ROOT, 'contenus', f), 'utf8');

  // Charge le contenu pour le vérifier avant de fabriquer l'appli
  let C;
  try { C = vm.runInNewContext(src + '\n;C'); } catch (e) { console.error(`✗ ${f} : erreur de syntaxe — ${e.message}`); errors++; continue; }
  const pb = check(C);
  if (pb.length) { console.error(`✗ ${f} :\n  - ` + pb.join('\n  - ')); errors++; continue; }

  const html = template.replace('/*__TITRE__*/', C.app).replace('/*__CONTENU__*/', () => src);
  fs.writeFileSync(path.join(ROOT, 'dist', slug + '.html'), html);
  console.log(`✓ dist/${slug}.html — ${C.modules.length} modules, ${C.lexique.length} mots, ${C.quiz.length} QCM, ${C.vf.length} V/F, ${C.ordre.length} ordres`);
}
process.exit(errors ? 1 : 0);

// Contrôles de cohérence du contenu
function check(C) {
  const pb = [];
  for (const k of ['id', 'app', 'icon', 'modules', 'lexique', 'quiz', 'vf', 'ordre']) if (!C[k]) pb.push(`champ manquant : ${k}`);
  if (pb.length) return pb;
  const mods = new Set(C.modules.map(m => m.id));
  const mots = new Set(C.lexique.map(w => w[0]));
  C.modules.forEach(m => m.k.forEach(k => { if (!mots.has(k)) pb.push(`mot-clé « ${k} » (module ${m.id}) absent du lexique`); }));
  C.quiz.forEach((q, i) => {
    if (!mods.has(q[0])) pb.push(`quiz #${i + 1} : module inconnu « ${q[0]} »`);
    if (!Array.isArray(q[2]) || q[2].length < 2 || q[3] >= q[2].length) pb.push(`quiz #${i + 1} : réponses invalides`);
  });
  C.vf.forEach((q, i) => { if (typeof q[1] !== 'boolean') pb.push(`vrai/faux #${i + 1} : la réponse doit être true ou false`); });
  if (C.lexique.length < 5) pb.push('il faut au moins 5 mots dans le lexique (jeu Associer)');
  if (C.quiz.length < 10) pb.push('il faut au moins 10 questions de quiz');
  if (C.vf.length < 10) pb.push('il faut au moins 10 vrai/faux');
  const dups = C.lexique.map(w => w[0]).filter((w, i, a) => a.indexOf(w) !== i);
  if (dups.length) pb.push('mots en double dans le lexique : ' + dups.join(', '));
  return pb;
}
