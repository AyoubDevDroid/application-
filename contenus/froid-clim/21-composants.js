/* NIVEAU 2 — Les composants principaux */
C.modules.push({id:"composants",n:2,i:"⚙️",t:"Compresseurs, échangeurs et détendeurs",d:"Technologies, rôle, réglages",
 s:[{h:"Les compresseurs",l:["<b>À piston</b> : robuste, froid commercial.","<b>Rotatif</b> : petites clims.","<b>Scroll</b> (spirales) : clims, PAC, froid commercial ; silencieux.","<b>À vis</b> : grosses puissances.","<b>Hermétique</b> (soudé), <b>semi-hermétique</b> (démontable), <b>ouvert</b> (moteur séparé)."]},
    {h:"Condenseurs et évaporateurs",l:["À <b>air</b> (ventilé, à ailettes) ou à <b>eau</b> (à plaques, multitubulaire).","Évaporateur ventilé : chambres froides et unités intérieures.","Les ailettes doivent rester <b>propres et droites</b>."]},
    {h:"Les détendeurs",l:["<b>Capillaire</b> : tube fin, petites machines, pas de réglage.","<b>Thermostatique</b> : un bulbe sur l'aspiration règle l'ouverture pour garder une surchauffe constante.","<b>Électronique</b> : piloté par un régulateur avec sondes de pression et de température."]},
    {h:"Le compresseur inverter",l:["La vitesse varie selon le besoin (variateur de fréquence).","Moins d'arrêts-démarrages, meilleur rendement saisonnier.","Électronique de puissance sensible : attention aux mesures."]}],
 k:["Compresseur scroll","Compresseur hermétique","Détendeur thermostatique","Bulbe","Inverter"]});

C.fiches.composants={
 intro:"Derrière les quatre organes du cycle se cachent de nombreuses technologies. Savoir les reconnaître, c'est savoir comment elles tombent en panne et comment les régler. Ce module te présente celles que tu rencontreras le plus souvent en clim, en pompe à chaleur et en froid commercial.",
 s:[
  {p:"Le compresseur est l'organe le plus cher du circuit. Le <b>piston</b> fonctionne comme un moteur de voiture à l'envers. Le <b>rotatif</b> (à piston roulant) équipe beaucoup de petits splits. Le <b>scroll</b> utilise deux spirales emboîtées, l'une fixe, l'autre en mouvement orbital : il est silencieux et efficace. La <b>vis</b> sert aux grandes puissances. Selon la construction, il est <b>hermétique</b> (moteur et compresseur dans une coque soudée, non réparable), <b>semi-hermétique</b> (boulonné, réparable) ou <b>ouvert</b> (moteur séparé, entraînement par courroie ou accouplement).",
   fig:{type:"cycle",centre:"Technologies de compresseur",etapes:[["Piston<br>froid commercial","#ff8a3d"],["Rotatif<br>petits splits","#ffc83d"],["Scroll<br>clim, PAC","#3db5ff"],["Vis<br>grosses puissances","#b18cff"]]},
   att:"Un compresseur scroll triphasé qui tourne à l'envers fait beaucoup de bruit et ne comprime pas (BP et HP égales) : permuter deux phases. Ne pas le laisser tourner longtemps dans ce sens.",
   q:["Un compresseur dont la coque est soudée et non démontable est…",["Hermétique","Semi-hermétique","Ouvert","À vis"],0,"Hermétique : on remplace le compresseur entier."]},
  {p:"Le <b>condenseur</b> et l'<b>évaporateur</b> sont des échangeurs. À air, ce sont des batteries de tubes en cuivre avec des ailettes en aluminium et un ventilateur. À eau, ce sont des échangeurs à plaques ou multitubulaires. Leur efficacité dépend de leur propreté : un condenseur couvert de poussière fait monter la HP ; un évaporateur encrassé ou givré fait baisser la BP.",
   ex:"Peigne à ailettes : tu redresses les ailettes écrasées d'un condenseur pour que l'air passe à nouveau. Puis nettoyage au produit adapté et rinçage à basse pression.",
   q:["Un condenseur à air très encrassé provoque…",["Une HP trop haute","Une BP trop haute","Une HP trop basse","Rien"],0,"La chaleur s'évacue mal, la condensation monte."]},
  {p:"Le <b>détendeur thermostatique</b> est le plus répandu en froid commercial. Son <b>bulbe</b>, fixé sur le tube d'aspiration à la sortie de l'évaporateur, contient un fluide dont la pression pousse sur une membrane : si l'aspiration se réchauffe (surchauffe qui monte), il ouvre plus. Il maintient ainsi une surchauffe à peu près constante, réglable par une vis. Sur les évaporateurs à forte perte de charge, on utilise un détendeur à <b>égalisation externe</b>. Le <b>capillaire</b> est un simple tube fin, sans réglage. Le <b>détendeur électronique</b> est piloté par un régulateur.",
   fig:{type:"flux",legende:"Comment réagit un détendeur thermostatique",etapes:[["L'aspiration se réchauffe","surchauffe ↑"],["Le bulbe chauffe","sa pression ↑"],["La membrane pousse","le détendeur s'ouvre"],["Plus de fluide dans l'évaporateur","surchauffe ↓"]]},
   att:"Un bulbe mal fixé ou mal isolé mesure une température fausse : le détendeur s'ouvre trop et peut envoyer du liquide au compresseur. Bulbe serré au collier, bien en contact, et isolé.",
   q:["Que règle un détendeur thermostatique ?",["La surchauffe","La pression de condensation","La vitesse du compresseur","Le sous-refroidissement"],0,"Il dose le fluide pour garder une surchauffe constante."]},
  {p:"Les compresseurs <b>inverter</b> sont alimentés par un variateur de fréquence : leur vitesse s'adapte au besoin. La machine démarre en douceur, s'arrête moins souvent et consomme moins sur une saison. Revers : une électronique de puissance (redresseur, bus continu, condensateurs chargés) qui demande des précautions et des codes défaut à savoir lire dans la notice.",
   att:"Les condensateurs d'une carte inverter peuvent rester chargés plusieurs minutes après la coupure. Attendre le temps indiqué par le fabricant et vérifier l'absence de tension avant de toucher.",
   q:["Avantage principal d'un compresseur inverter ?",["Il adapte sa vitesse au besoin et consomme moins","Il est plus simple à dépanner","Il n'a pas d'électronique","Il ne demande pas de fluide"],0,"Moins de cycles marche/arrêt, meilleur rendement saisonnier."]}
 ],
 retenir:["Piston, rotatif, scroll, vis ; hermétique, semi-hermétique, ouvert.","Échangeurs propres : condenseur sale → HP haute ; évaporateur sale → BP basse.","Détendeur thermostatique : le bulbe maintient la surchauffe ; capillaire sans réglage ; électronique piloté.","Inverter : vitesse variable, condensateurs chargés après coupure."]
};

C.lexique.push(
 ["Compresseur scroll","Compresseur à deux spirales emboîtées, silencieux et efficace (clim, PAC)."],
 ["Compresseur hermétique","Compresseur dont le moteur et la partie mécanique sont enfermés dans une coque soudée."],
 ["Détendeur thermostatique","Détendeur dont l'ouverture est commandée par un bulbe fixé sur l'aspiration, pour garder une surchauffe constante."],
 ["Bulbe","Petit réservoir du détendeur thermostatique, fixé sur le tube d'aspiration, qui mesure sa température."],
 ["Capillaire","Tube de très petit diamètre servant de détendeur fixe sur les petites machines."],
 ["Inverter","Technologie de compresseur à vitesse variable, alimenté par un variateur de fréquence."]
);

C.quiz.push(
 ["composants","Quel compresseur utilise deux spirales ?",["Le scroll","Le piston","La vis","Le rotatif"],0,"Une spirale fixe, une spirale orbitale."],
 ["composants","Où se fixe le bulbe d'un détendeur thermostatique ?",["Sur le tube d'aspiration, en sortie d'évaporateur","Sur la ligne liquide","Sur le compresseur","Dans la chambre froide, à l'air"],0,"Il mesure la température de la vapeur qui sort de l'évaporateur."],
 ["composants","Un détendeur capillaire se règle…",["Il ne se règle pas","Avec une vis","Avec un régulateur","Avec le bulbe"],0,"C'est un tube calibré : la charge en fluide doit être exacte."],
 ["composants","Un compresseur semi-hermétique est…",["Démontable et réparable","Soudé","Toujours à vis","Toujours ouvert"],0,"Ses carters sont boulonnés."],
 ["composants","Scroll triphasé bruyant, BP et HP égales : cause probable ?",["Il tourne à l'envers","Il manque d'huile","Le bulbe est mal fixé","Le condenseur est sale"],0,"Permuter deux phases."],
 ["composants","Pourquoi isoler le bulbe du détendeur ?",["Pour qu'il mesure la température du tube, pas celle de l'air","Pour le protéger du vol","Pour faire joli","Pour le chauffer"],0,"Sinon le détendeur se règle sur une température fausse."]
);

C.vf.push(
 ["Un compresseur hermétique se répare en ouvrant sa coque.",false,"Il est soudé : on le remplace."],
 ["Le détendeur thermostatique maintient une surchauffe à peu près constante.",true,"C'est son rôle."],
 ["Les condensateurs d'une carte inverter peuvent rester chargés après la coupure.",true,"Attendre et vérifier l'absence de tension."]
);
