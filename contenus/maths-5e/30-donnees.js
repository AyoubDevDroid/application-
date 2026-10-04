/* PARTIE 3 — Données, probabilités, proportionnalité, fonctions, pensée informatique (programme de 5e, BO n° 10 du 5 mars 2026) */

/* ---------- Statistiques ---------- */
C.modules.push({id:"statistiques",n:3,i:"📊",t:"Statistiques",d:"Effectifs, fréquences, diagrammes, moyenne",
 s:[{h:"Effectifs et fréquences",l:["L'<b>effectif</b> d'une valeur : le nombre de fois où elle apparaît.","La <b>fréquence</b> = effectif ÷ effectif total.","Elle s'écrit en fraction, en décimal ou en pourcentage : 6/24 = 0,25 = 25 %."]},
    {h:"Représenter des données",l:["<b>Diagramme en barres</b> : pour comparer des effectifs.","<b>Diagramme circulaire</b> : pour montrer des proportions d'un tout (360° = 100 %).","<b>Graphique cartésien</b> : pour une évolution (températures dans le temps…)."]},
    {h:"La moyenne",l:["Moyenne = somme des valeurs ÷ nombre de valeurs.","Notes 12, 15, 9 : (12 + 15 + 9) ÷ 3 = 12.","La moyenne est comprise entre la plus petite et la plus grande valeur."]}],
 k:["Effectif","Fréquence","Moyenne","Diagramme circulaire"]});
C.fiches.statistiques={
 intro:"En 1858, l'infirmière Florence Nightingale a convaincu l'armée britannique d'améliorer l'hygiène des hôpitaux grâce… à un diagramme ! Bien choisir sa représentation, c'est rendre les chiffres parlants.",
 s:[
  {p:"Dans une enquête, l'<b>effectif</b> d'une valeur est le nombre de fois où elle apparaît. La <b>fréquence</b> est la part qu'elle représente : effectif ÷ effectif total. Dans une classe de 25 élèves, si 10 viennent à vélo, la fréquence est 10/25 = 0,4 = <b>40 %</b>.",
   fig:{type:"barres",legende:"Moyen de transport (25 élèves)",items:[["Vélo",10,"élèves","#2ed47a"],["Bus",8,"élèves","#3db5ff"],["À pied",5,"élèves","#ffc83d"],["Voiture",2,"élèves","#ff8a3d"]]},
   q:["Sur la figure, quelle est la fréquence des élèves venant en bus ?",["32 %","8 %","25 %","80 %"],0,"8 ÷ 25 = 0,32 = 32 %."]},
  {p:"On choisit la <b>représentation</b> selon ce qu'on veut montrer. Pour comparer des effectifs : <b>diagramme en barres</b>. Pour montrer la part de chaque catégorie dans un tout : <b>diagramme circulaire</b> (l'angle est proportionnel à l'effectif : 100 % ↔ 360°). Pour une évolution dans le temps : <b>graphique cartésien</b>.",
   fig:{type:"svg",legende:"Diagramme circulaire : 40 % ↔ 144°",svg:"<svg viewBox='0 0 240 120'><circle cx='70' cy='60' r='50' fill='#3db5ff'/><path d='M70 60L70 10A50 50 0 0 1 99.4 100.5Z' fill='#2ed47a'/><path d='M70 60L99.4 100.5A50 50 0 0 1 40.6 100.5Z' fill='#ffc83d'/><g font-size='11' fill='#fff'><rect x='140' y='22' width='12' height='12' fill='#2ed47a'/><text x='158' y='32'>40 % (144°)</text><rect x='140' y='52' width='12' height='12' fill='#ffc83d'/><text x='158' y='62'>20 % (72°)</text><rect x='140' y='82' width='12' height='12' fill='#3db5ff'/><text x='158' y='92'>40 % (144°)</text></g></svg>"},
   q:["Dans un diagramme circulaire, une catégorie représente 25 %. Son angle mesure…",["90°","25°","45°","180°"],0,"25 % de 360° = 90°."]},
  {p:"La <b>moyenne</b> d'une série, c'est la valeur qu'aurait chacun si on « partageait équitablement ». On additionne toutes les valeurs et on divise par le nombre de valeurs. Températures de la semaine : 12, 14, 9, 11, 15, 16, 7 → somme 84, moyenne 84 ÷ 7 = 12 °C.",
   fig:{type:"flux",legende:"Moyenne de 14 ; 8 ; 17 ; 11",etapes:[["Additionner","14 + 8 + 17 + 11 = 50"],["Compter les valeurs","4"],["Diviser","50 ÷ 4 = 12,5"]]},
   att:"La moyenne n'est pas forcément l'une des valeurs de la série, et elle peut être un décimal même si toutes les valeurs sont entières.",
   q:["Moyenne de 10, 12 et 17 ?",["13","12","39","14"],0,"39 ÷ 3 = 13."]}
 ],
 retenir:["Fréquence = effectif ÷ effectif total (en %, × 100).","Barres : comparer ; circulaire : parts d'un tout ; courbe : évolution.","Diagramme circulaire : 100 % ↔ 360°.","Moyenne = somme ÷ nombre de valeurs."]
};

/* ---------- Probabilités ---------- */
C.modules.push({id:"probabilites",n:3,i:"🎲",t:"Probabilités",d:"Expérience aléatoire, issues, événements, équiprobabilité",
 s:[{h:"Le vocabulaire",l:["Une <b>expérience aléatoire</b> a plusieurs résultats possibles, qu'on ne peut pas prévoir.","Chaque résultat possible est une <b>issue</b>.","Un <b>événement</b> est un ensemble d'issues : « obtenir un nombre pair »."]},
    {h:"L'échelle des probabilités",l:["Une probabilité est un nombre entre <b>0</b> (impossible) et <b>1</b> (certain).","1/2 : une chance sur deux (pile ou face).","On l'écrit en fraction, en décimal ou en pourcentage."]},
    {h:"L'équiprobabilité",l:["Si toutes les issues ont la même chance, P = nombre d'issues favorables ÷ nombre d'issues possibles.","Dé équilibré, obtenir 5 : 1/6.","Obtenir un nombre pair : 3/6 = 1/2."]},
    {h:"Fréquences et expériences",l:["En répétant une expérience, on calcule la fréquence d'apparition d'une issue.","Sur un petit nombre d'essais, la fréquence peut être loin de la probabilité."]}],
 k:["Expérience aléatoire","Issue","Événement","Probabilité","Équiprobabilité"]});
C.fiches.probabilites={
 intro:"Pile ou face, lancer de dé, tirage au sort des délégués : le hasard est partout. On ne peut pas prédire le résultat d'un lancer… mais on peut mesurer ses chances. C'est ce que font les probabilités.",
 s:[
  {p:"Une <b>expérience aléatoire</b> est une expérience dont on connaît les résultats possibles (les <b>issues</b>) sans pouvoir prévoir lequel va sortir. Un <b>événement</b> est réalisé par une ou plusieurs issues. Avec un dé : issues 1, 2, 3, 4, 5, 6 ; l'événement « obtenir plus de 4 » est réalisé par 5 et 6.",
   q:["On lance un dé à 6 faces. Combien d'issues réalisent l'événement « obtenir un multiple de 3 » ?",["2 (3 et 6)","3","1","6"],0,"Les multiples de 3 entre 1 et 6 : 3 et 6."]},
  {p:"La <b>probabilité</b> d'un événement est un nombre entre <b>0 et 1</b>. 0 : événement <b>impossible</b> (obtenir 7 avec un dé). 1 : événement <b>certain</b> (obtenir moins de 7). « Une chance sur quatre » correspond à la probabilité 1/4 = 0,25 = 25 %.",
   fig:{type:"svg",legende:"L'échelle des probabilités",svg:"<svg viewBox='0 0 300 90'><defs><linearGradient id='gp' x1='0' x2='1'><stop offset='0' stop-color='#ff5c7a'/><stop offset='.5' stop-color='#ffc83d'/><stop offset='1' stop-color='#2ed47a'/></linearGradient></defs><rect x='20' y='35' width='260' height='10' rx='5' fill='url(#gp)'/><g fill='#fff' font-size='10' text-anchor='middle'><text x='20' y='62'>0</text><text x='150' y='62'>1/2</text><text x='280' y='62'>1</text><text x='4' y='80' text-anchor='start'>impossible</text><text x='150' y='80'>pile</text><text x='296' y='80' text-anchor='end'>certain</text><text x='63' y='26'>1/6 : faire 5 au dé</text></g><path d='M63 30V40' stroke='#fff' stroke-width='2'/></svg>"},
   q:["« Obtenir 10 fois de suite 1 avec un dé » est un événement…",["Possible mais très peu probable","Impossible","Certain","D'une chance sur deux"],0,"Sa probabilité est très proche de 0, mais pas nulle."]},
  {p:"Quand toutes les issues ont la <b>même chance</b> (dé équilibré, pièce équilibrée, tirage au hasard), on parle d'<b>équiprobabilité</b> : P = nombre d'issues favorables ÷ nombre d'issues possibles. Une urne contient 3 boules rouges et 5 vertes : P(rouge) = 3/8.",
   fig:{type:"flux",legende:"Urne : 3 rouges, 5 vertes, 2 bleues",etapes:[["Issues possibles","10 boules"],["Issues favorables (verte)","5"],["P(verte)","5/10 = 1/2 = 50 %"]]},
   q:["Une urne contient 2 boules rouges et 6 bleues. Probabilité de tirer une rouge ?",["1/4","2/6","1/3","2"],0,"2 ÷ 8 = 1/4."]},
  {p:"On peut aussi <b>répéter</b> une expérience et noter les résultats dans un tableau d'effectifs et de fréquences. Si on lance une pièce 20 fois, on n'obtient pas forcément 10 piles : la fréquence <b>fluctue</b> d'une série à l'autre.",
   info:"Le mathématicien Buffon a lancé une pièce 4 040 fois au XVIIIe siècle : il a obtenu 2 048 piles, soit une fréquence d'environ 0,507 — très proche de 1/2.",
   q:["On lance une pièce 10 fois et on obtient 7 faces. La pièce est-elle forcément truquée ?",["Non, sur 10 lancers la fréquence fluctue beaucoup","Oui, sûrement","Oui, car 7 ≠ 5","On ne lance jamais une pièce 10 fois"],0,"Sur peu d'essais, des écarts importants sont normaux."]}
 ],
 retenir:["Probabilité entre 0 (impossible) et 1 (certain).","Équiprobabilité : P = issues favorables ÷ issues possibles.","« Une chance sur 4 » = 1/4 = 0,25 = 25 %.","La fréquence observée fluctue, surtout sur peu d'essais."]
};

/* ---------- Proportionnalité ---------- */
C.modules.push({id:"proportionnalite",n:3,i:"⚖️",t:"Proportionnalité",d:"Reconnaître, coefficient, linéarité, pourcentages, graphiques",
 s:[{h:"Reconnaître",l:["Deux grandeurs sont <b>proportionnelles</b> si on passe de l'une à l'autre en multipliant toujours par le même nombre : le <b>coefficient de proportionnalité</b>.","Prix et masse de tomates : oui. Âge et taille : non !"]},
    {h:"Les procédures",l:["<b>Linéarité</b> : si 4 personnes → 200 g, alors 8 → 400 g (× 2) et 6 → 300 g (200 + 100).","<b>Retour à l'unité</b> : 3 kg coûtent 7,50 €, donc 1 kg coûte 2,50 €.","<b>Coefficient</b> : prix = 2,50 × masse."]},
    {h:"Pourcentages",l:["t % de N = N × t ÷ 100.","10 % de 80 = 8 ; 50 % = la moitié ; 1 % de 300 = 3.","Un pourcentage est une proportion « sur 100 »."]},
    {h:"Graphique",l:["Une situation de proportionnalité est représentée par des points <b>alignés avec l'origine</b>.","Si les points ne sont pas alignés, ou si la droite ne passe pas par l'origine : pas de proportionnalité."]}],
 k:["Proportionnalité","Coefficient de proportionnalité","Pourcentage","Échelle"]});
C.fiches.proportionnalite={
 intro:"Recette pour 4 qu'on veut faire pour 6, prix au kilo, plan à l'échelle, vitesse sur l'autoroute, soldes à −30 % : la proportionnalité est l'outil mathématique le plus utilisé dans la vie de tous les jours.",
 s:[
  {p:"Deux grandeurs sont <b>proportionnelles</b> quand on obtient l'une en multipliant l'autre par un <b>même nombre</b>. Dans le tableau, on vérifie que tous les quotients sont égaux : 4,5 ÷ 3 = 7,5 ÷ 5 = 1,5. Le coefficient est 1,5 (c'est le prix d'un kilo).",
   fig:{type:"flux",legende:"Prix des pommes : 1,50 € le kg",etapes:[["2 kg","3 €"],["3 kg","4,50 €"],["5 kg","7,50 €"],["Coefficient","× 1,5"]]},
   q:["Un tableau de proportionnalité : 4 → 10 ; 6 → … ?",["15","12","20","8"],0,"Coefficient 2,5 : 6 × 2,5 = 15."]},
  {p:"Plusieurs <b>procédures</b> : la <b>linéarité multiplicative</b> (2 fois plus de personnes → 2 fois plus d'ingrédients), la <b>linéarité additive</b> (quantité pour 6 = quantité pour 4 + quantité pour 2), le <b>retour à l'unité</b> (combien pour 1 ?) et le <b>coefficient</b>.",
   fig:{type:"flux",legende:"Crêpes : 250 g de farine pour 4 personnes",etapes:[["Pour 2 (÷ 2)","125 g"],["Pour 8 (× 2)","500 g"],["Pour 6 (4 + 2)","250 + 125 = 375 g"],["Pour 1 (÷ 4)","62,5 g"]]},
   q:["3 cahiers coûtent 4,20 €. Combien coûtent 5 cahiers ?",["7 €","6,20 €","8,40 €","5,20 €"],0,"1 cahier : 1,40 € ; 5 × 1,40 = 7 €."]},
  {p:"Un <b>pourcentage</b> traduit une proportion sur 100. Prendre t % d'un nombre, c'est le multiplier par t/100. 15 % de 60 € = 60 × 15 ÷ 100 = 9 €. Pour calculer le pourcentage des voix d'un candidat : voix ÷ total × 100 (Chloé : 12 voix sur 24 = 50 %).",
   q:["30 % de 50 = ?",["15","30","1,5","20"],0,"10 % de 50 = 5, donc 30 % = 15."]},
  {p:"Sur un <b>graphique</b>, une situation de proportionnalité donne des points <b>alignés avec l'origine</b> du repère. Un abonnement avec frais fixes (10 € + 2 € par séance) donne des points alignés, mais la droite ne passe pas par l'origine : ce n'est <b>pas</b> proportionnel.",
   fig:{type:"svg",legende:"Vert : proportionnel. Orange : pas proportionnel (ne passe pas par O)",svg:"<svg viewBox='0 0 240 130'><path d='M20 115H230M20 120V5' stroke='#fff' stroke-width='2'/><path d='M20 115L200 15' stroke='#2ed47a' stroke-width='3'/><path d='M20 85L200 35' stroke='#ff8a3d' stroke-width='3'/><g fill='#2ed47a'><circle cx='65' cy='90' r='4'/><circle cx='110' cy='65' r='4'/><circle cx='155' cy='40' r='4'/></g><text x='8' y='126' fill='#fff' font-size='11'>O</text></svg>"},
   q:["Des points alignés sur une droite qui ne passe pas par l'origine représentent…",["Une situation non proportionnelle","Une situation proportionnelle","Une erreur de tracé","Un pourcentage"],0,"Il faut que la droite passe par l'origine."]}
 ],
 retenir:["Proportionnel : on multiplie toujours par le même coefficient.","Procédures : linéarité, retour à l'unité, coefficient.","t % de N = N × t ÷ 100.","Graphique : points alignés avec l'origine."]
};

/* ---------- Fonctions : « en fonction de » ---------- */
C.modules.push({id:"fonctions",n:3,i:"📈",t:"« En fonction de »",d:"Tableau de valeurs, formule, graphique",
 s:[{h:"Une grandeur qui dépend d'une autre",l:["Le prix payé dépend du nombre de places achetées : il est <b>en fonction</b> du nombre de places.","Le périmètre d'un carré est en fonction de son côté : P = 4 × c."]},
    {h:"Tableau de valeurs",l:["À partir d'une formule, on calcule un tableau : pour c = 1, 2, 3… P = 4, 8, 12…","On peut lire un tableau dans les deux sens."]},
    {h:"Graphique",l:["On place les points (valeur de départ ; valeur obtenue) dans un repère.","On lit sur la courbe : pour une valeur en abscisse, on lit l'ordonnée correspondante."]}],
 k:["Tableau de valeurs","Formule","Graphique cartésien"]});
C.fiches.fonctions={
 intro:"Plus tu roules longtemps, plus tu vas loin ; plus le côté d'un carré est grand, plus son aire est grande. Quand une grandeur dépend d'une autre, on dit qu'elle est « en fonction » de l'autre. On peut le dire avec une formule, un tableau ou un graphique.",
 s:[
  {p:"Une <b>formule</b> exprime une grandeur en fonction d'une autre. L'aire d'un carré en fonction de son côté c : A = c². Le prix d'une location de vélo en fonction du nombre d'heures h : P = 3 + 2h (3 € de base, 2 € par heure).",
   q:["Une place de cinéma coûte 8 €. Le prix P pour n places est…",["P = 8n","P = n + 8","P = 8 ÷ n","P = n²"],0,"n places à 8 € chacune."]},
  {p:"Un <b>tableau de valeurs</b> se remplit en remplaçant la lettre de la formule par chaque valeur. Pour A = c² : c = 1 → 1 ; c = 2 → 4 ; c = 3 → 9 ; c = 4 → 16. Ici l'aire n'est <b>pas proportionnelle</b> au côté : quand c double, A est multipliée par 4.",
   fig:{type:"barres",legende:"Aire du carré en fonction du côté",items:[["c = 1",1,"cm²","#3db5ff"],["c = 2",4,"cm²","#2ed47a"],["c = 3",9,"cm²","#ffc83d"],["c = 4",16,"cm²","#ff8a3d"]]},
   q:["Pour P = 3 + 2h, combien vaut P quand h = 5 ?",["13","25","10","16"],0,"3 + 2 × 5 = 13."]},
  {p:"Un <b>graphique cartésien</b> représente la dépendance : en abscisse la grandeur de départ, en ordonnée la grandeur obtenue. On peut <b>lire</b> des valeurs : on part de l'abscisse, on monte jusqu'à la courbe, on lit l'ordonnée. Si les points sont alignés avec l'origine, la situation est proportionnelle.",
   fig:{type:"svg",legende:"Hauteur d'une plante (cm) en fonction du temps (semaines)",svg:"<svg viewBox='0 0 240 130'><path d='M25 110H230M25 115V5' stroke='#fff' stroke-width='2'/><path d='M25 105Q70 100 100 70T200 20' stroke='var(--pri)' stroke-width='3' fill='none' class='draw'/><path d='M100 110V70H25' stroke='#ffc83d' stroke-dasharray='4 3' fill='none'/><g fill='#fff' font-size='9'><text x='96' y='122'>4</text><text x='12' y='73'>12</text><text x='200' y='124'>semaines</text><text x='30' y='12'>cm</text></g></svg>"},
   q:["Sur le graphique, quelle hauteur a la plante après 4 semaines ?",["12 cm","4 cm","20 cm","8 cm"],0,"On part de 4 en abscisse, on lit 12 en ordonnée."]}
 ],
 retenir:["« En fonction de » : une grandeur dépend d'une autre.","Formule → tableau de valeurs → points d'un graphique.","Abscisse : grandeur de départ ; ordonnée : grandeur obtenue.","Points alignés avec l'origine ⟺ proportionnalité."]
};

/* ---------- Programmation ---------- */
C.modules.push({id:"programmation",n:3,i:"🤖",t:"Programmer avec des blocs",d:"Instructions, entrées et sorties, formules, boucle « répéter »",
 s:[{h:"Un programme",l:["Un <b>programme</b> est une suite d'<b>instructions</b> exécutées dans l'ordre.","Une <b>entrée</b> est une donnée fournie (par exemple un nombre demandé) ; une <b>sortie</b> est un résultat affiché."]},
    {h:"Des formules en blocs",l:["Les blocs d'opérateurs s'emboîtent comme des parenthèses : (3 × (réponse)) + 2.","On prévoit le résultat avant d'exécuter : si réponse = 4, le programme dit 14."]},
    {h:"La boucle « répéter »",l:["<b>répéter 4 fois</b> [avancer de 50 ; tourner de 90°] trace un carré.","Pour un polygone régulier à n côtés : répéter n fois, tourner de 360° ÷ n."]}],
 k:["Programme","Instruction","Boucle"]});
C.fiches.programmation={
 intro:"Les jeux vidéo, les robots aspirateurs, les feux de circulation obéissent à des programmes. Un programme, c'est une recette très précise que la machine suit à la lettre, sans jamais improviser. Avec des blocs (comme dans Scratch), tu peux en écrire dès aujourd'hui.",
 s:[
  {p:"Un <b>programme</b> est une suite d'<b>instructions</b> que l'ordinateur exécute <b>dans l'ordre</b>. Il peut demander une <b>entrée</b> (« demander un nombre ») et produire une <b>sortie</b> (« dire … »). Changer l'ordre des instructions change le résultat.",
   fig:{type:"flux",legende:"Un programme de calcul en blocs",etapes:[["quand le drapeau est cliqué",""],["demander « Choisis un nombre »","entrée : réponse"],["dire (réponse × 3) + 2","sortie"],["Si réponse = 5","le lutin dit 17"]]},
   q:["Pour réponse = 4, que dit le lutin avec « dire (réponse × 3) + 2 » ?",["14","20","9","12"],0,"4 × 3 = 12, puis 12 + 2 = 14."]},
  {p:"Dans les blocs d'opérateurs, chaque bloc emboîté est calculé <b>en premier</b>, comme une parenthèse. Le bloc ((réponse) + (2)) × (3) calcule d'abord la somme. Il faut toujours <b>prévoir</b> le résultat avant d'exécuter, pour vérifier que le programme fait bien ce qu'on veut.",
   att:"(réponse + 2) × 3 et réponse + (2 × 3) ne donnent pas le même résultat : l'emboîtement des blocs joue le rôle des parenthèses.",
   q:["Pour réponse = 4, que vaut le bloc ((réponse) + (2)) × (3) ?",["18","10","24","9"],0,"(4 + 2) × 3 = 18."]},
  {p:"La <b>boucle « répéter n fois »</b> exécute plusieurs fois la même séquence d'instructions. Pour tracer un carré : répéter 4 fois [avancer de 50 pas ; tourner de 90°]. Pour un triangle équilatéral : répéter 3 fois [avancer ; tourner de 120°].",
   fig:{type:"etapes",vues:[
     {svg:"<svg viewBox='0 0 240 120'><path d='M80 100H140' stroke='var(--pri)' stroke-width='4' fill='none' class='draw'/><circle cx='140' cy='100' r='5' fill='#ffc83d'/></svg>",t:"Tour 1 : avancer de 50, tourner de 90°."},
     {svg:"<svg viewBox='0 0 240 120'><path d='M80 100H140V40' stroke='var(--pri)' stroke-width='4' fill='none'/><circle cx='140' cy='40' r='5' fill='#ffc83d'/></svg>",t:"Tour 2 : on recommence."},
     {svg:"<svg viewBox='0 0 240 120'><path d='M80 100H140V40H80V100' stroke='var(--pri)' stroke-width='4' fill='none'/><circle cx='80' cy='100' r='5' fill='#ffc83d'/></svg>",t:"Après 4 tours : un carré ! « répéter 4 fois » évite d'écrire 8 instructions."}]},
   q:["Pour tracer un hexagone régulier (6 côtés), de combien faut-il tourner à chaque tour ?",["60°","90°","120°","6°"],0,"360° ÷ 6 = 60°."]}
 ],
 retenir:["Programme : instructions exécutées dans l'ordre.","Entrée : donnée demandée ; sortie : résultat affiché.","Blocs emboîtés = parenthèses ; prévoir le résultat avant d'exécuter.","Polygone régulier à n côtés : répéter n fois, tourner de 360° ÷ n."]
};

C.lexique.push(
 ["Effectif","Nombre de fois où une valeur apparaît dans une série."],
 ["Fréquence","Effectif d'une valeur divisé par l'effectif total."],
 ["Moyenne","Somme des valeurs divisée par le nombre de valeurs."],
 ["Diagramme circulaire","Disque partagé en secteurs dont les angles sont proportionnels aux effectifs."],
 ["Expérience aléatoire","Expérience dont on ne peut pas prévoir le résultat à l'avance."],
 ["Issue","Résultat possible d'une expérience aléatoire."],
 ["Événement","Ensemble d'issues d'une expérience aléatoire."],
 ["Probabilité","Nombre entre 0 et 1 qui mesure la chance qu'un événement se produise."],
 ["Équiprobabilité","Situation où toutes les issues ont la même probabilité."],
 ["Proportionnalité","Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant par un même nombre."],
 ["Coefficient de proportionnalité","Nombre par lequel on multiplie une grandeur pour obtenir l'autre."],
 ["Pourcentage","Proportion exprimée sur 100 : t % = t/100."],
 ["Échelle","Rapport entre une distance sur le plan et la distance réelle."],
 ["Tableau de valeurs","Tableau qui associe à des valeurs de départ les valeurs obtenues."],
 ["Formule","Égalité qui permet de calculer une grandeur à partir d'une autre."],
 ["Graphique cartésien","Représentation dans un repère d'une grandeur en fonction d'une autre."],
 ["Programme","Suite d'instructions exécutées par un ordinateur."],
 ["Instruction","Ordre élémentaire donné à la machine (avancer, dire, demander…)."],
 ["Boucle","Bloc qui répète plusieurs fois une suite d'instructions."]
);

C.quiz.push(
 ["statistiques","Sur 20 élèves, 5 portent des lunettes. Fréquence ?",["25 %","5 %","20 %","4 %"],0,"5 ÷ 20 = 0,25."],
 ["statistiques","Moyenne de 8, 12, 13 et 15 ?",["12","13","48","11"],0,"48 ÷ 4 = 12."],
 ["statistiques","Pour montrer l'évolution d'une température heure par heure, on choisit…",["Un graphique cartésien","Un diagramme circulaire","Un tableau de proportionnalité","Une échelle"],0,"Une courbe montre une évolution."],
 ["statistiques","Un secteur de diagramme circulaire mesure 180°. Il représente…",["50 %","18 %","180 %","25 %"],0,"180° = la moitié de 360°."],
 ["statistiques","La somme des fréquences de toutes les valeurs vaut…",["1 (100 %)","0","L'effectif total","La moyenne"],0,"Toutes les parts ensemble font le tout."],
 ["probabilites","Probabilité d'obtenir un nombre pair avec un dé à 6 faces ?",["1/2","1/6","1/3","2/6"],0,"3 issues favorables sur 6."],
 ["probabilites","Probabilité d'un événement impossible ?",["0","1","1/2","−1"],0,"Il ne se produit jamais."],
 ["probabilites","« Une chance sur 5 » correspond à…",["20 %","5 %","50 %","15 %"],0,"1/5 = 0,2 = 20 %."],
 ["probabilites","Une urne : 4 rouges, 4 vertes, 2 jaunes. P(jaune) ?",["1/5","2/8","1/2","2"],0,"2/10 = 1/5."],
 ["probabilites","Une probabilité peut-elle valoir 1,2 ?",["Non, elle est entre 0 et 1","Oui","Seulement avec un dé","Oui si on lance 2 fois"],0,"0 ≤ P ≤ 1."],
 ["proportionnalite","5 kg de pommes coûtent 9 €. Prix de 1 kg ?",["1,80 €","4,50 €","45 €","2 €"],0,"9 ÷ 5."],
 ["proportionnalite","Recette pour 4 : 6 œufs. Pour 6 personnes ?",["9 œufs","8 œufs","12 œufs","7 œufs"],0,"6 × 1,5."],
 ["proportionnalite","20 % de 45 = ?",["9","20","4,5","25"],0,"10 % = 4,5, donc 20 % = 9."],
 ["proportionnalite","Quelle situation est proportionnelle ?",["Le prix de l'essence et le nombre de litres","L'âge et la taille","La note et le temps de révision","La pointure et l'âge"],0,"Prix = prix du litre × nombre de litres."],
 ["proportionnalite","Une voiture roule à vitesse constante : 180 km en 2 h. En 3 h ?",["270 km","360 km","240 km","200 km"],0,"90 km/h × 3."],
 ["fonctions","L'aire A d'un carré en fonction de son côté c est…",["A = c²","A = 4c","A = 2c","A = c + 4"],0,"Côté × côté."],
 ["fonctions","Pour P = 5 + 3n, que vaut P si n = 4 ?",["17","32","12","9"],0,"5 + 12."],
 ["fonctions","Sur un graphique, la grandeur de départ se lit sur…",["L'axe des abscisses","L'axe des ordonnées","La courbe","L'origine"],0,"Axe horizontal."],
 ["programmation","« répéter 5 fois [avancer de 20] » fait avancer de…",["100 pas","25 pas","20 pas","5 pas"],0,"5 × 20."],
 ["programmation","Pour tracer un triangle équilatéral, on tourne à chaque tour de…",["120°","60°","90°","180°"],0,"360° ÷ 3."],
 ["programmation","Le bloc « demander … et attendre » sert à…",["Obtenir une entrée","Afficher une sortie","Répéter","Arrêter le programme"],0,"La réponse est une donnée d'entrée."],
 ["programmation","Pour réponse = 7, que dit « dire (réponse − 2) × 2 » ?",["10","12","5","14"],0,"(7 − 2) × 2 = 10."]
);

C.vf.push(
 ["Une fréquence peut s'écrire en pourcentage.",true,"0,25 = 25 %."],
 ["La moyenne d'une série est toujours une des valeurs de la série.",false,"Moyenne de 1 et 2 : 1,5."],
 ["Un événement certain a une probabilité de 1.",true,"Il se produit toujours."],
 ["Si on lance une pièce 10 fois, on obtient toujours 5 piles.",false,"La fréquence fluctue."],
 ["L'âge et la taille d'une personne sont proportionnels.",false,"On ne grandit pas toujours au même rythme."],
 ["50 % d'un nombre, c'est sa moitié.",true,"50/100 = 1/2."],
 ["Une situation proportionnelle se représente par des points alignés avec l'origine.",true,"C'est la caractérisation graphique."],
 ["Dans un programme, l'ordre des instructions n'a pas d'importance.",false,"Les instructions sont exécutées dans l'ordre."],
 ["« répéter 4 fois [avancer de 50 ; tourner de 90°] » trace un carré.",true,"Quatre côtés égaux et quatre angles droits."],
 ["L'aire d'un carré est proportionnelle à son côté.",false,"Si le côté double, l'aire est multipliée par 4."]
);

C.ordre.push(
 {t:"Calculer une moyenne",ic:"📊",s:["Relever toutes les valeurs","Les additionner","Compter le nombre de valeurs","Diviser la somme par ce nombre","Vérifier que le résultat est entre la plus petite et la plus grande valeur"]},
 {t:"Résoudre un problème de proportionnalité",ic:"⚖️",s:["Vérifier que la situation est proportionnelle","Repérer les données connues","Choisir une procédure (unité, linéarité, coefficient)","Calculer la valeur cherchée","Conclure par une phrase avec l'unité"]}
);
