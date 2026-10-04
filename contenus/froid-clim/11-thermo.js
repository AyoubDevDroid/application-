/* NIVEAU 1 — Les bases du froid */
C.modules.push({id:"thermo",n:1,i:"🌡️",t:"Les bases du froid",d:"Chaleur, température, pression, changement d'état",
 s:[{h:"Faire du froid, c'est déplacer de la chaleur",l:["On ne « fabrique » pas du froid : on <b>enlève de la chaleur</b> à un endroit pour la rejeter ailleurs.","La chaleur va toujours du <b>chaud vers le froid</b>.","Il faut de l'énergie (le compresseur) pour la faire aller dans l'autre sens."]},
    {h:"Température et chaleur",l:["Température en <b>°C</b> ou en <b>kelvins</b> : <b>K = °C + 273</b>.","Un <b>écart</b> de température se dit en <b>K</b> : 1 K = 1 °C d'écart.","<b>Chaleur sensible</b> : change la température. <b>Chaleur latente</b> : change l'état, à température constante."]},
    {h:"La pression",l:["Le manomètre lit la <b>pression relative</b> (par rapport à l'air ambiant).","<b>Pression absolue ≈ pression relative + 1 bar</b>.","Le <b>vide</b> est une pression absolue inférieure à la pression atmosphérique."]},
    {h:"Pression et température de saturation",l:["Un fluide qui change d'état a une température fixée par sa <b>pression</b>.","Basse pression → il bout à basse température (évaporateur).","Haute pression → il se condense à haute température (condenseur)."]}],
 k:["Évaporation","Condensation","Chaleur latente","Chaleur sensible","Pression absolue","Saturation"]});

C.fiches.thermo={
 intro:"Un frigoriste manipule trois grandeurs toute la journée : la chaleur, la température et la pression. Les comprendre vraiment, c'est pouvoir lire un manifold et savoir ce qui se passe dans un circuit qu'on ne voit pas. Tout le métier repose sur une idée simple : un liquide qui s'évapore absorbe de la chaleur.",
 s:[
  {p:"Le froid n'existe pas en tant que tel : il y a seulement plus ou moins de chaleur. Une machine frigorifique est une <b>pompe à chaleur</b> : elle prend la chaleur dans la chambre froide ou dans la pièce et la rejette dehors. Comme la chaleur va naturellement du chaud vers le froid, il faut fournir de l'énergie pour l'obliger à remonter : c'est le travail du <b>compresseur</b>.",
   fig:{type:"flux",legende:"Le principe d'une machine frigorifique",etapes:[["Dans la pièce","la chaleur est captée"],["Le fluide l'emporte","dans les tuyaux"],["Le compresseur","fournit l'énergie"],["Dehors","la chaleur est rejetée"]]},
   ex:"Tu sors de la piscine : l'eau sur ta peau s'évapore et tu as froid. L'évaporation a pris de la chaleur à ton corps. Un évaporateur fait exactement la même chose avec la pièce.",
   q:["Que fait une machine frigorifique ?",["Elle déplace la chaleur d'un endroit à un autre","Elle fabrique du froid à partir de rien","Elle détruit la chaleur","Elle refroidit l'air en le comprimant seulement"],0,"Elle prend la chaleur d'un côté et la rejette de l'autre."]},
  {p:"La température se mesure en <b>degrés Celsius</b>, mais les calculs scientifiques utilisent le <b>kelvin</b> : K = °C + 273 (0 K est le zéro absolu). Un écart de température (surchauffe, sous-refroidissement, écart d'air) s'exprime en <b>K</b>. La <b>chaleur sensible</b> fait varier la température d'un corps ; la <b>chaleur latente</b> le fait changer d'état sans changer sa température. Le circuit frigorifique travaille surtout avec la chaleur latente : un kilo de fluide qui s'évapore absorbe beaucoup plus d'énergie qu'un kilo de fluide qui se réchauffe de quelques degrés.",
   fig:{type:"barres",legende:"Chauffer 1 kg d'eau de 0 à 100 °C, ou le faire bouillir (ordre de grandeur)",items:[["Chaleur sensible : 0 → 100 °C",419,"kJ","#3db5ff"],["Chaleur latente : 100 °C liquide → vapeur",2257,"kJ","#ff8a3d"]]},
   q:["La surchauffe d'un circuit est de 7 °C d'écart. On l'écrit…",["7 K","7 °K","280 K","−7 °C"],0,"Un écart de température s'écrit en K."]},
  {p:"Le manomètre du manifold mesure la <b>pression relative</b> : il affiche 0 à l'air libre. La <b>pression absolue</b> part du vide parfait : elle vaut environ la pression relative + 1 bar (la pression atmosphérique, 1,013 bar). En dessous de la pression atmosphérique, on parle de <b>vide</b> : on le mesure en pression absolue (mbar, Pa ou microns de mercure) avec un <b>vacuomètre</b>.",
   fig:{type:"chiffres",legende:"Unités de pression",items:[[100000,"Pa","= 1 bar"],[1.013,"bar","pression atmosphérique"],[14.5,"psi","≈ 1 bar"]]},
   att:"Les tables des fabricants sont parfois en bar absolus, parfois en bar relatifs. Une erreur de 1 bar fausse complètement la température lue. Vérifie toujours l'unité (bar, bar abs, bar rel, psi).",
   q:["Le manomètre indique 7 bar. La pression absolue est d'environ…",["8 bar","7 bar","6 bar","14 bar"],0,"Absolue ≈ relative + 1 bar."]},
  {p:"Un fluide en train de bouillir ou de se condenser est dit <b>saturé</b> : sa température dépend uniquement de sa <b>pression</b>. C'est la clé du métier : en lisant la pression au manomètre, tu connais la température d'évaporation ou de condensation grâce à la <b>table pression-température</b> du fluide (ou aux graduations de ton manifold). Pour faire bouillir le fluide à −10 °C dans l'évaporateur, il suffit de le maintenir à basse pression ; pour qu'il se condense à 45 °C dehors, on le comprime.",
   fig:{type:"barres",legende:"R32 : pression relative de saturation selon la température (calcul CoolProp)",items:[["−10 °C",4.8,"bar"],["0 °C",7.1,"bar"],["+10 °C",10.1,"bar"],["+40 °C",23.8,"bar"],["+50 °C",30.4,"bar"]]},
   ex:"Sur un split au R32, le manomètre BP indique 8,5 bar : le fluide s'évapore à environ +5 °C. Le manomètre HP indique 26,9 bar : il se condense à environ 45 °C.",
   q:["Quand la pression d'un fluide saturé baisse, sa température…",["Baisse","Monte","Ne change pas","Double"],0,"À basse pression, le fluide bout à basse température."]}
 ],
 retenir:["Faire du froid = déplacer de la chaleur, grâce à l'énergie du compresseur.","K = °C + 273 ; un écart se dit en K.","Chaleur latente (changement d'état) ≫ chaleur sensible.","Pression absolue ≈ relative + 1 bar.","Fluide saturé : la pression donne la température (table P/T)."]
};

C.lexique.push(
 ["Évaporation","Passage de l'état liquide à l'état vapeur. Absorbe de la chaleur : c'est ce qui produit le froid."],
 ["Condensation","Passage de l'état vapeur à l'état liquide. Rejette de la chaleur."],
 ["Chaleur latente","Chaleur qui fait changer d'état un corps, sans changer sa température."],
 ["Chaleur sensible","Chaleur qui fait varier la température d'un corps, sans changer son état."],
 ["Pression absolue","Pression mesurée par rapport au vide. ≈ pression relative du manomètre + 1 bar."],
 ["Pression relative","Pression lue au manomètre, par rapport à la pression atmosphérique."],
 ["Saturation","État d'un fluide qui change d'état : sa température est fixée par sa pression."],
 ["Kelvin","Unité de température (K = °C + 273). Un écart de température se dit en K."]
);

C.quiz.push(
 ["thermo","Un liquide qui s'évapore…",["Absorbe de la chaleur","Rejette de la chaleur","Ne change rien","Se refroidit sans échange"],0,"L'évaporation absorbe de la chaleur : c'est le principe du froid."],
 ["thermo","Quand la pression baisse, la température d'ébullition…",["Baisse","Monte","Ne change pas","Double"],0,"À basse pression, un fluide bout à basse température."],
 ["thermo","Le manomètre indique 4 bar. La pression absolue est d'environ…",["5 bar","4 bar","3 bar","8 bar"],0,"Pression absolue ≈ relative + 1 bar."],
 ["thermo","0 °C en kelvins, c'est…",["273 K","0 K","100 K","−273 K"],0,"K = °C + 273."],
 ["thermo","La chaleur qui change l'état sans changer la température s'appelle…",["Chaleur latente","Chaleur sensible","Chaleur spécifique","Surchauffe"],0,"Latente = changement d'état."],
 ["thermo","Le circuit frigorifique transporte surtout de la chaleur…",["Latente","Sensible","Électrique","Mécanique"],0,"Les changements d'état transportent beaucoup d'énergie."],
 ["thermo","Dans quel sens va naturellement la chaleur ?",["Du chaud vers le froid","Du froid vers le chaud","Du bas vers le haut","Elle ne bouge pas"],0,"Pour l'inverser, il faut de l'énergie : le compresseur."],
 ["thermo","Pour mesurer un vide, on utilise…",["Un vacuomètre (pression absolue)","Le manomètre HP","Une pince ampèremétrique","Un thermomètre"],0,"Le vide se mesure en pression absolue (mbar, Pa, microns)."],
 ["thermo","Un fluide saturé à 8,5 bar relatifs (R32) est à environ…",["+5 °C","−20 °C","+45 °C","+85 °C"],0,"Table du R32 : 8,5 bar ≈ +5 °C."]
);

C.vf.push(
 ["L'évaporateur rejette la chaleur dehors.",false,"C'est le condenseur. L'évaporateur absorbe la chaleur."],
 ["La pression absolue est plus faible que la pression relative.",false,"Absolue = relative + 1 bar environ."],
 ["Un écart de 5 °C est un écart de 5 K.",true,"1 K = 1 °C d'écart."],
 ["Pour un fluide saturé, la température dépend de la pression.",true,"C'est le principe des tables pression-température."]
);
