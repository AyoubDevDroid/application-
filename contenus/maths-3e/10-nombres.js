/* PARTIE 1 — Nombres et calcul littéral */

/* ---------- Relatifs et fractions (rappels) ---------- */
C.modules.push({id:"fractions",n:1,i:"➗",t:"Relatifs et fractions",d:"Règles des signes, opérations sur les fractions",
 s:[{h:"Les nombres relatifs",l:["Produit ou quotient de deux nombres de <b>même signe</b> : positif. De <b>signes contraires</b> : négatif.","(−3) × (−4) = 12 ; (−3) × 4 = −12.","Soustraire un nombre, c'est ajouter son opposé : 5 − (−2) = 7."]},
    {h:"Additionner des fractions",l:["On met au <b>même dénominateur</b>, puis on additionne les numérateurs.","1/3 + 1/4 = 4/12 + 3/12 = 7/12."]},
    {h:"Multiplier et diviser",l:["Multiplier : numérateurs entre eux, dénominateurs entre eux. 2/3 × 5/7 = 10/21.","Diviser par une fraction, c'est multiplier par son <b>inverse</b> : 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6."]}],
 k:["Nombre relatif","Inverse","Fraction irréductible"]});
C.fiches.fractions={
 intro:"Les relatifs et les fractions sont partout dans les calculs du brevet : équations, probabilités, fonctions. Les règles sont peu nombreuses, mais une erreur de signe coûte des points à chaque fois.",
 s:[
  {p:"Pour la multiplication et la division, on applique la <b>règle des signes</b> : même signe → résultat positif, signes contraires → résultat négatif. Avec plusieurs facteurs, on compte les signes « moins » : un nombre pair donne un résultat positif. Pour l'addition, on ne suit pas cette règle : −3 + (−4) = −7 et −3 + 4 = 1.",
   fig:{type:"cycle",centre:"Règle des signes (× et ÷)",etapes:[["+ × + = +","#2ed47a"],["− × − = +","#2ed47a"],["+ × − = −","#ff5470"],["− × + = −","#ff5470"]]},
   q:["(−2) × (−3) × (−1) = ?",["−6","6","−5","5"],0,"Trois signes moins (nombre impair) : le résultat est négatif."]},
  {p:"Pour additionner ou soustraire des fractions, on les écrit avec un <b>dénominateur commun</b> (un multiple commun des dénominateurs), puis on additionne les numérateurs. On simplifie le résultat si possible.",
   fig:{type:"flux",legende:"5/6 − 1/4",etapes:[["Dénominateur commun","12"],["5/6 = 10/12 ; 1/4 = 3/12","10/12 − 3/12"],["Résultat","7/12"]]},
   q:["2/5 + 1/10 = ?",["1/2","3/15","3/10","2/50"],0,"4/10 + 1/10 = 5/10 = 1/2."]},
  {p:"Pour <b>multiplier</b>, on multiplie les numérateurs entre eux et les dénominateurs entre eux (pas besoin de dénominateur commun). Pour <b>diviser</b> par une fraction, on multiplie par son <b>inverse</b> : l'inverse de a/b est b/a.",
   att:"On simplifie toujours le résultat final : 10/12 = 5/6. Au brevet, une fraction non simplifiée peut coûter un point.",
   q:["3/4 ÷ 3/8 = ?",["2","9/32","1/2","6"],0,"3/4 × 8/3 = 24/12 = 2."]}
 ],
 retenir:["× et ÷ : même signe → +, signes contraires → −.","Addition de fractions : même dénominateur.","Multiplication : haut × haut, bas × bas. Division : × par l'inverse.","Toujours simplifier le résultat."]
};

/* ---------- Puissances ---------- */
C.modules.push({id:"puissances",n:1,i:"⚡",t:"Puissances et notation scientifique",d:"Puissances de 10, règles de calcul, écriture scientifique",
 s:[{h:"Définition",l:["aⁿ = a × a × … × a (n facteurs). 2⁵ = 32.","a⁰ = 1 ; a⁻ⁿ = 1/aⁿ. 10⁻³ = 0,001."]},
    {h:"Règles avec les puissances de 10",l:["10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ.","10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ.","(10ᵃ)ᵇ = 10ᵃˣᵇ."]},
    {h:"La notation scientifique",l:["a × 10ⁿ avec <b>1 ≤ a &lt; 10</b>.","3 400 000 = 3,4 × 10⁶ ; 0,00052 = 5,2 × 10⁻⁴.","Préfixes : kilo 10³, méga 10⁶, giga 10⁹, milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹."]}],
 k:["Puissance","Notation scientifique","Exposant"]});
C.fiches.puissances={
 intro:"La distance Terre-Soleil (150 000 000 km), la taille d'un virus (0,0000001 m) : les très grands et très petits nombres s'écrivent facilement avec les puissances de 10. C'est un automatisme incontournable du brevet.",
 s:[
  {p:"aⁿ (lire « a exposant n ») est le produit de n facteurs égaux à a. Par convention, a⁰ = 1 et a⁻ⁿ = 1/aⁿ. Pour les puissances de 10, l'exposant compte les zéros : 10⁴ = 10 000 ; 10⁻² = 0,01.",
   fig:{type:"barres",legende:"Puissances de 2",items:[["2¹",2,""],["2²",4,""],["2³",8,""],["2⁴",16,""],["2⁵",32,""]]},
   q:["(−2)⁴ = ?",["16","−16","−8","8"],0,"Quatre facteurs −2 : nombre pair de signes moins, donc 16."]},
  {p:"Avec les puissances de 10, les exposants s'ajoutent pour un produit, se soustraient pour un quotient, se multiplient pour une puissance de puissance. 10⁵ × 10⁻² = 10³ ; 10⁷ ÷ 10⁴ = 10³ ; (10²)³ = 10⁶.",
   q:["10⁻³ × 10⁵ = ?",["10²","10⁻¹⁵","10⁸","10⁻²"],0,"−3 + 5 = 2."]},
  {p:"La <b>notation scientifique</b> d'un nombre s'écrit a × 10ⁿ avec a ayant un seul chiffre non nul avant la virgule (1 ≤ a &lt; 10). On compte de combien de rangs on décale la virgule : vers la gauche pour les grands nombres (n positif), vers la droite pour les petits (n négatif).",
   fig:{type:"flux",legende:"Écrire 0,000 72 en notation scientifique",etapes:[["0,000 72","virgule décalée de 4 rangs vers la droite"],["7,2","exposant −4"],["Résultat","7,2 × 10⁻⁴"]]},
   att:"34 × 10⁵ n'est pas une notation scientifique (34 ≥ 10) : on écrit 3,4 × 10⁶.",
   q:["La notation scientifique de 52 000 est…",["5,2 × 10⁴","52 × 10³","0,52 × 10⁵","5,2 × 10³"],0,"1 ≤ 5,2 < 10 et 52 000 = 5,2 × 10 000."]}
 ],
 retenir:["aⁿ = n facteurs a ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ.","10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ ; 10ᵃ ÷ 10ᵇ = 10ᵃ⁻ᵇ.","Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10."]
};

/* ---------- Arithmétique ---------- */
C.modules.push({id:"arithmetique",n:1,i:"🔍",t:"Arithmétique",d:"Nombres premiers, décomposition, fraction irréductible",
 s:[{h:"Les nombres premiers",l:["Un nombre <b>premier</b> a exactement deux diviseurs : 1 et lui-même.","Les premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…","1 n'est pas premier ; 2 est le seul premier pair."]},
    {h:"Décomposer en facteurs premiers",l:["Tout entier ≥ 2 s'écrit comme un produit de nombres premiers.","On divise par 2, 3, 5, 7… tant que c'est possible.","360 = 2³ × 3² × 5."]},
    {h:"Fractions irréductibles",l:["On décompose numérateur et dénominateur, puis on simplifie les facteurs communs.","84/126 = (2² × 3 × 7)/(2 × 3² × 7) = 2/3."]}],
 k:["Nombre premier","Décomposition en facteurs premiers","Fraction irréductible"]});
C.fiches.arithmetique={
 intro:"Les nombres premiers sont les « briques » de tous les nombres entiers. Savoir décomposer un nombre en facteurs premiers permet de simplifier des fractions et de résoudre des problèmes de partage (bouquets, paquets, carrelage).",
 s:[
  {p:"Un nombre <b>premier</b> a exactement deux diviseurs : 1 et lui-même. 7 est premier (diviseurs 1 et 7), 9 ne l'est pas (1, 3, 9). 1 n'est pas premier (un seul diviseur). Pour tester un nombre, on essaie de le diviser par 2, 3, 5, 7… jusqu'à ce que le carré du diviseur dépasse le nombre.",
   fig:{type:"chiffres",items:[[2,"","le seul premier pair"],[25,"","nombres premiers entre 1 et 100"],[97,"","le plus grand premier < 100"]]},
   q:["Lequel est premier ?",["29","27","39","51"],0,"27 = 3 × 9 ; 39 = 3 × 13 ; 51 = 3 × 17 ; 29 n'a que 1 et 29."]},
  {p:"Tout nombre entier supérieur à 1 se décompose de façon unique en produit de facteurs premiers. Méthode : on divise par le plus petit premier possible, et on recommence avec le quotient.",
   fig:{type:"flux",legende:"Décomposer 360",etapes:[["360 ÷ 2","180"],["180 ÷ 2","90"],["90 ÷ 2","45"],["45 ÷ 3","15"],["15 ÷ 3","5 (premier)"],["Résultat","2³ × 3² × 5"]]},
   q:["La décomposition de 60 est…",["2² × 3 × 5","2 × 30","4 × 15","2 × 3 × 10"],0,"Tous les facteurs doivent être premiers : 4, 10, 15, 30 ne le sont pas."]},
  {p:"Une fraction est <b>irréductible</b> quand on ne peut plus la simplifier. On décompose le numérateur et le dénominateur, puis on barre les facteurs communs. Cette méthode sert aussi à trouver le plus grand nombre de paquets identiques qu'on peut faire (problèmes de partage).",
   ex:"Un fleuriste a 84 roses et 126 tulipes. Il veut faire le plus grand nombre de bouquets identiques en utilisant toutes les fleurs. 84 = 2² × 3 × 7 et 126 = 2 × 3² × 7 : facteurs communs 2 × 3 × 7 = 42 bouquets, chacun avec 2 roses et 3 tulipes.",
   q:["La forme irréductible de 18/24 est…",["3/4","9/12","6/8","2/3"],0,"18 = 2 × 3² et 24 = 2³ × 3 : on simplifie par 6."]}
 ],
 retenir:["Premier = exactement deux diviseurs (1 et lui-même) ; 1 n'est pas premier.","Décomposition unique en facteurs premiers : 360 = 2³ × 3² × 5.","Irréductible : on simplifie par tous les facteurs communs."]
};

/* ---------- Racines carrées ---------- */
C.modules.push({id:"racines",n:1,i:"√",t:"Racines carrées",d:"Définition, carrés parfaits, valeurs approchées",
 s:[{h:"Définition",l:["Pour a ≥ 0, <b>√a</b> est le nombre positif dont le carré vaut a.","√49 = 7 car 7² = 49.","√a n'existe pas pour a négatif."]},
    {h:"Les carrés parfaits",l:["1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144…","À connaître par cœur pour Pythagore."]},
    {h:"Valeurs approchées",l:["√50 est entre 7 et 8 car 49 &lt; 50 &lt; 64.","La calculatrice donne √50 ≈ 7,07."]}],
 k:["Racine carrée","Carré parfait"]});
C.fiches.racines={
 intro:"La racine carrée « défait » le carré. Elle apparaît dès qu'on utilise le théorème de Pythagore ou qu'on résout x² = a. Connaître les carrés parfaits fait gagner un temps précieux, surtout dans la partie automatismes sans calculatrice.",
 s:[
  {p:"Pour un nombre positif a, la <b>racine carrée de a</b>, notée √a, est le nombre <b>positif</b> qui, multiplié par lui-même, donne a. √81 = 9 car 9 × 9 = 81. On a toujours (√a)² = a.",
   q:["√144 = ?",["12","72","14","11"],0,"12 × 12 = 144."]},
  {p:"Les <b>carrés parfaits</b> sont les carrés des entiers : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. Leurs racines sont des entiers. Pour les autres nombres, la racine est un nombre à virgule qu'on arrondit.",
   fig:{type:"barres",legende:"Carrés parfaits",items:[["5²",25,""],["7²",49,""],["9²",81,""],["11²",121,""],["12²",144,""]]},
   q:["Quel nombre est un carré parfait ?",["64","50","90","120"],0,"64 = 8²."]},
  {p:"Pour encadrer √a sans calculatrice, on cherche les deux carrés parfaits qui l'entourent : 36 &lt; 40 &lt; 49 donc 6 &lt; √40 &lt; 7. Au brevet, on donne souvent une valeur arrondie au dixième ou au centième avec la calculatrice.",
   att:"√(a + b) n'est pas égal à √a + √b : √(9 + 16) = √25 = 5, alors que √9 + √16 = 7.",
   q:["√30 est compris entre…",["5 et 6","4 et 5","6 et 7","15 et 16"],0,"25 < 30 < 36."]}
 ],
 retenir:["√a = nombre positif dont le carré vaut a (a ≥ 0).","Carrés parfaits à connaître jusqu'à 15² = 225.","Encadrer entre deux carrés parfaits ; √(a + b) ≠ √a + √b."]
};

/* ---------- Développer ---------- */
C.modules.push({id:"developper",n:1,i:"📐",t:"Développer et réduire",d:"Distributivité simple et double, identité a² − b²",
 s:[{h:"Distributivité simple",l:["k(a + b) = ka + kb.","3(x + 4) = 3x + 12 ; −2(x − 5) = −2x + 10."]},
    {h:"Double distributivité",l:["(a + b)(c + d) = ac + ad + bc + bd.","(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6."]},
    {h:"Identité remarquable",l:["(a + b)(a − b) = <b>a² − b²</b>.","(x + 5)(x − 5) = x² − 25."]},
    {h:"Réduire",l:["On regroupe les termes de même nature : les x², les x, les nombres.","3x + 2x² − x + 4 = 2x² + 2x + 4."]}],
 k:["Développer","Réduire","Distributivité","Identité remarquable"]});
C.fiches.developper={
 intro:"Développer, c'est transformer un produit en somme. C'est la clé du calcul littéral : on s'en sert pour simplifier des expressions, résoudre des équations et prouver qu'une expression est toujours vraie (« pour tout nombre x… »).",
 s:[
  {p:"La <b>distributivité simple</b> : le facteur devant la parenthèse multiplie chaque terme à l'intérieur. Attention au signe : −3(x − 4) = −3x + 12, car (−3) × (−4) = +12.",
   fig:{type:"flux",legende:"Développer −3(2x − 4)",etapes:[["−3 × 2x","−6x"],["−3 × (−4)","+12"],["Résultat","−6x + 12"]]},
   q:["5(2x − 3) = ?",["10x − 15","10x − 3","7x − 8","10x + 15"],0,"5 × 2x = 10x ; 5 × (−3) = −15."]},
  {p:"La <b>double distributivité</b> : chaque terme de la première parenthèse multiplie chaque terme de la seconde, soit 4 produits. Puis on <b>réduit</b> en regroupant les termes semblables.",
   fig:{type:"flux",legende:"Développer (2x + 1)(x − 3)",etapes:[["2x × x","2x²"],["2x × (−3)","−6x"],["1 × x","+x"],["1 × (−3)","−3"],["Réduit","2x² − 5x − 3"]]},
   q:["(x + 4)(x + 1) = ?",["x² + 5x + 4","x² + 4","x² + 5x + 5","2x + 5"],0,"x² + x + 4x + 4."]},
  {p:"L'<b>identité remarquable</b> (a + b)(a − b) = a² − b² est un raccourci de la double distributivité : les termes du milieu s'annulent. Elle sert dans les deux sens (développer et factoriser). On peut aussi retrouver (a + b)² = a² + 2ab + b² en développant (a + b)(a + b).",
   att:"(x + 3)² n'est pas x² + 9 ! (x + 3)² = (x + 3)(x + 3) = x² + 6x + 9.",
   q:["(3x + 2)(3x − 2) = ?",["9x² − 4","9x² + 4","3x² − 4","9x² − 12x − 4"],0,"(3x)² − 2² = 9x² − 4."]}
 ],
 retenir:["k(a + b) = ka + kb, attention aux signes.","(a + b)(c + d) = ac + ad + bc + bd, puis réduire.","(a + b)(a − b) = a² − b² ; (a + b)² = a² + 2ab + b²."]
};

/* ---------- Factoriser ---------- */
C.modules.push({id:"factoriser",n:1,i:"🧲",t:"Factoriser",d:"Facteur commun, identité a² − b²",
 s:[{h:"Le principe",l:["Factoriser, c'est transformer une somme en <b>produit</b>.","C'est l'inverse de développer."]},
    {h:"Avec un facteur commun",l:["ka + kb = k(a + b).","6x + 9 = 3(2x + 3) ; x² + 5x = x(x + 5).","(x + 1)(x − 2) + (x + 1)(3x) = (x + 1)(x − 2 + 3x) = (x + 1)(4x − 2)."]},
    {h:"Avec l'identité remarquable",l:["a² − b² = (a + b)(a − b).","x² − 49 = (x + 7)(x − 7) ; 4x² − 9 = (2x + 3)(2x − 3)."]}],
 k:["Factoriser","Facteur commun"]});
C.fiches.factoriser={
 intro:"Factoriser, c'est écrire une expression comme un produit. Pourquoi ? Parce qu'un produit est nul si l'un de ses facteurs est nul : c'est ce qui permet de résoudre beaucoup d'équations du brevet.",
 s:[
  {p:"On cherche un <b>facteur commun</b> à tous les termes et on le met devant une parenthèse. Pour vérifier, on redéveloppe : on doit retrouver l'expression de départ.",
   fig:{type:"flux",legende:"Factoriser 12x² − 8x",etapes:[["Facteur commun","4x"],["12x² = 4x × 3x ; 8x = 4x × 2",""],["Résultat","4x(3x − 2)"]]},
   q:["Factoriser 15x + 10.",["5(3x + 2)","5(3x + 10)","15(x + 10)","3x + 2"],0,"5 × 3x = 15x et 5 × 2 = 10."]},
  {p:"Le facteur commun peut être une parenthèse entière : dans (x + 2)(3x − 1) − (x + 2)(x + 4), le facteur commun est (x + 2). On écrit (x + 2)[(3x − 1) − (x + 4)] = (x + 2)(2x − 5). Attention au signe moins devant la seconde parenthèse.",
   q:["Factoriser (x − 1)(2x + 3) + (x − 1)(x − 5).",["(x − 1)(3x − 2)","(x − 1)(x + 8)","(x − 1)²(3x − 2)","(2x + 3)(x − 5)"],0,"(x − 1)[(2x + 3) + (x − 5)] = (x − 1)(3x − 2)."]},
  {p:"Une différence de deux carrés se factorise avec <b>a² − b² = (a + b)(a − b)</b>. On repère les deux carrés : 25x² − 16 = (5x)² − 4² = (5x + 4)(5x − 4).",
   att:"x² + 16 ne se factorise pas avec cette identité : c'est une somme, pas une différence.",
   q:["Factoriser x² − 81.",["(x + 9)(x − 9)","(x − 9)²","(x + 81)(x − 81)","(x + 9)²"],0,"x² − 9² = (x + 9)(x − 9)."]}
 ],
 retenir:["Factoriser = somme → produit.","Facteur commun (nombre, x, ou parenthèse entière).","a² − b² = (a + b)(a − b).","Vérifier en redéveloppant."]
};

/* ---------- Équations ---------- */
C.modules.push({id:"equations",n:1,i:"⚖️",t:"Équations",d:"Premier degré, mise en équation, produit nul, x² = a",
 s:[{h:"Résoudre une équation du 1er degré",l:["On peut ajouter, soustraire, multiplier ou diviser les deux membres par un même nombre (non nul pour × et ÷).","3x − 5 = 10 → 3x = 15 → x = 5.","On vérifie en remplaçant : 3 × 5 − 5 = 10 ✔."]},
    {h:"Mettre en équation",l:["Choisir l'inconnue (« soit x le prix… »).","Traduire l'énoncé en équation, résoudre, vérifier, conclure par une phrase."]},
    {h:"Équation produit nul",l:["Un produit est nul si et seulement si l'un de ses facteurs est nul.","(x − 3)(2x + 1) = 0 ⟺ x = 3 ou x = −0,5."]},
    {h:"L'équation x² = a",l:["Si a &gt; 0 : deux solutions, √a et −√a.","Si a = 0 : une solution, 0. Si a &lt; 0 : aucune solution."]}],
 k:["Équation","Solution","Équation produit nul"]});
C.fiches.equations={
 intro:"Une équation est une égalité avec une inconnue. La résoudre, c'est trouver toutes les valeurs qui la rendent vraie. Au brevet, on la rencontre dans les automatismes (ax + b = c) et dans les problèmes (mise en équation, produit nul).",
 s:[
  {p:"On isole l'inconnue en faisant <b>la même opération des deux côtés</b>, comme sur une balance. On regroupe les x d'un côté, les nombres de l'autre, puis on divise par le coefficient de x.",
   fig:{type:"flux",legende:"Résoudre 5x + 3 = 2x + 15",etapes:[["On enlève 2x des deux côtés","3x + 3 = 15"],["On enlève 3","3x = 12"],["On divise par 3","x = 4"],["Vérification","5 × 4 + 3 = 23 et 2 × 4 + 15 = 23 ✔"]]},
   q:["Solution de 4x − 7 = 13 ?",["x = 5","x = 1,5","x = 20","x = 6"],0,"4x = 20, donc x = 5."]},
  {p:"<b>Mettre en équation</b> : on choisit l'inconnue, on traduit l'énoncé, on résout, on vérifie et on conclut par une phrase. « Le triple d'un nombre augmenté de 7 vaut 31 » : 3x + 7 = 31, x = 8.",
   q:["Un abonnement coûte 12 € plus 3 € par séance. Avec 48 €, combien de séances ?",["12","16","20","9"],0,"12 + 3x = 48 → 3x = 36 → x = 12."]},
  {p:"<b>Produit nul</b> : si A × B = 0, alors A = 0 ou B = 0. Pour résoudre (x + 4)(3x − 6) = 0 : x + 4 = 0 donne x = −4 ; 3x − 6 = 0 donne x = 2. Deux solutions : −4 et 2. Il faut souvent factoriser d'abord.",
   fig:{type:"flux",legende:"Résoudre x² − 9 = 0",etapes:[["Factoriser","(x + 3)(x − 3) = 0"],["x + 3 = 0 ou x − 3 = 0",""],["Solutions","x = −3 ou x = 3"]]},
   q:["Solutions de (x − 5)(x + 2) = 0 ?",["5 et −2","−5 et 2","5 et 2","10"],0,"x − 5 = 0 ou x + 2 = 0."]},
  {p:"L'équation <b>x² = a</b> : si a est positif, elle a deux solutions, √a et −√a ; si a = 0, une seule (0) ; si a est négatif, aucune (un carré n'est jamais négatif).",
   att:"x² = 25 a DEUX solutions : 5 et −5. Oublier −5 est l'erreur la plus fréquente.",
   q:["Combien de solutions pour x² = −4 ?",["Aucune","Deux : 2 et −2","Une : −2","Une : 2"],0,"Un carré est toujours positif ou nul."]}
 ],
 retenir:["Même opération des deux côtés ; vérifier en remplaçant.","Mise en équation : inconnue, équation, résolution, vérification, phrase.","Produit nul : A × B = 0 ⟺ A = 0 ou B = 0.","x² = a : deux solutions si a > 0, une si a = 0, aucune si a < 0."]
};

C.lexique.push(
 ["Nombre relatif","Nombre positif ou négatif (−3, +5, 0…)."],
 ["Inverse","L'inverse d'un nombre a non nul est 1/a ; l'inverse de a/b est b/a."],
 ["Fraction irréductible","Fraction qu'on ne peut plus simplifier."],
 ["Puissance","aⁿ : produit de n facteurs égaux à a."],
 ["Exposant","Le petit nombre n dans aⁿ."],
 ["Notation scientifique","Écriture a × 10ⁿ avec 1 ≤ a < 10."],
 ["Nombre premier","Entier qui a exactement deux diviseurs : 1 et lui-même."],
 ["Décomposition en facteurs premiers","Écriture d'un entier comme produit de nombres premiers : 60 = 2² × 3 × 5."],
 ["Racine carrée","√a (a ≥ 0) : le nombre positif dont le carré vaut a."],
 ["Carré parfait","Carré d'un entier : 1, 4, 9, 16, 25…"],
 ["Développer","Transformer un produit en somme."],
 ["Réduire","Regrouper les termes de même nature dans une expression."],
 ["Distributivité","k(a + b) = ka + kb."],
 ["Identité remarquable","Égalité toujours vraie, comme (a + b)(a − b) = a² − b²."],
 ["Factoriser","Transformer une somme en produit."],
 ["Facteur commun","Facteur présent dans tous les termes d'une somme."],
 ["Équation","Égalité contenant une inconnue."],
 ["Solution","Valeur de l'inconnue qui rend l'égalité vraie."],
 ["Équation produit nul","Équation de la forme A × B = 0 : A = 0 ou B = 0."]
);

C.quiz.push(
 ["fractions","(−8) ÷ (−2) = ?",["4","−4","−6","16"],0,"Même signe : positif."],
 ["fractions","1/2 + 1/3 = ?",["5/6","2/5","1/5","2/6"],0,"3/6 + 2/6."],
 ["fractions","L'inverse de 3/7 est…",["7/3","−3/7","3/7","1/7"],0,"On échange numérateur et dénominateur."],
 ["fractions","2/3 × 9/4 = ?",["3/2","18/7","11/7","6/12"],0,"18/12 = 3/2."],
 ["puissances","10⁴ × 10³ = ?",["10⁷","10¹²","100⁷","10¹"],0,"On ajoute les exposants."],
 ["puissances","10⁻² = ?",["0,01","−100","0,1","−0,01"],0,"1/10² = 1/100."],
 ["puissances","La notation scientifique de 0,0035 est…",["3,5 × 10⁻³","35 × 10⁻⁴","3,5 × 10³","0,35 × 10⁻²"],0,"1 ≤ 3,5 < 10."],
 ["puissances","Un gigaoctet vaut combien d'octets ?",["10⁹","10⁶","10³","10¹²"],0,"Giga = 10⁹."],
 ["arithmetique","1 est-il un nombre premier ?",["Non, il n'a qu'un seul diviseur","Oui","Oui, c'est le plus petit","Seulement en 3e"],0,"Un nombre premier a exactement deux diviseurs."],
 ["arithmetique","La décomposition de 72 est…",["2³ × 3²","8 × 9","2 × 36","2² × 3³"],0,"72 = 8 × 9 = 2³ × 3²."],
 ["arithmetique","La forme irréductible de 45/60 est…",["3/4","9/12","15/20","5/6"],0,"45 = 3² × 5 et 60 = 2² × 3 × 5 : on simplifie par 15."],
 ["racines","√64 = ?",["8","32","−8","6"],0,"8² = 64."],
 ["racines","√(16 + 9) = ?",["5","7","25","4 + 3"],0,"√25 = 5 (et non √16 + √9 = 7)."],
 ["racines","(√7)² = ?",["7","49","√49","14"],0,"(√a)² = a."],
 ["developper","Développer 4(x − 3).",["4x − 12","4x − 3","4x + 12","x − 12"],0,"4 × x − 4 × 3."],
 ["developper","Développer (x − 2)(x + 5).",["x² + 3x − 10","x² − 10","x² + 7x − 10","x² − 3x + 10"],0,"x² + 5x − 2x − 10."],
 ["developper","(x + 6)(x − 6) = ?",["x² − 36","x² + 36","x² − 12","2x"],0,"Identité a² − b²."],
 ["developper","(x + 3)² = ?",["x² + 6x + 9","x² + 9","x² + 3x + 9","x² + 6"],0,"(x + 3)(x + 3)."],
 ["factoriser","Factoriser 7x − 21.",["7(x − 3)","7(x − 21)","x(7 − 21)","7x(1 − 3)"],0,"7 × 3 = 21."],
 ["factoriser","Factoriser 9x² − 25.",["(3x + 5)(3x − 5)","(9x + 25)(9x − 25)","(3x − 5)²","9(x² − 25)"],0,"(3x)² − 5²."],
 ["factoriser","Factoriser x² + 3x.",["x(x + 3)","3x(x + 1)","x²(1 + 3)","(x + 3)²"],0,"Facteur commun x."],
 ["equations","Solution de 2x + 9 = 1 ?",["x = −4","x = 4","x = 5","x = −5"],0,"2x = −8."],
 ["equations","Solutions de x² = 49 ?",["7 et −7","7","−7","24,5"],0,"Deux solutions : √49 et −√49."],
 ["equations","Solutions de 3x(x − 4) = 0 ?",["0 et 4","3 et 4","0 et −4","4"],0,"3x = 0 ou x − 4 = 0."],
 ["equations","Le double d'un nombre diminué de 5 vaut 17. Ce nombre est…",["11","6","12","22"],0,"2x − 5 = 17 → x = 11."]
);

C.vf.push(
 ["(−3)² = −9.",false,"(−3)² = (−3) × (−3) = 9."],
 ["1 est un nombre premier.",false,"Il n'a qu'un diviseur."],
 ["10⁰ = 1.",true,"Toute puissance d'exposant 0 vaut 1."],
 ["√(a + b) = √a + √b.",false,"√(9 + 16) = 5 alors que √9 + √16 = 7."],
 ["(a + b)(a − b) = a² − b².",true,"C'est une identité remarquable."],
 ["(x + 2)² = x² + 4.",false,"(x + 2)² = x² + 4x + 4."],
 ["L'équation x² = 16 a deux solutions.",true,"4 et −4."],
 ["Diviser par 2/3, c'est multiplier par 3/2.",true,"On multiplie par l'inverse."],
 ["12,5 × 10³ est une notation scientifique.",false,"12,5 ≥ 10 : on écrit 1,25 × 10⁴."],
 ["2 est le seul nombre premier pair.",true,"Tous les autres pairs sont divisibles par 2."]
);

C.ordre.push(
 {t:"Résoudre une équation du 1er degré",ic:"⚖️",s:["Développer et réduire chaque membre si besoin","Regrouper les termes en x d'un côté","Regrouper les nombres de l'autre côté","Diviser par le coefficient de x","Vérifier en remplaçant x dans l'équation de départ"]},
 {t:"Résoudre une équation produit nul",ic:"0️⃣",s:["Tout ramener d'un côté (= 0)","Factoriser","Écrire « un produit est nul si l'un de ses facteurs est nul »","Résoudre chaque petite équation","Donner toutes les solutions"]}
);
