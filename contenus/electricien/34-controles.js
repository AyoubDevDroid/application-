/* NIVEAU 3 — Contrôles et mise en service */
C.modules.push({id:"controles",n:3,i:"✅",t:"Contrôles et mise en service",d:"Autocontrôle, isolement, terre, différentiels, Consuel",
 s:[{h:"L'autocontrôle",l:["Avant de remettre une installation, l'électricien <b>contrôle son propre travail</b>.","Contrôle visuel : serrages, repérage, absence de cuivre apparent, couvercles posés.","Puis des <b>mesures</b> avec un contrôleur d'installation."]},
    {h:"Les mesures hors tension",l:["<b>Continuité</b> des conducteurs de protection (terre) jusqu'à chaque prise.","<b>Isolement</b> sous <b>500 V continu</b> entre conducteurs actifs et terre.","Valeur mini : <b>0,5 MΩ</b> pour les circuits jusqu'à 500 V."]},
    {h:"Les mesures sous tension",l:["<b>Résistance de la prise de terre</b> (≤ 100 Ω en logement).","<b>Test des différentiels</b> : seuil (entre IΔn/2 et IΔn) et temps de coupure.","<b>Polarité</b> des prises et fonctionnement de chaque circuit."]},
    {h:"La conformité",l:["Installation neuve ou rénovée totalement : une <b>attestation de conformité</b> visée par le <b>Consuel</b> est exigée avant la mise en service par le distributeur.","On remet au client : schémas, notices, explications."]}],
 k:["Autocontrôle","Mesure d'isolement","Mégohmmètre","Consuel"]});

C.fiches.controles={
 intro:"Une installation qui « marche » n'est pas forcément sûre. Une terre coupée, un isolant abîmé par un clou, un différentiel défectueux ne se voient pas à l'usage : ils se mesurent. Les contrôles de fin de chantier sont la signature d'un électricien sérieux, et ils sont exigés pour obtenir l'attestation de conformité.",
 s:[
  {p:"L'<b>autocontrôle</b> commence par les yeux et les mains : chaque borne serrée (on tire sur les fils), chaque circuit repéré, aucun cuivre apparent, tous les couvercles de boîtes posés, les sections et calibres conformes au schéma. Ensuite viennent les mesures, dans un ordre logique : d'abord <b>hors tension</b>, puis <b>sous tension</b>.",
   fig:{type:"flux",legende:"Ordre des contrôles",etapes:["Contrôle visuel","Continuité des conducteurs de protection (hors tension)","Isolement (hors tension)","Mise sous tension circuit par circuit","Terre, différentiels, polarité, essais de fonctionnement"]},
   q:["Pourquoi mesurer l'isolement avant de mettre sous tension ?",["Pour détecter un défaut avant qu'il ne fasse des dégâts","Parce que c'est plus rapide","Ce n'est pas nécessaire","Pour charger les câbles"],0,"Un clou dans un câble se trouve avant la mise sous tension, pas après."]},
  {p:"La <b>continuité de la terre</b> se mesure entre la borne principale de terre et la borne de terre de chaque prise, de chaque point lumineux et des masses : la résistance doit être très faible (quelques dixièmes d'ohm à 2 Ω selon la longueur). La <b>mesure d'isolement</b> se fait au <b>mégohmmètre</b>, circuit hors tension, appareils sensibles débranchés : on applique <b>500 V continu</b> entre les conducteurs actifs (reliés ensemble) et la terre. Plus la résistance est élevée, meilleur est l'isolant.",
   fig:{type:"barres",legende:"Lire une mesure d'isolement (500 V continu)",items:[["Installation saine (courant)",200,"MΩ","#2ed47a"],["Minimum NF C 15-100 (circuits ≤ 500 V)",0.5,"MΩ","#ffc83d"],["Défaut : câble abîmé, humidité",0.08,"MΩ","#ff5470"]]},
   att:"Le mégohmmètre envoie 500 V : on ne le branche jamais sur un circuit sous tension, on prévient les personnes autour, et on débranche les appareils électroniques qui pourraient être abîmés. Après la mesure, le câble peut rester chargé : on le décharge.",
   info:"La NF C 15-100 demande au moins 0,5 MΩ sous 500 V (1 MΩ sous 1 000 V pour les circuits au-delà de 500 V). En pratique, une installation neuve et saine affiche des centaines de MΩ : une valeur proche du minimum mérite déjà qu'on cherche pourquoi.",
   q:["Avec quelle tension mesure-t-on l'isolement d'une installation 230/400 V ?",["500 V continu","230 V alternatif","12 V","1 000 V alternatif"],0,"500 V continu pour les installations jusqu'à 500 V."]},
  {p:"Sous tension, on mesure la <b>résistance de la prise de terre</b> (avec un telluromètre ou la fonction boucle du contrôleur). On teste chaque <b>différentiel</b> avec le contrôleur : un 30 mA doit <b>déclencher entre 15 et 30 mA</b> (entre IΔn/2 et IΔn), et assez vite (300 ms maximum à IΔn pour un différentiel classique). On vérifie aussi la <b>polarité</b> des prises et le fonctionnement de chaque circuit.",
   fig:{type:"barres",legende:"Un différentiel 30 mA en bon état",items:[["Ne doit pas déclencher en dessous de",15,"mA","#3db5ff"],["Doit déclencher au plus tard à",30,"mA","#ffc83d"],["Temps maxi à 30 mA",300,"ms","#ff8a3d"]]},
   ex:"Le contrôleur affiche : déclenchement à 22 mA en 28 ms. Le différentiel est bon. S'il affiche « pas de déclenchement à 30 mA », il est à remplacer.",
   q:["Un différentiel 30 mA doit déclencher…",["Entre 15 et 30 mA","Au-dessus de 30 mA","En dessous de 5 mA","À 500 mA"],0,"Entre IΔn/2 et IΔn."]},
  {p:"Pour une installation <b>neuve</b> (ou entièrement rénovée avec coupure du raccordement), le distributeur ne met en service qu'avec une <b>attestation de conformité</b> visée par le <b>Consuel</b>. Le contrôleur du Consuel peut venir vérifier sur place. En cas de non-conformité, il faut corriger avant d'obtenir le visa. À la fin, on remet au client le <b>dossier</b> : schéma unifilaire, plans, notices, et on lui explique son tableau.",
   ex:"Non-conformités fréquentes : prise dans un volume de la salle de bain, DCL manquant, différentiel de type AC sur la plaque de cuisson, prise de terre trop résistante, tableau sans repérage.",
   q:["Qui vise l'attestation de conformité d'une installation neuve ?",["Le Consuel","Le maire","Le client","Le fabricant du tableau"],0,"Le Consuel vise l'attestation avant la mise en service."]}
 ],
 retenir:["Visuel → continuité PE → isolement (hors tension) → terre, différentiels, polarité (sous tension).","Isolement : 500 V continu, ≥ 0,5 MΩ (circuits ≤ 500 V).","Différentiel 30 mA : déclenche entre 15 et 30 mA, ≤ 300 ms.","Neuf : attestation de conformité visée par le Consuel. Dossier remis au client."]
};

C.lexique.push(
 ["Autocontrôle","Vérification par l'électricien de son propre travail avant la remise de l'installation."],
 ["Mesure d'isolement","Mesure, sous 500 V continu, de la résistance entre conducteurs actifs et terre. Doit être très élevée (MΩ)."],
 ["Mégohmmètre","Appareil qui mesure l'isolement (en mégohms) en appliquant une tension continue élevée."],
 ["Consuel","Organisme qui vise les attestations de conformité des installations électriques avant mise en service."],
 ["Telluromètre","Appareil qui mesure la résistance d'une prise de terre."],
 ["Contrôleur d'installation","Appareil multifonction : continuité, isolement, terre, boucle, test des différentiels."]
);

C.quiz.push(
 ["controles","Quel appareil mesure l'isolement ?",["Le mégohmmètre","Le VAT","La pince ampèremétrique","Le télérupteur"],0,"Le mégohmmètre applique 500 V continu et lit la résistance en MΩ."],
 ["controles","Une mesure d'isolement de 0,08 MΩ indique…",["Un défaut d'isolement","Une installation parfaite","Une terre excellente","Un câble trop gros"],0,"Bien trop bas : il y a une fuite."],
 ["controles","La continuité de la terre se mesure…",["Hors tension, entre la borne principale et chaque prise","Sous tension, avec le VAT","Avec la pince","Au compteur"],0,"Elle vérifie que le fil de terre arrive bien partout."],
 ["controles","Avant une mesure d'isolement, on…",["Consigne le circuit et débranche les appareils sensibles","Laisse tout branché","Met sous tension","Retire la terre"],0,"Le mégohmmètre envoie 500 V : hors tension et sans électronique."],
 ["controles","Le contrôleur affiche : différentiel 30 mA déclenché à 22 mA en 28 ms. Il est…",["Bon","À remplacer","Trop sensible","Trop lent"],0,"Entre 15 et 30 mA, et bien en dessous de 300 ms."],
 ["controles","Le bouton « test » d'un différentiel vérifie…",["Sa mécanique de déclenchement","Son seuil exact en mA","La continuité de la terre","L'isolement"],0,"Il crée une fuite interne : il vérifie que l'appareil déclenche, pas sa valeur exacte."],
 ["controles","Pour une maison neuve, avant la mise en service par le distributeur, il faut…",["Une attestation de conformité visée par le Consuel","Une photo du tableau","Un devis signé","Rien"],0,"C'est obligatoire pour une installation neuve."]
);

C.vf.push(
 ["On peut mesurer l'isolement d'un circuit sous tension.",false,"Jamais : le circuit doit être consigné."],
 ["Plus la résistance d'isolement est élevée, meilleur est l'isolant.",true,"Une bonne installation affiche souvent des centaines de MΩ."],
 ["Un différentiel 30 mA qui ne déclenche pas à 30 mA doit être remplacé.",true,"Il ne protège plus les personnes."],
 ["Le bouton test d'un différentiel mesure son temps de déclenchement.",false,"Il vérifie seulement que la mécanique fonctionne ; le temps se mesure au contrôleur."]
);

C.ordre.push(
 {t:"Mise en service d'une installation neuve",ic:"✅",s:["Contrôle visuel (serrages, repérage)","Continuité des conducteurs de protection","Mesure d'isolement (hors tension)","Mise sous tension circuit par circuit","Mesure de la prise de terre et test des différentiels","Essais de fonctionnement","Explications au client et remise du dossier"]},
 {t:"Mesurer l'isolement d'un circuit",ic:"🔬",s:["Consigner le circuit","Débrancher les appareils sensibles","Relier ensemble phase et neutre","Mesurer à 500 V entre (phase + neutre) et la terre","Comparer à la valeur minimale","Décharger, retirer le pont et reconnecter"]}
);
