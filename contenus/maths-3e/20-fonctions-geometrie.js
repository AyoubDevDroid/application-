/* PARTIE 2 — Fonctions et géométrie */
const GRAPHE=(fs)=>{let h="<svg viewBox='0 0 240 170'><path d='M20 150H230M120 160V8' stroke='#5a64a8' stroke-width='1.5'/>"+[...Array(9)].map((_,i)=>"<path d='M"+(20+i*25)+" 148V152' stroke='#5a64a8'/>").join("")+"<text x='226' y='145' fill='var(--mut)' font-size='10'>x</text><text x='124' y='16' fill='var(--mut)' font-size='10'>y</text>";
 fs.forEach(([f,col,lab],k)=>{let d="";for(let x=-4;x<=4.01;x+=0.25){const y=f(x);if(y<-0.4||y>5.6)continue;d+=(d?"L":"M")+(120+x*25).toFixed(1)+" "+(150-y*25).toFixed(1)}h+="<path class='draw' style='animation-delay:"+k*.3+"s' d='"+d+"' stroke='"+col+"' stroke-width='3' fill='none'/><text x='"+(150+k*0)+"' y='"+(30+k*16)+"' fill='"+col+"' font-size='11' font-weight='800'>"+lab+"</text>"});return h+"</svg>"};

/* ---------- Notion de fonction ---------- */
C.modules.push({id:"fonctions",n:2,i:"📈",t:"Les fonctions",d:"Image, antécédent, tableau, courbe",
 s:[{h:"Une fonction, c'est une machine",l:["Une fonction f associe à chaque nombre x un seul nombre f(x), son <b>image</b>.","Si f(x) = 2x + 1, l'image de 3 est f(3) = 7.","3 est un <b>antécédent</b> de 7."]},
    {h:"Les trois façons de la donner",l:["Une <b>formule</b> : f(x) = x² − 3.","Un <b>tableau de valeurs</b>.","Une <b>courbe</b> : le point (x ; f(x)) est sur la courbe."]},
    {h:"Lire un graphique",l:["Image : on part de x sur l'axe horizontal, on monte jusqu'à la courbe, on lit y.","Antécédent : on part de y sur l'axe vertical, on va jusqu'à la courbe, on lit x."]}],
 k:["Fonction","Image","Antécédent"]});
C.fiches.fonctions={
 intro:"Une fonction transforme un nombre en un autre : le prix selon le nombre d'articles, la distance selon le temps. C'est une notion centrale du brevet, qu'on rencontre sous forme de formule, de tableau ou de graphique.",
 s:[
  {p:"Une <b>fonction</b> f associe à chaque nombre x un unique nombre noté f(x), appelé l'<b>image</b> de x. Si f(a) = b, on dit que a est <b>un antécédent</b> de b. Un nombre a une seule image, mais il peut avoir plusieurs antécédents (ou aucun).",
   fig:{type:"flux",legende:"La machine f(x) = 3x − 2",etapes:[["On entre x = 4",""],["3 × 4 − 2","calcul"],["L'image de 4","f(4) = 10"]]},
   q:["f(x) = x² − 1. L'image de −3 est…",["8","−10","10","−8"],0,"(−3)² − 1 = 9 − 1 = 8."]},
  {p:"Une fonction peut être donnée par une <b>formule</b>, par un <b>tableau de valeurs</b> (pratique pour tracer la courbe) ou par sa <b>représentation graphique</b> (la courbe formée par tous les points de coordonnées (x ; f(x))). Le tableur permet de calculer un tableau de valeurs automatiquement.",
   fig:{type:"svg",legende:"Courbe de f(x) = x²/4",svg:GRAPHE([[x=>x*x/4,"var(--pri)","f(x) = x²/4"]])},
   q:["Le point (2 ; 5) est sur la courbe de f. Cela signifie…",["f(2) = 5","f(5) = 2","f(2) = 2","2 = 5"],0,"Abscisse = x, ordonnée = f(x)."]},
  {p:"Sur un graphique : pour lire l'<b>image</b> d'un nombre, on part de l'axe horizontal (abscisses), on rejoint la courbe verticalement et on lit l'ordonnée. Pour lire les <b>antécédents</b> d'un nombre, on part de l'axe vertical (ordonnées), on rejoint la courbe horizontalement (il peut y avoir plusieurs points) et on lit les abscisses.",
   att:"Au brevet, on précise toujours « graphiquement » ou « par le calcul » et on laisse les traits de lecture sur le graphique.",
   q:["Sur la courbe de x²/4 ci-dessus, combien d'antécédents a le nombre 1 ?",["Deux : −2 et 2","Un seul : 2","Aucun","Un seul : 4"],0,"(−2)²/4 = 1 et 2²/4 = 1."]}
 ],
 retenir:["f(x) = image de x ; si f(a) = b, a est un antécédent de b.","Formule, tableau de valeurs, courbe.","Image : de l'axe horizontal vers la courbe ; antécédent : de l'axe vertical vers la courbe."]
};

/* ---------- Fonctions linéaires et affines ---------- */
C.modules.push({id:"affines",n:2,i:"📉",t:"Fonctions linéaires et affines",d:"f(x) = ax et f(x) = ax + b, droites, coefficient",
 s:[{h:"Fonction linéaire",l:["f(x) = <b>ax</b>. Elle traduit une situation de <b>proportionnalité</b>.","Sa représentation est une <b>droite qui passe par l'origine</b>."]},
    {h:"Fonction affine",l:["f(x) = <b>ax + b</b>. a = coefficient directeur, b = ordonnée à l'origine.","Sa représentation est une <b>droite</b> qui coupe l'axe vertical en b."]},
    {h:"Lire et calculer a",l:["a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁).","Quand x augmente de 1, f(x) augmente de a.","a &gt; 0 : droite qui monte ; a &lt; 0 : droite qui descend."]}],
 k:["Fonction linéaire","Fonction affine","Coefficient directeur","Ordonnée à l'origine"]});
C.fiches.affines={
 intro:"Les fonctions affines modélisent énormément de situations : un forfait plus un prix par unité, une température qui monte régulièrement, une recharge. Leur courbe est une droite, ce qui les rend faciles à tracer et à comparer.",
 s:[
  {p:"Une fonction <b>linéaire</b> s'écrit f(x) = ax. Elle modélise une proportionnalité (prix au kilo, vitesse constante). Sa courbe est une droite qui passe par l'<b>origine</b> du repère.",
   fig:{type:"svg",legende:"f(x) = 0,5x (linéaire) et g(x) = 0,5x + 2 (affine)",svg:GRAPHE([[x=>0.5*x,"#3db5ff","f(x) = 0,5x"],[x=>0.5*x+2,"var(--pri)","g(x) = 0,5x + 2"]])},
   q:["Laquelle est une fonction linéaire ?",["f(x) = −4x","f(x) = 2x + 1","f(x) = x²","f(x) = 5"],0,"De la forme ax, sans terme constant."]},
  {p:"Une fonction <b>affine</b> s'écrit f(x) = ax + b. Le nombre <b>b</b> (ordonnée à l'origine) est l'endroit où la droite coupe l'axe vertical. Le nombre <b>a</b> (coefficient directeur) donne la pente : quand x augmente de 1, f(x) varie de a.",
   ex:"Un taxi facture 4 € de prise en charge puis 1,50 € par km : f(x) = 1,5x + 4. Pour 10 km : 1,5 × 10 + 4 = 19 €.",
   q:["f(x) = −2x + 7. Quelle est l'ordonnée à l'origine ?",["7","−2","5","0"],0,"b = 7 : la droite coupe l'axe vertical en 7."]},
  {p:"Pour trouver a à partir de deux points (ou deux valeurs) : a = (différence des images) ÷ (différence des nombres). Si f(1) = 5 et f(4) = 11, a = (11 − 5) ÷ (4 − 1) = 2. Puis b = f(1) − a × 1 = 3, donc f(x) = 2x + 3.",
   fig:{type:"flux",legende:"Trouver f affine avec f(2) = 1 et f(5) = 7",etapes:[["a = (7 − 1) ÷ (5 − 2)","2"],["b = 1 − 2 × 2","−3"],["Fonction","f(x) = 2x − 3"]]},
   q:["f affine, f(0) = 3 et f(2) = 7. f(x) = ?",["2x + 3","3x + 2","4x + 3","2x + 7"],0,"b = f(0) = 3 ; a = (7 − 3) ÷ 2 = 2."]}
 ],
 retenir:["Linéaire f(x) = ax : proportionnalité, droite par l'origine.","Affine f(x) = ax + b : droite qui coupe l'axe vertical en b.","a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁) ; a > 0 la droite monte."]
};

/* ---------- Proportionnalité, pourcentages, vitesses ---------- */
C.modules.push({id:"proportionnalite",n:2,i:"💯",t:"Pourcentages, évolutions, vitesses",d:"Coefficient multiplicateur, grandeurs composées",
 s:[{h:"Appliquer un pourcentage",l:["t % de N = N × t ÷ 100.","Augmenter de t % : multiplier par (1 + t/100). +20 % → × 1,2.","Diminuer de t % : multiplier par (1 − t/100). −30 % → × 0,7."]},
    {h:"Évolutions successives",l:["Les coefficients se <b>multiplient</b> : +10 % puis +10 % → × 1,1 × 1,1 = × 1,21, soit +21 %.","+50 % puis −50 % ne ramène pas au départ : × 1,5 × 0,5 = × 0,75."]},
    {h:"Vitesse et grandeurs composées",l:["v = d ÷ t ; d = v × t ; t = d ÷ v.","Conversion : 1 m/s = 3,6 km/h.","Autres grandeurs composées : débit (L/min), prix au kg, masse volumique."]}],
 k:["Pourcentage","Coefficient multiplicateur","Vitesse moyenne"]});
C.fiches.proportionnalite={
 intro:"Soldes, hausses de prix, taux de réussite, vitesse moyenne : au brevet, la proportionnalité se cache partout. Le coefficient multiplicateur permet de traiter toutes les évolutions en une seule multiplication.",
 s:[
  {p:"Augmenter un prix de 20 %, c'est lui ajouter 20 % de lui-même : P + 0,2P = 1,2P. On multiplie donc par le <b>coefficient multiplicateur</b> 1,2. Diminuer de 30 %, c'est multiplier par 0,7. Retrouver le prix de départ : on divise par le coefficient.",
   fig:{type:"barres",legende:"Coefficients multiplicateurs",items:[["Baisse de 50 %",0.5,"",""],["Baisse de 30 %",0.7,""],["Hausse de 20 %",1.2,""],["Hausse de 100 % (doubler)",2,""]]},
   q:["Un article à 80 € augmente de 15 %. Nouveau prix ?",["92 €","95 €","68 €","80,15 €"],0,"80 × 1,15 = 92."]},
  {p:"Quand deux évolutions se suivent, on <b>multiplie les coefficients</b> (on n'additionne pas les pourcentages). Une hausse de 50 % suivie d'une baisse de 50 % donne × 1,5 × 0,5 = × 0,75 : c'est une baisse de 25 %.",
   att:"+10 % puis −10 % ne ramène pas au prix de départ : × 1,1 × 0,9 = × 0,99, soit une baisse de 1 %.",
   q:["Un prix baisse de 20 % puis encore de 10 %. Baisse totale ?",["28 %","30 %","2 %","25 %"],0,"0,8 × 0,9 = 0,72 : baisse de 28 %."]},
  {p:"La <b>vitesse moyenne</b> est une grandeur composée : v = d ÷ t. Attention aux unités et aux durées : 1 h 30 min = 1,5 h. Pour convertir des m/s en km/h, on multiplie par 3,6 (1 m/s = 3 600 m/h = 3,6 km/h).",
   fig:{type:"flux",legende:"Une course de 12 km en 1 h 15 min",etapes:[["Durée en heures","1 h 15 = 1,25 h"],["v = d ÷ t","12 ÷ 1,25"],["Vitesse moyenne","9,6 km/h"]]},
   q:["Un cycliste parcourt 45 km en 1 h 30 min. Sa vitesse moyenne ?",["30 km/h","45 km/h","34,6 km/h","67,5 km/h"],0,"45 ÷ 1,5 = 30."]}
 ],
 retenir:["+t % → × (1 + t/100) ; −t % → × (1 − t/100).","Évolutions successives : on multiplie les coefficients.","v = d ÷ t ; durées en heures décimales ; 1 m/s = 3,6 km/h."]
};

/* ---------- Pythagore ---------- */
C.modules.push({id:"pythagore",n:2,i:"📐",t:"Le théorème de Pythagore",d:"Calculer une longueur, prouver un angle droit",
 s:[{h:"Le théorème",l:["Dans un triangle <b>rectangle</b>, le carré de l'<b>hypoténuse</b> est égal à la somme des carrés des deux autres côtés.","ABC rectangle en A : <b>BC² = AB² + AC²</b>."]},
    {h:"Calculer une longueur",l:["Hypoténuse : BC = √(AB² + AC²).","Autre côté : AB = √(BC² − AC²)."]},
    {h:"La réciproque",l:["Si BC² = AB² + AC² (BC le plus grand côté), le triangle est rectangle en A.","Sinon, il n'est pas rectangle (contraposée)."]}],
 k:["Hypoténuse","Théorème de Pythagore","Réciproque"]});
C.fiches.pythagore={
 intro:"Le théorème de Pythagore relie les trois côtés d'un triangle rectangle. Il sert à calculer une longueur qu'on ne peut pas mesurer (hauteur d'une échelle, diagonale d'un écran) et, avec sa réciproque, à prouver qu'un angle est droit. Il tombe presque chaque année au brevet.",
 s:[
  {p:"Dans un triangle rectangle, l'<b>hypoténuse</b> est le côté opposé à l'angle droit : c'est le plus long. Le théorème dit : si ABC est rectangle en A, alors <b>BC² = AB² + AC²</b>.",
   fig:{type:"svg",legende:"Triangle rectangle en A : BC² = AB² + AC²",svg:"<svg viewBox='0 0 240 150'><path d='M40 130V30L200 130Z' fill='rgba(255,157,92,.15)' stroke='#fff' stroke-width='2.5'/><path d='M40 118H52V130' stroke='var(--pri)' stroke-width='2' fill='none'/><path d='M40 30L200 130' stroke='var(--pri)' stroke-width='4' class='draw'/><text x='26' y='140' fill='#fff' font-size='13' font-weight='800'>A</text><text x='26' y='30' fill='#fff' font-size='13' font-weight='800'>B</text><text x='204' y='140' fill='#fff' font-size='13' font-weight='800'>C</text><text x='130' y='70' fill='var(--pri)' font-size='12' font-weight='800'>hypoténuse</text></svg>"},
   q:["Dans le triangle DEF rectangle en E, l'hypoténuse est…",["[DF]","[DE]","[EF]","On ne peut pas savoir"],0,"Le côté opposé à l'angle droit en E."]},
  {p:"Pour calculer l'hypoténuse : on additionne les carrés des deux autres côtés puis on prend la racine. Pour calculer un autre côté : carré de l'hypoténuse <b>moins</b> carré du côté connu, puis racine.",
   fig:{type:"flux",legende:"ABC rectangle en A, AB = 6 cm, AC = 8 cm. Calculer BC.",etapes:[["BC² = AB² + AC²","6² + 8²"],["BC² = 36 + 64","100"],["BC = √100","10 cm"]]},
   ex:"Une échelle de 5 m est posée contre un mur, son pied à 1,5 m du mur. Hauteur atteinte : h² = 5² − 1,5² = 25 − 2,25 = 22,75, donc h ≈ 4,77 m.",
   q:["Triangle rectangle d'hypoténuse 13 cm et d'un côté 5 cm. Le troisième côté mesure…",["12 cm","8 cm","√194 cm","18 cm"],0,"13² − 5² = 169 − 25 = 144 ; √144 = 12."]},
  {p:"La <b>réciproque</b> permet de prouver qu'un triangle est rectangle : on calcule séparément le carré du plus grand côté et la somme des carrés des deux autres. S'ils sont égaux, le triangle est rectangle (l'angle droit est en face du plus grand côté). S'ils sont différents, il n'est pas rectangle.",
   att:"On calcule les deux membres séparément, sans écrire d'égalité tant qu'on ne l'a pas vérifiée.",
   q:["Un triangle a pour côtés 7 cm, 24 cm et 25 cm. Est-il rectangle ?",["Oui : 25² = 7² + 24²","Non","On ne peut pas savoir","Oui, car 7 + 24 > 25"],0,"625 = 49 + 576."]}
 ],
 retenir:["Rectangle en A : BC² = AB² + AC² (BC = hypoténuse).","Hypoténuse : √(somme des carrés) ; autre côté : √(différence).","Réciproque : on compare BC² et AB² + AC² calculés séparément."]
};

/* ---------- Thalès et triangles semblables ---------- */
C.modules.push({id:"thales",n:2,i:"🔺",t:"Thalès et triangles semblables",d:"Calculer avec des parallèles, agrandissement, réduction",
 s:[{h:"Le théorème de Thalès",l:["Deux droites sécantes en A, coupées par deux <b>parallèles</b> (BC) // (MN).","Alors <b>AM/AB = AN/AC = MN/BC</b>.","Deux configurations : « triangles emboîtés » ou « papillon »."]},
    {h:"La réciproque",l:["Si AM/AB = AN/AC et les points sont dans le même ordre, alors (MN) // (BC)."]},
    {h:"Triangles semblables",l:["Deux triangles sont <b>semblables</b> s'ils ont les mêmes angles.","Leurs côtés sont alors proportionnels (coefficient k).","Agrandissement (k &gt; 1) ou réduction (k &lt; 1) : longueurs × k, aires × k², volumes × k³."]}],
 k:["Théorème de Thalès","Triangles semblables","Agrandissement"]});
C.fiches.thales={
 intro:"Mesurer la hauteur d'un arbre avec son ombre, la largeur d'une rivière sans la traverser : c'est le théorème de Thalès. Il exprime une proportionnalité entre les longueurs dès que deux droites sont parallèles.",
 s:[
  {p:"Les points A, M, B sont alignés, ainsi que A, N, C, et les droites (MN) et (BC) sont <b>parallèles</b>. Alors les triangles AMN et ABC ont des longueurs proportionnelles : <b>AM/AB = AN/AC = MN/BC</b>. Cela marche aussi en « papillon », quand A est entre M et B.",
   fig:{type:"svg",legende:"Configuration emboîtée : (MN) // (BC)",svg:"<svg viewBox='0 0 240 150'><path d='M30 135L120 15L215 135Z' fill='none' stroke='#fff' stroke-width='2'/><path d='M66 87H168' stroke='var(--pri)' stroke-width='3' class='draw'/><path d='M30 135H215' stroke='var(--pri)' stroke-width='3'/><g fill='#fff' font-size='12' font-weight='800'><text x='116' y='12'>A</text><text x='50' y='88'>M</text><text x='172' y='88'>N</text><text x='16' y='146'>B</text><text x='218' y='146'>C</text></g></svg>"},
   q:["(MN) // (BC), AM = 3, AB = 9, BC = 12. MN = ?",["4","36","6","8"],0,"MN/BC = AM/AB = 1/3, donc MN = 12/3 = 4."]},
  {p:"La <b>réciproque</b> prouve que deux droites sont parallèles : on calcule séparément AM/AB et AN/AC. S'ils sont égaux (et que les points sont dans le même ordre), alors (MN) // (BC). S'ils sont différents, les droites ne sont pas parallèles.",
   q:["AM/AB = 0,4 et AN/AC = 0,45. Les droites (MN) et (BC) sont…",["Non parallèles","Parallèles","Perpendiculaires","Confondues"],0,"Les quotients sont différents."]},
  {p:"Deux triangles sont <b>semblables</b> quand ils ont les mêmes angles : l'un est un agrandissement ou une réduction de l'autre. Les longueurs sont multipliées par un même coefficient k, les aires par k² et les volumes par k³.",
   fig:{type:"barres",legende:"Agrandissement de coefficient k = 2",items:[["Longueurs",2,"× 2"],["Aires",4,"× 4"],["Volumes",8,"× 8"]]},
   q:["Une maquette est à l'échelle 1/10. Le volume réel est…",["1 000 fois plus grand","10 fois plus grand","100 fois plus grand","Le même"],0,"Volumes × k³ = 10³ = 1 000."]}
 ],
 retenir:["(MN) // (BC) ⟹ AM/AB = AN/AC = MN/BC.","Réciproque : quotients égaux + même ordre ⟹ parallèles.","Semblables : mêmes angles ; longueurs × k, aires × k², volumes × k³."]
};

/* ---------- Trigonométrie ---------- */
C.modules.push({id:"trigo",n:2,i:"📏",t:"La trigonométrie",d:"Cosinus, sinus, tangente dans le triangle rectangle",
 s:[{h:"Les trois rapports",l:["Dans un triangle <b>rectangle</b>, pour un angle aigu :","<b>cos</b> = côté adjacent ÷ hypoténuse.","<b>sin</b> = côté opposé ÷ hypoténuse.","<b>tan</b> = côté opposé ÷ côté adjacent.","Moyen mnémotechnique : <b>SOH CAH TOA</b>."]},
    {h:"Calculer une longueur",l:["On choisit le rapport qui contient le côté connu et le côté cherché.","AB = BC × cos(B) ; AC = AB × tan(B)…"]},
    {h:"Calculer un angle",l:["On calcule le rapport, puis on utilise arccos, arcsin ou arctan (touches cos⁻¹, sin⁻¹, tan⁻¹).","La calculatrice doit être en <b>degrés</b>."]}],
 k:["Cosinus","Sinus","Tangente","Côté adjacent","Côté opposé"]});
C.fiches.trigo={
 intro:"Pythagore relie les côtés ; la trigonométrie relie les côtés et les angles. Avec un seul angle et un côté, on peut calculer tout un triangle rectangle : hauteur d'un bâtiment, longueur d'une rampe, pente d'une route.",
 s:[
  {p:"Dans un triangle rectangle, pour un angle aigu donné : le <b>côté adjacent</b> touche l'angle (et ce n'est pas l'hypoténuse), le <b>côté opposé</b> est en face. <b>cos = adjacent/hypoténuse</b>, <b>sin = opposé/hypoténuse</b>, <b>tan = opposé/adjacent</b>. Retiens SOH CAH TOA (Sinus Opposé Hypoténuse, Cosinus Adjacent Hypoténuse, Tangente Opposé Adjacent).",
   fig:{type:"svg",legende:"Pour l'angle B : adjacent [AB], opposé [AC], hypoténuse [BC]",svg:"<svg viewBox='0 0 240 150'><path d='M40 130H200V30Z' fill='rgba(255,157,92,.12)' stroke='#fff' stroke-width='2'/><path d='M188 130V118H200' stroke='var(--pri)' stroke-width='2' fill='none'/><path d='M75 130A35 35 0 0 0 70 112' stroke='var(--pri)' stroke-width='3' fill='none'/><g font-size='11' font-weight='800'><text x='96' y='146' fill='#3db5ff'>adjacent</text><text x='205' y='85' fill='#2ed47a'>opposé</text><text x='86' y='72' fill='var(--pri)'>hypoténuse</text><text x='26' y='140' fill='#fff'>B</text><text x='202' y='144' fill='#fff'>A</text><text x='202' y='26' fill='#fff'>C</text></g></svg>"},
   q:["Pour un angle aigu d'un triangle rectangle, tan = ?",["Opposé ÷ adjacent","Adjacent ÷ hypoténuse","Opposé ÷ hypoténuse","Hypoténuse ÷ opposé"],0,"TOA."]},
  {p:"Pour calculer une <b>longueur</b>, on choisit le rapport qui relie le côté connu et le côté cherché, on l'écrit, puis on isole l'inconnue. Exemple : hypoténuse BC = 10 cm, angle B = 30°, on cherche AC (opposé à B) : sin(30°) = AC/10, donc AC = 10 × sin(30°) = 5 cm.",
   fig:{type:"flux",legende:"Une rampe de 4 m fait un angle de 12° avec le sol. Quelle hauteur ?",etapes:[["sin(12°) = hauteur ÷ 4","opposé ÷ hypoténuse"],["hauteur = 4 × sin(12°)","≈ 4 × 0,208"],["Résultat","≈ 0,83 m"]]},
   q:["Triangle rectangle : hypoténuse 8 cm, angle 60°. Le côté adjacent à cet angle mesure…",["4 cm","6,9 cm","8 cm","16 cm"],0,"8 × cos(60°) = 8 × 0,5 = 4."]},
  {p:"Pour calculer un <b>angle</b>, on calcule d'abord un rapport (avec deux côtés connus), puis on utilise la touche inverse de la calculatrice : cos⁻¹ (arccos), sin⁻¹ ou tan⁻¹. Vérifie que la calculatrice est en mode <b>degrés</b>.",
   ex:"Une route monte de 15 m sur 200 m de distance horizontale. tan(angle) = 15/200 = 0,075, donc angle = tan⁻¹(0,075) ≈ 4,3°.",
   att:"La trigonométrie ne s'utilise que dans un triangle rectangle, et avec les angles aigus.",
   q:["cos(B) = 0,5. Combien mesure l'angle B ?",["60°","30°","45°","0,5°"],0,"cos⁻¹(0,5) = 60°."]}
 ],
 retenir:["Triangle rectangle uniquement : SOH CAH TOA.","Longueur : choisir le bon rapport, isoler l'inconnue.","Angle : cos⁻¹, sin⁻¹, tan⁻¹, calculatrice en degrés."]
};

/* ---------- Transformations ---------- */
C.modules.push({id:"transformations",n:2,i:"🔄",t:"Les transformations",d:"Symétries, translation, rotation, homothétie",
 s:[{h:"Les cinq transformations",l:["<b>Symétrie axiale</b> : pliage le long d'une droite.","<b>Symétrie centrale</b> : demi-tour autour d'un point.","<b>Translation</b> : glissement (direction, sens, longueur).","<b>Rotation</b> : tourner autour d'un point d'un angle donné.","<b>Homothétie</b> : agrandir ou réduire depuis un centre, de rapport k."]},
    {h:"Ce qu'elles conservent",l:["Symétries, translation, rotation conservent les longueurs, les angles et les aires.","L'homothétie de rapport k multiplie les longueurs par |k| et les aires par k² ; elle conserve les angles."]}],
 k:["Translation","Rotation","Homothétie","Symétrie centrale"]});
C.fiches.transformations={
 intro:"Les frises, les pavages, les logos, les animations : tout cela repose sur des transformations. Au brevet, on demande de les reconnaître, de construire une image et de savoir ce qu'elles conservent.",
 s:[
  {p:"La <b>symétrie axiale</b> plie la figure le long d'une droite. La <b>symétrie centrale</b> la fait tourner d'un demi-tour (180°) autour d'un point. La <b>translation</b> la fait glisser sans tourner. La <b>rotation</b> la fait tourner autour d'un centre d'un angle donné (dans un sens donné).",
   fig:{type:"cycle",centre:"Transformations",etapes:[["Symétrie axiale<br>pliage","#3db5ff"],["Symétrie centrale<br>demi-tour","#7be0d0"],["Translation<br>glissement","#2ed47a"],["Rotation<br>tourner","#ffc83d"],["Homothétie<br>agrandir / réduire","#ff8a3d"]]},
   q:["Une figure qui glisse sans tourner subit…",["Une translation","Une rotation","Une homothétie","Une symétrie axiale"],0,"Un glissement."]},
  {p:"L'<b>homothétie</b> de centre O et de rapport k agrandit (k &gt; 1) ou réduit (0 &lt; k &lt; 1) la figure depuis O. Si k est négatif, la figure est en plus retournée de l'autre côté de O. Les longueurs sont multipliées par |k|, les aires par k², les angles sont conservés : l'image est semblable à la figure de départ.",
   fig:{type:"barres",legende:"Homothétie de rapport 3",items:[["Une longueur de 2 cm devient",6,"cm"],["Une aire de 5 cm² devient",45,"cm²"]]},
   q:["Une homothétie de rapport 0,5 transforme un segment de 8 cm en un segment de…",["4 cm","16 cm","8 cm","2 cm"],0,"8 × 0,5 = 4."]}
 ],
 retenir:["Symétries, translation, rotation : conservent longueurs, angles, aires.","Homothétie de rapport k : longueurs × |k|, aires × k², angles conservés."]
};

/* ---------- Solides et volumes ---------- */
C.modules.push({id:"solides",n:2,i:"🧊",t:"Solides, volumes et sphère",d:"Volumes, sections, repérage sur la Terre",
 s:[{h:"Les volumes à connaître",l:["Prisme droit et cylindre : <b>V = aire de la base × hauteur</b>.","Pyramide et cône : <b>V = (aire de la base × hauteur) ÷ 3</b>.","Boule : <b>V = 4/3 × π × r³</b>.","1 L = 1 dm³ = 1 000 cm³."]},
    {h:"Les sections",l:["Section d'un pavé par un plan parallèle à une face : un rectangle.","Section d'un cylindre parallèle à la base : un disque.","Section d'une boule par un plan : un cercle (disque)."]},
    {h:"Se repérer sur la sphère",l:["Sur la Terre, un point est repéré par sa <b>latitude</b> (Nord/Sud de l'équateur) et sa <b>longitude</b> (Est/Ouest du méridien de Greenwich)."]}],
 k:["Volume","Cylindre","Cône","Pyramide","Latitude"]});
C.fiches.solides={
 intro:"Remplir une piscine, fabriquer un cornet de glace, calculer la quantité d'air dans un ballon : au brevet, les volumes arrivent souvent en fin de problème. Il faut connaître les formules et maîtriser les conversions.",
 s:[
  {p:"Pour les solides « droits » (prisme, pavé, cylindre), le volume est l'<b>aire de la base × la hauteur</b>. Pour les solides « pointus » (pyramide, cône), c'est le <b>tiers</b> de cela. Pour la boule de rayon r : 4/3 × π × r³.",
   fig:{type:"flux",legende:"Un cornet de glace (cône) de rayon 3 cm et de hauteur 10 cm",etapes:[["Aire de la base","π × 3² ≈ 28,27 cm²"],["× hauteur ÷ 3","28,27 × 10 ÷ 3"],["Volume","≈ 94,2 cm³"]]},
   q:["Volume d'un cylindre de rayon 2 cm et de hauteur 5 cm (arrondi) ?",["62,8 cm³","20,9 cm³","31,4 cm³","10 cm³"],0,"π × 2² × 5 = 20π ≈ 62,8."]},
  {p:"Les conversions de volumes vont de 1 000 en 1 000 : 1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³. Et <b>1 L = 1 dm³</b>. Une piscine de 50 m³ contient 50 000 L.",
   att:"Avant de calculer un volume, toutes les longueurs doivent être dans la même unité.",
   q:["2,5 m³ = ?",["2 500 L","250 L","25 L","25 000 L"],0,"1 m³ = 1 000 dm³ = 1 000 L."]},
  {p:"Couper un solide par un plan donne une <b>section</b> : un pavé coupé parallèlement à une face donne un rectangle ; un cylindre coupé parallèlement à sa base donne un disque ; une boule coupée par un plan donne un disque. Sur la Terre (presque une sphère), un lieu est repéré par sa <b>latitude</b> (de 0° à l'équateur à 90° aux pôles, Nord ou Sud) et sa <b>longitude</b> (de 0° à Greenwich à 180°, Est ou Ouest).",
   ex:"Paris est à environ 49° de latitude Nord et 2° de longitude Est.",
   q:["La section d'une boule par un plan est…",["Un disque","Un carré","Un triangle","Un rectangle"],0,"Toujours un disque (un cercle et son intérieur)."]}
 ],
 retenir:["Prisme, cylindre : B × h. Pyramide, cône : B × h ÷ 3. Boule : 4/3 π r³.","1 L = 1 dm³ = 1 000 cm³ ; 1 m³ = 1 000 L.","Sections : rectangle, disque… ; Terre : latitude et longitude."]
};

C.lexique.push(
 ["Fonction","Procédé qui associe à chaque nombre x un unique nombre f(x)."],
 ["Image","f(x) est l'image de x par la fonction f."],
 ["Antécédent","Si f(a) = b, a est un antécédent de b."],
 ["Fonction linéaire","Fonction de la forme f(x) = ax ; sa courbe est une droite passant par l'origine."],
 ["Fonction affine","Fonction de la forme f(x) = ax + b ; sa courbe est une droite."],
 ["Coefficient directeur","Le nombre a de f(x) = ax + b : la variation de f(x) quand x augmente de 1."],
 ["Ordonnée à l'origine","Le nombre b de f(x) = ax + b : f(0) = b."],
 ["Pourcentage","Proportion exprimée sur 100."],
 ["Coefficient multiplicateur","Nombre par lequel on multiplie pour appliquer une évolution : +20 % → × 1,2."],
 ["Vitesse moyenne","Distance parcourue divisée par la durée : v = d ÷ t."],
 ["Hypoténuse","Côté opposé à l'angle droit dans un triangle rectangle ; le plus long."],
 ["Théorème de Pythagore","Dans un triangle rectangle, carré de l'hypoténuse = somme des carrés des deux autres côtés."],
 ["Réciproque","Énoncé « inverse » d'un théorème, qui permet de prouver la situation de départ (angle droit, parallélisme)."],
 ["Théorème de Thalès","Avec deux parallèles coupant deux droites sécantes, les longueurs sont proportionnelles."],
 ["Triangles semblables","Triangles ayant les mêmes angles ; leurs côtés sont proportionnels."],
 ["Agrandissement","Transformation qui multiplie les longueurs par k > 1 (aires × k², volumes × k³)."],
 ["Cosinus","Dans un triangle rectangle : côté adjacent ÷ hypoténuse."],
 ["Sinus","Dans un triangle rectangle : côté opposé ÷ hypoténuse."],
 ["Tangente","Dans un triangle rectangle : côté opposé ÷ côté adjacent."],
 ["Côté adjacent","Côté de l'angle (autre que l'hypoténuse) dans un triangle rectangle."],
 ["Côté opposé","Côté situé en face de l'angle dans un triangle rectangle."],
 ["Translation","Transformation qui fait glisser une figure sans la tourner."],
 ["Rotation","Transformation qui fait tourner une figure autour d'un point, d'un angle donné."],
 ["Homothétie","Transformation qui agrandit ou réduit une figure depuis un centre, d'un rapport k."],
 ["Symétrie centrale","Transformation qui fait faire un demi-tour à la figure autour d'un point."],
 ["Volume","Mesure de l'espace occupé par un solide."],
 ["Cylindre","Solide droit à bases circulaires. V = π r² h."],
 ["Cône","Solide à base circulaire et à sommet. V = π r² h ÷ 3."],
 ["Pyramide","Solide à base polygonale et à sommet. V = B × h ÷ 3."],
 ["Latitude","Angle qui repère un lieu au Nord ou au Sud de l'équateur (0° à 90°)."]
);

C.quiz.push(
 ["fonctions","f(x) = 2x² − 3. f(2) = ?",["5","1","13","−5"],0,"2 × 4 − 3 = 5."],
 ["fonctions","f(5) = 12. Que vaut l'image de 5 ?",["12","5","60","On ne sait pas"],0,"L'image de 5 est f(5)."],
 ["fonctions","g(x) = 3x − 6. Un antécédent de 0 est…",["2","−6","0","6"],0,"3x − 6 = 0 → x = 2."],
 ["affines","La représentation d'une fonction linéaire est…",["Une droite passant par l'origine","Une parabole","Une droite horizontale toujours","Un cercle"],0,"f(0) = 0."],
 ["affines","f(x) = 4x − 1. Le coefficient directeur est…",["4","−1","3","1/4"],0,"a = 4."],
 ["affines","f(x) = −x + 5 est…",["Affine décroissante","Linéaire","Affine croissante","Constante"],0,"a = −1 < 0 : la droite descend."],
 ["affines","f affine avec f(1) = 3 et f(3) = 9. a = ?",["3","6","2","9"],0,"(9 − 3) ÷ (3 − 1) = 3."],
 ["proportionnalite","Une baisse de 25 % correspond à multiplier par…",["0,75","0,25","1,25","−0,25"],0,"1 − 0,25."],
 ["proportionnalite","Un prix de 200 € augmente de 10 % puis de 10 %. Nouveau prix ?",["242 €","240 €","220 €","200 €"],0,"200 × 1,1 × 1,1 = 242."],
 ["proportionnalite","10 m/s en km/h ?",["36 km/h","10 km/h","3,6 km/h","100 km/h"],0,"× 3,6."],
 ["proportionnalite","Un trajet de 150 km à 60 km/h dure…",["2 h 30 min","2 h 50 min","2,5 min","9 h"],0,"150 ÷ 60 = 2,5 h."],
 ["pythagore","ABC rectangle en B. Quelle égalité est vraie ?",["AC² = AB² + BC²","AB² = AC² + BC²","BC² = AB² + AC²","AB = AC + BC"],0,"L'hypoténuse est en face de B : [AC]."],
 ["pythagore","Les côtés de l'angle droit mesurent 3 cm et 4 cm. L'hypoténuse mesure…",["5 cm","7 cm","25 cm","12 cm"],0,"√(9 + 16) = 5."],
 ["pythagore","Pour prouver qu'un triangle est rectangle, on utilise…",["La réciproque de Pythagore","Le théorème de Pythagore","La trigonométrie","Thalès"],0,"La réciproque prouve l'angle droit."],
 ["thales","Dans Thalès, il faut que les droites (MN) et (BC) soient…",["Parallèles","Perpendiculaires","Sécantes","De même longueur"],0,"C'est la condition du théorème."],
 ["thales","Un agrandissement de coefficient 3 multiplie les aires par…",["9","3","27","6"],0,"k² = 9."],
 ["thales","AM/AB = AN/AC = 2/5 et AB = 10. AM = ?",["4","25","2","5"],0,"10 × 2/5 = 4."],
 ["trigo","cos(angle) = ?",["Adjacent ÷ hypoténuse","Opposé ÷ hypoténuse","Opposé ÷ adjacent","Hypoténuse ÷ adjacent"],0,"CAH."],
 ["trigo","sin(30°) = ?",["0,5","0,866","1","30"],0,"Valeur classique."],
 ["trigo","La trigonométrie s'applique dans…",["Un triangle rectangle","N'importe quel triangle","Un carré","Un cercle"],0,"Uniquement le triangle rectangle."],
 ["transformations","Une symétrie centrale correspond à une rotation de…",["180°","90°","360°","45°"],0,"Un demi-tour."],
 ["transformations","Une homothétie de rapport 2 multiplie les aires par…",["4","2","8","1"],0,"k² = 4."],
 ["transformations","Quelle transformation ne conserve pas les longueurs (si k ≠ 1 et k ≠ −1) ?",["L'homothétie","La translation","La rotation","La symétrie axiale"],0,"Elle agrandit ou réduit."],
 ["solides","Volume d'un cône de base 30 cm² et de hauteur 9 cm ?",["90 cm³","270 cm³","39 cm³","810 cm³"],0,"30 × 9 ÷ 3 = 90."],
 ["solides","1 L = ?",["1 dm³","1 cm³","1 m³","10 cm³"],0,"1 L = 1 dm³ = 1 000 cm³."],
 ["solides","La formule du volume de la boule est…",["4/3 × π × r³","π × r² × h","4 × π × r²","π × r³"],0,"4 × π × r² est l'aire de la sphère."]
);

C.vf.push(
 ["Un nombre peut avoir plusieurs antécédents par une fonction.",true,"Par x², 4 a deux antécédents : 2 et −2."],
 ["Toute fonction linéaire est affine.",true,"Avec b = 0."],
 ["+10 % puis −10 % ramène au prix de départ.",false,"× 1,1 × 0,9 = × 0,99."],
 ["Dans un triangle rectangle, l'hypoténuse est le plus long côté.",true,"Elle est en face de l'angle droit."],
 ["On peut utiliser Thalès sans droites parallèles.",false,"Le parallélisme est indispensable (sauf pour la réciproque, qui le prouve)."],
 ["sin = opposé ÷ adjacent.",false,"sin = opposé ÷ hypoténuse ; tan = opposé ÷ adjacent."],
 ["Le volume d'une pyramide est le tiers de celui du prisme de même base et même hauteur.",true,"V = B × h ÷ 3."],
 ["Une translation conserve les longueurs.",true,"C'est un simple glissement."],
 ["Un agrandissement de rapport 2 double les volumes.",false,"Il les multiplie par 2³ = 8."],
 ["1 m³ = 1 000 L.",true,"1 m³ = 1 000 dm³."]
);

C.ordre.push(
 {t:"Rédiger un calcul avec Pythagore",ic:"📐",s:["Citer le triangle et son angle droit","Écrire « D'après le théorème de Pythagore »","Écrire l'égalité avec l'hypoténuse","Remplacer par les valeurs","Calculer le carré cherché","Prendre la racine et arrondir avec l'unité"]},
 {t:"Calculer un angle par la trigonométrie",ic:"📏",s:["Vérifier que le triangle est rectangle","Repérer hypoténuse, côté opposé et côté adjacent","Choisir cos, sin ou tan selon les côtés connus","Écrire le rapport et le calculer","Utiliser cos⁻¹, sin⁻¹ ou tan⁻¹ (calculatrice en degrés)","Arrondir et conclure"]}
);
