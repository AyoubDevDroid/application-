/* JEUX — Maths 4e */

/* ---------- Problèmes pas à pas ---------- */
C.diag=[
 {id:"tv",t:"La diagonale de la télé",ic:"📺",niv:1,bon:{lieu:"Un écran de télévision rectangulaire mesure 88 cm de large et 50 cm de haut. Le vendeur dit qu'il fait « 40 pouces » (1 pouce = 2,54 cm), mesurés sur la diagonale.",pb:"Le vendeur a-t-il raison ?",qui:"Largeur 88 cm · hauteur 50 cm · 1 pouce = 2,54 cm"},
  etapes:[
   {q:"La diagonale, la largeur et la hauteur forment…",o:[["Un triangle rectangle dont la diagonale est l'hypoténuse",true,"Les angles d'un rectangle sont droits."],["Un triangle équilatéral",false,"Les côtés ne sont pas égaux."],["Un triangle isocèle",false,"88 ≠ 50."]]},
   {q:"Longueur de la diagonale d ?",o:[["d² = 88² + 50² = 10 244, d ≈ 101,2 cm",true,"7 744 + 2 500 = 10 244 ; √10 244 ≈ 101,2."],["d = 88 + 50 = 138 cm",false,"Pythagore porte sur les carrés."],["d² = 88² − 50², d ≈ 72,4 cm",false,"On cherche l'hypoténuse : on additionne."]]},
   {q:"En pouces ?",o:[["101,2 ÷ 2,54 ≈ 39,8 pouces : environ 40, il a raison",true,"Diviser par 2,54 convertit les cm en pouces."],["101,2 × 2,54 ≈ 257 pouces",false,"Un pouce vaut 2,54 cm : on divise."],["138 ÷ 2,54 ≈ 54 pouces",false,"La diagonale ne mesure pas 138 cm."]]}],
  fin:"L'écran est rectangulaire, donc le triangle largeur-hauteur-diagonale est rectangle. D'après le théorème de Pythagore : d² = 88² + 50² = 10 244, d ≈ 101,2 cm. En pouces : 101,2 ÷ 2,54 ≈ 39,8, soit environ 40 pouces. Le vendeur a raison.",retenir:"Diagonale d'un rectangle : Pythagore, en additionnant les carrés."},

 {id:"etagere",t:"L'étagère est-elle droite ?",ic:"📚",niv:1,bon:{lieu:"Pour vérifier qu'une étagère est perpendiculaire au mur, Sam mesure : 30 cm sur le mur, 40 cm sur l'étagère, et 49 cm entre les deux points.",pb:"L'étagère est-elle perpendiculaire au mur ?",qui:"Mur 30 cm · étagère 40 cm · distance entre les points 49 cm"},
  etapes:[
   {q:"Quel outil utiliser ?",o:[["La réciproque ou la contraposée de Pythagore",true,"On veut savoir si un angle est droit à partir de longueurs."],["Le théorème de Pythagore",false,"Le théorème suppose déjà le triangle rectangle."],["Le théorème de Thalès",false,"Pas de parallèles ici."]]},
   {q:"Calcule les deux membres :",o:[["49² = 2 401 et 30² + 40² = 2 500",true,"Le plus long côté est 49."],["49² = 98",false,"49² = 49 × 49 = 2 401."],["30 + 40 = 70 > 49",false,"On compare des carrés."]]},
   {q:"Conclusion ?",o:[["2 401 ≠ 2 500 : d'après la contraposée, l'étagère n'est pas perpendiculaire",true,"Pour un angle droit, il faudrait 50 cm."],["C'est presque égal, donc elle est droite",false,"En maths, « presque » ne suffit pas : l'égalité est fausse."],["D'après la réciproque, elle est droite",false,"La réciproque demande l'égalité."]]}],
  fin:"Le plus long côté mesure 49 cm : 49² = 2 401. Et 30² + 40² = 900 + 1 600 = 2 500. Comme 2 401 ≠ 2 500, d'après la contraposée du théorème de Pythagore, le triangle n'est pas rectangle : l'étagère n'est pas perpendiculaire au mur (il faudrait 50 cm).",retenir:"Égalité → réciproque (rectangle) ; inégalité → contraposée (pas rectangle)."},

 {id:"forfait",t:"Quel forfait de cinéma ?",ic:"🎬",niv:2,bon:{lieu:"Cinéma : tarif A, 9 € la séance ; tarif B, carte annuelle de 30 € puis 6 € la séance.",pb:"À partir de combien de séances le tarif B est-il plus avantageux ?",qui:"A : 9 € par séance · B : 30 € + 6 € par séance"},
  etapes:[
   {q:"Avec x séances, quels sont les prix ?",o:[["A : 9x ; B : 30 + 6x",true,"La carte est payée une seule fois."],["A : 9 + x ; B : 36x",false,"Le prix de A est 9 € multiplié par le nombre de séances."],["A : 9x ; B : 36x",false,"Les 30 € ne se multiplient pas par x."]]},
   {q:"Pour combien de séances les deux tarifs sont-ils égaux ?",o:[["9x = 30 + 6x, donc 3x = 30 et x = 10",true,"Pour 10 séances : 90 € dans les deux cas."],["x = 30 ÷ 9 ≈ 3,3",false,"Il faut résoudre 9x = 30 + 6x."],["x = 5",false,"9 × 5 = 45 et 30 + 30 = 60 : pas égaux."]]},
   {q:"Conclusion ?",o:[["B est plus avantageux à partir de 11 séances",true,"Pour 11 séances : A = 99 €, B = 96 €."],["B est toujours plus avantageux",false,"Pour 1 séance : A = 9 €, B = 36 €."],["A est toujours plus avantageux",false,"Pour 20 séances : A = 180 €, B = 150 €."]]}],
  fin:"Soit x le nombre de séances : A coûte 9x et B coûte 30 + 6x. 9x = 30 + 6x donne 3x = 30, x = 10 : les tarifs sont égaux pour 10 séances (90 €). Au-delà, B est moins cher : à partir de 11 séances, le tarif B est plus avantageux.",retenir:"Mettre en équation, résoudre, puis interpréter avec des exemples."},

 {id:"soldes",t:"Les soldes successives",ic:"🏷️",niv:2,bon:{lieu:"Une veste coûte 120 €. Elle est soldée à −30 %, puis on applique une remise supplémentaire de −20 % sur le prix soldé.",pb:"Quel est le prix final ? La remise totale est-elle de 50 % ?",qui:"Prix 120 € · −30 % puis −20 %"},
  etapes:[
   {q:"Coefficient multiplicateur de −30 % ?",o:[["0,7",true,"1 − 30/100 = 0,7."],["0,3",false,"0,3 correspond à garder 30 % du prix, pas à en enlever 30 %."],["1,3",false,"C'est une hausse de 30 %."]]},
   {q:"Prix final ?",o:[["120 × 0,7 × 0,8 = 67,20 €",true,"84 € après la 1re remise, puis 84 × 0,8 = 67,20 €."],["120 × 0,5 = 60 €",false,"Les pourcentages successifs ne s'additionnent pas."],["120 − 30 − 20 = 70 €",false,"−30 % n'est pas −30 €."]]},
   {q:"Remise totale ?",o:[["44 %, car 0,7 × 0,8 = 0,56",true,"On paie 56 % du prix : la remise est de 44 %."],["50 %",false,"La 2e remise s'applique à un prix déjà réduit."],["56 %",false,"56 % est ce qu'on paie, pas la remise."]]}],
  fin:"Coefficients : 0,7 puis 0,8. Prix final : 120 × 0,7 × 0,8 = 120 × 0,56 = 67,20 €. On paie 56 % du prix initial : la remise totale est de 44 %, et non de 50 %.",retenir:"Évolutions successives : on multiplie les coefficients."},

 {id:"pente",t:"Le toit de la cabane",ic:"🏠",niv:2,bon:{lieu:"Le toit d'une cabane est un triangle ABC. Les points I et J sont les milieux des chevrons [AB] et [AC]. La poutre horizontale [IJ] mesure 1,4 m.",pb:"Quelle est la largeur BC de la cabane ? La poutre est-elle parallèle au sol (BC) ?",qui:"I milieu de [AB] · J milieu de [AC] · IJ = 1,4 m"},
  etapes:[
   {q:"Quel théorème utiliser ?",o:[["La droite des milieux",true,"I et J sont les milieux de deux côtés du triangle."],["Pythagore",false,"Rien ne dit que le triangle est rectangle."],["La réciproque de Pythagore",false,"Pas de longueurs à comparer."]]},
   {q:"La poutre (IJ) est-elle parallèle à (BC) ?",o:[["Oui : la droite qui passe par les milieux de deux côtés est parallèle au 3e",true,"Théorème 1 de la droite des milieux."],["On ne peut pas savoir",false,"Le théorème 1 permet de conclure."],["Non",false,"Elle l'est toujours."]]},
   {q:"Largeur BC ?",o:[["2,8 m",true,"IJ = BC ÷ 2, donc BC = 2 × 1,4."],["0,7 m",false,"C'est IJ qui est la moitié de BC, pas l'inverse."],["1,4 m",false,"IJ = BC ÷ 2."]]}],
  fin:"Dans le triangle ABC, I et J sont les milieux de [AB] et [AC]. D'après les théorèmes de la droite des milieux, (IJ) // (BC) et IJ = BC ÷ 2. Donc la poutre est parallèle au sol et BC = 2 × 1,4 = 2,8 m.",retenir:"Deux milieux : parallèle au 3e côté et longueur moitié."},

 {id:"cornet",t:"Le cornet de glace",ic:"🍦",niv:2,bon:{lieu:"Un cornet de glace a la forme d'un cône de rayon 3 cm et de hauteur 12 cm. On le remplit à ras bord de glace. Un bac contient 2 L de glace.",pb:"Combien de cornets peut-on remplir avec un bac ?",qui:"Cône r = 3 cm, h = 12 cm · bac de 2 L"},
  etapes:[
   {q:"Volume d'un cornet ?",o:[["π × 3² × 12 ÷ 3 = 36π ≈ 113 cm³",true,"Volume du cône : aire de la base × hauteur ÷ 3."],["π × 3² × 12 ≈ 339 cm³",false,"C'est le volume du cylindre : il faut diviser par 3."],["3 × 12 ÷ 3 = 12 cm³",false,"L'aire de la base est π × r²."]]},
   {q:"2 L en cm³ ?",o:[["2 000 cm³",true,"1 L = 1 dm³ = 1 000 cm³."],["200 cm³",false,"1 L = 1 000 cm³."],["20 cm³",false,"1 L = 1 000 cm³."]]},
   {q:"Nombre de cornets ?",o:[["17 cornets pleins",true,"2 000 ÷ 113,1 ≈ 17,7 : 17 cornets pleins."],["18 cornets pleins",false,"Le 18e ne sera pas plein : 18 × 113,1 ≈ 2 036 cm³ > 2 000."],["5 cornets",false,"Vérifie le volume d'un cornet."]]}],
  fin:"V = π × 3² × 12 ÷ 3 = 36π ≈ 113,1 cm³. 2 L = 2 000 cm³. 2 000 ÷ 113,1 ≈ 17,7 : on remplit 17 cornets pleins.",retenir:"Cône : ÷ 3 ; 1 L = 1 000 cm³ ; arrondir en dessous pour des objets « pleins »."},

 {id:"notes",t:"Les deux classes",ic:"📊",niv:2,bon:{lieu:"Classe A, notes : 8 ; 9 ; 10 ; 11 ; 12 ; 12 ; 14. Classe B, notes : 2 ; 5 ; 11 ; 12 ; 15 ; 15 ; 16.",pb:"Compare les deux classes avec la moyenne, la médiane et l'étendue.",qui:"7 notes par classe, déjà rangées"},
  etapes:[
   {q:"Moyennes ?",o:[["A : 76 ÷ 7 ≈ 10,9 ; B : 76 ÷ 7 ≈ 10,9",true,"Les deux sommes valent 76 : même moyenne !"],["A : 11 ; B : 15",false,"Calcule les sommes : 76 pour les deux."],["A : 10 ; B : 12",false,"Ce sont des valeurs, pas les moyennes."]]},
   {q:"Médianes (4e valeur sur 7) ?",o:[["A : 11 ; B : 12",true,"La valeur du milieu de chaque série rangée."],["A : 10,9 ; B : 10,9",false,"Ce sont les moyennes."],["A : 12 ; B : 15",false,"Le milieu est la 4e valeur."]]},
   {q:"Étendues et conclusion ?",o:[["A : 6 ; B : 14. Même moyenne, mais B est bien plus dispersée",true,"14 − 8 = 6 et 16 − 2 = 14."],["A : 14 ; B : 16",false,"Étendue = max − min."],["Les classes sont identiques",false,"Seules les moyennes sont égales."]]}],
  fin:"Même moyenne (76 ÷ 7 ≈ 10,9). Médianes : 11 pour A, 12 pour B (la moitié de B a au moins 12). Étendues : 6 pour A, 14 pour B. La classe A est homogène ; la classe B est très dispersée, avec des élèves en grande difficulté et d'autres très à l'aise.",retenir:"La moyenne seule ne suffit pas : regarder médiane et étendue."},

 {id:"desdeux",t:"Le jeu des deux dés",ic:"🎲",niv:3,bon:{lieu:"Léa lance deux dés équilibrés et additionne les résultats. Elle gagne si la somme est 7, Tom gagne si la somme est 2 ou 12.",pb:"Le jeu est-il équitable ?",qui:"Deux dés à 6 faces · Léa : somme 7 · Tom : somme 2 ou 12"},
  etapes:[
   {q:"Combien d'issues équiprobables ?",o:[["36",true,"6 × 6 couples (dé 1 ; dé 2)."],["11",false,"Les 11 sommes (2 à 12) ne sont pas équiprobables."],["12",false,"On compte les couples : 6 × 6."]]},
   {q:"Probabilité que Léa gagne (somme 7) ?",o:[["6/36 = 1/6",true,"(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)."],["1/11",false,"Les sommes ne sont pas équiprobables."],["1/36",false,"Il y a 6 couples qui font 7."]]},
   {q:"Probabilité que Tom gagne ? Conclusion ?",o:[["2/36 = 1/18 : le jeu n'est pas équitable, il avantage Léa",true,"Seulement (1;1) et (6;6)."],["2/11 : équitable",false,"Les sommes ne sont pas équiprobables."],["1/6 : équitable",false,"Seulement 2 couples sur 36."]]}],
  fin:"36 couples équiprobables. Somme 7 : 6 couples, P = 6/36 = 1/6. Somme 2 ou 12 : 2 couples, P = 2/36 = 1/18. Léa a 3 fois plus de chances de gagner : le jeu n'est pas équitable.",retenir:"Deux épreuves : lister les issues équiprobables (tableau 6 × 6)."},

 {id:"pyramide",t:"L'ombre de la pyramide (bonus Thalès)",ic:"🔻",niv:3,bon:{lieu:"À une heure donnée, un bâton vertical de 1,5 m a une ombre de 2 m. Au même instant, l'ombre d'un immeuble, mesurée depuis son pied, fait 36 m. Les rayons du soleil sont parallèles.",pb:"Quelle est la hauteur de l'immeuble ?",qui:"Bâton 1,5 m → ombre 2 m · ombre de l'immeuble 36 m"},
  etapes:[
   {q:"Pourquoi peut-on utiliser le théorème de Thalès ?",o:[["Les rayons du soleil sont parallèles : triangles emboîtés",true,"Les deux triangles « objet – ombre » sont proportionnels."],["Parce que l'immeuble est rectangle",false,"C'est le parallélisme des rayons qui compte."],["On ne peut pas",false,"On peut placer le bâton pour former des triangles emboîtés."]]},
   {q:"Quelle égalité ?",o:[["h / 1,5 = 36 / 2",true,"Hauteurs et ombres sont proportionnelles."],["h / 36 = 2 / 1,5",false,"Les rapports sont inversés."],["h = 36 − 2 + 1,5",false,"C'est une proportionnalité, pas une addition."]]},
   {q:"Hauteur de l'immeuble ?",o:[["27 m",true,"h = 1,5 × 36 ÷ 2 = 27."],["48 m",false,"h = 36 × 1,5 ÷ 2."],["35,5 m",false,"Ce n'est pas une addition."]]}],
  fin:"Les rayons étant parallèles, d'après le théorème de Thalès, les hauteurs sont proportionnelles aux ombres : h/1,5 = 36/2, donc h = 1,5 × 36 ÷ 2 = 27 m.",retenir:"Thalès : rapports égaux, puis produit en croix."},

 {id:"rampe",t:"La rampe du skatepark (bonus cosinus)",ic:"🛹",niv:3,bon:{lieu:"Une rampe de skate a une planche inclinée de 3,2 m. Elle fait un angle de 25° avec le sol.",pb:"Quelle longueur au sol la rampe occupe-t-elle ?",qui:"Planche 3,2 m (hypoténuse) · angle 25° avec le sol"},
  etapes:[
   {q:"Pour l'angle de 25°, la longueur au sol est…",o:[["Le côté adjacent",true,"C'est le côté de l'angle qui n'est pas l'hypoténuse."],["L'hypoténuse",false,"L'hypoténuse est la planche."],["Le côté opposé",false,"Le côté opposé est la hauteur."]]},
   {q:"Quelle formule ?",o:[["cos(25°) = L ÷ 3,2",true,"cos = adjacent ÷ hypoténuse."],["cos(25°) = 3,2 ÷ L",false,"L'hypoténuse est au dénominateur."],["L² = 3,2² + 25²",false,"25 est un angle, pas une longueur."]]},
   {q:"Longueur au sol ?",o:[["L = 3,2 × cos(25°) ≈ 2,90 m",true,"cos(25°) ≈ 0,906."],["L = 3,2 ÷ cos(25°) ≈ 3,53 m",false,"L'adjacent est plus court que l'hypoténuse."],["L ≈ 1,35 m",false,"C'est 3,2 × sin(25°), la hauteur."]]}],
  fin:"Le triangle sol-hauteur-planche est rectangle. Pour l'angle de 25°, la planche est l'hypoténuse et la longueur au sol L le côté adjacent : cos(25°) = L/3,2, donc L = 3,2 × cos(25°) ≈ 2,90 m.",retenir:"cos = adjacent ÷ hypoténuse ; l'adjacent est toujours plus court."}
];

/* ---------- Figures à reconnaître ---------- */
C.symboles=[
 ["Triangle rectangle et hypoténuse","<path d='M20 52V10L85 52Z'/><path d='M20 44H28V52'/><path d='M20 10L85 52' style='stroke-width:5'/>","L'hypoténuse (en gras) est en face de l'angle droit."],
 ["Droite des milieux","<path d='M50 4L10 56H90Z'/><path d='M30 30H70' style='stroke-width:4'/><path d='M18 18l4 3M38 44l4 3M78 18l-4 3M62 44l-4 3'/>","Elle joint les milieux de deux côtés ; parallèle au 3e."],
 ["Configuration de Thalès","<path d='M50 4L12 56H88Z'/><path d='M31 30H69' style='stroke-width:4'/>","Triangles emboîtés, côtés parallèles."],
 ["Triangle inscrit dans un demi-cercle","<circle cx='50' cy='32' r='24'/><path d='M26 32H74L40 10Z'/>","Un côté est un diamètre : le triangle est rectangle."],
 ["Translation","<path d='M12 40L30 40L20 26Z'/><path d='M62 30L80 30L70 16Z'/><path d='M34 36L58 26'/><path d='M52 24L58 26L54 31'/>","Glissement selon une flèche."],
 ["Symétrie axiale","<path d='M50 2V58' style='stroke-dasharray:4 3'/><path d='M20 15L40 30L20 45Z'/><path d='M80 15L60 30L80 45Z'/>","Pliage le long d'une droite."],
 ["Symétrie centrale","<path d='M20 15L38 15L28 28Z'/><path d='M80 45L62 45L72 32Z'/><circle cx='50' cy='30' r='2.5' class='f'/>","Demi-tour autour d'un point."],
 ["Pyramide","<path d='M50 4L20 46H70L80 36M50 4L70 46M50 4L80 36'/><path d='M20 46L30 36H80' style='stroke-dasharray:4 3'/><path d='M50 4L30 36' style='stroke-dasharray:4 3'/>","Base polygonale et sommet : V = B × h ÷ 3."],
 ["Cône","<path d='M50 4L26 46M50 4L74 46'/><ellipse cx='50' cy='46' rx='24' ry='7'/>","Base en disque et sommet : V = π r² h ÷ 3."],
 ["Cylindre","<ellipse cx='50' cy='12' rx='24' ry='7'/><path d='M26 12V48M74 12V48'/><path d='M26 48A24 7 0 0 0 74 48'/>","V = π r² h."],
 ["Parallélogramme","<path d='M10 50H65L90 10H35Z'/>","Côtés opposés parallèles."],
 ["Arbre de probabilités","<path d='M10 30L40 12M10 30L40 48M40 12L80 4M40 12L80 20M40 48L80 40M40 48L80 56'/>","Deux épreuves successives."],
 ["Médiane d'une série","<path d='M10 30H90' style='stroke-width:1.5'/><g class='f'><circle cx='15' cy='30' r='3'/><circle cx='28' cy='30' r='3'/><circle cx='45' cy='30' r='3'/><circle cx='62' cy='30' r='3'/><circle cx='85' cy='30' r='3'/></g><path d='M45 18V42' style='stroke-width:4'/>","La valeur du milieu de la série rangée."],
 ["Côté adjacent (cosinus)","<path d='M15 52H85V12Z'/><path d='M77 52V44H85'/><path d='M15 52H85' style='stroke-width:5'/><path d='M30 52A15 15 0 0 0 28 45'/>","Côté de l'angle marqué qui n'est pas l'hypoténuse."],
 ["Droite (graphique non proportionnel)","<path d='M10 50H90M14 56V4' style='stroke-width:1.5'/><path d='M14 38L90 10'/>","Points alignés, mais pas avec l'origine."]
];

/* ---------- Classements ---------- */
C.tri=[
 {t:"Le signe du résultat",ic:"✖️",d:"Positif ou négatif ?",cats:["Positif","Négatif"],items:[
  ["(−4) × (−5)","Positif","20"],["(−3) × 7","Négatif","−21"],["(−36) ÷ (−9)","Positif","4"],["45 ÷ (−5)","Négatif","−9"],["(−1) × (−2) × (−3)","Négatif","Trois facteurs négatifs."],["(−2)⁴","Positif","Exposant pair."],["(−2)³","Négatif","Exposant impair."],["−3²","Négatif","−(3²) = −9."]]},
 {t:"Quel outil ?",ic:"🧰",d:"Quel théorème utiliser ?",cats:["Pythagore","Réciproque / contraposée de Pythagore","Droite des milieux","Cercle et triangle rectangle"],items:[
  ["Calculer l'hypoténuse d'un triangle rectangle","Pythagore",""],["Savoir si un triangle de côtés 6, 8, 10 est rectangle","Réciproque / contraposée de Pythagore",""],["Prouver que (IJ) // (BC) avec I et J milieux","Droite des milieux",""],["Prouver un angle droit avec un point sur un cercle de diamètre connu","Cercle et triangle rectangle",""],["Calculer IJ sachant que I et J sont des milieux","Droite des milieux",""],["Montrer qu'un triangle 5, 6, 8 n'est pas rectangle","Réciproque / contraposée de Pythagore",""],["Trouver le centre du cercle circonscrit d'un triangle rectangle","Cercle et triangle rectangle","Milieu de l'hypoténuse."]]},
 {t:"Rectangle ou pas ?",ic:"📐",d:"Le triangle de ces côtés est-il rectangle ?",cats:["Rectangle","Pas rectangle"],items:[
  ["3 ; 4 ; 5","Rectangle","25 = 9 + 16."],["5 ; 12 ; 13","Rectangle","169 = 25 + 144."],["8 ; 15 ; 17","Rectangle","289 = 64 + 225."],["6 ; 8 ; 11","Pas rectangle","121 ≠ 100."],["7 ; 24 ; 25","Rectangle","625 = 49 + 576."],["4 ; 5 ; 6","Pas rectangle","36 ≠ 41."],["9 ; 12 ; 14","Pas rectangle","196 ≠ 225."]]},
 {t:"Coefficient multiplicateur",ic:"💯",d:"Quelle évolution correspond à ce coefficient ?",cats:["Hausse","Baisse","Aucune évolution"],items:[
  ["× 1,2","Hausse","+20 %."],["× 0,8","Baisse","−20 %."],["× 1,05","Hausse","+5 %."],["× 0,95","Baisse","−5 %."],["× 1","Aucune évolution",""],["× 2","Hausse","+100 %."],["× 0,5","Baisse","−50 %."]]},
 {t:"Indicateur statistique",ic:"📊",d:"De quel indicateur parle-t-on ?",cats:["Moyenne","Médiane","Étendue"],items:[
  ["Somme des valeurs divisée par l'effectif","Moyenne",""],["Valeur du milieu de la série rangée","Médiane",""],["Max − min","Étendue",""],["Très sensible aux valeurs extrêmes","Moyenne",""],["Mesure la dispersion","Étendue",""],["La moitié des valeurs lui sont inférieures ou égales","Médiane",""]]},
 {t:"Notation scientifique ?",ic:"🔬",d:"Est-ce une notation scientifique correcte ?",cats:["Oui","Non"],items:[["4,5 × 10⁶","Oui",""],["1,2 × 10⁻³","Oui",""],["9,99 × 10²","Oui",""],["12 × 10⁴","Non","12 ≥ 10."],["0,7 × 10⁵","Non","0,7 < 1."],["10 × 10⁻²","Non","10 n'est pas < 10."]]},
 {t:"Premier ou pas ?",ic:"💎",d:"Ce nombre est-il premier ?",cats:["Premier","Pas premier"],items:[["2","Premier",""],["19","Premier",""],["37","Premier",""],["1","Pas premier","Un seul diviseur."],["27","Pas premier","3 × 9."],["49","Pas premier","7 × 7."],["91","Pas premier","7 × 13."],["53","Premier",""]]}
];

/* ---------- Exercices à l'infini ---------- */
const S4=n=>n<0?"("+F4(n)+")":F4(n), F4=n=>(Math.round(n*100)/100).toString().replace('.',',').replace('-','−');
C.atelier=[
 {t:"Multiplier des relatifs",ic:"✖️",d:"Règle des signes",gen:R=>{const a=R.r(-12,12)||-3,b=R.r(-12,12)||5;return {q:`Calcule : <b>${S4(a)} × ${S4(b)}</b>`,r:a*b,u:"",tol:0.01,ex:`${(a<0)===(b<0)?"Même signe : positif.":"Signes contraires : négatif."} ${Math.abs(a)} × ${Math.abs(b)} = ${Math.abs(a*b)}, donc <b>${F4(a*b)}</b>.`}}},
 {t:"Diviser des relatifs",ic:"➗",d:"Même règle des signes",gen:R=>{const q=R.r(-12,12)||-4,b=R.pick([-9,-6,-5,-4,-3,-2,2,3,4,5,6,9]),a=q*b;return {q:`Calcule : <b>${S4(a)} ÷ ${S4(b)}</b>`,r:q,u:"",tol:0.01,ex:`${(a<0)===(b<0)?"Même signe : positif.":"Signes contraires : négatif."} Résultat : <b>${F4(q)}</b>.`}}},
 {t:"Enchaîner avec des relatifs",ic:"🧮",d:"a + b × c",gen:R=>{const a=R.r(-10,10),b=R.r(-6,6)||2,c=R.r(-6,6)||-3;return {q:`Calcule : <b>${F4(a)} + ${S4(b)} × ${S4(c)}</b>`,r:a+b*c,u:"",tol:0.01,ex:`D'abord ${S4(b)} × ${S4(c)} = ${F4(b*c)}, puis ${F4(a)} + ${S4(b*c)} = <b>${F4(a+b*c)}</b>.`}}},
 {t:"Produit de fractions",ic:"🍕",d:"En décimal",gen:R=>{const p=R.pick([[2,3,3,4],[3,5,10,9],[4,7,7,8],[5,6,3,10],[2,9,3,4],[7,4,2,7],[3,8,4,9]]),v=p[0]*p[2]/(p[1]*p[3]);return {q:`Calcule <b>${p[0]}/${p[1]} × ${p[2]}/${p[3]}</b> et donne le résultat en décimal (au centième).`,r:v,u:"",tol:0.006,ex:`(${p[0]} × ${p[2]})/(${p[1]} × ${p[3]}) = ${p[0]*p[2]}/${p[1]*p[3]} ≈ <b>${F4(v)}</b>.`}}},
 {t:"Diviser des fractions",ic:"🔁",d:"Multiplier par l'inverse",gen:R=>{const p=R.pick([[3,4,1,8],[2,3,4,9],[5,6,5,12],[1,2,1,6],[7,10,7,20],[3,5,9,10]]),v=(p[0]*p[3])/(p[1]*p[2]);return {q:`Calcule <b>${p[0]}/${p[1]} ÷ ${p[2]}/${p[3]}</b> (résultat en décimal).`,r:v,u:"",tol:0.006,ex:`${p[0]}/${p[1]} × ${p[3]}/${p[2]} = ${p[0]*p[3]}/${p[1]*p[2]} = <b>${F4(v)}</b>.`}}},
 {t:"Puissances",ic:"⚡",d:"aⁿ",gen:R=>{const a=R.pick([2,3,-2,-3,5,10,-1]),n=R.r(2,a===2||a===-2?6:a===10?6:4);return {q:`Calcule <b>${S4(a)}<sup>${n}</sup></b>.`,r:a**n,u:"",tol:0.01,ex:`${n} facteurs égaux à ${S4(a)}${a<0?` (exposant ${n%2?'impair : négatif':'pair : positif'})`:''} : <b>${F4(a**n)}</b>.`}}},
 {t:"Règles des puissances",ic:"🔟",d:"aⁿ × aᵐ = aⁿ⁺ᵐ",gen:R=>{const a=R.pick([2,3,5,7,10]),n=R.r(2,9),m=R.r(2,9);return {q:`${a}<sup>${n}</sup> × ${a}<sup>${m}</sup> = ${a}<sup>p</sup>. Que vaut p ?`,r:n+m,u:"",tol:0.01,ex:`On additionne les exposants : ${n} + ${m} = <b>${n+m}</b>.`}}},
 {t:"Racine carrée",ic:"√",d:"Carrés parfaits",gen:R=>{const a=R.r(0,15);return {q:`Calcule <b>√${a*a}</b>.`,r:a,u:"",tol:0.01,ex:`${a}² = ${a*a}, donc √${a*a} = <b>${a}</b>.`}}},
 {t:"Équations ax + b = cx + d",ic:"⚖️",d:"x des deux côtés",gen:R=>{const x=R.r(-8,10),a=R.r(2,9),c=R.r(-5,a-1),b=R.r(-15,15),d=a*x+b-c*x;const ec=(k,v)=>`${k===1?'':k===-1?'−':F4(k)}x ${v<0?'−':'+'} ${Math.abs(v)}`;return {q:`Résous : <b>${ec(a,b)} = ${c===0?F4(d):ec(c,d)}</b>`,r:x,u:"",tol:0.01,ex:`On regroupe : ${F4(a-c)}x = ${F4(d-b)}, donc x = ${F4(d-b)} ÷ ${F4(a-c)} = <b>${F4(x)}</b>.`}}},
 {t:"Pythagore : l'hypoténuse",ic:"📐",d:"√(a² + b²)",gen:R=>{const t=R.pick([[3,4],[5,12],[6,8],[8,15],[9,12],[4,7],[5,6],[2,9],[7,10]]),r=Math.sqrt(t[0]**2+t[1]**2);return {q:`Triangle rectangle : côtés de l'angle droit <b>${t[0]} cm</b> et <b>${t[1]} cm</b>. Hypoténuse (au dixième) ?`,r,u:"cm",tol:0.06,ex:`√(${t[0]}² + ${t[1]}²) = √${t[0]**2+t[1]**2} ≈ <b>${F4(Math.round(r*10)/10)} cm</b>.`}}},
 {t:"Pythagore : un côté de l'angle droit",ic:"📐",d:"√(c² − a²)",gen:R=>{const t=R.pick([[13,5],[10,6],[25,7],[17,8],[12,5],[9,4],[15,9],[11,6]]),r=Math.sqrt(t[0]**2-t[1]**2);return {q:`Hypoténuse <b>${t[0]} cm</b>, un côté de l'angle droit <b>${t[1]} cm</b>. L'autre côté (au dixième) ?`,r,u:"cm",tol:0.06,ex:`√(${t[0]}² − ${t[1]}²) = √${t[0]**2-t[1]**2} ≈ <b>${F4(Math.round(r*10)/10)} cm</b>.`}}},
 {t:"Droite des milieux",ic:"〽️",d:"Moitié du 3e côté",gen:R=>{const bc=R.r(4,30)/ (R.r(0,1)?1:2),k=R.r(0,1);return k?{q:`I et J sont les milieux de [AB] et [AC]. BC = <b>${F4(bc)} cm</b>. Combien mesure IJ ?`,r:bc/2,u:"cm",tol:0.01,ex:`IJ = BC ÷ 2 = <b>${F4(bc/2)} cm</b>.`}:{q:`I et J sont les milieux de [AB] et [AC]. IJ = <b>${F4(bc)} cm</b>. Combien mesure BC ?`,r:bc*2,u:"cm",tol:0.01,ex:`BC = 2 × IJ = <b>${F4(bc*2)} cm</b>.`}}},
 {t:"Volumes : pyramide et cône",ic:"🔺",d:"B × h ÷ 3",gen:R=>{const k=R.r(0,1),h=R.r(3,18);if(k){const r=R.r(1,8),v=Math.PI*r*r*h/3;return {q:`Volume d'un <b>cône</b> de rayon ${r} cm et de hauteur ${h} cm (au cm³) ?`,r:v,u:"cm³",tol:0.6,ex:`π × ${r}² × ${h} ÷ 3 ≈ <b>${Math.round(v)} cm³</b>.`}}const c=R.r(2,12);return {q:`Volume d'une <b>pyramide</b> à base carrée de côté ${c} cm et de hauteur ${h} cm ?`,r:c*c*h/3,u:"cm³",tol:0.01,ex:`${c}² × ${h} ÷ 3 = <b>${F4(c*c*h/3)} cm³</b>.`}}},
 {t:"Moyenne pondérée",ic:"📊",d:"Σ(valeur × effectif) ÷ total",gen:R=>{const n=R.r(2,3),v=[...Array(n)].map(()=>R.r(5,19)),c=[...Array(n)].map(()=>R.r(1,4)),s=v.reduce((a,x,i)=>a+x*c[i],0),t=c.reduce((a,x)=>a+x,0);return {q:`Notes et coefficients : ${v.map((x,i)=>`<b>${x}</b> (coef. ${c[i]})`).join(' ; ')}. Moyenne (au dixième) ?`,r:s/t,u:"",tol:0.06,ex:`(${v.map((x,i)=>x+' × '+c[i]).join(' + ')}) ÷ ${t} = ${s} ÷ ${t} ≈ <b>${F4(Math.round(s/t*10)/10)}</b>.`}}},
 {t:"Médiane",ic:"📊",d:"Ranger puis prendre le milieu",gen:R=>{const l=[...Array(R.r(5,8))].map(()=>R.r(1,25)),t=[...l].sort((a,b)=>a-b),n=t.length,m=n%2?t[(n-1)/2]:(t[n/2-1]+t[n/2])/2;return {q:`Médiane de : <b>${l.join(' ; ')}</b> ?`,r:m,u:"",tol:0.01,ex:`Rangée : ${t.join(' ; ')} (${n} valeurs) → médiane <b>${F4(m)}</b>.`}}},
 {t:"Évolutions en pourcentage",ic:"💯",d:"Coefficient multiplicateur",gen:R=>{const p=R.pick([40,60,80,120,150,250]),t=R.pick([5,10,15,20,25,30,40]),h=R.r(0,1),k=h?1+t/100:1-t/100;return {q:`Un prix de <b>${p} €</b> ${h?'augmente':'baisse'} de <b>${t} %</b>. Nouveau prix ?`,r:p*k,u:"€",tol:0.01,ex:`Coefficient ${F4(k)} : ${p} × ${F4(k)} = <b>${F4(p*k)} €</b>.`}}},
 {t:"Vitesse moyenne",ic:"🚗",d:"v = d ÷ t",gen:R=>{const v=R.pick([12,15,30,45,60,80,90]),t=R.pick([0.5,1.5,2,2.5,0.25,1.25,0.75]),d=v*t;return {q:`Un trajet de <b>${F4(d)} km</b> dure <b>${Math.floor(t)} h ${Math.round((t%1)*60)} min</b>. Vitesse moyenne (km/h) ?`,r:v,u:"km/h",tol:0.01,ex:`Durée : ${F4(t)} h ; v = ${F4(d)} ÷ ${F4(t)} = <b>${v} km/h</b>.`}}},
 {t:"Probabilité du contraire",ic:"🎲",d:"1 − P(A)",gen:R=>{const p=R.pick([0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.6,0.75,0.8]);return {q:`P(A) = <b>${F4(p)}</b>. Calcule P(non A).`,r:1-p,u:"",tol:0.001,ex:`1 − ${F4(p)} = <b>${F4(1-p)}</b>.`}}},
 {t:"Thalès (bonus)",ic:"🔻",d:"Rapports égaux",gen:R=>{const am=R.r(2,8),k=R.pick([2,2.5,3,4]),ab=am*k,mn=R.r(2,9),bc=mn*k;return {q:`(MN) // (BC), M ∈ [AB], N ∈ [AC]. AM = <b>${am}</b>, AB = <b>${F4(ab)}</b>, MN = <b>${mn}</b>. Calcule BC.`,r:bc,u:"",tol:0.01,ex:`AM/AB = MN/BC ⟹ BC = AB × MN ÷ AM = <b>${F4(bc)}</b>.`}}},
 {t:"Cosinus (bonus)",ic:"📏",d:"Adjacent = hypoténuse × cos",gen:R=>{const a=R.pick([20,25,30,35,40,50,55,60,70]),h=R.r(5,20),r=h*Math.cos(a*Math.PI/180);return {q:`Triangle rectangle d'hypoténuse <b>${h} cm</b>, angle aigu de <b>${a}°</b>. Côté adjacent à cet angle (au dixième) ?`,r,u:"cm",tol:0.06,ex:`${h} × cos(${a}°) ≈ <b>${F4(Math.round(r*10)/10)} cm</b>.`}}},
 {t:"Notation scientifique (bonus)",ic:"🔬",d:"L'exposant",gen:R=>{const m=R.pick([1.2,2.5,3.4,4.7,6.5,7.5,8.1]),n=R.r(-6,8);const s=(m*10**n).toLocaleString('fr-FR',{maximumFractionDigits:12});return {q:`Le nombre <b>${s}</b> s'écrit ${F4(m)} × 10ⁿ. Que vaut n ?`,r:n,u:"",tol:0.01,ex:`On décale la virgule de ${Math.abs(n)} rang${Math.abs(n)>1?'s':''} : <b>n = ${n}</b>.`}}}
];

/* ---------- Théorèmes (fiches + « Qui suis-je ? ») ---------- */
C.appareils=[
 {n:"Règle des signes",ic:"✖️",f:"Un produit ou un quotient de deux nombres de même signe est positif ; de signes contraires, il est négatif.",c:"(−3) × (−4) = 12.",p:"Multiplier et diviser des relatifs.",s:"Compter les facteurs négatifs : pair → +, impair → −."},
 {n:"Inverse d'un nombre",ic:"🔁",f:"Nombre qui, multiplié par x (non nul), donne 1 ; il se note 1/x.",c:"Celui de 2/3 est 3/2.",p:"Diviser des fractions.",s:"0 n'en a pas."},
 {n:"Produit de puissances",ic:"⚡",f:"aⁿ × aᵐ = aⁿ⁺ᵐ : on additionne les exposants.",c:"2³ × 2⁴ = 2⁷.",p:"Simplifier des écritures.",s:"Ne marche pas pour une somme."},
 {n:"Racine carrée",ic:"√",f:"Nombre positif dont le carré vaut a (a ≥ 0).",c:"√49 = 7.",p:"Pythagore, côté d'un carré d'aire donnée.",s:"N'existe pas pour un nombre négatif."},
 {n:"Théorème de Pythagore",ic:"📐",f:"Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.",c:"BC² = AB² + AC².",p:"Calculer une longueur.",s:"Uniquement dans un triangle rectangle."},
 {n:"Réciproque de Pythagore",ic:"✅",f:"Si le carré du plus long côté est égal à la somme des carrés des deux autres, le triangle est rectangle.",c:"6² + 8² = 10² : rectangle.",p:"Prouver un angle droit.",s:"Si l'égalité est fausse : contraposée, pas rectangle."},
 {n:"Droite des milieux",ic:"〽️",f:"Dans un triangle, la droite joignant les milieux de deux côtés est parallèle au troisième, et le segment mesure la moitié du troisième côté.",c:"IJ = BC ÷ 2.",p:"Prouver un parallélisme, calculer une longueur.",s:"Avec un milieu et une parallèle, on obtient un autre milieu."},
 {n:"Cercle circonscrit au triangle rectangle",ic:"⭕",f:"Son centre est le milieu de l'hypoténuse.",c:"Rayon = hypoténuse ÷ 2.",p:"Trouver un centre, prouver un angle droit (réciproque).",s:"Un point sur le cercle de diamètre [BC] voit [BC] à angle droit."},
 {n:"Translation",ic:"➡️",f:"Transformation qui fait glisser une figure selon une direction, un sens et une longueur.",c:"A → B et M → M' : ABM'M parallélogramme.",p:"Frises, pavages.",s:"Conserve longueurs, angles, aires."},
 {n:"Volume de la pyramide",ic:"🔺",f:"Aire de la base multipliée par la hauteur, puis divisée par 3.",c:"V = B × h ÷ 3.",p:"Pyramides, toits, tentes.",s:"Même formule pour le cône."},
 {n:"Moyenne pondérée",ic:"📊",f:"Somme des valeurs multipliées par leur effectif (ou coefficient), divisée par l'effectif total.",c:"(12 × 2 + 15) ÷ 3 = 13.",p:"Bulletins avec coefficients, tableaux d'effectifs.",s:"Sensible aux valeurs extrêmes."},
 {n:"Médiane",ic:"🎯",f:"Valeur qui partage la série rangée en deux groupes de même effectif.",c:"3 ; 5 ; 8 ; 12 ; 20 → 8.",p:"Résumer une série sans être influencé par les extrêmes.",s:"Toujours ranger d'abord."},
 {n:"Événement contraire",ic:"🎲",f:"Sa probabilité vaut 1 moins celle de l'événement.",c:"P(Ā) = 1 − P(A).",p:"Calculer « au moins un » ou « ne pas ».",s:"A et Ā couvrent toutes les issues."},
 {n:"Coefficient multiplicateur",ic:"💯",f:"Nombre par lequel on multiplie pour appliquer une hausse ou une baisse en pourcentage.",c:"+t % → × (1 + t/100) ; −t % → × (1 − t/100).",p:"Soldes, augmentations successives.",s:"Évolutions successives : on multiplie les coefficients."},
 {n:"Théorème de Thalès",ic:"🔻",f:"Dans un triangle, une parallèle à un côté découpe un petit triangle dont les côtés sont proportionnels à ceux du grand.",c:"AM/AB = AN/AC = MN/BC.",p:"Calculer une longueur inaccessible.",s:"Comparer avec le côté entier AB, pas avec MB."},
 {n:"Cosinus",ic:"📏",f:"Dans un triangle rectangle, quotient du côté adjacent à un angle aigu par l'hypoténuse.",c:"cos(B) = AB ÷ BC.",p:"Calculer une longueur ou un angle.",s:"Calculatrice en degrés ; arccos pour l'angle."}
];
