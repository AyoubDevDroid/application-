// Produit store/<appli>/ pour la Play Console : textes, icône 512, bannière 1024 × 500, captures 1080 × 1920 (+ captures iPhone 1320 × 2868 pour l'App Store).
//   node store/generer.js            (toutes les applis de store/textes.js)
//   node store/generer.js maths-5e   (une seule)
// Prérequis : node build.js (dist/*.html), icônes android/icones/<appli>.png, Chromium de Playwright.
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright-core');
const T = require('./textes');
const ROOT = path.join(__dirname, '..');
const apps = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(T);

// Vérification des longueurs imposées par Google
let ko = 0;
for (const a of apps) {
  const t = T[a]; if (!t) throw new Error('Pas de textes pour ' + a);
  for (const [k, max] of [['titre', 30], ['courte', 80], ['complete', 4000]]) if ([...t[k]].length > max) { console.log(`✘ ${a} : ${k} trop long (${[...t[k]].length}/${max})`); ko++; }
}
if (ko) process.exit(1);

(async () => {
  const b = await chromium.launch({ executablePath: process.env.LOCALAPPDATA + '/ms-playwright/chromium-1234/chrome-win64/chrome.exe' });
  for (const a of apps) {
    const t = T[a], dir = path.join(__dirname, a);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'titre.txt'), t.titre);
    fs.writeFileSync(path.join(dir, 'description_courte.txt'), t.courte);
    fs.writeFileSync(path.join(dir, 'description_complete.txt'), t.complete);
    const ico = 'data:image/png;base64,' + fs.readFileSync(path.join(ROOT, 'android', 'icones', a + '.png')).toString('base64');

    // Icône 512 × 512
    let p = await b.newPage({ viewport: { width: 512, height: 512 } });
    await p.setContent(`<body style="margin:0"><img src="${ico}" style="width:512px;height:512px;display:block">`);
    await p.screenshot({ path: path.join(dir, 'icone-512.png') }); await p.close();

    // Captures : Android 360 × 640 × 3 = 1080 × 1920 ; iPhone 6,9 pouces 440 × 956 × 3 = 1320 × 2868 (App Store)
    let theme;
    for (const [cap, width, height] of [[path.join(dir, 'captures'), 360, 640], [path.join(dir, 'captures-iphone'), 440, 956]]) {
    fs.mkdirSync(cap, { recursive: true });
    p = await b.newPage({ viewport: { width, height }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
    await p.goto('file:///' + path.join(ROOT, 'dist', a + '.html').replace(/\\/g, '/'));
    await p.evaluate(() => { window.PUB = { banniere() {}, interstitiel(s) { s() } }; window.confetti = () => {} });
    theme = await p.evaluate(() => ({ pri: getComputedStyle(document.documentElement).getPropertyValue('--pri').trim() || '#5ad1ff', nom: C.app }));
    const shot = async n => { await p.waitForTimeout(900); await p.screenshot({ path: path.join(cap, n + '.png') }) };
    await p.evaluate(() => tab('home')); await shot(1);
    await p.evaluate(() => tab('cours')); await shot(2);
    // Une fiche qui contient un schéma
    await p.evaluate(() => { const id = Object.keys(C.fiches).find(k => (C.fiches[k].s || []).some(s => s.fig && /svg|etapes|inter/.test(s.fig.type))) || C.modules[0].id; openFiche(id);
      const f = document.querySelector('#ficheBody svg'); if (f) f.scrollIntoView({ block: 'center' }) });
    await shot(3);
    await p.evaluate(() => { tab('jeux') }); await shot(4);
    if (await p.evaluate(() => !!C.diag)) { await p.evaluate(() => startDiag(0)); await p.waitForTimeout(400); await p.locator('#playBody .btn').first().click(); await shot(5); }
    await p.evaluate(() => { tab('home'); startQuiz() }); await p.waitForTimeout(400);
    await p.evaluate(() => { const q = G.list[G.i], bs = [...document.querySelectorAll('#playBody .ans')]; (bs.find(x => +x.dataset.i === q[3]) || bs[0]).click() });
    await shot(6); await p.close();
    }

    // Bannière 1024 × 500
    p = await b.newPage({ viewport: { width: 1024, height: 500 } });
    await p.setContent(`<body style="margin:0;width:1024px;height:500px;display:flex;align-items:center;gap:48px;padding:0 70px;box-sizing:border-box;background:linear-gradient(120deg,#10142a 0%,#1d2550 60%,${theme.pri} 160%);font-family:'Segoe UI',sans-serif;color:#fff">
      <img src="${ico}" style="width:260px;height:260px;border-radius:56px;box-shadow:0 20px 50px rgba(0,0,0,.5)">
      <div><div style="font-size:64px;font-weight:900;line-height:1.05">${theme.nom}</div>
      <div style="font-size:34px;margin-top:18px;color:${theme.pri};font-weight:700">${t.accroche}</div>
      <div style="font-size:24px;margin-top:22px;opacity:.85">Cours · Jeux · Exercices corrigés · Hors connexion</div></div></body>`);
    await p.screenshot({ path: path.join(dir, 'banniere-1024x500.png') }); await p.close();
    console.log('✓ store/' + a + '/ (captures Android + iPhone)');
  }
  await b.close();
})();
