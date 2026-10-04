/* PARTIE 3 — Données, probabilités, proportionnalité, fonctions, pensée informatique (programme de 4e, BO n° 10 du 5 mars 2026) */

/* ---------- Statistiques ---------- */
C.modules.push({id:"statistiques",n:3,i:"📊",t:"Statistiques",d:"Moyenne pondérée, médiane, étendue, comparer des séries",
 s:[{h:"La moyenne pondérée",l:["Quand les valeurs ont des effectifs (ou des coefficients) : moyenne = (somme des valeur × effectif) ÷ effectif total.","Notes 12 (coef. 2) et 15 (coef. 1) : (12 × 2 + 15 × 1) ÷ 3 = 13."]},
    {h:"La médiane",l:["On <b>range</b> la série dans l'ordre croissant.","La médiane partage la série en deux groupes de même effectif : au moins la moitié des valeurs sont inférieures ou égales à elle, au moins la moitié supérieures ou égales.","Effectif impair : la valeur du milieu ; effectif pair : on prend en général la moyenne des deux valeurs du milieu."]},
    {h:"L'étendue",l:["Étendue = plus grande valeur − plus petite valeur.","Elle mesure la <b>dispersion</b> des valeurs."]},
    {h:"Interpréter",l:["Une valeur extrême fait beaucoup bouger la moyenne, très peu la médiane.","Deux séries de même moyenne peuvent être très différentes : on compare aussi médiane et étendue."]}],
 k:["Moyenne pondérée","Médiane","Étendue","Effectif"]});
C.fiches.statistiques={
 intro:"Dans une entreprise, 9 employés gagnent 2 000 € et le patron 50 000 €. Salaire moyen : 6 800 €… alors que personne sauf le patron ne gagne autant ! Le salaire médian, lui, vaut 2 000 €. Choisir le bon indicateur, c'est ne pas se faire manipuler par les chiffres.",
 s:[
  {p:"La <b>moyenne pondérée</b> tient compte des effectifs (ou coefficients). Au brevet blanc, Léo a 14 en maths (coef. 3), 11 en français (coef. 3) et 16 en sciences (coef. 2) : moyenne = (14 × 3 + 11 × 3 + 16 × 2) ÷ (3 + 3 + 2) = 107 ÷ 8 ≈ 13,4.",
   fig:{type:"flux",legende:"Pointures de 20 élèves : moyenne pondérée",etapes:[["Valeurs × effectifs","36 × 4 + 37 × 7 + 38 × 6 + 39 × 3"],["Somme","144 + 259 + 228 + 117 = 748"],["Effectif total","4 + 7 + 6 + 3 = 20"],["Moyenne","748 ÷ 20 = 37,4"]]},
   q:["Notes : 10 (coef. 1) et 16 (coef. 2). Moyenne ?",["14","13","26","12"],0,"(10 + 32) ÷ 3 = 14."]},
  {p:"La <b>médiane</b> partage la série <b>rangée</b> en deux groupes de même effectif. Série 3 ; 5 ; 8 ; 12 ; 20 (5 valeurs) : médiane 8. Série 3 ; 5 ; 8 ; 12 ; 20 ; 21 (6 valeurs) : entre 8 et 12, on prend en général (8 + 12) ÷ 2 = 10.",
   fig:{type:"svg",legende:"Série rangée de 7 valeurs : la médiane est la 4e",svg:"<svg viewBox='0 0 280 70'>"+[2,4,7,9,10,15,30].map((v,i)=>"<rect x='"+(10+i*38)+"' y='18' width='32' height='32' rx='6' fill='"+(i===3?"var(--pri)":"#ffffff22")+"'/><text x='"+(26+i*38)+"' y='39' fill='#fff' font-size='13' text-anchor='middle' font-weight='900'>"+v+"</text>").join("")+"<text x='140' y='66' fill='var(--pri)' font-size='11' text-anchor='middle'>3 valeurs de chaque côté</text></svg>"},
   att:"Il faut TOUJOURS ranger la série avant de chercher la médiane.",
   q:["Médiane de 14 ; 3 ; 9 ; 21 ; 6 ?",["9","21","10,6","6"],0,"Rangée : 3 ; 6 ; 9 ; 14 ; 21 → valeur du milieu 9."]},
  {p:"L'<b>étendue</b> mesure la dispersion : plus grande valeur − plus petite. Deux classes ont 12 de moyenne : la première a une étendue de 4 (notes entre 10 et 14), la seconde de 18 (notes entre 1 et 19). Elles sont très différentes ! Et une <b>valeur extrême</b> modifie beaucoup la moyenne mais presque pas la médiane.",
   fig:{type:"barres",legende:"Salaires de 10 personnes : 9 × 2 000 € et 1 × 50 000 €",items:[["Moyenne",6800,"€","#ff8a3d"],["Médiane",2000,"€","#2ed47a"]]},
   q:["Étendue de 12 ; 7 ; 19 ; 4 ; 15 ?",["15","19","4","11,4"],0,"19 − 4 = 15."]}
 ],
 retenir:["Moyenne pondérée = Σ(valeur × effectif) ÷ effectif total.","Médiane : ranger, puis prendre le milieu.","Étendue = max − min.","Valeur extrême : la moyenne bouge, la médiane presque pas."]
};

/* ---------- Probabilités ---------- */
C.modules.push({id:"probabilites",n:3,i:"🎲",t:"Probabilités",d:"Événements, contraire, réunion, intersection, deux épreuves",
 s:[{h:"Le langage des ensembles",l:["L'ensemble de toutes les issues est l'<b>univers</b>.","Un <b>événement</b> est une partie de l'univers. L'événement impossible est l'ensemble vide ∅.","A ∩ B (« A et B ») : les issues communes. A ∪ B (« A ou B ») : les issues de A ou de B (ou des deux)."]},
    {h:"L'événement contraire",l:["Le contraire de A, noté Ā (« non A »), contient toutes les issues qui ne sont pas dans A.","<b>P(Ā) = 1 − P(A)</b>."]},
    {h:"Deux épreuves",l:["On représente les issues par un <b>arbre</b> ou un <b>tableau</b> à double entrée.","Deux dés : 6 × 6 = 36 issues équiprobables.","Deux pièces : PP, PF, FP, FF."]},
    {h:"Fluctuation",l:["En répétant une expérience, les fréquences observées varient d'une série à l'autre : c'est la <b>fluctuation</b>.","On compare la distribution des fréquences à celle des probabilités."]}],
 k:["Événement","Événement contraire","Univers","Arbre de probabilités"]});
C.fiches.probabilites={
 intro:"Au jeu de l'oie, quelle somme sort le plus souvent avec deux dés ? Le 7 ! Il y a 6 façons de l'obtenir, contre une seule pour le 2 ou le 12. Pour le voir, il faut lister proprement toutes les issues : c'est là que les tableaux et les arbres deviennent indispensables.",
 s:[
  {p:"Avec un dé : l'univers est {1 ; 2 ; 3 ; 4 ; 5 ; 6}. Soit A = « obtenir un nombre pair » = {2 ; 4 ; 6} et B = « obtenir au moins 5 » = {5 ; 6}. Alors <b>A ∩ B</b> = {6} (pair ET au moins 5) et <b>A ∪ B</b> = {2 ; 4 ; 5 ; 6} (pair OU au moins 5).",
   fig:{type:"svg",legende:"A ∩ B : la zone commune ; A ∪ B : tout ce qui est coloré",svg:"<svg viewBox='0 0 260 120'><rect x='5' y='5' width='250' height='110' rx='10' fill='none' stroke='#fff'/><circle cx='100' cy='60' r='45' fill='#3db5ff55' stroke='#3db5ff' stroke-width='2'/><circle cx='160' cy='60' r='40' fill='#ff8a3d55' stroke='#ff8a3d' stroke-width='2'/><g fill='#fff' font-size='14' text-anchor='middle'><text x='80' y='55'>2</text><text x='90' y='80'>4</text><text x='130' y='65'>6</text><text x='180' y='65'>5</text><text x='30' y='30'>1</text><text x='230' y='100'>3</text></g><g font-size='12' font-weight='900'><text x='65' y='25' fill='#3db5ff'>A</text><text x='185' y='28' fill='#ff8a3d'>B</text></g></svg>"},
   q:["Avec un dé, A = {1 ; 2 ; 3} et B = {3 ; 4}. A ∩ B = ?",["{3}","{1 ; 2 ; 3 ; 4}","∅","{1 ; 2}"],0,"Seul 3 est dans les deux."]},
  {p:"L'<b>événement contraire</b> de A contient toutes les issues qui ne sont pas dans A : <b>P(Ā) = 1 − P(A)</b>. S'il y a 30 % de chances de pluie, il y a 70 % de chances qu'il ne pleuve pas. Avec un dé : P(« ne pas faire 6 ») = 1 − 1/6 = 5/6.",
   q:["P(A) = 0,35. P(Ā) = ?",["0,65","0,35","1,35","−0,35"],0,"1 − 0,35."]},
  {p:"Pour une <b>expérience à deux épreuves</b>, on liste les issues avec un <b>tableau</b> ou un <b>arbre</b>. Deux pièces : PP, PF, FP, FF (4 issues équiprobables), donc P(« une pile et une face ») = 2/4 = 1/2. Deux dés : 36 cases ; la somme 7 apparaît 6 fois, P(7) = 6/36 = 1/6.",
   fig:{type:"svg",legende:"Arbre de deux lancers de pièce",svg:"<svg viewBox='0 0 260 120'><g stroke='#fff' stroke-width='2'><path d='M20 60L90 30M20 60L90 90M110 30L180 15M110 30L180 45M110 90L180 75M110 90L180 105'/></g><g fill='#fff' font-size='13'><text x='93' y='35'>P</text><text x='93' y='95'>F</text><text x='184' y='19'>P → PP</text><text x='184' y='49'>F → PF</text><text x='184' y='79'>P → FP</text><text x='184' y='109'>F → FF</text></g><g fill='#ffc83d' font-size='10'><text x='45' y='38'>1/2</text><text x='45' y='88'>1/2</text></g></svg>"},
   q:["On lance deux dés. Probabilité d'obtenir un double (1-1, 2-2…) ?",["1/6","1/36","1/12","2/6"],0,"6 doubles sur 36 issues."]},
  {p:"Si on <b>répète</b> une expérience (par exemple 50 lancers de dé, réels ou simulés au tableur), les fréquences de chaque face <b>fluctuent</b> d'une série à l'autre et ne sont pas exactement égales à 1/6. On compare le diagramme des fréquences observées avec celui des probabilités.",
   q:["On lance 30 fois un dé équilibré. Combien de 6 obtient-on ?",["On ne peut pas le prévoir exactement (environ 5)","Exactement 5","Exactement 6","Jamais plus de 5"],0,"La fréquence fluctue autour de 1/6."]}
 ],
 retenir:["A ∩ B : A et B ; A ∪ B : A ou B ; ∅ : impossible.","P(Ā) = 1 − P(A).","Deux épreuves : arbre ou tableau pour lister les issues.","Les fréquences observées fluctuent."]
};

/* ---------- Proportionnalité ---------- */
C.modules.push({id:"proportionnalite",n:3,i:"💯",t:"Ratios, vitesses, pourcentages",d:"Grandeurs quotients, ratio, quatrième proportionnelle, coefficient multiplicateur",
 s:[{h:"Grandeurs quotients",l:["Une <b>grandeur quotient</b> est le quotient de deux grandeurs : vitesse (km/h), prix unitaire (€/kg), débit (L/min), densité de population (hab./km²).","v = d ÷ t ; d = v × t ; t = d ÷ v."]},
    {h:"Ratios",l:["Deux nombres sont dans le <b>ratio</b> 2 : 3 si a/2 = b/3.","Partager 50 € dans le ratio 2 : 3 : 5 parts au total, une part = 10 €, donc 20 € et 30 €."]},
    {h:"Quatrième proportionnelle",l:["Si a/b = c/x, alors x = b × c ÷ a.","5 kg coûtent 12 €, 8 kg coûtent 8 × 12 ÷ 5 = 19,20 €."]},
    {h:"Évolutions en pourcentage",l:["Augmenter de t % : multiplier par <b>1 + t/100</b>.","Diminuer de t % : multiplier par <b>1 − t/100</b>.","+20 % : × 1,2 ; −15 % : × 0,85."]}],
 k:["Grandeur quotient","Ratio","Quatrième proportionnelle","Coefficient multiplicateur"]});
C.fiches.proportionnalite={
 intro:"−30 % puis −20 % de plus en caisse : est-ce −50 % ? Non ! C'est −44 %. Les coefficients multiplicateurs évitent ce genre de piège. Vitesses, débits, ratios, pourcentages : en 4e, la proportionnalité devient un vrai outil de calcul.",
 s:[
  {p:"Une <b>grandeur quotient</b> est obtenue en divisant deux grandeurs. La <b>vitesse moyenne</b> v = d ÷ t : 150 km en 2 h → 75 km/h. Le <b>prix unitaire</b> : 3,60 € pour 1,5 kg → 2,40 €/kg. Le <b>débit</b> : 120 L en 8 min → 15 L/min.",
   fig:{type:"flux",legende:"Convertir une durée pour calculer une vitesse",etapes:[["Distance","45 km"],["Durée","1 h 30 min = 1,5 h"],["Vitesse","45 ÷ 1,5 = 30 km/h"]]},
   att:"1 h 30 min ne vaut pas 1,30 h mais 1,5 h ! Et 1 h 15 min = 1,25 h.",
   q:["Un cycliste parcourt 36 km en 1 h 30 min. Sa vitesse moyenne ?",["24 km/h","27,7 km/h","36 km/h","54 km/h"],0,"36 ÷ 1,5 = 24."]},
  {p:"Un <b>ratio</b> compare deux quantités. Une peinture rose : blanc et rouge dans le ratio 3 : 1, soit 3 parts de blanc pour 1 de rouge. Pour 2 L : 4 parts de 0,5 L, donc 1,5 L de blanc et 0,5 L de rouge. C'est aussi un <b>partage proportionnel</b>.",
   q:["Partager 60 € entre Ana et Ben dans le ratio 1 : 2. Ana reçoit…",["20 €","30 €","40 €","15 €"],0,"3 parts de 20 € : Ana 1 part, Ben 2 parts."]},
  {p:"La <b>quatrième proportionnelle</b> : si a/b = c/x, alors x = b × c ÷ a. Une voiture consomme 6 L pour 100 km ; pour 350 km : x = 350 × 6 ÷ 100 = 21 L.",
   q:["4 stylos coûtent 6 €. Combien coûtent 10 stylos ?",["15 €","24 €","12 €","2,40 €"],0,"10 × 6 ÷ 4 = 15."]},
  {p:"Le <b>coefficient multiplicateur</b> : augmenter de t %, c'est multiplier par (1 + t/100) ; diminuer de t %, c'est multiplier par (1 − t/100). Un jean à 60 € soldé à −25 % : 60 × 0,75 = 45 €. Deux baisses successives de 30 % puis 20 % : × 0,7 × 0,8 = × 0,56, soit −44 %.",
   fig:{type:"barres",legende:"Prix après −30 % puis −20 % (100 € au départ)",items:[["Départ",100,"€","#3db5ff"],["Après −30 %",70,"€","#ffc83d"],["Après −20 %",56,"€","#2ed47a"]]},
   q:["Un prix de 80 € augmente de 15 %. Nouveau prix ?",["92 €","95 €","68 €","81,15 €"],0,"80 × 1,15 = 92."]}
 ],
 retenir:["v = d ÷ t (durées en heures décimales).","Ratio a : b : on partage en a + b parts égales.","Quatrième proportionnelle : x = b × c ÷ a.","+t % : × (1 + t/100) ; −t % : × (1 − t/100)."]
};

/* ---------- Fonctions ---------- */
C.modules.push({id:"fonctions",n:3,i:"📈",t:"Programmes de calcul et dépendance",d:"Programme de calcul, remonter, formule, graphique",
 s:[{h:"Programme de calcul",l:["Une suite d'opérations appliquée à un nombre de départ.","Avec x : « × 3, puis + 5 » donne 3x + 5."]},
    {h:"Remonter un programme",l:["Pour retrouver le nombre de départ, on fait les opérations <b>inverses</b>, dans l'ordre <b>inverse</b>.","Résultat 20 avec « × 3 puis + 5 » : 20 − 5 = 15, 15 ÷ 3 = 5."]},
    {h:"Dépendance entre grandeurs",l:["Une formule exprime une grandeur en fonction d'une autre : prix = 2,5 × n + 4.","Un graphique la représente : on lit l'ordonnée correspondant à une abscisse."]}],
 k:["Programme de calcul","Formule","Graphique cartésien"]});
C.fiches.fonctions={
 intro:"« Pense à un nombre, multiplie-le par 2, ajoute 6, divise par 2, enlève le nombre de départ… tu trouves 3 ! » Ces tours de magie sont des programmes de calcul. Les écrire avec x permet de comprendre le truc… et d'en inventer.",
 s:[
  {p:"Un <b>programme de calcul</b> transforme un nombre de départ. Programme : « choisir un nombre ; ajouter 4 ; multiplier par 3 ». Pour 2 : (2 + 4) × 3 = 18. Pour x : <b>(x + 4) × 3 = 3x + 12</b>.",
   fig:{type:"flux",legende:"Appliquer le programme à x",etapes:[["Départ","x"],["Ajouter 4","x + 4"],["Multiplier par 3","3(x + 4)"],["Développer","3x + 12"]]},
   q:["Programme : « × 2, puis − 7 ». Résultat pour −3 ?",["−13","−1","13","1"],0,"−3 × 2 = −6 ; −6 − 7 = −13."]},
  {p:"Pour <b>remonter</b> un programme (retrouver le nombre de départ), on applique les opérations <b>inverses</b> dans l'ordre <b>inverse</b>. Programme « × 4 puis − 3 », résultat 25 : 25 + 3 = 28, puis 28 ÷ 4 = 7. On peut aussi résoudre l'équation 4x − 3 = 25.",
   q:["Programme « + 5 puis × 2 ». On obtient 30. Nombre de départ ?",["10","20","12,5","65"],0,"30 ÷ 2 = 15, puis 15 − 5 = 10."]},
  {p:"Une <b>formule</b> traduit la dépendance d'une grandeur en fonction d'une autre. Location de kayak : 4 € de caution + 2,50 € par heure : P = 2,5h + 4. On peut la représenter par un <b>tableau de valeurs</b> ou par un <b>graphique</b> (ici, des points alignés sur une droite qui ne passe pas par l'origine : ce n'est pas proportionnel).",
   fig:{type:"svg",legende:"Prix P (€) en fonction de la durée h (heures) : P = 2,5h + 4",svg:"<svg viewBox='0 0 240 130'><path d='M25 115H230M25 120V5' stroke='#fff' stroke-width='2'/><path d='M25 95L215 25' stroke='var(--pri)' stroke-width='3' class='draw'/>"+[0,1,2,3,4].map(i=>"<circle cx='"+(25+i*45)+"' cy='"+(95-i*16.6)+"' r='4' fill='#ffc83d'/>").join("")+"<g fill='#fff' font-size='9'><text x='12' y='98'>4</text><text x='66' y='126'>1</text><text x='111' y='126'>2</text><text x='156' y='126'>3</text><text x='201' y='126'>4</text><text x='30' y='12'>€</text></g></svg>"},
   q:["Avec P = 2,5h + 4, combien coûtent 3 heures ?",["11,50 €","7,50 €","19,50 €","13 €"],0,"2,5 × 3 + 4 = 11,5."]}
 ],
 retenir:["Programme de calcul ↔ expression littérale.","Remonter : opérations inverses, ordre inverse.","Formule → tableau → graphique.","Droite qui ne passe pas par l'origine : pas proportionnel."]
};

/* ---------- Programmation ---------- */
C.modules.push({id:"programmation",n:3,i:"🤖",t:"Conditions et variables",d:"Si… alors… sinon, variables, écrire et modifier un programme",
 s:[{h:"Les conditions",l:["Une <b>condition</b> est vraie ou fausse : « réponse &gt; 10 », « x = 0 ».","<b>si</b> condition <b>alors</b> … <b>sinon</b> … : le programme choisit un chemin."]},
    {h:"Les variables",l:["Une <b>variable</b> est une « boîte » nommée qui contient une valeur.","« mettre score à 0 », « ajouter 1 à score » : la valeur change pendant le programme."]},
    {h:"Écrire et modifier",l:["On décompose le problème en étapes.","On teste le programme sur des exemples dont on connaît la réponse."]}],
 k:["Variable","Instruction conditionnelle","Programme"]});
C.fiches.programmation={
 intro:"Un jeu vidéo doit sans arrêt décider : SI le joueur touche un ennemi, ALORS il perd une vie, SINON il continue. Et il doit retenir le score, le nombre de vies, le niveau… dans des variables. Conditions et variables sont les deux briques de base de tous les programmes.",
 s:[
  {p:"Une <b>instruction conditionnelle</b> « si … alors … sinon … » exécute un bloc ou l'autre selon qu'une condition est vraie ou fausse. Exemple : si note ≥ 10 alors dire « Admis » sinon dire « Refusé ».",
   fig:{type:"flux",legende:"Programme « Pair ou impair ? »",etapes:[["demander un nombre","réponse"],["si (réponse modulo 2) = 0","alors dire « pair »"],["sinon","dire « impair »"],["Test avec 7","7 modulo 2 = 1 → « impair »"]]},
   q:["« si x > 5 alors dire A sinon dire B ». Pour x = 5, le programme dit…",["B","A","A puis B","Rien"],0,"5 > 5 est faux : on exécute le sinon."]},
  {p:"Une <b>variable</b> est une case mémoire qui porte un nom et contient une valeur qui peut changer. On l'<b>initialise</b> (« mettre compteur à 0 »), puis on la <b>modifie</b> (« ajouter 1 à compteur »). Avec une boucle, une variable sert à compter ou à additionner.",
   fig:{type:"flux",legende:"Que contient total à la fin ?",etapes:[["mettre total à 0",""],["répéter 4 fois","ajouter 5 à total"],["Tours","5 → 10 → 15 → 20"],["Fin","total = 20"]]},
   q:["« mettre a à 3 ; mettre a à a × 2 ; ajouter 1 à a ». Valeur finale de a ?",["7","6","8","4"],0,"3 → 6 → 7."]},
  {p:"Pour <b>écrire</b> un programme, on décompose : quelles entrées ? quels calculs ? quelles conditions ? quelle sortie ? Puis on le <b>teste</b> sur des cas simples, y compris les cas limites (0, valeur égale au seuil…). Pour le <b>modifier</b>, on change un paramètre ou une condition et on observe l'effet.",
   q:["Un programme doit dire « gel » si la température est inférieure ou égale à 0. Quelle condition ?",["température ≤ 0","température < 0","température > 0","température = 0"],0,"« inférieure ou égale » : ≤ (0 compris)."]}
 ],
 retenir:["si … alors … sinon … : deux chemins selon une condition.","Variable : nom + valeur qui peut changer ; l'initialiser.","Tester les cas limites.","Décomposer : entrées, traitements, sorties."]
};

C.lexique.push(
 ["Moyenne pondérée","Somme des produits valeur × effectif (ou coefficient), divisée par l'effectif total."],
 ["Médiane","Valeur qui partage une série rangée en deux groupes de même effectif."],
 ["Étendue","Différence entre la plus grande et la plus petite valeur d'une série."],
 ["Effectif","Nombre de fois où une valeur apparaît dans une série."],
 ["Univers","Ensemble de toutes les issues d'une expérience aléatoire."],
 ["Événement","Partie de l'univers, c'est-à-dire ensemble d'issues."],
 ["Événement contraire","Événement formé des issues qui ne sont pas dans A ; P(Ā) = 1 − P(A)."],
 ["Arbre de probabilités","Schéma en branches qui représente les issues d'une expérience à plusieurs épreuves."],
 ["Grandeur quotient","Grandeur obtenue en divisant deux grandeurs (vitesse en km/h, prix en €/kg…)."],
 ["Ratio","Comparaison de deux quantités sous la forme a : b."],
 ["Quatrième proportionnelle","Nombre x tel que a/b = c/x."],
 ["Coefficient multiplicateur","Nombre par lequel on multiplie pour appliquer une évolution en pourcentage."],
 ["Programme de calcul","Suite d'opérations appliquée à un nombre de départ."],
 ["Formule","Égalité qui permet de calculer une grandeur à partir d'une autre."],
 ["Graphique cartésien","Représentation dans un repère d'une grandeur en fonction d'une autre."],
 ["Variable","En programmation, case mémoire nommée dont la valeur peut changer."],
 ["Instruction conditionnelle","Bloc « si … alors … sinon … » qui choisit quoi exécuter selon une condition."],
 ["Programme","Suite d'instructions exécutées par un ordinateur."]
);

C.quiz.push(
 ["statistiques","Notes : 8 (coef. 1), 14 (coef. 3). Moyenne ?",["12,5","11","22","14"],0,"(8 + 42) ÷ 4 = 12,5."],
 ["statistiques","Médiane de 2 ; 5 ; 7 ; 10 ?",["6","5","7","6,5"],0,"(5 + 7) ÷ 2 = 6."],
 ["statistiques","Étendue de 15 ; 8 ; 22 ; 11 ?",["14","22","8","56"],0,"22 − 8."],
 ["statistiques","On ajoute une valeur très grande à une série. Qu'est-ce qui change le plus ?",["La moyenne","La médiane","Rien","L'effectif de chaque valeur"],0,"La moyenne est sensible aux valeurs extrêmes."],
 ["statistiques","Avant de chercher une médiane, il faut…",["Ranger la série","Calculer la moyenne","Calculer l'étendue","Supprimer les extrêmes"],0,"Toujours ranger d'abord."],
 ["probabilites","P(A) = 3/8. P(Ā) = ?",["5/8","3/8","8/3","1/8"],0,"1 − 3/8."],
 ["probabilites","A ∪ B se lit…",["A ou B","A et B","Non A","A moins B"],0,"Réunion : « ou »."],
 ["probabilites","On lance deux pièces. Combien d'issues ?",["4","2","3","8"],0,"PP, PF, FP, FF."],
 ["probabilites","Deux dés : probabilité que la somme fasse 12 ?",["1/36","1/12","1/6","2/36"],0,"Seulement 6-6."],
 ["probabilites","L'événement impossible se note…",["∅","Ω","1","Ā"],0,"L'ensemble vide."],
 ["proportionnalite","200 km en 2 h 30 min. Vitesse moyenne ?",["80 km/h","100 km/h","87 km/h","66,7 km/h"],0,"200 ÷ 2,5."],
 ["proportionnalite","À 90 km/h, distance parcourue en 40 min ?",["60 km","36 km","90 km","135 km"],0,"40 min = 2/3 h ; 90 × 2/3 = 60."],
 ["proportionnalite","Baisse de 40 % : on multiplie par…",["0,6","0,4","1,4","−0,4"],0,"1 − 0,40."],
 ["proportionnalite","Hausse de 5 % : on multiplie par…",["1,05","1,5","0,95","5"],0,"1 + 0,05."],
 ["proportionnalite","Partager 35 € dans le ratio 3 : 4. La plus grande part ?",["20 €","15 €","28 €","17,50 €"],0,"7 parts de 5 € ; 4 × 5 = 20."],
 ["proportionnalite","+10 % puis −10 % : le prix…",["Baisse de 1 %","Revient au départ","Augmente de 1 %","Baisse de 10 %"],0,"1,1 × 0,9 = 0,99."],
 ["fonctions","Programme « − 3 puis × 5 ». Pour x, on obtient…",["5(x − 3)","5x − 3","x − 15","5x + 3"],0,"On soustrait d'abord, puis on multiplie tout."],
 ["fonctions","Programme « × 2 puis + 1 », résultat 15. Départ ?",["7","8","31","14"],0,"15 − 1 = 14 ; 14 ÷ 2 = 7."],
 ["fonctions","P = 3n + 2. Valeur de P pour n = 0 ?",["2","0","5","3"],0,"3 × 0 + 2."],
 ["programmation","« si x < 0 alors dire négatif sinon dire positif ». Pour x = 0 ?",["positif","négatif","rien","erreur"],0,"0 < 0 est faux."],
 ["programmation","« mettre n à 1 ; répéter 3 fois : mettre n à n × 2 ». Valeur finale ?",["8","6","4","3"],0,"1 → 2 → 4 → 8."],
 ["programmation","Une variable sert à…",["Mémoriser une valeur qui peut changer","Répéter des instructions","Tracer un trait","Arrêter le programme"],0,"C'est une case mémoire nommée."]
);

C.vf.push(
 ["La médiane d'une série est toujours égale à sa moyenne.",false,"Exemple : 1 ; 2 ; 30 : médiane 2, moyenne 11."],
 ["L'étendue mesure la dispersion d'une série.",true,"Écart entre extrêmes."],
 ["La moyenne est peu sensible aux valeurs extrêmes.",false,"C'est la médiane qui l'est peu."],
 ["P(A) + P(Ā) = 1.",true,"A et son contraire couvrent toutes les issues."],
 ["Avec deux dés, la somme 7 est aussi probable que la somme 2.",false,"6/36 contre 1/36."],
 ["Baisser de 20 % puis de 30 %, c'est baisser de 50 %.",false,"0,8 × 0,7 = 0,56 : baisse de 44 %."],
 ["1 h 15 min = 1,25 h.",true,"15 min = 1/4 h."],
 ["Augmenter de 100 %, c'est doubler.",true,"× 2."],
 ["Pour remonter un programme de calcul, on fait les opérations inverses dans l'ordre inverse.",true,"On « défait » de la fin vers le début."],
 ["Dans « si … alors … sinon … », les deux blocs sont toujours exécutés.",false,"Un seul est exécuté, selon la condition."]
);

C.ordre.push(
 {t:"Déterminer une médiane",ic:"📊",s:["Ranger les valeurs dans l'ordre croissant","Compter l'effectif total","Repérer la ou les valeurs du milieu","Si effectif pair, faire la moyenne des deux valeurs du milieu","Interpréter : la moitié des valeurs sont en dessous"]},
 {t:"Appliquer deux évolutions successives",ic:"💯",s:["Traduire chaque pourcentage en coefficient multiplicateur","Multiplier les deux coefficients","Interpréter le coefficient global","Multiplier la valeur de départ par ce coefficient"]}
);
