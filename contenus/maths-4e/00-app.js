/* Maths 4e — Parties 1 à 3 : nouveau programme de mathématiques du cycle 4 (arrêté du 18-2-2026, BO n° 10 du 5 mars 2026),
   partie « Quatrième » de chaque thème, obligatoire en 4e à la rentrée 2027.
   Source : https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A (annexe 2).
   Partie 4 : en 2026-2027, les élèves de 4e suivent encore l'ancien programme (repères annuels de 2019), qui contient en plus
   le théorème de Thalès (triangles emboîtés), le cosinus, les puissances de 10 d'exposant négatif / notation scientifique et
   la décomposition en facteurs premiers. Le nouveau programme les place en 3e : on les garde ici en « bonus » pour cette année.
   Vérifié en octobre 2026 (calendrier : 5e en 2026, 4e en 2027, 3e en 2028). */
const C={
 id:"maths4",app:"Maths 4e",icon:"🚀",
 sousTitre:"Tout le programme de 4e : cours illustrés, jeux, problèmes pas à pas et exercices à l'infini. Inclut les chapitres encore étudiés en 2026-2027.",
 theme:{pri:"#b18cff",pri2:"#7a4fd6",acc:"#ffc83d"},
 pub:{actif:false,toutesLes:3},   // public mineur : voir docs/PUBLICITE.md avant d'activer
 examen:{titre:"Évaluation de fin de 4e",questions:30,seuil:18,minutes:30},
 calcul:[{op:"×",a:[3,12],b:[3,12]},{op:"×",a:[11,19],b:[3,9]},{op:"÷",a:[3,12],b:[3,12]},{op:"+",a:[45,250],b:[38,190]},{op:"−",a:[120,400],b:[35,190]}],
 niveaux:[
  {ic:"🔢",t:"Partie 1 — Nombres et calculs",d:"Relatifs, fractions, puissances, racine carrée, calcul littéral, équations."},
  {ic:"📐",t:"Partie 2 — Espace et géométrie",d:"Translation, Pythagore et sa réciproque, droite des milieux, cercle et triangle rectangle, pyramides et cônes."},
  {ic:"📊",t:"Partie 3 — Données, fonctions, programmation",d:"Moyenne pondérée, médiane, probabilités, ratios et pourcentages, programmes de calcul, conditions et variables."},
  {ic:"⭐",t:"Partie 4 — En plus en 2026-2027",d:"Chapitres de l'ancien programme encore étudiés cette année : Thalès, cosinus, notation scientifique, nombres premiers."}
 ],
 grades:["Débutant","Curieux","Explorateur","Explorateur","Calculateur","Calculateur","Géomètre","Géomètre","As des maths","As des maths","Champion","Champion","Expert","Expert","Génie des maths","Génie des maths"],
 jeux:{diag:{e:"🧩",t:"Problèmes",s:"Résous pas à pas"},sym:{e:"🔷",t:"Figures",s:"Reconnais la configuration"},qui:{s:"Devine le théorème"},atel:{t:"Exercices",s:"À l'infini, avec correction"}},
 diagTextes:{titre:"🧩 Problèmes pas à pas",sous:"Lis bien l'énoncé, puis avance étape par étape. Une erreur te coûte une étoile, mais tu peux réessayer.",entete:"🧩 Nouveau problème",carte:"PROBLÈME N°",prio:false,champs:[["lieu","📍 La situation"],["pb","❓ La question"],["qui","💡 Les données"]],go:"✏️ Je commence",fin:"Terminer",parfait:"Résolu sans erreur !",ok:"Problème résolu !",rapport:"📝 La solution rédigée",autre:"Autre problème",piste:"erreur",jour:"Problème du jour"},
 appareilsNom:"📘 Théorèmes",
 modules:[],lexique:[],quiz:[],vf:[],ordre:[]
};
C.fiches={};
