/* PARTIE 4 — En plus en 2026-2027 : chapitres de l'ancien programme de 4e (repères annuels 2019), encore étudiés
   cette année ; le nouveau programme (BO n° 10 du 5 mars 2026) les place en 3e. */

/* ---------- Théorème de Thalès ---------- */
C.modules.push({id:"thales",n:4,i:"🔻",t:"Le théorème de Thalès",d:"Triangles emboîtés, rapports égaux, calculer une longueur",
 s:[{h:"La configuration",l:["Un triangle ABC, M sur le côté [AB], N sur le côté [AC], et <b>(MN) parallèle à (BC)</b>.","Le petit triangle AMN est une <b>réduction</b> du grand triangle ABC."]},
    {h:"Le théorème",l:["Si (MN) // (BC), alors <b>AM/AB = AN/AC = MN/BC</b>.","On écrit en haut les côtés du petit triangle, en bas ceux du grand, en les faisant correspondre."]},
    {h:"Calculer une longueur",l:["On choisit l'égalité de deux rapports qui contient la longueur cherchée et trois longueurs connues.","On calcule par produit en croix (quatrième proportionnelle)."]}],
 k:["Théorème de Thalès","Parallèles","Réduction"]});
C.fiches.thales={
 intro:"Selon la légende, Thalès de Milet aurait mesuré la hauteur de la grande pyramide d'Égypte… avec un simple bâton et son ombre ! Le secret : des triangles « emboîtés » aux côtés proportionnels. C'est le théorème qui porte son nom.",
 s:[
  {p:"Dans le triangle ABC, M est sur [AB] et N sur [AC]. Si <b>(MN) est parallèle à (BC)</b>, le triangle AMN est une réduction du triangle ABC : ses côtés sont <b>proportionnels</b>. <b>AM/AB = AN/AC = MN/BC.</b>",
   fig:{type:"svg",legende:"(MN) // (BC) : AM/AB = AN/AC = MN/BC",svg:"<svg viewBox='0 0 240 130'><path d='M60 10L20 120H220Z' fill='#b18cff22' stroke='#fff' stroke-width='2'/><path d='M40 65H140' stroke='#ffc83d' stroke-width='3' class='draw'/><path d='M85 61l5 4-5 4M170 116l5 4-5 4' stroke='#ffc83d' stroke-width='2' fill='none'/><g fill='#fff' font-size='12'><text x='56' y='8'>A</text><text x='6' y='126'>B</text><text x='222' y='126'>C</text><text x='24' y='66'>M</text><text x='144' y='66'>N</text></g></svg>"},
   q:["(MN) // (BC), M sur [AB], N sur [AC]. Quelle égalité est vraie ?",["AM/AB = MN/BC","AM/MB = MN/BC","AB/AM = MN/BC","AM/AN = AB/BC"],0,"Petit triangle en haut, grand triangle en bas, côtés correspondants."]},
  {p:"Pour <b>calculer</b> une longueur : AM = 3 cm, AB = 7,5 cm, MN = 2 cm, (MN) // (BC). On cherche BC. On garde AM/AB = MN/BC : 3/7,5 = 2/BC, donc BC = 7,5 × 2 ÷ 3 = 5 cm.",
   fig:{type:"flux",legende:"Rédaction type",etapes:[["Hypothèses","M ∈ [AB], N ∈ [AC], (MN) // (BC)"],["D'après le théorème de Thalès","AM/AB = AN/AC = MN/BC"],["On remplace","3/7,5 = 2/BC"],["Produit en croix","BC = 7,5 × 2 ÷ 3 = 5 cm"]]},
   att:"On compare AM avec AB (le côté entier), pas avec MB ! AM/MB n'est PAS égal à MN/BC.",
   q:["AM = 4, AB = 10, MN = 3, (MN) // (BC). BC = ?",["7,5","12","1,2","13,3"],0,"4/10 = 3/BC, BC = 10 × 3 ÷ 4 = 7,5."]},
  {p:"La <b>méthode de Thalès</b> pour la pyramide : au même moment, le bâton et la pyramide font des ombres ; les rayons du soleil sont parallèles. Les triangles « objet – ombre » sont proportionnels : hauteur pyramide / ombre pyramide = hauteur bâton / ombre bâton.",
   q:["Un bâton de 1 m a une ombre de 1,6 m. Au même moment, l'ombre d'un arbre mesure 12 m. Hauteur de l'arbre ?",["7,5 m","19,2 m","10,4 m","13,6 m"],0,"h/12 = 1/1,6, donc h = 12 ÷ 1,6 = 7,5 m."]}
 ],
 retenir:["Configuration : M ∈ [AB], N ∈ [AC], (MN) // (BC).","AM/AB = AN/AC = MN/BC (petit / grand).","Calculer : produit en croix.","Ne jamais comparer avec MB : toujours avec le côté entier AB."]
};

/* ---------- Cosinus ---------- */
C.modules.push({id:"cosinus",n:4,i:"📏",t:"Le cosinus",d:"Côté adjacent, hypoténuse, calculer une longueur ou un angle",
 s:[{h:"Définition",l:["Dans un triangle <b>rectangle</b>, le cosinus d'un angle aigu est : <b>côté adjacent ÷ hypoténuse</b>.","Le côté adjacent est le côté de l'angle qui n'est pas l'hypoténuse.","Le cosinus d'un angle aigu est toujours entre 0 et 1."]},
    {h:"Calculer une longueur",l:["ABC rectangle en A, angle B = 40°, BC = 10 cm : AB = 10 × cos(40°) ≈ 7,7 cm.","Si on cherche l'hypoténuse : BC = AB ÷ cos(B)."]},
    {h:"Calculer un angle",l:["cos(B) = AB/BC, puis on utilise la touche <b>arccos</b> (ou cos⁻¹) de la calculatrice.","Calculatrice réglée en <b>degrés</b>."]}],
 k:["Cosinus","Côté adjacent","Hypoténuse"]});
C.fiches.cosinus={
 intro:"Une échelle de 4 m posée contre un mur doit faire un angle d'environ 75° avec le sol pour être sûre. À quelle distance du mur poser son pied ? Pythagore ne suffit pas, car on connaît un angle : il faut le cosinus.",
 s:[
  {p:"Dans un triangle ABC <b>rectangle en A</b>, pour l'angle aigu en B : l'<b>hypoténuse</b> est [BC] et le <b>côté adjacent</b> à l'angle B est [AB] (l'autre côté de l'angle). <b>cos(B) = AB ÷ BC</b> = adjacent ÷ hypoténuse.",
   fig:{type:"svg",legende:"Pour l'angle B : adjacent [AB], hypoténuse [BC]",svg:"<svg viewBox='0 0 240 130'><path d='M30 110H190V25Z' fill='#b18cff22' stroke='#fff' stroke-width='2'/><path d='M182 110V102H190' stroke='#fff' fill='none'/><path d='M30 110H190' stroke='#2ed47a' stroke-width='4'/><path d='M30 110L190 25' stroke='#ff8a3d' stroke-width='4'/><path d='M60 110A30 30 0 0 0 56.5 96' stroke='#ffc83d' stroke-width='3' fill='none'/><g fill='#fff' font-size='12'><text x='14' y='116'>B</text><text x='194' y='122'>A</text><text x='194' y='24'>C</text></g><text x='100' y='126' fill='#2ed47a' font-size='11'>adjacent</text><text x='80' y='58' fill='#ff8a3d' font-size='11'>hypoténuse</text></svg>"},
   q:["DEF rectangle en E. cos(D) = ?",["DE/DF","EF/DF","DF/DE","DE/EF"],0,"Adjacent à D : [DE] ; hypoténuse : [DF]."]},
  {p:"Pour <b>calculer une longueur</b> : on écrit le cosinus, on remplace, on résout. L'échelle : hypoténuse 4 m, angle 75° avec le sol ; la distance au mur d est adjacente : cos(75°) = d ÷ 4, donc d = 4 × cos(75°) ≈ 1,04 m.",
   fig:{type:"flux",legende:"Trouver l'hypoténuse : AB = 6 cm, B = 35°",etapes:[["Cosinus","cos(35°) = AB/BC = 6/BC"],["Isoler BC","BC = 6 ÷ cos(35°)"],["Calculatrice","BC ≈ 6 ÷ 0,819 ≈ 7,3 cm"]]},
   q:["Hypoténuse 8 cm, angle 60°. Côté adjacent ?",["4 cm","6,9 cm","16 cm","13,9 cm"],0,"8 × cos(60°) = 8 × 0,5 = 4."]},
  {p:"Pour <b>calculer un angle</b> : on calcule le cosinus avec les longueurs, puis on utilise <b>arccos</b> (touche cos⁻¹). ABC rectangle en A, AB = 5 cm, BC = 7 cm : cos(B) = 5/7 ≈ 0,714, donc B ≈ 44°.",
   att:"Le cosinus ne s'utilise QUE dans un triangle rectangle, et la calculatrice doit être en mode degrés (D ou DEG).",
   q:["cos(x) = 0,5. Que vaut l'angle x ?",["60°","30°","45°","0,5°"],0,"arccos(0,5) = 60°."]}
 ],
 retenir:["Triangle rectangle uniquement.","cos(angle) = adjacent ÷ hypoténuse (entre 0 et 1).","Longueur : × ou ÷ par le cosinus.","Angle : arccos (cos⁻¹), calculatrice en degrés."]
};

/* ---------- Puissances de 10 et notation scientifique ---------- */
C.modules.push({id:"scientifique",n:4,i:"🔬",t:"Puissances de 10 et notation scientifique",d:"Exposants négatifs, préfixes, écriture scientifique",
 s:[{h:"Exposants négatifs",l:["10⁻ⁿ = 1/10ⁿ = 0,00…01 (le 1 est au n-ième rang après la virgule).","10⁻¹ = 0,1 ; 10⁻³ = 0,001.","10ⁿ × 10ᵐ = 10ⁿ⁺ᵐ, même avec des exposants négatifs."]},
    {h:"Préfixes",l:["milli (m) = 10⁻³ ; micro (µ) = 10⁻⁶ ; nano (n) = 10⁻⁹.","kilo = 10³ ; méga = 10⁶ ; giga = 10⁹."]},
    {h:"Notation scientifique",l:["a × 10ⁿ avec <b>1 ≤ a &lt; 10</b> et n entier relatif.","345 000 = 3,45 × 10⁵ ; 0,0072 = 7,2 × 10⁻³.","Elle donne l'ordre de grandeur d'un nombre."]}],
 k:["Notation scientifique","Préfixe","Puissance"]});
C.fiches.scientifique={
 intro:"La distance Terre-Soleil : environ 150 000 000 km. La taille d'un virus : environ 0,000 000 1 m. Avec tous ces zéros, impossible de ne pas se tromper ! La notation scientifique écrit 1,5 × 10⁸ km et 1 × 10⁻⁷ m : court, clair, comparable.",
 s:[
  {p:"Pour un entier n positif, <b>10⁻ⁿ = 1/10ⁿ</b>. 10⁻² = 1/100 = 0,01. Multiplier par 10⁻ⁿ revient à <b>diviser par 10ⁿ</b> : on décale la virgule de n rangs vers la gauche. 45 × 10⁻³ = 0,045.",
   fig:{type:"chiffres",items:[[0.1,"","10⁻¹"],[0.01,"","10⁻²"],[0.001,"","10⁻³ = milli"]]},
   q:["10⁻⁴ = ?",["0,0001","−10 000","0,001","−0,0001"],0,"1/10 000."]},
  {p:"Les <b>préfixes</b> des unités : milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹). Un micromètre (µm) = 10⁻⁶ m ; un nanomètre = 10⁻⁹ m. Les règles de calcul restent vraies : 10⁵ × 10⁻⁸ = 10⁻³.",
   q:["1 mm = …",["10⁻³ m","10³ m","10⁻² m","10⁻⁶ m"],0,"milli = 10⁻³."]},
  {p:"La <b>notation scientifique</b> d'un nombre positif s'écrit <b>a × 10ⁿ</b> avec <b>1 ≤ a &lt; 10</b> (un seul chiffre non nul avant la virgule). 52 300 = 5,23 × 10⁴ ; 0,000 64 = 6,4 × 10⁻⁴. Une calculatrice affiche souvent « 6.4E-4 ».",
   fig:{type:"flux",legende:"Écrire 0,000 38 en notation scientifique",etapes:[["Placer la virgule après le 1er chiffre non nul","3,8"],["Compter les rangs de décalage","4 rangs vers la droite"],["Exposant négatif","3,8 × 10⁻⁴"]]},
   att:"25 × 10³ n'est pas une notation scientifique (25 ≥ 10) : on écrit 2,5 × 10⁴.",
   q:["Notation scientifique de 470 000 ?",["4,7 × 10⁵","47 × 10⁴","4,7 × 10⁻⁵","0,47 × 10⁶"],0,"1 ≤ 4,7 < 10 ; virgule décalée de 5 rangs."]}
 ],
 retenir:["10⁻ⁿ = 1/10ⁿ.","milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹.","Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10.","Grand nombre : n > 0 ; petit nombre : n < 0."]
};

/* ---------- Nombres premiers ---------- */
C.modules.push({id:"premiers",n:4,i:"💎",t:"Nombres premiers et décomposition",d:"Reconnaître, décomposer, rendre une fraction irréductible",
 s:[{h:"Les nombres premiers",l:["Un nombre <b>premier</b> a exactement deux diviseurs : 1 et lui-même.","Les premiers inférieurs à 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.","1 n'est pas premier."]},
    {h:"Décomposer",l:["Tout entier ≥ 2 s'écrit comme un <b>produit de nombres premiers</b>, de façon unique (à l'ordre près).","84 = 2 × 2 × 3 × 7 = 2² × 3 × 7.","On divise successivement par 2, 3, 5, 7…"]},
    {h:"Fraction irréductible",l:["On décompose numérateur et dénominateur, puis on simplifie par les facteurs communs.","60/84 = (2² × 3 × 5)/(2² × 3 × 7) = 5/7."]}],
 k:["Nombre premier","Décomposition en facteurs premiers","Fraction irréductible"]});
C.fiches.premiers={
 intro:"Les nombres premiers sont les « atomes » des nombres : tous les entiers sont fabriqués en les multipliant. Ils protègent aussi tes achats en ligne : le chiffrement des cartes bancaires repose sur la difficulté de décomposer de très grands nombres en facteurs premiers.",
 s:[
  {p:"Un nombre <b>premier</b> a exactement deux diviseurs distincts : 1 et lui-même. 13 est premier ; 15 = 3 × 5 ne l'est pas. Pour tester si un nombre est premier, on essaie de le diviser par 2, 3, 5, 7… tant que le carré du diviseur ne dépasse pas le nombre.",
   q:["Lequel est premier ?",["31","33","35","39"],0,"33 = 3 × 11, 35 = 5 × 7, 39 = 3 × 13."]},
  {p:"<b>Décomposer</b> un nombre en produit de facteurs premiers : on le divise par le plus petit nombre premier possible, et on recommence. 180 ÷ 2 = 90 ; ÷ 2 = 45 ; ÷ 3 = 15 ; ÷ 3 = 5 ; 5 est premier. Donc 180 = 2² × 3² × 5.",
   fig:{type:"flux",legende:"Décomposer 126",etapes:[["126 ÷ 2","63"],["63 ÷ 3","21"],["21 ÷ 3","7 (premier)"],["Résultat","126 = 2 × 3² × 7"]]},
   q:["Décomposition de 72 ?",["2³ × 3²","8 × 9","2² × 3³","2 × 36"],0,"72 = 8 × 9 = 2³ × 3² (8 et 9 ne sont pas premiers)."]},
  {p:"Une fraction est <b>irréductible</b> quand on ne peut plus la simplifier. Méthode sûre : décomposer numérateur et dénominateur en facteurs premiers, puis barrer les facteurs communs. 126/180 = (2 × 3² × 7)/(2² × 3² × 5) = 7/(2 × 5) = 7/10.",
   q:["Forme irréductible de 42/70 ?",["3/5","6/10","21/35","2/3"],0,"42 = 2 × 3 × 7 et 70 = 2 × 5 × 7 : on simplifie par 14."]}
 ],
 retenir:["Premier : exactement deux diviseurs (1 n'est pas premier).","Décomposer : divisions successives par 2, 3, 5, 7…","La décomposition est unique.","Fraction irréductible : barrer les facteurs premiers communs."]
};

C.lexique.push(
 ["Théorème de Thalès","Si (MN) // (BC) avec M ∈ [AB] et N ∈ [AC], alors AM/AB = AN/AC = MN/BC."],
 ["Réduction","Figure dont toutes les longueurs sont multipliées par un même nombre inférieur à 1."],
 ["Cosinus","Dans un triangle rectangle, côté adjacent à un angle aigu divisé par l'hypoténuse."],
 ["Côté adjacent","Côté d'un angle aigu d'un triangle rectangle qui n'est pas l'hypoténuse."],
 ["Notation scientifique","Écriture a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif."],
 ["Nombre premier","Entier qui a exactement deux diviseurs : 1 et lui-même."],
 ["Décomposition en facteurs premiers","Écriture d'un entier comme produit de nombres premiers : 84 = 2² × 3 × 7."],
 ["Fraction irréductible","Fraction qu'on ne peut plus simplifier."]
);

C.quiz.push(
 ["thales","(MN) // (BC), AM = 2, AB = 6, AN = 3. AC = ?",["9","1","4","12"],0,"2/6 = 3/AC, AC = 9."],
 ["thales","(MN) // (BC), AM/AB = 1/3, BC = 12. MN = ?",["4","36","9","3"],0,"MN = 12 × 1/3."],
 ["thales","Pour appliquer le théorème de Thalès, il faut…",["Deux droites parallèles","Un angle droit","Un triangle isocèle","Un cercle"],0,"(MN) // (BC)."],
 ["thales","Le petit triangle AMN est…",["Une réduction de ABC","Un agrandissement de ABC","Égal à ABC","Sans rapport avec ABC"],0,"Ses côtés sont proportionnels, plus petits."],
 ["cosinus","Dans ABC rectangle en A, cos(C) = ?",["AC/BC","AB/BC","AC/AB","BC/AC"],0,"Adjacent à C : [AC] ; hypoténuse : [BC]."],
 ["cosinus","Hypoténuse 10 cm, angle 30°. Côté adjacent (arrondi) ?",["8,7 cm","5 cm","11,5 cm","3 cm"],0,"10 × cos(30°) ≈ 8,66."],
 ["cosinus","cos(B) = 0,8. Que vaut B (arrondi au degré) ?",["37°","53°","80°","0,8°"],0,"arccos(0,8) ≈ 36,87°."],
 ["cosinus","Le cosinus d'un angle aigu est toujours…",["Entre 0 et 1","Supérieur à 1","Négatif","Égal à 0,5"],0,"L'adjacent est plus court que l'hypoténuse."],
 ["scientifique","10⁻² × 10⁵ = ?",["10³","10⁻¹⁰","10⁷","10⁻³"],0,"−2 + 5 = 3."],
 ["scientifique","Notation scientifique de 0,0056 ?",["5,6 × 10⁻³","56 × 10⁻⁴","5,6 × 10³","0,56 × 10⁻²"],0,"1 ≤ 5,6 < 10."],
 ["scientifique","3,2 × 10⁻² = ?",["0,032","320","0,32","−320"],0,"Décaler la virgule de 2 rangs vers la gauche."],
 ["scientifique","1 nanomètre = …",["10⁻⁹ m","10⁹ m","10⁻⁶ m","10⁻³ m"],0,"nano = 10⁻⁹."],
 ["premiers","Combien y a-t-il de nombres premiers inférieurs à 20 ?",["8","10","7","9"],0,"2, 3, 5, 7, 11, 13, 17, 19."],
 ["premiers","Décomposition de 60 ?",["2² × 3 × 5","4 × 15","2 × 30","2 × 3 × 10"],0,"60 = 4 × 15 = 2² × 3 × 5."],
 ["premiers","Forme irréductible de 36/48 ?",["3/4","9/12","6/8","2/3"],0,"36 = 2² × 3², 48 = 2⁴ × 3 : on simplifie par 12."]
);

C.vf.push(
 ["Dans la configuration de Thalès, AM/MB = MN/BC.",false,"C'est AM/AB = MN/BC (côté entier)."],
 ["Le cosinus s'utilise dans n'importe quel triangle.",false,"Seulement dans un triangle rectangle."],
 ["cos(60°) = 0,5.",true,"Valeur à connaître."],
 ["10⁻³ = −1 000.",false,"10⁻³ = 0,001 (positif !)."],
 ["0,5 × 10³ est une notation scientifique.",false,"0,5 < 1 : on écrit 5 × 10²."],
 ["2 est le seul nombre premier pair.",true,"Les autres pairs sont divisibles par 2."],
 ["La décomposition d'un entier en facteurs premiers est unique.",true,"À l'ordre des facteurs près."]
);

C.ordre.push(
 {t:"Calculer une longueur avec Thalès",ic:"🔻",s:["Vérifier : points alignés et droites parallèles","Écrire l'égalité des trois rapports","Garder les deux rapports utiles","Remplacer par les longueurs connues","Calculer par produit en croix"]},
 {t:"Calculer un angle avec le cosinus",ic:"📏",s:["Repérer le triangle rectangle","Identifier l'hypoténuse et le côté adjacent à l'angle","Écrire cos(angle) = adjacent ÷ hypoténuse","Calculer le quotient","Utiliser arccos (calculatrice en degrés)"]}
);
