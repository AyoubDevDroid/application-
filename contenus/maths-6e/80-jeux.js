/* JEUX — Maths 6e */

/* ---------- Problèmes pas à pas (jeu « dépannage » renommé) ---------- */
C.diag=[
 {id:"sortie",t:"La sortie scolaire",ic:"🚌",niv:1,bon:{lieu:"Trois classes de 6e partent au musée : 27 élèves par classe, plus 8 adultes.",pb:"Combien de cars de 52 places faut-il réserver ?",qui:"Classes de 27 élèves · 3 classes · 8 adultes · cars de 52 places"},
  etapes:[
   {q:"Combien d'élèves partent ?",o:[["81",true,"3 × 27 = 81 élèves."],["30",false,"27 + 3 ? Non : il y a 3 classes de 27 élèves, on multiplie."],["35",false,"On n'additionne pas 27 et 8 ici : on compte d'abord les élèves des 3 classes."]]},
   {q:"Combien de personnes en tout ?",o:[["89",true,"81 élèves + 8 adultes = 89 personnes."],["81",false,"N'oublie pas les 8 adultes !"],["648",false,"On ajoute les adultes, on ne multiplie pas."]]},
   {q:"89 ÷ 52 ≈ 1,7. Combien de cars faut-il ?",o:[["2 cars",true,"1 car ne suffit pas (52 places) : il en faut 2. Dans ce genre de problème, on arrondit au-dessus."],["1 car",false,"Dans 1 car, il n'y a que 52 places : 37 personnes resteraient sur le trottoir !"],["1,7 car",false,"On ne peut pas réserver 1,7 car : il faut un nombre entier."]]}],
  fin:"3 × 27 = 81 élèves ; 81 + 8 = 89 personnes ; 89 ÷ 52 ≈ 1,7. Il faut réserver 2 cars.",retenir:"Quand on compte des objets entiers (cars, boîtes…), on arrondit souvent au nombre entier supérieur."},

 {id:"crepes",t:"Les crêpes pour 12",ic:"🥞",niv:1,bon:{lieu:"Une recette de crêpes pour 4 personnes : 250 g de farine, 3 œufs, 0,5 L de lait.",pb:"Quelles quantités pour 12 personnes ?",qui:"4 personnes · 250 g · 3 œufs · 0,5 L"},
  etapes:[
   {q:"Par combien multiplie-t-on le nombre de personnes ?",o:[["Par 3",true,"4 × 3 = 12 : il y a 3 fois plus de personnes."],["Par 8",false,"4 + 8 = 12, mais en proportionnalité on cherche par combien on multiplie."],["Par 12",false,"4 × 12 = 48 : beaucoup trop !"]]},
   {q:"Quelle quantité de farine ?",o:[["750 g",true,"250 × 3 = 750 g."],["258 g",false,"On ne rajoute pas 8 : on multiplie par 3."],["3 000 g",false,"On multiplie par 3, pas par 12."]]},
   {q:"Et le lait ?",o:[["1,5 L",true,"0,5 × 3 = 1,5 L."],["0,15 L",false,"0,5 × 3 = 1,5, pas 0,15."],["3,5 L",false,"On ne fait pas 0,5 + 3 : on multiplie."]]}],
  fin:"Il y a 3 fois plus de personnes, donc 3 fois plus de chaque ingrédient : 750 g de farine, 9 œufs, 1,5 L de lait.",retenir:"Dans une recette, les quantités sont proportionnelles au nombre de personnes."},

 {id:"cloture",t:"Clôturer le jardin",ic:"🌳",niv:2,bon:{lieu:"Un jardin rectangulaire mesure 12 m sur 8 m. On laisse un portail de 3 m sans grillage.",pb:"Le grillage se vend en rouleaux de 10 m. Combien de rouleaux acheter ?",qui:"12 m × 8 m · portail 3 m · rouleaux de 10 m"},
  etapes:[
   {q:"Quel est le périmètre du jardin ?",o:[["40 m",true,"2 × (12 + 8) = 40 m."],["96 m",false,"12 × 8 = 96 m² est l'aire, pas le périmètre."],["20 m",false,"12 + 8 = 20 : c'est la moitié du tour."]]},
   {q:"Quelle longueur de grillage faut-il ?",o:[["37 m",true,"40 − 3 = 37 m (pas de grillage devant le portail)."],["43 m",false,"On enlève le portail, on ne l'ajoute pas."],["40 m",false,"Le portail n'a pas besoin de grillage."]]},
   {q:"Combien de rouleaux de 10 m ?",o:[["4 rouleaux",true,"3 rouleaux = 30 m, pas assez. 4 rouleaux = 40 m : il restera 3 m."],["3 rouleaux",false,"3 × 10 = 30 m < 37 m : il manquerait 7 m."],["3,7 rouleaux",false,"Les rouleaux se vendent entiers."]]}],
  fin:"Périmètre : 2 × (12 + 8) = 40 m. Sans le portail : 37 m. 4 rouleaux de 10 m sont nécessaires.",retenir:"Clôture = périmètre ; ne pas confondre avec l'aire."},

 {id:"mur",t:"Peindre le mur",ic:"🎨",niv:2,bon:{lieu:"Un mur de 5 m de long et 2,5 m de haut a une fenêtre de 1,2 m sur 1 m. Un pot de peinture couvre 10 m².",pb:"Combien de pots faut-il pour une couche ?",qui:"Mur 5 m × 2,5 m · fenêtre 1,2 m × 1 m · 1 pot = 10 m²"},
  etapes:[
   {q:"Quelle est l'aire du mur entier ?",o:[["12,5 m²",true,"5 × 2,5 = 12,5 m²."],["15 m²",false,"2 × (5 + 2,5) = 15 m est le périmètre."],["7,5 m²",false,"5 + 2,5 n'est pas une aire : on multiplie."]]},
   {q:"Quelle surface faut-il peindre ?",o:[["11,3 m²",true,"Fenêtre : 1,2 × 1 = 1,2 m². 12,5 − 1,2 = 11,3 m²."],["13,7 m²",false,"On ne peint pas la fenêtre : on enlève son aire."],["12,5 m²",false,"La fenêtre ne se peint pas."]]},
   {q:"Combien de pots ?",o:[["2 pots",true,"1 pot couvre 10 m² : pas assez pour 11,3 m². Il en faut 2."],["1 pot",false,"Il manquerait 1,3 m²."],["11 pots",false,"Un pot couvre 10 m², pas 1 m²."]]}],
  fin:"Mur : 12,5 m². Fenêtre : 1,2 m². À peindre : 11,3 m². Il faut 2 pots.",retenir:"Aire d'un rectangle = longueur × largeur ; on enlève les parties qu'on ne peint pas."},

 {id:"train",t:"L'horaire du train",ic:"🚆",niv:2,bon:{lieu:"Un train part de Lyon à 9 h 47 et le trajet dure 2 h 35.",pb:"À quelle heure arrive-t-il ? Peut-on prendre une correspondance à 12 h 30 ?",qui:"Départ 9 h 47 · durée 2 h 35 · correspondance 12 h 30"},
  etapes:[
   {q:"Première étape : de 9 h 47 à 10 h, combien de minutes ?",o:[["13 min",true,"60 − 47 = 13."],["53 min",false,"De 47 à 60, il y a 13 minutes."],["3 min",false,"On va jusqu'à 60 minutes, pas jusqu'à 50."]]},
   {q:"Il reste 2 h 35 − 13 min = 2 h 22. Heure d'arrivée ?",o:[["12 h 22",true,"10 h + 2 h 22 = 12 h 22."],["12 h 82",false,"Une heure n'a que 60 minutes."],["11 h 22",false,"10 h + 2 h = 12 h."]]},
   {q:"La correspondance part à 12 h 30. Est-ce possible ?",o:[["Oui, il reste 8 minutes",true,"12 h 30 − 12 h 22 = 8 minutes (c'est juste !)."],["Non, le train arrive après",false,"12 h 22 est avant 12 h 30."],["Oui, il reste 1 h 08",false,"Entre 12 h 22 et 12 h 30, il y a 8 minutes."]]}],
  fin:"9 h 47 + 13 min = 10 h ; 10 h + 2 h 22 = 12 h 22. La correspondance de 12 h 30 laisse 8 minutes.",retenir:"Pour les durées, on passe par les heures rondes."},

 {id:"soldes",t:"Les soldes",ic:"🛍️",niv:2,bon:{lieu:"Un jean coûte 60 €, il est soldé à −30 %. Sarah achète aussi un t-shirt à 15 €.",pb:"Combien Sarah paie-t-elle en tout ?",qui:"Jean 60 € · −30 % · t-shirt 15 €"},
  etapes:[
   {q:"Combien vaut 10 % de 60 € ?",o:[["6 €",true,"60 ÷ 10 = 6 €."],["10 €",false,"10 % = on divise par 10."],["0,6 €",false,"60 ÷ 10 = 6, pas 0,6."]]},
   {q:"Et 30 % de 60 € ?",o:[["18 €",true,"30 % = 3 × 10 % = 3 × 6 = 18 €."],["30 €",false,"30 % de 60 n'est pas 30."],["2 €",false,"On multiplie les 10 % par 3."]]},
   {q:"Combien paie Sarah en tout ?",o:[["57 €",true,"Jean : 60 − 18 = 42 € ; total : 42 + 15 = 57 €."],["75 €",false,"Le jean est soldé : il ne coûte plus 60 €."],["42 €",false,"N'oublie pas le t-shirt."]]}],
  fin:"30 % de 60 € = 18 € ; jean soldé : 42 € ; avec le t-shirt : 57 €.",retenir:"Pour un pourcentage, on peut passer par 10 % puis multiplier."},

 {id:"velo",t:"Économiser pour un vélo",ic:"🚲",niv:2,bon:{lieu:"Lina a déjà 30 €. Elle économise 7,50 € par semaine. Le vélo coûte 120 €.",pb:"Combien de semaines doit-elle attendre ?",qui:"Déjà 30 € · 7,50 € par semaine · vélo 120 €"},
  etapes:[
   {q:"Combien lui manque-t-il ?",o:[["90 €",true,"120 − 30 = 90 €."],["150 €",false,"On enlève ce qu'elle a déjà."],["120 €",false,"Elle a déjà 30 €."]]},
   {q:"Combien de semaines pour économiser 90 € ?",o:[["12 semaines",true,"90 ÷ 7,5 = 12 (vérification : 12 × 7,50 = 90)."],["16 semaines",false,"120 ÷ 7,5 = 16, mais elle a déjà 30 €."],["83 semaines",false,"On divise, on ne soustrait pas."]]}],
  fin:"Il manque 120 − 30 = 90 €. 90 ÷ 7,50 = 12 semaines.",retenir:"Découper le problème : d'abord ce qui manque, puis le nombre de semaines."},

 {id:"billes",t:"Les billes de Tom et Léa",ic:"🔵",niv:2,bon:{lieu:"Tom et Léa ont ensemble 45 billes. Léa en a 2 fois plus que Tom.",pb:"Combien de billes a chacun ?",qui:"Total 45 · Léa = 2 × Tom"},
  etapes:[
   {q:"Avec un schéma en barres : Tom = 1 barre, Léa = 2 barres. Combien de barres en tout ?",o:[["3 barres",true,"1 + 2 = 3 barres égales."],["2 barres",false,"N'oublie pas la barre de Tom."],["45 barres",false,"45 est le nombre de billes."]]},
   {q:"Combien vaut une barre ?",o:[["15 billes",true,"45 ÷ 3 = 15."],["22,5 billes",false,"45 ÷ 2 ? Il y a 3 barres, pas 2."],["9 billes",false,"45 ÷ 5 ? Il y a 3 barres."]]},
   {q:"Combien Léa a-t-elle de billes ?",o:[["30",true,"2 barres = 30 billes. Vérification : 15 + 30 = 45 ✔."],["15",false,"15 billes, c'est Tom."],["45",false,"C'est le total."]]}],
  fin:"3 barres = 45 billes, une barre = 15. Tom a 15 billes, Léa 30 (et 15 + 30 = 45).",retenir:"Le schéma en barres transforme « 2 fois plus » en barres égales qu'on peut compter."},

 {id:"sac",t:"Le sac de billes",ic:"🎲",niv:3,bon:{lieu:"Un sac contient 5 billes rouges, 3 bleues et 2 vertes, indiscernables au toucher. On tire une bille au hasard.",pb:"Quelle est la probabilité de tirer une bille bleue ? De ne pas tirer une rouge ?",qui:"5 rouges · 3 bleues · 2 vertes"},
  etapes:[
   {q:"Combien de billes en tout ?",o:[["10",true,"5 + 3 + 2 = 10."],["3",false,"3, c'est le nombre de couleurs."],["30",false,"On additionne, on ne multiplie pas."]]},
   {q:"Probabilité de tirer une bleue ?",o:[["3/10",true,"3 billes bleues sur 10."],["1/3",false,"Il y a 3 couleurs, mais pas le même nombre de billes de chaque couleur."],["3/7",false,"On divise par le nombre total de billes : 10."]]},
   {q:"Probabilité de NE PAS tirer une rouge ?",o:[["5/10 = 1/2",true,"Pas rouge = bleue ou verte : 3 + 2 = 5 billes sur 10."],["5/10 parce qu'il y a 5 rouges, donc 1/5",false,"Les « pas rouges » sont 5 sur 10, soit 1/2."],["0",false,"Il y a des billes qui ne sont pas rouges."]]}],
  fin:"10 billes. P(bleue) = 3/10. P(pas rouge) = 5/10 = 1/2.",retenir:"Probabilité = cas favorables ÷ cas possibles, si tout a la même chance."},

 {id:"aquarium",t:"Remplir l'aquarium",ic:"🐠",niv:3,bon:{lieu:"Un aquarium a la forme d'un pavé droit : 30 cm de long, 20 cm de large, 25 cm de haut.",pb:"Combien de cubes de 1 cm³ faudrait-il pour le remplir ? Combien de litres d'eau peut-il contenir (1 L = 1 000 cm³) ?",qui:"30 cm × 20 cm × 25 cm · 1 L = 1 000 cm³"},
  etapes:[
   {q:"Combien de cubes de 1 cm³ dans une couche du fond ?",o:[["600",true,"30 × 20 = 600 cubes."],["50",false,"On multiplie longueur et largeur."],["75",false,"30 + 20 + 25 n'est pas un volume."]]},
   {q:"Combien de couches ?",o:[["25",true,"Une couche par centimètre de hauteur : 25 couches."],["20",false,"20 cm est la largeur ; la hauteur est 25 cm."],["600",false,"600 est le nombre de cubes par couche."]]},
   {q:"Volume et contenance ?",o:[["15 000 cm³, soit 15 L",true,"600 × 25 = 15 000 cm³ ; 15 000 ÷ 1 000 = 15 L."],["1 500 cm³, soit 1,5 L",false,"600 × 25 = 15 000, pas 1 500."],["625 cm³",false,"On multiplie 600 par 25."]]}],
  fin:"Une couche : 30 × 20 = 600 cm³. 25 couches : 15 000 cm³. L'aquarium contient 15 L.",retenir:"Volume = cubes par couche × nombre de couches."},

 {id:"angles-triangle",t:"Le toit de la cabane",ic:"🏠",niv:3,bon:{lieu:"Le toit d'une cabane forme un triangle isocèle. L'angle du sommet mesure 110°.",pb:"Combien mesurent les deux angles à la base ?",qui:"Triangle isocèle · angle au sommet 110°"},
  etapes:[
   {q:"Que vaut la somme des angles d'un triangle ?",o:[["180°",true,"C'est vrai pour tout triangle."],["360°",false,"360°, c'est pour un quadrilatère."],["90°",false,"90° est un angle droit."]]},
   {q:"Que reste-t-il pour les deux angles de la base ?",o:[["70°",true,"180 − 110 = 70°."],["290°",false,"On soustrait, on n'additionne pas."],["110°",false,"On enlève l'angle du sommet."]]},
   {q:"Dans un triangle isocèle, les angles à la base sont égaux. Chacun mesure…",o:[["35°",true,"70 ÷ 2 = 35°. Vérification : 110 + 35 + 35 = 180 ✔."],["70°",false,"Les 70° sont partagés entre deux angles."],["55°",false,"70 ÷ 2 = 35."]]}],
  fin:"180 − 110 = 70° pour les deux angles de la base, qui sont égaux : 35° chacun.",retenir:"Somme des angles = 180° ; dans un triangle isocèle, les deux angles à la base sont égaux."},

 {id:"lutin",t:"Le lutin dessinateur",ic:"🤖",niv:3,bon:{lieu:"Un lutin de programmation part en regardant vers la droite. On veut lui faire tracer un carré de 80 pas de côté.",pb:"Quel programme faut-il écrire ?",qui:"Carré · côté 80 pas"},
  etapes:[
   {q:"Pour un côté, quelle instruction ?",o:[["Avancer de 80",true,"Le côté mesure 80 pas."],["Tourner de 80°",false,"80 est une longueur, pas un angle."],["Avancer de 320",false,"320, c'est le périmètre du carré entier."]]},
   {q:"À chaque coin, le lutin doit tourner de…",o:[["90°",true,"Les coins d'un carré sont des angles droits."],["45°",false,"Il tracerait un octogone."],["360°",false,"Il ferait un tour complet sur place."]]},
   {q:"Le programme complet :",o:[["Répéter 4 fois : avancer de 80, tourner de 90°",true,"La boucle répète les 4 côtés."],["Répéter 3 fois : avancer de 80, tourner de 90°",false,"Il manquerait un côté."],["Avancer de 80 puis tourner de 90°, une seule fois",false,"On n'obtiendrait qu'un seul côté."]]}],
  fin:"Répéter 4 fois : avancer de 80 pas, tourner de 90°. Le lutin revient à son point de départ.",retenir:"Une boucle « répéter » évite d'écrire 4 fois les mêmes instructions."}
];

/* ---------- Figures (jeu « symboles » renommé) ---------- */
C.symboles=[
 ["Triangle isocèle","<path d='M50 6L24 54H76Z'/><path d='M34 28l5 3M66 28l-5 3'/>","Deux côtés de même longueur (codés par un trait)."],
 ["Triangle équilatéral","<path d='M50 5L20 55H80Z'/><path d='M32 28l5 3M68 28l-5 3M50 51v8'/>","Trois côtés de même longueur."],
 ["Triangle rectangle","<path d='M25 8V52H82Z'/><path d='M25 44H33V52'/>","Un angle droit (codé par un petit carré)."],
 ["Carré","<rect x='30' y='8' width='44' height='44'/><path d='M30 16H38V8'/><path d='M52 4v8M52 48v8M26 30h8M70 30h8'/>","Quatre côtés égaux et quatre angles droits."],
 ["Rectangle","<rect x='14' y='14' width='72' height='32'/><path d='M14 22H22V14'/>","Quatre angles droits."],
 ["Losange","<path d='M50 4L80 30L50 56L20 30Z'/><path d='M63 15l5-3M63 45l5 3M37 15l-5-3M37 45l-5 3'/>","Quatre côtés de même longueur."],
 ["Cercle avec un rayon","<circle cx='50' cy='30' r='25'/><path d='M50 30L71 17'/><circle cx='50' cy='30' r='2.5' class='f'/>","Le rayon relie le centre à un point du cercle."],
 ["Angle droit","<path d='M25 50H85M25 50V5'/><path d='M25 40H35V50'/>","90°, codé par un petit carré."],
 ["Angle aigu","<path d='M20 50H85M20 50L75 12'/><path d='M40 50A20 20 0 0 0 36 39'/>","Moins de 90°."],
 ["Angle obtus","<path d='M55 50H95M55 50L15 15'/><path d='M70 50A15 15 0 0 0 44 40'/>","Entre 90° et 180°."],
 ["Angle plat","<path d='M8 40H92'/><circle cx='50' cy='40' r='2.5' class='f'/><path d='M62 40A12 12 0 0 0 38 40'/>","180° : les deux côtés sont alignés."],
 ["Droites parallèles","<path d='M10 20L90 10M10 52L90 42'/>","Elles ne se coupent jamais."],
 ["Droites perpendiculaires","<path d='M10 40H90M45 5V58'/><path d='M45 32H53V40'/>","Elles se coupent à angle droit."],
 ["Segment","<path d='M15 30H85'/><circle cx='15' cy='30' r='3' class='f'/><circle cx='85' cy='30' r='3' class='f'/>","Limité par deux points."],
 ["Médiatrice d'un segment","<path d='M15 35H85'/><path d='M50 3V58'/><path d='M50 27H58V35'/><path d='M30 31v8M70 31v8'/>","Perpendiculaire au segment, en son milieu."],
 ["Cube","<path d='M22 22H58V56H22Z'/><path d='M22 22L36 10H72L58 22M72 10V44L58 56'/>","6 faces carrées identiques."],
 ["Pavé droit","<path d='M12 26H64V54H12Z'/><path d='M12 26L28 12H80L64 26M80 12V40L64 54'/>","6 faces rectangulaires."],
 ["Axe de symétrie","<path d='M50 2V58' style='stroke-dasharray:5 4'/><path d='M44 15L22 28L40 48Z'/><path d='M56 15L78 28L60 48Z'/>","Les deux figures se superposent par pliage."]
];

/* ---------- Classements ---------- */
C.tri=[
 {t:"Quel type d'angle ?",ic:"📐",d:"Classe l'angle selon sa mesure.",cats:["Aigu","Droit","Obtus","Plat"],items:[["45°","Aigu","Moins de 90°."],["89°","Aigu","Juste sous 90°."],["10°","Aigu","Moins de 90°."],["90°","Droit","Exactement 90°."],["91°","Obtus","Juste au-dessus de 90°."],["120°","Obtus","Entre 90° et 180°."],["170°","Obtus","Entre 90° et 180°."],["180°","Plat","Côtés alignés."]]},
 {t:"Quel triangle ?",ic:"🔺",d:"Quelle est la nature de ce triangle ?",cats:["Isocèle","Équilatéral","Rectangle","Quelconque"],items:[["Côtés 5 cm, 5 cm, 8 cm","Isocèle","Deux côtés égaux."],["Côtés 6 cm, 6 cm, 6 cm","Équilatéral","Trois côtés égaux."],["Angles 90°, 30°, 60°","Rectangle","Un angle droit."],["Côtés 4 cm, 5 cm, 7 cm","Quelconque","Aucun côté égal, pas d'angle droit."],["Angles 60°, 60°, 60°","Équilatéral","Trois angles de 60°."],["Angles 70°, 70°, 40°","Isocèle","Deux angles égaux."],["Angles 50°, 60°, 70°","Quelconque","Rien de particulier."],["Angles 35°, 55°, 90°","Rectangle","Un angle de 90°."]]},
 {t:"Divisible par 2, par 3 ou par 5 ?",ic:"➗",d:"Parmi 2, 3 et 5, par quel SEUL nombre est-il divisible ?",cats:["Par 2","Par 3","Par 5"],items:[["14","Par 2","Pair ; 1 + 4 = 5 (pas par 3) ; ne finit ni par 0 ni par 5."],["22","Par 2","Pair ; 2 + 2 = 4."],["38","Par 2","Pair ; 3 + 8 = 11."],["21","Par 3","2 + 1 = 3 ; impair ; ne finit pas par 0 ou 5."],["27","Par 3","2 + 7 = 9."],["33","Par 3","3 + 3 = 6."],["25","Par 5","Finit par 5 ; 2 + 5 = 7."],["35","Par 5","Finit par 5 ; 3 + 5 = 8."],["55","Par 5","Finit par 5 ; 5 + 5 = 10."]]},
 {t:"Quelle grandeur ?",ic:"📏",d:"Que mesure cette unité ?",cats:["Longueur","Aire","Volume","Durée"],items:[["km","Longueur",""],["mm","Longueur",""],["cm²","Aire","Le petit 2 = carré : une surface."],["m²","Aire",""],["cm³","Volume","Le petit 3 = cube : un volume."],["dm³","Volume",""],["min","Durée",""],["s","Durée","La seconde."]]},
 {t:"Écritures égales",ic:"🔟",d:"À quel nombre décimal est-ce égal ?",cats:["0,1","0,25","0,5","0,75"],items:[["1/2","0,5",""],["50 %","0,5",""],["2/4","0,5","2/4 = 1/2."],["1/4","0,25",""],["25 %","0,25",""],["25/100","0,25",""],["3/4","0,75",""],["75 %","0,75",""],["1/10","0,1",""],["10 %","0,1",""]]},
 {t:"Impossible, possible ou certain ?",ic:"🎲",d:"Classe chaque événement.",cats:["Impossible","Possible","Certain"],items:[["Obtenir 7 avec un dé à 6 faces","Impossible","Probabilité 0."],["Obtenir 6 avec un dé à 6 faces","Possible","Probabilité 1/6."],["Obtenir un nombre entre 1 et 6 avec un dé à 6 faces","Certain","Probabilité 1."],["Obtenir pile avec une pièce","Possible","Probabilité 1/2."],["Tirer une bille rouge dans un sac de billes bleues","Impossible","Il n'y a pas de rouge."],["Tirer une bille verte dans un sac de billes toutes vertes","Certain","Toutes les billes sont vertes."]]},
 {t:"Proportionnel ou pas ?",ic:"⚖️",d:"Ces deux grandeurs sont-elles proportionnelles ?",cats:["Proportionnel","Pas proportionnel"],items:[["Prix et nombre de baguettes à 1,20 € pièce","Proportionnel","On multiplie toujours par 1,20."],["Taille et âge d'un enfant","Pas proportionnel","On ne double pas sa taille en doublant son âge."],["Périmètre d'un carré et longueur du côté","Proportionnel","Périmètre = 4 × côté."],["Aire d'un carré et longueur du côté","Pas proportionnel","Côté × 2 → aire × 4."],["Distance et durée à vitesse constante","Proportionnel","Deux fois plus de temps, deux fois plus de distance."],["Note à un contrôle et temps de révision","Pas proportionnel","Aucune règle fixe."]]}
];

/* ---------- Exercices à l'infini (atelier) ---------- */
C.atelier=[
 {t:"Fraction d'une quantité",ic:"🍕",d:"a/b de N = (N ÷ b) × a",gen:R=>{const b=R.pick([2,3,4,5,10]),a=R.r(1,b-1),n=b*R.r(2,12);return {q:`Combien font <b>${a}/${b} de ${n}</b> ?`,r:n/b*a,u:"",tol:0.01,ex:`${n} ÷ ${b} = ${n/b}, puis × ${a} = <b>${n/b*a}</b>.`}}},
 {t:"× et ÷ par 10, 100, 1 000",ic:"🔟",d:"Les chiffres changent de rang",gen:R=>{const x=R.pick([3.7,0.45,12.5,7.08,0.6,25]),k=R.pick([10,100,1000]),m=R.r(0,1);const r=m?x*k:x/k;return {q:`Calcule : <b>${R.f(x,2)} ${m?'×':'÷'} ${k.toLocaleString('fr-FR')}</b>`,r,u:"",tol:Math.abs(r)*1e-6+1e-9,ex:`Chaque chiffre prend une valeur ${k.toLocaleString('fr-FR')} fois plus ${m?'grande':'petite'} : <b>${R.f(r,6)}</b>.`}}},
 {t:"Multiplier des décimaux",ic:"✖️",d:"Sans virgule, puis on la place",gen:R=>{const a=R.r(11,49)/10,b=R.r(2,9)/10+R.r(0,2);const r=Math.round(a*b*100)/100;return {q:`Calcule : <b>${R.f(a,1)} × ${R.f(b,1)}</b>`,r,u:"",tol:0.001,ex:`On calcule ${Math.round(a*10)} × ${Math.round(b*10)} = ${Math.round(a*10)*Math.round(b*10)}, puis on place la virgule (2 chiffres après) : <b>${R.f(r,2)}</b>.`}}},
 {t:"Division euclidienne",ic:"➗",d:"a = b × q + r",gen:R=>{const b=R.r(3,9),q=R.r(5,30),re=R.r(0,b-1),a=b*q+re,ask=R.r(0,1);return {q:`Dans la division euclidienne de <b>${a}</b> par <b>${b}</b>, quel est ${ask?'le <b>reste</b>':'le <b>quotient</b>'} ?`,r:ask?re:q,u:"",tol:0.01,ex:`${a} = ${b} × ${q} + ${re} : quotient <b>${q}</b>, reste <b>${re}</b>.`}}},
 {t:"Convertir des longueurs",ic:"📏",d:"km, m, cm, mm",gen:R=>{const c=R.pick([["km","m",1000],["m","cm",100],["cm","mm",10],["m","mm",1000],["m","km",0.001],["cm","m",0.01]]),x=R.pick([1.5,2.4,35,0.8,120,7]),r=x*c[2];return {q:`Convertis : <b>${R.f(x,2)} ${c[0]}</b> = ? ${c[1]}`,r,u:c[1],tol:Math.abs(r)*1e-6+1e-9,ex:`1 ${c[0]} = ${c[2].toLocaleString('fr-FR')} ${c[1]}, donc ${R.f(x,2)} ${c[0]} = <b>${R.f(r,4)} ${c[1]}</b>.`}}},
 {t:"Périmètres",ic:"🔲",d:"Rectangle, carré",gen:R=>{if(R.r(0,1)){const c=R.r(3,25);return {q:`Périmètre d'un <b>carré</b> de <b>${c} cm</b> de côté ?`,r:4*c,u:"cm",tol:0.01,ex:`4 × ${c} = <b>${4*c} cm</b>.`}}const L=R.r(5,30),l=R.r(2,L-1);return {q:`Périmètre d'un <b>rectangle</b> de <b>${L} m</b> sur <b>${l} m</b> ?`,r:2*(L+l),u:"m",tol:0.01,ex:`2 × (${L} + ${l}) = <b>${2*(L+l)} m</b>.`}}},
 {t:"Aires",ic:"🟩",d:"Rectangle, carré",gen:R=>{if(R.r(0,1)){const c=R.r(2,15);return {q:`Aire d'un <b>carré</b> de <b>${c} cm</b> de côté ?`,r:c*c,u:"cm²",tol:0.01,ex:`${c} × ${c} = <b>${c*c} cm²</b>.`}}const L=R.r(4,20),l=R.r(2,L-1);return {q:`Aire d'un <b>rectangle</b> de <b>${L} m</b> sur <b>${l} m</b> ?`,r:L*l,u:"m²",tol:0.01,ex:`${L} × ${l} = <b>${L*l} m²</b>.`}}},
 {t:"Périmètre du cercle",ic:"⭕",d:"π × diamètre (π ≈ 3,14)",gen:R=>{const ray=R.r(0,1),v=R.r(2,20),d=ray?2*v:v,r=3.14*d;return {q:`Un cercle a un ${ray?'<b>rayon</b>':'<b>diamètre</b>'} de <b>${v} cm</b>. Calcule son périmètre avec π ≈ 3,14.`,r,u:"cm",tol:0.02,ex:`${ray?`Diamètre = 2 × ${v} = ${d} cm. `:''}Périmètre ≈ 3,14 × ${d} = <b>${R.f(r,2)} cm</b>.`}}},
 {t:"Le 3e angle du triangle",ic:"🔺",d:"Somme des angles = 180°",gen:R=>{const a=R.r(20,100),b=R.r(10,170-a-5);return {q:`Un triangle a deux angles de <b>${a}°</b> et <b>${b}°</b>. Combien mesure le troisième ?`,r:180-a-b,u:"°",tol:0.01,ex:`180 − ${a} − ${b} = <b>${180-a-b}°</b>.`}}},
 {t:"Durées",ic:"⏰",d:"Passer par les heures rondes",gen:R=>{const h=R.r(7,18),m=R.r(5,55),d=R.r(25,190),f=h*60+m+d,fh=Math.floor(f/60),fm=f%60;return {q:`Un film commence à <b>${h} h ${String(m).padStart(2,'0')}</b> et finit à <b>${fh} h ${String(fm).padStart(2,'0')}</b>. Combien de minutes dure-t-il ?`,r:d,u:"min",tol:0.01,ex:`Durée : ${Math.floor(d/60)} h ${d%60} min, soit <b>${d} minutes</b>.`}}},
 {t:"Proportionnalité",ic:"⚖️",d:"Retour à l'unité",gen:R=>{const n=R.pick([2,4,5]),p=R.pick([1.2,1.5,2,2.5,3]),k=R.r(3,12),r=Math.round(p*k*100)/100;return {q:`<b>${n}</b> croissants coûtent <b>${R.f(p*n,2)} €</b>. Combien coûtent <b>${k}</b> croissants ?`,r,u:"€",tol:0.01,ex:`1 croissant : ${R.f(p*n,2)} ÷ ${n} = ${R.f(p,2)} € ; ${k} croissants : ${k} × ${R.f(p,2)} = <b>${R.f(r,2)} €</b>.`}}},
 {t:"Pourcentages",ic:"💯",d:"10 %, 20 %, 25 %, 50 %",gen:R=>{const pc=R.pick([10,20,25,50,75]),n=R.pick([20,40,60,80,120,200,36,48]),r=n*pc/100;return {q:`Combien font <b>${pc} % de ${n}</b> ?`,r,u:"",tol:0.01,ex:`${pc} % de ${n} = ${n} × ${pc} ÷ 100 = <b>${R.f(r,2)}</b>${pc===25?' (le quart)':pc===50?' (la moitié)':pc===10?' (on divise par 10)':''}.`}}},
 {t:"Échelles",ic:"🗺️",d:"Plan → réalité",gen:R=>{const e=R.pick([100,1000,10000]),cm=R.r(2,15),r=cm*e/100;return {q:`Sur un plan à l'échelle <b>1/${e.toLocaleString('fr-FR')}</b>, une distance mesure <b>${cm} cm</b>. Quelle est la distance réelle en mètres ?`,r,u:"m",tol:0.01,ex:`${cm} × ${e.toLocaleString('fr-FR')} = ${(cm*e).toLocaleString('fr-FR')} cm = <b>${R.f(r,2)} m</b>.`}}},
 {t:"Probabilités",ic:"🎲",d:"Favorables ÷ possibles (en décimal)",gen:R=>{const t=R.pick([2,4,5,10]),f=R.r(1,t-1);return {q:`Un sac contient <b>${t}</b> jetons dont <b>${f}</b> gagnants. On en tire un au hasard. Probabilité de tirer un jeton gagnant, <b>en nombre décimal</b> ?`,r:f/t,u:"",tol:0.001,ex:`${f}/${t} = <b>${R.f(f/t,2)}</b>.`}}},
 {t:"Volumes en cubes",ic:"🧊",d:"Cubes par couche × couches",gen:R=>{const a=R.r(2,8),b=R.r(2,6),c=R.r(2,6);return {q:`Un pavé est rempli de cubes de 1 cm³ : <b>${a}</b> cubes de long, <b>${b}</b> de large, <b>${c}</b> couches. Volume ?`,r:a*b*c,u:"cm³",tol:0.01,ex:`Une couche : ${a} × ${b} = ${a*b} cubes ; ${c} couches : <b>${a*b*c} cm³</b>.`}}},
 {t:"Le nombre caché",ic:"❓",d:"La balance",gen:R=>{const x=R.r(3,40),k=R.r(0,1);if(k){const b=R.r(5,60);return {q:`<b>? + ${b} = ${x+b}</b>. Quel est le nombre caché ?`,r:x,u:"",tol:0.01,ex:`${x+b} − ${b} = <b>${x}</b>.`}}const a=R.r(2,9);return {q:`<b>${a} × ? = ${a*x}</b>. Quel est le nombre caché ?`,r:x,u:"",tol:0.01,ex:`${a*x} ÷ ${a} = <b>${x}</b>.`}}}
];

/* ---------- Instruments (fiches + « Qui suis-je ? ») ---------- */
C.appareils=[
 {n:"Règle graduée",ic:"📏",f:"Je sers à tracer des traits droits et à mesurer des longueurs.",c:"Graduée en centimètres et millimètres.",p:"Placer le zéro (et non le bord) sur le premier point.",s:"Vérifier qu'on commence bien à 0."},
 {n:"Équerre",ic:"📐",f:"Je sers à tracer et à vérifier les angles droits.",c:"Un angle droit, parfois graduée.",p:"Un côté de l'angle droit le long de la droite, puis on trace le long de l'autre côté.",s:"Bien plaquer l'angle droit sur le point."},
 {n:"Compas",ic:"🧭",f:"Je trace des cercles et je reporte des longueurs.",c:"Une pointe et une mine ; l'écartement donne le rayon.",p:"Pointe sur le centre, on tourne sans changer l'écartement.",s:"Pointe sèche : attention aux doigts."},
 {n:"Rapporteur",ic:"🌗",f:"Je mesure et je trace des angles en degrés.",c:"Demi-disque gradué de 0 à 180° dans les deux sens.",p:"Centre sur le sommet, zéro sur un côté, lecture sur la bonne graduation.",s:"Vérifier si l'angle est aigu ou obtus avant de lire."},
 {n:"Calculatrice",ic:"🧮",f:"Je fais les calculs longs, mais je ne réfléchis pas à ta place.",c:"Respecte les priorités de calcul.",p:"Toujours vérifier le résultat avec un ordre de grandeur.",s:"Une faute de frappe donne un résultat faux."},
 {n:"Tableur",ic:"📊",f:"Logiciel en cellules (A1, B2…) qui calcule avec des formules et les recopie.",c:"Une formule commence par =.",p:"Écrire la formule une fois et la recopier vers le bas.",s:"Vérifier les cellules utilisées par la formule."},
 {n:"Papier calque",ic:"📄",f:"Feuille transparente qui aide à vérifier une symétrie par pliage ou à reproduire une figure.",c:"On voit la figure à travers.",p:"Décalquer la figure, plier le long de l'axe, comparer.",s:"Bien tenir la feuille pour ne pas décaler."}
];
