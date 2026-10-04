/* PARTIE 3 — Raisonner : proportionnalité, algèbre, données, probabilités, pensée informatique */

/* ---------- Proportionnalité ---------- */
C.modules.push({id:"proportionnalite",n:3,i:"⚖️",t:"La proportionnalité",d:"Reconnaître, calculer, pourcentages, échelles",
 s:[{h:"Reconnaître",l:["Deux grandeurs sont <b>proportionnelles</b> si on passe de l'une à l'autre en multipliant toujours par le <b>même nombre</b>.","Prix et quantité de pommes : oui. Âge et taille : non."]},
    {h:"Calculer",l:["<b>Linéarité</b> : si 2 kg coûtent 6 €, 4 kg coûtent 12 € et 6 kg coûtent 18 €.","<b>Retour à l'unité</b> : 1 kg coûte 3 €, donc 5 kg coûtent 15 €.","<b>Coefficient</b> : on multiplie toujours par 3."]},
    {h:"Pourcentages et échelles",l:["Prendre 10 % : diviser par 10. 25 % : diviser par 4. 50 % : diviser par 2.","Échelle 1/100 : 1 cm sur le plan = 100 cm en vrai."]}],
 k:["Proportionnalité","Retour à l'unité","Échelle","Pourcentage"]});
C.fiches.proportionnalite={
 intro:"Recettes, prix au kilo, cartes routières, soldes : la proportionnalité est partout. Le programme 2025 demande de savoir la reconnaître et de raisonner avec des méthodes simples (linéarité, retour à l'unité) plutôt qu'avec une formule apprise par cœur.",
 s:[
  {p:"Deux grandeurs sont <b>proportionnelles</b> quand on passe de l'une à l'autre en multipliant toujours par le même nombre (le <b>coefficient de proportionnalité</b>). Le prix des pommes est proportionnel à leur masse. Mais la taille n'est pas proportionnelle à l'âge : à 20 ans, on ne mesure pas deux fois sa taille de 10 ans !",
   fig:{type:"barres",legende:"Prix des pommes à 3 € le kilo",items:[["1 kg",3,"€"],["2 kg",6,"€"],["3 kg",9,"€"],["5 kg",15,"€"]]},
   q:["Lequel est une situation de proportionnalité ?",["Le prix de l'essence et le nombre de litres","La taille et l'âge","La note et le temps passé","La pointure et l'âge"],0,"Le prix au litre est toujours le même."]},
  {p:"Trois méthodes pour calculer. La <b>linéarité</b> : si on double la quantité, on double le prix ; si on additionne deux quantités, on additionne les prix. Le <b>retour à l'unité</b> : on cherche le prix d'un seul, puis on multiplie. Le <b>coefficient</b> : on repère le nombre par lequel on multiplie à chaque fois.",
   fig:{type:"flux",legende:"Une recette pour 4 personnes demande 200 g de farine. Pour 6 ?",etapes:[["4 personnes","200 g"],["1 personne (retour à l'unité)","200 ÷ 4 = 50 g"],["6 personnes","6 × 50 = 300 g"]]},
   q:["3 cahiers coûtent 4,50 €. Combien coûtent 6 cahiers ?",["9 €","7,50 €","13,50 €","6 €"],0,"Deux fois plus de cahiers : deux fois plus cher."]},
  {p:"Un <b>pourcentage</b> est une proportion sur 100. Prendre 10 % d'un prix, c'est le diviser par 10 ; 50 %, c'est la moitié ; 25 %, le quart. Une <b>échelle</b> relie les distances sur un plan et dans la réalité : à l'échelle 1/1 000, 1 cm sur le plan représente 1 000 cm, soit 10 m.",
   fig:{type:"flux",legende:"Un pull à 40 € soldé à −25 %",etapes:[["25 % de 40 €","40 ÷ 4 = 10 €"],["Nouveau prix","40 − 10 = 30 €"]]},
   q:["Sur un plan à l'échelle 1/100, un mur mesure 5 cm. En vrai, il mesure…",["5 m","50 cm","500 m","5 cm"],0,"5 × 100 = 500 cm = 5 m."]}
 ],
 retenir:["Proportionnalité = multiplier toujours par le même nombre.","Méthodes : linéarité, retour à l'unité, coefficient.","10 % = ÷ 10 ; 25 % = ÷ 4 ; 50 % = ÷ 2.","Échelle 1/n : 1 cm sur le plan = n cm en vrai."]
};

/* ---------- Pensée algébrique ---------- */
C.modules.push({id:"algebre",n:3,i:"🧱",t:"Trouver un nombre inconnu",d:"Schémas en barres, balances, suites de motifs",
 s:[{h:"Le schéma en barres",l:["On dessine les quantités comme des barres pour voir le problème.","Le nombre inconnu est une barre avec un « ? »."]},
    {h:"La balance",l:["Une égalité est comme une balance en équilibre.","On peut enlever la même chose des deux côtés : elle reste en équilibre."]},
    {h:"Les motifs qui grandissent",l:["Une suite de figures qui grandit selon une règle.","On cherche la règle pour prévoir l'étape 10 ou 100."]}],
 k:["Nombre inconnu","Égalité"]});
C.fiches.algebre={
 intro:"Trouver un nombre caché, c'est le début de l'algèbre. Le programme 2025 propose des outils visuels (barres, balances) qui rendent ces problèmes faciles à voir, avant les équations du collège.",
 s:[
  {p:"Le <b>schéma en barres</b> représente les quantités par des rectangles de longueurs proportionnelles. « Léa a 3 fois plus de billes que Tom ; ensemble ils en ont 48. » On dessine 1 barre pour Tom, 3 barres pour Léa : 4 barres = 48, donc 1 barre = 12. Tom a 12 billes, Léa 36.",
   fig:{type:"svg",legende:"4 barres égales font 48",svg:"<svg viewBox='0 0 300 110'><text x='10' y='32' fill='#fff' font-size='12' font-weight='700'>Tom</text><rect x='60' y='15' width='50' height='26' fill='#3db5ff' class='pop'/><text x='10' y='78' fill='#fff' font-size='12' font-weight='700'>Léa</text><rect x='60' y='60' width='50' height='26' fill='var(--pri)' class='pop'/><rect x='110' y='60' width='50' height='26' fill='var(--pri)' class='pop' style='animation-delay:.2s'/><rect x='160' y='60' width='50' height='26' fill='var(--pri)' class='pop' style='animation-delay:.4s'/><path d='M220 15V86' stroke='#fff' stroke-width='2'/><text x='250' y='56' fill='#fff' font-size='13' font-weight='900'>48</text><text x='85' y='33' fill='#10142a' font-size='12' font-weight='900' text-anchor='middle'>?</text></svg>"},
   q:["Un livre et un stylo coûtent 13 €. Le livre coûte 10 € de plus que le stylo. Le stylo coûte…",["1,50 €","3 €","2 €","10 €"],0,"13 − 10 = 3 ; ces 3 € sont partagés en 2 barres égales : 1,50 €."]},
  {p:"Une égalité ressemble à une <b>balance en équilibre</b>. Si on enlève (ou ajoute) la même chose des deux côtés, elle reste équilibrée. « Un nombre + 7 = 19 » : on enlève 7 des deux côtés, le nombre vaut 12.",
   fig:{type:"flux",legende:"? + 7 = 19",etapes:[["? + 7","19"],["On enlève 7 des deux côtés","? = 19 − 7"],["Le nombre caché","12"]]},
   q:["3 × ? = 27. Le nombre caché vaut…",["9","24","30","81"],0,"27 ÷ 3 = 9."]},
  {p:"Une suite de <b>motifs</b> grandit selon une règle : 4 allumettes pour un carré, 7 pour deux carrés collés, 10 pour trois… À chaque étape, on ajoute 3 allumettes. La règle permet de prévoir n'importe quelle étape sans tout dessiner.",
   fig:{type:"barres",legende:"Allumettes pour 1, 2, 3, 4 carrés en ligne",items:[["1 carré",4,""],["2 carrés",7,""],["3 carrés",10,""],["4 carrés",13,""]]},
   q:["Avec la même règle (4, 7, 10, 13…), combien d'allumettes pour 5 carrés ?",["16","15","17","20"],0,"On ajoute 3 à chaque étape."]}
 ],
 retenir:["Schéma en barres : dessiner pour voir le nombre inconnu.","Balance : on fait la même chose des deux côtés.","Motifs : trouver ce qu'on ajoute à chaque étape."]
};

/* ---------- Données ---------- */
C.modules.push({id:"donnees",n:3,i:"📊",t:"Organiser des données",d:"Tableaux, diagrammes, lire et trier",
 s:[{h:"Recueillir et ranger",l:["Une <b>enquête</b> se prépare : quelle question, à qui ?","On range les réponses dans un <b>tableau</b> (effectifs)."]},
    {h:"Les graphiques",l:["<b>Diagramme en barres</b> : comparer des quantités.","<b>Diagramme circulaire</b> : voir des parts d'un tout.","<b>Graphique</b> en courbe : voir une évolution dans le temps."]},
    {h:"Lire et filtrer",l:["Lire le titre, les axes, les unités.","Filtrer : ne garder que les données qui respectent un critère."]}],
 k:["Effectif","Diagramme"]});
C.fiches.donnees={
 intro:"Les données sont partout : sondages, résultats sportifs, météo. Savoir les ranger dans un tableau et les lire sur un graphique, c'est ne pas se faire piéger par un chiffre mal présenté.",
 s:[
  {p:"Pour une enquête (« quel est ton sport préféré ? »), on note chaque réponse, puis on compte : le nombre de fois qu'une réponse apparaît est son <b>effectif</b>. Un tableau d'effectifs résume tout.",
   fig:{type:"barres",legende:"Sport préféré dans une classe de 25 élèves",items:[["Football",9,"élèves","#2ed47a"],["Danse",6,"élèves","#ff8fab"],["Basket",5,"élèves","#ff8a3d"],["Natation",3,"élèves","#3db5ff"],["Autre",2,"élèves","#a9b0d6"]]},
   q:["Dans ce diagramme, quel est l'effectif de la danse ?",["6","9","25","5"],0,"6 élèves ont choisi la danse."]},
  {p:"Chaque graphique a son usage : le <b>diagramme en barres</b> compare des quantités, le <b>diagramme circulaire</b> montre comment un tout est partagé, le <b>graphique en courbe</b> montre une évolution (température au fil des heures). On lit toujours le titre, les axes et les unités avant de conclure.",
   att:"Un axe qui ne commence pas à 0 peut exagérer les différences. Vérifie toujours la graduation.",
   q:["Pour montrer l'évolution de la température dans la journée, on choisit…",["Un graphique en courbe","Un diagramme circulaire","Un tableau à une case","Un dessin"],0,"La courbe montre une évolution dans le temps."]},
  {p:"<b>Filtrer</b> des données, c'est ne garder que celles qui vérifient un critère : « les élèves qui viennent à vélo », « les jours où il a plu plus de 5 mm ». Un tableur le fait automatiquement, mais il faut savoir quoi demander.",
   q:["Dans une liste de 30 jours, on garde ceux où il fait plus de 25 °C. C'est…",["Filtrer les données","Calculer une aire","Faire une symétrie","Tracer une médiatrice"],0,"On garde seulement les données qui vérifient le critère."]}
 ],
 retenir:["Effectif = nombre de fois qu'une réponse apparaît.","Barres : comparer ; circulaire : parts d'un tout ; courbe : évolution.","Lire titre, axes, unités ; filtrer selon un critère."]
};

/* ---------- Probabilités ---------- */
C.modules.push({id:"probabilites",n:3,i:"🎲",t:"Les probabilités",d:"Hasard, chances, probabilité en fraction",
 s:[{h:"Le vocabulaire du hasard",l:["Une expérience est <b>aléatoire</b> si on ne peut pas prévoir son résultat.","Événement <b>impossible</b> (probabilité 0) ou <b>certain</b> (probabilité 1)."]},
    {h:"Calculer une probabilité",l:["Quand tous les résultats ont la même chance : <b>probabilité = cas favorables ÷ cas possibles</b>.","Dé à 6 faces : probabilité d'obtenir 3 = <b>1/6</b>.","On peut l'écrire en fraction, en décimal ou en pourcentage."]},
    {h:"Répéter l'expérience",l:["En répétant beaucoup de fois, la <b>fréquence</b> observée se rapproche de la probabilité."]}],
 k:["Probabilité","Aléatoire","Événement","Fréquence"]});
C.fiches.probabilites={
 intro:"Pile ou face, dé, loterie : peut-on mesurer le hasard ? Oui ! La probabilité est un nombre entre 0 (impossible) et 1 (certain). Le programme 2025 l'introduit dès la 6e, écrite sous forme de fraction.",
 s:[
  {p:"Une expérience est <b>aléatoire</b> quand on connaît les résultats possibles mais qu'on ne peut pas prévoir celui qu'on obtiendra. Un événement <b>impossible</b> a une probabilité de 0 (obtenir 7 avec un dé à 6 faces) ; un événement <b>certain</b> a une probabilité de 1 (obtenir un nombre entre 1 et 6).",
   fig:{type:"barres",legende:"Échelle des probabilités",items:[["Impossible",0,""],["Peu probable",0.2,""],["Une chance sur deux",0.5,""],["Très probable",0.9,""],["Certain",1,""]]},
   q:["Obtenir 7 en lançant un dé à 6 faces est un événement…",["Impossible","Certain","Probable","Équiprobable"],0,"Sa probabilité est 0."]},
  {p:"Quand tous les résultats ont la même chance d'arriver (on dit qu'ils sont <b>équiprobables</b>), la probabilité d'un événement est le nombre de cas favorables divisé par le nombre de cas possibles. Avec un dé : probabilité d'obtenir un nombre pair = 3/6 = 1/2 = 0,5 = 50 %.",
   fig:{type:"flux",legende:"Un sac contient 3 billes rouges et 5 bleues. On en tire une au hasard.",etapes:[["Cas possibles","8 billes"],["Cas favorables (rouge)","3 billes"],["Probabilité de tirer une rouge","3/8"]]},
   q:["Probabilité d'obtenir « pile » en lançant une pièce équilibrée ?",["1/2","1/4","1","2"],0,"1 cas favorable sur 2 possibles."]},
  {p:"Si on lance une pièce 10 fois, on n'obtient pas forcément 5 piles. Mais si on la lance 1 000 fois, la <b>fréquence</b> de pile (nombre de piles ÷ nombre de lancers) sera très proche de 1/2. C'est l'approche « fréquentiste » : plus on répète, plus la fréquence s'approche de la probabilité.",
   q:["On lance un dé 600 fois. On obtient le 6 environ…",["100 fois","600 fois","6 fois","300 fois"],0,"1/6 de 600 = 100."]}
 ],
 retenir:["Probabilité entre 0 (impossible) et 1 (certain).","Équiprobabilité : cas favorables ÷ cas possibles.","Beaucoup de répétitions : la fréquence se rapproche de la probabilité."]
};

/* ---------- Pensée informatique ---------- */
C.modules.push({id:"programmation",n:3,i:"🤖",t:"Programmer",d:"Instructions, séquences, boucles, tableur",
 s:[{h:"Instructions et séquences",l:["Un <b>programme</b> est une suite d'<b>instructions</b> exécutées dans l'ordre.","Avancer de 50, tourner à droite de 90°, avancer de 50…"]},
    {h:"La boucle « répéter »",l:["Pour un carré : <b>répéter 4 fois</b> (avancer de 50, tourner de 90°).","Une boucle évite de réécrire les mêmes instructions."]},
    {h:"Le tableur",l:["Une cellule peut calculer à partir d'une autre : =A1+3.","On recopie la formule vers le bas pour créer une suite."]}],
 k:["Programme","Boucle","Tableur"]});
C.fiches.programmation={
 intro:"Un ordinateur ne devine rien : il exécute exactement ce qu'on lui dit, dans l'ordre. Programmer, c'est découper une tâche en petites instructions précises. Le programme de 6e en fait un domaine à part entière.",
 s:[
  {p:"Un <b>programme</b> est une suite d'<b>instructions</b> exécutées l'une après l'autre. Pour faire tracer un chemin à un lutin, on lui donne des déplacements (« avancer de 50 pas ») et des rotations (« tourner à droite de 90° »). L'ordre compte : inverser deux instructions change le dessin.",
   fig:{type:"flux",legende:"Tracer un « L »",etapes:["Stylo en position d'écriture","Avancer de 100","Tourner à droite de 90°","Avancer de 50"]},
   q:["Dans un programme, les instructions sont exécutées…",["Dans l'ordre où elles sont écrites","Au hasard","Toutes en même temps","De la dernière à la première"],0,"L'ordre est essentiel."]},
  {p:"Quand une même suite d'instructions se répète, on utilise une <b>boucle</b> : « répéter 4 fois : avancer de 50, tourner de 90° » trace un carré. Pour un triangle équilatéral : répéter 3 fois, avancer, tourner de 120°.",
   fig:{type:"flux",legende:"Tracer un carré avec une boucle",etapes:["Répéter 4 fois :",["→ avancer de 50",""],["→ tourner à droite de 90°",""],"Fin de la boucle : le carré est tracé"]},
   q:["Pour tracer un carré, on répète « avancer, tourner de 90° » combien de fois ?",["4","3","2","90"],0,"Un carré a 4 côtés."]},
  {p:"Dans un <b>tableur</b>, chaque case (cellule) a un nom : A1, B3… Une cellule peut contenir une formule qui calcule à partir d'autres cellules. Si A1 contient 5 et A2 contient =A1+3, A2 affiche 8 ; en recopiant la formule vers le bas, on obtient la suite 5, 8, 11, 14…",
   q:["A1 contient 2 et A2 contient =A1×2. Qu'affiche A2 ?",["4","2","22","A1×2"],0,"Le tableur calcule : 2 × 2 = 4."]}
 ],
 retenir:["Programme = instructions dans l'ordre.","Boucle « répéter n fois » pour ne pas tout réécrire.","Tableur : formules qui utilisent d'autres cellules, recopiées vers le bas."]
};

/* ---------- Résoudre un problème ---------- */
C.modules.push({id:"problemes",n:3,i:"🧩",t:"Résoudre un problème",d:"Méthode, étapes, vérification, rédaction",
 s:[{h:"La méthode",l:["<b>Lire</b> l'énoncé deux fois et repérer la question.","<b>Trier</b> les données utiles.","<b>Chercher</b> : schéma, étapes intermédiaires.","<b>Calculer</b>, puis <b>vérifier</b> que la réponse est cohérente.","<b>Rédiger</b> une phrase réponse avec l'unité."]},
    {h:"Les pièges",l:["Des données inutiles glissées dans l'énoncé.","Des unités différentes à convertir.","Une réponse absurde non vérifiée (un élève de 3 m de haut…)."]}],
 k:["Énoncé","Donnée"]});
C.fiches.problemes={
 intro:"Résoudre un problème, ce n'est pas trouver « l'opération magique » : c'est une démarche. Avec une méthode toujours la même, les problèmes compliqués deviennent une suite de petites questions faciles. Entraîne-toi avec le jeu « Problèmes ».",
 s:[
  {p:"Première étape : lire l'énoncé en entier, deux fois, et repérer la <b>question</b>. Deuxième : trier les <b>données</b> (lesquelles sont utiles ?). Troisième : chercher, en faisant un schéma ou en découpant en questions intermédiaires. Puis calculer, vérifier, et répondre par une phrase.",
   fig:{type:"cycle",centre:"Méthode",etapes:[["Lire, repérer la question","#3db5ff"],["Trier les données","#7be0d0"],["Chercher (schéma, étapes)","#ffc83d"],["Calculer","#ff8a3d"],["Vérifier, rédiger","#2ed47a"]]},
   q:["Quelle est la première chose à faire face à un problème ?",["Lire l'énoncé et repérer la question","Calculer avec tous les nombres","Écrire la réponse","Faire une addition"],0,"Sans comprendre la question, on calcule au hasard."]},
  {p:"Les énoncés contiennent parfois des <b>données inutiles</b>, des <b>unités différentes</b> (des cm et des m, des min et des h) et des étapes cachées. Toujours se demander à la fin : « ma réponse est-elle réaliste ? ». Un trajet à pied de 300 km en une heure, c'est impossible : il y a une erreur.",
   att:"La réponse doit être une phrase avec l'unité : « Le trajet dure 1 h 30 min. »",
   q:["Un élève trouve qu'une salle de classe mesure 800 m de long. Que doit-il faire ?",["Vérifier son calcul et ses unités","Écrire la réponse","Arrondir à 1 000 m","Rien"],0,"800 m est absurde pour une salle : erreur d'unité ou de calcul."]}
 ],
 retenir:["Lire, trier, chercher, calculer, vérifier, rédiger.","Attention aux données inutiles et aux unités.","Toujours se demander si le résultat est réaliste."]
};

C.lexique.push(
 ["Proportionnalité","Deux grandeurs sont proportionnelles si on passe de l'une à l'autre en multipliant toujours par le même nombre."],
 ["Retour à l'unité","Méthode qui calcule d'abord la valeur pour 1, puis pour la quantité voulue."],
 ["Échelle","Rapport entre une distance sur un plan et la distance réelle : 1/100 = 1 cm pour 100 cm."],
 ["Nombre inconnu","Nombre qu'on cherche dans un problème, représenté par un « ? » ou une barre."],
 ["Égalité","Écriture avec le signe = : les deux côtés ont la même valeur, comme une balance en équilibre."],
 ["Effectif","Nombre de fois qu'une valeur apparaît dans une série de données."],
 ["Diagramme","Graphique qui représente des données (barres, circulaire…)."],
 ["Probabilité","Nombre entre 0 et 1 qui mesure la chance qu'un événement se produise."],
 ["Aléatoire","Se dit d'une expérience dont on ne peut pas prévoir le résultat."],
 ["Événement","Résultat ou ensemble de résultats d'une expérience aléatoire (« obtenir un nombre pair »)."],
 ["Fréquence","Nombre de fois qu'un résultat apparaît divisé par le nombre total d'essais."],
 ["Programme","Suite d'instructions exécutées dans l'ordre par une machine."],
 ["Boucle","Instruction qui répète plusieurs fois une suite d'instructions."],
 ["Tableur","Logiciel de calcul organisé en cellules (A1, B2…) qui peuvent contenir des formules."],
 ["Énoncé","Texte d'un problème : la situation, les données et la question."],
 ["Donnée","Information de l'énoncé (nombre, mesure) utile ou non pour répondre."]
);

C.quiz.push(
 ["proportionnalite","5 stylos coûtent 4 €. Combien coûtent 10 stylos ?",["8 €","9 €","20 €","40 €"],0,"Deux fois plus de stylos, deux fois plus cher."],
 ["proportionnalite","10 % de 70 €, c'est…",["7 €","10 €","0,7 €","63 €"],0,"70 ÷ 10 = 7."],
 ["proportionnalite","Un gâteau pour 6 personnes demande 3 œufs. Pour 2 personnes ?",["1 œuf","2 œufs","3 œufs","6 œufs"],0,"3 fois moins de personnes : 3 ÷ 3 = 1."],
 ["proportionnalite","Échelle 1/1 000 : 3 cm sur le plan représentent…",["30 m","3 m","300 m","3 km"],0,"3 × 1 000 = 3 000 cm = 30 m."],
 ["proportionnalite","Lequel N'est PAS proportionnel ?",["L'âge et la pointure","Le prix et la masse de fromage","Le nombre de tickets et leur prix","La distance et le temps à vitesse constante"],0,"La pointure ne double pas quand l'âge double."],
 ["algebre","? + 15 = 40. Le nombre caché est…",["25","55","15","35"],0,"40 − 15 = 25."],
 ["algebre","4 × ? = 32. Le nombre caché est…",["8","28","36","128"],0,"32 ÷ 4 = 8."],
 ["algebre","Suite : 3, 7, 11, 15… Le terme suivant est…",["19","18","20","22"],0,"On ajoute 4 à chaque fois."],
 ["algebre","Deux nombres font 20 en tout ; l'un est le triple de l'autre. Le plus petit est…",["5","15","10","4"],0,"4 barres égales = 20, une barre = 5."],
 ["donnees","Le nombre de fois qu'une réponse apparaît s'appelle…",["L'effectif","La moyenne","Le diamètre","La fréquence en %"],0,"Effectif."],
 ["donnees","Pour montrer comment se partage un budget, on choisit souvent…",["Un diagramme circulaire","Un graphique en courbe","Une demi-droite graduée","Un rapporteur"],0,"Il montre des parts d'un tout."],
 ["probabilites","Probabilité d'obtenir 5 avec un dé équilibré à 6 faces ?",["1/6","5/6","1/5","5"],0,"1 cas favorable sur 6."],
 ["probabilites","Un sac contient 4 billes vertes et 6 jaunes. Probabilité de tirer une verte ?",["4/10","4/6","6/10","1/4"],0,"4 favorables sur 10 possibles."],
 ["probabilites","Une probabilité est toujours…",["Entre 0 et 1","Plus grande que 1","Négative","Égale à 0,5"],0,"0 = impossible, 1 = certain."],
 ["probabilites","Probabilité d'obtenir un nombre plus petit que 7 avec un dé à 6 faces ?",["1","0","1/6","6/7"],0,"C'est un événement certain."],
 ["programmation","Pour tracer un triangle équilatéral, on répète 3 fois « avancer, tourner de… »",["120°","60°","90°","180°"],0,"Le lutin tourne de 120° à chaque coin (l'angle extérieur)."],
 ["programmation","Une boucle sert à…",["Répéter des instructions","Effacer le programme","Changer de couleur","Arrêter l'ordinateur"],0,"Elle évite de réécrire."],
 ["programmation","A1 contient 10 ; A2 contient =A1−4. A2 affiche…",["6","14","A1−4","4"],0,"10 − 4 = 6."],
 ["problemes","À la fin d'un problème, on écrit…",["Une phrase réponse avec l'unité","Seulement le nombre","L'énoncé","Rien"],0,"La réponse doit répondre à la question posée."],
 ["problemes","Un énoncé donne l'âge du capitaine et demande la vitesse du bateau. L'âge est…",["Une donnée inutile","Indispensable","La réponse","Une unité"],0,"Il faut trier les données."]
);

C.vf.push(
 ["Le prix est proportionnel à la quantité quand le prix unitaire ne change pas.",true,"On multiplie toujours par le prix unitaire."],
 ["25 % c'est le quart.",true,"25/100 = 1/4."],
 ["Une probabilité peut valoir 2.",false,"Elle est toujours entre 0 et 1."],
 ["Avec une pièce équilibrée, on obtient forcément 5 piles en 10 lancers.",false,"Le hasard n'est pas régulier sur peu de lancers."],
 ["Dans un programme, l'ordre des instructions n'a aucune importance.",false,"Inverser deux instructions change le résultat."],
 ["Si ? + 8 = 20, alors ? = 12.",true,"20 − 8 = 12."],
 ["Un diagramme circulaire montre bien une évolution dans le temps.",false,"Pour une évolution, on utilise une courbe."]
);

C.ordre.push(
 {t:"Résoudre un problème",ic:"🧩",s:["Lire l'énoncé et repérer la question","Trier les données utiles","Faire un schéma ou découper en étapes","Calculer","Vérifier que le résultat est réaliste","Rédiger une phrase réponse avec l'unité"]},
 {t:"Calculer une probabilité",ic:"🎲",s:["Vérifier que les résultats ont la même chance","Compter tous les cas possibles","Compter les cas favorables","Diviser favorables par possibles","Simplifier ou écrire en décimal si besoin"]}
);
