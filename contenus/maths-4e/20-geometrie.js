/* PARTIE 2 — Espace et géométrie (programme de 4e, BO n° 10 du 5 mars 2026) */


/* ---------- Translation ---------- */
C.modules.push({id:"translation",n:2,i:"➡️",t:"Les translations",d:"Glisser une figure, lien avec le parallélogramme, propriétés",
 s:[{h:"Le glissement",l:["Une <b>translation</b> fait glisser une figure sans la tourner ni la retourner.","Elle est définie par une <b>direction</b>, un <b>sens</b> et une <b>longueur</b> (on la dessine par une flèche).","La translation qui transforme A en B : chaque point glisse « comme de A vers B »."]},
    {h:"Lien avec le parallélogramme",l:["Si la translation transforme A en B et M en M', alors <b>ABM'M est un parallélogramme</b> (éventuellement aplati).","Donc (MM') // (AB) et MM' = AB."]},
    {h:"Ce qui est conservé",l:["Longueurs, angles, aires, alignement, parallélisme.","L'image d'une droite est une droite <b>parallèle</b>.","Rappel : symétrie axiale (pliage), demi-tour (symétrie centrale)."]}],
 k:["Translation","Image","Parallélogramme"]});
C.fiches.translation={
 intro:"Un escalator, un tapis roulant, un motif de papier peint qui se répète, une pièce de Tetris qui tombe : c'est une translation. Tout glisse dans la même direction, du même sens, de la même longueur. Rien ne tourne, rien ne se retourne.",
 s:[
  {p:"La <b>translation</b> qui transforme A en B fait glisser chaque point M dans la direction de (AB), dans le sens de A vers B, d'une longueur AB. On obtient le point <b>M'</b>, image de M. La figure obtenue est superposable à la figure de départ, sans la retourner.",
   fig:{type:"svg",legende:"La translation qui transforme A en B transforme le triangle vert en le triangle violet",svg:"<svg viewBox='0 0 260 130'><path d='M20 110L60 110L35 75Z' fill='#2ed47a55' stroke='#fff' stroke-width='2'/><path d='M150 60L190 60L165 25Z' fill='#b18cff55' stroke='#fff' stroke-width='2' class='draw'/><path d='M100 120L230 70' stroke='#ffc83d' stroke-width='2'/><path d='M221 69L230 70L224 77' stroke='#ffc83d' stroke-width='2' fill='none'/><g fill='#ffc83d' font-size='12'><text x='92' y='128'>A</text><text x='232' y='68'>B</text></g><path d='M60 110L190 60M35 75L165 25' stroke='#ffffff44' stroke-dasharray='4 3'/></svg>"},
   q:["Par une translation, une figure peut-elle être retournée ?",["Non, elle glisse seulement","Oui, toujours","Oui, si on le veut","Seulement si c'est un triangle"],0,"Une translation ne tourne pas et ne retourne pas la figure."]},
  {p:"Si la translation transforme A en B et M en M', alors <b>ABM'M est un parallélogramme</b>. On construit donc M' en traçant ce parallélogramme (à la règle et au compas : M' est tel que AM = BM' et MM' = AB). Conséquence : (MM') est parallèle à (AB) et MM' = AB.",
   fig:{type:"svg",legende:"ABM'M est un parallélogramme",svg:"<svg viewBox='0 0 240 120'><path d='M30 100H130L200 30H100Z' fill='#b18cff33' stroke='#fff' stroke-width='2'/><g fill='#fff' font-size='12'><text x='16' y='112'>A</text><text x='130' y='116'>B</text><text x='204' y='28'>M'</text><text x='88' y='26'>M</text></g><path d='M30 100H130M100 30H200' stroke='#ffc83d' stroke-width='3'/><path d='M122 96l8 4-8 4M192 26l8 4-8 4' stroke='#ffc83d' stroke-width='2' fill='none'/></svg>"},
   q:["La translation qui transforme A en B transforme C en D. Quel quadrilatère est un parallélogramme ?",["ABDC","ABCD","ACBD","ADBC"],0,"On lit dans l'ordre : A → B puis D → C ; ABDC est un parallélogramme."]},
  {p:"Comme les symétries, la translation <b>conserve</b> les longueurs, les angles, les aires, l'alignement et le parallélisme. L'image d'une droite est une droite <b>parallèle</b> (ou la même droite). Les frises et pavages sont construits par translations répétées.",
   info:"L'artiste M. C. Escher a créé des pavages célèbres où des oiseaux ou des poissons s'emboîtent parfaitement : chaque motif est l'image d'un autre par une translation.",
   q:["Par une translation, un segment de 5 cm a pour image…",["Un segment parallèle de 5 cm","Un segment de 10 cm","Un segment perpendiculaire de 5 cm","Un point"],0,"Les longueurs sont conservées et l'image est parallèle."]}
 ],
 retenir:["Translation : glissement (direction, sens, longueur).","A → B et M → M' : ABM'M est un parallélogramme.","Conserve longueurs, angles, aires, alignement, parallélisme.","Image d'une droite : une droite parallèle."]
};

/* ---------- Théorème de Pythagore ---------- */
C.modules.push({id:"pythagore",n:2,i:"📐",t:"Le théorème de Pythagore",d:"Hypoténuse, égalité de Pythagore, calculer une longueur",
 s:[{h:"Le théorème",l:["Si un triangle est <b>rectangle</b>, alors le carré de l'<b>hypoténuse</b> est égal à la somme des carrés des deux autres côtés.","ABC rectangle en A : <b>BC² = AB² + AC²</b>.","L'hypoténuse est le côté opposé à l'angle droit ; c'est le plus long."]},
    {h:"Calculer l'hypoténuse",l:["AB = 3, AC = 4 : BC² = 9 + 16 = 25, donc BC = √25 = 5."]},
    {h:"Calculer un autre côté",l:["BC = 13, AB = 5 : AC² = 13² − 5² = 169 − 25 = 144, donc AC = 12.","On <b>soustrait</b> quand on cherche un côté de l'angle droit."]}],
 k:["Hypoténuse","Théorème de Pythagore","Triangle rectangle"]});
C.fiches.pythagore={
 intro:"Il y a près de 4 000 ans, les Babyloniens connaissaient déjà des triplets comme 3² + 4² = 5² (tablette Plimpton 322). On raconte aussi que les arpenteurs égyptiens traçaient des angles droits avec une corde à 13 nœuds (12 intervalles : 3 + 4 + 5). Le théorème porte le nom de Pythagore, qui vivait en Grèce vers 500 avant J.-C.",
 s:[
  {p:"Dans un triangle rectangle, le côté opposé à l'angle droit s'appelle l'<b>hypoténuse</b> : c'est le plus long côté. <b>Théorème de Pythagore</b> : si ABC est rectangle en A, alors <b>BC² = AB² + AC²</b>.",
   fig:{type:"svg",legende:"L'aire du grand carré = la somme des aires des deux petits (25 = 9 + 16)",svg:"<svg viewBox='0 -5 240 230'><path d='M80 140V80L160 140Z' fill='#b18cff55' stroke='#fff' stroke-width='2'/><path d='M80 140V80H20V140Z' fill='#3db5ff44' stroke='#fff'/><path d='M80 140H160V220H80Z' fill='#2ed47a44' stroke='#fff'/><path d='M80 80L160 140L220 60L140 0Z' fill='#ffc83d44' stroke='#fff'/><g fill='#fff' font-size='14' text-anchor='middle'><text x='50' y='115'>9</text><text x='120' y='185'>16</text><text x='150' y='75'>25</text></g><path d='M80 132H88V140' stroke='#fff' fill='none'/></svg>"},
   q:["Dans un triangle EFG rectangle en F, l'hypoténuse est…",["[EG]","[EF]","[FG]","On ne peut pas savoir"],0,"C'est le côté opposé au sommet de l'angle droit F."]},
  {p:"Pour calculer l'<b>hypoténuse</b>, on additionne les carrés des deux côtés de l'angle droit, puis on prend la racine carrée. ABC rectangle en A, AB = 6 cm, AC = 8 cm : BC² = 6² + 8² = 36 + 64 = 100, donc BC = √100 = 10 cm.",
   fig:{type:"flux",legende:"Rédaction type",etapes:[["Le triangle ABC est rectangle en A.",""],["D'après le théorème de Pythagore :","BC² = AB² + AC²"],["BC² = 6² + 8² = 100",""],["BC = √100 = 10 cm",""]]},
   q:["Triangle rectangle : côtés de l'angle droit 5 cm et 12 cm. Hypoténuse ?",["13 cm","17 cm","√17 cm","169 cm"],0,"25 + 144 = 169 ; √169 = 13."]},
  {p:"Pour calculer un <b>côté de l'angle droit</b>, on <b>soustrait</b> : AC² = BC² − AB². ABC rectangle en A, BC = 10 cm, AB = 7 cm : AC² = 100 − 49 = 51, AC = √51 ≈ 7,1 cm. On utilise la calculatrice pour une valeur approchée.",
   att:"Erreur fréquente : additionner alors qu'on cherche un côté de l'angle droit. Contrôle : l'hypoténuse doit toujours rester le plus grand côté.",
   q:["Hypoténuse 15 cm, un côté de l'angle droit 9 cm. L'autre côté ?",["12 cm","17,5 cm","6 cm","24 cm"],0,"225 − 81 = 144 ; √144 = 12."]}
 ],
 retenir:["Hypoténuse : en face de l'angle droit, le plus long côté.","Rectangle en A ⟹ BC² = AB² + AC².","Hypoténuse : on additionne ; autre côté : on soustrait.","On finit par une racine carrée."]
};

/* ---------- Réciproque et contraposée ---------- */
C.modules.push({id:"reciproque",n:2,i:"✅",t:"Réciproque et contraposée",d:"Prouver qu'un triangle est rectangle… ou ne l'est pas",
 s:[{h:"La réciproque",l:["Si, dans un triangle, le carré du plus long côté est <b>égal</b> à la somme des carrés des deux autres, alors le triangle est <b>rectangle</b>.","L'angle droit est en face du plus long côté."]},
    {h:"La contraposée",l:["Si le carré du plus long côté est <b>différent</b> de la somme des carrés des deux autres, alors le triangle n'est <b>pas rectangle</b>."]},
    {h:"Logique",l:["Énoncé « Si P alors Q ». Sa <b>réciproque</b> : « Si Q alors P » (pas toujours vraie !).","Sa <b>contraposée</b> : « Si non Q alors non P » : elle est vraie dès que l'énoncé est vrai."]}],
 k:["Réciproque","Contraposée"]});
C.fiches.reciproque={
 intro:"« S'il pleut, le sol est mouillé. » Est-ce que « si le sol est mouillé, il pleut » ? Non : quelqu'un a peut-être arrosé ! La réciproque d'un énoncé vrai n'est pas toujours vraie. Pour Pythagore, par chance, elle l'est… et elle sert à prouver qu'un angle est droit.",
 s:[
  {p:"<b>Réciproque du théorème de Pythagore</b> : si dans un triangle ABC, BC² = AB² + AC² (avec [BC] le plus long côté), alors le triangle est <b>rectangle en A</b>. On calcule <b>séparément</b> les deux membres, puis on compare.",
   fig:{type:"flux",legende:"Le triangle 9 – 12 – 15 est-il rectangle ?",etapes:[["Plus long côté","15² = 225"],["Somme des deux autres carrés","9² + 12² = 81 + 144 = 225"],["Comparaison","225 = 225"],["Conclusion","D'après la réciproque de Pythagore, le triangle est rectangle"]]},
   q:["Un triangle a pour côtés 8 cm, 15 cm, 17 cm. Est-il rectangle ?",["Oui","Non","On ne peut pas savoir","Seulement s'il est isocèle"],0,"17² = 289 et 8² + 15² = 64 + 225 = 289."]},
  {p:"<b>Contraposée</b> : si BC² ≠ AB² + AC² (avec [BC] le plus long côté), alors le triangle n'est <b>pas</b> rectangle. Côtés 5, 6, 8 : 8² = 64 et 5² + 6² = 61. 64 ≠ 61 : le triangle n'est pas rectangle, même s'il en a l'air sur le dessin !",
   att:"La mesure sur un dessin ne prouve rien : un angle de 89° ressemble à un angle droit. Seul le calcul fait foi.",
   q:["Côtés 6 cm, 7 cm, 9 cm : le triangle est-il rectangle ?",["Non, car 81 ≠ 85","Oui","Oui car 6 + 7 > 9","On ne peut pas savoir"],0,"9² = 81 et 6² + 7² = 36 + 49 = 85 ≠ 81."]},
  {p:"<b>Logique</b> : pour un énoncé « si P alors Q », la <b>réciproque</b> est « si Q alors P » et la <b>contraposée</b> « si non Q alors non P ». La contraposée d'un énoncé vrai est toujours vraie ; la réciproque, pas forcément. Exemple : « si un nombre finit par 0, il est pair » est vrai, mais sa réciproque « si un nombre est pair, il finit par 0 » est fausse (12).",
   q:["Quelle est la contraposée de « Si un triangle est équilatéral, alors il est isocèle » ?",["Si un triangle n'est pas isocèle, alors il n'est pas équilatéral","Si un triangle est isocèle, alors il est équilatéral","Si un triangle n'est pas équilatéral, alors il n'est pas isocèle","Un triangle isocèle est rectangle"],0,"Si non Q alors non P."]}
 ],
 retenir:["Réciproque : égalité ⟹ triangle rectangle (angle droit face au plus long côté).","Contraposée : inégalité ⟹ pas rectangle.","Calculer les deux membres séparément.","La réciproque d'un énoncé vrai peut être fausse ; la contraposée, jamais."]
};

/* ---------- Droite des milieux ---------- */
C.modules.push({id:"milieux",n:2,i:"〽️",t:"La droite des milieux",d:"Les trois théorèmes, calculer et prouver",
 s:[{h:"Théorème 1",l:["Dans un triangle, la droite qui passe par les <b>milieux de deux côtés</b> est <b>parallèle</b> au troisième côté."]},
    {h:"Théorème 2",l:["Dans un triangle, le segment qui joint les milieux de deux côtés mesure la <b>moitié</b> du troisième côté."]},
    {h:"Théorème 3",l:["Dans un triangle, la droite qui passe par le <b>milieu d'un côté</b> et qui est <b>parallèle à un deuxième côté</b> coupe le troisième côté en son <b>milieu</b>."]}],
 k:["Milieu","Droite des milieux","Parallèles"]});
C.fiches.milieux={
 intro:"Prends un triangle, marque les milieux de deux côtés et relie-les : le segment obtenu est toujours parallèle au troisième côté, et exactement deux fois plus court. Toujours ! Même avec un triangle tordu. Ce sont les théorèmes de la droite des milieux.",
 s:[
  {p:"Dans le triangle ABC, I est le milieu de [AB] et J le milieu de [AC]. <b>Théorème 1</b> : la droite (IJ) est parallèle à (BC). <b>Théorème 2</b> : IJ = BC ÷ 2.",
   fig:{type:"svg",legende:"I et J milieux : (IJ) // (BC) et IJ = BC ÷ 2",svg:"<svg viewBox='0 0 240 130'><path d='M90 15L20 115H220Z' fill='#b18cff33' stroke='#fff' stroke-width='2'/><path d='M55 65H155' stroke='#ffc83d' stroke-width='3' class='draw'/><circle cx='55' cy='65' r='4' fill='#ffc83d'/><circle cx='155' cy='65' r='4' fill='#ffc83d'/><path d='M68 36l6 4M33 86l6 4M118 36l6-4M184 86l6-4' stroke='#ff5c7a' stroke-width='2'/><g fill='#fff' font-size='12'><text x='86' y='11'>A</text><text x='8' y='122'>B</text><text x='222' y='122'>C</text><text x='38' y='64'>I</text><text x='160' y='64'>J</text></g></svg>"},
   q:["I et J sont les milieux de [AB] et [AC], BC = 9 cm. IJ = ?",["4,5 cm","9 cm","18 cm","3 cm"],0,"IJ = BC ÷ 2."]},
  {p:"<b>Théorème 3</b> : si I est le milieu de [AB] et si la droite passant par I parallèle à (BC) coupe [AC] en J, alors J est le <b>milieu</b> de [AC]. Ce théorème sert à <b>prouver qu'un point est un milieu</b>.",
   fig:{type:"flux",legende:"Choisir le bon théorème",etapes:[["Prouver un parallélisme","Théorème 1 (deux milieux)"],["Calculer une longueur","Théorème 2 (moitié)"],["Prouver qu'un point est un milieu","Théorème 3 (un milieu + une parallèle)"]]},
   q:["On sait que I est le milieu de [AB] et que (IJ) // (BC), avec J sur [AC]. On peut prouver que…",["J est le milieu de [AC]","IJ = BC","ABC est rectangle","I est le milieu de [AC]"],0,"C'est le théorème 3."]},
  {p:"Ces théorèmes se démontrent avec un <b>parallélogramme</b> (ou avec des aires) : on prolonge [IJ] d'une longueur égale et on montre qu'on obtient un parallélogramme. Application célèbre : en reliant les milieux des côtés de n'importe quel quadrilatère, on obtient toujours un parallélogramme (<b>théorème de Varignon</b>).",
   info:"Pierre Varignon a publié ce résultat en 1731. Dessine un quadrilatère au hasard, relie les milieux : c'est toujours un parallélogramme !",
   q:["En reliant les milieux des côtés d'un quadrilatère quelconque, on obtient…",["Un parallélogramme","Un carré","Un triangle","Un trapèze quelconque"],0,"Théorème de Varignon (conséquence du théorème 1)."]}
 ],
 retenir:["Deux milieux ⟹ droite parallèle au 3e côté.","Segment des milieux = moitié du 3e côté.","Un milieu + une parallèle ⟹ un autre milieu.","Bien identifier ce qu'on sait et ce qu'on veut prouver."]
};

/* ---------- Cercle et triangle rectangle ---------- */
C.modules.push({id:"cercle",n:2,i:"⭕",t:"Triangle rectangle et cercle",d:"Cercle circonscrit, demi-cercle, construire sans équerre",
 s:[{h:"Le cercle circonscrit",l:["Si un triangle est rectangle, alors le centre de son cercle circonscrit est le <b>milieu de l'hypoténuse</b>.","Conséquence : la médiane issue de l'angle droit mesure la moitié de l'hypoténuse."]},
    {h:"La réciproque",l:["Si un triangle est inscrit dans un cercle qui a pour <b>diamètre</b> l'un de ses côtés, alors il est <b>rectangle</b>.","L'angle droit est en face du diamètre : tout point du demi-cercle « voit » le diamètre sous un angle droit."]},
    {h:"Construire sans équerre",l:["Tracer un cercle et deux diamètres : leurs extrémités forment un <b>rectangle</b>.","Diagonales de même longueur qui se coupent en leur milieu : c'est un rectangle."]}],
 k:["Cercle circonscrit","Diamètre","Hypoténuse"]});
C.fiches.cercle={
 intro:"Pose une équerre dont les deux bords passent par deux clous plantés dans une planche, et fais-la glisser en gardant le contact : la pointe de l'angle droit dessine… un demi-cercle ! Le cercle et l'angle droit sont intimement liés.",
 s:[
  {p:"Si ABC est <b>rectangle en A</b>, alors le centre O de son cercle circonscrit est le <b>milieu de l'hypoténuse [BC]</b>. Donc OA = OB = OC = BC ÷ 2 : la médiane issue de A mesure la moitié de l'hypoténuse.",
   fig:{type:"svg",legende:"Rectangle en A : le cercle a pour diamètre l'hypoténuse [BC]",svg:"<svg viewBox='0 0 240 130'><circle cx='120' cy='70' r='55' fill='none' stroke='#3db5ff' stroke-width='2'/><path d='M65 70H175L98 19.5Z' fill='#b18cff33' stroke='#fff' stroke-width='2'/><path d='M93.6 26.2L100.3 30.6L104.7 23.9' stroke='#fff' fill='none'/><path d='M120 70L98 19.5' stroke='#ffc83d' stroke-dasharray='4 3'/><circle cx='120' cy='70' r='3.5' fill='var(--pri)'/><g fill='#fff' font-size='12'><text x='92' y='14'>A</text><text x='50' y='74'>B</text><text x='180' y='74'>C</text><text x='116' y='86'>O</text></g></svg>"},
   q:["ABC est rectangle en A et BC = 10 cm. Rayon de son cercle circonscrit ?",["5 cm","10 cm","20 cm","On ne peut pas savoir"],0,"Le diamètre est l'hypoténuse : rayon = 10 ÷ 2."]},
  {p:"<b>Réciproque</b> : si le point A est sur le cercle de diamètre [BC] (et différent de B et C), alors le triangle ABC est <b>rectangle en A</b>. C'est une nouvelle façon de prouver qu'un angle est droit, sans calcul !",
   fig:{type:"inter",legende:"A se déplace sur le cercle : l'angle en A reste droit",inters:[["p","🔁 Déplacer A",3]],
    svg:"<svg viewBox='0 0 240 130'><circle cx='120' cy='70' r='55' fill='none' stroke='#3db5ff' stroke-width='2'/><path d='M65 70H175' stroke='#fff' stroke-width='2'/><g data-v='p:0'><path d='M65 70L98 19.5L175 70' stroke='#fff' stroke-width='2' fill='none'/><circle cx='98' cy='19.5' r='4' fill='#ffc83d'/></g><g data-v='p:1'><path d='M65 70L120 15L175 70' stroke='#fff' stroke-width='2' fill='none'/><circle cx='120' cy='15' r='4' fill='#ffc83d'/></g><g data-v='p:2'><path d='M65 70L159 108.9L175 70' stroke='#fff' stroke-width='2' fill='none'/><circle cx='159' cy='108.9' r='4' fill='#ffc83d'/></g><g fill='#fff' font-size='12'><text x='50' y='74'>B</text><text x='180' y='74'>C</text></g></svg>",
    f:s=>[],msg:s=>["A est sur le cercle de diamètre [BC] : l'angle BAC est droit.","A en haut du cercle : le triangle est rectangle isocèle, l'angle en A est toujours droit.","A sous le diamètre : l'angle en A est encore droit !"][s.p]},
   q:["A est sur le cercle de diamètre [EF]. Le triangle AEF est…",["Rectangle en A","Rectangle en E","Équilatéral","Isocèle en A forcément"],0,"L'angle droit est en face du diamètre."]},
  {p:"<b>Construire un rectangle sans équerre</b> : on trace un cercle, puis deux diamètres [AC] et [BD]. ABCD a des diagonales de même longueur qui se coupent en leur milieu : c'est un <b>rectangle</b>. Chacun de ses angles est droit car il est inscrit dans un demi-cercle.",
   q:["Pour tracer un rectangle avec seulement une règle et un compas, on peut…",["Tracer deux diamètres d'un même cercle","Tracer deux rayons perpendiculaires","Tracer un triangle équilatéral","C'est impossible"],0,"Diagonales égales qui se coupent en leur milieu."]}
 ],
 retenir:["Triangle rectangle ⟹ centre du cercle circonscrit = milieu de l'hypoténuse.","Médiane issue de l'angle droit = moitié de l'hypoténuse.","A sur le cercle de diamètre [BC] ⟹ ABC rectangle en A.","Deux diamètres d'un cercle ⟹ un rectangle."]
};

/* ---------- Pyramides et cônes ---------- */
C.modules.push({id:"pyramides",n:2,i:"🔺",t:"Pyramides et cônes",d:"Reconnaître, représenter, volumes",
 s:[{h:"Les solides",l:["<b>Pyramide</b> : une base polygonale et des faces latérales triangulaires qui se rejoignent au <b>sommet</b>.","<b>Cône de révolution</b> : une base en disque et un sommet ; il est obtenu en faisant tourner un triangle rectangle autour d'un côté de l'angle droit."]},
    {h:"Les volumes",l:["V = (aire de la base × hauteur) ÷ 3.","Pyramide : V = B × h ÷ 3. Cône : V = π × r² × h ÷ 3.","Un cône a un volume 3 fois plus petit que le cylindre de même base et de même hauteur."]},
    {h:"Rappels",l:["Prisme droit et cylindre : V = B × h.","1 dm³ = 1 L ; 1 cm³ = 1 mL."]}],
 k:["Pyramide","Cône de révolution","Volume"]});
C.fiches.pyramides={
 intro:"La pyramide de Khéops (Égypte, 4 500 ans) a une base carrée d'environ 230 m de côté et mesurait à l'origine environ 146 m de haut. Son volume ? Environ 2,6 millions de m³ ! Le calcul tient en une formule, avec un mystérieux « divisé par 3 ».",
 s:[
  {p:"Une <b>pyramide</b> a une base polygonale (triangle, carré…) et des faces latérales triangulaires qui se rejoignent au <b>sommet</b>. Sa <b>hauteur</b> est la distance du sommet au plan de la base (perpendiculairement). Un <b>cône de révolution</b> a une base en disque.",
   fig:{type:"svg",legende:"Pyramide à base carrée et cône de révolution",svg:"<svg viewBox='0 0 260 130'><g fill='none' stroke='#fff' stroke-width='2'><path d='M70 10L20 110H100L120 90M70 10L100 110M70 10L120 90'/><path d='M20 110L40 90H120M70 10L40 90' stroke-dasharray='5 4'/><path d='M70 10V100' stroke='#ffc83d' stroke-dasharray='3 3'/><path d='M200 10L160 105M200 10L240 105'/><ellipse cx='200' cy='105' rx='40' ry='10'/><path d='M200 10V105H240' stroke='#ffc83d' stroke-dasharray='3 3'/></g><g fill='#ffc83d' font-size='11'><text x='74' y='60'>h</text><text x='204' y='60'>h</text><text x='215' y='100'>r</text></g></svg>"},
   q:["Combien de faces a une pyramide à base carrée ?",["5","4","6","8"],0,"1 base carrée + 4 faces triangulaires."]},
  {p:"<b>Volume d'une pyramide ou d'un cône = aire de la base × hauteur ÷ 3.</b> Pyramide à base carrée de côté 6 cm et de hauteur 10 cm : V = 6² × 10 ÷ 3 = 120 cm³. Cône de rayon 3 cm et de hauteur 8 cm : V = π × 3² × 8 ÷ 3 = 24π ≈ 75,4 cm³.",
   fig:{type:"flux",legende:"La pyramide de Khéops (valeurs approchées)",etapes:[["Aire de la base","230 × 230 = 52 900 m²"],["× hauteur","52 900 × 146 ≈ 7 723 400"],["÷ 3","≈ 2 574 000 m³"],["Soit","environ 2,6 millions de m³"]]},
   info:"Pourquoi ÷ 3 ? Si on remplit d'eau un cône, il faut le vider 3 fois pour remplir le cylindre de même base et même hauteur. On peut aussi découper un cube en 3 pyramides identiques !",
   q:["Volume d'une pyramide de base 12 cm² et de hauteur 5 cm ?",["20 cm³","60 cm³","17 cm³","180 cm³"],0,"12 × 5 ÷ 3 = 20."]}
 ],
 retenir:["Pyramide : base polygonale + sommet ; cône : base en disque + sommet.","V = aire de la base × hauteur ÷ 3.","Cône : V = π r² h ÷ 3.","La hauteur est perpendiculaire à la base."]
};

C.lexique.push(
 ["Translation","Transformation qui fait glisser une figure selon une direction, un sens et une longueur."],
 ["Image","Point ou figure obtenu après une transformation."],
 ["Parallélogramme","Quadrilatère dont les côtés opposés sont parallèles deux à deux."],
 ["Hypoténuse","Côté opposé à l'angle droit dans un triangle rectangle ; c'est le plus long."],
 ["Théorème de Pythagore","Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés."],
 ["Triangle rectangle","Triangle qui a un angle droit."],
 ["Réciproque","Énoncé obtenu en échangeant l'hypothèse et la conclusion : « si Q alors P »."],
 ["Contraposée","Énoncé « si non Q alors non P » ; il est vrai quand « si P alors Q » est vrai."],
 ["Milieu","Point d'un segment à égale distance de ses deux extrémités."],
 ["Droite des milieux","Droite passant par les milieux de deux côtés d'un triangle ; elle est parallèle au troisième."],
 ["Parallèles","Droites qui ne se coupent jamais (ou confondues)."],
 ["Cercle circonscrit","Cercle passant par les trois sommets d'un triangle."],
 ["Diamètre","Segment qui joint deux points d'un cercle en passant par son centre."],
 ["Pyramide","Solide dont la base est un polygone et les faces latérales des triangles ayant un sommet commun."],
 ["Cône de révolution","Solide formé d'une base en disque et d'un sommet."],
 ["Volume","Mesure de l'espace occupé par un solide."]
);

C.quiz.push(
 ["translation","Une translation conserve…",["Les longueurs et les angles","Seulement les longueurs","Seulement les angles","Rien"],0,"Elle conserve longueurs, angles, aires, alignement."],
 ["translation","La translation qui transforme A en B transforme M en M'. Alors…",["ABM'M est un parallélogramme","AM = BM' est faux","(AB) ⊥ (MM')","M' = A"],0,"C'est la caractérisation par le parallélogramme."],
 ["translation","Par une translation, l'image d'une droite est…",["Une droite parallèle","Une droite perpendiculaire","Un cercle","Un point"],0,"Le glissement ne change pas la direction."],
 ["translation","Quelle transformation retourne la figure ?",["La symétrie axiale","La translation","Le demi-tour","Aucune"],0,"Le pliage retourne la figure ; translation et demi-tour non."],
 ["pythagore","ABC rectangle en B. L'égalité de Pythagore est…",["AC² = AB² + BC²","AB² = AC² + BC²","BC² = AB² + AC²","AC = AB + BC"],0,"L'hypoténuse est [AC], en face de B."],
 ["pythagore","Côtés de l'angle droit 9 cm et 12 cm. Hypoténuse ?",["15 cm","21 cm","225 cm","√21 cm"],0,"81 + 144 = 225."],
 ["pythagore","Hypoténuse 10 cm, un côté 6 cm. L'autre côté ?",["8 cm","4 cm","√136 cm","16 cm"],0,"100 − 36 = 64."],
 ["pythagore","Une échelle de 5 m est posée à 3 m d'un mur. Hauteur atteinte ?",["4 m","2 m","√34 m","8 m"],0,"25 − 9 = 16 ; √16 = 4."],
 ["pythagore","Diagonale d'un carré de côté 1 m ?",["√2 m ≈ 1,41 m","2 m","1 m","0,5 m"],0,"1² + 1² = 2."],
 ["reciproque","Le triangle 7 – 24 – 25 est-il rectangle ?",["Oui","Non","On ne peut pas savoir","Seulement en 3e"],0,"625 = 49 + 576."],
 ["reciproque","Le triangle 4 – 5 – 6 est-il rectangle ?",["Non","Oui","On ne peut pas savoir","Oui car 4 + 5 > 6"],0,"36 ≠ 16 + 25 = 41."],
 ["reciproque","Pour prouver qu'un triangle N'EST PAS rectangle, on utilise…",["La contraposée du théorème de Pythagore","La réciproque","Le théorème de Thalès","Un rapporteur"],0,"Si l'égalité est fausse, il n'est pas rectangle."],
 ["reciproque","La réciproque de « Si un nombre finit par 5, il est divisible par 5 » est…",["Si un nombre est divisible par 5, il finit par 5","Si un nombre ne finit pas par 5, il n'est pas divisible par 5","Si un nombre n'est pas divisible par 5, il ne finit pas par 5","Tous les nombres finissent par 5"],0,"On échange hypothèse et conclusion (et elle est fausse : 10)."],
 ["milieux","I et J milieux de [AB] et [AC] dans le triangle ABC. Alors…",["(IJ) // (BC)","(IJ) ⊥ (BC)","IJ = BC","I = J"],0,"Théorème 1 de la droite des milieux."],
 ["milieux","I et J milieux de [AB] et [AC], IJ = 6 cm. BC = ?",["12 cm","3 cm","6 cm","18 cm"],0,"IJ = BC ÷ 2."],
 ["milieux","Pour prouver qu'un point est le milieu d'un côté, on utilise…",["Le théorème 3 (milieu + parallèle)","Le théorème de Pythagore","La règle graduée","Le théorème 2"],0,"Une droite par un milieu, parallèle à un côté, coupe le 3e côté en son milieu."],
 ["cercle","ABC est rectangle en A. Le centre de son cercle circonscrit est…",["Le milieu de [BC]","Le point A","Le milieu de [AB]","Le centre de gravité"],0,"Le milieu de l'hypoténuse."],
 ["cercle","M est sur le cercle de diamètre [AB] (M ≠ A, B). Alors AMB est…",["Rectangle en M","Rectangle en A","Équilatéral","Isocèle en A"],0,"L'angle droit est en face du diamètre."],
 ["cercle","Hypoténuse 14 cm. Longueur de la médiane issue de l'angle droit ?",["7 cm","14 cm","28 cm","3,5 cm"],0,"Moitié de l'hypoténuse."],
 ["pyramides","Volume d'un cône de base 30 cm² et de hauteur 10 cm ?",["100 cm³","300 cm³","900 cm³","40 cm³"],0,"30 × 10 ÷ 3."],
 ["pyramides","Une pyramide et un prisme ont même base et même hauteur. Le volume de la pyramide est…",["Le tiers de celui du prisme","Le même","Le double","La moitié"],0,"÷ 3."],
 ["pyramides","La base d'un cône de révolution est…",["Un disque","Un carré","Un triangle","Un rectangle"],0,"Le cône a une base circulaire."]
);

C.vf.push(
 ["Une translation fait tourner la figure.",false,"Elle la fait seulement glisser."],
 ["Par une translation, une figure et son image ont la même aire.",true,"La translation conserve les aires."],
 ["Dans un triangle rectangle, l'hypoténuse est le plus long côté.",true,"Elle est en face de l'angle droit."],
 ["Le théorème de Pythagore s'applique dans tous les triangles.",false,"Seulement dans les triangles rectangles."],
 ["Un triangle de côtés 3, 4 et 5 est rectangle.",true,"25 = 9 + 16."],
 ["La réciproque d'un énoncé vrai est toujours vraie.",false,"« Pair ⟹ finit par 0 » est faux alors que la réciproque est vraie."],
 ["La contraposée d'un énoncé vrai est toujours vraie.",true,"C'est une propriété logique."],
 ["Le segment qui joint les milieux de deux côtés d'un triangle mesure le double du troisième côté.",false,"Il mesure la moitié."],
 ["Le centre du cercle circonscrit à un triangle rectangle est le milieu de l'hypoténuse.",true,"Propriété du cours."],
 ["Le volume d'une pyramide est aire de la base × hauteur.",false,"Il faut diviser par 3."],
 ["Un cône est un cas particulier de pyramide à base carrée.",false,"Sa base est un disque."]
);

C.ordre.push(
 {t:"Calculer une longueur avec Pythagore",ic:"📐",s:["Repérer le triangle rectangle et son angle droit","Identifier l'hypoténuse","Écrire l'égalité de Pythagore","Remplacer par les longueurs connues","Calculer le carré cherché","Prendre la racine carrée et donner l'unité"]},
 {t:"Prouver qu'un triangle est (ou n'est pas) rectangle",ic:"✅",s:["Repérer le plus long côté","Calculer son carré","Calculer la somme des carrés des deux autres côtés","Comparer les deux résultats","Conclure avec la réciproque (égalité) ou la contraposée (inégalité)"]},
 {t:"Construire l'image d'un point par translation",ic:"➡️",s:["Repérer la translation qui transforme A en B","Placer le point M","Reporter au compas AM à partir de B","Reporter au compas AB à partir de M","Placer M' à l'intersection : ABM'M est un parallélogramme"]}
);
