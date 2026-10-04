/* NIVEAU 1 — Le cycle frigorifique */
const ETAT=(c,t1,t2)=>"<svg viewBox='0 0 240 120'><rect x='20' y='20' width='200' height='80' rx='16' fill='var(--card)' stroke='"+c+"' stroke-width='3' class='pop'/><text x='120' y='55' text-anchor='middle' font-size='15' font-weight='900' fill='"+c+"'>"+t1+"</text><text x='120' y='80' text-anchor='middle' font-size='12' font-weight='700' fill='#fff'>"+t2+"</text></svg>";
C.modules.push({id:"cycle",n:1,i:"🔄",t:"Le cycle frigorifique",d:"Compresseur, condenseur, détendeur, évaporateur",
 s:[{h:"Les 4 organes",l:["<b>Compresseur</b> : aspire la vapeur BP et la refoule en <b>HP</b>, chaude.","<b>Condenseur</b> : la vapeur se condense en liquide et <b>rejette la chaleur</b>.","<b>Détendeur</b> : fait chuter la pression du liquide (HP → BP).","<b>Évaporateur</b> : le liquide s'évapore et <b>absorbe la chaleur</b>."]},
    {h:"Côté HP, côté BP",l:["<b>HP</b> (haute pression) : du refoulement du compresseur jusqu'au détendeur.","<b>BP</b> (basse pression) : de la sortie du détendeur jusqu'à l'aspiration du compresseur.","Manifold : <b>bleu = BP</b>, <b>rouge = HP</b>."]},
    {h:"Surchauffe et sous-refroidissement",l:["<b>Surchauffe</b> = T aspiration − T évaporation : il n'arrive que de la <b>vapeur</b> au compresseur (souvent 5 à 8 K).","<b>Sous-refroidissement</b> = T condensation − T liquide : il n'arrive que du <b>liquide</b> au détendeur (souvent 3 à 8 K)."]},
    {h:"Mesurer l'efficacité",l:["<b>Puissance frigorifique</b> : la chaleur enlevée, en kW.","<b>EER</b> (en froid) et <b>COP</b> (en chaud) = puissance utile ÷ puissance électrique.","Un COP de 4 : 1 kWh d'électricité donne 4 kWh de chaleur."]}],
 k:["Compresseur","Condenseur","Détendeur","Évaporateur","Surchauffe","Sous-refroidissement","COP"]});

C.fiches.cycle={
 intro:"Climatiseur, frigo, chambre froide, pompe à chaleur : toutes ces machines utilisent le même cycle, avec quatre organes et un fluide qui tourne en boucle. Si tu sais à chaque point du circuit si le fluide est liquide ou vapeur, chaud ou froid, haute ou basse pression, tu sais déjà dépanner.",
 s:[
  {p:"Le fluide fait une boucle sans fin. Le <b>compresseur</b> aspire la vapeur froide basse pression et la comprime : elle sort très chaude, en haute pression. Dans le <b>condenseur</b>, l'air (ou l'eau) extérieur la refroidit : elle se condense en liquide en rejetant la chaleur. Le <b>détendeur</b> fait chuter brutalement la pression du liquide. Dans l'<b>évaporateur</b>, ce liquide à basse pression bout en prenant la chaleur de l'air de la pièce. La vapeur retourne au compresseur, et ça recommence.",
   fig:{type:"cycle",centre:"Le cycle frigorifique",etapes:[["Compresseur<br>vapeur BP → vapeur HP chaude","#ff5470"],["Condenseur<br>rejette la chaleur","#ff8a3d"],["Détendeur<br>liquide HP → BP","#ffc83d"],["Évaporateur<br>absorbe la chaleur","#3db5ff"]]},
   q:["Quel organe rejette la chaleur à l'extérieur ?",["Le condenseur","L'évaporateur","Le détendeur","Le filtre déshydrateur"],0,"Le condenseur rejette la chaleur en condensant la vapeur."]},
  {p:"Le circuit est coupé en deux par le compresseur et le détendeur. Le côté <b>HP</b> va du refoulement du compresseur au détendeur : tuyaux chauds (refoulement), puis tièdes (ligne liquide). Le côté <b>BP</b> va du détendeur à l'aspiration : tuyaux froids, souvent couverts de condensation. Suis le fluide pas à pas :",
   fig:{type:"etapes",vues:[
     {svg:ETAT("#ff5470","1. Refoulement","vapeur · HP · très chaude (60–90 °C)"),t:"À la sortie du compresseur : vapeur <b>surchauffée</b>, haute pression, très chaude. Ne pas toucher le tube."},
     {svg:ETAT("#ff8a3d","2. Sortie condenseur","liquide · HP · tiède"),t:"Le fluide s'est condensé : <b>liquide</b>, haute pression, un peu plus froid que la température de condensation (sous-refroidi)."},
     {svg:ETAT("#ffc83d","3. Sortie détendeur","mélange liquide + vapeur · BP · froid"),t:"La pression chute brutalement : une partie du liquide se vaporise et le mélange devient très froid."},
     {svg:ETAT("#3db5ff","4. Sortie évaporateur","vapeur · BP · froide"),t:"Tout le liquide s'est évaporé en absorbant la chaleur. La vapeur est un peu plus chaude que la température d'évaporation (surchauffée)."}]},
   q:["La ligne liquide se trouve…",["Côté HP, entre condenseur et détendeur","Côté BP, entre évaporateur et compresseur","Entre compresseur et condenseur","Dans le compresseur"],0,"Le liquide HP va du condenseur au détendeur."]},
  {p:"Deux mesures disent si le circuit est bien chargé et bien réglé. La <b>surchauffe</b> : température mesurée sur le tube d'aspiration moins la température d'évaporation (lue au manomètre BP). Elle garantit qu'aucune goutte de liquide n'arrive au compresseur. Le <b>sous-refroidissement</b> : température de condensation (lue au manomètre HP) moins la température mesurée sur la ligne liquide. Il garantit que le détendeur reçoit du liquide sans bulles.",
   fig:{type:"flux",legende:"Calcul de la surchauffe (R32)",etapes:[["Manomètre BP","8,5 bar → évaporation +5 °C"],["Thermomètre sur l'aspiration","+12 °C"],["Surchauffe = 12 − 5","7 K ✔"]]},
   att:"Surchauffe trop faible = risque de <b>coup de liquide</b> (le compresseur aspire du liquide et casse). Surchauffe trop forte = évaporateur mal alimenté (manque de fluide, détendeur mal réglé) et compresseur qui chauffe.",
   q:["T aspiration = 10 °C, T évaporation = 3 °C. La surchauffe est de…",["7 K","13 K","3 K","10 K"],0,"10 − 3 = 7 K."]},
  {p:"La <b>puissance frigorifique</b> est la quantité de chaleur enlevée par seconde, en kW. L'efficacité se mesure en comparant ce qu'on obtient à ce qu'on paie : <b>EER</b> en mode froid (puissance frigorifique ÷ puissance électrique) et <b>COP</b> en mode chaud (puissance calorifique ÷ puissance électrique). Les versions <b>saisonnières</b> (SEER, SCOP) tiennent compte de toute une saison. Plus l'écart entre la température d'évaporation et la température de condensation est faible, plus la machine est efficace.",
   fig:{type:"flux",legende:"Une pompe à chaleur au COP de 4",etapes:[["Électricité consommée","1 kWh"],["Chaleur prise à l'air extérieur","+ 3 kWh"],["Chaleur fournie au logement","4 kWh"]]},
   info:"C'est pour ça qu'un condenseur encrassé coûte cher : la condensation se fait plus haut, l'écart augmente et le compresseur consomme davantage pour le même froid.",
   q:["Une PAC consomme 2 kWh et produit 7 kWh de chaleur. Son COP est…",["3,5","5","9","0,3"],0,"COP = 7 ÷ 2 = 3,5."]}
 ],
 retenir:["Compresseur → condenseur (rejette) → détendeur → évaporateur (absorbe).","HP : du refoulement au détendeur. BP : du détendeur à l'aspiration.","Surchauffe = T aspiration − T évaporation ; sous-refroidissement = T condensation − T liquide.","EER (froid) et COP (chaud) = puissance utile ÷ puissance électrique."]
};

C.lexique.push(
 ["Compresseur","Organe qui aspire la vapeur basse pression et la refoule en haute pression. Le « cœur » du circuit."],
 ["Condenseur","Échangeur où la vapeur HP se condense en liquide en rejetant sa chaleur."],
 ["Détendeur","Organe qui fait chuter la pression du liquide et règle le débit vers l'évaporateur."],
 ["Évaporateur","Échangeur où le fluide BP s'évapore en absorbant la chaleur du milieu à refroidir."],
 ["Surchauffe","Écart entre la température à l'aspiration et la température d'évaporation. Protège le compresseur."],
 ["Sous-refroidissement","Écart entre la température de condensation et la température du liquide en sortie de condenseur."],
 ["COP","Coefficient de performance : chaleur produite ÷ énergie électrique consommée."],
 ["EER","Efficacité en mode froid : puissance frigorifique ÷ puissance électrique consommée."],
 ["Coup de liquide","Arrivée de liquide dans le compresseur, qui ne peut pas le comprimer : casse des clapets ou des pistons."]
);

C.quiz.push(
 ["cycle","Quel organe produit le froid dans la pièce ?",["L'évaporateur","Le condenseur","Le compresseur","Le pressostat"],0,"Le fluide s'y évapore en absorbant la chaleur."],
 ["cycle","Le détendeur sert à…",["Faire chuter la pression","Comprimer la vapeur","Filtrer l'humidité","Inverser le cycle"],0,"Il fait passer le liquide de HP à BP."],
 ["cycle","Le compresseur aspire…",["De la vapeur basse pression","Du liquide haute pression","Du liquide basse pression","De l'huile seulement"],0,"Il ne doit aspirer que de la vapeur."],
 ["cycle","La surchauffe protège…",["Le compresseur","Le condenseur","Le détendeur","Le voyant"],0,"Elle garantit qu'aucun liquide n'arrive au compresseur."],
 ["cycle","T condensation = 45 °C, T liquide en sortie = 40 °C. Le sous-refroidissement est de…",["5 K","85 K","40 K","45 K"],0,"45 − 40 = 5 K."],
 ["cycle","Le tube de refoulement du compresseur est…",["Très chaud","Glacé","À température ambiante","Toujours givré"],0,"La compression échauffe fortement la vapeur."],
 ["cycle","Sur un manifold, le manomètre BP est…",["Bleu","Rouge","Jaune","Vert"],0,"BP bleu, HP rouge."],
 ["cycle","Que mesure l'EER ?",["L'efficacité en mode froid","La pression de condensation","Le débit d'air","La charge en fluide"],0,"EER = puissance frigorifique ÷ puissance électrique."],
 ["cycle","Que risque un compresseur avec une surchauffe nulle ?",["Un coup de liquide","Un manque d'huile seulement","Rien","Une baisse de la HP"],0,"Du liquide arrive au compresseur."]
);

C.vf.push(
 ["Le compresseur ne doit aspirer que de la vapeur.",true,"Le liquide peut le casser (coup de liquide)."],
 ["La surchauffe protège le compresseur.",true,"Elle évite l'arrivée de liquide."],
 ["Un COP de 3 signifie qu'1 kWh consommé donne 3 kWh de chaleur.",true,"COP = chaleur produite ÷ énergie consommée."],
 ["Le manomètre HP du manifold est bleu.",false,"HP rouge, BP bleu."],
 ["À la sortie du détendeur, le fluide est un mélange de liquide et de vapeur.",true,"Une partie du liquide se vaporise lors de la chute de pression."]
);

C.ordre.push({t:"Le cycle frigorifique",ic:"🔄",s:["Compression de la vapeur","Condensation (rejet de chaleur)","Détente (chute de pression)","Évaporation (absorption de chaleur)"]});
