/* JEUX — Maths 3e Brevet */

/* ---------- Problèmes type brevet ---------- */
C.diag=[
 {id:"echelle",t:"L'échelle du pompier",ic:"🚒",niv:1,bon:{lieu:"Une échelle de 12 m est appuyée contre un mur vertical. Son pied est à 3 m du mur.",pb:"À quelle hauteur arrive le haut de l'échelle ? (arrondi au cm)",qui:"Échelle 12 m · pied à 3 m · mur vertical (angle droit avec le sol)"},
  etapes:[
   {q:"Quel outil utiliser ?",o:[["Le théorème de Pythagore",true,"Le mur et le sol forment un angle droit : le triangle est rectangle."],["Le théorème de Thalès",false,"Il n'y a pas de droites parallèles ici."],["La trigonométrie",false,"On ne connaît aucun angle : Pythagore suffit."]]},
   {q:"Quel côté est l'hypoténuse ?",o:[["L'échelle (12 m)",true,"Elle est en face de l'angle droit (entre mur et sol)."],["Le mur",false,"Le mur est un côté de l'angle droit."],["Le sol (3 m)",false,"Le sol est un côté de l'angle droit."]]},
   {q:"Calcul de la hauteur h :",o:[["h² = 12² − 3² = 135, h ≈ 11,62 m",true,"144 − 9 = 135 et √135 ≈ 11,62."],["h² = 12² + 3² = 153, h ≈ 12,37 m",false,"On cherche un côté de l'angle droit : on soustrait."],["h = 12 − 3 = 9 m",false,"Pythagore porte sur les carrés des longueurs."]]}],
  fin:"Le triangle formé par le mur, le sol et l'échelle est rectangle au pied du mur. D'après le théorème de Pythagore : 12² = h² + 3², donc h² = 144 − 9 = 135 et h = √135 ≈ 11,62 m. L'échelle arrive à environ 11,62 m de hauteur.",retenir:"Côté de l'angle droit : on soustrait les carrés ; hypoténuse : on les additionne."},

 {id:"riviere",t:"La largeur de la rivière",ic:"🌊",niv:2,bon:{lieu:"Pour mesurer une rivière sans la traverser, on repère les points A, B, C, M, N : B, A, M alignés ; C, A, N alignés ; (BC) // (MN). AM = 6 m, AB = 15 m, MN = 4 m.",pb:"Quelle est la largeur BC de la rivière ?",qui:"(BC) // (MN) · AM = 6 m · AB = 15 m · MN = 4 m"},
  etapes:[
   {q:"Quel théorème utiliser ?",o:[["Le théorème de Thalès",true,"Deux droites sécantes en A coupées par deux parallèles."],["Pythagore",false,"Rien ne dit qu'il y a un angle droit."],["La réciproque de Thalès",false,"La réciproque sert à prouver un parallélisme ; ici, il est donné."]]},
   {q:"Quelle égalité écrire ?",o:[["AM/AB = MN/BC",true,"Les côtés correspondants : AM avec AB, MN avec BC."],["AM/MN = AB/AC",false,"On compare les côtés correspondants des deux triangles."],["AB/AM = MN/BC",false,"Les rapports doivent être dans le même sens (petit triangle sur grand triangle)."]]},
   {q:"Calcul de BC :",o:[["BC = 15 × 4 ÷ 6 = 10 m",true,"6/15 = 4/BC, donc BC = 15 × 4 ÷ 6 = 10."],["BC = 6 × 4 ÷ 15 = 1,6 m",false,"Produit en croix mal posé : BC = AB × MN ÷ AM."],["BC = 15 − 6 + 4 = 13 m",false,"Thalès donne une proportionnalité, pas des additions."]]}],
  fin:"Les droites (BM) et (CN) sont sécantes en A et (BC) // (MN). D'après le théorème de Thalès, AM/AB = MN/BC, soit 6/15 = 4/BC, donc BC = 15 × 4 ÷ 6 = 10 m. La rivière mesure 10 m de large.",retenir:"Thalès : parallèles + points alignés, puis rapports des côtés correspondants."},

 {id:"rampe",t:"La rampe d'accès",ic:"♿",niv:2,bon:{lieu:"Une rampe d'accès doit monter une marche de 18 cm. La réglementation impose un angle d'au plus 5° avec le sol pour cette longueur de rampe (valeur de l'exercice).",pb:"Quelle longueur horizontale minimale faut-il ? Si la rampe fait 2 m au sol, est-elle conforme ?",qui:"Hauteur 18 cm · angle ≤ 5° · triangle rectangle"},
  etapes:[
   {q:"Hauteur (18 cm) et longueur au sol sont, pour l'angle de la rampe…",o:[["Le côté opposé et le côté adjacent : on utilise la tangente",true,"tan(angle) = opposé ÷ adjacent."],["L'hypoténuse et l'adjacent : cosinus",false,"La hauteur est en face de l'angle : c'est le côté opposé."],["Deux côtés quelconques : Pythagore",false,"On cherche une relation avec un angle : trigonométrie."]]},
   {q:"Longueur au sol minimale L pour un angle de 5° :",o:[["L = 18 ÷ tan(5°) ≈ 206 cm",true,"tan(5°) ≈ 0,0875 ; 18 ÷ 0,0875 ≈ 206 cm."],["L = 18 × tan(5°) ≈ 1,6 cm",false,"L'inconnue est au dénominateur : on divise."],["L = 18 ÷ sin(5°)",false,"Cela donnerait la longueur de la rampe (hypoténuse)."]]},
   {q:"Une rampe de 2 m au sol est-elle conforme ?",o:[["Non : il faut au moins 2,06 m, sinon l'angle dépasse 5°",true,"tan(angle) = 18 ÷ 200 = 0,09, angle ≈ 5,1° > 5°."],["Oui, 2 m c'est presque pareil",false,"L'angle serait d'environ 5,1°, au-dessus de la limite."],["On ne peut pas savoir",false,"On peut calculer l'angle avec tan⁻¹(18/200)."]]}],
  fin:"Dans le triangle rectangle formé par la marche et le sol : tan(α) = 18/L. Pour α = 5°, L = 18 ÷ tan(5°) ≈ 206 cm. Avec 2 m au sol, tan(α) = 0,09 et α ≈ 5,1° : la rampe n'est pas conforme.",retenir:"tan = opposé ÷ adjacent ; si l'inconnue est au dénominateur, on divise."},

 {id:"forfaits",t:"Quel forfait choisir ?",ic:"📱",niv:2,bon:{lieu:"Salle de sport. Formule A : 15 € par mois + 3 € par séance. Formule B : 6 € par séance, sans abonnement.",pb:"À partir de combien de séances par mois la formule A est-elle plus avantageuse ?",qui:"A : 15 + 3x · B : 6x · x = nombre de séances"},
  etapes:[
   {q:"Quelles fonctions modélisent les prix ?",o:[["A(x) = 3x + 15 (affine) et B(x) = 6x (linéaire)",true,"Le forfait fixe donne l'ordonnée à l'origine 15."],["A(x) = 15x + 3 et B(x) = 6",false,"15 € est fixe, 3 € dépend du nombre de séances."],["A(x) = 18x et B(x) = 6x",false,"15 € ne se multiplie pas par le nombre de séances."]]},
   {q:"Quand les deux formules coûtent-elles le même prix ?",o:[["3x + 15 = 6x, soit x = 5 séances",true,"15 = 3x, x = 5. Les deux coûtent alors 30 €."],["x = 15 séances",false,"Résous 3x + 15 = 6x : 15 = 3x."],["Jamais",false,"Les droites se croisent en x = 5."]]},
   {q:"Pour 8 séances, quelle formule est la moins chère ?",o:[["A : 39 € contre 48 € pour B",true,"A(8) = 24 + 15 = 39 ; B(8) = 48."],["B : 48 €",false,"48 > 39."],["Elles coûtent pareil",false,"Seulement pour 5 séances."]]}],
  fin:"A(x) = 3x + 15 et B(x) = 6x. A(x) = B(x) pour x = 5 (30 €). Au-delà de 5 séances, la formule A est plus avantageuse (ex. 8 séances : 39 € contre 48 €).",retenir:"Comparer deux offres : modéliser par des fonctions, résoudre l'égalité, comparer de part et d'autre."},

 {id:"soldes",t:"Hausse puis baisse",ic:"🏷️",niv:2,bon:{lieu:"Un vélo coûte 400 €. Son prix augmente de 20 % en septembre, puis baisse de 20 % en janvier.",pb:"Le vélo revient-il à 400 € ?",qui:"400 € · +20 % · −20 %"},
  etapes:[
   {q:"Quel coefficient pour une hausse de 20 % ?",o:[["× 1,2",true,"1 + 20/100 = 1,2."],["× 0,2",false,"× 0,2 donne 20 % du prix, pas le nouveau prix."],["+ 20",false,"20 % de 400 ne vaut pas 20 €."]]},
   {q:"Prix en septembre puis en janvier ?",o:[["480 € puis 384 €",true,"400 × 1,2 = 480 ; 480 × 0,8 = 384."],["480 € puis 400 €",false,"La baisse de 20 % porte sur 480 €, pas sur 400 €."],["420 € puis 400 €",false,"20 % de 400 = 80, pas 20."]]},
   {q:"Évolution globale ?",o:[["× 0,96 : une baisse de 4 %",true,"1,2 × 0,8 = 0,96."],["Aucune évolution",false,"Les pourcentages ne s'annulent pas."],["Une hausse de 4 %",false,"0,96 < 1 : c'est une baisse."]]}],
  fin:"400 × 1,2 = 480 € ; 480 × 0,8 = 384 €. Coefficient global : 1,2 × 0,8 = 0,96, soit une baisse de 4 % : le vélo ne revient pas à 400 €.",retenir:"Évolutions successives : on multiplie les coefficients."},

 {id:"notes",t:"Les notes de deux classes",ic:"📊",niv:2,bon:{lieu:"Classe A (9 élèves) : 6, 8, 9, 11, 12, 12, 14, 15, 17. Classe B : moyenne 11,5, médiane 12, étendue 6.",pb:"Comparer les deux classes.",qui:"Notes de A · indicateurs de B"},
  etapes:[
   {q:"Moyenne de la classe A ?",o:[["≈ 11,6",true,"Somme = 104 ; 104 ÷ 9 ≈ 11,6."],["12",false,"12 est la médiane, pas la moyenne."],["104",false,"104 est la somme : il faut diviser par 9."]]},
   {q:"Médiane de la classe A ?",o:[["12 (la 5e valeur)",true,"9 valeurs rangées : la 5e est 12."],["11",false,"Compte : 6, 8, 9, 11, 12 → la 5e est 12."],["11,5",false,"Avec 9 valeurs, la médiane est une valeur de la série."]]},
   {q:"Étendue de A et conclusion ?",o:[["11 : les notes de A sont plus dispersées que celles de B (6)",true,"17 − 6 = 11 > 6, pour des moyennes et médianes proches."],["Les classes sont identiques",false,"Les étendues sont très différentes."],["B a de meilleures notes",false,"Moyennes et médianes sont presque égales."]]}],
  fin:"Classe A : moyenne ≈ 11,6, médiane 12, étendue 11. Classe B : moyenne 11,5, médiane 12, étendue 6. Les niveaux sont comparables, mais les notes de A sont beaucoup plus dispersées.",retenir:"Moyenne et médiane donnent le niveau ; l'étendue donne la dispersion."},

 {id:"urne",t:"Deux tirages",ic:"🎲",niv:3,bon:{lieu:"Un sac contient 3 jetons : un rouge, un vert, un bleu. On tire un jeton, on note sa couleur, on le remet, puis on en tire un second.",pb:"Probabilité d'obtenir deux fois la même couleur ? Au moins un rouge ?",qui:"3 jetons · tirage avec remise · 2 tirages"},
  etapes:[
   {q:"Combien d'issues possibles ?",o:[["9",true,"3 × 3 = 9 couples (R;R), (R;V)…"],["6",false,"Avec remise, on peut retirer la même couleur : 3 × 3."],["3",false,"Il y a deux tirages."]]},
   {q:"P(deux fois la même couleur) ?",o:[["3/9 = 1/3",true,"(R;R), (V;V), (B;B) : 3 issues sur 9."],["1/9",false,"Il y a 3 façons d'avoir la même couleur."],["1/2",false,"Compte les issues favorables : 3 sur 9."]]},
   {q:"P(au moins un rouge) ?",o:[["5/9",true,"Contraire : aucun rouge = 2 × 2 = 4 issues ; 1 − 4/9 = 5/9."],["2/9",false,"« Au moins un » inclut (R;R), (R;V), (R;B), (V;R), (B;R)."],["1/3",false,"Utilise l'événement contraire : 1 − 4/9."]]}],
  fin:"9 issues équiprobables. P(même couleur) = 3/9 = 1/3. P(au moins un rouge) = 1 − P(aucun rouge) = 1 − 4/9 = 5/9.",retenir:"« Au moins un » : passer par l'événement contraire."},

 {id:"cornet",t:"Le cornet de glace",ic:"🍦",niv:3,bon:{lieu:"Un cornet a la forme d'un cône de rayon 3 cm et de hauteur 12 cm. Il est rempli de glace, surmonté d'une demi-boule de glace de rayon 3 cm.",pb:"Quel volume de glace en tout (arrondi au cm³) ?",qui:"Cône r = 3 cm, h = 12 cm · demi-boule r = 3 cm"},
  etapes:[
   {q:"Volume du cône ?",o:[["π × 3² × 12 ÷ 3 = 36π ≈ 113 cm³",true,"Aire de base 9π, × 12 ÷ 3 = 36π."],["π × 3² × 12 = 108π",false,"N'oublie pas de diviser par 3 pour un cône."],["π × 3 × 12 ÷ 3",false,"L'aire de la base est π × r², pas π × r."]]},
   {q:"Volume de la demi-boule ?",o:[["(4/3 × π × 3³) ÷ 2 = 18π ≈ 56,5 cm³",true,"Boule : 36π ; moitié : 18π."],["4/3 × π × 3³ = 36π",false,"Il s'agit d'une demi-boule."],["π × 3² = 9π",false,"C'est l'aire d'un disque, pas un volume."]]},
   {q:"Volume total ?",o:[["54π ≈ 170 cm³",true,"36π + 18π = 54π ≈ 169,6, arrondi à 170 cm³."],["144π",false,"Reprends les deux volumes : 36π + 18π."],["≈ 113 cm³",false,"Ajoute la demi-boule."]]}],
  fin:"Cône : 36π cm³ ; demi-boule : 18π cm³ ; total : 54π ≈ 170 cm³ de glace.",retenir:"Cône : B × h ÷ 3 ; boule : 4/3 π r³ ; additionner les volumes."},

 {id:"scratch",t:"Le programme de calcul",ic:"🤖",niv:2,bon:{lieu:"Programme : choisir un nombre ; lui ajouter 3 ; multiplier le résultat par le nombre de départ ; soustraire le carré du nombre de départ.",pb:"Que remarque-t-on ? Peut-on le prouver ?",qui:"Étapes : +3, × nombre de départ, − carré du nombre de départ"},
  etapes:[
   {q:"Avec 5 comme nombre de départ, on obtient…",o:[["15",true,"5 + 3 = 8 ; 8 × 5 = 40 ; 40 − 25 = 15."],["40",false,"Il reste à soustraire 5² = 25."],["8",false,"Ce n'est que la première étape."]]},
   {q:"Avec x comme nombre de départ, le résultat s'écrit…",o:[["(x + 3) × x − x²",true,"On traduit chaque étape."],["x + 3 × x − x²",false,"Les parenthèses sont indispensables : on multiplie le résultat (x + 3)."],["(x + 3)² − x",false,"On multiplie par x, pas par (x + 3)."]]},
   {q:"En développant, on obtient…",o:[["3x : le résultat est toujours le triple du nombre de départ",true,"(x + 3)x − x² = x² + 3x − x² = 3x."],["x² + 3x",false,"N'oublie pas de soustraire x²."],["3",false,"Les x² s'annulent, mais il reste 3x."]]}],
  fin:"Pour tout nombre x : (x + 3) × x − x² = x² + 3x − x² = 3x. Le programme donne toujours le triple du nombre de départ (avec 5 : 15).",retenir:"Pour prouver une conjecture « pour tout nombre », on utilise le calcul littéral."},

 {id:"homothetie",t:"La photo agrandie",ic:"🖼️",niv:3,bon:{lieu:"Une photo de 10 cm × 15 cm est agrandie pour faire un poster de 40 cm de large (même forme).",pb:"Quelle est la hauteur du poster ? Combien de fois plus de surface ?",qui:"Photo 10 × 15 cm · largeur du poster 40 cm"},
  etapes:[
   {q:"Coefficient d'agrandissement k ?",o:[["k = 4",true,"40 ÷ 10 = 4."],["k = 30",false,"40 − 10 n'est pas un coefficient : on divise."],["k = 2,67",false,"La largeur 10 devient 40 : k = 40 ÷ 10."]]},
   {q:"Hauteur du poster ?",o:[["60 cm",true,"15 × 4 = 60."],["45 cm",false,"15 + 30 ? On multiplie par k."],["55 cm",false,"15 × 4 = 60."]]},
   {q:"L'aire est multipliée par…",o:[["16",true,"k² = 16 : 150 cm² deviennent 2 400 cm²."],["4",false,"Les longueurs × 4, les aires × 4² = 16."],["8",false,"k² = 4 × 4 = 16."]]}],
  fin:"k = 40 ÷ 10 = 4. Hauteur : 15 × 4 = 60 cm. Aire : 10 × 15 = 150 cm² devient 40 × 60 = 2 400 cm², soit 16 fois plus (k² = 16).",retenir:"Agrandissement de rapport k : longueurs × k, aires × k², volumes × k³."}
];

/* ---------- Figures (configurations) ---------- */
C.symboles=[
 ["Triangle rectangle (Pythagore)","<path d='M20 52V10L85 52Z'/><path d='M20 44H28V52'/><path d='M20 10L85 52' style='stroke-width:5'/>","L'hypoténuse (en gras) est en face de l'angle droit."],
 ["Configuration de Thalès emboîtée","<path d='M50 4L12 56H88Z'/><path d='M31 30H69'/><path d='M44 28l4 4M54 28l4 4M44 54l4 4M54 54l4 4' style='stroke-width:2'/>","Deux triangles emboîtés, côtés parallèles."],
 ["Configuration de Thalès en papillon","<path d='M15 8H45L60 52H90L15 8M45 8L60 52'/>","Le point commun est entre les deux triangles ; les deux bases sont parallèles."],
 ["Triangle rectangle et trigonométrie","<path d='M15 52H85V12Z'/><path d='M77 52V44H85'/><path d='M30 52A15 15 0 0 0 28 45'/>","Un angle aigu marqué : on parle d'adjacent, d'opposé et d'hypoténuse."],
 ["Cylindre","<ellipse cx='50' cy='12' rx='24' ry='7'/><path d='M26 12V48M74 12V48'/><path d='M26 48A24 7 0 0 0 74 48'/>","Deux bases en disque : V = π r² h."],
 ["Cône","<path d='M50 4L26 46M50 4L74 46'/><ellipse cx='50' cy='46' rx='24' ry='7'/>","Base en disque et sommet : V = π r² h ÷ 3."],
 ["Pyramide","<path d='M50 4L20 46H70L80 36M50 4L70 46M50 4L80 36'/><path d='M20 46L30 36H80' style='stroke-dasharray:4 3'/><path d='M50 4L30 36' style='stroke-dasharray:4 3'/>","Base polygonale et sommet : V = B × h ÷ 3."],
 ["Boule","<circle cx='50' cy='30' r='24'/><ellipse cx='50' cy='30' rx='24' ry='7' style='stroke-dasharray:4 3'/>","V = 4/3 × π × r³."],
 ["Droite d'une fonction linéaire","<path d='M10 50H90M50 56V4' style='stroke-width:1.5'/><path d='M15 56L85 4'/>","Une droite qui passe par l'origine."],
 ["Droite d'une fonction affine","<path d='M10 50H90M50 56V4' style='stroke-width:1.5'/><path d='M10 46L90 14'/>","Une droite qui ne passe pas (forcément) par l'origine."],
 ["Parabole (courbe de x²)","<path d='M10 50H90M50 56V4' style='stroke-width:1.5'/><path d='M22 6Q50 94 78 6'/>","La courbe d'une fonction carré : ce n'est pas une droite."],
 ["Symétrie centrale","<path d='M20 15L38 15L28 28Z'/><path d='M80 45L62 45L72 32Z'/><circle cx='50' cy='30' r='2.5' class='f'/>","Demi-tour autour d'un point."],
 ["Translation","<path d='M12 40L30 40L20 26Z'/><path d='M62 30L80 30L70 16Z'/><path d='M34 36L58 26'/><path d='M52 24L58 26L54 31'/>","Glissement selon une flèche (vecteur)."],
 ["Homothétie","<circle cx='12' cy='30' r='2.5' class='f'/><path d='M30 24L40 24L35 16Z'/><path d='M60 15L84 15L72 -4Z' transform='translate(0 20)'/><path d='M12 30L72 16' style='stroke-dasharray:3 3;stroke-width:1.5'/>","Agrandissement depuis un centre."],
 ["Série rangée et médiane","<path d='M10 30H90' style='stroke-width:1.5'/><g class='f'><circle cx='15' cy='30' r='3'/><circle cx='28' cy='30' r='3'/><circle cx='45' cy='30' r='3'/><circle cx='62' cy='30' r='3'/><circle cx='85' cy='30' r='3'/></g><path d='M45 18V42' style='stroke-width:4'/>","Série rangée : la valeur du milieu est la médiane."],
 ["Arbre de probabilités","<path d='M10 30L40 12M10 30L40 48M40 12L80 4M40 12L80 20M40 48L80 40M40 48L80 56'/>","Deux épreuves successives : on suit les branches."]
];

/* ---------- Classements ---------- */
C.tri=[
 {t:"Quel outil pour ce calcul ?",ic:"🧰",d:"Quel théorème ou quel outil faut-il ?",cats:["Pythagore","Thalès","Trigonométrie"],items:[
  ["Triangle rectangle, deux côtés connus, on cherche le troisième côté","Pythagore","Que des longueurs."],
  ["Triangle rectangle, un angle et un côté connus, on cherche un côté","Trigonométrie","Un angle intervient."],
  ["Deux droites parallèles coupent deux droites sécantes","Thalès","Parallèles + sécantes."],
  ["Prouver qu'un triangle de côtés 5, 12, 13 est rectangle","Pythagore","Réciproque de Pythagore."],
  ["Triangle rectangle, deux côtés connus, on cherche un angle","Trigonométrie","cos⁻¹, sin⁻¹ ou tan⁻¹."],
  ["Prouver que deux droites sont parallèles","Thalès","Réciproque de Thalès."]]},
 {t:"Linéaire, affine ou ni l'un ni l'autre ?",ic:"📈",d:"Quel type de fonction ?",cats:["Linéaire","Affine non linéaire","Ni l'un ni l'autre"],items:[
  ["f(x) = 5x","Linéaire","De la forme ax."],["f(x) = −0,3x","Linéaire",""],["f(x) = 2x + 1","Affine non linéaire","b = 1 ≠ 0."],["f(x) = 7 − x","Affine non linéaire","a = −1, b = 7."],
  ["f(x) = x²","Ni l'un ni l'autre","Courbe : une parabole."],["f(x) = 1/x","Ni l'un ni l'autre","Pas une droite."],["f(x) = 4","Affine non linéaire","Fonction constante : a = 0, b = 4."]]},
 {t:"Premier ou pas ?",ic:"🔍",d:"Ce nombre est-il premier ?",cats:["Premier","Pas premier"],items:[["2","Premier","Le seul premier pair."],["17","Premier",""],["29","Premier",""],["31","Premier",""],["1","Pas premier","Un seul diviseur."],["21","Pas premier","3 × 7."],["51","Pas premier","3 × 17."],["91","Pas premier","7 × 13."],["57","Pas premier","3 × 19."]]},
 {t:"Quelle transformation ?",ic:"🔄",d:"Quelle transformation est décrite ?",cats:["Symétrie axiale","Symétrie centrale","Translation","Rotation","Homothétie"],items:[
  ["La figure est pliée le long d'une droite","Symétrie axiale",""],["La figure fait un demi-tour autour d'un point","Symétrie centrale","Rotation de 180°."],["La figure glisse sans tourner","Translation",""],
  ["La figure tourne de 90° autour d'un point","Rotation",""],["La figure est agrandie 3 fois depuis un point","Homothétie","Rapport 3."],["Le motif d'une frise se répète en glissant","Translation",""]]},
 {t:"Notation scientifique ou pas ?",ic:"⚡",d:"Est-ce une notation scientifique correcte ?",cats:["Oui","Non"],items:[["3,2 × 10⁵","Oui","1 ≤ 3,2 < 10."],["7 × 10⁻³","Oui",""],["1,05 × 10⁸","Oui",""],["32 × 10⁴","Non","32 ≥ 10 : 3,2 × 10⁵."],["0,8 × 10³","Non","0,8 < 1 : 8 × 10²."],["10 × 10²","Non","10 n'est pas < 10 : 1 × 10³."]]},
 {t:"Que mesure-t-on ?",ic:"📊",d:"Quel indicateur statistique ?",cats:["Moyenne","Médiane","Étendue"],items:[
  ["Somme des valeurs ÷ nombre de valeurs","Moyenne",""],["La moitié des valeurs lui sont inférieures ou égales","Médiane",""],["Plus grande valeur − plus petite valeur","Étendue",""],
  ["Elle mesure la dispersion","Étendue",""],["On doit ranger la série pour la trouver","Médiane",""],["Une valeur très grande la fait beaucoup augmenter","Moyenne","La médiane, elle, bouge peu."]]}
];

/* ---------- Exercices à l'infini ---------- */
C.atelier=[
 {t:"Pythagore : l'hypoténuse",ic:"📐",d:"√(a² + b²)",gen:R=>{const t=R.pick([[3,4],[5,12],[6,8],[8,15],[7,24],[9,12],[4,7],[5,6],[2,9]]),r=Math.sqrt(t[0]**2+t[1]**2);return {q:`Triangle rectangle : les côtés de l'angle droit mesurent <b>${t[0]} cm</b> et <b>${t[1]} cm</b>. Longueur de l'hypoténuse (au dixième) ?`,r,u:"cm",tol:0.06,ex:`√(${t[0]}² + ${t[1]}²) = √${t[0]**2+t[1]**2} ≈ <b>${R.f(r,1)} cm</b>.`}}},
 {t:"Pythagore : un côté de l'angle droit",ic:"📐",d:"√(c² − a²)",gen:R=>{const t=R.pick([[13,5],[10,6],[25,7],[17,8],[12,5],[9,4],[15,9]]),r=Math.sqrt(t[0]**2-t[1]**2);return {q:`Triangle rectangle d'hypoténuse <b>${t[0]} cm</b> ; un côté de l'angle droit mesure <b>${t[1]} cm</b>. L'autre côté (au dixième) ?`,r,u:"cm",tol:0.06,ex:`√(${t[0]}² − ${t[1]}²) = √${t[0]**2-t[1]**2} ≈ <b>${R.f(r,1)} cm</b>.`}}},
 {t:"Thalès",ic:"🔺",d:"Rapports égaux",gen:R=>{const am=R.r(2,8),k=R.pick([2,2.5,3,4]),ab=am*k,mn=R.r(2,9),bc=mn*k;return {q:`(MN) // (BC), A, M, B alignés et A, N, C alignés. AM = <b>${am}</b>, AB = <b>${R.f(ab,1)}</b>, MN = <b>${mn}</b>. Calcule BC.`,r:bc,u:"",tol:0.01,ex:`AM/AB = MN/BC ⟹ BC = AB × MN ÷ AM = ${R.f(ab,1)} × ${mn} ÷ ${am} = <b>${R.f(bc,2)}</b>.`}}},
 {t:"Trigonométrie : une longueur",ic:"📏",d:"Avec cos, sin ou tan",gen:R=>{const a=R.pick([20,30,35,40,50,60]),h=R.r(5,20),k=R.r(0,1),rad=a*Math.PI/180;const r=k?h*Math.cos(rad):h*Math.sin(rad);return {q:`Triangle rectangle d'hypoténuse <b>${h} cm</b>, avec un angle aigu de <b>${a}°</b>. Longueur du côté ${k?'<b>adjacent</b>':'<b>opposé</b>'} à cet angle (au dixième) ?`,r,u:"cm",tol:0.06,ex:`${k?'cos':'sin'}(${a}°) = côté ÷ ${h}, donc côté = ${h} × ${k?'cos':'sin'}(${a}°) ≈ <b>${R.f(r,1)} cm</b>.`}}},
 {t:"Trigonométrie : un angle",ic:"📏",d:"cos⁻¹, sin⁻¹, tan⁻¹",gen:R=>{const o=R.r(3,12),a=R.r(4,15),r=Math.atan(o/a)*180/Math.PI;return {q:`Triangle rectangle : côté opposé à l'angle cherché <b>${o} cm</b>, côté adjacent <b>${a} cm</b>. Mesure de l'angle (au degré) ?`,r,u:"°",tol:0.6,ex:`tan(angle) = ${o}/${a}, angle = tan⁻¹(${o}/${a}) ≈ <b>${Math.round(r)}°</b>.`}}},
 {t:"Équations",ic:"⚖️",d:"ax + b = c",gen:R=>{const a=R.pick([2,3,4,5,-2,-3]),x=R.r(-6,9),b=R.r(-10,10),c=a*x+b;return {q:`Résous : <b>${a}x ${b<0?'−':'+'} ${Math.abs(b)} = ${c}</b>`,r:x,u:"",tol:0.01,ex:`${a}x = ${c} ${b<0?'+':'−'} ${Math.abs(b)} = ${c-b}, donc x = ${c-b} ÷ ${a} = <b>${x}</b>.`}}},
 {t:"Image par une fonction affine",ic:"📈",d:"f(x) = ax + b",gen:R=>{const a=R.pick([2,3,-1,-2,0.5,4]),b=R.r(-5,8),x=R.r(-4,6);return {q:`f(x) = <b>${R.f(a,1)}x ${b<0?'−':'+'} ${Math.abs(b)}</b>. Calcule <b>f(${x})</b>.`,r:a*x+b,u:"",tol:0.01,ex:`f(${x}) = ${R.f(a,1)} × (${x}) ${b<0?'−':'+'} ${Math.abs(b)} = <b>${R.f(a*x+b,2)}</b>.`}}},
 {t:"Coefficient directeur",ic:"📉",d:"(f(x₂) − f(x₁)) ÷ (x₂ − x₁)",gen:R=>{const a=R.pick([2,3,-1,-2,0.5,4]),b=R.r(-5,5),x1=R.r(-3,2),x2=x1+R.r(1,5);return {q:`f est affine avec f(${x1}) = <b>${R.f(a*x1+b,1)}</b> et f(${x2}) = <b>${R.f(a*x2+b,1)}</b>. Quel est son coefficient directeur ?`,r:a,u:"",tol:0.01,ex:`a = (${R.f(a*x2+b,1)} − ${R.f(a*x1+b,1)}) ÷ (${x2} − ${x1}) = <b>${R.f(a,2)}</b>.`}}},
 {t:"Pourcentages et évolutions",ic:"💯",d:"Coefficient multiplicateur",gen:R=>{const p=R.pick([50,80,120,200,250,400]),t=R.pick([5,10,15,20,25,30,40]),h=R.r(0,1),r=p*(h?1+t/100:1-t/100);return {q:`Un prix de <b>${p} €</b> ${h?'augmente':'baisse'} de <b>${t} %</b>. Nouveau prix ?`,r,u:"€",tol:0.01,ex:`Coefficient : ${R.f(h?1+t/100:1-t/100,2)} ; ${p} × ${R.f(h?1+t/100:1-t/100,2)} = <b>${R.f(r,2)} €</b>.`}}},
 {t:"Vitesse moyenne",ic:"🚗",d:"v = d ÷ t",gen:R=>{const v=R.pick([12,15,30,45,60,80,90,100]),t=R.pick([0.5,1.5,2,2.5,0.25,1.25]),d=v*t;return {q:`Un trajet de <b>${R.f(d,2)} km</b> dure <b>${Math.floor(t)} h ${Math.round((t%1)*60)} min</b>. Vitesse moyenne ?`,r:v,u:"km/h",tol:0.01,ex:`Durée : ${R.f(t,2)} h ; v = ${R.f(d,2)} ÷ ${R.f(t,2)} = <b>${v} km/h</b>.`}}},
 {t:"Notation scientifique",ic:"⚡",d:"L'exposant",gen:R=>{const m=R.pick([1.2,2.5,3.4,4.7,6.02,7.5,8.1]),n=R.r(-6,9);const s=(m*10**n).toLocaleString('fr-FR',{maximumFractionDigits:12});return {q:`Le nombre <b>${s}</b> s'écrit ${R.f(m,2)} × 10ⁿ. Que vaut n ?`,r:n,u:"",tol:0.01,ex:`On décale la virgule de ${Math.abs(n)} rang${Math.abs(n)>1?'s':''} : <b>n = ${n}</b>.`}}},
 {t:"Moyenne",ic:"📊",d:"Somme ÷ nombre",gen:R=>{const l=[...Array(R.r(4,7))].map(()=>R.r(4,19)),s=l.reduce((a,b)=>a+b,0);return {q:`Calcule la moyenne de : <b>${l.join(' ; ')}</b> (au dixième).`,r:s/l.length,u:"",tol:0.06,ex:`Somme = ${s} ; ${s} ÷ ${l.length} ≈ <b>${R.f(s/l.length,1)}</b>.`}}},
 {t:"Médiane",ic:"📊",d:"Ranger puis prendre le milieu",gen:R=>{const l=[...Array(R.r(5,8))].map(()=>R.r(2,20)),t=[...l].sort((a,b)=>a-b),n=t.length,m=n%2?t[(n-1)/2]:(t[n/2-1]+t[n/2])/2;return {q:`Médiane de la série : <b>${l.join(' ; ')}</b> ?`,r:m,u:"",tol:0.01,ex:`Rangée : ${t.join(' ; ')} (${n} valeurs) → médiane <b>${R.f(m,1)}</b>.`}}},
 {t:"Volumes",ic:"🧊",d:"Cylindre, cône, boule (arrondi)",gen:R=>{const k=R.r(0,2),r=R.r(2,8),h=R.r(3,15);let v,f,q;if(k===0){v=Math.PI*r*r*h;q=`un <b>cylindre</b> de rayon ${r} cm et de hauteur ${h} cm`;f=`π × ${r}² × ${h}`}else if(k===1){v=Math.PI*r*r*h/3;q=`un <b>cône</b> de rayon ${r} cm et de hauteur ${h} cm`;f=`π × ${r}² × ${h} ÷ 3`}else{v=4/3*Math.PI*r**3;q=`une <b>boule</b> de rayon ${r} cm`;f=`4/3 × π × ${r}³`}
   return {q:`Volume de ${q}, arrondi au cm³ ?`,r:v,u:"cm³",tol:0.6,ex:`V = ${f} ≈ <b>${Math.round(v)} cm³</b>.`}}},
 {t:"Probabilités",ic:"🎲",d:"En nombre décimal",gen:R=>{const t=R.pick([4,5,8,10,20]),f=R.r(1,t-1),c=R.r(0,1),p=c?1-f/t:f/t;return {q:`Une urne contient <b>${t}</b> boules dont <b>${f}</b> gagnantes. Probabilité de tirer une boule ${c?'<b>non</b> gagnante':'gagnante'}, en décimal ?`,r:p,u:"",tol:0.001,ex:`${c?`1 − ${f}/${t} = ${t-f}/${t}`:`${f}/${t}`} = <b>${R.f(p,3)}</b>.`}}},
 {t:"Puissances de 10",ic:"🔟",d:"Les exposants s'ajoutent",gen:R=>{const a=R.r(-6,8),b=R.r(-6,8),k=R.r(0,1);return {q:`10<sup>${a}</sup> ${k?'×':'÷'} 10<sup>${b}</sup> = 10ⁿ. Que vaut n ?`,r:k?a+b:a-b,u:"",tol:0.01,ex:`${k?`${a} + (${b})`:`${a} − (${b})`} = <b>${k?a+b:a-b}</b>.`}}}
];

/* ---------- Formules (fiches + « Qui suis-je ? ») ---------- */
C.appareils=[
 {n:"Théorème de Pythagore",ic:"📐",f:"Dans un triangle rectangle, le carré du plus long côté est égal à la somme des carrés des deux autres.",c:"BC² = AB² + AC² si ABC est rectangle en A.",p:"Calculer une longueur dans un triangle rectangle.",s:"L'hypoténuse est en face de l'angle droit."},
 {n:"Réciproque de Pythagore",ic:"✅",f:"Si le carré du plus long côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle.",c:"On calcule BC² et AB² + AC² séparément.",p:"Prouver qu'un angle est droit.",s:"Sinon, le triangle n'est pas rectangle."},
 {n:"Théorème de Thalès",ic:"🔺",f:"Deux sécantes coupées par deux parallèles donnent des longueurs proportionnelles.",c:"AM/AB = AN/AC = MN/BC.",p:"Calculer une longueur avec des parallèles.",s:"Vérifier le parallélisme et les alignements."},
 {n:"Cosinus",ic:"📏",f:"Dans un triangle rectangle : côté adjacent divisé par hypoténuse.",c:"CAH.",p:"Calculer un côté ou un angle.",s:"Calculatrice en degrés."},
 {n:"Sinus",ic:"📏",f:"Dans un triangle rectangle : côté opposé divisé par hypoténuse.",c:"SOH.",p:"Calculer un côté ou un angle.",s:"Uniquement dans un triangle rectangle."},
 {n:"Tangente",ic:"📏",f:"Dans un triangle rectangle : côté opposé divisé par côté adjacent.",c:"TOA.",p:"Pentes, rampes, hauteurs.",s:"Ne fait pas intervenir l'hypoténuse."},
 {n:"Identité (a + b)(a − b)",ic:"🧲",f:"Produit d'une somme par une différence des deux mêmes nombres : égal à a² − b².",c:"(a + b)(a − b) = a² − b².",p:"Développer ou factoriser rapidement.",s:"Ne marche qu'avec une différence de carrés."},
 {n:"Double distributivité",ic:"✖️",f:"(a + b)(c + d) = ac + ad + bc + bd.",c:"Quatre produits, puis réduire.",p:"Développer un produit de deux parenthèses.",s:"Attention aux signes."},
 {n:"Équation produit nul",ic:"0️⃣",f:"Un produit est nul si et seulement si l'un de ses facteurs est nul.",c:"A × B = 0 ⟺ A = 0 ou B = 0.",p:"Résoudre après avoir factorisé.",s:"Donner toutes les solutions."},
 {n:"Volume d'un cône",ic:"🍦",f:"Aire du disque de base multipliée par la hauteur, puis divisée par 3.",c:"V = π r² h ÷ 3.",p:"Cornets, entonnoirs, tas de sable.",s:"Même formule que la pyramide (base circulaire)."},
 {n:"Volume d'une boule",ic:"⚽",f:"Quatre tiers de π multipliés par le cube du rayon.",c:"V = 4/3 × π × r³.",p:"Ballons, billes, planètes.",s:"Ne pas confondre avec l'aire de la sphère 4πr²."},
 {n:"Volume d'un cylindre",ic:"🥫",f:"Aire du disque de base multipliée par la hauteur.",c:"V = π r² h.",p:"Canettes, citernes, piscines rondes.",s:"Longueurs dans la même unité."},
 {n:"Coefficient multiplicateur",ic:"💯",f:"Nombre par lequel on multiplie pour appliquer une hausse ou une baisse en pourcentage.",c:"+t % → × (1 + t/100) ; −t % → × (1 − t/100).",p:"Soldes, augmentations, évolutions successives.",s:"Évolutions successives : on multiplie les coefficients."},
 {n:"Vitesse moyenne",ic:"🚗",f:"Distance parcourue divisée par la durée du parcours.",c:"v = d ÷ t ; d = v × t ; t = d ÷ v.",p:"Trajets, courses.",s:"Durées en heures décimales ; 1 m/s = 3,6 km/h."},
 {n:"Événement contraire",ic:"🎲",f:"Sa probabilité est 1 moins la probabilité de l'événement.",c:"P(non A) = 1 − P(A).",p:"Calculer « au moins un ».",s:"La somme des probabilités de toutes les issues vaut 1."},
 {n:"Médiane",ic:"📊",f:"Valeur qui partage une série rangée en deux groupes de même effectif.",c:"Impair : valeur du milieu ; pair : moyenne des deux du milieu.",p:"Résumer une série sans être influencé par les valeurs extrêmes.",s:"Toujours ranger la série d'abord."}
];
