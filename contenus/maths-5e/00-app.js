/* Maths 5e — contenu conforme au nouveau programme de mathématiques du cycle 4
   (arrêté du 18-2-2026, BO n° 10 du 5 mars 2026), applicable en 5e dès la rentrée 2026. Vérifié en octobre 2026.
   Source : https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A (annexe 2, partie « Cinquième » de chaque thème).
   Notions de 5e prises en compte : relatifs (addition, soustraction), fractions de dénominateurs quelconques (+ et −),
   carré et cube, calcul littéral (k(a + b), réduire ax + b, équations ax = c et x + b = c), critères par 3 et 9,
   repère orthogonal, prisme et cylindre, demi-tour, angles alternes-internes / correspondants, somme des angles du
   triangle (démontrée), hauteurs, médianes, médiatrices, parallélogrammes, fréquences, moyenne, probabilités,
   proportionnalité, « en fonction de », programmation par blocs avec boucle « répéter ». */
const C={
 id:"maths5",app:"Maths 5e",icon:"🧭",
 sousTitre:"Tout le nouveau programme de 5e (rentrée 2026) : cours illustrés, jeux, problèmes pas à pas et exercices à l'infini.",
 theme:{pri:"#2ed47a",pri2:"#18995a",acc:"#ffc83d"},
 pub:{actif:false,toutesLes:3},   // public mineur : voir docs/PUBLICITE.md avant d'activer
 examen:{titre:"Évaluation de fin de 5e",questions:30,seuil:18,minutes:30},
 calcul:[{op:"+",a:[25,180],b:[16,99]},{op:"−",a:[60,250],b:[15,99]},{op:"×",a:[3,12],b:[3,12]},{op:"×",a:[12,25],b:[3,9]},{op:"÷",a:[3,12],b:[2,12]}],
 niveaux:[
  {ic:"🔢",t:"Partie 1 — Nombres et calculs",d:"Priorités, divisibilité, nombres relatifs, fractions, puissances, calcul littéral, équations."},
  {ic:"📐",t:"Partie 2 — Espace et géométrie",d:"Repérage, solides et volumes, demi-tour, angles et parallèles, triangles, parallélogrammes."},
  {ic:"📊",t:"Partie 3 — Données, proportionnalité, programmation",d:"Statistiques, probabilités, proportionnalité, « en fonction de », programmes par blocs."}
 ],
 grades:["Débutant","Curieux","Explorateur","Explorateur","Calculateur","Calculateur","Géomètre","Géomètre","As des maths","As des maths","Champion","Champion","Expert","Expert","Génie des maths","Génie des maths"],
 jeux:{diag:{e:"🧩",t:"Problèmes",s:"Résous pas à pas"},sym:{e:"🔷",t:"Figures",s:"Reconnais les figures"},qui:{s:"Devine la propriété"},atel:{t:"Exercices",s:"À l'infini, avec correction"}},
 diagTextes:{titre:"🧩 Problèmes pas à pas",sous:"Lis bien l'énoncé, puis avance étape par étape. Une erreur te coûte une étoile, mais tu peux réessayer.",entete:"🧩 Nouveau problème",carte:"PROBLÈME N°",prio:false,champs:[["lieu","📍 La situation"],["pb","❓ La question"],["qui","💡 Les données"]],go:"✏️ Je commence",fin:"Terminer",parfait:"Résolu sans erreur !",ok:"Problème résolu !",rapport:"📝 La solution complète",autre:"Autre problème",piste:"erreur",jour:"Problème du jour"},
 appareilsNom:"📘 Propriétés",
 modules:[],lexique:[],quiz:[],vf:[],ordre:[]
};
C.fiches={};
