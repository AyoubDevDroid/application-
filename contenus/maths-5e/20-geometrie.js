/* PARTIE 2 — Espace et géométrie (programme de 5e, BO n° 10 du 5 mars 2026) */

/* ---------- Repérage ---------- */
C.modules.push({id:"reperage",n:2,i:"📍",t:"Se repérer dans le plan",d:"Droite graduée, repère orthogonal, coordonnées",
 s:[{h:"Sur une droite graduée",l:["Une droite graduée a une <b>origine</b> (0), un <b>sens</b> et une <b>unité</b>.","Chaque point est repéré par son <b>abscisse</b>, positive ou négative."]},
    {h:"Le repère orthogonal",l:["Deux droites graduées perpendiculaires qui se coupent en l'origine O.","L'axe horizontal est l'axe des <b>abscisses</b>, l'axe vertical celui des <b>ordonnées</b>."]},
    {h:"Les coordonnées",l:["Un point est repéré par deux nombres : (abscisse ; ordonnée).","A(3 ; −2) : on avance de 3 vers la droite, puis on descend de 2.","On lit toujours l'abscisse en premier."]}],
 k:["Repère","Coordonnées","Abscisse","Ordonnée","Origine"]});
C.fiches.reperage={
 intro:"Bataille navale, plan de ville, GPS, écran de jeu vidéo : partout, on repère une position avec deux nombres. Cette idée géniale est due à René Descartes, au XVIIe siècle — c'est pour ça qu'on parle de « repère cartésien ».",
 s:[
  {p:"Un <b>repère orthogonal</b> est formé de deux axes gradués perpendiculaires qui se coupent en l'<b>origine O</b>. L'axe horizontal est celui des <b>abscisses</b>, l'axe vertical celui des <b>ordonnées</b>.",
   fig:{type:"svg",legende:"A(3 ; 2), B(−2 ; 1), C(−3 ; −2), D(2 ; −1)",svg:"<svg viewBox='0 0 240 180'><g stroke='#ffffff22'>"+[...Array(9)].map((_,i)=>"<path d='M"+(20+i*25)+" 10V170M20 "+(10+i*20)+"H220'/>").join("")+"</g><path d='M10 90H230M120 175V5' stroke='#fff' stroke-width='2'/><path d='M224 86L230 90L224 94M116 11L120 5L124 11' stroke='#fff' fill='none' stroke-width='2'/><text x='124' y='104' fill='#fff' font-size='10'>O</text><text x='145' y='104' fill='#fff' font-size='9'>1</text><text x='110' y='73' fill='#fff' font-size='9'>1</text><g class='pop'><circle cx='195' cy='50' r='5' fill='var(--pri)'/><text x='201' y='46' fill='var(--pri)' font-size='12' font-weight='900'>A</text><circle cx='70' cy='70' r='5' fill='#3db5ff'/><text x='56' y='64' fill='#3db5ff' font-size='12' font-weight='900'>B</text><circle cx='45' cy='130' r='5' fill='#ff8a3d'/><text x='30' y='128' fill='#ff8a3d' font-size='12' font-weight='900'>C</text><circle cx='170' cy='110' r='5' fill='#ffc83d'/><text x='176' y='124' fill='#ffc83d' font-size='12' font-weight='900'>D</text></g></svg>"},
   q:["Sur la figure, quelles sont les coordonnées de D ?",["(2 ; −1)","(−1 ; 2)","(2 ; 1)","(−2 ; −1)"],0,"On avance de 2 vers la droite, on descend de 1."]},
  {p:"Les <b>coordonnées</b> d'un point s'écrivent entre parenthèses : (abscisse ; ordonnée). Pour placer E(−1 ; 3) : on part de O, on va de 1 vers la <b>gauche</b> (abscisse −1), puis de 3 vers le <b>haut</b> (ordonnée 3).",
   att:"L'ordre compte : (2 ; 5) et (5 ; 2) sont deux points différents. Abscisse d'abord, comme on lit de gauche à droite… puis on monte.",
   q:["Un point est sur l'axe des ordonnées. Son abscisse vaut…",["0","1","Son ordonnée","On ne peut pas savoir"],0,"Sur l'axe vertical, on n'a pas bougé horizontalement."]}
 ],
 retenir:["Repère : origine O, axe des abscisses (horizontal), axe des ordonnées (vertical).","Coordonnées : (abscisse ; ordonnée), dans cet ordre.","Abscisse négative : à gauche ; ordonnée négative : en bas."]
};

/* ---------- Solides et volumes ---------- */
C.modules.push({id:"solides",n:2,i:"🧊",t:"Prismes, cylindres et volumes",d:"Perspective cavalière, patrons, volumes, aire du disque",
 s:[{h:"Prisme droit et cylindre",l:["Un <b>prisme droit</b> a deux bases polygonales identiques et parallèles, et des faces latérales rectangulaires.","Un <b>cylindre de révolution</b> a deux bases en disque.","Le pavé droit et le cube sont des prismes particuliers."]},
    {h:"Les représenter",l:["En <b>perspective cavalière</b>, les arêtes cachées sont en pointillés et les arêtes parallèles restent parallèles.","Le <b>patron</b> est la figure à plier pour fabriquer le solide.","Le patron d'un cylindre : deux disques et un rectangle de longueur 2πr."]},
    {h:"Les volumes",l:["Pavé : V = L × l × h ; cube : V = c³.","Prisme droit : V = aire de la base × hauteur.","Cylindre : V = π × r² × h."]},
    {h:"Aire du disque et unités",l:["Aire du disque : A = π × r².","1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1 000 L.","Pour passer d'une unité de volume à la suivante : × 1 000 ou ÷ 1 000."]}],
 k:["Prisme droit","Cylindre","Patron","Volume","Perspective cavalière"]});
C.fiches.solides={
 intro:"Une canette, un tube de colle, une boîte de chocolats Toblerone : ce sont des cylindres et des prismes ! Pour savoir combien ils contiennent, il suffit d'une idée : le volume, c'est « l'aire de la base empilée sur toute la hauteur ».",
 s:[
  {p:"Un <b>prisme droit</b> est un solide dont les deux <b>bases</b> sont des polygones identiques et parallèles, reliés par des faces rectangulaires. Le <b>cylindre de révolution</b> est son cousin à bases rondes.",
   fig:{type:"svg",legende:"Prisme droit à base triangulaire et cylindre en perspective cavalière",svg:"<svg viewBox='0 0 260 130'><g fill='none' stroke='#fff' stroke-width='2'><path d='M20 110H90L55 70Z'/><path d='M55 70L95 40M90 110L130 80M95 40L130 80'/><path d='M20 110L60 80' stroke-dasharray='5 4'/><path d='M60 80H130M60 80L95 40' stroke-dasharray='5 4'/><ellipse cx='200' cy='30' rx='35' ry='10'/><path d='M165 30V100M235 30V100'/><path d='M165 100A35 10 0 0 0 235 100'/><path d='M165 100A35 10 0 0 1 235 100' stroke-dasharray='5 4'/></g></svg>"},
   q:["Combien de faces a un prisme droit à base triangulaire ?",["5","3","6","9"],0,"2 bases triangulaires + 3 faces rectangulaires."]},
  {p:"Le <b>patron</b> d'un solide est la figure plane que l'on plie pour le fabriquer. Pour un cylindre de rayon r et de hauteur h : deux disques de rayon r et un rectangle de hauteur h et de longueur <b>2πr</b> (le périmètre du disque, pour qu'il s'enroule pile autour).",
   fig:{type:"svg",legende:"Patron d'un cylindre",svg:"<svg viewBox='0 0 260 120'><rect x='40' y='35' width='180' height='50' fill='#3db5ff44' stroke='#fff' stroke-width='2'/><circle cx='100' cy='18' r='17' fill='#2ed47a44' stroke='#fff' stroke-width='2'/><circle cx='160' cy='102' r='17' fill='#2ed47a44' stroke='#fff' stroke-width='2'/><text x='130' y='64' fill='#fff' font-size='12' text-anchor='middle'>longueur = 2πr</text></svg>"},
   q:["Dans le patron d'un cylindre de rayon 5 cm, la longueur du rectangle mesure environ…",["31,4 cm","15,7 cm","78,5 cm","10 cm"],0,"2 × π × 5 ≈ 31,4 cm."]},
  {p:"<b>Volume d'un prisme droit ou d'un cylindre = aire de la base × hauteur.</b> Pavé de 5 × 3 × 2 : 30 cm³. Prisme à base triangulaire (base 4 cm, hauteur du triangle 3 cm) haut de 10 cm : (4 × 3 ÷ 2) × 10 = 60 cm³. Cylindre de rayon 3 cm et hauteur 10 cm : π × 3² × 10 ≈ 282,7 cm³.",
   fig:{type:"flux",legende:"Volume d'une canette (r = 3,3 cm ; h = 11,5 cm)",etapes:[["Aire de la base","π × 3,3² ≈ 34,2 cm²"],["× hauteur","34,2 × 11,5"],["Volume","≈ 393 cm³"],["En litres","≈ 0,39 L (393 mL)"]]},
   q:["Volume d'un cube d'arête 4 cm ?",["64 cm³","16 cm³","12 cm³","48 cm³"],0,"4³ = 4 × 4 × 4 = 64."]},
  {p:"Unités de volume : 1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³ (on multiplie par <b>1 000</b> à chaque rang). Unités de <b>capacité</b> : <b>1 L = 1 dm³</b> et 1 mL = 1 cm³. Une piscine de 50 m³ contient 50 000 L.",
   info:"L'aire du disque π × r² a été approchée par Archimède il y a 2 200 ans en encadrant le cercle entre deux polygones à 96 côtés !",
   att:"π × r² ≠ 2 × π × r. Le premier est une aire (en cm²), le second un périmètre (en cm).",
   q:["Une bouteille de 1,5 L contient…",["1 500 cm³","150 cm³","15 dm³","0,15 m³"],0,"1 L = 1 dm³ = 1 000 cm³."]}
 ],
 retenir:["Prisme droit et cylindre : V = aire de la base × hauteur.","Aire du disque : π × r² ; périmètre : 2 × π × r.","1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L.","Patron du cylindre : 2 disques + 1 rectangle de longueur 2πr."]
};

/* ---------- Symétrie centrale ---------- */
C.modules.push({id:"demitour",n:2,i:"🔄",t:"La symétrie centrale (demi-tour)",d:"Construire le symétrique, propriétés, centre de symétrie",
 s:[{h:"Le demi-tour",l:["La <b>symétrie centrale</b> de centre O fait tourner la figure d'un demi-tour (180°) autour de O.","Le symétrique de M est le point M' tel que O soit le <b>milieu</b> de [MM']."]},
    {h:"Ce qui est conservé",l:["Les <b>longueurs</b>, les <b>angles</b>, les <b>aires</b> et l'alignement.","Le symétrique d'une droite est une droite qui lui est <b>parallèle</b>.","La figure est retournée « tête en bas »."]},
    {h:"Centre de symétrie",l:["Une figure a un <b>centre de symétrie</b> si elle est sa propre image par un demi-tour.","Exemples : le cercle (son centre), le parallélogramme (point d'intersection des diagonales), la lettre S, le N."]}],
 k:["Symétrie centrale","Centre de symétrie","Milieu"]});
C.fiches.demitour={
 intro:"Retourne une carte à jouer « tête en bas » : la dame de cœur est identique ! Elle a un centre de symétrie. La symétrie centrale, c'est un demi-tour autour d'un point. Contrairement à la symétrie axiale, on ne plie pas : on tourne.",
 s:[
  {p:"Le symétrique du point M par rapport à O est le point M' tel que <b>O est le milieu de [MM']</b>. Pour le construire : on trace la demi-droite [MO), puis on reporte au compas la longueur OM de l'autre côté de O.",
   fig:{type:"etapes",vues:[
     {svg:"<svg viewBox='0 0 240 120'><circle cx='60' cy='30' r='4' fill='#fff'/><text x='45' y='25' fill='#fff' font-size='12'>M</text><circle cx='120' cy='60' r='4' fill='var(--pri)'/><text x='126' y='56' fill='var(--pri)' font-size='12'>O</text></svg>",t:"On a le point M et le centre O."},
     {svg:"<svg viewBox='0 0 240 120'><path d='M60 30L190 95' stroke='#fff' stroke-width='2' class='draw'/><circle cx='60' cy='30' r='4' fill='#fff'/><text x='45' y='25' fill='#fff' font-size='12'>M</text><circle cx='120' cy='60' r='4' fill='var(--pri)'/><text x='126' y='56' fill='var(--pri)' font-size='12'>O</text></svg>",t:"On trace la droite (MO) et on la prolonge au-delà de O."},
     {svg:"<svg viewBox='0 0 240 120'><path d='M60 30L190 95' stroke='#fff' stroke-width='2'/><path d='M186.6 67.7A67 67 0 0 1 166.1 108.7' stroke='#3db5ff' stroke-width='2' fill='none' class='draw'/><circle cx='60' cy='30' r='4' fill='#fff'/><text x='45' y='25' fill='#fff' font-size='12'>M</text><circle cx='120' cy='60' r='4' fill='var(--pri)'/><text x='126' y='56' fill='var(--pri)' font-size='12'>O</text><circle cx='180' cy='90' r='5' fill='#ffc83d' class='pop'/><text x='186' y='86' fill='#ffc83d' font-size='12'>M'</text><path d='M86 41l4 6M150 73l4 6' stroke='#ffc83d' stroke-width='2'/></svg>",t:"On reporte OM au compas : OM' = OM. O est le milieu de [MM']."}]},
   q:["Si O est le centre de symétrie et OM = 4 cm, alors MM' mesure…",["8 cm","4 cm","2 cm","On ne peut pas savoir"],0,"O est le milieu de [MM'] : MM' = 2 × 4."]},
  {p:"La symétrie centrale <b>conserve</b> les longueurs, les angles, les aires et l'alignement : la figure et son image sont superposables. De plus, l'image d'une droite est une droite <b>parallèle</b>. Un segment et son image sont donc parallèles et de même longueur.",
   fig:{type:"svg",legende:"Le triangle ABC et son image A'B'C' par le demi-tour de centre O",svg:"<svg viewBox='0 0 240 130'><path d='M30 30L90 20L70 60Z' fill='#2ed47a44' stroke='#fff' stroke-width='2'/><path d='M210 100L150 110L170 70Z' fill='#3db5ff44' stroke='#fff' stroke-width='2' class='draw'/><circle cx='120' cy='65' r='4' fill='var(--pri)'/><text x='124' y='62' fill='var(--pri)' font-size='11'>O</text><path d='M30 30L210 100M90 20L150 110M70 60L170 70' stroke='#ffffff33' stroke-dasharray='4 3'/><g fill='#fff' font-size='11'><text x='18' y='28'>A</text><text x='92' y='16'>B</text><text x='60' y='72'>C</text><text x='212' y='112'>A'</text><text x='140' y='124'>B'</text><text x='174' y='66'>C'</text></g></svg>"},
   q:["Par une symétrie centrale, l'image d'une droite (d) est…",["Une droite parallèle à (d)","Une droite perpendiculaire à (d)","Toujours (d) elle-même","Un segment"],0,"Le demi-tour transforme une droite en une droite parallèle."]},
  {p:"Une figure a un <b>centre de symétrie</b> si un demi-tour autour de ce point la laisse inchangée. Le cercle, le parallélogramme, le rectangle, le losange, le carré en ont un. Le triangle, jamais.",
   q:["Quelle lettre a un centre de symétrie ?",["Z","A","E","V"],0,"Z retournée reste un Z. A, E, V ont seulement un axe de symétrie."]}
 ],
 retenir:["M' symétrique de M par rapport à O ⟺ O milieu de [MM'].","Conserve longueurs, angles, aires, alignement.","Image d'une droite : une droite parallèle.","Parallélogramme : centre de symétrie = intersection des diagonales."]
};

/* ---------- Angles et parallélisme ---------- */
C.modules.push({id:"angles",n:2,i:"📐",t:"Angles et parallèles",d:"Opposés par le sommet, alternes-internes, correspondants",
 s:[{h:"Le vocabulaire",l:["<b>Adjacents</b> : même sommet, un côté commun, de part et d'autre de ce côté.","<b>Complémentaires</b> : somme 90° ; <b>supplémentaires</b> : somme 180°.","<b>Opposés par le sommet</b> : formés par deux droites sécantes, face à face. Ils sont égaux."]},
    {h:"Deux droites coupées par une sécante",l:["<b>Alternes-internes</b> : entre les deux droites, de part et d'autre de la sécante.","<b>Correspondants</b> : du même côté de la sécante, à la même « place » sur chaque droite."]},
    {h:"Les propriétés",l:["Si deux droites sont <b>parallèles</b>, alors les angles alternes-internes (et correspondants) qu'elles forment avec une sécante sont <b>égaux</b>.","Réciproquement : si deux angles alternes-internes (ou correspondants) sont égaux, alors les droites sont <b>parallèles</b>."]}],
 k:["Angles opposés par le sommet","Angles alternes-internes","Angles correspondants","Angles supplémentaires","Sécante"]});
C.fiches.angles={
 intro:"Comment un architecte vérifie-t-il que deux poutres sont parallèles sans pouvoir les prolonger à l'infini ? Il mesure des angles ! Les angles alternes-internes et correspondants sont les « détecteurs de parallèles » des géomètres, depuis Euclide.",
 s:[
  {p:"Deux droites sécantes forment quatre angles. Deux angles face à face sont <b>opposés par le sommet</b> : ils ont la même mesure. Deux angles côte à côte sur une droite sont <b>supplémentaires</b> (somme 180°).",
   fig:{type:"svg",legende:"Les angles rouges sont opposés par le sommet : ils sont égaux",svg:"<svg viewBox='0 0 240 120'><path d='M30 100L210 20M30 20L210 100' stroke='#fff' stroke-width='2'/><path d='M100 44A22 22 0 0 0 100 76' stroke='#ff5c7a' stroke-width='4' fill='none'/><path d='M140 44A22 22 0 0 1 140 76' stroke='#ff5c7a' stroke-width='4' fill='none'/><text x='75' y='64' fill='#ff5c7a' font-size='12'>48°</text><text x='148' y='64' fill='#ff5c7a' font-size='12'>48°</text><text x='112' y='28' fill='#3db5ff' font-size='12'>132°</text></svg>"},
   q:["Deux angles adjacents forment un angle plat. L'un mesure 65°. L'autre mesure…",["115°","25°","65°","295°"],0,"Supplémentaires : 180 − 65 = 115°."]},
  {p:"Quand une droite (la <b>sécante</b>) coupe deux droites, elle forme 8 angles. Deux angles <b>alternes-internes</b> sont entre les deux droites et de part et d'autre de la sécante (ils forment un « Z »). Deux angles <b>correspondants</b> sont du même côté de la sécante, l'un au-dessus de chaque droite (ils forment un « F »).",
   fig:{type:"inter",legende:"Alternes-internes ou correspondants ?",inters:[["v","🔁 Changer de paire",2]],
    svg:"<svg viewBox='0 0 240 130'><path d='M10 40H230M10 95H230' stroke='#fff' stroke-width='2'/><path d='M80 125L170 5' stroke='#ffc83d' stroke-width='2'/><g data-v='v:0'><path d='M125.75 40A18 18 0 0 0 132.95 54.4' stroke='#ff5c7a' stroke-width='5' fill='none'/><path d='M120.5 95A18 18 0 0 0 113.3 80.6' stroke='#ff5c7a' stroke-width='5' fill='none'/><text x='150' y='60' fill='#ff5c7a' font-size='12'>alternes-internes</text></g><g data-v='v:1'><path d='M161.75 40A18 18 0 0 0 154.55 25.6' stroke='#3db5ff' stroke-width='5' fill='none'/><path d='M120.5 95A18 18 0 0 0 113.3 80.6' stroke='#3db5ff' stroke-width='5' fill='none'/><text x='150' y='118' fill='#3db5ff' font-size='12'>correspondants</text></g></svg>",
    f:s=>[],msg:s=>["<b>Alternes-internes</b> : entre les deux droites, de part et d'autre de la sécante (forme de Z).","<b>Correspondants</b> : du même côté de la sécante, en même position sur chaque droite (forme de F)."][s.v]},
   q:["Deux angles alternes-internes sont situés…",["Entre les deux droites, de part et d'autre de la sécante","Du même côté de la sécante, à l'extérieur","Face à face sur deux droites sécantes","N'importe où"],0,"« Internes » : entre les droites ; « alternes » : de part et d'autre de la sécante."]},
  {p:"<b>Propriété</b> : si deux droites parallèles sont coupées par une sécante, les angles alternes-internes sont égaux, et les angles correspondants aussi. <b>Propriété réciproque</b> : si deux angles alternes-internes (ou correspondants) sont égaux, alors les droites sont parallèles. C'est un moyen de <b>prouver</b> un parallélisme.",
   att:"Si les droites ne sont pas parallèles, les angles alternes-internes existent toujours… mais ils ne sont pas égaux !",
   q:["(d) et (d') sont coupées par une sécante. Deux angles correspondants mesurent 72° et 73°. Les droites sont-elles parallèles ?",["Non","Oui","Presque, donc oui","On ne peut rien dire"],0,"Si elles étaient parallèles, les angles seraient égaux. 72° ≠ 73° : elles ne le sont pas."]}
 ],
 retenir:["Opposés par le sommet : égaux.","Supplémentaires : 180° ; complémentaires : 90°.","Parallèles ⟹ alternes-internes et correspondants égaux.","Alternes-internes (ou correspondants) égaux ⟹ parallèles."]
};

/* ---------- Triangles ---------- */
C.modules.push({id:"triangles",n:2,i:"🔺",t:"Les triangles",d:"Somme des angles, construction, médiatrices, hauteurs, médianes, aire",
 s:[{h:"La somme des angles",l:["Dans tout triangle, la somme des trois angles vaut <b>180°</b>.","Triangle équilatéral : trois angles de 60°.","Triangle rectangle isocèle : 90°, 45°, 45°."]},
    {h:"Construire un triangle",l:["Avec trois longueurs : règle et compas.","Avec deux longueurs et l'angle entre elles, ou un côté et deux angles : règle et rapporteur.","<b>Inégalité triangulaire</b> : chaque côté est plus petit que la somme des deux autres."]},
    {h:"Les droites remarquables",l:["<b>Médiatrice</b> d'un côté : perpendiculaire en son milieu. Les trois se coupent au centre du <b>cercle circonscrit</b>.","<b>Hauteur</b> : droite passant par un sommet et perpendiculaire au côté opposé. Les trois sont concourantes.","<b>Médiane</b> : droite passant par un sommet et le milieu du côté opposé."]},
    {h:"L'aire",l:["Aire d'un triangle = base × hauteur ÷ 2.","Une médiane partage le triangle en deux triangles de même aire."]}],
 k:["Triangle","Médiatrice","Hauteur","Médiane","Cercle circonscrit"]});
C.fiches.triangles={
 intro:"Prends n'importe quel triangle en papier, déchire ses trois coins et colle-les côte à côte : ils forment toujours un angle plat. Ce n'est pas un hasard… et en 5e, tu vas le démontrer !",
 s:[
  {p:"<b>La somme des angles d'un triangle vaut 180°.</b> Démonstration : par le sommet A, on trace la parallèle à (BC). Les angles alternes-internes sont égaux : les trois angles du triangle se retrouvent côte à côte en A et forment un angle plat.",
   fig:{type:"etapes",vues:[
     {svg:"<svg viewBox='0 0 240 120'><path d='M30 105H210L95 25Z' fill='#2ed47a22' stroke='#fff' stroke-width='2'/><path d='M55 105A25 25 0 0 0 45.8 85.6' stroke='#ff5c7a' stroke-width='4' fill='none'/><path d='M189.5 90.7A25 25 0 0 0 185 105' stroke='#3db5ff' stroke-width='4' fill='none'/><path d='M83.65 38.97A18 18 0 0 0 109.8 35.3' stroke='#ffc83d' stroke-width='4' fill='none'/><g fill='#fff' font-size='12'><text x='88' y='18'>A</text><text x='16' y='112'>B</text><text x='214' y='112'>C</text></g></svg>",t:"Un triangle ABC quelconque et ses trois angles."},
     {svg:"<svg viewBox='0 0 240 120'><path d='M5 25H235' stroke='var(--pri)' stroke-width='2' class='draw'/><path d='M30 105H210L95 25Z' fill='#2ed47a22' stroke='#fff' stroke-width='2'/><path d='M55 105A25 25 0 0 0 45.8 85.6' stroke='#ff5c7a' stroke-width='4' fill='none'/><path d='M189.5 90.7A25 25 0 0 0 185 105' stroke='#3db5ff' stroke-width='4' fill='none'/><path d='M83.65 38.97A18 18 0 0 0 109.8 35.3' stroke='#ffc83d' stroke-width='4' fill='none'/><g fill='#fff' font-size='12'><text x='88' y='18'>A</text><text x='16' y='112'>B</text><text x='214' y='112'>C</text></g></svg>",t:"On trace par A la parallèle à (BC)."},
     {svg:"<svg viewBox='0 0 240 120'><path d='M5 25H235' stroke='var(--pri)' stroke-width='2'/><path d='M30 105H210L95 25Z' fill='#2ed47a22' stroke='#fff' stroke-width='2'/><path d='M55 105A25 25 0 0 0 45.8 85.6' stroke='#ff5c7a' stroke-width='4' fill='none'/><path d='M189.5 90.7A25 25 0 0 0 185 105' stroke='#3db5ff' stroke-width='4' fill='none'/><path d='M83.65 38.97A18 18 0 0 0 109.8 35.3' stroke='#ffc83d' stroke-width='4' fill='none'/><path d='M70 25A25 25 0 0 0 79.2 44.4' stroke='#ff5c7a' stroke-width='4' fill='none' class='pop'/><path d='M115.5 39.3A25 25 0 0 0 120 25' stroke='#3db5ff' stroke-width='4' fill='none' class='pop'/><g fill='#fff' font-size='12'><text x='88' y='18'>A</text><text x='16' y='112'>B</text><text x='214' y='112'>C</text></g></svg>",t:"Les angles alternes-internes sont égaux : en A, les trois couleurs forment un angle plat, donc leur somme vaut 180°."}]},
   q:["Un triangle a deux angles de 50° et 70°. Le troisième mesure…",["60°","120°","70°","80°"],0,"180 − 50 − 70 = 60°."]},
  {p:"Pour <b>construire</b> un triangle connaissant ses trois côtés, on trace un côté puis on utilise le compas. C'est possible seulement si le plus grand côté est <b>plus petit que la somme</b> des deux autres (inégalité triangulaire). Avec 3 cm, 4 cm et 9 cm : impossible, car 3 + 4 &lt; 9.",
   q:["Avec quelles longueurs peut-on construire un triangle ?",["5 cm, 6 cm, 10 cm","2 cm, 3 cm, 6 cm","4 cm, 4 cm, 9 cm","1 cm, 2 cm, 5 cm"],0,"5 + 6 = 11 > 10 ✔. Les autres : la somme des deux petits est trop petite."]},
  {p:"Les <b>médiatrices</b> des trois côtés se coupent en un point, centre du <b>cercle circonscrit</b> (le cercle qui passe par les trois sommets). Une <b>hauteur</b> passe par un sommet et est perpendiculaire au côté opposé ; les trois hauteurs sont <b>concourantes</b>. Une <b>médiane</b> joint un sommet au milieu du côté opposé.",
   fig:{type:"inter",legende:"Médiatrice, hauteur ou médiane ?",inters:[["d","🔁 Changer de droite",3]],
    svg:"<svg viewBox='0 0 240 130'><path d='M20 115H220L80 15Z' fill='#2ed47a22' stroke='#fff' stroke-width='2'/><g fill='#fff' font-size='12'><text x='74' y='11'>A</text><text x='6' y='122'>B</text><text x='224' y='122'>C</text></g><g data-v='d:0'><path d='M120 130V5' stroke='#ff5c7a' stroke-width='3'/><path d='M120 115H130V105' stroke='#ff5c7a' fill='none'/><path d='M66 111l4 8M170 111l4 8' stroke='#ff5c7a' stroke-width='2'/></g><g data-v='d:1'><path d='M80 15V115' stroke='#3db5ff' stroke-width='3'/><path d='M80 105H90V115' stroke='#3db5ff' fill='none'/></g><g data-v='d:2'><path d='M80 15L120 115' stroke='#ffc83d' stroke-width='3'/><circle cx='120' cy='115' r='4' fill='#ffc83d'/><path d='M66 111l4 8M170 111l4 8' stroke='#ffc83d' stroke-width='2'/></g></svg>",
    f:s=>[],msg:s=>["<b>Médiatrice</b> de [BC] : perpendiculaire à [BC] en son milieu. Elle ne passe pas forcément par A.","<b>Hauteur</b> issue de A : passe par A et est perpendiculaire à (BC).","<b>Médiane</b> issue de A : passe par A et par le milieu de [BC]."][s.d]},
   q:["La droite qui passe par un sommet et le milieu du côté opposé est…",["Une médiane","Une hauteur","Une médiatrice","Une bissectrice"],0,"Médiane : sommet + milieu du côté opposé."]},
  {p:"<b>Aire d'un triangle = base × hauteur ÷ 2</b>, où la hauteur est relative à la base choisie. Conséquence surprenante : une <b>médiane</b> partage le triangle en deux triangles de même aire, car ils ont des bases égales (les deux moitiés du côté) et la même hauteur.",
   q:["Aire d'un triangle de base 8 cm et de hauteur 5 cm ?",["20 cm²","40 cm²","13 cm²","26 cm²"],0,"8 × 5 ÷ 2 = 20."]}
 ],
 retenir:["Somme des angles d'un triangle : 180°.","Inégalité triangulaire : le plus grand côté < somme des deux autres.","Médiatrices → centre du cercle circonscrit ; hauteurs concourantes.","Aire = base × hauteur ÷ 2 ; une médiane coupe l'aire en deux."]
};

/* ---------- Parallélogrammes ---------- */
C.modules.push({id:"parallelogrammes",n:2,i:"▱",t:"Les parallélogrammes",d:"Définition, propriétés, rectangle, losange, carré, aires",
 s:[{h:"Définition",l:["Un <b>parallélogramme</b> est un quadrilatère dont les côtés opposés sont <b>parallèles</b> deux à deux."]},
    {h:"Propriétés",l:["Ses côtés opposés ont la même longueur.","Ses <b>diagonales se coupent en leur milieu</b> (c'est son centre de symétrie).","Ses angles opposés sont égaux ; deux angles consécutifs sont supplémentaires."]},
    {h:"Les parallélogrammes particuliers",l:["<b>Rectangle</b> : un angle droit ; diagonales de même longueur.","<b>Losange</b> : deux côtés consécutifs égaux ; diagonales perpendiculaires.","<b>Carré</b> : rectangle ET losange."]},
    {h:"Aire",l:["Aire d'un parallélogramme = base × hauteur.","1 m² = 100 dm² = 10 000 cm²."]}],
 k:["Parallélogramme","Diagonale","Rectangle","Losange","Carré (figure)"]});
C.fiches.parallelogrammes={
 intro:"Le parallélogramme est partout : le pantographe des trains, les ciseaux à mécanisme de la lampe de bureau, le cric de voiture… Sa propriété magique : les diagonales se coupent toujours en leur milieu, même quand on le déforme.",
 s:[
  {p:"Un <b>parallélogramme</b> est un quadrilatère dont les côtés opposés sont parallèles deux à deux. Si ABCD est un parallélogramme : ses côtés opposés ont la même longueur, ses <b>diagonales [AC] et [BD] se coupent en leur milieu</b>, et ses angles opposés sont égaux.",
   fig:{type:"svg",legende:"Parallélogramme ABCD : diagonales qui se coupent en leur milieu O",svg:"<svg viewBox='0 0 240 120'><path d='M20 100H160L220 20H80Z' fill='#2ed47a33' stroke='#fff' stroke-width='2'/><path d='M20 100L220 20M160 100L80 20' stroke='#ffc83d' stroke-width='2'/><circle cx='120' cy='60' r='4' fill='var(--pri)'/><path d='M66 85l6-6M174 37l6-6' stroke='#ff5c7a' stroke-width='2'/><path d='M136 78l6 4M138 74l6 4M96 42l6 4M98 38l6 4' stroke='#3db5ff' stroke-width='2'/><g fill='#fff' font-size='12'><text x='8' y='112'>A</text><text x='160' y='114'>B</text><text x='222' y='16'>C</text><text x='70' y='16'>D</text><text x='124' y='56' fill='var(--pri)'>O</text></g></svg>"},
   q:["ABCD est un parallélogramme de centre O et AC = 10 cm. Combien mesure AO ?",["5 cm","10 cm","20 cm","On ne peut pas savoir"],0,"Les diagonales se coupent en leur milieu."]},
  {p:"Pour <b>prouver</b> qu'un quadrilatère est un parallélogramme, on peut utiliser une <b>propriété caractéristique</b> : si ses diagonales se coupent en leur milieu, ou si ses côtés opposés sont deux à deux de même longueur (quadrilatère non croisé), alors c'est un parallélogramme.",
   q:["Un quadrilatère a des diagonales qui se coupent en leur milieu. C'est…",["Un parallélogramme","Forcément un carré","Forcément un rectangle","Un trapèze quelconque"],0,"C'est une propriété caractéristique du parallélogramme."]},
  {p:"Les <b>parallélogrammes particuliers</b> : un <b>rectangle</b> est un parallélogramme avec un angle droit (diagonales de même longueur) ; un <b>losange</b> est un parallélogramme avec deux côtés consécutifs égaux (diagonales perpendiculaires) ; un <b>carré</b> est à la fois rectangle et losange.",
   fig:{type:"cycle",centre:"Parallélogramme",etapes:[["Rectangle<br>diagonales égales","#3db5ff"],["Losange<br>diagonales ⊥","#ff8a3d"],["Carré<br>les deux !","#2ed47a"]]},
   q:["Un parallélogramme a des diagonales perpendiculaires. C'est…",["Un losange","Un rectangle","Un trapèze","Un cerf-volant quelconque"],0,"Diagonales perpendiculaires : losange (et peut-être carré)."]},
  {p:"<b>Aire d'un parallélogramme = base × hauteur</b> : on peut découper un triangle d'un côté et le recoller de l'autre pour obtenir un rectangle. Pour les conversions d'aires, on multiplie ou divise par <b>100</b> à chaque rang : 3 m² = 300 dm² = 30 000 cm².",
   att:"La hauteur est perpendiculaire à la base : ce n'est pas la longueur du côté penché !",
   q:["Aire d'un parallélogramme de base 7 cm et de hauteur 4 cm ?",["28 cm²","14 cm²","22 cm²","11 cm²"],0,"7 × 4 = 28."]}
 ],
 retenir:["Parallélogramme : côtés opposés parallèles.","Diagonales qui se coupent en leur milieu ⟺ parallélogramme.","Rectangle : diagonales égales ; losange : diagonales ⊥ ; carré : les deux.","Aire = base × hauteur ; aires : × 100 par rang."]
};

C.lexique.push(
 ["Repère","Deux axes gradués qui se coupent en l'origine pour repérer des points."],
 ["Coordonnées","Couple (abscisse ; ordonnée) qui repère un point dans un repère."],
 ["Ordonnée","Second nombre des coordonnées, lu sur l'axe vertical."],
 ["Origine","Point de départ d'un repère, noté O, de coordonnées (0 ; 0)."],
 ["Prisme droit","Solide à deux bases polygonales identiques et parallèles et à faces latérales rectangulaires."],
 ["Cylindre","Solide à deux bases en disque, identiques et parallèles."],
 ["Patron","Figure plane qu'on plie pour fabriquer un solide."],
 ["Volume","Mesure de la place occupée par un solide (cm³, dm³, m³…)."],
 ["Perspective cavalière","Dessin d'un solide où les arêtes cachées sont en pointillés."],
 ["Symétrie centrale","Transformation qui fait faire un demi-tour à une figure autour d'un point."],
 ["Centre de symétrie","Point autour duquel un demi-tour laisse la figure inchangée."],
 ["Milieu","Point d'un segment situé à égale distance de ses deux extrémités."],
 ["Angles opposés par le sommet","Angles face à face formés par deux droites sécantes ; ils sont égaux."],
 ["Angles alternes-internes","Angles situés entre deux droites, de part et d'autre d'une sécante."],
 ["Angles correspondants","Angles situés du même côté d'une sécante, à la même place sur chaque droite."],
 ["Angles supplémentaires","Deux angles dont la somme vaut 180°."],
 ["Sécante","Droite qui coupe d'autres droites."],
 ["Triangle","Polygone à trois côtés ; la somme de ses angles vaut 180°."],
 ["Médiatrice","Droite perpendiculaire à un segment en son milieu."],
 ["Hauteur","Droite passant par un sommet et perpendiculaire au côté opposé."],
 ["Médiane","Droite passant par un sommet et le milieu du côté opposé."],
 ["Cercle circonscrit","Cercle passant par les trois sommets d'un triangle."],
 ["Parallélogramme","Quadrilatère dont les côtés opposés sont parallèles deux à deux."],
 ["Diagonale","Segment qui relie deux sommets non consécutifs d'un polygone."],
 ["Rectangle","Parallélogramme qui a un angle droit."],
 ["Losange","Parallélogramme qui a deux côtés consécutifs de même longueur."],
 ["Carré (figure)","Parallélogramme qui est à la fois un rectangle et un losange."]
);

C.quiz.push(
 ["reperage","Dans (−3 ; 5), quelle est l'abscisse ?",["−3","5","2","−15"],0,"Le premier nombre est l'abscisse."],
 ["reperage","Le point O a pour coordonnées…",["(0 ; 0)","(1 ; 1)","(0 ; 1)","Il n'en a pas"],0,"C'est l'origine du repère."],
 ["reperage","Le point (4 ; −2) est situé…",["À droite et en bas","À gauche et en haut","À droite et en haut","À gauche et en bas"],0,"Abscisse positive : à droite ; ordonnée négative : en bas."],
 ["solides","Volume d'un pavé 6 cm × 4 cm × 5 cm ?",["120 cm³","15 cm³","60 cm³","240 cm³"],0,"6 × 4 × 5."],
 ["solides","1 L = …",["1 dm³","1 cm³","1 m³","100 cm³"],0,"1 litre = 1 décimètre cube."],
 ["solides","Aire d'un disque de rayon 10 cm (π ≈ 3,14) ?",["314 cm²","62,8 cm²","31,4 cm²","100 cm²"],0,"π × 10² ≈ 314."],
 ["solides","Volume d'un prisme dont la base a une aire de 12 cm² et la hauteur 5 cm ?",["60 cm³","17 cm³","30 cm³","120 cm³"],0,"Aire de la base × hauteur."],
 ["solides","2 m³ = …",["2 000 L","200 L","20 L","20 000 L"],0,"1 m³ = 1 000 L."],
 ["demitour","Par une symétrie centrale de centre O, le symétrique de O est…",["O lui-même","Aucun point","Un point au hasard","Le milieu d'un segment"],0,"Le centre ne bouge pas."],
 ["demitour","M' est le symétrique de M par rapport à O. Alors…",["O est le milieu de [MM']","M est le milieu de [OM']","(MM') est perpendiculaire en O","OM = 2 × OM'"],0,"C'est la définition."],
 ["demitour","Quelle figure n'a pas de centre de symétrie ?",["Le triangle équilatéral","Le carré","Le cercle","Le rectangle"],0,"Le triangle équilatéral a 3 axes mais pas de centre de symétrie."],
 ["angles","Deux angles opposés par le sommet…",["Sont égaux","Sont supplémentaires","Sont complémentaires","Sont toujours droits"],0,"Propriété des angles opposés par le sommet."],
 ["angles","Deux angles complémentaires : l'un fait 35°, l'autre…",["55°","145°","35°","65°"],0,"90 − 35 = 55."],
 ["angles","(d) // (d'). Un angle alterne-interne mesure 110°. L'autre mesure…",["110°","70°","180°","90°"],0,"Droites parallèles : alternes-internes égaux."],
 ["angles","Pour prouver que deux droites sont parallèles, on peut montrer que…",["Deux angles correspondants sont égaux","Deux angles opposés par le sommet sont égaux","La sécante est longue","Les droites ne se coupent pas sur le dessin"],0,"Réciproque de la propriété des angles correspondants."],
 ["triangles","Dans un triangle équilatéral, chaque angle mesure…",["60°","90°","45°","180°"],0,"180 ÷ 3."],
 ["triangles","Un triangle rectangle a un angle de 35°. Le troisième angle mesure…",["55°","145°","35°","65°"],0,"180 − 90 − 35 = 55."],
 ["triangles","Les trois médiatrices d'un triangle se coupent au centre…",["Du cercle circonscrit","Du côté le plus long","De gravité","D'une hauteur"],0,"Ce point est à égale distance des trois sommets."],
 ["triangles","Aire d'un triangle de base 10 cm et de hauteur 6 cm ?",["30 cm²","60 cm²","16 cm²","32 cm²"],0,"10 × 6 ÷ 2."],
 ["triangles","Peut-on construire un triangle de côtés 2 cm, 3 cm et 7 cm ?",["Non","Oui","Seulement s'il est rectangle","Seulement avec un rapporteur"],0,"2 + 3 = 5 < 7."],
 ["parallelogrammes","Les diagonales d'un parallélogramme…",["Se coupent en leur milieu","Sont toujours de même longueur","Sont toujours perpendiculaires","Ne se coupent pas"],0,"Propriété de tout parallélogramme."],
 ["parallelogrammes","Un parallélogramme avec un angle droit est un…",["Rectangle","Losange","Trapèze","Triangle"],0,"Définition du rectangle."],
 ["parallelogrammes","Aire d'un parallélogramme de base 9 cm et de hauteur 3 cm ?",["27 cm²","13,5 cm²","12 cm²","24 cm²"],0,"9 × 3."],
 ["parallelogrammes","Dans un parallélogramme, un angle mesure 70°. L'angle consécutif mesure…",["110°","70°","20°","290°"],0,"Deux angles consécutifs sont supplémentaires."],
 ["parallelogrammes","5 m² = …",["50 000 cm²","500 cm²","5 000 cm²","50 cm²"],0,"1 m² = 10 000 cm²."]
);

C.vf.push(
 ["Les points (2 ; 3) et (3 ; 2) sont identiques.",false,"L'ordre abscisse / ordonnée compte."],
 ["Un cube est un prisme droit.",true,"Ses bases sont des carrés, ses faces latérales des rectangles (carrés)."],
 ["1 cm³ = 1 mL.",true,"C'est la correspondance volume / capacité."],
 ["Par une symétrie centrale, une figure et son image ont la même aire.",true,"La symétrie centrale conserve les aires."],
 ["Deux angles alternes-internes sont toujours égaux.",false,"Seulement si les deux droites sont parallèles."],
 ["Un triangle peut avoir deux angles droits.",false,"90 + 90 = 180 : il ne resterait rien pour le troisième."],
 ["Les trois hauteurs d'un triangle sont concourantes.",true,"Elles se coupent en un même point."],
 ["Un losange a ses diagonales perpendiculaires.",true,"C'est une de ses propriétés."],
 ["Un rectangle est un losange.",false,"Seulement si ses côtés consécutifs sont égaux (c'est alors un carré)."],
 ["L'aire d'un parallélogramme est égale au produit de ses deux côtés.",false,"C'est base × hauteur, et la hauteur n'est pas le côté penché."],
 ["Une médiane partage un triangle en deux triangles de même aire.",true,"Mêmes bases, même hauteur."],
 ["La lettre H a un centre de symétrie.",true,"Elle reste identique après un demi-tour."]
);

C.ordre.push(
 {t:"Construire le symétrique de M par rapport à O",ic:"🔄",s:["Tracer la droite (MO)","Prendre l'écartement OM au compas","Pointer le compas sur O","Reporter la longueur de l'autre côté de O","Nommer le point obtenu M'"]},
 {t:"Démontrer que la somme des angles d'un triangle vaut 180°",ic:"🔺",s:["Tracer par A la parallèle à (BC)","Repérer les angles alternes-internes en A","Utiliser leur égalité (droites parallèles)","Constater que les trois angles forment un angle plat en A","Conclure : la somme vaut 180°"]},
 {t:"Calculer le volume d'un cylindre",ic:"🥫",s:["Relever le rayon r et la hauteur h (même unité)","Calculer l'aire de la base π × r²","Multiplier par la hauteur h","Écrire le résultat avec l'unité de volume","Convertir en litres si besoin"]}
);
