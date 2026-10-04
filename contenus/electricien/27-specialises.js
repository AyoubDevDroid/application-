/* NIVEAU 2 — Circuits spécialisés, chauffe-eau et chauffage */
C.modules.push({id:"specialises",n:2,i:"♨️",t:"Chauffe-eau, chauffage et volets",d:"Contacteur heures creuses, fil pilote, volets roulants, VMC",
 s:[{h:"Les circuits spécialisés",l:["Lave-linge, lave-vaisselle, four, sèche-linge, congélateur : <b>2,5 mm² / 20 A</b>.","Plaque de cuisson : <b>6 mm² / 32 A</b> en monophasé.","Volets roulants : <b>1,5 mm² / 16 A</b>. VMC : <b>1,5 mm²</b> protégé en <b>2 A</b>."]},
    {h:"Le chauffe-eau en heures creuses",l:["Circuit <b>2,5 mm² / 20 A</b> qui passe par un <b>contacteur jour/nuit</b>.","Le contacteur est commandé par le signal heures creuses du compteur, via un circuit <b>2 A</b>.","Sélecteur à 3 positions : <b>Auto</b> / <b>0</b> (arrêt) / <b>I</b> (marche forcée)."]},
    {h:"Le chauffage électrique",l:["Section et calibre selon la <b>puissance</b> du circuit.","1,5 mm² → 16 A : jusqu'à <b>3 500 W</b>. 2,5 mm² → 20 A : jusqu'à <b>4 500 W</b>.","Les radiateurs sont de <b>classe II</b> : pas de fil de terre, mais un <b>fil pilote</b>."]},
    {h:"Le fil pilote",l:["Fil (souvent noir) qui transmet les ordres de chauffage au radiateur.","6 ordres : <b>Confort</b>, <b>Éco</b>, <b>Hors-gel</b>, <b>Arrêt</b>, Confort −1 °C, Confort −2 °C.","Commandé par un <b>programmateur</b> ou un gestionnaire d'énergie."]},
    {h:"Volets roulants et VMC",l:["Moteur de volet filaire : <b>neutre</b>, <b>montée</b>, <b>descente</b>, <b>terre</b>.","Commande par <b>inverseur</b> (montée / stop / descente), jamais deux sens en même temps.","La VMC fonctionne en permanence : circuit dédié, sans interrupteur ordinaire."]}],
 k:["Contacteur jour/nuit","Fil pilote","Heures creuses","Inverseur"]});

C.fiches.specialises={
 intro:"Certains appareils demandent plus qu'une simple prise : un chauffe-eau qui ne chauffe que la nuit, des radiateurs qui suivent un programme, des volets qui montent et descendent. Ces circuits ont leurs propres règles et leurs propres pannes. Les maîtriser, c'est savoir câbler (et dépanner) 90 % des logements.",
 s:[
  {p:"Un <b>circuit spécialisé</b> n'alimente qu'un seul appareil. C'est obligatoire pour les appareils puissants, qui risqueraient de surcharger un circuit partagé. Chaque circuit a sa section et sa protection, fixées par la norme.",
   fig:{type:"barres",legende:"Calibre des principaux circuits spécialisés (monophasé)",items:[["Plaque de cuisson — 6 mm²",32,"A","#ff8a3d"],["Lave-linge, four, chauffe-eau — 2,5 mm²",20,"A"],["Volets roulants — 1,5 mm²",16,"A","#3db5ff"],["VMC — 1,5 mm²",2,"A","#2ed47a"]]},
   q:["Quel est le calibre de protection du circuit VMC ?",["2 A","16 A","20 A","32 A"],0,"La VMC consomme très peu : 1,5 mm² protégé en 2 A."]},
  {p:"Le chauffe-eau électrique chauffe pendant les <b>heures creuses</b>, quand l'électricité est moins chère. Pour cela, son circuit (2,5 mm² / 20 A) passe par un <b>contacteur jour/nuit</b>. La bobine de ce contacteur est alimentée par un petit circuit de commande (protégé en <b>2 A</b>) qui passe par un contact du compteur : ce contact se ferme aux heures creuses. Le sélecteur du contacteur a trois positions : <b>Auto</b> (suit les heures creuses), <b>0</b> (arrêt), <b>I</b> (marche forcée, pour avoir de l'eau chaude tout de suite).",
   fig:{type:"flux",legende:"La commande du chauffe-eau en heures creuses",etapes:[["Disjoncteur de commande","2 A"],["Contact heures creuses du compteur","fermé la nuit"],["Bobine du contacteur","A1 – A2"],["Contact de puissance du contacteur","se ferme"],["Chauffe-eau","2,5 mm² / 20 A"]]},
   ex:"Un client n'a plus d'eau chaude. En passant le contacteur sur « I », tu sais en 10 secondes si le problème vient du chauffe-eau (il ne chauffe toujours pas) ou de la commande heures creuses (il chauffe en marche forcée).",
   att:"Après un dépannage, remets toujours le sélecteur sur <b>Auto</b> : en marche forcée, le chauffe-eau chauffe aussi en heures pleines et la facture augmente.",
   q:["Le sélecteur du contacteur jour/nuit est sur « I ». Le chauffe-eau…",["Chauffe en permanence (marche forcée)","Ne chauffe jamais","Chauffe seulement la nuit","Est en panne"],0,"I = marche forcée."]},
  {p:"Les radiateurs électriques sont regroupés sur des <b>circuits de chauffage</b>, dimensionnés selon la puissance totale du circuit. Ils sont presque tous de <b>classe II</b> (double isolation) : ils n'ont pas de fil de terre. Leur câble a 3 fils : <b>phase</b> (marron), <b>neutre</b> (bleu) et <b>fil pilote</b> (noir ou gris).",
   fig:{type:"barres",legende:"Puissance maximale d'un circuit de chauffage en 230 V",items:[["1,5 mm² — disjoncteur 16 A",3500,"W"],["2,5 mm² — disjoncteur 20 A",4500,"W"],["4 mm² — disjoncteur 25 A",5750,"W"],["6 mm² — disjoncteur 32 A",7250,"W"]]},
   ex:"Une pièce avec 2 radiateurs de 1 500 W et 1 de 500 W = 3 500 W : un circuit en 1,5 mm² protégé en 16 A suffit.",
   q:["Trois radiateurs de 1 000 W sur un même circuit, quelle section minimale ?",["1,5 mm² (16 A, jusqu'à 3 500 W)","6 mm²","10 mm²","0,75 mm²"],0,"3 000 W < 3 500 W : 1,5 mm² / 16 A convient."]},
  {p:"Le <b>fil pilote</b> transmet au radiateur l'ordre de fonctionnement, sans couper son alimentation. Le signal est envoyé par un programmateur ou un gestionnaire d'énergie. Il existe 6 ordres. Les 4 principaux : pas de signal = <b>Confort</b> ; alternance complète (230 V) = <b>Éco</b> (environ 3,5 °C de moins) ; demi-alternance négative = <b>Hors-gel</b> ; demi-alternance positive = <b>Arrêt</b> (délestage).",
   fig:{type:"cycle",centre:"Fil pilote : 4 ordres principaux",etapes:[["Confort<br>pas de signal","#ff8a3d"],["Éco<br>alternance complète","#3db5ff"],["Hors-gel<br>½ alternance −","#7be0d0"],["Arrêt<br>½ alternance +","#a9b0d6"]]},
   att:"Le fil pilote est porté à 230 V par le programmateur : on le traite comme une phase. On ne le raccorde jamais à la terre, ni au neutre.",
   info:"Si le fil pilote n'est raccordé à rien, le radiateur reste en Confort : c'est pourquoi un radiateur « qui ne suit pas le programme » a souvent un fil pilote débranché ou coupé.",
   q:["Un radiateur à fil pilote ne reçoit aucun signal. Il est en mode…",["Confort","Éco","Hors-gel","Arrêt"],0,"Pas de signal = Confort."]},
  {p:"Un moteur de volet roulant filaire a 4 fils : un <b>neutre</b> commun (bleu), un fil de <b>montée</b> et un fil de <b>descente</b> (noir et marron), et la <b>terre</b>. La commande se fait par un <b>inverseur</b> qui envoie la phase sur l'un ou l'autre fil, jamais sur les deux à la fois (le moteur serait détruit). Des <b>fins de course</b> dans le moteur l'arrêtent en haut et en bas. La <b>VMC</b>, elle, doit tourner en permanence : son circuit est dédié et n'a pas d'interrupteur ordinaire.",
   att:"On ne branche jamais deux moteurs de volets en parallèle sur le même inverseur sans module adapté : les fins de course de l'un renverraient du courant dans l'autre.",
   q:["Un moteur de volet roulant filaire a combien de fils ?",["4 : neutre, montée, descente, terre","2","3 : phase, neutre, terre","6"],0,"Un neutre commun, deux fils de commande et la terre."]}
 ],
 retenir:["Lave-linge, four, chauffe-eau : 2,5 mm² / 20 A ; plaque : 6 mm² / 32 A ; VMC : 2 A.","Chauffe-eau : contacteur jour/nuit, commande 2 A, sélecteur Auto / 0 / I (remettre sur Auto).","Chauffage : section selon la puissance (1,5 mm² → 3 500 W). Radiateurs classe II, sans terre.","Fil pilote : pas de signal = Confort. Il se traite comme une phase.","Volet : neutre, montée, descente, terre ; inverseur."]
};

C.lexique.push(
 ["Contacteur jour/nuit","Contacteur qui alimente le chauffe-eau pendant les heures creuses ; sélecteur Auto / 0 / I."],
 ["Fil pilote","Fil qui transmet les ordres de fonctionnement (Confort, Éco, Hors-gel, Arrêt…) aux radiateurs."],
 ["Heures creuses","Plages horaires où l'électricité est moins chère ; le compteur envoie un signal pour démarrer le chauffe-eau."],
 ["Inverseur","Interrupteur à deux sens (montée / descente) pour commander un volet roulant."],
 ["Délestage","Coupure automatique temporaire d'un appareil (souvent le chauffage) pour ne pas dépasser la puissance de l'abonnement."]
);

C.quiz.push(
 ["specialises","Quel circuit est protégé par un disjoncteur 2 A ?",["La commande du contacteur heures creuses","Le four","La plaque de cuisson","Les prises"],0,"Le circuit de commande (et la VMC) consomme très peu : 2 A."],
 ["specialises","Que signifie la position « 0 » du contacteur jour/nuit ?",["Arrêt","Marche forcée","Automatique","Heures creuses"],0,"0 = arrêt, I = marche forcée, Auto = heures creuses."],
 ["specialises","Les radiateurs électriques à fil pilote sont généralement de…",["Classe II (sans terre)","Classe I (avec terre)","Classe III","Classe 0"],0,"Double isolation : pas de fil de terre."],
 ["specialises","Quelle est la couleur habituelle du fil pilote ?",["Noir (ou gris)","Bleu","Vert/jaune","Rouge"],0,"Marron = phase, bleu = neutre, noir ou gris = fil pilote."],
 ["specialises","Ordre « Éco » sur le fil pilote : le signal est…",["Une alternance complète (230 V)","Aucun signal","Une demi-alternance positive","Le neutre"],0,"Éco = alternance complète."],
 ["specialises","Jusqu'à quelle puissance un circuit de chauffage en 1,5 mm² / 16 A ?",["3 500 W","1 000 W","7 000 W","10 000 W"],0,"16 A en 230 V ≈ 3 680 W ; la norme retient 3 500 W."],
 ["specialises","Pourquoi un inverseur pour un volet roulant ?",["Pour ne jamais alimenter montée et descente en même temps","Pour économiser de l'énergie","Pour régler la vitesse","Pour le fil pilote"],0,"Alimenter les deux sens à la fois détruirait le moteur."],
 ["specialises","La VMC est commandée par…",["Rien : elle fonctionne en permanence","Un interrupteur ordinaire","Un va-et-vient","Le fil pilote"],0,"La ventilation doit fonctionner en continu."]
);

C.vf.push(
 ["Le fil pilote peut être raccordé à la terre.",false,"Jamais : il porte un signal en 230 V."],
 ["En marche forcée, le chauffe-eau chauffe aussi en heures pleines.",true,"D'où l'importance de remettre le sélecteur sur Auto."],
 ["Un radiateur sans signal sur le fil pilote est en mode Confort.",true,"Pas de signal = Confort."],
 ["Le chauffe-eau peut être branché sur une prise de courant ordinaire partagée.",false,"Il a son circuit spécialisé 2,5 mm² / 20 A, commandé par le contacteur jour/nuit."]
);
