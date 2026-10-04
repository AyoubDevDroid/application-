/* PARTIE 3 — Données, algorithmique et brevet */

/* ---------- Statistiques ---------- */
C.modules.push({id:"statistiques",n:3,i:"📊",t:"Statistiques",d:"Moyenne, médiane, étendue, fréquences",
 s:[{h:"La moyenne",l:["Somme des valeurs ÷ nombre de valeurs.","Moyenne pondérée : somme des (valeur × effectif) ÷ effectif total."]},
    {h:"La médiane",l:["On range les valeurs dans l'ordre croissant.","La <b>médiane</b> partage la série en deux groupes de même effectif.","Effectif impair : la valeur du milieu. Pair : la moyenne des deux valeurs du milieu."]},
    {h:"L'étendue et les fréquences",l:["<b>Étendue</b> = plus grande valeur − plus petite valeur (la dispersion).","<b>Fréquence</b> = effectif ÷ effectif total (en décimal ou en %)."]}],
 k:["Moyenne","Médiane","Étendue","Fréquence"]});
C.fiches.statistiques={
 intro:"Notes d'une classe, températures du mois, temps de course : les statistiques résument une série de nombres en quelques indicateurs. Au brevet, on demande de les calculer, de les comparer et de les interpréter avec une phrase.",
 s:[
  {p:"La <b>moyenne</b> est la somme des valeurs divisée par le nombre de valeurs. Quand les valeurs sont données avec leurs effectifs, on calcule une moyenne <b>pondérée</b> : (valeur × effectif) pour chaque ligne, on additionne, on divise par l'effectif total.",
   fig:{type:"flux",legende:"Notes : 12, 8, 15, 9, 16",etapes:[["Somme","12 + 8 + 15 + 9 + 16 = 60"],["Nombre de notes","5"],["Moyenne","60 ÷ 5 = 12"]]},
   q:["Moyenne de 4, 7, 10 et 15 ?",["9","10","36","8,5"],0,"36 ÷ 4 = 9."]},
  {p:"La <b>médiane</b> partage la série rangée en deux moitiés de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, au moins la moitié supérieures ou égales. On <b>range</b> d'abord les valeurs dans l'ordre croissant. Avec 7 valeurs, c'est la 4e ; avec 8 valeurs, c'est la moyenne de la 4e et de la 5e.",
   fig:{type:"flux",legende:"Série : 8, 9, 12, 15, 16, 18 (6 valeurs, rangées)",etapes:[["Valeurs du milieu","3e et 4e : 12 et 15"],["Médiane","(12 + 15) ÷ 2 = 13,5"],["Interprétation","la moitié des notes est ≤ 13,5"]]},
   att:"Erreur classique : prendre la valeur du milieu sans avoir rangé la série.",
   q:["Médiane de 3, 11, 5, 9, 7 ?",["7","5","9","35"],0,"Rangée : 3, 5, 7, 9, 11 ; valeur du milieu : 7."]},
  {p:"L'<b>étendue</b> (plus grande − plus petite valeur) mesure la dispersion : deux classes peuvent avoir la même moyenne mais des étendues très différentes. La <b>fréquence</b> d'une valeur est son effectif divisé par l'effectif total ; on l'exprime souvent en pourcentage.",
   q:["Dans une classe de 25 élèves, 10 viennent à pied. Fréquence ?",["40 %","10 %","25 %","2,5 %"],0,"10 ÷ 25 = 0,4 = 40 %."]}
 ],
 retenir:["Moyenne = somme ÷ nombre (pondérée avec les effectifs).","Médiane : série rangée, valeur qui partage en deux moitiés.","Étendue = max − min ; fréquence = effectif ÷ total."]
};

/* ---------- Probabilités ---------- */
C.modules.push({id:"probabilites",n:3,i:"🎲",t:"Probabilités",d:"Équiprobabilité, événement contraire, deux épreuves",
 s:[{h:"Vocabulaire",l:["Une <b>issue</b> est un résultat possible ; un <b>événement</b> est un ensemble d'issues.","Probabilité entre 0 (impossible) et 1 (certain)."]},
    {h:"Calculer",l:["Équiprobabilité : P(A) = nombre d'issues favorables ÷ nombre d'issues possibles.","<b>Événement contraire</b> : P(non A) = 1 − P(A).","La somme des probabilités de toutes les issues vaut 1."]},
    {h:"Deux épreuves",l:["On utilise un <b>arbre</b> ou un <b>tableau</b> à double entrée.","Deux dés : 36 issues équiprobables."]}],
 k:["Probabilité","Issue","Événement contraire"]});
C.fiches.probabilites={
 intro:"Les probabilités tombent très souvent au brevet, dans les automatismes comme dans les problèmes. Les calculs sont simples si on compte bien les issues : le plus dur est de ne pas en oublier.",
 s:[
  {p:"Une <b>issue</b> est un résultat possible d'une expérience aléatoire (obtenir 4 avec un dé). Un <b>événement</b> regroupe des issues (« obtenir un nombre pair » = {2 ; 4 ; 6}). La probabilité est toujours comprise entre 0 et 1.",
   q:["Un dé équilibré à 6 faces : P(obtenir un multiple de 3) = ?",["1/3","1/6","1/2","3/6 = 1/2"],0,"Issues favorables : 3 et 6, soit 2/6 = 1/3."]},
  {p:"Quand toutes les issues ont la même probabilité (<b>équiprobabilité</b>), P(A) = issues favorables ÷ issues possibles. L'<b>événement contraire</b> de A (« non A ») se réalise quand A ne se réalise pas : P(non A) = 1 − P(A). C'est souvent plus rapide.",
   fig:{type:"flux",legende:"Urne : 4 boules rouges, 6 vertes, 2 bleues",etapes:[["Total","12 boules"],["P(rouge)","4/12 = 1/3"],["P(pas rouge)","1 − 1/3 = 2/3"]]},
   q:["P(A) = 0,35. P(non A) = ?",["0,65","0,35","1,35","0"],0,"1 − 0,35."]},
  {p:"Pour deux épreuves (deux dés, deux tirages), on représente toutes les issues avec un <b>tableau à double entrée</b> ou un <b>arbre</b>. Deux dés à 6 faces donnent 6 × 6 = 36 issues équiprobables. La somme 7 est la plus fréquente : 6 issues sur 36.",
   fig:{type:"barres",legende:"Somme de deux dés : nombre d'issues sur 36",items:[["Somme 2",1,""],["Somme 4",3,""],["Somme 7",6,""],["Somme 10",3,""],["Somme 12",1,""]]},
   q:["Avec deux dés, P(obtenir un double 6) = ?",["1/36","1/6","2/12","1/12"],0,"Une seule issue (6 ; 6) sur 36."]}
 ],
 retenir:["Équiprobabilité : favorables ÷ possibles.","P(non A) = 1 − P(A) ; somme des probabilités = 1.","Deux épreuves : tableau ou arbre ; deux dés = 36 issues."]
};

/* ---------- Algorithmique ---------- */
C.modules.push({id:"algorithmique",n:3,i:"🤖",t:"Algorithmique et programmation",d:"Variables, boucles, conditions, blocs Scratch",
 s:[{h:"Les variables",l:["Une <b>variable</b> stocke une valeur qui peut changer : « mettre score à 0 », « ajouter 1 à score ».","Il faut suivre ses valeurs étape par étape."]},
    {h:"Les boucles",l:["« Répéter 5 fois » : un nombre de tours connu.","« Répéter jusqu'à… » : s'arrête quand une condition devient vraie."]},
    {h:"Les conditions",l:["« Si … alors … sinon … » : le programme choisit selon un test.","Exemple : si x > 10 alors dire « grand » sinon dire « petit »."]}],
 k:["Variable","Boucle","Condition"]});
C.fiches.algorithmique={
 intro:"Au brevet, un exercice porte souvent sur un programme Scratch : prévoir ce qu'il fait, le compléter, ou trouver une erreur. L'essentiel est de suivre les variables pas à pas, comme si on était l'ordinateur.",
 s:[
  {p:"Une <b>variable</b> est une boîte qui contient une valeur. « Mettre x à 3 » range 3 dans x ; « ajouter 2 à x » le remplace par 5. Pour prévoir un programme, on fait un tableau avec la valeur de chaque variable après chaque instruction.",
   fig:{type:"flux",legende:"Suivre une variable",etapes:[["mettre x à 4","x = 4"],["mettre x à x × 3","x = 12"],["ajouter −5 à x","x = 7"],["dire x","affiche 7"]]},
   q:["x vaut 5. « mettre x à x × x − 1 ». Que vaut x ?",["24","25","4","9"],0,"5 × 5 − 1 = 24."]},
  {p:"Une <b>boucle</b> répète un bloc d'instructions. « Répéter 4 fois : avancer de 50, tourner de 90° » trace un carré. « Répéter jusqu'à ce que x > 100 : multiplier x par 2 » s'arrête dès que la condition est vraie.",
   fig:{type:"flux",legende:"x = 3 ; répéter jusqu'à x > 50 : mettre x à x × 2",etapes:[["Tour 1","x = 6"],["Tour 2","x = 12"],["Tour 3","x = 24"],["Tour 4","x = 48"],["Tour 5","x = 96 > 50 : on s'arrête"]]},
   q:["Pour tracer un hexagone régulier, on répète 6 fois « avancer, tourner de… »",["60°","120°","90°","360°"],0,"360 ÷ 6 = 60°."]},
  {p:"Une <b>condition</b> « si … alors … sinon … » fait choisir le programme : on évalue le test (vrai ou faux) et on exécute la branche correspondante. Combinée à une boucle, elle permet de compter, de filtrer, de jouer.",
   q:["« Si n est pair alors diviser n par 2 sinon multiplier n par 3 et ajouter 1 ». Avec n = 7, on obtient…",["22","3,5","21","8"],0,"7 est impair : 7 × 3 + 1 = 22."]}
 ],
 retenir:["Variable : suivre ses valeurs dans un tableau.","Boucle « répéter n fois » ou « répéter jusqu'à ».","Condition « si … alors … sinon »."]
};

/* ---------- Automatismes du brevet ---------- */
C.modules.push({id:"automatismes",n:3,i:"⏱️",t:"Les automatismes du brevet",d:"20 minutes sans calculatrice : ce qu'il faut savoir faire vite",
 s:[{h:"L'épreuve",l:["Première partie de l'épreuve de maths : <b>20 minutes</b>, <b>sans calculatrice</b>, <b>6 points</b> sur 20.","Questions courtes : QCM, calculs directs, lectures de tableaux ou de graphiques."]},
    {h:"Les thèmes",l:["Calcul mental, fractions, puissances de 10, équations simples.","Proportionnalité, pourcentages, probabilités, statistiques.","Périmètres, aires, volumes, Pythagore, lecture de graphiques.","Programmes simples (valeur d'une variable)."]},
    {h:"Comment s'entraîner",l:["Un peu chaque jour, chronomètre en main, sans calculatrice.","Utilise l'« Épreuve d'automatismes » de l'onglet Jeux : 20 minutes."]}],
 k:["Automatismes"]});
C.fiches.automatismes={
 intro:"Depuis 2026, l'épreuve de maths du brevet commence par 20 minutes d'automatismes, sans calculatrice, notées sur 6 points. Ce sont des questions rapides qu'on réussit à coup sûr… si on s'est entraîné. Ce module et l'épreuve chronométrée de l'onglet Jeux sont faits pour ça.",
 s:[
  {p:"L'épreuve de mathématiques dure 2 heures. Partie 1 : <b>automatismes</b>, 20 minutes, sans calculatrice, 6 points. Partie 2 : <b>raisonnement et résolution de problèmes</b>, 1 h 40, avec calculatrice, 14 points. Pas le temps de chercher longtemps en partie 1 : il faut des réflexes.",
   fig:{type:"barres",legende:"Barème de l'épreuve de mathématiques (sur 20)",items:[["Automatismes (20 min, sans calculatrice)",6,"pts","#ff9d5c"],["Problèmes (1 h 40, calculatrice)",14,"pts","#5ad1ff"]]},
   q:["Combien de temps dure la partie automatismes ?",["20 minutes","1 heure","40 minutes","2 heures"],0,"20 minutes, sans calculatrice."]},
  {p:"Les questions couvrent tout le programme : calcul (fractions, puissances, priorités), proportionnalité et pourcentages (10 %, 25 %, 50 %), équations simples (ax + b = c), probabilités, statistiques (moyenne, médiane), géométrie (périmètres, aires, volumes, Pythagore), lecture de graphiques, petits programmes.",
   ex:"« 25 % de 80 ? » → 20. « Résoudre 3x + 2 = 14 » → x = 4. « Probabilité de tirer un as dans un jeu de 32 cartes ? » → 4/32 = 1/8.",
   q:["Sans calculatrice : 0,5 × 48 = ?",["24","2,4","96","4,8"],0,"La moitié de 48."]},
  {p:"La meilleure méthode : s'entraîner un peu chaque jour, sans calculatrice, avec un chronomètre. Repérer les automatismes qu'on rate et les retravailler (le bouton « Revoir mes erreurs » est fait pour ça). Le jour J, ne pas bloquer : passer à la question suivante et revenir à la fin.",
   q:["Que faire si une question d'automatisme bloque ?",["Passer à la suivante et revenir à la fin","Y passer 10 minutes","Sortir la calculatrice","Rendre la copie"],0,"Le temps est compté : on fait d'abord ce qu'on sait."]}
 ],
 retenir:["2 h : automatismes 20 min / 6 pts sans calculatrice, puis problèmes 1 h 40 / 14 pts.","Thèmes : calcul, proportionnalité, équations, probabilités, stats, géométrie, graphiques, programmes.","Entraînement quotidien chronométré."]
};

/* ---------- Méthode du brevet ---------- */
C.modules.push({id:"methode",n:3,i:"🎓",t:"Réussir l'épreuve",d:"Lire, rédiger, gérer son temps, vérifier",
 s:[{h:"Avant de commencer",l:["Lire tout le sujet, repérer les exercices qu'on maîtrise.","Commencer par ce qu'on sait faire."]},
    {h:"Rédiger",l:["Citer le théorème utilisé (Pythagore, Thalès…) et ses conditions.","Écrire les calculs, pas seulement le résultat.","Conclure par une phrase avec l'unité."]},
    {h:"Gérer son temps et vérifier",l:["Ne pas rester bloqué : une question non traitée n'empêche pas les suivantes.","Toute trace de recherche peut rapporter des points.","Garder 5 minutes pour relire."]}],
 k:["Rédaction"]});
C.fiches.methode={
 intro:"Au brevet, la façon de répondre compte autant que la réponse : un raisonnement bien rédigé rapporte des points même avec une petite erreur de calcul. Voici les habitudes qui font la différence.",
 s:[
  {p:"Avant d'écrire, lis tout le sujet (5 minutes bien utilisées). Les exercices sont indépendants : commence par ceux que tu maîtrises pour prendre confiance et assurer des points. Dans un exercice, les questions ne dépendent pas toujours les unes des autres : si tu bloques, tu peux souvent continuer.",
   q:["Les exercices du brevet de maths sont…",["Indépendants : on peut les faire dans l'ordre qu'on veut","À faire obligatoirement dans l'ordre","Tous liés entre eux","Tous des QCM"],0,"On commence par ce qu'on sait faire."]},
  {p:"Une bonne rédaction : on <b>justifie</b> (« Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore… »), on <b>écrit les calculs</b>, on donne le résultat avec l'<b>unité</b> et l'<b>arrondi</b> demandé, et on <b>conclut par une phrase</b> qui répond à la question.",
   fig:{type:"flux",legende:"Structure d'une réponse",etapes:["Je cite les données utiles","J'annonce la propriété ou le théorème","J'écris les calculs","Je donne le résultat (unité, arrondi)","Je conclus par une phrase"]},
   q:["Pour utiliser Thalès, que faut-il citer ?",["Les droites parallèles et les points alignés","Seulement le résultat","La formule de l'aire","Rien"],0,"Les conditions du théorème font partie de la justification."]},
  {p:"Une question non réussie n'est pas une question perdue : toute trace de recherche cohérente peut être valorisée. Garde quelques minutes à la fin pour relire : unités, arrondis, cohérence des résultats (une échelle de 50 m contre un mur de maison ? Il y a une erreur).",
   q:["Une réponse sans calcul ni justification…",["Rapporte peu ou pas de points","Rapporte tous les points","Est obligatoire","Est conseillée"],0,"La démarche compte."]}
 ],
 retenir:["Lire tout le sujet, commencer par ce qu'on maîtrise.","Justifier, calculer, unité, arrondi, phrase de conclusion.","Laisser des traces de recherche ; relire à la fin."]
};

C.lexique.push(
 ["Moyenne","Somme des valeurs divisée par leur nombre."],
 ["Médiane","Valeur qui partage la série rangée en deux groupes de même effectif."],
 ["Étendue","Différence entre la plus grande et la plus petite valeur d'une série."],
 ["Fréquence","Effectif d'une valeur divisé par l'effectif total."],
 ["Probabilité","Nombre entre 0 et 1 qui mesure la chance qu'un événement se réalise."],
 ["Issue","Résultat possible d'une expérience aléatoire."],
 ["Événement contraire","Événement « non A », qui se réalise quand A ne se réalise pas : P(non A) = 1 − P(A)."],
 ["Variable","Emplacement nommé qui stocke une valeur dans un programme."],
 ["Boucle","Instruction qui répète un bloc (un nombre de fois ou jusqu'à une condition)."],
 ["Condition","Test vrai ou faux qui fait choisir une branche du programme (si … alors … sinon)."],
 ["Automatismes","Première partie de l'épreuve de maths du brevet : 20 min sans calculatrice, 6 points."],
 ["Rédaction","Façon d'écrire une réponse : justification, calculs, résultat, phrase de conclusion."]
);

/* La banque d'automatismes : questions courtes, faisables sans calculatrice (elles alimentent l'épreuve chronométrée) */
C.quiz.push(
 ["statistiques","Notes : 6, 14, 10, 12, 8. Médiane ?",["10","12","8","50"],0,"Rangée : 6, 8, 10, 12, 14."],
 ["statistiques","Étendue de la série 3, 17, 9, 12 ?",["14","17","3","41"],0,"17 − 3."],
 ["statistiques","Moyenne de 10, 12 et 17 ?",["13","12","39","11"],0,"39 ÷ 3."],
 ["probabilites","Probabilité de tirer un cœur dans un jeu de 32 cartes ?",["1/4","1/32","1/8","1/2"],0,"8 cœurs sur 32."],
 ["probabilites","P(A) = 3/8. P(non A) = ?",["5/8","3/8","1/8","8/3"],0,"1 − 3/8."],
 ["probabilites","Avec deux dés, combien d'issues possibles ?",["36","12","6","11"],0,"6 × 6."],
 ["algorithmique","x = 2. « Répéter 3 fois : mettre x à x + 4 ». x vaut…",["14","6","12","10"],0,"2 → 6 → 10 → 14."],
 ["algorithmique","Pour tracer un triangle équilatéral, le lutin tourne de…",["120°","60°","90°","180°"],0,"Angle extérieur : 180 − 60."],
 ["automatismes","25 % de 120 = ?",["30","25","40","60"],0,"Le quart de 120."],
 ["automatismes","Résoudre 3x + 5 = 20.",["x = 5","x = 25/3","x = 15","x = 7"],0,"3x = 15."],
 ["automatismes","2/3 + 1/6 = ?",["5/6","3/9","1/2","3/6"],0,"4/6 + 1/6."],
 ["automatismes","0,3 × 0,2 = ?",["0,06","0,6","6","0,5"],0,"3 × 2 = 6, deux chiffres après la virgule."],
 ["automatismes","10³ × 10⁻⁵ = ?",["10⁻²","10⁸","10⁻¹⁵","10²"],0,"3 − 5 = −2."],
 ["automatismes","Le périmètre d'un cercle de rayon 5 cm est…",["10π cm","25π cm","5π cm","π × 25 cm²"],0,"2 × π × 5."],
 ["automatismes","L'aire d'un disque de rayon 3 cm est…",["9π cm²","6π cm²","3π cm²","9 cm²"],0,"π × 3²."],
 ["automatismes","Aire d'un triangle de base 8 cm et de hauteur 5 cm ?",["20 cm²","40 cm²","13 cm²","20 cm"],0,"8 × 5 ÷ 2."],
 ["automatismes","Volume d'un cube d'arête 3 cm ?",["27 cm³","9 cm³","18 cm³","12 cm³"],0,"3³."],
 ["automatismes","Un triangle rectangle a des côtés de l'angle droit de 6 et 8. L'hypoténuse mesure…",["10","14","100","48"],0,"√(36 + 64) = 10."],
 ["automatismes","3 kg de pommes coûtent 4,50 €. Prix de 5 kg ?",["7,50 €","9 €","6 €","22,50 €"],0,"1,50 € le kg."],
 ["automatismes","Un prix passe de 50 € à 60 €. Augmentation en pourcentage ?",["20 %","10 %","60 %","16,7 %"],0,"10 ÷ 50 = 0,2."],
 ["automatismes","Écriture décimale de 7/4 ?",["1,75","7,4","1,4","0,57"],0,"7 ÷ 4."],
 ["automatismes","−3 − 5 = ?",["−8","2","−2","8"],0,"On recule de 5 depuis −3."],
 ["automatismes","(−4)² = ?",["16","−16","8","−8"],0,"(−4) × (−4)."],
 ["automatismes","5 + 3 × 4 = ?",["17","32","27","12"],0,"La multiplication est prioritaire."],
 ["automatismes","1,5 h = ?",["90 min","150 min","105 min","1 h 50"],0,"60 + 30."],
 ["automatismes","Une voiture roule 30 min à 80 km/h. Distance ?",["40 km","80 km","160 km","24 km"],0,"Moitié d'une heure."],
 ["automatismes","Un nombre dont le carré vaut 81 :",["−9","8,1","40,5","−81"],0,"(−9)² = 81 (et 9 aussi)."],
 ["automatismes","f(x) = 2x − 1. f(−3) = ?",["−7","−5","7","5"],0,"2 × (−3) − 1."],
 ["automatismes","Convertir 2,5 L en cm³.",["2 500 cm³","250 cm³","25 cm³","25 000 cm³"],0,"1 L = 1 000 cm³."],
 ["automatismes","Arrondi au dixième de 3,46 ?",["3,5","3,4","3","3,46"],0,"Le chiffre des centièmes est 6."],
 ["automatismes","Médiane de 2, 4, 6, 8 ?",["5","4","6","20"],0,"(4 + 6) ÷ 2."],
 ["automatismes","Un dé équilibré : P(nombre ≥ 5) = ?",["1/3","1/6","1/2","5/6"],0,"5 et 6 : 2 issues sur 6."],
 ["automatismes","Factoriser x² − 9.",["(x − 3)(x + 3)","(x − 3)²","(x − 9)(x + 9)","x(x − 9)"],0,"Identité a² − b²."],
 ["automatismes","Développer 2(x + 7).",["2x + 14","2x + 7","x + 14","2x + 9"],0,"Distributivité."],
 ["automatismes","Combien de minutes dans 2 h 15 ?",["135","215","120","150"],0,"120 + 15."],
 ["automatismes","Un angle de 30° et un angle de 70° dans un triangle. Le 3e angle ?",["80°","100°","90°","70°"],0,"180 − 100."],
 ["methode","À la fin d'une réponse de problème, on écrit…",["Une phrase de conclusion avec l'unité","Seulement le nombre","Le théorème","Rien"],0,"La conclusion répond à la question."],
 ["methode","Que rapporte une démarche juste avec une petite erreur de calcul ?",["Une partie des points","Zéro","Tous les points","Un malus"],0,"La démarche est valorisée."]
);

C.vf.push(
 ["La médiane se calcule sur une série rangée dans l'ordre croissant.",true,"Sinon on prend une mauvaise valeur."],
 ["La moyenne et la médiane sont toujours égales.",false,"Elles peuvent être très différentes (une valeur extrême change la moyenne)."],
 ["P(non A) = 1 − P(A).",true,"C'est l'événement contraire."],
 ["Avec deux dés, la somme 12 est aussi probable que la somme 7.",false,"1 issue sur 36 pour 12, 6 sur 36 pour 7."],
 ["La partie automatismes du brevet se fait avec la calculatrice.",false,"Elle se fait sans calculatrice."],
 ["La partie automatismes vaut 6 points sur 20.",true,"Les problèmes valent 14 points."],
 ["Dans un programme, une boucle « répéter jusqu'à » s'arrête quand la condition devient vraie.",true,"C'est son principe."]
);

C.ordre.push(
 {t:"Calculer une médiane",ic:"📊",s:["Ranger les valeurs dans l'ordre croissant","Compter le nombre de valeurs","Repérer la ou les valeurs du milieu","Si deux valeurs au milieu, faire leur moyenne","Interpréter avec une phrase"]},
 {t:"Rédiger une réponse au brevet",ic:"🎓",s:["Citer les données utiles","Annoncer la propriété ou le théorème","Écrire les calculs","Donner le résultat avec l'unité et l'arrondi","Conclure par une phrase"]}
);
