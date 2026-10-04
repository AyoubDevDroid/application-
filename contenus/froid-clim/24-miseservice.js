/* NIVEAU 2 — Mise en service */
C.modules.push({id:"miseservice",n:2,i:"🚀",t:"Mise en service",d:"Essai à l'azote, tirage au vide, charge, réglages",
 s:[{h:"L'essai d'étanchéité",l:["Mise sous pression à l'<b>azote déshydraté</b>, à la pression indiquée par le fabricant (sans dépasser la pression maximale admissible).","Recherche de fuite au produit moussant, puis tenue de la pression dans le temps.","On vide l'azote <b>dehors</b> (l'azote n'est pas un fluide frigorigène)."]},
    {h:"Le tirage au vide",l:["Enlève l'<b>air</b> (incondensable) et l'<b>humidité</b> (elle bout à basse pression).","Vide poussé, contrôlé au <b>vacuomètre</b>, au niveau demandé par le fabricant.","Pompe isolée : le vide doit <b>tenir</b> (pas de remontée)."]},
    {h:"La charge",l:["Toujours <b>au poids</b>, à la balance.","Split : la charge d'usine couvre une longueur de liaison ; au-delà, <b>charge complémentaire</b> (g par mètre).","Mélanges : en phase <b>liquide</b>."]},
    {h:"Démarrage et réglages",l:["Ouvrir les vannes, mettre en route, attendre la stabilisation.","Mesurer surchauffe, sous-refroidissement, intensité, écarts d'air.","Remplir la <b>fiche d'intervention</b> et étiqueter l'installation."]}],
 k:["Tirage au vide","Essai d'étanchéité","Charge complémentaire","Incondensables"]});

C.fiches.miseservice={
 intro:"Une installation bien montée mais mal mise en service tombera en panne : humidité qui forme des acides, air qui fait monter la HP, charge approximative. La mise en service suit un ordre strict, toujours le même. C'est aussi le moment où l'on engage sa responsabilité : chaque étape se mesure et se note.",
 s:[
  {p:"Avant d'introduire du fluide, on vérifie que le circuit est étanche. On le remplit d'<b>azote déshydraté</b> par un détendeur, à la pression d'essai indiquée par le fabricant, sans jamais dépasser la pression maximale admissible (PS) de l'équipement. On cherche les fuites au <b>produit moussant</b> sur chaque raccord et brasure, puis on vérifie que la pression <b>tient</b> pendant le temps prévu (en tenant compte de la température, qui fait varier la pression). Ensuite, on relâche l'azote à l'extérieur.",
   att:"Une variation de température change la pression de l'azote : une baisse de pression le soir n'est pas forcément une fuite. On compare à température égale, ou on note la température.",
   q:["Avec quoi met-on un circuit neuf sous pression d'essai ?",["De l'azote déshydraté","Du fluide frigorigène","De l'air comprimé","De l'oxygène"],0,"L'azote est inerte et sec."]},
  {p:"Le <b>tirage au vide</b> retire l'air (qui ne se condense pas et fait monter la HP) et surtout l'<b>humidité</b> : à très basse pression, l'eau bout même à température ambiante et la pompe l'aspire. On tire au vide par les deux côtés (HP et BP) si possible, avec des flexibles courts et de grand diamètre, jusqu'au niveau demandé par le fabricant, lu au <b>vacuomètre</b>. Puis on isole la pompe : si la pression remonte et se stabilise, il reste de l'humidité ; si elle remonte sans arrêt, il y a une fuite.",
   fig:{type:"flux",legende:"Interpréter la remontée du vide (pompe isolée)",etapes:[["Le vide tient","circuit sec et étanche ✔"],["Remonte puis se stabilise","humidité restante → continuer à tirer"],["Remonte sans arrêt","fuite → rechercher"]]},
   info:"Le vide se mesure souvent en microns de mercure : 1 000 microns ≈ 1,33 mbar. De nombreux fabricants demandent de descendre sous quelques centaines de microns ; c'est leur notice qui fait foi.",
   q:["Le vide remonte sans arrêt après avoir isolé la pompe. Cause probable ?",["Une fuite","Un circuit parfaitement sec","Trop de fluide","Un bon vide"],0,"Une remontée continue = de l'air entre par une fuite."]},
  {p:"On charge toujours <b>au poids</b>, avec une balance. Les unités extérieures de splits sont livrées préchargées pour une longueur de liaison donnée (indiquée sur la plaque) : au-delà, on ajoute une <b>charge complémentaire</b> en grammes par mètre supplémentaire (valeur de la notice). Les mélanges se chargent en <b>phase liquide</b>. Sur une installation à réservoir, la charge peut se finaliser en surveillant sous-refroidissement et surchauffe, mais la quantité totale est toujours notée.",
   fig:{type:"flux",legende:"Charge complémentaire d'un split",etapes:[["Longueur de liaison","15 m"],["Préchargé pour","7,5 m"],["Supplément à charger","7,5 m × 20 g/m"],["Charge complémentaire","150 g"]]},
   q:["Préchargé pour 5 m, liaison de 12 m, 20 g/m. Charge complémentaire ?",["140 g","240 g","100 g","20 g"],0,"(12 − 5) × 20 = 140 g."]},
  {p:"On ouvre les vannes de l'unité extérieure (clé hexagonale), on met sous tension (après la chauffe de la résistance de carter si la notice le demande), on démarre et on laisse se stabiliser. On mesure : pressions, surchauffe, sous-refroidissement, intensité du compresseur, températures d'air. On vérifie l'évacuation des condensats. Enfin, on remplit la <b>fiche d'intervention</b> (Cerfa 15497) avec la quantité de fluide chargée, et on vérifie l'<b>étiquette</b> de l'installation (fluide, charge, t éq. CO₂).",
   q:["Que remplit-on après une mise en service avec charge de fluide ?",["La fiche d'intervention Cerfa 15497","Un permis de feu","Un bon de livraison","Rien"],0,"Toute manipulation de fluide se trace."]}
 ],
 retenir:["Essai à l'azote (jusqu'à la pression d'essai, jamais au-delà de la PS), moussant, tenue en pression.","Vide : enlève air et humidité ; il doit tenir pompe isolée.","Charge au poids, complément selon la longueur, mélanges en liquide.","Mesures de mise en route, fiche d'intervention, étiquetage."]
};

C.lexique.push(
 ["Tirage au vide","Opération qui enlève l'air et l'humidité du circuit avec une pompe à vide."],
 ["Essai d'étanchéité","Mise sous pression d'azote d'un circuit pour vérifier qu'il ne fuit pas."],
 ["Charge complémentaire","Fluide ajouté à la précharge d'un split quand la liaison dépasse la longueur prévue."],
 ["Incondensables","Gaz (air, azote) qui ne se condensent pas dans le condenseur et font monter la HP."],
 ["PS","Pression maximale admissible d'un équipement, à ne jamais dépasser (y compris en essai)."]
);

C.quiz.push(
 ["miseservice","Le tirage au vide sert à enlever…",["L'air et l'humidité","L'huile","Le fluide","La calamine"],0,"L'humidité bout et part à basse pression."],
 ["miseservice","La charge en fluide se fait…",["Au poids, avec une balance","Au jugé","À la pression seulement","Au volume"],0,"On charge la quantité indiquée par le fabricant."],
 ["miseservice","Après l'essai à l'azote, l'azote…",["Est relâché à l'extérieur","Est récupéré dans une bouteille de fluide","Reste dans le circuit","Est transformé en fluide"],0,"L'azote n'est pas un fluide frigorigène."],
 ["miseservice","L'air dans un circuit frigorifique provoque…",["Une HP trop haute","Une BP trop haute","Un meilleur rendement","Rien"],0,"C'est un incondensable."],
 ["miseservice","Pourquoi l'humidité est-elle dangereuse dans un circuit ?",["Elle forme des acides et de la glace au détendeur","Elle améliore l'huile","Elle augmente le rendement","Elle n'est pas dangereuse"],0,"Acides avec l'huile POE, bouchon de glace au détendeur."],
 ["miseservice","1 000 microns de mercure, c'est environ…",["1,33 mbar","1 bar","100 mbar","0,01 mbar"],0,"1 micron = 0,00133 mbar."]
);

C.vf.push(
 ["Le tirage au vide enlève l'humidité du circuit.",true,"À basse pression, l'eau s'évapore."],
 ["Une baisse de pression d'azote le soir prouve toujours une fuite.",false,"La température fait aussi varier la pression."],
 ["On peut dépasser la PS pendant l'essai d'étanchéité.",false,"Jamais : c'est la pression maximale admissible."]
);

C.ordre.push({t:"Mettre en service une installation neuve",ic:"🚀",s:["Tester l'étanchéité à l'azote","Tirer au vide","Vérifier que le vide tient","Charger le fluide au poids","Démarrer et mesurer surchauffe et sous-refroidissement","Remplir la fiche d'intervention"]});
