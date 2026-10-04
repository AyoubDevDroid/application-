/* PARTIE 2 — Géométrie et mesures */
const ANG=(deg)=>{const r=deg*Math.PI/180,x=60+100*Math.cos(r),y=110-100*Math.sin(r);return "<path d='M60 110H170M60 110L"+x.toFixed(1)+" "+y.toFixed(1)+"' stroke='#fff' stroke-width='3' fill='none'/>"+(deg===90?"<path d='M60 92H78V110' stroke='var(--pri)' stroke-width='2' fill='none'/>":"<path d='M88 110A28 28 0 0 0 "+(60+28*Math.cos(r)).toFixed(1)+" "+(110-28*Math.sin(r)).toFixed(1)+"' stroke='var(--pri)' stroke-width='3' fill='none'/>")};

/* ---------- Points, droites, cercles ---------- */
C.modules.push({id:"geometrie",n:2,i:"📍",t:"Points, droites, segments et cercles",d:"Vocabulaire et notations, distance, cercle et disque",
 s:[{h:"Les notations",l:["<b>(AB)</b> : la droite qui passe par A et B, illimitée.","<b>[AB]</b> : le segment, limité par A et B. <b>AB</b> : sa longueur.","<b>[AB)</b> : la demi-droite d'origine A passant par B."]},
    {h:"Distance et milieu",l:["La <b>distance</b> entre deux points est la longueur du segment qui les relie.","Le <b>milieu</b> de [AB] est sur [AB], à égale distance de A et de B."]},
    {h:"Cercle et disque",l:["Le <b>cercle</b> de centre O et de rayon r : tous les points à la distance r de O.","Le <b>disque</b> : le cercle et tout l'intérieur.","<b>Diamètre</b> = 2 × rayon."]}],
 k:["Droite","Segment","Milieu","Cercle","Rayon","Diamètre"]});
C.fiches.geometrie={
 intro:"La géométrie a son propre langage : crochets, parenthèses, mots précis. Bien écrire et bien lire ces notations, c'est la moitié du travail pour réussir un exercice de construction.",
 s:[
  {p:"Une <b>droite</b> est illimitée dans les deux sens : on la note (AB). Un <b>segment</b> s'arrête à ses deux extrémités : [AB]. Une <b>demi-droite</b> a une origine et part à l'infini d'un seul côté : [AB). Sans crochets ni parenthèses, AB désigne une <b>longueur</b>.",
   fig:{type:"svg",legende:"Droite (AB), segment [AB], demi-droite [AB)",svg:"<svg viewBox='0 0 300 120'><g stroke='#fff' stroke-width='2'><path d='M10 20H290' stroke-dasharray='0'/><path d='M80 60H220'/><path d='M80 100H290'/></g><g fill='var(--pri)'><circle cx='80' cy='20' r='4'/><circle cx='220' cy='20' r='4'/><circle cx='80' cy='60' r='4'/><circle cx='220' cy='60' r='4'/><circle cx='80' cy='100' r='4'/><circle cx='220' cy='100' r='4'/></g><g fill='var(--mut)' font-size='11' font-weight='700'><text x='10' y='14'>(AB)</text><text x='10' y='64'>[AB]</text><text x='10' y='104'>[AB)</text></g></svg>"},
   q:["Comment note-t-on le segment d'extrémités E et F ?",["[EF]","(EF)","EF","[EF)"],0,"Crochets des deux côtés : il s'arrête en E et en F."]},
  {p:"La <b>distance</b> entre deux points est la longueur du segment qui les relie : c'est le plus court chemin. Le <b>milieu</b> d'un segment est le point du segment situé à la même distance des deux extrémités.",
   q:["M est le milieu de [AB] et AB = 10 cm. Combien mesure AM ?",["5 cm","10 cm","20 cm","2,5 cm"],0,"Le milieu partage le segment en deux longueurs égales."]},
  {p:"Le <b>cercle</b> de centre O et de rayon 3 cm est l'ensemble des points situés à exactement 3 cm de O. Le <b>disque</b> contient le cercle et tout l'intérieur. Un <b>rayon</b> relie le centre à un point du cercle ; un <b>diamètre</b> traverse le cercle en passant par le centre : il mesure deux rayons.",
   fig:{type:"svg",legende:"Centre, rayon, diamètre",svg:"<svg viewBox='0 0 200 130'><circle cx='100' cy='65' r='55' fill='none' stroke='#fff' stroke-width='2' class='draw'/><path d='M45 65H155' stroke='var(--pri)' stroke-width='3'/><path d='M100 65L139 26' stroke='#3db5ff' stroke-width='3'/><circle cx='100' cy='65' r='4' fill='#fff'/><text x='92' y='84' fill='var(--pri)' font-size='11' font-weight='800'>diamètre</text><text x='122' y='40' fill='#3db5ff' font-size='11' font-weight='800'>rayon</text></svg>"},
   q:["Un cercle a un diamètre de 12 cm. Son rayon mesure…",["6 cm","24 cm","12 cm","3 cm"],0,"Rayon = diamètre ÷ 2."]}
 ],
 retenir:["(AB) droite, [AB] segment, [AB) demi-droite, AB longueur.","Milieu : sur le segment, à égale distance des extrémités.","Cercle = points à la distance r du centre ; diamètre = 2 × rayon."]
};

/* ---------- Droites parallèles, perpendiculaires, médiatrice ---------- */
C.modules.push({id:"droites",n:2,i:"📐",t:"Parallèles, perpendiculaires, médiatrice",d:"Tracer et reconnaître",
 s:[{h:"Perpendiculaires et parallèles",l:["Deux droites <b>perpendiculaires</b> se coupent en formant un angle droit. Notation : (d) ⊥ (d').","Deux droites <b>parallèles</b> ne se coupent jamais. Notation : (d) // (d').","On trace avec la règle et l'équerre."]},
    {h:"La médiatrice d'un segment",l:["C'est la droite <b>perpendiculaire</b> au segment qui passe par son <b>milieu</b>.","Tout point de la médiatrice est à <b>égale distance</b> des extrémités du segment.","On la construit au compas."]}],
 k:["Perpendiculaires","Parallèles","Médiatrice","Équerre"]});
C.fiches.droites={
 intro:"Les murs d'une pièce, les lignes d'un cahier, les rues d'un quartier : les droites parallèles et perpendiculaires sont partout. La médiatrice, elle, est un outil puissant pour trouver des points « à égale distance ».",
 s:[
  {p:"Deux droites <b>perpendiculaires</b> forment un angle droit, codé par un petit carré. Deux droites <b>parallèles</b> gardent toujours le même écartement et ne se coupent jamais. Une propriété utile : si deux droites sont perpendiculaires à une même troisième, elles sont parallèles entre elles.",
   fig:{type:"svg",legende:"Perpendiculaires (angle droit codé) et parallèles",svg:"<svg viewBox='0 0 300 120'><path d='M20 90H130M70 20V110' stroke='#fff' stroke-width='2'/><path d='M70 78H82V90' stroke='var(--pri)' stroke-width='2' fill='none'/><path d='M170 40L290 20M170 100L290 80' stroke='#3db5ff' stroke-width='3'/><text x='60' y='15' fill='var(--mut)' font-size='11' font-weight='700'>⊥</text><text x='215' y='70' fill='var(--mut)' font-size='11' font-weight='700'>//</text></svg>"},
   q:["(d) ⊥ (e) et (f) ⊥ (e). Que peut-on dire de (d) et (f) ?",["Elles sont parallèles","Elles sont perpendiculaires","Elles se coupent","On ne peut rien dire"],0,"Deux droites perpendiculaires à une même droite sont parallèles."]},
  {p:"La <b>médiatrice</b> d'un segment [AB] est la droite perpendiculaire à [AB] passant par son milieu. Sa propriété : tout point de la médiatrice est à la même distance de A et de B, et tout point à égale distance de A et de B est sur la médiatrice.",
   fig:{type:"etapes",vues:[
     {svg:"<svg viewBox='0 0 240 140'><path d='M60 70H180' stroke='#fff' stroke-width='3'/><circle cx='60' cy='70' r='4' fill='#fff'/><circle cx='180' cy='70' r='4' fill='#fff'/><text x='50' y='92' fill='#fff' font-size='12'>A</text><text x='176' y='92' fill='#fff' font-size='12'>B</text></svg>",t:"On part du segment [AB]."},
     {svg:"<svg viewBox='0 0 240 140'><path d='M60 70H180' stroke='#fff' stroke-width='3'/><path d='M120 17.1A80 80 0 0 1 120 122.9' stroke='var(--pri)' stroke-width='2' fill='none' class='draw'/><path d='M120 17.1A80 80 0 0 0 120 122.9' stroke='#3db5ff' stroke-width='2' fill='none' class='draw'/><circle cx='120' cy='17.1' r='3' fill='#fff'/><circle cx='120' cy='122.9' r='3' fill='#fff'/><circle cx='60' cy='70' r='4' fill='#fff'/><circle cx='180' cy='70' r='4' fill='#fff'/></svg>",t:"Pointe du compas en A puis en B, même écartement (plus de la moitié de AB) : on trace deux arcs de chaque côté."},
     {svg:"<svg viewBox='0 0 240 140'><path d='M60 70H180' stroke='#fff' stroke-width='3'/><path d='M120 5V135' stroke='var(--pri)' stroke-width='3' class='draw'/><path d='M120 58H132V70' stroke='var(--pri)' stroke-width='2' fill='none'/><circle cx='60' cy='70' r='4' fill='#fff'/><circle cx='180' cy='70' r='4' fill='#fff'/></svg>",t:"On relie les deux points d'intersection des arcs : c'est la médiatrice, perpendiculaire à [AB] en son milieu."}]},
   q:["Un point M est sur la médiatrice de [AB] et MA = 7 cm. Combien mesure MB ?",["7 cm","14 cm","3,5 cm","On ne peut pas savoir"],0,"Tout point de la médiatrice est à égale distance de A et de B."]}
 ],
 retenir:["⊥ : angle droit ; // : jamais de point commun.","Deux perpendiculaires à une même droite sont parallèles.","Médiatrice : perpendiculaire au segment en son milieu ; ses points sont à égale distance des extrémités."]
};

/* ---------- Les angles ---------- */
C.modules.push({id:"angles",n:2,i:"📐",t:"Les angles",d:"Nommer, mesurer, construire, bissectrice",
 s:[{h:"Nommer un angle",l:["L'angle xOy a pour <b>sommet</b> O et pour <b>côtés</b> les demi-droites [Ox) et [Oy).","On le note avec un chapeau : ABC, le sommet est la lettre du milieu."]},
    {h:"Les sortes d'angles",l:["<b>Aigu</b> : moins de 90°. <b>Droit</b> : 90°.","<b>Obtus</b> : entre 90° et 180°. <b>Plat</b> : 180°."]},
    {h:"Mesurer et tracer",l:["On mesure avec un <b>rapporteur</b> : centre sur le sommet, zéro sur un côté.","La <b>bissectrice</b> partage un angle en deux angles égaux."]}],
 k:["Angle","Sommet","Rapporteur","Angle aigu","Angle obtus","Bissectrice"]});
C.fiches.angles={
 intro:"Un angle mesure une « ouverture » entre deux demi-droites, en degrés. On le retrouve dans les aiguilles d'une horloge, les pentes, les virages. Manipule l'angle ci-dessous pour voir ses différentes sortes.",
 s:[
  {p:"Un angle est formé par deux demi-droites de même origine : cette origine est le <b>sommet</b>. Dans l'angle ABC, le sommet est <b>B</b> (la lettre du milieu). Sa mesure ne dépend pas de la longueur des côtés dessinés.",
   q:["Quel est le sommet de l'angle RST ?",["S","R","T","Il n'en a pas"],0,"Le sommet est la lettre du milieu."]},
  {p:"On classe les angles selon leur mesure. Touche le bouton pour changer l'angle :",
   fig:{type:"inter",legende:"Aigu, droit, obtus, plat",inters:[["a","🔁 Changer l'angle",4]],
    svg:"<svg viewBox='0 0 230 130'><g data-v='a:0'>"+ANG(45)+"</g><g data-v='a:1'>"+ANG(90)+"</g><g data-v='a:2'>"+ANG(135)+"</g><g data-v='a:3'><path d='M10 110H170' stroke='#fff' stroke-width='3'/><path d='M88 110A28 28 0 0 0 32 110' stroke='var(--pri)' stroke-width='3' fill='none'/></g><circle cx='60' cy='110' r='4' fill='var(--pri)'/></svg>",
    f:s=>[],msg:s=>["Angle <b>aigu</b> : 45°, moins de 90°.","Angle <b>droit</b> : exactement 90° (codé par un petit carré).","Angle <b>obtus</b> : 135°, entre 90° et 180°.","Angle <b>plat</b> : 180°, les deux côtés sont alignés."][s.a]},
   q:["Un angle de 120° est…",["Obtus","Aigu","Droit","Plat"],0,"Entre 90° et 180°."]},
  {p:"Pour mesurer, on place le <b>centre du rapporteur</b> sur le sommet et le <b>zéro</b> d'une graduation sur un côté, puis on lit sur la même graduation où passe l'autre côté. La <b>bissectrice</b> d'un angle est la demi-droite qui le partage en deux angles de même mesure.",
   att:"Le rapporteur a deux graduations (0 à 180 dans les deux sens) : on lit toujours celle qui part de 0 sur le premier côté. Un angle visiblement aigu ne peut pas mesurer 140° !",
   q:["La bissectrice d'un angle de 70° forme deux angles de…",["35°","70°","140°","20°"],0,"Elle partage l'angle en deux moitiés."]}
 ],
 retenir:["Sommet = lettre du milieu.","Aigu < 90° ; droit = 90° ; obtus entre 90° et 180° ; plat = 180°.","Rapporteur : centre sur le sommet, zéro sur un côté.","Bissectrice : partage l'angle en deux angles égaux."]
};

/* ---------- Les triangles ---------- */
C.modules.push({id:"triangles",n:2,i:"🔺",t:"Les triangles",d:"Triangles particuliers, somme des angles, construction",
 s:[{h:"Les triangles particuliers",l:["<b>Isocèle</b> : deux côtés de même longueur.","<b>Équilatéral</b> : trois côtés de même longueur.","<b>Rectangle</b> : un angle droit."]},
    {h:"La somme des angles",l:["Dans tout triangle, la somme des trois angles vaut <b>180°</b>.","Dans un triangle équilatéral, chaque angle mesure 60°."]},
    {h:"Construire un triangle",l:["Avec trois longueurs : règle et compas.","Il n'est possible que si la plus grande longueur est inférieure à la somme des deux autres."]}],
 k:["Triangle isocèle","Triangle équilatéral","Triangle rectangle","Somme des angles"]});
C.fiches.triangles={
 intro:"Le triangle est la figure la plus solide qui existe : c'est pour ça qu'on en voit dans les charpentes, les ponts et les grues. Le programme de 6e ajoute une propriété très puissante : la somme de ses angles vaut toujours 180°.",
 s:[
  {p:"Un triangle <b>isocèle</b> a deux côtés égaux (et deux angles égaux, à la base). Un triangle <b>équilatéral</b> a trois côtés égaux (et trois angles de 60°). Un triangle <b>rectangle</b> a un angle droit ; le côté opposé à l'angle droit est le plus long, on l'appelle l'<b>hypoténuse</b>.",
   fig:{type:"svg",legende:"Isocèle, équilatéral, rectangle (codages)",svg:"<svg viewBox='0 0 300 110'><path d='M50 15L15 95H85Z' fill='none' stroke='#fff' stroke-width='2'/><path d='M28 52l6 3M66 52l-6 3' stroke='var(--pri)' stroke-width='2'/><path d='M150 18L110 95H190Z' fill='none' stroke='#fff' stroke-width='2'/><path d='M125 56l6 3M175 56l-6 3M150 91v8' stroke='var(--pri)' stroke-width='2'/><path d='M220 20V95H290Z' fill='none' stroke='#fff' stroke-width='2'/><path d='M220 83H232V95' stroke='var(--pri)' stroke-width='2' fill='none'/></svg>"},
   q:["Un triangle a deux côtés de 5 cm et un de 7 cm. Il est…",["Isocèle","Équilatéral","Rectangle forcément","Quelconque"],0,"Deux côtés égaux : isocèle."]},
  {p:"Dans <b>tout</b> triangle, la somme des trois angles est égale à <b>180°</b>. Si on connaît deux angles, on trouve le troisième par soustraction. On peut le vérifier en découpant les trois coins d'un triangle en papier : ils forment un angle plat.",
   fig:{type:"flux",legende:"Trouver le 3e angle",etapes:[["Angle A","50°"],["Angle B","70°"],["Angle C = 180 − 50 − 70","60°"]]},
   q:["Un triangle a deux angles de 40° et 100°. Le troisième mesure…",["40°","60°","140°","80°"],0,"180 − 40 − 100 = 40."]},
  {p:"Pour construire un triangle dont on connaît les trois longueurs, on trace le plus grand côté à la règle, puis deux arcs au compas depuis ses extrémités. Ce n'est possible que si le plus grand côté est plus petit que la somme des deux autres (<b>inégalité triangulaire</b>) : avec 3 cm, 4 cm et 10 cm, les arcs ne se rencontrent pas.",
   q:["Peut-on construire un triangle de côtés 2 cm, 3 cm et 8 cm ?",["Non, 8 > 2 + 3","Oui","Oui, il est rectangle","Oui, il est isocèle"],0,"Le plus grand côté doit être plus petit que la somme des deux autres."]}
 ],
 retenir:["Isocèle : 2 côtés égaux ; équilatéral : 3 côtés égaux ; rectangle : un angle droit.","Somme des angles d'un triangle = 180°.","Construction possible si le plus grand côté < somme des deux autres."]
};

/* ---------- Les quadrilatères ---------- */
C.modules.push({id:"quadrilateres",n:2,i:"🟦",t:"Les quadrilatères",d:"Rectangle, losange, carré : propriétés",
 s:[{h:"Les quadrilatères particuliers",l:["<b>Rectangle</b> : quatre angles droits.","<b>Losange</b> : quatre côtés de même longueur.","<b>Carré</b> : quatre angles droits et quatre côtés égaux (rectangle et losange à la fois)."]},
    {h:"Leurs propriétés",l:["Côtés opposés parallèles et de même longueur (rectangle, losange, carré).","Diagonales du rectangle : même longueur, même milieu.","Diagonales du losange : perpendiculaires, même milieu."]}],
 k:["Rectangle","Losange","Carré","Diagonale"]});
C.fiches.quadrilateres={
 intro:"Un quadrilatère a quatre côtés. Certains sont « spéciaux » parce qu'ils ont des angles droits ou des côtés égaux. Le carré est le champion : il a toutes les propriétés du rectangle et du losange.",
 s:[
  {p:"Le <b>rectangle</b> a quatre angles droits. Le <b>losange</b> a quatre côtés égaux. Le <b>carré</b> a les deux : quatre angles droits et quatre côtés égaux. Un carré est donc à la fois un rectangle particulier et un losange particulier.",
   fig:{type:"svg",legende:"Rectangle, losange, carré",svg:"<svg viewBox='0 0 300 100'><rect x='10' y='25' width='90' height='55' fill='none' stroke='#fff' stroke-width='2'/><path d='M10 37H22V25' stroke='var(--pri)' stroke-width='2' fill='none'/><path d='M150 10L185 50L150 90L115 50Z' fill='none' stroke='#fff' stroke-width='2'/><path d='M165 27l6-4M165 73l6 4M133 27l-6-4M133 73l-6 4' stroke='var(--pri)' stroke-width='2'/><rect x='215' y='15' width='70' height='70' fill='none' stroke='#fff' stroke-width='2'/><path d='M215 27H227V15' stroke='var(--pri)' stroke-width='2' fill='none'/></svg>"},
   q:["Un quadrilatère a quatre côtés égaux et un angle droit. C'est…",["Un carré","Un losange quelconque","Un rectangle quelconque","Un triangle"],0,"Losange avec un angle droit = carré."]},
  {p:"Les <b>diagonales</b> relient deux sommets opposés. Celles du rectangle ont la même longueur et se coupent en leur milieu. Celles du losange sont perpendiculaires et se coupent en leur milieu. Celles du carré ont toutes ces propriétés.",
   q:["Les diagonales d'un losange sont…",["Perpendiculaires","Toujours de même longueur","Parallèles","Égales à un côté"],0,"Elles se coupent à angle droit, en leur milieu."]}
 ],
 retenir:["Rectangle : 4 angles droits ; losange : 4 côtés égaux ; carré : les deux.","Diagonales : même milieu ; égales (rectangle) ; perpendiculaires (losange)."]
};

/* ---------- La symétrie axiale ---------- */
C.modules.push({id:"symetrie",n:2,i:"🦋",t:"La symétrie axiale",d:"Figure symétrique, axe de symétrie, propriétés",
 s:[{h:"Le principe",l:["Deux figures sont symétriques par rapport à une droite si elles se <b>superposent par pliage</b> le long de cette droite.","Cette droite est l'<b>axe de symétrie</b>."]},
    {h:"Le symétrique d'un point",l:["A' est le symétrique de A si l'axe est la <b>médiatrice</b> de [AA'].","Donc (AA') est perpendiculaire à l'axe et A et A' sont à la même distance de l'axe."]},
    {h:"Ce que la symétrie conserve",l:["Les longueurs, les angles, les aires, l'alignement.","Une figure peut avoir un ou plusieurs axes de symétrie (le carré en a 4)."]}],
 k:["Symétrie axiale","Axe de symétrie"]});
C.fiches.symetrie={
 intro:"Un papillon, un visage, de nombreux logos : la symétrie est partout dans la nature et dans les objets. En géométrie, la symétrie axiale fonctionne comme un miroir ou un pliage.",
 s:[
  {p:"Deux figures sont <b>symétriques par rapport à une droite</b> si, en pliant la feuille le long de cette droite, elles se superposent exactement. Cette droite est l'<b>axe de symétrie</b>.",
   fig:{type:"svg",legende:"Un triangle et son symétrique par rapport à l'axe",svg:"<svg viewBox='0 0 260 130'><path d='M130 5V125' stroke='var(--pri)' stroke-width='2' stroke-dasharray='6 5'/><path d='M40 30L100 50L60 110Z' fill='rgba(61,181,255,.3)' stroke='#3db5ff' stroke-width='2'/><path d='M220 30L160 50L200 110Z' fill='rgba(255,200,61,.25)' stroke='var(--pri)' stroke-width='2' class='appear'/></svg>"},
   q:["Pour vérifier que deux figures sont symétriques, on peut…",["Plier le long de l'axe","Les mesurer au rapporteur","Les colorier","Les découper en morceaux"],0,"Elles doivent se superposer par pliage."]},
  {p:"Le symétrique A' d'un point A est tel que l'axe est la <b>médiatrice</b> de [AA'] : on trace la perpendiculaire à l'axe passant par A, et on reporte la même distance de l'autre côté. Un point situé sur l'axe est son propre symétrique.",
   q:["Un point est à 3 cm de l'axe. Son symétrique est à…",["3 cm de l'axe, de l'autre côté","6 cm de l'axe","3 cm du point","Sur l'axe"],0,"L'axe est la médiatrice du segment qui les relie."]},
  {p:"La symétrie <b>conserve</b> tout : longueurs, mesures d'angles, aires, alignement. Le symétrique d'un segment est un segment de même longueur. Certaines figures sont leur propre symétrique : elles ont des <b>axes de symétrie</b>. Un rectangle en a 2, un losange 2, un carré 4, un cercle une infinité.",
   fig:{type:"barres",legende:"Nombre d'axes de symétrie",items:[["Triangle isocèle",1,""],["Rectangle",2,""],["Losange",2,""],["Triangle équilatéral",3,""],["Carré",4,""]]},
   q:["Combien d'axes de symétrie a un carré ?",["4","2","1","0"],0,"2 médianes et 2 diagonales."]}
 ],
 retenir:["Symétriques = superposables par pliage le long de l'axe.","L'axe est la médiatrice de [AA'].","La symétrie conserve longueurs, angles, aires, alignement.","Axes : rectangle 2, losange 2, carré 4, cercle une infinité."]
};

/* ---------- Longueurs et périmètres ---------- */
C.modules.push({id:"longueurs",n:2,i:"📏",t:"Longueurs et périmètres",d:"Conversions, périmètre des polygones et du cercle",
 s:[{h:"Les unités de longueur",l:["km, hm, dam, <b>m</b>, dm, cm, mm : chaque unité vaut <b>10 fois</b> la suivante.","1 km = 1 000 m ; 1 m = 100 cm ; 1 cm = 10 mm."]},
    {h:"Le périmètre d'un polygone",l:["Le <b>périmètre</b> est la longueur du contour : on additionne les côtés.","Carré : 4 × côté. Rectangle : 2 × (longueur + largeur)."]},
    {h:"Le périmètre du cercle",l:["Périmètre = <b>π × diamètre</b> = 2 × π × rayon.","π ≈ 3,14 (un peu plus de 3)."]}],
 k:["Périmètre","π"]});
C.fiches.longueurs={
 intro:"Clôturer un jardin, poser une frise autour d'une chambre, faire le tour d'un stade : on calcule un périmètre. Le cercle a sa formule spéciale, avec un nombre célèbre : π.",
 s:[
  {p:"Les unités de longueur vont de 10 en 10 : km, hm, dam, m, dm, cm, mm. Pour convertir, on peut utiliser un tableau de conversion ou multiplier/diviser par 10, 100, 1 000.",
   fig:{type:"flux",legende:"Convertir 3,5 km en mètres",etapes:[["3,5 km","× 1 000"],["3 500 m",""]]},
   q:["2,4 m = ?",["240 cm","24 cm","2 400 cm","0,24 cm"],0,"1 m = 100 cm."]},
  {p:"Le <b>périmètre</b> d'une figure est la longueur de son contour. Pour un polygone, on additionne les longueurs des côtés. Formules utiles : carré = 4 × côté ; rectangle = 2 × (longueur + largeur).",
   q:["Périmètre d'un rectangle de 8 m sur 5 m ?",["26 m","40 m","13 m","21 m"],0,"2 × (8 + 5) = 26."]},
  {p:"Le périmètre d'un cercle est toujours un peu plus de 3 fois son diamètre : ce nombre s'appelle <b>π</b> (pi) et vaut environ 3,14. Périmètre = π × diamètre = 2 × π × rayon.",
   fig:{type:"flux",legende:"Tour d'une roue de 60 cm de diamètre",etapes:[["π × diamètre","3,14 × 60"],["Périmètre","≈ 188,4 cm"]]},
   info:"π a une infinité de chiffres après la virgule et ils ne se répètent jamais : 3,14159265… On en connaît des milliers de milliards grâce aux ordinateurs.",
   q:["Un cercle a un rayon de 10 cm. Son périmètre vaut environ…",["62,8 cm","31,4 cm","100 cm","20 cm"],0,"2 × 3,14 × 10 = 62,8."]}
 ],
 retenir:["Unités de 10 en 10 : 1 m = 100 cm = 1 000 mm.","Périmètre = longueur du contour. Rectangle : 2 × (L + l).","Cercle : π × diamètre (π ≈ 3,14)."]
};

/* ---------- Les aires ---------- */
C.modules.push({id:"aires",n:2,i:"🟩",t:"Les aires",d:"Unités, conversions, carré et rectangle",
 s:[{h:"Aire et périmètre, c'est différent",l:["L'<b>aire</b> mesure la surface (l'intérieur), le <b>périmètre</b> le contour.","Deux figures peuvent avoir la même aire et des périmètres différents."]},
    {h:"Les unités d'aire",l:["1 cm² : l'aire d'un carré de 1 cm de côté.","Entre deux unités voisines, on multiplie par <b>100</b> : 1 m² = 100 dm² = 10 000 cm²."]},
    {h:"Les formules",l:["Rectangle : <b>longueur × largeur</b>.","Carré : <b>côté × côté</b>.","Figure complexe : on la découpe en rectangles."]}],
 k:["Aire","Centimètre carré"]});
C.fiches.aires={
 intro:"Combien de carrelage pour la salle de bain ? Combien de peinture pour un mur ? On a besoin de l'aire, c'est-à-dire de la surface. Attention : les unités d'aire ne se convertissent pas comme les longueurs.",
 s:[
  {p:"L'<b>aire</b> d'une figure mesure la place qu'elle occupe à l'intérieur ; le <b>périmètre</b> mesure son tour. Un rectangle de 6 cm × 1 cm et un carré de 3 cm × 3 cm n'ont pas la même aire (6 cm² et 9 cm²), ni le même périmètre (14 cm et 12 cm).",
   q:["Pour savoir combien de gazon semer, on calcule…",["L'aire","Le périmètre","Le diamètre","Le volume"],0,"Le gazon couvre la surface."]},
  {p:"1 cm² est l'aire d'un carré de 1 cm de côté. Un carré de 1 m de côté contient 100 × 100 = 10 000 petits carrés de 1 cm : donc <b>1 m² = 10 000 cm²</b>. Entre deux unités d'aire voisines, on multiplie par 100 (et non par 10).",
   fig:{type:"flux",legende:"Convertir 3 m² en cm²",etapes:[["3 m²","× 100"],["300 dm²","× 100"],["30 000 cm²",""]]},
   att:"Erreur fréquente : 1 m² = 100 cm². Faux ! 1 m² = 10 000 cm².",
   q:["1 dm² = ?",["100 cm²","10 cm²","1 000 cm²","10 000 cm²"],0,"Un carré de 10 cm × 10 cm."]},
  {p:"Aire d'un <b>rectangle</b> = longueur × largeur ; aire d'un <b>carré</b> = côté × côté. Les deux longueurs doivent être dans la même unité. Pour une figure en L, on la découpe en rectangles et on additionne leurs aires.",
   fig:{type:"svg",legende:"Une figure en L découpée en deux rectangles",svg:"<svg viewBox='0 0 240 130'><path d='M20 20H100V70H200V110H20Z' fill='rgba(61,181,255,.25)' stroke='#fff' stroke-width='2'/><path d='M100 70V110' stroke='var(--pri)' stroke-width='2' stroke-dasharray='5 4'/><text x='60' y='70' fill='#fff' font-size='12' text-anchor='middle'>8 × 9</text><text x='150' y='95' fill='#fff' font-size='12' text-anchor='middle'>10 × 4</text></svg>"},
   q:["Aire d'un rectangle de 7 cm sur 4 cm ?",["28 cm²","22 cm²","11 cm²","28 cm"],0,"7 × 4 = 28, en cm²."]}
 ],
 retenir:["Aire = surface ; périmètre = contour.","1 m² = 100 dm² = 10 000 cm² (×100 entre unités voisines).","Rectangle : L × l ; carré : c × c ; découper les figures complexes."]
};

/* ---------- Volumes et espace ---------- */
C.modules.push({id:"volumes",n:2,i:"🧊",t:"Volumes et solides",d:"Cubes, centimètre cube, vision dans l'espace",
 s:[{h:"Les solides",l:["<b>Cube</b> : 6 faces carrées. <b>Pavé droit</b> : 6 faces rectangulaires.","Un pavé a 6 faces, 12 arêtes et 8 sommets."]},
    {h:"Le volume",l:["Le <b>volume</b> mesure la place occupée dans l'espace.","1 cm³ : le volume d'un cube de 1 cm d'arête.","On compte les cubes : cubes par couche × nombre de couches."]},
    {h:"Voir dans l'espace",l:["Un assemblage de cubes se voit de face, de côté, de dessus.","Des cubes peuvent être cachés derrière d'autres."]}],
 k:["Volume","Centimètre cube","Pavé droit"]});
C.fiches.volumes={
 intro:"Une boîte, un aquarium, une pièce : ils ont un volume, la place qu'ils occupent en longueur, largeur et hauteur. En 6e, on mesure les volumes en comptant des petits cubes.",
 s:[
  {p:"Le <b>cube</b> a 6 faces carrées identiques. Le <b>pavé droit</b> (comme une boîte à chaussures) a 6 faces rectangulaires. Tous les deux ont 12 <b>arêtes</b> et 8 <b>sommets</b>.",
   fig:{type:"chiffres",items:[[6,"","faces"],[12,"","arêtes"],[8,"","sommets"]]},
   q:["Combien d'arêtes a un cube ?",["12","6","8","4"],0,"4 en haut, 4 en bas, 4 verticales."]},
  {p:"L'unité de volume la plus utilisée en 6e est le <b>centimètre cube</b> (cm³) : le volume d'un cube de 1 cm d'arête. Pour trouver le volume d'un pavé rempli de petits cubes, on compte les cubes d'une couche, puis on multiplie par le nombre de couches.",
   fig:{type:"flux",legende:"Un pavé de 4 cubes de long, 3 de large, 2 couches",etapes:[["Une couche","4 × 3 = 12 cubes"],["2 couches","12 × 2"],["Volume","24 cm³"]]},
   q:["Une boîte contient 5 couches de 6 cubes de 1 cm³. Son volume est…",["30 cm³","11 cm³","56 cm³","30 cm²"],0,"6 × 5 = 30 cubes."]},
  {p:"Un assemblage de cubes ne se voit pas en entier : selon la vue (de face, de dessus, de côté), certains cubes sont cachés. Pour compter, on raisonne couche par couche ou colonne par colonne.",
   q:["Une tour de 3 cubes posée sur un carré de 2 × 2 cubes compte combien de cubes ?",["7","5","12","6"],0,"4 cubes en bas + 3 au-dessus = 7."]}
 ],
 retenir:["Cube et pavé : 6 faces, 12 arêtes, 8 sommets.","1 cm³ = volume d'un cube de 1 cm d'arête.","Volume = cubes par couche × nombre de couches."]
};

/* ---------- Durées ---------- */
C.modules.push({id:"durees",n:2,i:"⏰",t:"Heures et durées",d:"Convertir, calculer une durée, heure de fin",
 s:[{h:"Les conversions",l:["1 h = <b>60</b> min ; 1 min = 60 s ; 1 jour = 24 h.","Attention : les durées ne comptent pas de 10 en 10, mais de 60 en 60."]},
    {h:"Heures et nombres décimaux",l:["1,5 h = 1 h <b>30</b> min (et non 1 h 50 !).","0,25 h = 15 min ; 0,75 h = 45 min."]},
    {h:"Calculer une durée",l:["Durée = heure de fin − heure de début.","On peut compter par étapes : jusqu'à l'heure ronde, puis le reste."]}],
 k:["Durée","Minute"]});
C.fiches.durees={
 intro:"Un film commence à 20 h 45 et dure 1 h 50 : à quelle heure finit-il ? Les durées sont pièges, parce qu'elles comptent en soixantaines et pas en dizaines.",
 s:[
  {p:"Une heure compte <b>60 minutes</b>, une minute 60 secondes, un jour 24 heures. On ne peut donc pas calculer avec les durées comme avec des décimaux ordinaires : 1 h 50 + 20 min = 2 h 10.",
   fig:{type:"chiffres",items:[[60,"min","dans 1 heure"],[60,"s","dans 1 minute"],[24,"h","dans 1 jour"]]},
   q:["2 h 15 min = ?",["135 min","215 min","120 min","2,15 min"],0,"2 × 60 + 15 = 135."]},
  {p:"Une durée écrite avec une virgule est en <b>heures décimales</b> : 1,5 h, c'est une heure et demie, donc 1 h 30 min. 0,1 h = 6 min ; 0,25 h = 15 min ; 0,75 h = 45 min.",
   att:"1,5 h ≠ 1 h 50 min. 0,5 h est la moitié d'une heure : 30 minutes.",
   q:["0,75 h = ?",["45 min","75 min","7 min 5 s","30 min"],0,"3/4 de 60 min = 45 min."]},
  {p:"Pour calculer une heure de fin ou une durée, on avance par étapes jusqu'aux heures rondes. Le film de 20 h 45 qui dure 1 h 50 : 20 h 45 + 15 min = 21 h ; il reste 1 h 35 ; fin à 22 h 35.",
   fig:{type:"flux",legende:"Durée entre 8 h 40 et 11 h 15",etapes:[["8 h 40 → 9 h","20 min"],["9 h → 11 h","2 h"],["11 h → 11 h 15","15 min"],["Total","2 h 35 min"]]},
   q:["Un trajet part à 14 h 50 et arrive à 16 h 20. Durée ?",["1 h 30 min","1 h 70 min","2 h 30 min","1 h 20 min"],0,"14 h 50 → 15 h : 10 min ; 15 h → 16 h 20 : 1 h 20 ; total 1 h 30."]}
 ],
 retenir:["1 h = 60 min ; 1 min = 60 s ; 1 jour = 24 h.","1,5 h = 1 h 30 min ; 0,25 h = 15 min.","Calculer par étapes jusqu'aux heures rondes."]
};

C.lexique.push(
 ["Droite","Ligne droite illimitée des deux côtés, notée (AB)."],
 ["Segment","Portion de droite limitée par deux points, notée [AB]."],
 ["Milieu","Point d'un segment situé à égale distance de ses extrémités."],
 ["Cercle","Ensemble des points situés à une même distance (le rayon) d'un point (le centre)."],
 ["Rayon","Segment (ou longueur) reliant le centre d'un cercle à un point du cercle."],
 ["Diamètre","Segment passant par le centre et reliant deux points du cercle. Il mesure deux rayons."],
 ["Perpendiculaires","Droites qui se coupent en formant un angle droit. Notation ⊥."],
 ["Parallèles","Droites qui ne se coupent jamais. Notation //."],
 ["Médiatrice","Droite perpendiculaire à un segment en son milieu ; ses points sont à égale distance des extrémités."],
 ["Équerre","Instrument pour tracer et vérifier les angles droits."],
 ["Angle","Figure formée par deux demi-droites de même origine (le sommet). Se mesure en degrés."],
 ["Sommet","Point commun aux deux côtés d'un angle, ou coin d'un polygone."],
 ["Rapporteur","Instrument gradué en degrés pour mesurer et tracer les angles."],
 ["Angle aigu","Angle de moins de 90°."],
 ["Angle obtus","Angle compris entre 90° et 180°."],
 ["Bissectrice","Demi-droite qui partage un angle en deux angles de même mesure."],
 ["Triangle isocèle","Triangle qui a deux côtés de même longueur."],
 ["Triangle équilatéral","Triangle qui a trois côtés de même longueur (et trois angles de 60°)."],
 ["Triangle rectangle","Triangle qui a un angle droit."],
 ["Somme des angles","Dans tout triangle, les trois angles additionnés font 180°."],
 ["Rectangle","Quadrilatère qui a quatre angles droits."],
 ["Losange","Quadrilatère qui a quatre côtés de même longueur."],
 ["Carré","Quadrilatère qui a quatre angles droits et quatre côtés égaux."],
 ["Diagonale","Segment qui relie deux sommets opposés d'un polygone."],
 ["Symétrie axiale","Transformation qui fait correspondre deux figures superposables par pliage le long d'une droite (l'axe)."],
 ["Axe de symétrie","Droite de pliage qui partage une figure en deux parties superposables."],
 ["Périmètre","Longueur du contour d'une figure."],
 ["π","Nombre qui vaut environ 3,14 : le périmètre d'un cercle divisé par son diamètre."],
 ["Aire","Mesure de la surface d'une figure, en cm², m²…"],
 ["Centimètre carré","Aire d'un carré de 1 cm de côté (cm²)."],
 ["Volume","Mesure de la place occupée par un solide, en cm³, m³…"],
 ["Centimètre cube","Volume d'un cube de 1 cm d'arête (cm³)."],
 ["Pavé droit","Solide à 6 faces rectangulaires, comme une boîte."],
 ["Durée","Temps écoulé entre deux instants."],
 ["Minute","Unité de durée : 1 min = 60 s ; 60 min = 1 h."]
);

C.quiz.push(
 ["geometrie","(AB) désigne…",["Une droite","Un segment","Une longueur","Une demi-droite"],0,"Les parenthèses : la droite, illimitée."],
 ["geometrie","Un cercle de rayon 4 cm a un diamètre de…",["8 cm","2 cm","4 cm","16 cm"],0,"Diamètre = 2 × rayon."],
 ["geometrie","Tous les points d'un cercle sont…",["À la même distance du centre","Alignés","Sur le diamètre","À 1 cm du centre"],0,"C'est la définition du cercle."],
 ["droites","Deux droites qui se coupent à angle droit sont…",["Perpendiculaires","Parallèles","Confondues","Sécantes obliques"],0,"Notation ⊥."],
 ["droites","La médiatrice d'un segment passe par…",["Son milieu","Une de ses extrémités","Son milieu seulement s'il est horizontal","Aucun point du segment"],0,"Elle est perpendiculaire au segment en son milieu."],
 ["droites","Quel instrument pour tracer un angle droit ?",["L'équerre","Le compas","Le rapporteur seulement","La calculatrice"],0,"L'équerre (le rapporteur peut aussi, mais l'équerre est faite pour ça)."],
 ["angles","Un angle de 90° est…",["Droit","Aigu","Obtus","Plat"],0,"90° exactement."],
 ["angles","Un angle de 30° est…",["Aigu","Obtus","Plat","Droit"],0,"Moins de 90°."],
 ["angles","Un angle plat mesure…",["180°","90°","360°","100°"],0,"Les deux côtés sont alignés."],
 ["angles","Dans l'angle MNP, le sommet est…",["N","M","P","MNP"],0,"La lettre du milieu."],
 ["triangles","La somme des angles d'un triangle vaut…",["180°","90°","360°","100°"],0,"Toujours 180°."],
 ["triangles","Un triangle a deux angles de 60°. Le troisième mesure…",["60°","120°","90°","30°"],0,"180 − 120 = 60 : il est équilatéral."],
 ["triangles","Un triangle rectangle a un angle de 35°. Le troisième angle mesure…",["55°","35°","145°","65°"],0,"180 − 90 − 35 = 55."],
 ["triangles","Un triangle équilatéral a…",["Trois côtés égaux","Un angle droit","Deux côtés égaux seulement","Aucun côté égal"],0,"Et trois angles de 60°."],
 ["quadrilateres","Un rectangle a…",["Quatre angles droits","Quatre côtés égaux","Des diagonales perpendiculaires toujours","Trois côtés"],0,"C'est sa définition."],
 ["quadrilateres","Un losange a…",["Quatre côtés égaux","Quatre angles droits","Deux côtés seulement","Des côtés tous différents"],0,"C'est sa définition."],
 ["symetrie","La symétrie axiale conserve…",["Les longueurs et les angles","Seulement les angles","Seulement la position","Rien"],0,"Elle conserve aussi aires et alignement."],
 ["symetrie","Combien d'axes de symétrie a un rectangle (non carré) ?",["2","4","1","0"],0,"Les deux médianes, pas les diagonales."],
 ["symetrie","Un point sur l'axe de symétrie a pour symétrique…",["Lui-même","Un point à 1 cm","Le centre","Aucun point"],0,"Il est sur la droite de pliage."],
 ["longueurs","5 km = ?",["5 000 m","500 m","50 000 m","50 m"],0,"1 km = 1 000 m."],
 ["longueurs","Périmètre d'un carré de 6 cm de côté ?",["24 cm","36 cm","12 cm","36 cm²"],0,"4 × 6 = 24."],
 ["longueurs","Le périmètre d'un cercle de diamètre 10 cm vaut environ…",["31,4 cm","62,8 cm","100 cm","10 cm"],0,"π × 10 ≈ 31,4."],
 ["aires","1 m² = ?",["10 000 cm²","100 cm²","1 000 cm²","10 cm²"],0,"100 × 100 = 10 000."],
 ["aires","Aire d'un carré de 5 cm de côté ?",["25 cm²","20 cm²","10 cm²","25 cm"],0,"5 × 5 = 25, en cm²."],
 ["aires","Pour peindre un mur, on a besoin de connaître…",["Son aire","Son périmètre","Son volume","Son angle"],0,"La peinture couvre la surface."],
 ["volumes","Un cube de 1 cm d'arête a un volume de…",["1 cm³","1 cm²","6 cm³","12 cm³"],0,"C'est la définition du cm³."],
 ["volumes","Combien de faces a un pavé droit ?",["6","4","8","12"],0,"6 faces rectangulaires."],
 ["volumes","3 couches de 8 cubes de 1 cm³, c'est un volume de…",["24 cm³","11 cm³","38 cm³","24 cm²"],0,"8 × 3 = 24."],
 ["durees","1,5 h = ?",["1 h 30 min","1 h 50 min","1 h 05 min","150 min"],0,"0,5 h = la moitié d'une heure."],
 ["durees","Combien de minutes dans 3 h ?",["180","300","30","360"],0,"3 × 60."],
 ["durees","Un film commence à 20 h 45 et dure 1 h 50. Il finit à…",["22 h 35","21 h 95","22 h 95","21 h 35"],0,"20 h 45 + 15 min = 21 h ; + 1 h 35 = 22 h 35."]
);

C.vf.push(
 ["[AB] désigne un segment.",true,"Les crochets limitent aux deux extrémités."],
 ["Un angle de 100° est aigu.",false,"Il est obtus (entre 90° et 180°)."],
 ["La somme des angles d'un triangle vaut 180°.",true,"Dans tout triangle."],
 ["Un carré est un losange particulier.",true,"Il a quatre côtés égaux."],
 ["1 m² = 100 cm².",false,"1 m² = 10 000 cm²."],
 ["1,5 h = 1 h 50 min.",false,"1,5 h = 1 h 30 min."],
 ["Le diamètre d'un cercle mesure deux rayons.",true,"Il passe par le centre."],
 ["La symétrie axiale change les longueurs.",false,"Elle les conserve."],
 ["Un cube a 8 sommets.",true,"4 en haut et 4 en bas."],
 ["Deux droites parallèles se coupent en un point.",false,"Elles ne se coupent jamais."]
);

C.ordre.push(
 {t:"Construire la médiatrice d'un segment [AB]",ic:"📐",s:["Ouvrir le compas de plus de la moitié de AB","Pointe en A : tracer un arc de chaque côté de [AB]","Pointe en B, même écartement : tracer deux arcs qui coupent les premiers","Relier les deux points d'intersection"]},
 {t:"Mesurer un angle au rapporteur",ic:"📐",s:["Placer le centre du rapporteur sur le sommet","Aligner le zéro d'une graduation sur un côté","Suivre cette graduation jusqu'à l'autre côté","Lire la mesure et vérifier (aigu ou obtus ?)"]},
 {t:"Tracer le symétrique d'un point A par rapport à une droite",ic:"🦋",s:["Tracer la perpendiculaire à l'axe passant par A","Repérer le point où elle coupe l'axe","Mesurer la distance de A à l'axe","Reporter la même distance de l'autre côté : c'est A'"]}
);
