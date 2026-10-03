# Applis métier & scolaires

Un seul **moteur** (cours en fiches, lexique, 4 jeux, XP, niveaux, étoiles, confettis) et un **fichier de contenu** par appli.

| Appli | Contenu | Appli prête à ouvrir |
|---|---|---|
| ⚡ Électricien Pro | `contenus/electricien.js` | `dist/electricien.html` |
| 🔥 Soudeur Pro | `contenus/soudeur.js` (à faire relire par un formateur) | `dist/soudeur.html` |
| 📐 Maths 6e | `contenus/maths-6e.js` | `dist/maths-6e.html` |

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
   - `calcul` *(facultatif, pour les maths)* — active le jeu Calcul mental : `[{op:'×',a:[2,10],b:[2,10]}]`, `op` parmi `+ − × ÷`
3. Fabriquer : `node build.js plaquiste` (ou `node build.js` pour toutes)

Le build refuse un contenu incohérent (mot-clé absent du lexique, module inconnu dans le quiz, pas assez de questions…) et dit quoi corriger.

## Nouveautés du moteur par rapport au prototype

- **Progression sauvegardée** sur le téléphone (XP, modules lus, meilleurs scores).
- **Couleurs par appli** via `theme`.
- **Emplacements pub** (bannière sur l'écran de résultats + plein écran toutes les N parties), prêts pour AdMob.
- **Jeu Calcul mental** pour les applis de maths.

## Documents

- `docs/ETUDE-MARCHE.md` — métiers sans appli, concurrence, priorités
- `docs/PLANNING.md` — planning semaine par semaine
- `docs/PUBLICITE.md` — règles pub (RGPD, mineurs, Play Store)
