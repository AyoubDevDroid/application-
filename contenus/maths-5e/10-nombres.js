/* PARTIE 1 — Nombres et calculs (programme de 5e, BO n° 10 du 5 mars 2026) */

/* Droite graduée de −5 à 5 réutilisée dans plusieurs fiches */
const DG5=(pts)=>"<svg viewBox='0 0 300 80'><path d='M8 40H292' stroke='#fff' stroke-width='2'/><path d='M286 35L292 40L286 45' stroke='#fff' stroke-width='2' fill='none'/>"+[...Array(11)].map((_,i)=>"<path d='M"+(25+i*25)+" 34V46' stroke='#fff' stroke-width='2'/><text x='"+(25+i*25)+"' y='62' fill='#fff' font-size='10' text-anchor='middle'>"+(i-5).toString().replace('-','−')+"</text>").join("")+(pts||[]).map(p=>"<circle cx='"+(150+p[0]*25)+"' cy='40' r='6' fill='"+(p[2]||"var(--pri)")+"' class='pop'/><text x='"+(150+p[0]*25)+"' y='24' fill='"+(p[2]||"var(--pri)")+"' font-size='12' font-weight='900' text-anchor='middle'>"+p[1]+"</text>").join("")+"</svg>";

/* ---------- Enchaîner les opérations ---------- */
C.modules.push({id:"operations",n:1,i:"🧮",t:"Enchaîner les opérations",d:"Priorités, parenthèses, distributivité, diviser par un décimal",
 s:[{h:"Nommer un calcul",l:["Le résultat d'une addition est une <b>somme</b>, d'une soustraction une <b>différence</b>, d'une multiplication un <b>produit</b>, d'une division un <b>quotient</b>.","Dans une somme on additionne des <b>termes</b> ; dans un produit on multiplie des <b>facteurs</b>.","La dernière opération effectuée donne son nom au calcul : 3 + 4 × 5 est une <b>somme</b>."]},
    {h:"Les priorités opératoires",l:["1) Les calculs <b>entre parenthèses</b>.","2) Les <b>multiplications et divisions</b>, de gauche à droite.","3) Les <b>additions et soustractions</b>, de gauche à droite.","Exemple : 3 + 4 × 5 = 3 + 20 = 23, mais (3 + 4) × 5 = 35."]},
    {h:"La distributivité simple",l:["k × (a + b) = k × a + k × b.","Calcul malin : 7 × 102 = 7 × 100 + 7 × 2 = 714.","Dans l'autre sens : 13 × 8 + 13 × 2 = 13 × 10 = 130."]},
    {h:"Diviser par un décimal",l:["On multiplie le dividende et le diviseur par 10, 100… pour rendre le diviseur entier.","12,6 ÷ 0,3 = 126 ÷ 3 = 42.","Le quotient ne change pas si on multiplie les deux nombres par le même nombre."]}],
 k:["Somme","Produit","Quotient","Priorités opératoires","Distributivité"]});
C.fiches.operations={
 intro:"Une calculatrice qui « ne respecte pas les priorités » donnerait 3 + 4 × 5 = 35. Les mathématiciens du monde entier se sont mis d'accord sur un ordre de calcul pour qu'une écriture ait toujours le même résultat. Connaître ces règles, c'est savoir lire et écrire n'importe quel calcul.",
 s:[
  {p:"On nomme un calcul d'après la <b>dernière opération</b> à effectuer. 5 × (2 + 7) est un <b>produit</b> : on calcule d'abord la parenthèse, et la dernière opération est la multiplication. Ses deux <b>facteurs</b> sont 5 et (2 + 7).",
   q:["Comment s'appelle 8 − 3 × 2 ?",["Une différence","Un produit","Une somme","Un quotient"],0,"On calcule d'abord 3 × 2, la dernière opération est la soustraction."]},
  {p:"Ordre de calcul : <b>parenthèses</b>, puis <b>× et ÷</b>, puis <b>+ et −</b>. À priorité égale, on calcule de <b>gauche à droite</b> : 20 − 8 + 2 = 12 + 2 = 14 (et non 20 − 10).",
   fig:{type:"flux",legende:"Calculer A = 18 − 2 × (3 + 4)",etapes:[["Parenthèses","3 + 4 = 7"],["Multiplication","2 × 7 = 14"],["Soustraction","18 − 14 = 4"],["Résultat","A = 4"]]},
   att:"Piège classique : 18 − 2 × 7 n'est pas 16 × 7 ! La multiplication passe avant la soustraction.",
   q:["Combien vaut 6 + 6 ÷ 3 ?",["8","4","12","2"],0,"6 ÷ 3 = 2 d'abord, puis 6 + 2 = 8."]},
  {p:"La <b>distributivité</b> : multiplier une somme, c'est multiplier chacun de ses termes. Elle permet de calculer de tête : 25 × 12 = 25 × 10 + 25 × 2 = 250 + 50 = 300. Elle marche aussi avec une différence : 9 × 99 = 9 × 100 − 9 × 1 = 891.",
   fig:{type:"svg",legende:"L'aire du grand rectangle : 4 × (5 + 3) = 4 × 5 + 4 × 3",svg:"<svg viewBox='0 0 260 120'><rect x='20' y='20' width='125' height='70' fill='#2ed47a55' stroke='#fff' stroke-width='2'/><rect x='145' y='20' width='75' height='70' fill='#3db5ff55' stroke='#fff' stroke-width='2'/><text x='82' y='60' fill='#fff' font-size='14' text-anchor='middle'>4 × 5</text><text x='182' y='60' fill='#fff' font-size='14' text-anchor='middle'>4 × 3</text><text x='82' y='110' fill='#fff' font-size='12' text-anchor='middle'>5</text><text x='182' y='110' fill='#fff' font-size='12' text-anchor='middle'>3</text><text x='10' y='60' fill='#fff' font-size='12'>4</text></svg>"},
   q:["7 × 98 = 7 × 100 − 7 × 2 = ?",["686","700","714","672"],0,"700 − 14 = 686."]},
  {p:"Pour <b>diviser par un décimal</b>, on décale la virgule du diviseur ET du dividende du même nombre de rangs : 4,5 ÷ 0,15 = 450 ÷ 15 = 30. On peut toujours contrôler : 30 × 0,15 = 4,5 ✔.",
   info:"Diviser par un nombre plus petit que 1 donne un résultat plus GRAND : 3 ÷ 0,5 = 6, car il y a 6 demis dans 3.",
   q:["8,4 ÷ 0,2 = ?",["42","4,2","1,68","420"],0,"8,4 ÷ 0,2 = 84 ÷ 2 = 42."]}
 ],
 retenir:["Parenthèses, puis × et ÷, puis + et − (de gauche à droite).","La dernière opération donne le nom du calcul.","k × (a + b) = k × a + k × b.","Diviser par un décimal : rendre le diviseur entier en décalant les deux virgules."]
};

/* ---------- Multiples, diviseurs, divisibilité ---------- */
C.modules.push({id:"divisibilite",n:1,i:"🔍",t:"Multiples et diviseurs",d:"Division euclidienne, critères de divisibilité, nombres premiers",
 s:[{h:"La division euclidienne",l:["a = b × q + r avec r &lt; b : q est le <b>quotient</b>, r le <b>reste</b>.","17 = 3 × 5 + 2 : quotient 5, reste 2.","Si le reste vaut 0, la division « tombe juste »."]},
    {h:"Multiples et diviseurs",l:["35 = 5 × 7 : 35 est un <b>multiple</b> de 5 ; 5 est un <b>diviseur</b> de 35.","On dit aussi : 35 est <b>divisible</b> par 5.","Les diviseurs de 12 : 1, 2, 3, 4, 6, 12."]},
    {h:"Les critères de divisibilité",l:["Par <b>2</b> : chiffre des unités pair (0, 2, 4, 6, 8).","Par <b>5</b> : se termine par 0 ou 5. Par <b>10</b> : se termine par 0.","Par <b>3</b> : la somme des chiffres est dans la table de 3.","Par <b>9</b> : la somme des chiffres est dans la table de 9."]},
    {h:"Les nombres premiers",l:["Un nombre <b>premier</b> a exactement deux diviseurs : 1 et lui-même.","Les premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…","1 n'est pas premier (un seul diviseur)."]}],
 k:["Multiple","Diviseur","Division euclidienne","Reste","Nombre premier"]});
C.fiches.divisibilite={
 intro:"Peut-on partager 156 bonbons équitablement entre 3 enfants sans en couper ? Sans poser la division, la réponse tient en une addition : 1 + 5 + 6 = 12, qui est dans la table de 3. Oui ! Les critères de divisibilité sont des raccourcis très puissants.",
 s:[
  {p:"Dans la <b>division euclidienne</b> de 47 par 6 : 47 = 6 × 7 + 5. Le quotient est 7, le reste 5. Le reste est toujours <b>plus petit que le diviseur</b> (sinon on pourrait faire un paquet de plus).",
   fig:{type:"flux",legende:"Ranger 47 œufs dans des boîtes de 6",etapes:[["Boîtes pleines","7 (quotient)"],["Œufs rangés","6 × 7 = 42"],["Œufs restants","47 − 42 = 5 (reste)"],["Égalité","47 = 6 × 7 + 5"]]},
   q:["Dans 50 = 7 × 7 + 1, quel est le reste de la division de 50 par 7 ?",["1","7","50","0"],0,"Le reste est 1, et 1 < 7."]},
  {p:"Si a = b × k avec k entier, alors a est un <b>multiple</b> de b, et b est un <b>diviseur</b> de a. Pour trouver tous les diviseurs de 36, on cherche les produits égaux à 36 : 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6. Diviseurs : 1, 2, 3, 4, 6, 9, 12, 18, 36.",
   q:["Lequel n'est PAS un diviseur de 24 ?",["9","8","6","12"],0,"24 ÷ 9 ne tombe pas juste (9 × 2 = 18, 9 × 3 = 27)."]},
  {p:"Les <b>critères</b> : un nombre est divisible par 3 si la <b>somme de ses chiffres</b> est un multiple de 3, et par 9 si cette somme est un multiple de 9. 4 572 : 4 + 5 + 7 + 2 = 18, multiple de 9 (et donc de 3). 4 572 est divisible par 2, 3, 4… et 9 !",
   fig:{type:"barres",legende:"Somme des chiffres : 4 + 5 + 7 + 2 = 18",items:[["4",4,"","#3db5ff"],["5",5,"","#2ed47a"],["7",7,"","#ffc83d"],["2",2,"","#ff8a3d"]]},
   att:"Le critère par 3 ne regarde PAS le dernier chiffre : 13 se termine par 3 mais n'est pas divisible par 3 (1 + 3 = 4).",
   q:["Quel nombre est divisible par 9 ?",["7 236","7 235","7 230","7 239"],0,"7 + 2 + 3 + 6 = 18, multiple de 9."]},
  {p:"Un nombre <b>premier</b> n'a que deux diviseurs : 1 et lui-même. 2 est le seul premier pair. Pour savoir si 91 est premier, on cherche un diviseur : 91 = 7 × 13. Il n'est donc pas premier.",
   info:"Il y a une infinité de nombres premiers : Euclide l'a démontré il y a plus de 2 000 ans. Le crible d'Ératosthène permet de tous les trouver jusqu'à 100 : on barre les multiples de 2, de 3, de 5, de 7…",
   q:["Lequel est un nombre premier ?",["23","21","27","1"],0,"23 n'est divisible que par 1 et 23."]}
 ],
 retenir:["a = b × q + r avec r < b.","Divisible par 2 : pair ; par 5 : finit par 0 ou 5 ; par 10 : finit par 0.","Divisible par 3 (ou 9) : somme des chiffres dans la table de 3 (ou 9).","Premier : exactement deux diviseurs. 1 n'est pas premier."]
};

/* ---------- Les nombres relatifs ---------- */
C.modules.push({id:"relatifs",n:1,i:"🌡️",t:"Les nombres relatifs",d:"Positifs, négatifs, opposé, droite graduée, comparer",
 s:[{h:"Des nombres sous zéro",l:["Un nombre <b>relatif</b> est positif (+3, 7,5) ou négatif (−4, −0,5).","Ils servent pour les températures, les altitudes, les dates, les comptes en banque.","0 est à la fois positif et négatif ; il n'est ni strictement positif, ni strictement négatif."]},
    {h:"Opposé et valeur absolue",l:["Deux nombres sont <b>opposés</b> s'ils ne diffèrent que par leur signe : −6 et 6.","La <b>distance à zéro</b> (valeur absolue) de −6 et de 6 est 6.","L'opposé de −2,5 est 2,5."]},
    {h:"Sur une droite graduée",l:["À droite de 0 : les positifs ; à gauche : les négatifs.","Le nombre qui repère un point est son <b>abscisse</b>.","Deux opposés sont symétriques par rapport à 0."]},
    {h:"Comparer",l:["Le plus grand est le plus à droite sur la droite graduée.","Un positif est toujours plus grand qu'un négatif.","Entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro : −3 &gt; −7."]}],
 k:["Nombre relatif","Opposé","Valeur absolue","Abscisse","Droite graduée"]});
C.fiches.relatifs={
 intro:"−12 °C à Moscou, −430 m pour la mer Morte, l'an −52 pour la bataille d'Alésia… Les nombres négatifs permettent de compter « sous zéro ». Ils ont longtemps paru absurdes : au XVIIe siècle encore, des mathématiciens refusaient de les accepter !",
 s:[
  {p:"Un nombre <b>relatif</b> a un <b>signe</b> (+ ou −) et une <b>distance à zéro</b>. −8 est négatif, sa distance à zéro est 8. On n'écrit en général pas le + des positifs : +5 = 5.",
   q:["Quelle est la distance à zéro de −13,2 ?",["13,2","−13,2","0","26,4"],0,"La distance à zéro est toujours positive : on enlève le signe."]},
  {p:"L'<b>opposé</b> d'un nombre a la même distance à zéro mais le signe contraire. L'opposé de 4 est −4, l'opposé de −4 est 4. Sur la droite graduée, deux opposés sont <b>symétriques</b> par rapport à l'origine.",
   fig:{type:"svg",legende:"−3 et 3 sont opposés : même distance à 0",svg:DG5([[-3,"−3","#3db5ff"],[3,"3"]])},
   q:["L'opposé de −0,7 est…",["0,7","−0,7","7","1/0,7"],0,"Même distance à zéro, signe contraire."]},
  {p:"Sur une <b>droite graduée</b>, chaque point est repéré par un nombre relatif : son <b>abscisse</b>. On note A(−2) le point A d'abscisse −2. Plus on va vers la droite, plus les nombres sont grands.",
   fig:{type:"svg",legende:"A(−4), B(−1,5) et C(2,5)",svg:DG5([[-4,"A","#ff8a3d"],[-1.5,"B","#3db5ff"],[2.5,"C"]])},
   q:["Sur la figure, quel est le point le plus à gauche ?",["A, d'abscisse −4","B","C","Ils sont alignés, on ne peut pas dire"],0,"−4 est le plus petit des trois."]},
  {p:"Pour <b>comparer</b> : un positif est plus grand qu'un négatif ; entre deux positifs, rien ne change ; entre deux <b>négatifs</b>, c'est celui qui est le <b>plus proche de zéro</b> qui est le plus grand. −2 &gt; −9 : il fait moins froid à −2 °C qu'à −9 °C.",
   att:"Piège : −9 n'est pas plus grand que −2 parce que 9 > 2. Pense au thermomètre !",
   q:["Range dans l'ordre croissant : −5 ; 2 ; −1 ; 0",["−5 ; −1 ; 0 ; 2","−1 ; −5 ; 0 ; 2","0 ; −1 ; 2 ; −5","2 ; 0 ; −1 ; −5"],0,"Du plus à gauche au plus à droite sur la droite graduée."]}
 ],
 retenir:["Relatif = signe + distance à zéro.","Opposés : même distance à zéro, signes contraires.","Le plus grand est le plus à droite.","Entre deux négatifs, le plus grand est le plus proche de zéro."]
};

/* ---------- Additionner et soustraire des relatifs ---------- */
C.modules.push({id:"addrelatifs",n:1,i:"➕",t:"Additionner et soustraire des relatifs",d:"Somme, différence, enchaîner, simplifier l'écriture",
 s:[{h:"Additionner deux relatifs",l:["<b>Même signe</b> : on garde le signe et on additionne les distances à zéro. (−3) + (−5) = −8.","<b>Signes contraires</b> : on prend le signe du plus éloigné de zéro et on soustrait les distances. (−7) + 4 = −3.","La somme de deux opposés vaut 0 : (−6) + 6 = 0."]},
    {h:"Soustraire, c'est ajouter l'opposé",l:["a − b = a + (opposé de b).","5 − (−3) = 5 + 3 = 8.","(−2) − 6 = (−2) + (−6) = −8."]},
    {h:"Simplifier l'écriture",l:["On transforme les soustractions en additions, puis on supprime les parenthèses et les + inutiles.","(−4) + (+7) − (−2) = −4 + 7 + 2 = 5.","Astuce : on regroupe les positifs d'un côté, les négatifs de l'autre."]}],
 k:["Somme","Différence","Opposé"]});
C.fiches.addrelatifs={
 intro:"Ton compte est à −20 € et tu reçois 50 € : il est à +30 €. La température est de 3 °C et baisse de 8 degrés : il fait −5 °C. Additionner des relatifs, c'est faire ce genre de calcul de tête, sans se tromper de signe.",
 s:[
  {p:"Pour additionner deux relatifs, on imagine des <b>gains</b> (+) et des <b>pertes</b> (−). Deux pertes s'accumulent : (−3) + (−5) = −8. Une perte de 7 et un gain de 4 : il reste une perte de 3, donc (−7) + 4 = −3.",
   fig:{type:"etapes",vues:[
     {svg:DG5([[0,"départ","#fff"]]),t:"On part de 0."},
     {svg:DG5([[-5,"−5","#ff8a3d"]]),t:"On ajoute −5 : on recule de 5."},
     {svg:DG5([[-5,"","#ff8a3d"],[2,"+7 → 2"]]),t:"On ajoute +7 : on avance de 7. (−5) + 7 = 2."}]},
   q:["(−9) + 4 = ?",["−5","5","−13","13"],0,"Signes contraires : 9 − 4 = 5, signe du plus éloigné de 0 (−9)."]},
  {p:"<b>Soustraire un nombre, c'est ajouter son opposé.</b> 3 − 8 = 3 + (−8) = −5. Et enlever une perte, c'est gagner : 5 − (−3) = 5 + 3 = 8.",
   fig:{type:"flux",legende:"Calculer (−4) − (−9)",etapes:[["Soustraire −9","= ajouter +9"],["(−4) + 9","signes contraires"],["9 − 4 = 5","signe de +9"],["Résultat","5"]]},
   att:"Erreur fréquente : (−4) − (−9) = −13. Non ! Enlever −9, c'est ajouter 9.",
   q:["2 − 7 = ?",["−5","5","9","−9"],0,"2 + (−7) = −5."]},
  {p:"Pour une longue expression, on transforme toutes les soustractions en additions, on <b>simplifie l'écriture</b>, puis on regroupe les termes de même signe : −3 + 8 − 5 + 2 − 6 = (8 + 2) − (3 + 5 + 6) = 10 − 14 = −4.",
   q:["Calcule −6 + 10 − 3 + 1",["2","−2","20","0"],0,"Positifs : 10 + 1 = 11 ; négatifs : 6 + 3 = 9 ; 11 − 9 = 2."]}
 ],
 retenir:["Même signe : on additionne, on garde le signe.","Signes contraires : on soustrait, signe du plus éloigné de zéro.","Soustraire = ajouter l'opposé.","Regrouper positifs et négatifs pour calculer vite."]
};

/* ---------- Les fractions ---------- */
C.modules.push({id:"fractions",n:1,i:"🍕",t:"Les fractions",d:"Égalité, comparaison, addition, soustraction, fraction d'un nombre",
 s:[{h:"Fractions égales",l:["On ne change pas une fraction en multipliant (ou divisant) numérateur et dénominateur par un même nombre non nul.","2/3 = 4/6 = 10/15.","<b>Simplifier</b> : 12/18 = 2/3 (on divise par 6)."]},
    {h:"Comparer des fractions",l:["Même dénominateur : la plus grande a le plus grand numérateur. 5/7 &gt; 2/7.","Sinon, on les met au même dénominateur : 3/4 = 9/12 et 2/3 = 8/12, donc 3/4 &gt; 2/3.","Une fraction est plus grande que 1 si le numérateur est plus grand que le dénominateur."]},
    {h:"Additionner et soustraire",l:["Même dénominateur : on additionne les numérateurs, on garde le dénominateur. 2/7 + 3/7 = 5/7.","Sinon on réduit au même dénominateur : 1/2 + 1/3 = 3/6 + 2/6 = 5/6.","On n'additionne JAMAIS les dénominateurs."]},
    {h:"Fraction d'un nombre",l:["Prendre 3/4 de 20 : 20 ÷ 4 × 3 = 15.","Prendre 1/3 de 18 = 6.","Une fraction est aussi un quotient : 7/3 est le nombre qui multiplié par 3 donne 7."]}],
 k:["Fraction","Numérateur","Dénominateur","Simplifier","Dénominateur commun"]});
C.fiches.fractions={
 intro:"Une demi-pizza plus un tiers de pizza, ça fait combien de pizza ? Pas « deux cinquièmes » ! Pour ajouter des parts, il faut des parts de même taille : c'est tout le secret du dénominateur commun.",
 s:[
  {p:"Une fraction ne change pas quand on multiplie ou divise son numérateur et son dénominateur par le <b>même nombre</b> (non nul). 3/5 = 6/10 = 60/100. Pour <b>simplifier</b>, on divise par un diviseur commun : 15/35 = 3/7 (division par 5).",
   fig:{type:"barres",legende:"1/2 = 2/4 = 4/8 : la même part",items:[["1/2",50,"%","#3db5ff"],["2/4",50,"%","#2ed47a"],["4/8",50,"%","#ffc83d"]]},
   q:["Simplifie 18/24.",["3/4","9/12 seulement","6/8 seulement","2/3"],0,"18 et 24 sont divisibles par 6 : 3/4."]},
  {p:"Pour <b>comparer</b> deux fractions de dénominateurs différents, on les écrit avec un <b>dénominateur commun</b>. 5/6 et 7/9 : 5/6 = 15/18 et 7/9 = 14/18, donc 5/6 &gt; 7/9.",
   q:["Quelle fraction est la plus grande ?",["3/5","4/7","1/2","5/10"],0,"3/5 = 0,6 ; 4/7 ≈ 0,57 ; 1/2 = 5/10 = 0,5."]},
  {p:"Pour <b>additionner</b> ou <b>soustraire</b> : on met au même dénominateur, puis on additionne (ou soustrait) les numérateurs. 3/4 − 1/6 = 9/12 − 2/12 = 7/12. On simplifie le résultat si possible.",
   fig:{type:"flux",legende:"Calculer 2/3 + 1/4",etapes:[["Dénominateur commun","12 (multiple de 3 et de 4)"],["2/3 = 8/12","× 4 en haut et en bas"],["1/4 = 3/12","× 3 en haut et en bas"],["Somme","8/12 + 3/12 = 11/12"]]},
   att:"1/2 + 1/3 n'est PAS 2/5. Ça fait 3/6 + 2/6 = 5/6.",
   q:["1/2 + 1/4 = ?",["3/4","2/6","1/6","2/4"],0,"2/4 + 1/4 = 3/4."]},
  {p:"<b>Prendre une fraction d'un nombre</b> : 2/5 de 30, c'est 30 ÷ 5 × 2 = 12. Une fraction est aussi un <b>quotient</b> : 7/3 est le nombre qui, multiplié par 3, donne 7 (3 × 7/3 = 7).",
   q:["Les 3/4 de 28 élèves font du sport. Combien ?",["21","7","24","12"],0,"28 ÷ 4 = 7, puis 7 × 3 = 21."]}
 ],
 retenir:["a/b = (a × k)/(b × k).","Comparer, additionner, soustraire : même dénominateur d'abord.","On n'additionne jamais les dénominateurs.","3/4 de N = N ÷ 4 × 3."]
};

/* ---------- Carré et cube ---------- */
C.modules.push({id:"puissances",n:1,i:"²",t:"Carrés et cubes",d:"Notation a² et a³, carrés de 0 à 12, priorités",
 s:[{h:"Le carré d'un nombre",l:["a² = a × a (« a au carré »).","5² = 25 ; 1,2² = 1,44.","C'est l'aire d'un carré de côté a."]},
    {h:"Le cube d'un nombre",l:["a³ = a × a × a (« a au cube »).","2³ = 8 ; 10³ = 1 000.","C'est le volume d'un cube d'arête a."]},
    {h:"À connaître par cœur",l:["Carrés de 0 à 12 : 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.","10³ = 1 000."]},
    {h:"Dans un calcul",l:["La puissance est prioritaire sur × et + : 3 × 4² = 3 × 16 = 48.","Attention : 3 × 4² ≠ 12²."]}],
 k:["Carré","Cube","Puissance"]});
C.fiches.puissances={
 intro:"Pourquoi dit-on « au carré » ? Parce que 5 × 5 est l'aire d'un carré de côté 5. Et « au cube » ? Parce que 5 × 5 × 5 est le volume d'un cube d'arête 5. Les puissances sont nées de la géométrie !",
 s:[
  {p:"Le <b>carré</b> de a se note a² et vaut a × a. Le <b>cube</b> de a se note a³ et vaut a × a × a. Le petit nombre en haut s'appelle l'<b>exposant</b> : il dit combien de fois on multiplie le nombre par lui-même.",
   fig:{type:"svg",legende:"3² = 9 petits carrés ; 3³ = 27 petits cubes",svg:"<svg viewBox='0 0 260 110'>"+[0,1,2].map(i=>[0,1,2].map(j=>"<rect x='"+(20+i*25)+"' y='"+(20+j*25)+"' width='23' height='23' fill='#2ed47a88' stroke='#fff'/>").join("")).join("")+"<g transform='translate(150 30)'><path d='M0 25H60V85H0Z' fill='#3db5ff66' stroke='#fff' stroke-width='2'/><path d='M0 25L25 0H85L60 25M85 0V60L60 85' fill='none' stroke='#fff' stroke-width='2'/><path d='M20 25V85M40 25V85M0 45H60M0 65H60' stroke='#fff' opacity='.5'/></g><text x='57' y='105' fill='#fff' font-size='12' text-anchor='middle'>3²</text><text x='190' y='105' fill='#fff' font-size='12' text-anchor='middle'>3³</text></svg>"},
   att:"3² ne vaut pas 6 ! 3² = 3 × 3 = 9 (et non 3 × 2).",
   q:["4³ = ?",["64","12","16","43"],0,"4 × 4 × 4 = 64."]},
  {p:"Les <b>carrés de 0 à 12</b> sont à connaître par cœur : ils servent sans arrêt (aires, Pythagore en 4e…). 7² = 49, 8² = 64, 9² = 81, 11² = 121, 12² = 144. Et 10³ = 1 000 : 1 m³ = 1 000 dm³.",
   fig:{type:"chiffres",items:[[49,"","7²"],[81,"","9²"],[144,"","12²"]]},
   q:["Quel nombre a pour carré 121 ?",["11","12","60,5","10"],0,"11 × 11 = 121."]},
  {p:"Dans un calcul, les <b>puissances passent avant</b> les multiplications et les additions (mais après les parenthèses). 2 + 3² = 2 + 9 = 11 ; (2 + 3)² = 5² = 25. On calcule aussi la valeur d'une expression : si x = 4, alors 2x² = 2 × 16 = 32.",
   q:["Combien vaut 5 × 2² ?",["20","100","40","14"],0,"2² = 4 d'abord, puis 5 × 4 = 20."]}
 ],
 retenir:["a² = a × a ; a³ = a × a × a.","Carrés de 0 à 12 par cœur ; 10³ = 1 000.","Priorités : parenthèses, puissances, × ÷, + −."]
};

/* ---------- Calcul littéral ---------- */
C.modules.push({id:"litteral",n:1,i:"🔤",t:"Le calcul littéral",d:"Formules, substitution, développer, factoriser, réduire",
 s:[{h:"Des lettres pour des nombres",l:["Une lettre peut remplacer un nombre quelconque : la formule du périmètre d'un carré est P = 4 × c.","On peut supprimer le signe × devant une lettre ou une parenthèse : 4 × c = 4c ; 3 × (x + 2) = 3(x + 2).","Double de x : 2x ; carré de x : x² ; successeur de n : n + 1."]},
    {h:"Substituer",l:["Calculer une expression pour une valeur : si x = 5, 3x + 2 = 3 × 5 + 2 = 17.","Tester une égalité : 2x + 1 = 7 est vraie pour x = 3, fausse pour x = 4."]},
    {h:"Développer et factoriser",l:["<b>Développer</b> : k(a + b) = ka + kb. 5(x + 3) = 5x + 15.","<b>Factoriser</b> : ka + kb = k(a + b). 6x − 18 = 6(x − 3).","Une <b>somme</b> devient un <b>produit</b> et inversement."]},
    {h:"Réduire",l:["On regroupe les termes « en x » et les nombres : 3x + 5 + 2x − 1 = 5x + 4.","x + x = 2x mais x × x = x²."]}],
 k:["Expression littérale","Substituer","Développer","Factoriser","Réduire"]});
C.fiches.litteral={
 intro:"Un carré de côté 3 a un périmètre de 12, de côté 10 un périmètre de 40… Plutôt que de faire une liste infinie, on écrit P = 4c : une seule formule pour TOUS les carrés. C'est la grande idée du calcul littéral : parler de tous les nombres à la fois.",
 s:[
  {p:"Une <b>expression littérale</b> contient des lettres qui représentent des nombres. On produit des <b>formules</b> : aire d'un rectangle A = L × l, périmètre d'un cercle P = 2πr. Conventions : 3 × x s'écrit 3x, et 1 × x s'écrit x.",
   fig:{type:"flux",legende:"Une suite de motifs : n carrés en ligne",etapes:[["1 carré","4 allumettes"],["2 carrés","7 allumettes"],["3 carrés","10 allumettes"],["n carrés","3n + 1 allumettes"]]},
   q:["Quelle expression donne le triple de x augmenté de 5 ?",["3x + 5","3(x + 5)","x³ + 5","5x + 3"],0,"Le triple de x : 3x ; augmenté de 5 : + 5."]},
  {p:"<b>Substituer</b>, c'est remplacer la lettre par un nombre. Pour x = 4 : 2x² − x = 2 × 4² − 4 = 2 × 16 − 4 = 28. Pour <b>tester</b> une égalité, on calcule chaque membre séparément : 3x − 1 = x + 7 pour x = 4 ? 11 et 11 : elle est vraie.",
   q:["Que vaut 5a − 3 pour a = 2 ?",["7","49","10","2"],0,"5 × 2 − 3 = 10 − 3 = 7."]},
  {p:"<b>Développer</b> : transformer un produit en somme avec k(a + b) = ka + kb. 4(2x − 3) = 8x − 12. <b>Factoriser</b> : faire l'inverse, en trouvant le facteur commun. 7x + 21 = 7 × x + 7 × 3 = 7(x + 3).",
   fig:{type:"cycle",centre:"k(a + b) = ka + kb",etapes:[["Développer →<br>produit vers somme","#2ed47a"],["← Factoriser<br>somme vers produit","#3db5ff"]]},
   q:["Développe 3(x + 4).",["3x + 12","3x + 4","x + 12","7x"],0,"3 × x + 3 × 4."]},
  {p:"<b>Réduire</b>, c'est regrouper : 4x + 3 − x + 6 = 3x + 9. On peut démontrer des propriétés : la somme de trois entiers consécutifs n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1) est toujours un multiple de 3. Et un seul <b>contre-exemple</b> suffit à prouver qu'une affirmation est fausse.",
   att:"Ne pas confondre : x + x = 2x (on ajoute) et x × x = x² (on multiplie).",
   q:["Réduis 6x + 2 − 4x + 5.",["2x + 7","9x","10x + 7","2x − 3"],0,"6x − 4x = 2x ; 2 + 5 = 7."]}
 ],
 retenir:["3 × x = 3x ; x × x = x².","Substituer : remplacer la lettre, puis respecter les priorités.","k(a + b) = ka + kb : développer → ; ← factoriser.","Réduire : regrouper les x et les nombres."]
};

/* ---------- Équations ---------- */
C.modules.push({id:"equations",n:1,i:"⚖️",t:"Premières équations",d:"Inconnue, x + b = c, ax = c, mettre en équation",
 s:[{h:"Une égalité à trou",l:["Une <b>équation</b> est une égalité avec un nombre inconnu, souvent noté x.","Une <b>solution</b> est une valeur de x qui rend l'égalité vraie.","x + 7 = 12 a pour solution 5, car 5 + 7 = 12."]},
    {h:"Résoudre x + b = c",l:["On utilise l'opération inverse : la <b>soustraction</b>.","x + 7 = 12 → x = 12 − 7 = 5.","x − 3 = 10 → x = 10 + 3 = 13."]},
    {h:"Résoudre ax = c",l:["On utilise l'opération inverse : la <b>division</b>.","4x = 28 → x = 28 ÷ 4 = 7.","On vérifie toujours : 4 × 7 = 28 ✔."]}],
 k:["Équation","Inconnue","Solution"]});
C.fiches.equations={
 intro:"Il y a 1 200 ans, le savant Al-Khwarizmi écrivait un livre pour résoudre des problèmes en cherchant « la chose » inconnue. Le mot « algèbre » vient du titre de son livre (al-jabr). Aujourd'hui « la chose » s'appelle x.",
 s:[
  {p:"Une <b>équation</b> est une égalité où un nombre est inconnu. « Je pense à un nombre, je lui ajoute 9, je trouve 23 » s'écrit x + 9 = 23. Résoudre, c'est trouver x. Ici x = 14.",
   fig:{type:"svg",legende:"Une balance en équilibre : x + 3 = 8",svg:"<svg viewBox='0 0 260 120'><path d='M130 20V100M90 100H170M40 40H220' stroke='#fff' stroke-width='3'/><path d='M40 40L20 75H60ZM220 40L200 75H240Z' fill='none' stroke='#fff' stroke-width='2'/><rect x='18' y='52' width='22' height='22' rx='4' fill='#ffc83d'/><text x='29' y='68' font-size='13' text-anchor='middle' font-weight='900'>x</text><g fill='#2ed47a'><circle cx='48' cy='68' r='6'/><circle cx='60' cy='68' r='6'/><circle cx='54' cy='57' r='6'/></g><text x='220' y='68' fill='#fff' font-size='16' text-anchor='middle' font-weight='900'>8</text></svg>"},
   q:["Quelle est la solution de x + 9 = 23 ?",["14","32","9","23"],0,"23 − 9 = 14 ; vérification 14 + 9 = 23."]},
  {p:"Pour résoudre <b>x + b = c</b>, on « défait » l'addition par une <b>soustraction</b> : x = c − b. Pour <b>x − b = c</b>, on défait par une addition : x = c + b. C'est la même idée que l'addition à trou : 2 + … = 7 se complète par 7 − 2.",
   q:["x − 6 = 15. Combien vaut x ?",["21","9","−9","90"],0,"x = 15 + 6 = 21."]},
  {p:"Pour résoudre <b>ax = c</b>, on défait la multiplication par une <b>division</b> : x = c ÷ a. 5x = 35 donne x = 7. Avec des décimaux : 0,5x = 4 donne x = 8. On <b>vérifie</b> toujours en remplaçant.",
   fig:{type:"flux",legende:"Mettre en équation",etapes:[["Énoncé","3 cahiers identiques coûtent 7,50 €"],["Inconnue","x = prix d'un cahier"],["Équation","3x = 7,50"],["Solution","x = 7,50 ÷ 3 = 2,50 €"]]},
   q:["8x = 56. Combien vaut x ?",["7","48","64","448"],0,"56 ÷ 8 = 7."]}
 ],
 retenir:["x + b = c → x = c − b.","x − b = c → x = c + b.","ax = c → x = c ÷ a.","Toujours vérifier en remplaçant x."]
};

C.lexique.push(
 ["Somme","Résultat d'une addition ; ses nombres sont les termes."],
 ["Différence","Résultat d'une soustraction."],
 ["Produit","Résultat d'une multiplication ; ses nombres sont les facteurs."],
 ["Quotient","Résultat d'une division."],
 ["Priorités opératoires","Ordre de calcul : parenthèses, puissances, × et ÷, puis + et −."],
 ["Distributivité","k × (a + b) = k × a + k × b."],
 ["Multiple","a est un multiple de b si a = b × k avec k entier."],
 ["Diviseur","b est un diviseur de a si la division de a par b tombe juste."],
 ["Division euclidienne","a = b × q + r avec un reste r plus petit que b."],
 ["Reste","Ce qui reste dans une division euclidienne ; toujours plus petit que le diviseur."],
 ["Nombre premier","Entier qui a exactement deux diviseurs : 1 et lui-même."],
 ["Nombre relatif","Nombre muni d'un signe : positif ou négatif."],
 ["Opposé","Nombre de même distance à zéro mais de signe contraire."],
 ["Valeur absolue","Distance à zéro d'un nombre (toujours positive)."],
 ["Abscisse","Nombre qui repère un point sur une droite graduée."],
 ["Droite graduée","Droite munie d'une origine, d'un sens et d'une unité."],
 ["Fraction","Quotient de deux entiers, écrit a/b."],
 ["Numérateur","Nombre du haut d'une fraction."],
 ["Dénominateur","Nombre du bas d'une fraction ; il n'est jamais nul."],
 ["Simplifier","Diviser numérateur et dénominateur par un même nombre."],
 ["Dénominateur commun","Dénominateur identique donné à deux fractions pour les comparer ou les additionner."],
 ["Carré","a² = a × a."],
 ["Cube","a³ = a × a × a."],
 ["Puissance","Produit d'un nombre par lui-même plusieurs fois, noté avec un exposant."],
 ["Expression littérale","Expression qui contient des lettres représentant des nombres."],
 ["Substituer","Remplacer une lettre par un nombre."],
 ["Développer","Transformer un produit en somme."],
 ["Factoriser","Transformer une somme en produit."],
 ["Réduire","Regrouper les termes de même nature : 2x + 3x = 5x."],
 ["Équation","Égalité qui contient un nombre inconnu."],
 ["Inconnue","Nombre que l'on cherche dans une équation, souvent noté x."],
 ["Solution","Valeur de l'inconnue qui rend l'égalité vraie."]
);

C.quiz.push(
 ["operations","3 + 5 × 2 = ?",["13","16","10","30"],0,"5 × 2 = 10, puis 3 + 10."],
 ["operations","(3 + 5) × 2 = ?",["16","13","11","30"],0,"Parenthèses d'abord : 8 × 2."],
 ["operations","20 − 6 − 4 = ?",["10","18","14","2"],0,"De gauche à droite : 14 − 4 = 10."],
 ["operations","Comment s'appelle (4 + 1) × 3 ?",["Un produit","Une somme","Une différence","Un quotient"],0,"La dernière opération est la multiplication."],
 ["operations","6 ÷ 0,5 = ?",["12","3","0,3","30"],0,"60 ÷ 5 = 12."],
 ["operations","12 × 9 + 12 × 1 = ?",["120","108","12","1 200"],0,"12 × (9 + 1) = 120."],
 ["divisibilite","Quel est le reste de la division de 29 par 4 ?",["1","7","4","3"],0,"29 = 4 × 7 + 1."],
 ["divisibilite","Quel nombre est divisible par 3 ?",["5 121","5 122","5 125","5 117"],0,"5 + 1 + 2 + 1 = 9."],
 ["divisibilite","Lequel est un nombre premier ?",["29","39","49","1"],0,"39 = 3 × 13 ; 49 = 7 × 7."],
 ["divisibilite","Combien 18 a-t-il de diviseurs ?",["6","4","3","9"],0,"1, 2, 3, 6, 9, 18."],
 ["divisibilite","2 340 est divisible par…",["2, 3, 5, 9 et 10","2 et 5 seulement","3 seulement","10 seulement"],0,"Finit par 0 ; 2 + 3 + 4 + 0 = 9."],
 ["relatifs","Quel est le plus grand ?",["−2","−5","−12","−2,5"],0,"Le plus proche de zéro."],
 ["relatifs","L'opposé de 8 est…",["−8","1/8","0,8","8"],0,"Même distance à zéro, signe contraire."],
 ["relatifs","Une altitude de 80 m sous le niveau de la mer s'écrit…",["−80 m","80 m","+80 m","0,80 m"],0,"Sous le niveau 0 : négatif."],
 ["relatifs","Quel nombre est entre −3 et −2 ?",["−2,4","−3,5","−1,9","2,5"],0,"−3 < −2,4 < −2."],
 ["addrelatifs","(−6) + (−4) = ?",["−10","10","−2","2"],0,"Même signe : on additionne, on garde −."],
 ["addrelatifs","(−8) + 3 = ?",["−5","5","−11","11"],0,"8 − 3 = 5, signe de −8."],
 ["addrelatifs","4 − 9 = ?",["−5","5","13","−13"],0,"4 + (−9)."],
 ["addrelatifs","(−3) − (−7) = ?",["4","−10","10","−4"],0,"(−3) + 7 = 4."],
 ["addrelatifs","Il fait −4 °C. La température monte de 10 degrés. Il fait…",["6 °C","−14 °C","14 °C","−6 °C"],0,"−4 + 10 = 6."],
 ["fractions","2/5 + 1/5 = ?",["3/5","3/10","2/25","1/5"],0,"Même dénominateur."],
 ["fractions","1/3 + 1/6 = ?",["1/2","2/9","2/6","1/9"],0,"2/6 + 1/6 = 3/6 = 1/2."],
 ["fractions","5/6 − 1/3 = ?",["1/2","4/3","4/6","1/6"],0,"5/6 − 2/6 = 3/6 = 1/2."],
 ["fractions","Quelle fraction est égale à 3/4 ?",["15/20","4/5","6/12","9/16"],0,"3 × 5 = 15 et 4 × 5 = 20."],
 ["fractions","Les 2/3 de 45 € font…",["30 €","15 €","90 €","67,50 €"],0,"45 ÷ 3 × 2 = 30."],
 ["fractions","17/5 s'écrit aussi…",["3 + 2/5","1 + 7/5","3,2","17,5"],0,"17 = 3 × 5 + 2."],
 ["puissances","7² = ?",["49","14","72","77"],0,"7 × 7."],
 ["puissances","2³ = ?",["8","6","9","23"],0,"2 × 2 × 2."],
 ["puissances","10³ = ?",["1 000","30","100","10 000"],0,"10 × 10 × 10."],
 ["puissances","3 + 2² = ?",["7","25","10","9"],0,"2² = 4 d'abord."],
 ["litteral","Pour x = 3, 4x − 5 = ?",["7","29","−1","12"],0,"4 × 3 − 5."],
 ["litteral","Développe 5(x − 2).",["5x − 10","5x − 2","x − 10","5x + 10"],0,"5 × x − 5 × 2."],
 ["litteral","Factorise 4x + 12.",["4(x + 3)","4(x + 12)","x(4 + 12)","12(x + 4)"],0,"4 × 3 = 12."],
 ["litteral","Réduis 2x + 5x.",["7x","10x","7x²","10x²"],0,"On ajoute les coefficients."],
 ["litteral","x × x s'écrit…",["x²","2x","xx2","x + x"],0,"Le carré de x."],
 ["litteral","3(x + 1) est…",["Un produit","Une somme","Une différence","Une équation"],0,"3 multiplié par (x + 1)."],
 ["equations","Solution de x + 12 = 30 ?",["18","42","2,5","360"],0,"30 − 12 = 18."],
 ["equations","Solution de 6x = 42 ?",["7","36","48","252"],0,"42 ÷ 6 = 7."],
 ["equations","Solution de x − 4,5 = 3 ?",["7,5","−1,5","1,5","13,5"],0,"3 + 4,5 = 7,5."],
 ["equations","« Le quadruple d'un nombre vaut 26 » s'écrit…",["4x = 26","x + 4 = 26","x/4 = 26","4 + 26 = x"],0,"Quadruple : 4 fois."]
);

C.vf.push(
 ["Dans 5 + 3 × 2, on calcule d'abord 5 + 3.",false,"La multiplication est prioritaire : 5 + 6 = 11."],
 ["Un nombre dont la somme des chiffres vaut 27 est divisible par 9.",true,"27 est dans la table de 9."],
 ["1 est un nombre premier.",false,"Il n'a qu'un seul diviseur."],
 ["−7 est plus grand que −3.",false,"−3 est plus proche de zéro : −3 > −7."],
 ["La somme de deux nombres opposés est nulle.",true,"(−5) + 5 = 0."],
 ["5 − (−2) = 3.",false,"5 − (−2) = 5 + 2 = 7."],
 ["1/2 + 1/2 = 2/4.",false,"1/2 + 1/2 = 2/2 = 1."],
 ["3/4 = 0,75.",true,"3 ÷ 4 = 0,75."],
 ["5² = 10.",false,"5² = 5 × 5 = 25."],
 ["x + x = x².",false,"x + x = 2x ; x × x = x²."],
 ["3(x + 2) = 3x + 6.",true,"On distribue le 3."],
 ["Diviser par 0,5, c'est multiplier par 2.",true,"Il y a deux demis dans 1."],
 ["0 est strictement positif.",false,"0 est positif et négatif, mais ni strictement positif ni strictement négatif."],
 ["La solution de 3x = 21 est 18.",false,"x = 21 ÷ 3 = 7."]
);

C.ordre.push(
 {t:"Calculer 40 − (3 + 2)² × 1,2",ic:"🧮",s:["Calculer la parenthèse : 3 + 2 = 5","Calculer la puissance : 5² = 25","Calculer la multiplication : 25 × 1,2 = 30","Calculer la soustraction : 40 − 30 = 10"]},
 {t:"Additionner deux fractions",ic:"🍕",s:["Chercher un dénominateur commun","Transformer chaque fraction","Additionner les numérateurs","Garder le dénominateur commun","Simplifier si possible"]},
 {t:"Résoudre un problème avec une équation",ic:"⚖️",s:["Choisir l'inconnue x","Traduire l'énoncé par une équation","Résoudre l'équation","Vérifier en remplaçant x","Conclure par une phrase"]}
);
