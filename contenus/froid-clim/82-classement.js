/* JEU — Classement */
C.tri=[
 {t:"Côté HP ou côté BP ?",ic:"🔴",d:"Dans quelle partie du circuit se trouve cet élément ?",cats:["Côté HP","Côté BP"],items:[
  ["Tube de refoulement du compresseur","Côté HP","Vapeur haute pression, très chaude."],
  ["Ligne liquide","Côté HP","Liquide haute pression, entre condenseur et détendeur."],
  ["Filtre déshydrateur","Côté HP","Il est sur la ligne liquide."],
  ["Voyant liquide","Côté HP","Sur la ligne liquide."],
  ["Réservoir de liquide","Côté HP","Il stocke le liquide en sortie de condenseur."],
  ["Séparateur d'huile","Côté HP","Au refoulement du compresseur."],
  ["Entrée de l'évaporateur","Côté BP","Juste après le détendeur."],
  ["Tube d'aspiration","Côté BP","Vapeur basse pression vers le compresseur."],
  ["Bouteille anti-coup de liquide","Côté BP","Sur l'aspiration."],
  ["Bulbe du détendeur thermostatique","Côté BP","Il est fixé sur l'aspiration."]]},
 {t:"Familles de fluides",ic:"🧪",d:"À quelle famille appartient ce fluide ?",cats:["CFC","HCFC","HFC","HFO","Naturel"],items:[
  ["R12","CFC","Interdit depuis longtemps."],["R22","HCFC","Plus de recharge autorisée."],["R134a","HFC","PRP 1 430."],["R410A","HFC","Mélange de R32 et R125."],
  ["R404A","HFC","PRP 3 922."],["R32","HFC","PRP 675."],["R1234yf","HFO","Clim automobile."],["R1234ze","HFO","Refroidisseurs."],
  ["R290 (propane)","Naturel","Hydrocarbure, A3."],["R744 (CO₂)","Naturel","PRP 1."],["R717 (ammoniac)","Naturel","Toxique."]]},
 {t:"Classes de sécurité",ic:"⚠️",d:"Quelle est la classe de sécurité de ce fluide ?",cats:["A1","A2L","A3","B2L"],items:[
  ["R134a","A1","Non inflammable."],["R410A","A1","Non inflammable."],["R744 (CO₂)","A1","Non inflammable, mais très haute pression."],
  ["R32","A2L","Faiblement inflammable."],["R1234yf","A2L","Faiblement inflammable."],["R290 (propane)","A3","Très inflammable."],
  ["R600a (isobutane)","A3","Réfrigérateurs ménagers."],["R717 (ammoniac)","B2L","Toxique, faiblement inflammable."]]},
 {t:"Quelle attestation d'aptitude ?",ic:"📜",d:"Quelle catégorie faut-il pour ce travail ?",cats:["A1","A2","B","C","D","E","V"],items:[
  ["Installer et dépanner des chambres froides contenant 25 kg de HFC","A1","Sans limite de charge."],
  ["Installer et dépanner des splits de 2 kg","A2","Moins de 3 kg."],
  ["Intervenir sur une centrale au CO₂ de supermarché","B","B = R744."],
  ["Intervenir sur une installation industrielle à l'ammoniac","C","C = R717."],
  ["Récupérer le fluide de petits appareils de moins de 3 kg en fin de vie","D","Récupération sur petites charges."],
  ["Réaliser uniquement des contrôles d'étanchéité, sans ouvrir le circuit","E","Contrôle d'étanchéité."],
  ["Recharger la climatisation des voitures","V","Véhicules."]]},
 {t:"Fréquence du contrôle d'étanchéité",ic:"📅",d:"Tous les combien ? (règlement F-Gas III)",cats:["Tous les 24 mois","Tous les 12 mois","Tous les 6 mois","Pas de contrôle obligatoire"],items:[
  ["20 t éq. CO₂, sans détection permanente","Tous les 12 mois","Entre 5 et 50 t."],
  ["20 t éq. CO₂, avec détection permanente","Tous les 24 mois","L'intervalle est doublé."],
  ["80 t éq. CO₂, sans détection permanente","Tous les 6 mois","Entre 50 et 500 t."],
  ["600 t éq. CO₂ (détection permanente obligatoire)","Tous les 6 mois","3 mois doublés par la détection, obligatoire à ce niveau."],
  ["3 t éq. CO₂","Pas de contrôle obligatoire","Sous le seuil de 5 t."],
  ["Split hermétiquement scellé de 1,2 kg dans un logement","Pas de contrôle obligatoire","Exemption des équipements scellés résidentiels de moins de 3 kg."],
  ["Refroidisseur contenant 2 kg de HFO, sans détection","Tous les 12 mois","HFO : à partir de 1 kg."],
  ["Refroidisseur contenant 15 kg de HFO, sans détection","Tous les 6 mois","HFO : de 10 à 100 kg."]]},
 {t:"Quelle panne ?",ic:"🔎",d:"Quelle panne correspond à ces mesures ?",cats:["Manque de fluide","Excès de fluide","Restriction","Condenseur encrassé","Évaporateur manquant d'air"],items:[
  ["BP basse, surchauffe élevée, sous-refroidissement faible, bulles au voyant","Manque de fluide","La signature classique."],
  ["HP haute, sous-refroidissement très élevé, condenseur propre","Excès de fluide","Le liquide noie le condenseur."],
  ["BP basse, surchauffe élevée, sous-refroidissement élevé, filtre froid en sortie","Restriction","Le fluide s'accumule avant le bouchon."],
  ["HP haute, condensation 22 K au-dessus de l'air extérieur","Condenseur encrassé","La chaleur s'évacue mal."],
  ["BP basse, surchauffe faible, filtre à air bouché","Évaporateur manquant d'air","Le fluide ne trouve pas assez de chaleur."],
  ["BP basse, surchauffe faible, évaporateur couvert de glace","Évaporateur manquant d'air","La glace bloque le passage de l'air."]]},
 {t:"Le bon instrument",ic:"🧰",d:"Avec quoi fais-tu cette opération ?",cats:["Manifold","Vacuomètre","Balance","Pince ampèremétrique","Détecteur de fuite"],items:[
  ["Lire la pression d'évaporation","Manifold","Manomètre BP."],
  ["Vérifier que le vide est assez poussé","Vacuomètre","Il mesure en pression absolue."],
  ["Charger 1,4 kg de fluide","Balance","On charge au poids."],
  ["Mesurer l'intensité du compresseur","Pince ampèremétrique","Autour d'un seul conducteur."],
  ["Chercher l'origine d'une perte de fluide","Détecteur de fuite","Électronique, compatible avec le fluide."],
  ["Peser une bouteille de récupération","Balance","Pour respecter les 80 %."]]}
];
