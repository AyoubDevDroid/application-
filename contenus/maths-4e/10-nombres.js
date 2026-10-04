/* PARTIE 1 — Nombres et calculs (programme de 4e, BO n° 10 du 5 mars 2026) */

/* ---------- Multiplier et diviser des relatifs ---------- */
C.modules.push({id:"relatifs",n:1,i:"✖️",t:"Multiplier et diviser des relatifs",d:"Règle des signes, produits de plusieurs facteurs, enchaînements",
 s:[{h:"La règle des signes",l:["Le produit de deux nombres de <b>même signe</b> est <b>positif</b> : (−3) × (−4) = 12.","Le produit de deux nombres de <b>signes contraires</b> est <b>négatif</b> : (−3) × 4 = −12.","On multiplie les distances à zéro, puis on place le signe."]},
    {h:"Plusieurs facteurs",l:["On compte les facteurs négatifs : <b>nombre pair</b> → produit positif ; <b>nombre impair</b> → produit négatif.","(−1) × (−2) × (−3) = −6 (trois facteurs négatifs).","Si un facteur est nul, le produit est nul."]},
    {h:"La division",l:["Même règle des signes que pour la multiplication.","(−20) ÷ (−4) = 5 ; 18 ÷ (−3) = −6.","On ne divise jamais par 0."]},
    {h:"Enchaîner",l:["Mêmes priorités qu'avec les positifs : parenthèses, puissances, × ÷, + −.","−2 + 3 × (−4) = −2 + (−12) = −14."]}],
 k:["Règle des signes","Produit","Quotient"]});
C.fiches.relatifs={
 intro:"Pourquoi « moins par moins donne plus » ? Ce n'est pas une règle magique à apprendre par cœur : on peut la démontrer avec la distributivité. Et une fois comprise, elle permet de calculer avec tous les nombres, positifs comme négatifs.",
 s:[
  {p:"Commençons par un seul facteur négatif : (−3) × 4 = (−3) + (−3) + (−3) + (−3) = <b>−12</b>. Multiplier par un positif, c'est répéter une addition. Le produit de deux nombres de signes contraires est donc <b>négatif</b>.",
   q:["(−5) × 6 = ?",["−30","30","−11","1"],0,"Signes contraires : négatif ; 5 × 6 = 30."]},
  {p:"Et (−3) × (−4) ? On sait que (−4) + 4 = 0. Donc (−3) × ((−4) + 4) = (−3) × 0 = 0. Par distributivité : (−3) × (−4) + (−3) × 4 = 0, soit (−3) × (−4) + (−12) = 0. Donc <b>(−3) × (−4) = 12</b>. Le produit de deux négatifs est positif !",
   fig:{type:"flux",legende:"Démontrer que (−3) × (−4) = 12",etapes:[["On part de","(−3) × ((−4) + 4) = (−3) × 0 = 0"],["Distributivité","(−3) × (−4) + (−3) × 4 = 0"],["On sait que","(−3) × 4 = −12"],["Donc","(−3) × (−4) − 12 = 0, soit (−3) × (−4) = 12"]]},
   q:["(−7) × (−8) = ?",["56","−56","−15","15"],0,"Même signe : positif."]},
  {p:"Avec <b>plusieurs facteurs</b>, on compte les facteurs négatifs. S'il y en a un nombre <b>pair</b>, le produit est positif ; un nombre <b>impair</b>, il est négatif. (−2) × 5 × (−1) × (−3) : trois négatifs → −30. La <b>division</b> suit exactement la même règle : (−42) ÷ 6 = −7.",
   fig:{type:"barres",legende:"Signe d'un produit selon le nombre de facteurs négatifs",items:[["0 négatif : +",1,"","#2ed47a"],["1 négatif : −",1,"","#ff5c7a"],["2 négatifs : +",1,"","#2ed47a"],["3 négatifs : −",1,"","#ff5c7a"]]},
   q:["Quel est le signe de (−1) × (−1) × (−1) × (−1) × (−1) ?",["Négatif","Positif","Nul","On ne peut pas savoir"],0,"Cinq facteurs négatifs : nombre impair."]},
  {p:"Dans un enchaînement, on garde les <b>priorités opératoires</b>. A = 5 − 2 × (−3) = 5 − (−6) = 5 + 6 = 11. B = (−12) ÷ (3 − 7) = (−12) ÷ (−4) = 3. On écrit les négatifs entre parenthèses pour éviter les confusions de signes.",
   att:"−3² et (−3)² sont différents : −3² = −(3 × 3) = −9 alors que (−3)² = (−3) × (−3) = 9.",
   q:["Combien vaut 4 − 3 × (−2) ?",["10","−2","2","−10"],0,"3 × (−2) = −6 d'abord, puis 4 − (−6) = 10."]}
 ],
 retenir:["Même signe : positif ; signes contraires : négatif.","Nombre pair de facteurs négatifs → positif ; impair → négatif.","La division suit la même règle de signes.","Toujours respecter les priorités."]
};

/* ---------- Les nombres rationnels ---------- */
C.modules.push({id:"fractions",n:1,i:"➗",t:"Calculer avec des fractions",d:"Simplifier, multiplier, inverse, diviser, fraction d'une fraction",
 s:[{h:"Simplifier, rationnels",l:["On simplifie en divisant numérateur et dénominateur par un même diviseur : 24/36 = 2/3.","Un <b>nombre rationnel</b> est le quotient de deux entiers relatifs : −3/4, 7/2, 5 = 5/1…","−a/b = (−a)/b = a/(−b)."]},
    {h:"Multiplier",l:["a/b × c/d = (a × c)/(b × d).","On simplifie avant de multiplier : 3/4 × 8/9 = (3 × 8)/(4 × 9) = 2/3.","Prendre une fraction d'un nombre, c'est multiplier : 2/3 de 1/4 = 2/3 × 1/4 = 1/6."]},
    {h:"L'inverse",l:["L'<b>inverse</b> d'un nombre x non nul est 1/x : x × 1/x = 1.","L'inverse de a/b est b/a. L'inverse de 5 est 1/5 = 0,2.","0 n'a pas d'inverse."]},
    {h:"Diviser",l:["Diviser par un nombre, c'est <b>multiplier par son inverse</b>.","a/b ÷ c/d = a/b × d/c.","3/5 ÷ 2/7 = 3/5 × 7/2 = 21/10."]}],
 k:["Nombre rationnel","Inverse","Simplifier","Fraction"]});
C.fiches.fractions={
 intro:"Une recette demande 3/4 de litre de lait, mais tu ne fais que les 2/3 de la recette : combien de lait ? Et combien de verres de 1/8 de litre peut-on remplir avec 3/4 de litre ? Multiplier et diviser des fractions répond à ces questions en une ligne.",
 s:[
  {p:"<b>Simplifier</b> une fraction : diviser numérateur et dénominateur par un même nombre. 45/60 = 15/20 = 3/4. Un <b>nombre rationnel</b> est le quotient de deux entiers relatifs ; le signe peut se placer devant : −3/4 = (−3)/4 = 3/(−4).",
   q:["Simplifie 28/42.",["2/3","7/21","4/7","7/12"],0,"28 = 14 × 2 et 42 = 14 × 3."]},
  {p:"<b>Produit</b> : on multiplie les numérateurs entre eux et les dénominateurs entre eux. Astuce : on <b>simplifie avant</b> de multiplier. 5/6 × 9/10 = (5 × 9)/(6 × 10) = (5 × 3 × 3)/(2 × 3 × 2 × 5) = 3/4. La <b>fraction d'une fraction</b> se calcule par un produit : les 2/3 de 3/4 de litre = 2/3 × 3/4 = 1/2 litre.",
   fig:{type:"svg",legende:"Les 2/3 de 3/4 : 6 cases sur 12 = 1/2",svg:"<svg viewBox='0 0 240 120'>"+[0,1,2,3].map(i=>[0,1,2].map(j=>"<rect x='"+(40+i*40)+"' y='"+(10+j*33)+"' width='40' height='33' fill='"+(i<3&&j<2?"#b18cff":i<3?"#b18cff44":"#ffffff11")+"' stroke='#fff'/>").join("")).join("")+"<text x='200' y='60' fill='#fff' font-size='11'>3/4</text><text x='5' y='45' fill='#fff' font-size='11'>2/3</text></svg>"},
   q:["2/5 × 15/4 = ?",["3/2","30/9","17/9","6/20"],0,"(2 × 15)/(5 × 4) = 30/20 = 3/2."]},
  {p:"L'<b>inverse</b> d'un nombre x non nul est le nombre qui, multiplié par x, donne 1 : c'est 1/x. L'inverse de 4 est 1/4 ; l'inverse de 2/3 est 3/2 ; l'inverse de −5 est −1/5. <b>0 n'a pas d'inverse</b>.",
   att:"Ne confonds pas l'inverse et l'opposé : l'opposé de 2 est −2 (somme nulle), l'inverse de 2 est 1/2 (produit égal à 1).",
   q:["L'inverse de −3/7 est…",["−7/3","7/3","3/7","−3/7"],0,"(−3/7) × (−7/3) = 1."]},
  {p:"<b>Diviser par une fraction, c'est multiplier par son inverse.</b> 3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 : on remplit 6 verres de 1/8 de litre avec 3/4 de litre. Pour les calculs longs, on garde les priorités et on simplifie à chaque étape.",
   fig:{type:"flux",legende:"Calculer 5/6 ÷ 10/9",etapes:[["Inverse de 10/9","9/10"],["On multiplie","5/6 × 9/10"],["On simplifie","(5 × 9)/(6 × 10) = 45/60"],["Résultat","3/4"]]},
   q:["2/3 ÷ 4/9 = ?",["3/2","8/27","2/3","6/12"],0,"2/3 × 9/4 = 18/12 = 3/2."]}
 ],
 retenir:["a/b × c/d = ac/bd ; simplifier avant de multiplier.","« Fraction de » = multiplication.","Inverse de a/b : b/a ; 0 n'a pas d'inverse.","Diviser = multiplier par l'inverse."]
};

/* ---------- Puissances ---------- */
C.modules.push({id:"puissances",n:1,i:"⚡",t:"Les puissances",d:"Exposant entier naturel, règles de calcul, puissances de 10",
 s:[{h:"Définition",l:["aⁿ = a × a × … × a (n facteurs égaux à a), pour n entier ≥ 1.","Par convention a⁰ = 1 (a ≠ 0) et a¹ = a.","(−2)³ = −8 ; (−2)⁴ = 16."]},
    {h:"Règles de calcul",l:["Même nombre : aⁿ × aᵐ = aⁿ⁺ᵐ. 2³ × 2⁴ = 2⁷.","Même exposant : aⁿ × bⁿ = (a × b)ⁿ. 2³ × 5³ = 10³.","Attention : 2³ + 2⁴ ne se simplifie pas en 2⁷ !"]},
    {h:"Puissances de 10",l:["10ⁿ = 1 suivi de n zéros : 10⁶ = 1 000 000.","Préfixes : kilo = 10³, méga = 10⁶, giga = 10⁹.","Multiplier par 10ⁿ : décaler la virgule de n rangs vers la droite."]}],
 k:["Puissance","Exposant","Préfixe"]});
C.fiches.puissances={
 intro:"Une légende raconte que l'inventeur des échecs demanda 1 grain de riz sur la 1re case, 2 sur la 2e, 4 sur la 3e… en doublant à chaque case. Sur la 64e case, il faudrait 2⁶³ grains : plus que toute la production mondiale de riz pendant des siècles ! Les puissances grandissent à une vitesse folle.",
 s:[
  {p:"Pour un entier n ≥ 1, <b>aⁿ</b> est le produit de n facteurs égaux à a. On lit « a puissance n » ; n est l'<b>exposant</b>. 3⁴ = 3 × 3 × 3 × 3 = 81. Avec un négatif, le signe dépend de la parité de l'exposant : (−3)⁴ = 81 mais (−3)³ = −27.",
   fig:{type:"barres",legende:"Les puissances de 2 doublent à chaque fois",items:[["2¹",2,"","#3db5ff"],["2²",4,"","#2ed47a"],["2³",8,"","#ffc83d"],["2⁴",16,"","#ff8a3d"],["2⁵",32,"","#ff5c7a"]]},
   q:["(−2)⁵ = ?",["−32","32","−10","10"],0,"Cinq facteurs négatifs : résultat négatif ; 2⁵ = 32."]},
  {p:"Pour <b>multiplier</b> deux puissances du <b>même nombre</b>, on <b>additionne</b> les exposants : a³ × a⁴ = (a × a × a) × (a × a × a × a) = a⁷. Pour deux puissances de <b>même exposant</b> : a³ × b³ = (a × b)³. Exemple : 4⁵ × 25⁵ = 100⁵.",
   fig:{type:"flux",legende:"Pourquoi 5² × 5³ = 5⁵",etapes:[["5²","5 × 5"],["5³","5 × 5 × 5"],["Produit","5 × 5 × 5 × 5 × 5"],["Bilan","5⁵ (2 + 3 = 5 facteurs)"]]},
   att:"On n'additionne les exposants que pour un PRODUIT de puissances du même nombre. 2³ + 2⁴ = 8 + 16 = 24, pas 2⁷ = 128.",
   q:["7² × 7⁶ = ?",["7⁸","7¹²","49⁸","14⁸"],0,"On ajoute les exposants : 2 + 6."]},
  {p:"<b>10ⁿ</b> s'écrit 1 suivi de n zéros. Les <b>préfixes</b> des unités sont des puissances de 10 : kilo (k) = 10³, méga (M) = 10⁶, giga (G) = 10⁹. Un disque de 2 To (téra = 10¹²) contient 2 × 10¹² octets.",
   fig:{type:"chiffres",items:[[1000,"","kilo = 10³"],[1000000,"","méga = 10⁶"],[1000000000,"","giga = 10⁹"]]},
   q:["10³ × 10⁴ = ?",["10⁷","10¹²","100⁷","10 000 000 000"],0,"3 + 4 = 7."]}
 ],
 retenir:["aⁿ = produit de n facteurs a ; a⁰ = 1.","aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ × bⁿ = (ab)ⁿ.","On ne simplifie pas une somme de puissances.","kilo 10³, méga 10⁶, giga 10⁹."]
};

/* ---------- Racine carrée ---------- */
C.modules.push({id:"racine",n:1,i:"√",t:"La racine carrée",d:"Définition, carrés parfaits, encadrement",
 s:[{h:"Définition",l:["La <b>racine carrée</b> d'un nombre positif a est le nombre <b>positif</b> dont le carré vaut a. On la note √a.","√49 = 7 car 7² = 49 et 7 ≥ 0.","La racine carrée d'un nombre négatif n'existe pas."]},
    {h:"Carrés parfaits",l:["0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.","Leurs racines carrées sont des entiers."]},
    {h:"Encadrer",l:["√50 est entre 7 et 8, car 49 &lt; 50 &lt; 64.","La calculatrice donne une valeur approchée : √50 ≈ 7,07."]}],
 k:["Racine carrée","Carré parfait"]});
C.fiches.racine={
 intro:"Un carré a une aire de 36 m². Quelle est la longueur de son côté ? 6 m, car 6 × 6 = 36. Et si l'aire vaut 50 m² ? Aucun entier ne convient… Il faut un nouveau nombre : la racine carrée de 50.",
 s:[
  {p:"La <b>racine carrée</b> d'un nombre a positif, notée √a, est le nombre <b>positif</b> dont le carré est a. Géométriquement : c'est le <b>côté d'un carré d'aire a</b>. √81 = 9 ; √0 = 0 ; √1 = 1.",
   fig:{type:"svg",legende:"Un carré d'aire 50 m² a un côté de √50 m",svg:"<svg viewBox='0 0 240 120'><rect x='70' y='10' width='100' height='100' fill='#b18cff44' stroke='#fff' stroke-width='2'/><text x='120' y='65' fill='#fff' font-size='14' text-anchor='middle'>50 m²</text><text x='120' y='122' fill='var(--pri)' font-size='12' text-anchor='middle'>√50 ≈ 7,07 m</text></svg>"},
   att:"√(−9) n'existe pas : aucun carré n'est négatif. Et √9 vaut 3, pas −3 (la racine carrée est toujours positive).",
   q:["√144 = ?",["12","72","14","−12"],0,"12² = 144."]},
  {p:"Les <b>carrés parfaits</b> (carrés des entiers) ont une racine carrée entière : il faut connaître ceux de 0 à 144. Pour les autres nombres, on <b>encadre</b> la racine entre deux entiers consécutifs : √30 est entre 5 et 6, car 25 &lt; 30 &lt; 36.",
   fig:{type:"flux",legende:"Encadrer √70",etapes:[["Carrés voisins","64 < 70 < 81"],["Racines","8 < √70 < 9"],["Calculatrice","√70 ≈ 8,37"]]},
   info:"√2 ≈ 1,414 n'est pas un nombre décimal : ses chiffres après la virgule ne s'arrêtent jamais. Les Grecs l'ont découvert il y a 2 500 ans, et la légende dit que ça les a beaucoup troublés !",
   q:["Entre quels entiers consécutifs se trouve √40 ?",["6 et 7","5 et 6","20 et 21","4 et 5"],0,"36 < 40 < 49."]}
 ],
 retenir:["√a (a ≥ 0) : nombre positif dont le carré est a.","√a = côté d'un carré d'aire a.","Carrés parfaits de 0 à 144 par cœur.","Encadrer : chercher les deux carrés parfaits voisins."]
};

/* ---------- Calcul littéral ---------- */
C.modules.push({id:"litteral",n:1,i:"🔤",t:"Le calcul littéral",d:"Conventions, développer, factoriser, réduire, démontrer",
 s:[{h:"Conventions",l:["3 × x = 3x ; x × x = x² ; 3x × 2x = 6x².","x + x = 2x ; 3x + 2x = 5x.","1 × x = x."]},
    {h:"Développer et factoriser",l:["Développer : k(a + b) = ka + kb. −3(2x − 5) = −6x + 15.","Factoriser : ka + kb = k(a + b). 12x + 18 = 6(2x + 3).","Attention aux signes devant une parenthèse : −(x − 4) = −x + 4."]},
    {h:"Démontrer",l:["Un nombre pair s'écrit 2n, un impair 2n + 1 (n entier).","La somme de deux impairs est paire : (2n + 1) + (2m + 1) = 2(n + m + 1).","Un exemple ne prouve pas une règle générale ; un contre-exemple suffit à la réfuter."]}],
 k:["Développer","Factoriser","Réduire","Expression littérale"]});
C.fiches.litteral={
 intro:"« La somme de deux nombres impairs est toujours paire. » Tu peux vérifier sur 3 + 5, sur 11 + 7… mais comment être sûr que c'est vrai pour TOUS les nombres, même ceux qu'on n'a pas essayés ? Le calcul littéral permet de le démontrer en deux lignes.",
 s:[
  {p:"<b>Réduire</b> une expression : regrouper les termes de même nature. 5x² + 3x − 2x² + x − 7 = 3x² + 4x − 7. On ne peut pas additionner des x avec des x² ou des nombres seuls.",
   q:["Réduis 4x − 7 + 2x + 10.",["6x + 3","6x − 17","9x","2x + 3"],0,"4x + 2x = 6x ; −7 + 10 = 3."]},
  {p:"<b>Développer</b> avec la distributivité, en faisant attention aux signes : −2(3x − 4) = −6x + 8. <b>Factoriser</b> en repérant le facteur commun : 15x − 10 = 5 × 3x − 5 × 2 = 5(3x − 2) ; x² + 7x = x(x + 7).",
   fig:{type:"svg",legende:"L'aire du rectangle : x(x + 7) = x² + 7x",svg:"<svg viewBox='0 0 260 110'><rect x='30' y='15' width='80' height='70' fill='#b18cff55' stroke='#fff' stroke-width='2'/><rect x='110' y='15' width='120' height='70' fill='#3db5ff44' stroke='#fff' stroke-width='2'/><text x='70' y='55' fill='#fff' font-size='13' text-anchor='middle'>x²</text><text x='170' y='55' fill='#fff' font-size='13' text-anchor='middle'>7x</text><text x='70' y='102' fill='#fff' font-size='11' text-anchor='middle'>x</text><text x='170' y='102' fill='#fff' font-size='11' text-anchor='middle'>7</text><text x='16' y='55' fill='#fff' font-size='11'>x</text></svg>"},
   att:"Un signe − devant une parenthèse change TOUS les signes à l'intérieur : 5 − (2x − 3) = 5 − 2x + 3 = 8 − 2x.",
   q:["Développe −4(x − 3).",["−4x + 12","−4x − 12","4x − 12","−4x − 3"],0,"(−4) × x + (−4) × (−3) = −4x + 12."]},
  {p:"<b>Démontrer</b> avec des lettres : soit 2n + 1 et 2m + 1 deux nombres impairs. Leur somme vaut 2n + 2m + 2 = 2(n + m + 1) : c'est un multiple de 2, donc un nombre <b>pair</b>. C'est vrai pour tous les impairs à la fois. À l'inverse, pour montrer qu'une affirmation est fausse, <b>un seul contre-exemple suffit</b>.",
   fig:{type:"flux",legende:"Trois entiers consécutifs : la somme est un multiple de 3",etapes:[["Les entiers","n ; n + 1 ; n + 2"],["Somme","n + n + 1 + n + 2"],["Réduire","3n + 3"],["Factoriser","3(n + 1) : multiple de 3 ✔"]]},
   q:["« Pour tout nombre x, x² ≥ x. » Quel contre-exemple prouve que c'est faux ?",["x = 0,5","x = 2","x = 0","x = −1"],0,"0,5² = 0,25, qui est plus petit que 0,5."]}
 ],
 retenir:["Réduire : regrouper les x², les x, les nombres.","k(a + b) = ka + kb (attention aux signes).","Pair : 2n ; impair : 2n + 1.","Exemples ≠ preuve ; un contre-exemple suffit pour réfuter."]
};

/* ---------- Équations ---------- */
C.modules.push({id:"equations",n:1,i:"⚖️",t:"Les équations",d:"ax + b = c, ax + b = cx + d, mettre en équation",
 s:[{h:"Résoudre",l:["On peut ajouter ou soustraire un même nombre (ou une même expression) aux deux membres.","On peut multiplier ou diviser les deux membres par un même nombre <b>non nul</b>.","3x + 5 = 20 → 3x = 15 → x = 5."]},
    {h:"x des deux côtés",l:["On regroupe les x d'un côté, les nombres de l'autre.","7x − 4 = 3x + 8 → 4x = 12 → x = 3.","On vérifie : 7 × 3 − 4 = 17 et 3 × 3 + 8 = 17 ✔."]},
    {h:"Mettre en équation",l:["Choisir l'inconnue, traduire l'énoncé, résoudre, vérifier, conclure par une phrase."]}],
 k:["Équation","Solution","Inconnue"]});
C.fiches.equations={
 intro:"Deux forfaits de téléphone, deux trajets, deux recettes : dès qu'on cherche « quand est-ce que c'est pareil ? », on écrit une équation. En 4e, l'inconnue peut apparaître des deux côtés du signe égal… et ça reste simple avec la méthode de la balance.",
 s:[
  {p:"Une équation est comme une <b>balance en équilibre</b> : si on fait la même opération des deux côtés, elle reste en équilibre. Pour 4x − 3 = 17 : on ajoute 3 (4x = 20), puis on divise par 4 (x = 5).",
   q:["Solution de 5x + 2 = −13 ?",["−3","3","−2,2","−15"],0,"5x = −15, x = −3."]},
  {p:"Quand l'inconnue est <b>des deux côtés</b>, on la regroupe d'un côté. 9x + 4 = 5x + 24 : on enlève 5x des deux côtés (4x + 4 = 24), on enlève 4 (4x = 20), on divise par 4 (x = 5). On vérifie : 49 = 49 ✔.",
   fig:{type:"flux",legende:"Résoudre 2x − 7 = 5x + 8",etapes:[["− 2x des deux côtés","−7 = 3x + 8"],["− 8 des deux côtés","−15 = 3x"],["÷ 3","x = −5"],["Vérification","2 × (−5) − 7 = −17 et 5 × (−5) + 8 = −17 ✔"]]},
   att:"Quand on « fait passer » un terme de l'autre côté, il change de signe : c'est simplement parce qu'on a soustrait (ou ajouté) la même chose des deux côtés.",
   q:["Solution de 6x − 1 = 2x + 11 ?",["3","2,5","1,25","−3"],0,"4x = 12, x = 3."]},
  {p:"<b>Mettre en équation</b> : « Le forfait A coûte 20 € + 0,50 € par Go, le forfait B 8 € + 2 € par Go. Pour combien de Go coûtent-ils pareil ? » Soit x le nombre de Go : 20 + 0,5x = 8 + 2x, donc 12 = 1,5x et x = 8 Go. On conclut par une phrase.",
   q:["Le triple d'un nombre plus 4 est égal au double de ce nombre plus 9. Ce nombre est…",["5","13","1","−5"],0,"3x + 4 = 2x + 9 donne x = 5."]}
 ],
 retenir:["Même opération des deux côtés (× ou ÷ par un nombre non nul).","Regrouper les x d'un côté, les nombres de l'autre.","Toujours vérifier en remplaçant.","Mise en équation : inconnue, équation, résolution, vérification, phrase."]
};

C.lexique.push(
 ["Règle des signes","Un produit ou un quotient de deux nombres de même signe est positif, de signes contraires est négatif."],
 ["Produit","Résultat d'une multiplication."],
 ["Quotient","Résultat d'une division."],
 ["Nombre rationnel","Quotient de deux entiers relatifs (le dénominateur non nul)."],
 ["Inverse","L'inverse d'un nombre x non nul est 1/x ; leur produit vaut 1."],
 ["Opposé","Nombre de même distance à zéro, de signe contraire ; leur somme vaut 0."],
 ["Simplifier","Diviser numérateur et dénominateur d'une fraction par un même nombre."],
 ["Fraction","Quotient de deux entiers, écrit a/b."],
 ["Puissance","aⁿ : produit de n facteurs égaux à a."],
 ["Exposant","Nombre n dans aⁿ : il indique le nombre de facteurs."],
 ["Préfixe","Mot placé devant une unité pour la multiplier par une puissance de 10 : kilo, méga, giga…"],
 ["Racine carrée","√a (a ≥ 0) : nombre positif dont le carré vaut a."],
 ["Carré parfait","Carré d'un nombre entier : 1, 4, 9, 16, 25…"],
 ["Développer","Transformer un produit en somme."],
 ["Factoriser","Transformer une somme en produit."],
 ["Réduire","Regrouper les termes de même nature dans une expression."],
 ["Expression littérale","Expression qui contient des lettres représentant des nombres."],
 ["Équation","Égalité qui contient un nombre inconnu."],
 ["Solution","Valeur de l'inconnue qui rend l'égalité vraie."],
 ["Inconnue","Nombre cherché dans une équation, souvent noté x."],
 ["Contre-exemple","Exemple qui montre qu'une affirmation générale est fausse."]
);

C.quiz.push(
 ["relatifs","(−6) × (−9) = ?",["54","−54","−15","15"],0,"Même signe : positif."],
 ["relatifs","(−48) ÷ 8 = ?",["−6","6","−40","−56"],0,"Signes contraires : négatif."],
 ["relatifs","(−2) × (−2) × (−2) = ?",["−8","8","−6","6"],0,"Trois facteurs négatifs : négatif."],
 ["relatifs","Quel est le signe de (−3) × 5 × (−7) × (−1) × 2 ?",["Négatif","Positif","Nul","Impossible à dire"],0,"Trois facteurs négatifs."],
 ["relatifs","−5 + 2 × (−3) = ?",["−11","9","−1","11"],0,"2 × (−3) = −6 ; −5 + (−6) = −11."],
 ["relatifs","(−4)² = ?",["16","−16","−8","8"],0,"(−4) × (−4)."],
 ["fractions","3/4 × 2/9 = ?",["1/6","5/13","6/13","5/36"],0,"6/36 = 1/6."],
 ["fractions","L'inverse de 5 est…",["1/5","−5","0,5","5/1"],0,"5 × 1/5 = 1."],
 ["fractions","3/5 ÷ 3/10 = ?",["2","9/50","1/2","6/5"],0,"3/5 × 10/3 = 2."],
 ["fractions","Les 3/4 de 2/3 d'un gâteau représentent…",["1/2 du gâteau","5/7","6/7","9/8"],0,"3/4 × 2/3 = 6/12 = 1/2."],
 ["fractions","Quel nombre n'a pas d'inverse ?",["0","1","−1","1/2"],0,"Aucun nombre multiplié par 0 ne donne 1."],
 ["fractions","−2/3 est égal à…",["2/(−3)","−2/(−3)","3/(−2)","2/3"],0,"Le signe peut se placer au numérateur ou au dénominateur."],
 ["puissances","2⁵ = ?",["32","10","25","64"],0,"2 × 2 × 2 × 2 × 2."],
 ["puissances","3⁴ × 3² = ?",["3⁶","3⁸","9⁶","9⁸"],0,"4 + 2 = 6."],
 ["puissances","5³ × 2³ = ?",["10³","10⁶","7³","7⁹"],0,"Même exposant : (5 × 2)³."],
 ["puissances","Un gigaoctet vaut…",["10⁹ octets","10⁶ octets","10³ octets","10¹² octets"],0,"giga = 10⁹."],
 ["puissances","7⁰ = ?",["1","0","7","70"],0,"Par convention, a⁰ = 1."],
 ["racine","√81 = ?",["9","40,5","−9","18"],0,"9² = 81."],
 ["racine","√20 est compris entre…",["4 et 5","5 et 6","10 et 11","19 et 21"],0,"16 < 20 < 25."],
 ["racine","Un carré a une aire de 64 cm². Son côté mesure…",["8 cm","32 cm","16 cm","4 cm"],0,"√64 = 8."],
 ["racine","√(−16) = ?",["N'existe pas","−4","4","−8"],0,"Aucun carré n'est négatif."],
 ["litteral","Réduis 3x² + 2x − x² + 5x.",["2x² + 7x","9x²","9x³","2x² + 7"],0,"3x² − x² = 2x² ; 2x + 5x = 7x."],
 ["litteral","3x × 4x = ?",["12x²","7x","12x","7x²"],0,"3 × 4 = 12 et x × x = x²."],
 ["litteral","Factorise 9x − 6.",["3(3x − 2)","3(3x − 6)","9(x − 6)","x(9 − 6)"],0,"3 × 3x − 3 × 2."],
 ["litteral","Développe −(2x − 7).",["−2x + 7","−2x − 7","2x − 7","2x + 7"],0,"On change tous les signes."],
 ["litteral","L'expression générale d'un nombre impair est…",["2n + 1","n + 1","2n","n²"],0,"Un pair plus 1."],
 ["equations","Solution de 3x − 8 = 13 ?",["7","5/3","1,5","−7"],0,"3x = 21."],
 ["equations","Solution de 5x + 3 = 2x + 15 ?",["4","6","18/7","12"],0,"3x = 12."],
 ["equations","Solution de 4 − x = 10 ?",["−6","6","14","−14"],0,"−x = 6, donc x = −6."],
 ["equations","Que fait-on pour isoler x dans −2x = 14 ?",["On divise par −2","On ajoute 2","On divise par 2","On multiplie par −2"],0,"x = 14 ÷ (−2) = −7."]
);

C.vf.push(
 ["Le produit de deux nombres négatifs est négatif.",false,"(−2) × (−3) = 6 : il est positif."],
 ["(−1)¹⁰⁰ = 1.",true,"100 facteurs négatifs : nombre pair."],
 ["−3² = 9.",false,"−3² = −(3²) = −9 ; c'est (−3)² qui vaut 9."],
 ["Diviser par 2/3 revient à multiplier par 3/2.",true,"On multiplie par l'inverse."],
 ["L'inverse de −4 est 4.",false,"C'est −1/4 ; 4 est l'opposé."],
 ["2³ + 2² = 2⁵.",false,"8 + 4 = 12, alors que 2⁵ = 32."],
 ["10⁵ × 10³ = 10⁸.",true,"On ajoute les exposants."],
 ["√25 = 5 et √25 = −5.",false,"La racine carrée est toujours positive : √25 = 5."],
 ["√(9 + 16) = √9 + √16.",false,"√25 = 5 mais 3 + 4 = 7."],
 ["x × x = 2x.",false,"x × x = x²."],
 ["Un exemple suffit pour prouver qu'une propriété est toujours vraie.",false,"Il faut une démonstration ; un exemple ne suffit pas."],
 ["Un contre-exemple suffit pour prouver qu'une propriété est fausse.",true,"C'est le principe du contre-exemple."],
 ["L'équation 2x + 3 = 2x + 5 n'a pas de solution.",true,"Elle reviendrait à 3 = 5."]
);

C.ordre.push(
 {t:"Diviser deux fractions",ic:"➗",s:["Écrire l'inverse de la deuxième fraction","Remplacer la division par une multiplication","Décomposer pour simplifier","Multiplier numérateurs et dénominateurs","Écrire le résultat simplifié"]},
 {t:"Résoudre ax + b = cx + d",ic:"⚖️",s:["Enlever cx des deux côtés","Enlever b des deux côtés","Diviser par le coefficient de x","Vérifier en remplaçant dans l'équation de départ","Conclure : la solution est…"]},
 {t:"Démontrer qu'une propriété est vraie pour tous les nombres",ic:"🔤",s:["Écrire les nombres avec des lettres (2n, 2n + 1…)","Écrire le calcul demandé","Développer et réduire","Factoriser pour faire apparaître la propriété","Conclure par une phrase"]}
);
