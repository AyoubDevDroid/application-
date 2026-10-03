# Applis métier & scolaires

Un seul **moteur** (cours en fiches, lexique, jeux, examen blanc, XP, niveaux, étoiles, confettis) et un **fichier de contenu** par appli.

| Appli | Contenu | Appli prête à ouvrir |
|---|---|---|
| ⚡ Électricien Pro | `contenus/electricien.js` | `dist/electricien.html` |
| 🔥 Soudeur Pro | `contenus/soudeur.js` (petite appli : métier surtout pratique ; à faire relire) | `dist/soudeur.html` |
| ❄️ Froid & Clim Pro | `contenus/froid-clim.js` (+ examen blanc attestation fluides ; à faire relire) | `dist/froid-clim.html` |
| 💶 Paie Pro | `contenus/paie.js` (chiffres 2026, à mettre à jour chaque 1er janvier ; à faire relire) | `dist/paie.html` |
| 📐 Maths 6e | `contenus/maths-6e.js` | `dist/maths-6e.html` |
| 🎯 Maths 3e Brevet | `contenus/maths-3e.js` (+ brevet blanc express) | `dist/maths-3e.html` |

Les fichiers de `dist/` s'ouvrent directement dans un navigateur, sur ordinateur ou téléphone.

## Organisation

```
moteur/template.html   le moteur commun (on n'y touche pas pour une nouvelle appli)
contenus/*.js          un fichier de contenu par appli
build.js               fabrique dist/<appli>.html et vérifie le contenu
dist/                  les applis prêtes
docs/                  étude des métiers, planning, règles pub
```

## Créer une nouvelle appli

1. Copier un contenu existant : `cp contenus/soudeur.js contenus/plaquiste.js`
2. Remplacer le contenu à partir du référentiel du titre pro (ou du programme scolaire) :
   - `id`, `app`, `icon`, `sousTitre` — identité de l'appli (`id` doit être unique : il sert à la sauvegarde)
   - `theme` *(facultatif)* — couleurs, ex. `{pri:'#ff8a3d',pri2:'#c95a10'}`
   - `pub` — `{actif:true,toutesLes:3}` (voir `docs/PUBLICITE.md`)
   - `modules` — fiches de cours ; `k` = mots-clés, ils doivent exister dans le lexique
   - `lexique` — `['Mot','Définition']`
   - `quiz` — `['idModule','Question',['Bonne réponse','Faux','Faux','Faux'],0,'Explication']` (la bonne réponse en premier, le moteur mélange)
   - `vf` — `['Affirmation',true/false,'Explication']`
   - `ordre` — `{t:'Titre',s:['Étape 1','Étape 2',…]}`
   - `examen` *(facultatif)* — ajoute un examen blanc chronométré : `{titre:'Examen blanc',questions:60,seuil:42,minutes:60}`. Les questions sont tirées du quiz ; s'il y en a moins que `questions`, le seuil et la durée sont réduits en proportion
   - `calcul` *(facultatif, pour les maths)* — active le jeu Calcul mental : `[{op:'×',a:[2,10],b:[2,10]}]`, `op` parmi `+ − × ÷`
   - `C.fiches` *(fortement conseillé)* — les fiches « wiki » : une entrée par module, ajoutée après le bloc `C` (voir la fin de `contenus/electricien.js`) :
     `intro` (chapeau), `retenir` (résumé), et `s:[…]` pour compléter chaque partie avec `p` (paragraphe d'explication), `ex` (exemple concret), `att` (attention), `info` (le savais-tu ?), `q` (mini-question `['Question',['Bonne','Faux','Faux'],0,'Explication']`) et `fig` (schéma animé)
   - Schémas animés `fig` : `{type:'cycle',etapes:[…],centre:'…'}` · `{type:'flux',etapes:['A',['B','valeur']]}` · `{type:'barres',items:[['Libellé',valeur,'unité']]}` · `{type:'chiffres',items:[[valeur,'unité','légende']]}` · `{type:'svg',svg:'<svg…>'}` (classes animées : `flow`, `glow`, `spin`, `pop`, `draw`, `appear`), + `legende`
3. Fabriquer : `node build.js plaquiste` (ou `node build.js` pour toutes)

Le build refuse un contenu incohérent (mot-clé absent du lexique, module inconnu dans le quiz, pas assez de questions…) et dit quoi corriger.

## Nouveautés du moteur par rapport au prototype

- **Progression sauvegardée** sur le téléphone (XP, modules lus, meilleurs scores).
- **Couleurs par appli** via `theme`.
- **Emplacements pub** (bannière sur l'écran de résultats + plein écran toutes les N parties), prêts pour AdMob.
- **Jeu Calcul mental** pour les applis de maths.
- **Fiches wiki** : sommaire, barre de lecture, explications, encadrés, schémas animés, mini-questions (+5 XP), « À retenir », module suivant, +20 XP par fiche terminée.
- **Série de jours 🔥 et objectif du jour** (50 XP) sur l'accueil, pour revenir chaque jour.
- **Examen blanc** : chronométré, sans correction pendant l'épreuve, verdict admis / pas encore, puis correction de chaque erreur.

## Documents

- `docs/ETUDE-MARCHE.md` — métiers sans appli et avec de la théorie à apprendre, concurrence, priorités
- `docs/PLANNING.md` — planning semaine par semaine
- `docs/PUBLICITE.md` — règles pub (RGPD, mineurs, Play Store)

## Reprendre le travail (Windows + VS Code)

```
git clone https://github.com/AyoubDevDroid/application-.git
cd application-
git checkout claude/electricien-pro-metier-apps-ccq2a9
node build.js
```

Il faut [Node.js](https://nodejs.org) (version LTS). Ensuite, double-cliquer sur un fichier de `dist/` pour l'ouvrir dans le navigateur.
