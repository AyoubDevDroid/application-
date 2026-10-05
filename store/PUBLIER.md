# Publier les applis sur le Play Store

Tout est prêt pour 6 applis. Version **1.0.0 (code 1)**, sans publicité, sans compte, aucune donnée collectée.

| Appli | Package | Fichier à envoyer | Dossier de la fiche |
|---|---|---|---|
| Électricien Pro | `com.sup762.electricien` | `android/aab/electricien.aab` | `store/electricien/` |
| Froid & Clim Pro | `com.sup762.froidclim` | `android/aab/froid-clim.aab` | `store/froid-clim/` |
| Maths 6e | `com.sup762.maths6` | `android/aab/maths-6e.aab` | `store/maths-6e/` |
| Maths 5e | `com.sup762.maths5` | `android/aab/maths-5e.aab` | `store/maths-5e/` |
| Maths 4e | `com.sup762.maths4` | `android/aab/maths-4e.aab` | `store/maths-4e/` |
| Maths 3e Brevet | `com.sup762.maths3brevet` | `android/aab/maths-3e.aab` | `store/maths-3e/` |

Chaque dossier de fiche contient : `titre.txt`, `description_courte.txt`, `description_complete.txt`, `icone-512.png`,
`banniere-1024x500.png` et `captures/1.png` à `6.png` (1080 × 1920).

## 0. Clé d'upload — À SAUVEGARDER MAINTENANT

`android/keys/upload-keystore.jks` + `android/keys/key.properties` (mot de passe dedans). Ils sont **hors git**.
Copie-les sur une clé USB ou dans un coffre-fort de mots de passe. Une seule clé sert pour les 6 applis.
Sans elle, impossible de publier une mise à jour. Accepte **Play App Signing** (proposé par défaut) : Google garde la
clé de signature finale, notre clé ne sert qu'à l'envoi.

## 1. Politique de confidentialité (une seule pour les 6 applis)

Mettre `store/politique_confidentialite.html` en ligne, par exemple :
**https://762sup.com/applis/politique_confidentialite.html** — puis coller cette adresse dans chaque appli.

## 2. Créer chaque appli (Play Console → Créer une application)

- Nom : contenu de `titre.txt` · Langue par défaut : **Français (France) – fr-FR**
- Type : **Application** · **Gratuite**
- Accepter les déclarations (règles du programme, lois export américaines)

L'API ne sait pas créer une appli : cette étape est forcément manuelle. Ensuite, le script `store/envoyer.js` peut
envoyer le fichier et toute la fiche automatiquement (voir § 6).

## 3. Fiche du Store (Développer → Présence sur le Store → Fiche principale)

Copier les 3 textes, l'icône 512, la bannière 1024 × 500 et les 6 captures du dossier de l'appli.
Catégorie : **Enseignement** · E-mail : contact@762sup.com · Site : https://762sup.com

## 4. Contenu de l'application (Règles → Contenu de l'application)

| Rubrique | Réponse |
|---|---|
| Politique de confidentialité | l'adresse du § 1 |
| Accès à l'appli | Toutes les fonctionnalités sont disponibles sans restriction (pas de compte) |
| Annonces | **Non**, l'appli ne contient pas d'annonces |
| Classification (questionnaire IARC) | Catégorie « Référence, actualités ou éducation » ; non à toutes les questions (violence, sexualité, langage, drogues, jeux d'argent, interactions entre utilisateurs, partage de position, achats). Attendu : **PEGI 3 / Tout public** |
| Sécurité des données | **Aucune donnée collectée ni partagée** (« Votre appli collecte-t-elle ou partage-t-elle des données ? » → Non). La progression reste sur l'appareil et n'est jamais transmise |
| Applis d'actualité, santé, gouvernement, finance | Non |

### Public cible — différent selon l'appli

| Appli | Tranches d'âge à cocher | Conséquence |
|---|---|---|
| Électricien Pro, Froid & Clim Pro | 16-17 ans, 18 ans et plus | Pas de programme Familles |
| Maths 6e, Maths 5e | **9-12 ans** et 13-15 ans | Programme **Familles** : remplir le questionnaire Familles. OK car sans pub et sans collecte de données |
| Maths 4e, Maths 3e | 13-15 ans (+ 16-17 ans pour la 3e) | Pas de programme Familles (aucune tranche < 13 ans) |

Programme Familles : répondre « Non » aux pubs et à la collecte de données ; l'appli ne contient ni lien externe, ni
achat, ni connexion. On peut ensuite demander le badge facultatif « Approuvé par les enseignants ».

## 5. Publier en production

Notre compte Play Console est un **compte d'entreprise (D-U-N-S)** : pas de test fermé obligatoire (la règle des
12 testeurs pendant 14 jours ne vise que les comptes personnels créés après novembre 2023). On publie directement :

**Production** → Pays : France (et territoires d'outre-mer : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte…) ;
pour les applis métier, on peut ajouter Belgique, Suisse, Luxembourg. Puis **Envoyer pour examen**.

## 6. Envoi automatique (une fois l'appli créée dans la Console)

Le compte de service doit être invité sur l'appli (Utilisateurs et autorisations → droit « Publier »). Puis :

```
PLAY_KEY=chemin/compte-de-service.json node store/envoyer.js maths-6e --verifier   # lecture seule : accès OK ?
PLAY_KEY=chemin/compte-de-service.json node store/envoyer.js maths-6e production draft  # fichier + fiche en brouillon (production)
```

## 7. Mettre à jour plus tard

```
node build.js
node android/apk.js maths-6e --aab --version=2:1.0.1     # versionCode toujours plus grand que le précédent
node store/generer.js maths-6e                            # si les captures ou les textes ont changé
```
