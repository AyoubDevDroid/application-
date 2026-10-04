/* NIVEAU 1 — L'outillage de l'électricien */
C.modules.push({id:"outils",n:1,i:"🧰",t:"L'outillage",d:"Outils à main, électroportatif, instruments, connexions",
 s:[{h:"Les outils à main",l:["<b>Tournevis isolés</b> plats et cruciformes (marqués double triangle + 1 000 V).","<b>Pince à dénuder</b>, <b>pince coupante</b>, <b>pince universelle</b>, <b>couteau d'électricien</b>.","<b>Tire-fil</b> (aiguille) pour passer les fils dans les conduits."]},
    {h:"L'électroportatif",l:["<b>Perforateur</b> (SDS) pour le béton, <b>perceuse-visseuse</b> pour le bois et la fixation.","<b>Scie cloche</b> Ø 67 mm pour les boîtes en cloison sèche.","<b>Rainureuse</b> avec aspiration pour les saignées.","<b>Niveau laser</b> pour aligner prises et interrupteurs."]},
    {h:"Les instruments de mesure",l:["<b>VAT</b> : vérifier l'absence de tension.","<b>Multimètre</b> : tension, continuité, résistance.","<b>Pince ampèremétrique</b> : courant sans ouvrir le circuit.","<b>Contrôleur d'installation</b> : isolement, terre, différentiels."]},
    {h:"Les connexions",l:["<b>Bornes automatiques</b> (à levier ou à enfichage) dans les boîtes.","<b>Embouts de câblage</b> sur les fils souples serrés dans une borne à vis.","Toute connexion doit rester <b>accessible</b> (boîte avec couvercle)."]}],
 k:["Tire-fil","Bornes automatiques","Embout de câblage","Multimètre","Scie cloche"]});

C.fiches.outils={
 intro:"Un électricien se reconnaît à sa caisse à outils. Les bons outils font gagner du temps, mais surtout ils protègent : un tournevis isolé, un VAT fiable et une bonne pince à dénuder évitent des accidents et des malfaçons. Voici ce qu'il faut connaître et savoir choisir.",
 s:[
  {p:"Les outils à main de l'électricien sont <b>isolés</b> : leur manche et leur tige sont recouverts d'un isolant testé à 10 000 V pour un usage jusqu'à <b>1 000 V</b>. On les reconnaît au symbole <b>double triangle</b>. La pince à dénuder doit enlever l'isolant <b>sans entailler le cuivre</b> : un fil entaillé casse et chauffe.",
   ex:"Pour un fil de 2,5 mm² qui va dans une borne automatique, on dénude la longueur indiquée sur la borne (souvent 11 à 12 mm). Trop court : mauvais contact. Trop long : cuivre nu qui dépasse.",
   att:"Un tournevis ordinaire avec du ruban adhésif autour n'est pas un outil isolé. Seul le marquage double triangle + 1 000 V compte.",
   q:["Que garantit le symbole « double triangle » sur un tournevis ?",["Un outil isolé pour travailler jusqu'à 1 000 V","Un outil en acier renforcé","Un outil pour gaucher","Un outil magnétique"],0,"Double triangle = outil isolé, conforme pour les travaux électriques jusqu'à 1 000 V."]},
  {p:"Pour encastrer, on choisit l'outil selon le support. Dans le <b>béton</b> et la <b>brique</b> : perforateur et rainureuse. Dans les <b>cloisons sèches</b> (plaques de plâtre) : scie cloche de <b>67 mm</b>, qui correspond au diamètre standard des boîtes d'encastrement. Le <b>niveau laser</b> permet d'aligner toutes les boîtes d'une pièce à la même hauteur.",
   fig:{type:"barres",legende:"Diamètres courants",items:[["Boîte d'encastrement standard",67,"mm"],["Boîte DCL de plafond",67,"mm"],["Conduit ICTA courant",20,"mm"]]},
   q:["Quel diamètre de scie cloche pour une boîte d'encastrement standard ?",["67 mm","32 mm","100 mm","20 mm"],0,"67 mm, le standard des boîtes d'appareillage."]},
  {p:"Chaque instrument a son rôle et on ne les mélange pas. Le <b>VAT</b> sert uniquement à vérifier l'absence de tension avant d'intervenir. Le <b>multimètre</b> mesure (tension, continuité, résistance). La <b>pince ampèremétrique</b> mesure le courant. Le <b>contrôleur d'installation</b> fait les essais de fin de chantier (isolement, terre, différentiels).",
   fig:{type:"cycle",centre:"Un instrument = un rôle",etapes:[["VAT<br>absence de tension","#ff5470"],["Multimètre<br>U, Ω, continuité","#ffc83d"],["Pince<br>courant","#3db5ff"],["Contrôleur<br>isolement, terre, DDR","#2ed47a"]]},
   info:"Les instruments ont une <b>catégorie de mesure</b> (CAT II, III, IV). Plus elle est élevée, plus l'appareil résiste aux surtensions. Pour un tableau, il faut au moins CAT III.",
   q:["Pour vérifier l'absence de tension avant de travailler, on utilise…",["Le VAT","Le multimètre","La pince ampèremétrique","Le tournevis testeur"],0,"Le VAT est l'appareil prévu pour ça. Le tournevis testeur n'est pas fiable."]},
  {p:"Une mauvaise connexion est la première cause d'échauffement et d'incendie d'origine électrique. Dans les boîtes, on utilise des <b>bornes automatiques</b> (à levier pour tous les fils, à enfichage pour les fils rigides). Sur un fil <b>souple</b> serré dans une borne à vis, on sertit un <b>embout de câblage</b> pour que tous les brins soient tenus. Toutes les connexions doivent rester <b>accessibles</b> : jamais de domino noyé dans le plâtre.",
   ex:"Dans une boîte de dérivation, tu raccordes 3 fils de phase avec une borne à levier 3 entrées : tu dénudes à la longueur gravée sur la borne, tu ouvres le levier, tu enfonces, tu refermes et tu tires sur chaque fil pour vérifier.",
   att:"Un fil souple sans embout dans une borne à vis : quelques brins s'écartent, le contact est mauvais, la borne chauffe.",
   q:["Pourquoi mettre un embout sur un fil souple ?",["Pour que tous les brins soient serrés dans la borne","Pour l'isoler","Pour changer sa couleur","Pour le rallonger"],0,"L'embout regroupe les brins : contact franc, pas de brin qui s'échappe."]}
 ],
 retenir:["Outils isolés : double triangle + 1 000 V.","Scie cloche 67 mm pour les boîtes en cloison sèche.","VAT pour la sécurité, multimètre pour mesurer, pince pour le courant.","Connexions : bornes automatiques ou embouts, toujours accessibles."]
};

C.lexique.push(
 ["Multimètre","Appareil de mesure : tension, intensité, résistance, continuité."],
 ["Tire-fil","Ruban (ou aiguille) qu'on pousse dans un conduit pour y tirer les fils."],
 ["Bornes automatiques","Connecteurs sans vis (à levier ou à enfichage) pour raccorder les fils dans une boîte."],
 ["Embout de câblage","Petit tube métallique serti sur l'extrémité d'un fil souple pour bien le serrer dans une borne."],
 ["Scie cloche","Scie circulaire montée sur perceuse pour découper un trou rond (67 mm pour une boîte d'encastrement)."],
 ["Rainureuse","Machine à deux disques qui creuse les saignées dans les murs pour encastrer les conduits."],
 ["Catégorie de mesure","Classement (CAT II, III, IV) d'un instrument selon sa résistance aux surtensions. CAT III minimum pour un tableau."]
);

C.quiz.push(
 ["outils","Quel outil pour passer des fils dans un conduit déjà posé ?",["Le tire-fil","La pince coupante","Le niveau laser","Le marteau"],0,"Le tire-fil (aiguille) se pousse dans le conduit, puis on y accroche les fils."],
 ["outils","Pour percer du béton, on utilise…",["Un perforateur","Une scie cloche à bois","Un tournevis","Une pince"],0,"Le perforateur (SDS) frappe en tournant : idéal pour le béton."],
 ["outils","Un fil souple serré dans une borne à vis doit recevoir…",["Un embout de câblage","Du ruban adhésif","De la soudure à l'étain","Rien"],0,"L'embout garantit que tous les brins sont serrés."],
 ["outils","Une connexion dans une boîte doit toujours être…",["Accessible","Noyée dans le plâtre","Collée au mastic","Cachée derrière un meuble fixe"],0,"Toute connexion doit pouvoir être vérifiée : boîte avec couvercle accessible."],
 ["outils","Quel instrument mesure le courant sans ouvrir le circuit ?",["La pince ampèremétrique","Le VAT","Le mégohmmètre","Le niveau laser"],0,"La pince mesure le champ magnétique autour d'un conducteur."],
 ["outils","Pour mesurer dans un tableau électrique, un multimètre doit être au minimum…",["CAT III","CAT I","Sans catégorie","CAT 0"],0,"CAT III minimum pour les tableaux de distribution."],
 ["outils","Une pince à dénuder mal réglée qui entaille le cuivre provoque…",["Un point faible qui peut casser et chauffer","Rien de grave","Une meilleure conduction","Un fil plus souple"],0,"Le cuivre entaillé a une section réduite : il chauffe et casse."]
);

C.vf.push(
 ["Un tournevis testeur (avec voyant) remplace un VAT.",false,"Il n'est pas fiable : seul le VAT est prévu pour vérifier l'absence de tension."],
 ["Les connexions par domino noyées dans le plâtre sont autorisées.",false,"Toutes les connexions doivent rester accessibles."],
 ["Le niveau laser permet d'aligner les boîtes d'une pièce.",true,"Il projette une ligne parfaitement horizontale sur tous les murs."]
);
