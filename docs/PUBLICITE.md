# La publicité dans les applis

## Comment c'est réglé dans le contenu

```js
pub:{actif:true,toutesLes:3},
```

- `actif` : `true` pour afficher la pub, `false` pour une appli sans pub.
- `toutesLes` : une pub plein écran toutes les N parties terminées (jamais pendant un jeu).
- Une bannière s'affiche aussi sur l'écran de résultats.

Dans le navigateur, on voit un **emplacement gris « PUBLICITÉ »**. Dans l'appli Android, le code appelle `window.PUB.banniere(element)` et `window.PUB.interstitiel(suite)` si ces fonctions existent : c'est là qu'on branche AdMob (plugin Capacitor `@capacitor-community/admob`). `suite()` doit être appelée quand la pub se ferme.

## Règles à respecter

**Toutes les applis (Europe / RGPD)**
- Afficher un message de **consentement** avant toute pub personnalisée (Google impose une plateforme de consentement certifiée : le module UMP d'AdMob fait l'affaire).
- Publier une **politique de confidentialité** (lien obligatoire sur le Play Store).
- Remplir la section « Sécurité des données » du Play Store.

**Applis scolaires (élèves de 11 à 18 ans)**
- Dans la Play Console, déclarer le public cible. Si l'appli vise les moins de 13 ans (6e, 5e), elle entre dans le programme **Familles** de Google : seulement des SDK de pub **certifiés Familles**, **pas de pub personnalisée**.
- En France, un mineur de moins de 15 ans ne peut pas consentir seul au traitement de ses données : utiliser des **pubs non personnalisées** pour tout le collège.
- Pas de pub plein écran trop fréquente : `toutesLes:3` minimum, et proposer un achat « sans pub ».

C'est pour ça que **Maths 6e** est livrée avec `actif:false` : l'activer seulement une fois AdMob configuré en mode « non personnalisé » et l'appli déclarée correctement.
