/* NIVEAU 3 — La réglementation des fluides (vérifiée en octobre 2026)
   Règlement (UE) 2024/573 « F-Gas III » (applicable depuis le 11 mars 2024), règlement d'exécution (UE) 2024/2215,
   arrêtés français de novembre 2025 sur les attestations, Cerfa 15497*04, Trackdéchets. */
C.modules.push({id:"reglementation",n:3,i:"📜",t:"La réglementation des fluides",d:"F-Gas III, attestations, contrôles d'étanchéité, traçabilité",
 s:[{h:"Les attestations",l:["<b>Attestation de capacité</b> : pour l'<b>entreprise</b> (valable 5 ans).","<b>Attestation d'aptitude</b> : pour la <b>personne</b> (valable 7 ans, remise à niveau périodique).","Nouvelles catégories : <b>A1</b> (tout), <b>A2</b> (< 3 kg), <b>B</b> (CO₂), <b>C</b> (ammoniac), <b>D</b> (récupération < 3 kg), <b>E</b> (contrôle d'étanchéité) ; <b>V</b> pour la clim des véhicules."]},
    {h:"Les contrôles d'étanchéité (HFC)",l:["≥ <b>5 t éq. CO₂</b> : tous les <b>12 mois</b> (24 avec détection permanente).","≥ <b>50 t</b> : tous les <b>6 mois</b> (12 avec détection).","≥ <b>500 t</b> : tous les <b>3 mois</b> (6 avec détection), et détection permanente <b>obligatoire</b>.","HFO : mêmes fréquences à partir de <b>1 kg</b>, <b>10 kg</b> et <b>100 kg</b>."]},
    {h:"Fuites, registre, traçabilité",l:["Une fuite se répare <b>sans délai</b>, puis on recontrôle entre <b>24 h de fonctionnement</b> et <b>1 mois</b> après.","Chaque manipulation : <b>fiche d'intervention Cerfa 15497*04</b>.","Les fluides récupérés sont des déchets suivis par <b>BSFF</b> sur <b>Trackdéchets</b>."]},
    {h:"Les interdictions",l:["<b>Dégazage</b> : toujours interdit ; on récupère tout, HFO compris.","HCFC (R22) : plus de recharge.","Entretien avec du fluide <b>neuf</b> à PRP ≥ 2 500 : interdit (clim et PAC depuis 2026). Fluide <b>régénéré</b> PRP ≥ 2 500 : interdit en 2030 (froid) et 2032 (clim, PAC).","Mise sur le marché d'équipements neufs à HFC : interdictions progressives jusqu'en 2035."]}],
 k:["Attestation d'aptitude","Attestation de capacité","Contrôle d'étanchéité","Fiche d'intervention","BSFF","Dégazage"]});

C.fiches.reglementation={
 intro:"Les fluides fluorés sont de puissants gaz à effet de serre : leur manipulation est très encadrée. Depuis le 11 mars 2024, c'est le règlement européen 2024/573, dit « F-Gas III », qui s'applique, complété en France par le Code de l'environnement et de nouveaux arrêtés sur les attestations (fin 2025). C'est aussi le cœur de l'examen de l'attestation d'aptitude.",
 s:[
  {p:"Deux attestations différentes. L'<b>attestation de capacité</b> est délivrée à l'<b>entreprise</b> par un organisme agréé : sans elle, l'entreprise ne peut pas manipuler de fluides ni en acheter. L'<b>attestation d'aptitude</b> est délivrée à la <b>personne</b> après un examen théorique et pratique. Le nouveau cadre crée six catégories : <b>A1</b> (toutes les opérations sur les fluides fluorés et les hydrocarbures, sans limite de charge), <b>A2</b> (pareil, pour les équipements de moins de 3 kg, ou de moins de 6 kg s'ils sont hermétiquement scellés), <b>B</b> (CO₂), <b>C</b> (ammoniac), <b>D</b> (récupération sur les petites charges), <b>E</b> (contrôle d'étanchéité sans ouvrir le circuit). La catégorie <b>V</b> (climatisation des véhicules) est maintenue.",
   fig:{type:"flux",legende:"Correspondance entre anciennes et nouvelles catégories",etapes:[["Catégorie I","→ A1"],["Catégorie II","→ A2"],["Catégorie III","→ D"],["Catégorie IV","→ E"],["Catégorie V (véhicules)","maintenue"]]},
   info:"La nouvelle attestation d'aptitude est valable 7 ans. Les titulaires des anciennes attestations doivent suivre une remise à niveau au plus tard le 12 mars 2029. Le calendrier de transition précis est fixé par les arrêtés de novembre 2025 : renseigne-toi auprès de ton centre d'examen.",
   q:["L'attestation d'aptitude est délivrée…",["À la personne","À l'entreprise","Au client","À l'équipement"],0,"L'attestation de capacité, elle, concerne l'entreprise."]},
  {p:"Les équipements contenant des HFC à partir de <b>5 tonnes équivalent CO₂</b> doivent être contrôlés régulièrement. La fréquence dépend de la charge, et elle est <b>divisée par deux</b> (intervalle doublé) si un système de <b>détection permanente</b> des fuites est installé. À partir de 500 t, ce système est obligatoire. Nouveauté de F-Gas III : les <b>HFO</b> sont aussi concernés, avec des seuils en kilogrammes (1, 10 et 100 kg). Les équipements <b>hermétiquement scellés</b> des logements contenant moins de 3 kg n'ont pas de contrôle obligatoire.",
   fig:{type:"barres",legende:"Intervalle entre deux contrôles d'étanchéité, sans détection permanente",items:[["5 à 50 t éq. CO₂ (HFO : 1 à 10 kg)",12,"mois","#2ed47a"],["50 à 500 t éq. CO₂ (HFO : 10 à 100 kg)",6,"mois","#ffc83d"],["500 t éq. CO₂ et plus (HFO : 100 kg et plus)",3,"mois","#ff5470"]]},
   ex:"Une chambre froide contient 15 kg de R404A : 15 × 3 922 ÷ 1 000 = 58,8 t éq. CO₂. Contrôle tous les 6 mois, ou tous les 12 mois avec un détecteur permanent.",
   q:["Une installation de 60 t éq. CO₂ sans détection permanente est contrôlée tous les…",["6 mois","12 mois","3 mois","24 mois"],0,"Entre 50 et 500 t éq. CO₂ : tous les 6 mois."]},
  {p:"Une fuite détectée doit être <b>réparée sans délai</b>. L'étanchéité est ensuite recontrôlée au plus tôt après <b>24 heures de fonctionnement</b> et au plus tard <b>un mois</b> après la réparation. L'exploitant tient un <b>registre</b> des interventions et des mouvements de fluide. Chaque opération (charge, récupération, contrôle d'étanchéité) donne lieu à une <b>fiche d'intervention</b> : le Cerfa <b>15497*04</b>. Le fluide récupéré est un déchet dangereux : il est suivi par un <b>bordereau de suivi des fluides frigorigènes (BSFF)</b>, dématérialisé sur la plateforme nationale <b>Trackdéchets</b> depuis le 1er janvier 2023.",
   fig:{type:"flux",legende:"La traçabilité d'une intervention",etapes:["Intervention sur le circuit","Fiche d'intervention Cerfa 15497*04","Fluide récupéré → bouteille de récupération","BSFF sur Trackdéchets","Retour au distributeur : régénération ou destruction"]},
   q:["Après réparation d'une fuite, quand recontrôle-t-on l'étanchéité ?",["Entre 24 h de fonctionnement et 1 mois après","Dans l'année","Jamais","Immédiatement, avant de remettre en route"],0,"C'est ce que prévoit le règlement F-Gas III."]},
  {p:"Le <b>dégazage</b> (relâcher volontairement du fluide dans l'air) est interdit : on récupère tout, y compris les HFO. Les HCFC comme le R22 ne peuvent plus être rechargés. Pour l'entretien, les fluides <b>neufs</b> à PRP supérieur ou égal à 2 500 (comme le R404A) sont interdits, en clim et PAC depuis 2026 ; les fluides <b>régénérés</b> à PRP ≥ 2 500 le seront en 2030 pour le froid et en 2032 pour la clim et les PAC. Enfin, la mise sur le marché d'équipements neufs à HFC est interdite progressivement : par exemple, les monoblocs de 12 kW au plus à PRP ≥ 150 depuis 2027, les splits air/air de 12 kW au plus à PRP ≥ 150 en 2029, et tous les splits de 12 kW au plus utilisant des gaz fluorés en 2035 (avec des exceptions liées à la sécurité).",
   fig:{type:"flux",legende:"Quelques échéances F-Gas III",etapes:[["2026","fluide neuf PRP ≥ 2 500 interdit pour l'entretien clim/PAC"],["2027","monoblocs ≤ 12 kW à PRP ≥ 150"],["2029","splits air/air ≤ 12 kW à PRP ≥ 150"],["2030","régénéré PRP ≥ 2 500 interdit en froid"],["2032","régénéré PRP ≥ 2 500 interdit en clim/PAC"],["2035","splits ≤ 12 kW : plus de gaz fluorés"]]},
   att:"La réparation et l'entretien des équipements existants restent autorisés, à condition de ne pas augmenter la puissance ni la charge, et de ne pas passer à un fluide de PRP plus élevé.",
   q:["Le dégazage volontaire est…",["Interdit","Autorisé en dessous de 2 kg","Autorisé avec le CO₂","Autorisé en extérieur"],0,"On récupère toujours le fluide."]}
 ],
 retenir:["Capacité = entreprise (5 ans) ; aptitude = personne (7 ans) : A1, A2, B, C, D, E (+ V).","Contrôles HFC : 5 t → 12 mois, 50 t → 6 mois, 500 t → 3 mois (doublés avec détection) ; HFO : 1, 10, 100 kg.","Fuite réparée sans délai, recontrôle entre 24 h et 1 mois.","Cerfa 15497*04 à chaque manipulation ; BSFF sur Trackdéchets.","Dégazage interdit ; PRP ≥ 2 500 interdit pour l'entretien ; équipements à HFC interdits progressivement."]
};

C.lexique.push(
 ["Attestation d'aptitude","Certificat personnel obligatoire pour manipuler les fluides frigorigènes (catégories A1, A2, B, C, D, E, V)."],
 ["Attestation de capacité","Certificat de l'entreprise qui l'autorise à intervenir sur les équipements frigorifiques."],
 ["Contrôle d'étanchéité","Recherche de fuites obligatoire et périodique selon la charge en t éq. CO₂ (ou en kg pour les HFO)."],
 ["Fiche d'intervention","Cerfa 15497*04 à remplir à chaque manipulation de fluide (charge, récupération, contrôle)."],
 ["BSFF","Bordereau de Suivi des Fluides Frigorigènes : traçabilité du fluide récupéré, sur la plateforme Trackdéchets."],
 ["Dégazage","Rejet volontaire de fluide dans l'atmosphère. Strictement interdit."],
 ["F-Gas","Règlement européen sur les gaz à effet de serre fluorés ; version en vigueur : 2024/573 (F-Gas III)."],
 ["Trackdéchets","Plateforme nationale de traçabilité des déchets dangereux, obligatoire pour les fluides récupérés depuis 2023."]
);

C.quiz.push(
 ["reglementation","La catégorie V de l'attestation concerne…",["La climatisation des véhicules","Tous les équipements","Les chambres froides","Les PAC uniquement"],0,"Catégorie V = véhicules."],
 ["reglementation","La nouvelle catégorie A1 permet…",["Toutes les opérations, sans limite de charge, sur fluides fluorés et hydrocarbures","Seulement le contrôle d'étanchéité","Seulement les véhicules","Seulement la récupération"],0,"Elle remplace l'ancienne catégorie I."],
 ["reglementation","Quelle catégorie pour intervenir sur une installation au CO₂ ?",["B","A2","D","E"],0,"B = R744 (CO₂) ; C = R717 (ammoniac)."],
 ["reglementation","La catégorie E permet…",["Le contrôle d'étanchéité sans ouvrir le circuit","Toutes les opérations","La récupération","Le brasage"],0,"Elle remplace l'ancienne catégorie IV."],
 ["reglementation","À partir de quelle charge le contrôle d'étanchéité est-il obligatoire pour un HFC ?",["5 t éq. CO₂","2 kg","50 t éq. CO₂","1 t éq. CO₂"],0,"Seuil : 5 tonnes équivalent CO₂."],
 ["reglementation","À partir de quelle charge un équipement au HFO (R1234ze par exemple) est-il soumis au contrôle d'étanchéité ?",["1 kg","5 kg","10 t éq. CO₂","Jamais"],0,"F-Gas III étend les contrôles aux HFO, avec des seuils en kg."],
 ["reglementation","Le détecteur de fuite permanent est obligatoire à partir de…",["500 t éq. CO₂","5 t éq. CO₂","50 t éq. CO₂","2 kg"],0,"≥ 500 t éq. CO₂ (ou 100 kg pour les HFO)."],
 ["reglementation","Une installation de 20 t éq. CO₂ avec détection permanente est contrôlée tous les…",["24 mois","12 mois","6 mois","3 mois"],0,"5 à 50 t : 12 mois, doublé à 24 avec détection."],
 ["reglementation","Le fluide récupéré est suivi par…",["Un BSFF sur Trackdéchets","Un ticket de caisse","Rien","Un permis de feu"],0,"C'est un déchet dangereux."],
 ["reglementation","Quel Cerfa pour la fiche d'intervention ?",["15497*04","2042","13750","10101"],0,"Version 04, mise à jour en 2024."],
 ["reglementation","Depuis 2026, pour l'entretien d'une clim, un fluide neuf de PRP 3 922 (R404A) est…",["Interdit","Autorisé","Obligatoire","Autorisé jusqu'à 2 kg"],0,"PRP ≥ 2 500 interdit pour l'entretien."],
 ["reglementation","Un petit climatiseur hermétiquement scellé de 1,5 kg dans un logement doit-il avoir un contrôle d'étanchéité périodique ?",["Non : hermétiquement scellé, moins de 3 kg, en logement","Oui, tous les 3 mois","Oui, tous les 6 mois","Oui, chaque semaine"],0,"F-Gas III exempte les équipements hermétiquement scellés de moins de 3 kg dans les bâtiments résidentiels."]
);

C.vf.push(
 ["Le dégazage est autorisé pour les petites charges.",false,"Il est toujours interdit."],
 ["L'attestation d'aptitude est personnelle.",true,"Elle est délivrée au technicien."],
 ["Les HFO sont soumis aux contrôles d'étanchéité depuis F-Gas III.",true,"Avec des seuils en kg (1, 10, 100 kg)."],
 ["Un détecteur de fuite permanent double l'intervalle entre deux contrôles.",true,"12 → 24 mois, 6 → 12 mois, 3 → 6 mois."],
 ["Le BSFF papier est toujours la règle.",false,"Il est dématérialisé sur Trackdéchets depuis 2023."],
 ["Après une réparation de fuite, on recontrôle au plus tard un mois après.",true,"Et au plus tôt après 24 h de fonctionnement."]
);
