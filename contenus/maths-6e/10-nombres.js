/* PARTIE 1 — Nombres et calcul */

/* ---------- Les nombres entiers ---------- */
C.modules.push({id:"entiers",n:1,i:"🔢",t:"Les grands nombres entiers",d:"Lire, écrire, décomposer jusqu'au milliard",
 s:[{h:"La valeur d'un chiffre",l:["Dans un nombre, la valeur d'un chiffre dépend de sa <b>position</b>.","Dans <b>5 382</b>, le 3 vaut 3 <b>centaines</b>, soit 300.","10 unités = 1 dizaine ; 10 dizaines = 1 centaine ; 10 centaines = 1 millier."]},
    {h:"Les grandes classes",l:["On regroupe les chiffres par <b>trois</b> : unités, milliers, millions, milliards.","<b>1 million</b> = 1 000 000 ; <b>1 milliard</b> = 1 000 000 000.","On écrit avec un espace entre les classes : 4 250 000."]},
    {h:"Comparer et ranger",l:["Le nombre qui a le plus de chiffres est le plus grand.","Sinon, on compare chiffre par chiffre en partant de la gauche.","Symboles : <b>&lt;</b> (plus petit que), <b>&gt;</b> (plus grand que)."]}],
 k:["Chiffre","Nombre","Milliard","Décomposition"]});
C.fiches.entiers={
 intro:"Avec seulement dix chiffres (0, 1, 2… 9), on peut écrire tous les nombres, même les plus grands. Le secret : la place de chaque chiffre. Une fois que tu as compris ça, lire « 7 054 300 000 » devient facile.",
 s:[
  {p:"Un <b>chiffre</b> est un symbole (0 à 9) ; un <b>nombre</b> est une quantité, écrite avec des chiffres. Dans un nombre, chaque position vaut <b>10 fois</b> plus que celle de droite. C'est pour ça que dans 5 382, le 5 vaut 5 000 et le 3 vaut 300.",
   fig:{type:"flux",legende:"Décomposer 5 382",etapes:[["5 milliers","5 000"],["3 centaines","300"],["8 dizaines","80"],["2 unités","2"],["Total","5 382"]]},
   q:["Dans 47 615, quelle est la valeur du chiffre 6 ?",["600","6","60","6 000"],0,"Le 6 est au rang des centaines : il vaut 600."]},
  {p:"Pour lire un grand nombre, on le coupe en <b>classes de trois chiffres</b> en partant de la droite : unités, milliers, millions, milliards. On lit chaque classe puis son nom. 2 045 300 000 se lit « deux milliards quarante-cinq millions trois cent mille ».",
   fig:{type:"chiffres",items:[[1000,"","mille"],[1000000,"","un million"],[1000000000,"","un milliard"]]},
   info:"Il y a environ 8 milliards d'humains sur Terre. Si tu comptais un nombre par seconde sans t'arrêter, il te faudrait plus de 30 ans pour arriver à un milliard !",
   q:["Combien de millions dans un milliard ?",["1 000","100","10","1 000 000"],0,"1 milliard = 1 000 millions."]},
  {p:"Pour comparer deux entiers, on regarde d'abord le <b>nombre de chiffres</b> : le plus long est le plus grand. S'ils ont autant de chiffres, on compare de gauche à droite jusqu'au premier chiffre différent.",
   ex:"45 302 et 45 230 : mêmes chiffres jusqu'aux centaines… 3 &gt; 2, donc 45 302 &gt; 45 230.",
   q:["Quel est le plus grand ?",["120 001","99 999","100 999","119 999"],0,"120 001 a autant de chiffres que deux autres, mais 12 > 11 et 12 > 10."]}
 ],
 retenir:["La valeur d'un chiffre dépend de sa place.","Classes : unités, milliers, millions, milliards.","1 milliard = 1 000 millions = 1 000 000 000."]
};

/* ---------- Les nombres décimaux ---------- */
C.modules.push({id:"decimaux",n:1,i:"🔟",t:"Les nombres décimaux",d:"Dixièmes, centièmes, comparer, demi-droite graduée",
 s:[{h:"Partie entière et partie décimale",l:["Dans <b>12,35</b> : partie entière 12, partie décimale 35 centièmes.","Après la virgule : <b>dixièmes</b>, <b>centièmes</b>, <b>millièmes</b>.","12,35 = 12 + 3/10 + 5/100."]},
    {h:"Plusieurs écritures",l:["0,5 = 5/10 = 1/2 = 50 %.","0,25 = 25/100 = 1/4 = 25 %.","Un même nombre peut s'écrire de plusieurs façons."]},
    {h:"Comparer et placer",l:["On compare d'abord les parties entières, puis chiffre par chiffre après la virgule.","Astuce : ajouter des zéros. 2,5 = 2,50 &gt; 2,45.","Sur une demi-droite graduée, plus on va à droite, plus le nombre est grand."]}],
 k:["Nombre décimal","Dixième","Centième","Demi-droite graduée","Pourcentage"]});
C.fiches.decimaux={
 intro:"Les nombres décimaux servent tous les jours : les prix (3,49 €), les tailles (1,52 m), les notes (14,5). Ils permettent d'être plus précis qu'avec les entiers, grâce aux dixièmes, centièmes et millièmes.",
 s:[
  {p:"Un dixième, c'est l'unité partagée en 10 ; un centième, l'unité partagée en 100. Dans 12,35, le 3 est le chiffre des dixièmes (il vaut 3/10) et le 5 celui des centièmes (5/100).",
   fig:{type:"flux",legende:"Décomposer 12,35",etapes:[["Partie entière","12"],["3 dixièmes","0,3"],["5 centièmes","0,05"],["Total","12,35"]]},
   q:["Dans 8,147, quel est le chiffre des centièmes ?",["4","1","7","8"],0,"8 unités, 1 dixième, 4 centièmes, 7 millièmes."]},
  {p:"Un décimal peut s'écrire avec une virgule, avec une fraction décimale ou avec un pourcentage. <b>50 %</b> veut dire 50 sur 100, soit 0,5, soit la moitié.",
   fig:{type:"barres",legende:"Le même nombre, trois écritures",items:[["1/4 = 0,25",25,"%","#3db5ff"],["1/2 = 0,5",50,"%","#2ed47a"],["3/4 = 0,75",75,"%","#ffc83d"]]},
   q:["0,75 s'écrit aussi…",["75/100","7/5","75/10","0,75/100"],0,"75 centièmes = 75/100 = 3/4 = 75 %."]},
  {p:"Pour comparer, on compare les parties entières, puis les dixièmes, puis les centièmes. Attention au piège : 2,5 n'est pas plus petit que 2,45 parce que « 5 &lt; 45 » ! On écrit 2,50 et 2,45 : 50 centièmes &gt; 45 centièmes.",
   fig:{type:"svg",legende:"Demi-droite graduée de 0 à 1 (pas de 0,1)",svg:"<svg viewBox='0 0 300 70'><path d='M10 40H290' stroke='#fff' stroke-width='2'/>"+[...Array(11)].map((_,i)=>"<path d='M"+(15+i*27)+" 33V47' stroke='#fff' stroke-width='2'/>").join("")+"<text x='15' y='62' fill='#fff' font-size='11' text-anchor='middle'>0</text><text x='285' y='62' fill='#fff' font-size='11' text-anchor='middle'>1</text><circle cx='"+(15+7*27)+"' cy='40' r='6' fill='var(--pri)' class='pop'/><text x='"+(15+7*27)+"' y='24' fill='var(--pri)' font-size='12' font-weight='900' text-anchor='middle'>0,7</text></svg>"},
   att:"Le nombre de chiffres après la virgule ne dit pas qui est le plus grand : 0,8 &gt; 0,75.",
   q:["Quel est le plus grand ?",["3,4","3,39","3,099","3,385"],0,"3,40 > 3,39 > 3,385 > 3,099."]}
 ],
 retenir:["Dixièmes, centièmes, millièmes après la virgule.","0,5 = 1/2 = 50 % ; 0,25 = 1/4 = 25 %.","Comparer : parties entières, puis chiffre par chiffre (ajouter des zéros)."]
};

/* ---------- Les opérations ---------- */
C.modules.push({id:"operations",n:1,i:"➕",t:"Additionner, soustraire, multiplier",d:"Vocabulaire, ×10 ×100, multiplier des décimaux",
 s:[{h:"Le vocabulaire",l:["Addition → <b>somme</b> ; soustraction → <b>différence</b>.","Multiplication → <b>produit</b> ; division → <b>quotient</b>."]},
    {h:"Multiplier et diviser par 10, 100, 1 000",l:["× 10 : chaque chiffre prend une valeur <b>10 fois plus grande</b> : 3,7 × 10 = 37.","÷ 10 : chaque chiffre prend une valeur 10 fois plus petite : 45 ÷ 10 = 4,5.","× 0,1 revient à ÷ 10."]},
    {h:"Multiplier deux décimaux",l:["On multiplie sans les virgules, puis on place la virgule.","Le résultat a autant de chiffres après la virgule que les deux nombres réunis.","2,4 × 1,3 : 24 × 13 = 312 → <b>3,12</b>."]}],
 k:["Somme","Différence","Produit","Quotient"]});
C.fiches.operations={
 intro:"Les quatre opérations sont les outils de base des maths. Connaître leur vocabulaire, poser les calculs sans erreur et vérifier avec un ordre de grandeur : c'est ce qui rend sûr de soi en calcul.",
 s:[
  {p:"Chaque opération a son mot pour le résultat. « La <b>somme</b> de 12 et 8 », c'est 20 ; « la <b>différence</b> entre 12 et 8 », c'est 4 ; « le <b>produit</b> de 12 par 8 », c'est 96 ; « le <b>quotient</b> de 12 par 8 », c'est 1,5.",
   fig:{type:"cycle",centre:"12 et 8",etapes:[["Somme<br>12 + 8 = 20","#2ed47a"],["Différence<br>12 − 8 = 4","#3db5ff"],["Produit<br>12 × 8 = 96","#ffc83d"],["Quotient<br>12 ÷ 8 = 1,5","#ff8a3d"]]},
   q:["Le produit de 7 par 6 est…",["42","13","1","76"],0,"Produit = résultat d'une multiplication."]},
  {p:"Multiplier par 10, c'est donner à chaque chiffre une valeur 10 fois plus grande : les chiffres « glissent » d'un rang vers la gauche (et on ajoute un zéro si besoin). Diviser par 10, c'est l'inverse. On ne dit pas « on déplace la virgule » mais c'est ce qu'on voit.",
   fig:{type:"flux",legende:"3,7 multiplié par 10 puis par 100",etapes:[["3,7",""],["× 10","37"],["× 10 encore (donc × 100)","370"]]},
   q:["4,56 × 100 = ?",["456","45,6","4 560","0,0456"],0,"Chaque chiffre prend une valeur 100 fois plus grande."]},
  {p:"Pour multiplier deux décimaux, on calcule le produit sans virgules, puis on met dans le résultat autant de chiffres après la virgule qu'il y en avait dans les deux nombres ensemble. On vérifie avec un <b>ordre de grandeur</b> : 2,4 × 1,3, c'est environ 2 × 1 = 2 ou 2,5 × 1 = 2,5 ; 3,12 est cohérent.",
   att:"Multiplier par un nombre plus petit que 1 donne un résultat plus petit : 8 × 0,5 = 4.",
   q:["1,5 × 0,2 = ?",["0,3","3","0,03","30"],0,"15 × 2 = 30, deux chiffres après la virgule : 0,30."]}
 ],
 retenir:["Somme, différence, produit, quotient.","× 10 : valeur 10 fois plus grande ; ÷ 10 : 10 fois plus petite.","Décimaux : on multiplie sans virgule, puis on compte les chiffres après la virgule.","Toujours vérifier avec un ordre de grandeur."]
};

/* ---------- Division et diviseurs ---------- */
C.modules.push({id:"division",n:1,i:"➗",t:"Division, multiples et diviseurs",d:"Division euclidienne, critères de divisibilité",
 s:[{h:"La division euclidienne",l:["a = b × q + r, avec le reste <b>r plus petit que b</b>.","47 ÷ 5 : 47 = 5 × 9 + 2 → quotient 9, reste 2."]},
    {h:"Multiples et diviseurs",l:["15 est un <b>multiple</b> de 3 car 15 = 3 × 5.","3 est un <b>diviseur</b> de 15 : la division tombe juste (reste 0)."]},
    {h:"Critères de divisibilité",l:["Par <b>2</b> : chiffre des unités pair.","Par <b>5</b> : finit par 0 ou 5. Par <b>10</b> : finit par 0.","Par <b>3</b> : somme des chiffres divisible par 3. Par <b>9</b> : somme des chiffres divisible par 9."]}],
 k:["Quotient","Reste","Multiple","Diviseur"]});
C.fiches.division={
 intro:"Partager 47 bonbons entre 5 enfants : chacun en a 9 et il en reste 2. C'est la division euclidienne. Elle permet aussi de savoir si un nombre est un multiple d'un autre, ce qui servira pour les fractions.",
 s:[
  {p:"Dans la division euclidienne de a par b, on cherche combien de fois b « rentre » dans a (le <b>quotient</b> q) et ce qui reste (le <b>reste</b> r). On a toujours <b>a = b × q + r</b> et le reste est plus petit que le diviseur.",
   fig:{type:"flux",legende:"47 bonbons pour 5 enfants",etapes:[["47 ÷ 5","?"],["5 × 9 = 45","9 bonbons chacun"],["47 − 45","reste 2"],["Vérification","5 × 9 + 2 = 47 ✔"]]},
   q:["Dans la division euclidienne de 38 par 7, le reste est…",["3","5","4","0"],0,"38 = 7 × 5 + 3."]},
  {p:"Si le reste est 0, la division « tombe juste » : b est un <b>diviseur</b> de a, et a est un <b>multiple</b> de b. Les multiples de 4 sont 0, 4, 8, 12, 16… ; les diviseurs de 12 sont 1, 2, 3, 4, 6 et 12.",
   q:["Lequel est un diviseur de 24 ?",["6","5","7","9"],0,"24 = 6 × 4."]},
  {p:"Les <b>critères de divisibilité</b> évitent de poser la division. Par 2 : unités paires. Par 5 : 0 ou 5 à la fin. Par 10 : 0 à la fin. Par 3 et par 9 : on additionne les chiffres.",
   ex:"1 254 : 1 + 2 + 5 + 4 = 12, divisible par 3 mais pas par 9. Donc 1 254 est divisible par 3 (et par 2, car il finit par 4).",
   q:["Quel nombre est divisible par 9 ?",["729","728","1 000","455"],0,"7 + 2 + 9 = 18, divisible par 9."]}
 ],
 retenir:["a = b × q + r, avec r < b.","Reste 0 : b divise a, a est multiple de b.","Critères : 2, 5, 10 (dernier chiffre) ; 3, 9 (somme des chiffres)."]
};

/* ---------- Les fractions ---------- */
C.modules.push({id:"fractions",n:1,i:"🍕",t:"Les fractions",d:"Partager, quotient, demi-droite graduée",
 s:[{h:"Lire une fraction",l:["Dans <b>3/4</b> : 3 est le <b>numérateur</b>, 4 le <b>dénominateur</b>.","On partage l'unité en 4 parts égales et on en prend 3.","3/4 se lit « trois quarts »."]},
    {h:"La fraction est un quotient",l:["<b>a/b</b> est le nombre qui, multiplié par b, donne a.","3/4 = 3 ÷ 4 = <b>0,75</b>.","1/2 = 0,5 ; 1/4 = 0,25 ; 1/10 = 0,1."]},
    {h:"Placer et comparer",l:["Sur une demi-droite graduée, on partage l'unité en autant de parts que le dénominateur.","Une fraction est plus grande que 1 quand son numérateur est plus grand que son dénominateur."]}],
 k:["Fraction","Numérateur","Dénominateur"]});
C.fiches.fractions={
 intro:"Une fraction, c'est d'abord un partage : 3/4 d'une pizza. Mais c'est aussi un nombre, qu'on peut placer sur une droite graduée et écrire avec une virgule. Le programme de 6e insiste sur ces trois façons de voir une fraction.",
 s:[
  {p:"Le <b>dénominateur</b> (en bas) dit en combien de parts égales on partage l'unité ; le <b>numérateur</b> (en haut) dit combien de parts on prend. 3/4 : quatre parts, on en prend trois.",
   fig:{type:"svg",legende:"3/4 d'un disque",svg:"<svg viewBox='0 0 200 110'><circle cx='100' cy='55' r='45' fill='var(--card)' stroke='#fff' stroke-width='2'/><path d='M100 55V10A45 45 0 1 1 55 55Z' fill='var(--pri)' class='pop'/><path d='M100 10V100M55 55H145' stroke='#fff' stroke-width='2'/></svg>"},
   q:["Dans 5/8, le dénominateur est…",["8","5","13","40"],0,"Le dénominateur est en bas : on partage en 8."]},
  {p:"La fraction a/b est aussi le <b>quotient</b> de a par b : c'est le nombre qui, multiplié par b, donne a. Donc 3/4 = 3 ÷ 4 = 0,75. C'est pour ça qu'on peut partager 3 pizzas entre 4 personnes : chacune a 3/4 de pizza.",
   fig:{type:"flux",legende:"De la fraction au décimal",etapes:[["3/4","3 ÷ 4"],["Division","0,75"],["Vérification","0,75 × 4 = 3 ✔"]]},
   q:["7/10 = ?",["0,7","7,10","0,07","1,7"],0,"7 dixièmes = 0,7."]},
  {p:"Pour placer 5/3 sur une demi-droite graduée, on partage chaque unité en 3 et on compte 5 parts depuis 0 : on dépasse 1. Une fraction est plus grande que 1 quand le numérateur est plus grand que le dénominateur.",
   fig:{type:"svg",legende:"5/3 sur une demi-droite (unité partagée en 3)",svg:"<svg viewBox='0 0 300 70'><path d='M10 40H290' stroke='#fff' stroke-width='2'/>"+[...Array(7)].map((_,i)=>"<path d='M"+(20+i*42)+" "+(i%3===0?30:34)+"V"+(i%3===0?50:46)+"' stroke='#fff' stroke-width='2'/>").join("")+"<text x='20' y='64' fill='#fff' font-size='11' text-anchor='middle'>0</text><text x='146' y='64' fill='#fff' font-size='11' text-anchor='middle'>1</text><text x='272' y='64' fill='#fff' font-size='11' text-anchor='middle'>2</text><circle cx='230' cy='40' r='6' fill='var(--pri)' class='pop'/><text x='230' y='24' fill='var(--pri)' font-size='12' font-weight='900' text-anchor='middle'>5/3</text></svg>"},
   q:["Laquelle de ces fractions est plus grande que 1 ?",["7/5","5/7","1/2","3/4"],0,"7 > 5 : on prend plus de parts qu'il n'y en a dans l'unité."]}
 ],
 retenir:["Numérateur en haut, dénominateur en bas.","a/b = a ÷ b : 3/4 = 0,75.","Fraction > 1 quand numérateur > dénominateur."]
};

/* ---------- Calculer avec les fractions ---------- */
C.modules.push({id:"fractionscalc",n:1,i:"🧮",t:"Calculer avec des fractions",d:"Ajouter, multiplier par un entier, fraction d'un nombre",
 s:[{h:"Ajouter et soustraire",l:["Avec le <b>même dénominateur</b>, on ajoute les numérateurs : 2/7 + 3/7 = 5/7.","On garde le dénominateur."]},
    {h:"Fractions égales",l:["On peut multiplier (ou diviser) le haut et le bas par le même nombre : 1/2 = 2/4 = 5/10.","Cela sert à mettre deux fractions au même dénominateur."]},
    {h:"Multiplier et prendre une fraction",l:["3 × 2/5 = 6/5.","3/4 de 20 = (20 ÷ 4) × 3 = <b>15</b>."]}],
 k:["Fraction","Fractions égales"]});
C.fiches.fractionscalc={
 intro:"Une fois qu'on a compris ce qu'est une fraction, on peut calculer avec : ajouter des parts de même taille, trouver une fraction égale, ou prendre « les trois quarts » d'une quantité. Ces calculs servent tous les jours (recettes, soldes, partages).",
 s:[
  {p:"On ne peut ajouter des fractions que si elles parlent de parts de <b>même taille</b>, donc avec le même dénominateur. 2/7 + 3/7 : 2 septièmes plus 3 septièmes = 5 septièmes.",
   att:"On n'ajoute jamais les dénominateurs : 1/2 + 1/2 = 2/2 = 1, et non 2/4 !",
   q:["4/9 + 2/9 = ?",["6/9","6/18","8/9","2/9"],0,"Même dénominateur : on ajoute les numérateurs."]},
  {p:"Deux fractions sont <b>égales</b> si on passe de l'une à l'autre en multipliant (ou en divisant) le numérateur et le dénominateur par le même nombre. 1/2 = 2/4 = 3/6 = 50/100.",
   fig:{type:"flux",legende:"Mettre 1/2 et 3/8 au même dénominateur",etapes:[["1/2","× 4 en haut et en bas"],["4/8","même dénominateur que 3/8"],["4/8 + 3/8","7/8"]]},
   q:["Quelle fraction est égale à 3/5 ?",["6/10","3/10","5/3","6/5"],0,"On multiplie haut et bas par 2."]},
  {p:"Prendre une fraction d'une quantité : 3/4 de 20, c'est partager 20 en 4 (on obtient 5) puis prendre 3 parts (15). Multiplier une fraction par un entier : 3 × 2/5, c'est 3 fois deux cinquièmes, donc 6/5.",
   fig:{type:"flux",legende:"Les 3/4 de 20 €",etapes:[["20 € partagés en 4","5 € par part"],["On prend 3 parts","3 × 5 €"],["Résultat","15 €"]]},
   q:["2/3 de 30 = ?",["20","10","15","60"],0,"30 ÷ 3 = 10, puis × 2 = 20."]}
 ],
 retenir:["Même dénominateur : on ajoute les numérateurs.","Fractions égales : × ou ÷ haut et bas par le même nombre.","a/b de N = (N ÷ b) × a."]
};

/* ---------- Calcul mental et ordre de grandeur ---------- */
C.modules.push({id:"mental",n:1,i:"⚡",t:"Calcul mental et ordre de grandeur",d:"Astuces, arrondis, estimer un résultat",
 s:[{h:"Les astuces",l:["× 5 : × 10 puis ÷ 2. × 9 : × 10 puis − une fois le nombre.","× 11 : × 10 + une fois le nombre.","Ajouter 99 : ajouter 100 puis enlever 1."]},
    {h:"Arrondir",l:["Arrondir à l'unité : on regarde le chiffre des dixièmes.","5 ou plus : on arrondit au-dessus ; moins de 5 : en dessous.","12,6 ≈ 13 ; 12,4 ≈ 12."]},
    {h:"L'ordre de grandeur",l:["On remplace les nombres par des valeurs proches et simples.","198 × 5 ≈ 200 × 5 = 1 000.","Il sert à vérifier un résultat de calculatrice."]}],
 k:["Ordre de grandeur","Arrondi"]});
C.fiches.mental={
 intro:"Le calcul mental, c'est gagner du temps et éviter les erreurs. Quelques astuces suffisent, et l'ordre de grandeur permet de repérer tout de suite un résultat absurde.",
 s:[
  {p:"Les astuces reposent sur des calculs faciles : multiplier par 10, diviser par 2, ajouter 100. Exemple : 46 × 5 = 460 ÷ 2 = 230 ; 23 × 9 = 230 − 23 = 207 ; 34 × 11 = 340 + 34 = 374.",
   fig:{type:"flux",legende:"27 × 11 de tête",etapes:[["27 × 10","270"],["+ 27","297"]]},
   q:["48 × 5 = ?",["240","200","480","2 400"],0,"48 × 10 = 480, puis ÷ 2 = 240."]},
  {p:"Pour <b>arrondir</b> un nombre à l'unité, on regarde le chiffre juste après : s'il vaut 5 ou plus, on arrondit au-dessus, sinon en dessous. Arrondi au dixième de 3,147 : on regarde les centièmes (4) → 3,1.",
   q:["L'arrondi à l'unité de 18,5 est…",["19","18","18,5","20"],0,"Le chiffre des dixièmes est 5 : on arrondit au-dessus."]},
  {p:"Un <b>ordre de grandeur</b> est un résultat approché obtenu avec des nombres simples. La calculatrice affiche 98,7 × 3,1 = 3 059,7 ? 100 × 3 = 300 : il y a une erreur (le bon résultat est 305,97).",
   att:"L'ordre de grandeur ne remplace pas le calcul exact : il sert à vérifier.",
   q:["Un ordre de grandeur de 412 × 19 est…",["8 000","800","80 000","400"],0,"400 × 20 = 8 000."]}
 ],
 retenir:["× 5 = × 10 ÷ 2 ; × 9 = × 10 − 1 fois ; × 11 = × 10 + 1 fois.","Arrondir : 5 ou plus → au-dessus.","Ordre de grandeur pour vérifier."]
};

C.lexique.push(
 ["Chiffre","Symbole utilisé pour écrire les nombres : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9."],
 ["Nombre","Quantité écrite avec des chiffres. 47 est un nombre de deux chiffres."],
 ["Milliard","Mille millions : 1 000 000 000."],
 ["Décomposition","Écriture d'un nombre comme somme de la valeur de ses chiffres : 352 = 300 + 50 + 2."],
 ["Nombre décimal","Nombre qui peut s'écrire avec une virgule et un nombre fini de chiffres après : 3,25."],
 ["Dixième","L'unité partagée en 10 parts égales : 1/10 = 0,1."],
 ["Centième","L'unité partagée en 100 parts égales : 1/100 = 0,01."],
 ["Demi-droite graduée","Droite partant de 0, avec des graduations régulières, sur laquelle on place les nombres."],
 ["Pourcentage","Nombre de parts sur 100 : 30 % = 30/100 = 0,3."],
 ["Somme","Résultat d'une addition."],
 ["Différence","Résultat d'une soustraction."],
 ["Produit","Résultat d'une multiplication."],
 ["Quotient","Résultat d'une division."],
 ["Reste","Dans une division euclidienne, ce qui reste après le partage. Il est plus petit que le diviseur."],
 ["Multiple","15 est un multiple de 3 car 15 = 3 × 5."],
 ["Diviseur","3 est un diviseur de 15 : 15 ÷ 3 tombe juste."],
 ["Fraction","Écriture a/b : l'unité partagée en b parts égales dont on prend a. C'est aussi le quotient a ÷ b."],
 ["Numérateur","Nombre du haut d'une fraction : le nombre de parts prises."],
 ["Dénominateur","Nombre du bas d'une fraction : le nombre de parts égales de l'unité."],
 ["Fractions égales","Fractions qui représentent le même nombre : 1/2 = 2/4 = 50/100."],
 ["Ordre de grandeur","Valeur approchée d'un résultat, obtenue avec des nombres simples, pour vérifier un calcul."],
 ["Arrondi","Valeur approchée la plus proche à une précision donnée : 12,6 arrondi à l'unité donne 13."]
);

C.quiz.push(
 ["entiers","Comment s'écrit « trois millions deux cent mille » ?",["3 200 000","3 000 200","3 200 000 000","320 000"],0,"3 millions et 200 milliers."],
 ["entiers","Dans 9 405 271, quel est le chiffre des centaines de mille ?",["4","9","0","5"],0,"9 millions, 4 centaines de mille, 0 dizaine de mille, 5 milliers…"],
 ["entiers","Combien y a-t-il de zéros dans un milliard ?",["9","6","12","3"],0,"1 000 000 000."],
 ["entiers","Rangés dans l'ordre croissant :",["8 999 < 9 089 < 9 098","9 098 < 9 089 < 8 999","9 089 < 8 999 < 9 098","8 999 < 9 098 < 9 089"],0,"Croissant = du plus petit au plus grand."],
 ["decimaux","Dans 6,384, le chiffre des dixièmes est…",["3","6","8","4"],0,"Juste après la virgule : les dixièmes."],
 ["decimaux","Quel nombre est égal à 25 % ?",["0,25","2,5","0,025","25"],0,"25 % = 25/100 = 0,25."],
 ["decimaux","Quel nombre est entre 4,5 et 4,6 ?",["4,53","4,7","4,05","4,61"],0,"4,50 < 4,53 < 4,60."],
 ["decimaux","1/2 en pourcentage, c'est…",["50 %","12 %","2 %","20 %"],0,"La moitié = 50 sur 100."],
 ["operations","0,7 × 1 000 = ?",["700","7 000","70","0,007"],0,"Chaque chiffre prend une valeur 1 000 fois plus grande."],
 ["operations","3,2 × 0,5 = ?",["1,6","16","0,16","6,4"],0,"32 × 5 = 160 → 1,60."],
 ["operations","Le résultat d'une soustraction s'appelle…",["Une différence","Un produit","Un quotient","Une somme"],0,"Différence."],
 ["operations","56,3 ÷ 10 = ?",["5,63","563","0,563","56,03"],0,"Chaque chiffre prend une valeur 10 fois plus petite."],
 ["division","Dans 53 = 6 × 8 + 5, le quotient est…",["8","5","6","53"],0,"Division de 53 par 6 : quotient 8, reste 5."],
 ["division","Quel nombre est divisible par 3 ?",["471","472","475","1 000"],0,"4 + 7 + 1 = 12, divisible par 3."],
 ["division","Les diviseurs de 10 sont…",["1, 2, 5, 10","1, 2, 5","2, 5, 10, 20","1 et 10"],0,"10 = 1 × 10 = 2 × 5."],
 ["division","Un nombre qui se termine par 5 est divisible par…",["5","2","10","9"],0,"Il finit par 0 ou 5."],
 ["fractions","Que représente 2/5 d'une tablette coupée en 5 morceaux égaux ?",["2 morceaux","5 morceaux","2,5 morceaux","3 morceaux"],0,"On prend 2 parts sur 5."],
 ["fractions","9 ÷ 4 s'écrit aussi…",["9/4","4/9","94","4,9"],0,"Une fraction est un quotient."],
 ["fractions","1/4 = ?",["0,25","0,4","1,4","4"],0,"1 ÷ 4 = 0,25."],
 ["fractions","Sur une demi-droite graduée en quarts, 3/4 se trouve…",["Entre 0 et 1","Après 1","Avant 0","Sur 3"],0,"3 parts sur 4 : moins d'une unité."],
 ["fractionscalc","3/8 + 4/8 = ?",["7/8","7/16","12/8","1/8"],0,"Même dénominateur."],
 ["fractionscalc","3/4 de 40 = ?",["30","10","120","34"],0,"40 ÷ 4 = 10 ; 10 × 3 = 30."],
 ["fractionscalc","5 × 2/7 = ?",["10/7","10/35","7/7","2/35"],0,"On multiplie le numérateur."],
 ["fractionscalc","2/3 = ?",["8/12","2/6","4/3","3/2"],0,"× 4 en haut et en bas."],
 ["mental","25 × 4 = ?",["100","29","80","125"],0,"Un grand classique."],
 ["mental","37 + 99 = ?",["136","137","126","146"],0,"37 + 100 − 1."],
 ["mental","L'arrondi au dixième de 7,46 est…",["7,5","7,4","7","8"],0,"Le chiffre des centièmes est 6 : on arrondit au-dessus."],
 ["mental","Un ordre de grandeur de 51 × 39 est…",["2 000","200","20 000","90"],0,"50 × 40 = 2 000."]
);

C.vf.push(
 ["Un milliard, c'est mille millions.",true,"1 000 × 1 000 000."],
 ["2,5 est plus petit que 2,45 car 5 < 45.",false,"2,50 > 2,45."],
 ["3/4 = 0,75.",true,"3 ÷ 4 = 0,75."],
 ["1/2 + 1/2 = 2/4.",false,"1/2 + 1/2 = 2/2 = 1."],
 ["Multiplier par 0,5 revient à diviser par 2.",true,"0,5 = la moitié."],
 ["Dans une division euclidienne, le reste peut être plus grand que le diviseur.",false,"Le reste est toujours plus petit que le diviseur."],
 ["Un nombre pair est divisible par 2.",true,"C'est la définition d'un nombre pair."],
 ["7/5 est plus petit que 1.",false,"7 > 5 : la fraction dépasse 1."],
 ["50 % c'est la moitié.",true,"50/100 = 1/2."],
 ["Le produit de 4 par 3 est 7.",false,"Le produit est 12 ; 7 est la somme."]
);

C.ordre.push(
 {t:"Poser une division euclidienne : 157 ÷ 6",ic:"➗",s:["Combien de fois 6 dans 15 ? 2 fois","2 × 6 = 12 ; 15 − 12 = 3","On abaisse le 7 : 37","Combien de fois 6 dans 37 ? 6 fois","6 × 6 = 36 ; 37 − 36 = 1","Quotient 26, reste 1 : 157 = 6 × 26 + 1"]}
);
