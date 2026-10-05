# Publier les applis sur l'App Store (Mac)

Mêmes 6 applis que pour Android, avec les mêmes identifiants (`com.sup762.…`). Version **1.0.0 (build 1)**, iPhone seulement, portrait.

## 1. Préparer le Mac (une seule fois)

- **Xcode 26** ou plus récent (App Store du Mac). Ouvre-le une fois pour accepter la licence et installer les composants iOS.
- **Node 22** ou plus récent : https://nodejs.org (installateur .pkg), ou `brew install node`.
- Dans le Terminal :

```bash
xcode-select --install          # outils en ligne de commande (si demandé)
git clone -b claude/electricien-pro-metier-apps-ccq2a9 https://github.com/AyoubDevDroid/application-.git
cd application-
```

## 2. Clé API App Store Connect (une seule fois)

App Store Connect → **Utilisateurs et accès** → **Intégrations** → **Clés de l'API App Store Connect** → **+**,
nom « applis », accès **Admin**. Télécharge le fichier `AuthKey_XXXXXXXXXX.p8` (téléchargeable une seule fois, garde-le).
Note le **Key ID** et l'**Issuer ID** affichés sur la page. Le **Team ID** est sur developer.apple.com → Membership.

Puis, dans le Terminal (à refaire à chaque nouvelle fenêtre) :

```bash
export APPLE_TEAM_ID=XXXXXXXXXX
export ASC_KEY_ID=XXXXXXXXXX
export ASC_ISSUER_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
export ASC_KEY_PATH=~/Downloads/AuthKey_XXXXXXXXXX.p8
```

## 3. Enregistrer les identifiants des 6 applis

```bash
node ios/ios.js --identifiants
```

## 4. Créer les 6 fiches dans App Store Connect (manuel, Apple ne le permet pas par API)

**Apps** → **+** → **Nouvelle app**, pour chacune :

| Nom | Identifiant de lot | SKU |
|---|---|---|
| Électricien Pro | com.sup762.electricien | electricien |
| Froid & Clim Pro | com.sup762.froidclim | froidclim |
| Maths 6e | com.sup762.maths6 | maths6 |
| Maths 5e | com.sup762.maths5 | maths5 |
| Maths 4e | com.sup762.maths4 | maths4 |
| Maths 3e Brevet | com.sup762.maths3brevet | maths3brevet |

Plateforme **iOS**, langue principale **Français (France)**, accès **Complet**.
Si un nom est déjà pris sur l'App Store, ajoute un mot (ex. « Maths 6e – Cours et jeux »).

## 5. Compiler et envoyer

```bash
node ios/ios.js maths-6e                       # une appli pour tester le parcours
node ios/ios.js electricien froid-clim maths-5e maths-4e maths-3e
```

Chaque appli met quelques minutes. Elle apparaît dans **TestFlight** 10 à 30 min après l'envoi.
Pour une mise à jour plus tard : `node ios/ios.js maths-6e --version=2:1.0.1` (le build doit toujours augmenter).

## 6. Remplir la fiche et soumettre (pour chaque appli)

Textes : les mêmes que Google, dans `store/<appli>/` (`titre.txt`, `description_complete.txt`).

- **Sous-titre** (30 caractères max) : reprendre le début de `description_courte.txt`.
- **Mots-clés** (100 caractères) : ex. `maths,6e,collège,cours,exercices,calcul,géométrie,fractions,révision`.
- **URL d'assistance** : https://762sup.com · **Politique de confidentialité** : l'adresse de `store/politique_confidentialite.html` en ligne.
- **Catégorie** : Éducation · **Prix** : Gratuit.
- **Confidentialité de l'app** : « Aucune donnée collectée ».
- **Classification d'âge** : non à tout → **4+**. Maths 6e / 5e : ne PAS cocher « Made for Kids » (catégorie Enfants = règles
  plus strictes, inutile).
- **Captures iPhone 6,9 pouces** (1320 × 2868) : obligatoires — à générer (les captures Android n'ont pas le bon format).
- Choisir le build envoyé à l'étape 5 → **Ajouter pour vérification** → **Soumettre**.

Pas de test obligatoire de 14 jours chez Apple : la vérification prend en général 1 à 2 jours.

## En cas d'erreur

- `No Accounts` / `No profiles` : vérifier les 4 `export` de l'étape 2 et que la clé est bien **Admin**.
- `App record not found` à l'envoi : la fiche de l'étape 4 n'existe pas, ou l'identifiant de lot ne correspond pas.
- `requires iOS 26 SDK` : mettre Xcode à jour.
