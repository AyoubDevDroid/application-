/* JEUX — Maths 5e */

/* ---------- Problèmes pas à pas ---------- */
C.diag=[
 {id:"thermo",t:"Le thermomètre de Montréal",ic:"🌡️",niv:1,bon:{lieu:"À Montréal, un matin de janvier, il fait −14 °C à 7 h. À 15 h, il fait −3 °C. Dans la nuit, la température baisse de 9 degrés par rapport à 15 h.",pb:"De combien de degrés la température a-t-elle monté entre 7 h et 15 h ? Quelle température fait-il la nuit ?",qui:"7 h : −14 °C · 15 h : −3 °C · nuit : 9 degrés de moins qu'à 15 h"},
  etapes:[
   {q:"Quel calcul donne la hausse entre 7 h et 15 h ?",o:[["(−3) − (−14)",true,"Écart = température d'arrivée − température de départ."],["(−14) − (−3)",false,"Ce serait l'écart dans l'autre sens (négatif)."],["(−14) + (−3)",false,"On cherche un écart, pas une somme de températures."]]},
   {q:"Combien vaut (−3) − (−14) ?",o:[["11",true,"(−3) + 14 = 11 : la température a monté de 11 degrés."],["−17",false,"Soustraire −14, c'est ajouter 14."],["17",false,"(−3) + 14 = 11, pas 17."]]},
   {q:"Température de la nuit ?",o:[["−12 °C",true,"(−3) − 9 = (−3) + (−9) = −12."],["6 °C",false,"La température baisse : on soustrait 9 à −3."],["−6 °C",false,"On s'éloigne de zéro vers les négatifs : −3 − 9 = −12."]]}],
  fin:"Hausse : (−3) − (−14) = −3 + 14 = 11 degrés. La nuit : (−3) − 9 = −12 °C.",retenir:"Écart = arrivée − départ ; soustraire un négatif, c'est ajouter son opposé."},

 {id:"gateau",t:"Le partage du gâteau",ic:"🎂",niv:1,bon:{lieu:"Léa mange 1/4 d'un gâteau, Tom en mange 1/3.",pb:"Quelle fraction du gâteau ont-ils mangée à eux deux ? Quelle fraction reste-t-il ?",qui:"Léa : 1/4 · Tom : 1/3"},
  etapes:[
   {q:"Quel dénominateur commun choisir pour 1/4 et 1/3 ?",o:[["12",true,"12 est un multiple de 4 et de 3."],["7",false,"On n'additionne pas les dénominateurs : 7 n'est multiple ni de 3 ni de 4."],["4",false,"4 n'est pas un multiple de 3."]]},
   {q:"1/4 + 1/3 = ?",o:[["7/12",true,"3/12 + 4/12 = 7/12."],["2/7",false,"On n'additionne jamais les dénominateurs !"],["2/12",false,"1/4 = 3/12 et 1/3 = 4/12."]]},
   {q:"Quelle fraction reste-t-il ?",o:[["5/12",true,"Le gâteau entier = 12/12 ; 12/12 − 7/12 = 5/12."],["7/12",false,"7/12 est ce qui a été mangé."],["1/12",false,"12 − 7 = 5."]]}],
  fin:"1/4 + 1/3 = 3/12 + 4/12 = 7/12 du gâteau a été mangé. Il reste 1 − 7/12 = 12/12 − 7/12 = 5/12.",retenir:"Additionner des fractions : même dénominateur d'abord ; l'unité vaut 12/12."},

 {id:"cinema",t:"La sortie au cinéma",ic:"🎬",niv:1,bon:{lieu:"Un groupe de 4 adultes et 9 enfants va au cinéma. Une place adulte coûte 9,50 €, une place enfant 6 €. Ils paient avec 3 billets de 50 €.",pb:"Combien vont-ils payer ? Combien leur rend-on ?",qui:"4 adultes à 9,50 € · 9 enfants à 6 € · 3 billets de 50 €"},
  etapes:[
   {q:"Quelle expression donne le prix total ?",o:[["4 × 9,50 + 9 × 6",true,"Les multiplications sont prioritaires : pas besoin de parenthèses."],["(4 + 9) × (9,50 + 6)",false,"On multiplierait chaque personne par les deux prix."],["4 + 9 × 9,50 + 6",false,"Ce calcul ne correspond pas à la situation."]]},
   {q:"Combien vaut 4 × 9,50 + 9 × 6 ?",o:[["92 €",true,"38 + 54 = 92."],["201,50 €",false,"Erreur de priorités : on calcule les produits d'abord."],["29,50 €",false,"Il faut multiplier par le nombre de places."]]},
   {q:"Combien leur rend-on ?",o:[["58 €",true,"3 × 50 = 150 ; 150 − 92 = 58."],["42 €",false,"150 − 92 = 58."],["8 €",false,"Ils donnent 150 €, pas 100 €."]]}],
  fin:"Prix : 4 × 9,50 + 9 × 6 = 38 + 54 = 92 €. Ils donnent 3 × 50 = 150 €, on leur rend 150 − 92 = 58 €.",retenir:"Traduire un problème en une seule expression et respecter les priorités."},

 {id:"aquarium",t:"Remplir l'aquarium",ic:"🐠",niv:2,bon:{lieu:"Un aquarium a la forme d'un pavé droit de 60 cm de long, 30 cm de large et 40 cm de haut. On le remplit jusqu'à 5 cm du bord avec un seau de 8 L.",pb:"Combien de seaux faut-il ?",qui:"Pavé 60 × 30 × 40 cm · eau jusqu'à 5 cm du bord · seau de 8 L"},
  etapes:[
   {q:"Quelle hauteur d'eau ?",o:[["35 cm",true,"40 − 5 = 35 cm."],["40 cm",false,"On s'arrête à 5 cm du bord."],["45 cm",false,"On enlève 5 cm, on ne les ajoute pas."]]},
   {q:"Volume d'eau ?",o:[["60 × 30 × 35 = 63 000 cm³",true,"Volume d'un pavé : longueur × largeur × hauteur."],["60 × 30 = 1 800 cm³",false,"C'est l'aire du fond, pas un volume."],["60 + 30 + 35 = 125 cm³",false,"Un volume se calcule par produit."]]},
   {q:"En litres, et combien de seaux ?",o:[["63 L, donc 8 seaux (7 ne suffisent pas)",true,"63 000 cm³ = 63 dm³ = 63 L ; 63 ÷ 8 = 7,875, il faut 8 seaux."],["630 L, donc 79 seaux",false,"1 L = 1 000 cm³, pas 100."],["63 L, donc 7 seaux",false,"7 seaux = 56 L, il en manque."]]}],
  fin:"Hauteur d'eau : 35 cm. Volume : 60 × 30 × 35 = 63 000 cm³ = 63 dm³ = 63 L. 63 ÷ 8 = 7,875 : il faut 8 seaux (le dernier ne sera pas plein).",retenir:"1 L = 1 dm³ = 1 000 cm³ ; on arrondit au-dessus quand il faut « assez »."},

 {id:"triangle",t:"Le troisième angle",ic:"🔺",niv:2,bon:{lieu:"Dans le triangle ABC, l'angle en A mesure 48° et l'angle en B mesure deux fois plus que l'angle en A.",pb:"Combien mesure l'angle en C ? Quelle est la nature du triangle ?",qui:"Â = 48° · B̂ = 2 × Â"},
  etapes:[
   {q:"Combien mesure l'angle en B ?",o:[["96°",true,"2 × 48 = 96°."],["50°",false,"« Deux fois plus » : on multiplie par 2."],["24°",false,"Deux fois plus, pas deux fois moins."]]},
   {q:"Quelle propriété utiliser ?",o:[["La somme des angles d'un triangle vaut 180°",true,"Elle est vraie dans tous les triangles."],["Les angles opposés par le sommet sont égaux",false,"Il n'y a pas de droites sécantes ici."],["Les angles alternes-internes sont égaux",false,"Il n'y a pas de parallèles."]]},
   {q:"Angle en C et nature du triangle ?",o:[["36° : le triangle est obtusangle (un angle de plus de 90°)",true,"180 − 48 − 96 = 36 ; B̂ = 96° > 90°."],["36° : le triangle est rectangle",false,"Aucun angle ne vaut 90°."],["84° : le triangle est isocèle",false,"180 − 48 − 96 = 36."]]}],
  fin:"B̂ = 2 × 48 = 96°. La somme des angles d'un triangle vaut 180°, donc Ĉ = 180 − 48 − 96 = 36°. L'angle B̂ est obtus : le triangle est obtusangle.",retenir:"Troisième angle = 180° − les deux autres."},

 {id:"soldes",t:"Les soldes",ic:"🏷️",niv:2,bon:{lieu:"Un sweat coûte 45 €. Pendant les soldes, il est affiché à −20 %. Une paire de baskets à 80 € est remise de 12 €.",pb:"Quel est le prix soldé du sweat ? Quelle est la remise la plus avantageuse en pourcentage ?",qui:"Sweat 45 € à −20 % · Baskets 80 € − 12 €"},
  etapes:[
   {q:"Montant de la remise sur le sweat ?",o:[["9 €",true,"20 % de 45 = 45 × 20 ÷ 100 = 9."],["20 €",false,"−20 % n'est pas −20 €."],["4,50 €",false,"4,50 € correspond à 10 %."]]},
   {q:"Prix soldé du sweat ?",o:[["36 €",true,"45 − 9 = 36 €."],["25 €",false,"On enlève 20 %, pas 20 €."],["54 €",false,"Une remise fait baisser le prix."]]},
   {q:"La remise de 12 € sur 80 € représente…",o:[["15 %, donc le sweat (20 %) a la meilleure remise en pourcentage",true,"12 ÷ 80 = 0,15 = 15 % < 20 %."],["12 %, plus avantageux",false,"12 € n'est pas 12 % : 12 ÷ 80 = 0,15."],["20 %, pareil",false,"12 ÷ 80 = 15 %."]]}],
  fin:"Remise sur le sweat : 20 % de 45 = 9 €, prix soldé 36 €. Remise sur les baskets : 12 ÷ 80 = 0,15 = 15 %. En pourcentage, la remise du sweat (20 %) est plus avantageuse.",retenir:"t % de N = N × t ÷ 100 ; pour trouver un pourcentage : partie ÷ total × 100."},

 {id:"recette",t:"La recette de cookies",ic:"🍪",niv:1,bon:{lieu:"Pour 12 cookies : 150 g de farine, 100 g de sucre, 1 œuf, 80 g de chocolat.",pb:"Quelles quantités de farine et de chocolat pour 30 cookies ?",qui:"12 cookies → 150 g farine · 80 g chocolat"},
  etapes:[
   {q:"La quantité de farine est-elle proportionnelle au nombre de cookies ?",o:[["Oui, on multiplie tout par le même nombre",true,"Une recette se multiplie : situation de proportionnalité."],["Non",false,"Pour faire 2 fois plus de cookies, il faut 2 fois plus de farine."],["Seulement pour le sucre",false,"Tous les ingrédients sont proportionnels."]]},
   {q:"Quelle procédure simple pour passer de 12 à 30 ?",o:[["12 → 6 (÷ 2), puis 30 = 6 × 5",true,"Pour 6 cookies : 75 g ; pour 30 : 75 × 5 = 375 g."],["Ajouter 18 g à chaque ingrédient",false,"La proportionnalité est multiplicative, pas additive par ingrédient."],["Multiplier par 18",false,"30 ÷ 12 = 2,5, pas 18."]]},
   {q:"Quantités pour 30 cookies ?",o:[["375 g de farine et 200 g de chocolat",true,"Coefficient 2,5 : 150 × 2,5 = 375 et 80 × 2,5 = 200."],["168 g de farine et 98 g de chocolat",false,"On a ajouté 18 : erreur classique."],["300 g de farine et 160 g de chocolat",false,"Ça, c'est pour 24 cookies."]]}],
  fin:"Pour 6 cookies (÷ 2) : 75 g de farine et 40 g de chocolat. Pour 30 cookies (× 5) : 375 g de farine et 200 g de chocolat. (Coefficient 30 ÷ 12 = 2,5.)",retenir:"Proportionnalité : linéarité ou coefficient, jamais « ajouter la différence »."},

 {id:"tirage",t:"Le tirage au sort",ic:"🎟️",niv:2,bon:{lieu:"Dans un sac : 5 jetons rouges numérotés de 1 à 5 et 7 jetons bleus numérotés de 1 à 7. On tire un jeton au hasard.",pb:"Quelle est la probabilité de tirer un jeton bleu ? un jeton portant le numéro 3 ?",qui:"5 rouges (1 à 5) · 7 bleus (1 à 7) · tirage au hasard"},
  etapes:[
   {q:"Combien d'issues possibles ?",o:[["12",true,"5 + 7 = 12 jetons."],["7",false,"Il y a aussi les jetons rouges."],["2",false,"Il y a 12 jetons, pas 2 couleurs équiprobables."]]},
   {q:"P(bleu) = ?",o:[["7/12",true,"7 jetons bleus sur 12."],["1/2",false,"Les couleurs n'ont pas la même chance : 7 bleus contre 5 rouges."],["7/5",false,"Une probabilité est inférieure ou égale à 1."]]},
   {q:"P(numéro 3) = ?",o:[["2/12 = 1/6",true,"Il y a un 3 rouge et un 3 bleu."],["1/12",false,"Il y a deux jetons portant le 3."],["3/12",false,"On compte les jetons « 3 », pas la valeur 3."]]}],
  fin:"12 jetons équiprobables. P(bleu) = 7/12. Deux jetons portent le 3 (un rouge, un bleu) : P(3) = 2/12 = 1/6.",retenir:"Équiprobabilité : issues favorables ÷ issues possibles."},

 {id:"jardin",t:"Le jardin en parallélogramme",ic:"🌻",niv:3,bon:{lieu:"Un jardin a la forme d'un parallélogramme : un côté mesure 24 m et la hauteur relative à ce côté mesure 15 m. On sème du gazon : 1 kg pour 25 m². Le sac de 5 kg coûte 18,90 €.",pb:"Combien coûtera le gazon ?",qui:"Base 24 m · hauteur 15 m · 1 kg pour 25 m² · sac 5 kg à 18,90 €"},
  etapes:[
   {q:"Aire du jardin ?",o:[["360 m²",true,"Base × hauteur = 24 × 15."],["180 m²",false,"On ne divise pas par 2 : ce n'est pas un triangle."],["78 m²",false,"C'est un calcul de périmètre incomplet."]]},
   {q:"Masse de gazon nécessaire ?",o:[["14,4 kg",true,"360 ÷ 25 = 14,4 kg."],["9 000 kg",false,"On divise par 25 (1 kg pour 25 m²)."],["25 kg",false,"25 m² par kilo, donc 360 ÷ 25."]]},
   {q:"Nombre de sacs et prix ?",o:[["3 sacs, soit 56,70 €",true,"14,4 ÷ 5 = 2,88 → 3 sacs ; 3 × 18,90 = 56,70 €."],["2,88 sacs, soit 54,43 €",false,"On ne peut pas acheter un morceau de sac."],["2 sacs, soit 37,80 €",false,"2 sacs = 10 kg, il en faut 14,4."]]}],
  fin:"Aire = 24 × 15 = 360 m². Gazon : 360 ÷ 25 = 14,4 kg. 14,4 ÷ 5 = 2,88 : il faut 3 sacs, soit 3 × 18,90 = 56,70 €.",retenir:"Aire du parallélogramme = base × hauteur ; on achète des sacs entiers."},

 {id:"programme",t:"Le programme mystère",ic:"🤖",niv:3,bon:{lieu:"Programme : choisir un nombre ; le multiplier par 4 ; ajouter 6 ; diviser par 2 ; soustraire le double du nombre de départ.",pb:"Que donne ce programme pour 5 ? pour 12 ? Que remarques-tu ? Prouve-le.",qui:"× 4 · + 6 · ÷ 2 · − 2 × départ"},
  etapes:[
   {q:"Résultat pour 5 ?",o:[["3",true,"5 × 4 = 20 ; + 6 = 26 ; ÷ 2 = 13 ; − 10 = 3."],["13",false,"N'oublie pas la dernière étape : − 2 × 5."],["23",false,"20 + 6 = 26, puis 26 ÷ 2 = 13, puis 13 − 10 = 3."]]},
   {q:"Résultat pour 12 ?",o:[["3",true,"48 + 6 = 54 ; 54 ÷ 2 = 27 ; 27 − 24 = 3."],["27",false,"Il faut encore soustraire 2 × 12."],["15",false,"27 − 24 = 3."]]},
   {q:"Comment prouver que le résultat est toujours 3 ?",o:[["Avec x : (4x + 6) ÷ 2 − 2x = 2x + 3 − 2x = 3",true,"Le calcul littéral démontre la propriété pour TOUS les nombres."],["En essayant 10 nombres de plus",false,"Des exemples ne prouvent rien : il en faudrait une infinité."],["On ne peut pas le prouver",false,"Le calcul littéral le permet."]]}],
  fin:"Pour 5 et pour 12, on obtient 3. Avec un nombre x : 4x + 6, puis (4x + 6) ÷ 2 = 2x + 3, puis 2x + 3 − 2x = 3. Le résultat est toujours 3 : c'est démontré pour tous les nombres.",retenir:"Des exemples permettent de conjecturer ; le calcul littéral permet de démontrer."}
];

/* ---------- Figures à reconnaître ---------- */
C.symboles=[
 ["Parallélogramme","<path d='M10 50H65L90 10H35Z'/>","Côtés opposés parallèles deux à deux."],
 ["Rectangle","<path d='M15 12H85V50H15Z'/><path d='M15 20H23V12'/>","Parallélogramme avec un angle droit."],
 ["Losange","<path d='M50 4L85 30L50 56L15 30Z'/>","Quatre côtés de même longueur."],
 ["Carré","<path d='M30 8H72V50H30Z'/><path d='M30 16H38V8'/>","Rectangle et losange à la fois."],
 ["Trapèze","<path d='M10 50H90L70 12H30Z'/>","Deux côtés parallèles seulement."],
 ["Triangle isocèle","<path d='M50 6L20 54H80Z'/><path d='M33 28l5 3M62 31l5-3'/>","Deux côtés de même longueur."],
 ["Triangle équilatéral","<path d='M50 6L18 56H82Z'/><path d='M31 29l5 3M64 32l5-3M50 52v8'/>","Trois côtés égaux, trois angles de 60°."],
 ["Triangle rectangle","<path d='M20 54V10L85 54Z'/><path d='M20 46H28V54'/>","Un angle droit."],
 ["Prisme droit","<path d='M15 50H55L35 25Z'/><path d='M35 25L65 8M55 50L85 33M65 8L85 33'/><path d='M15 50L45 33L85 33M45 33L65 8' style='stroke-dasharray:4 3'/>","Deux bases polygonales identiques et parallèles."],
 ["Cylindre","<ellipse cx='50' cy='12' rx='24' ry='7'/><path d='M26 12V48M74 12V48'/><path d='M26 48A24 7 0 0 0 74 48'/>","Deux bases en disque."],
 ["Pavé droit","<path d='M15 25H60V55H15Z'/><path d='M15 25L35 8H80L60 25M80 8V38L60 55'/>","Six faces rectangulaires."],
 ["Angles opposés par le sommet","<path d='M10 55L90 5M10 5L90 55'/><path d='M38 22A14 14 0 0 0 38 38M62 22A14 14 0 0 1 62 38' style='stroke-width:4'/>","Deux droites sécantes : les angles face à face sont égaux."],
 ["Angles alternes-internes","<path d='M5 18H95M5 44H95M30 58L70 4'/><path d='M64 18A10 10 0 0 1 61 26M36 44A10 10 0 0 1 39 36' style='stroke-width:4'/>","Entre les deux droites, de part et d'autre de la sécante."],
 ["Médiane d'un triangle","<path d='M50 6L10 54H90Z'/><path d='M50 6V54' style='stroke-width:4'/><path d='M28 50l4 8M68 50l4 8'/>","Relie un sommet au milieu du côté opposé."],
 ["Hauteur d'un triangle","<path d='M35 6L10 54H90Z'/><path d='M35 6V54' style='stroke-width:4'/><path d='M35 46H43V54'/>","Passe par un sommet, perpendiculaire au côté opposé."],
 ["Symétrie centrale","<path d='M20 15L38 15L28 28Z'/><path d='M80 45L62 45L72 32Z'/><circle cx='50' cy='30' r='2.5' class='f'/>","Demi-tour autour d'un point."],
 ["Diagramme circulaire","<circle cx='50' cy='30' r='24'/><path d='M50 30V6M50 30L72 40M50 30L28 42'/>","Montre les parts d'un tout."]
];

/* ---------- Classements ---------- */
C.tri=[
 {t:"Positif ou négatif ?",ic:"🌡️",d:"Le résultat est-il positif ou négatif ?",cats:["Positif","Négatif","Nul"],items:[
  ["(−5) + 8","Positif","3"],["(−9) + 4","Négatif","−5"],["3 − 10","Négatif","−7"],["(−4) − (−6)","Positif","2"],["(−7) + 7","Nul","Deux opposés."],["(−2) + (−3)","Négatif","−5"],["6 − (−1)","Positif","7"],["(−1,5) + 1,5","Nul",""]]},
 {t:"Divisible par…",ic:"🔍",d:"Par quel nombre est-il divisible ? (critère le plus fort)",cats:["Par 9","Par 3 mais pas par 9","Ni par 3 ni par 9"],items:[
  ["243","Par 9","2 + 4 + 3 = 9."],["5 418","Par 9","5 + 4 + 1 + 8 = 18."],["111","Par 3 mais pas par 9","1 + 1 + 1 = 3."],["2 024","Ni par 3 ni par 9","2 + 0 + 2 + 4 = 8."],["471","Par 3 mais pas par 9","4 + 7 + 1 = 12."],["1 000","Ni par 3 ni par 9","Somme = 1."],["8 991","Par 9","8 + 9 + 9 + 1 = 27."]]},
 {t:"Somme ou produit ?",ic:"🔤",d:"Quelle est la nature de cette expression ?",cats:["Somme","Différence","Produit"],items:[
  ["3x + 5","Somme","Dernière opération : +."],["4(x + 2)","Produit","4 × (x + 2)."],["7 − 2x","Différence",""],["(x + 1)(x − 1)","Produit",""],["2 × 5 + 1","Somme","On multiplie d'abord."],["x²","Produit","x × x."],["(3 + x) − 4","Différence",""]]},
 {t:"Quel parallélogramme ?",ic:"▱",d:"Quel est le parallélogramme le plus précis ?",cats:["Rectangle","Losange","Carré","Parallélogramme quelconque"],items:[
  ["Diagonales de même longueur","Rectangle",""],["Diagonales perpendiculaires","Losange",""],["Diagonales perpendiculaires et de même longueur","Carré",""],["Un angle droit","Rectangle",""],["Deux côtés consécutifs égaux","Losange",""],["Diagonales qui se coupent en leur milieu, sans plus","Parallélogramme quelconque",""],["Un angle droit et deux côtés consécutifs égaux","Carré",""]]},
 {t:"Proportionnel ou pas ?",ic:"⚖️",d:"Ces deux grandeurs sont-elles proportionnelles ?",cats:["Proportionnel","Pas proportionnel"],items:[
  ["Prix et nombre de baguettes (même prix chacune)","Proportionnel",""],["Périmètre d'un carré et son côté","Proportionnel","P = 4c."],["Aire d'un carré et son côté","Pas proportionnel","A = c²."],["Taille et âge d'un enfant","Pas proportionnel",""],["Distance et durée à vitesse constante","Proportionnel","d = v × t."],["Prix d'un abonnement à 10 € + 2 € par séance","Pas proportionnel","Frais fixes."],["Quantités d'une recette et nombre de personnes","Proportionnel",""]]},
 {t:"Impossible, possible ou certain ?",ic:"🎲",d:"Quel type d'événement ?",cats:["Impossible","Possible","Certain"],items:[
  ["Obtenir 7 avec un dé à 6 faces","Impossible",""],["Obtenir un nombre inférieur à 7 avec un dé","Certain",""],["Obtenir pile","Possible","1/2."],["Obtenir 6 avec un dé","Possible","1/6."],["Tirer une boule rouge dans une urne de boules vertes","Impossible",""],["Obtenir pile ou face","Certain",""]]},
 {t:"Quelle droite remarquable ?",ic:"🔺",d:"Comment s'appelle cette droite du triangle ?",cats:["Médiatrice","Hauteur","Médiane"],items:[
  ["Perpendiculaire à un côté en son milieu","Médiatrice",""],["Passe par un sommet, perpendiculaire au côté opposé","Hauteur",""],["Passe par un sommet et le milieu du côté opposé","Médiane",""],["Ses points sont à égale distance de deux sommets","Médiatrice",""],["Partage le triangle en deux triangles de même aire","Médiane",""],["Sert à calculer l'aire","Hauteur","Base × hauteur ÷ 2."]]}
];

/* ---------- Exercices à l'infini ---------- */
const sg=n=>n<0?"("+R5f(n)+")":R5f(n), R5f=n=>(Math.round(n*100)/100).toString().replace('.',',').replace('-','−');
C.atelier=[
 {t:"Priorités opératoires",ic:"🧮",d:"a + b × c ou a × (b + c)",gen:R=>{const a=R.r(2,20),b=R.r(2,9),c=R.r(2,9),k=R.r(0,2);if(k===0)return {q:`Calcule : <b>${a} + ${b} × ${c}</b>`,r:a+b*c,u:"",tol:0.01,ex:`${b} × ${c} = ${b*c} d'abord, puis ${a} + ${b*c} = <b>${a+b*c}</b>.`};if(k===1)return {q:`Calcule : <b>${a} × (${b} + ${c})</b>`,r:a*(b+c),u:"",tol:0.01,ex:`Parenthèse : ${b+c}, puis ${a} × ${b+c} = <b>${a*(b+c)}</b>.`};const x=b*c+a;return {q:`Calcule : <b>${x} − ${b} × ${c}</b>`,r:a,u:"",tol:0.01,ex:`${b} × ${c} = ${b*c}, puis ${x} − ${b*c} = <b>${a}</b>.`}}},
 {t:"Diviser par un décimal",ic:"➗",d:"Rendre le diviseur entier",gen:R=>{const d=R.pick([0.2,0.4,0.5,0.25,0.3,1.5,2.5]),q=R.r(3,40),a=Math.round(d*q*100)/100;return {q:`Calcule : <b>${R5f(a)} ÷ ${R5f(d)}</b>`,r:q,u:"",tol:0.01,ex:`On multiplie les deux nombres par ${10**(String(d).split(".")[1]||"").length} pour rendre le diviseur entier : le quotient vaut <b>${q}</b> (vérif. : ${q} × ${R5f(d)} = ${R5f(a)}).`}}},
 {t:"Division euclidienne : le reste",ic:"🔍",d:"a = b × q + r",gen:R=>{const b=R.r(3,12),q=R.r(3,15),r=R.r(0,b-1),a=b*q+r;return {q:`Quel est le reste de la division euclidienne de <b>${a}</b> par <b>${b}</b> ?`,r,u:"",tol:0.01,ex:`${a} = ${b} × ${q} + ${r}, et ${r} &lt; ${b} : le reste est <b>${r}</b>.`}}},
 {t:"Additionner des relatifs",ic:"➕",d:"Signes et distances à zéro",gen:R=>{const a=R.r(-15,15),b=R.r(-15,15);return {q:`Calcule : <b>${sg(a)} + ${sg(b)}</b>`,r:a+b,u:"",tol:0.01,ex:`${(a<0)===(b<0)?"Même signe : on additionne les distances à zéro et on garde le signe.":"Signes contraires : on soustrait les distances à zéro, signe du plus éloigné de zéro."} Résultat : <b>${R5f(a+b)}</b>.`}}},
 {t:"Soustraire des relatifs",ic:"➖",d:"Ajouter l'opposé",gen:R=>{const a=R.r(-15,15),b=R.r(-15,15);return {q:`Calcule : <b>${sg(a)} − ${sg(b)}</b>`,r:a-b,u:"",tol:0.01,ex:`Soustraire ${sg(b)}, c'est ajouter ${sg(-b)} : ${sg(a)} + ${sg(-b)} = <b>${R5f(a-b)}</b>.`}}},
 {t:"Additionner des fractions",ic:"🍕",d:"Résultat en décimal",gen:R=>{const p=R.pick([[1,2,1,4],[1,3,1,6],[3,4,1,8],[2,5,3,10],[1,2,3,8],[5,6,1,3],[1,4,1,5],[3,10,1,4]]),v=p[0]/p[1]+p[2]/p[3];return {q:`Calcule <b>${p[0]}/${p[1]} + ${p[2]}/${p[3]}</b> et donne le résultat en nombre décimal (au centième).`,r:v,u:"",tol:0.006,ex:`On met au même dénominateur, on ajoute les numérateurs : ${p[0]}/${p[1]} + ${p[2]}/${p[3]} ≈ <b>${R5f(v)}</b>.`}}},
 {t:"Fraction d'un nombre",ic:"🎯",d:"a/b de N",gen:R=>{const b=R.pick([2,3,4,5,6,8,10]),a=R.r(1,b-1),k=R.r(2,12),n=b*k;return {q:`Calcule les <b>${a}/${b}</b> de <b>${n}</b>.`,r:a*k,u:"",tol:0.01,ex:`${n} ÷ ${b} = ${k}, puis ${k} × ${a} = <b>${a*k}</b>.`}}},
 {t:"Carrés et cubes",ic:"²",d:"a² ou a³",gen:R=>{const c=R.r(0,1);if(c){const a=R.r(1,6);return {q:`Calcule <b>${a}³</b>.`,r:a**3,u:"",tol:0.01,ex:`${a} × ${a} × ${a} = <b>${a**3}</b>.`}}const a=R.r(2,15);return {q:`Calcule <b>${a}²</b>.`,r:a*a,u:"",tol:0.01,ex:`${a} × ${a} = <b>${a*a}</b>.`}}},
 {t:"Valeur d'une expression",ic:"🔤",d:"Substituer",gen:R=>{const a=R.r(2,9),b=R.r(1,12),x=R.r(1,8),c=R.r(0,1);return c?{q:`Calcule <b>${a}x + ${b}</b> pour <b>x = ${x}</b>.`,r:a*x+b,u:"",tol:0.01,ex:`${a} × ${x} + ${b} = <b>${a*x+b}</b>.`}:{q:`Calcule <b>x² + ${b}</b> pour <b>x = ${x}</b>.`,r:x*x+b,u:"",tol:0.01,ex:`${x}² + ${b} = ${x*x} + ${b} = <b>${x*x+b}</b>.`}}},
 {t:"Équations",ic:"⚖️",d:"x + b = c ou ax = c",gen:R=>{const x=R.r(2,30),k=R.r(0,1);if(k){const b=R.r(3,40);return {q:`Résous : <b>x + ${b} = ${x+b}</b>`,r:x,u:"",tol:0.01,ex:`x = ${x+b} − ${b} = <b>${x}</b>.`}}const a=R.r(2,9);return {q:`Résous : <b>${a}x = ${a*x}</b>`,r:x,u:"",tol:0.01,ex:`x = ${a*x} ÷ ${a} = <b>${x}</b>.`}}},
 {t:"Troisième angle d'un triangle",ic:"🔺",d:"180° − les deux autres",gen:R=>{const a=R.r(20,90),b=R.r(15,160-a);return {q:`Un triangle a deux angles de <b>${a}°</b> et <b>${b}°</b>. Mesure du troisième ?`,r:180-a-b,u:"°",tol:0.01,ex:`180 − ${a} − ${b} = <b>${180-a-b}°</b>.`}}},
 {t:"Aires : triangle et parallélogramme",ic:"📐",d:"base × hauteur (÷ 2)",gen:R=>{const b=R.r(3,20),h=R.r(2,15),t=R.r(0,1);return t?{q:`Aire d'un <b>triangle</b> de base ${b} cm et de hauteur ${h} cm ?`,r:b*h/2,u:"cm²",tol:0.01,ex:`${b} × ${h} ÷ 2 = <b>${R5f(b*h/2)} cm²</b>.`}:{q:`Aire d'un <b>parallélogramme</b> de base ${b} cm et de hauteur ${h} cm ?`,r:b*h,u:"cm²",tol:0.01,ex:`${b} × ${h} = <b>${b*h} cm²</b>.`}}},
 {t:"Volumes : prisme et cylindre",ic:"🧊",d:"Aire de la base × hauteur",gen:R=>{const k=R.r(0,1),h=R.r(3,20);if(k){const r=R.r(1,8),v=Math.PI*r*r*h;return {q:`Volume d'un <b>cylindre</b> de rayon ${r} cm et de hauteur ${h} cm, arrondi au cm³ ?`,r:v,u:"cm³",tol:0.6,ex:`π × ${r}² × ${h} ≈ <b>${Math.round(v)} cm³</b>.`}}const B=R.r(4,40);return {q:`Volume d'un <b>prisme droit</b> dont la base a une aire de ${B} cm² et la hauteur ${h} cm ?`,r:B*h,u:"cm³",tol:0.01,ex:`${B} × ${h} = <b>${B*h} cm³</b>.`}}},
 {t:"Pourcentages",ic:"💯",d:"t % de N",gen:R=>{const t=R.pick([10,20,25,50,5,1,30,75]),n=R.pick([20,40,60,80,120,200,300,500]);return {q:`Calcule <b>${t} %</b> de <b>${n}</b>.`,r:n*t/100,u:"",tol:0.01,ex:`${n} × ${t} ÷ 100 = <b>${R5f(n*t/100)}</b>.`}}},
 {t:"Quatrième proportionnelle",ic:"⚖️",d:"Retour à l'unité",gen:R=>{const u=R.pick([0.5,1.2,1.5,2,2.5,3,4]),a=R.r(2,6),b=R.r(3,12);return {q:`<b>${a}</b> objets coûtent <b>${R5f(a*u)} €</b>. Combien coûtent <b>${b}</b> objets ?`,r:b*u,u:"€",tol:0.01,ex:`1 objet : ${R5f(a*u)} ÷ ${a} = ${R5f(u)} € ; ${b} objets : ${b} × ${R5f(u)} = <b>${R5f(b*u)} €</b>.`}}},
 {t:"Moyenne",ic:"📊",d:"Somme ÷ nombre",gen:R=>{const l=[...Array(R.r(3,6))].map(()=>R.r(5,20)),s=l.reduce((a,b)=>a+b,0);return {q:`Moyenne de : <b>${l.join(' ; ')}</b> (au dixième) ?`,r:s/l.length,u:"",tol:0.06,ex:`Somme = ${s} ; ${s} ÷ ${l.length} ≈ <b>${R5f(Math.round(s/l.length*10)/10)}</b>.`}}},
 {t:"Fréquences",ic:"📈",d:"En pourcentage",gen:R=>{const n=R.pick([20,25,40,50,200]),e=R.r(1,n-1);return {q:`Dans une série de <b>${n}</b> valeurs, une valeur apparaît <b>${e}</b> fois. Sa fréquence en % ?`,r:e/n*100,u:"%",tol:0.01,ex:`${e} ÷ ${n} = ${R5f(e/n)} = <b>${R5f(e/n*100)} %</b>.`}}},
 {t:"Probabilités",ic:"🎲",d:"Issues favorables ÷ possibles (décimal)",gen:R=>{const t=R.pick([4,5,8,10,20,25]),f=R.r(1,t-1);return {q:`Une urne contient <b>${t}</b> boules dont <b>${f}</b> rouges. Probabilité de tirer une rouge (en décimal) ?`,r:f/t,u:"",tol:0.001,ex:`${f}/${t} = <b>${R5f(f/t)}</b>.`}}}
];

/* ---------- Propriétés (fiches + « Qui suis-je ? ») ---------- */
C.appareils=[
 {n:"Priorités opératoires",ic:"🧮",f:"Règle qui fixe l'ordre des calculs : parenthèses, puissances, multiplications et divisions, puis additions et soustractions.",c:"3 + 4 × 5 = 23.",p:"Tous les calculs enchaînés.",s:"À priorité égale : de gauche à droite."},
 {n:"Distributivité",ic:"✖️",f:"k × (a + b) = k × a + k × b.",c:"7 × 102 = 700 + 14.",p:"Calcul mental, développer, factoriser.",s:"Marche aussi avec une différence."},
 {n:"Critère de divisibilité par 3",ic:"🔍",f:"Un nombre est divisible par ce nombre si la somme de ses chiffres est dans la table de 3.",c:"471 : 4 + 7 + 1 = 12.",p:"Simplifier des fractions, trouver des diviseurs.",s:"Ne regarde pas le dernier chiffre !"},
 {n:"Nombre premier",ic:"💎",f:"Entier qui a exactement deux diviseurs : 1 et lui-même.",c:"2, 3, 5, 7, 11, 13…",p:"Décomposer des nombres.",s:"1 n'en est pas un."},
 {n:"Addition de deux relatifs",ic:"➕",f:"Même signe : on additionne les distances à zéro ; signes contraires : on les soustrait et on prend le signe du plus éloigné de zéro.",c:"(−7) + 4 = −3.",p:"Températures, altitudes, comptes.",s:"Deux opposés ont une somme nulle."},
 {n:"Soustraction de relatifs",ic:"➖",f:"Enlever un nombre revient à ajouter son opposé.",c:"5 − (−3) = 5 + 3 = 8.",p:"Calculer des écarts.",s:"a − b = a + (−b)."},
 {n:"Somme de fractions",ic:"🍕",f:"On réduit au même dénominateur, puis on additionne les numérateurs.",c:"1/2 + 1/3 = 3/6 + 2/6 = 5/6.",p:"Parts, recettes, partages.",s:"Jamais additionner les dénominateurs."},
 {n:"Somme des angles d'un triangle",ic:"🔺",f:"Dans tout triangle, les trois angles totalisent 180°.",c:"Â + B̂ + Ĉ = 180°.",p:"Calculer un angle manquant.",s:"Se démontre avec une parallèle et les angles alternes-internes."},
 {n:"Angles alternes-internes",ic:"📐",f:"Formés par deux parallèles et une sécante, ils sont égaux ; réciproquement, s'ils sont égaux, les droites sont parallèles.",c:"Forme de Z.",p:"Prouver un parallélisme, calculer un angle.",s:"Faux si les droites ne sont pas parallèles."},
 {n:"Médiatrice",ic:"✂️",f:"Droite perpendiculaire à un segment en son milieu ; ses points sont à égale distance des extrémités.",c:"Les trois d'un triangle se coupent au centre du cercle circonscrit.",p:"Construire le cercle passant par trois points.",s:"Ne passe pas forcément par un sommet."},
 {n:"Médiane",ic:"🎯",f:"Droite d'un triangle qui passe par un sommet et le milieu du côté opposé.",c:"Elle partage le triangle en deux triangles de même aire.",p:"Partager une aire en deux.",s:"Différente de la hauteur."},
 {n:"Symétrie centrale",ic:"🔄",f:"Transformation qui fait faire un demi-tour autour d'un point O : O est le milieu de [MM'].",c:"Conserve longueurs, angles, aires.",p:"Construire une figure retournée.",s:"L'image d'une droite est une droite parallèle."},
 {n:"Diagonales du parallélogramme",ic:"▱",f:"Dans ce quadrilatère, elles se coupent en leur milieu.",c:"Rectangle : de même longueur ; losange : perpendiculaires.",p:"Reconnaître et construire des quadrilatères.",s:"C'est une propriété caractéristique."},
 {n:"Volume du cylindre",ic:"🥫",f:"Aire du disque de base multipliée par la hauteur.",c:"V = π × r² × h.",p:"Canettes, tuyaux, réservoirs.",s:"Même idée que le prisme droit."},
 {n:"Coefficient de proportionnalité",ic:"⚖️",f:"Nombre par lequel on multiplie toujours une grandeur pour obtenir l'autre.",c:"Prix = 1,50 × masse.",p:"Recettes, prix, vitesses, échelles.",s:"S'il n'existe pas, la situation n'est pas proportionnelle."},
 {n:"Moyenne",ic:"📊",f:"Somme des valeurs divisée par le nombre de valeurs.",c:"(12 + 15 + 9) ÷ 3 = 12.",p:"Résumer une série de notes, de températures.",s:"Comprise entre la plus petite et la plus grande valeur."},
 {n:"Équiprobabilité",ic:"🎲",f:"Situation où toutes les issues ont la même chance : P = issues favorables ÷ issues possibles.",c:"Dé équilibré : P(5) = 1/6.",p:"Dés, pièces, tirages au hasard.",s:"Une probabilité est entre 0 et 1."}
];
