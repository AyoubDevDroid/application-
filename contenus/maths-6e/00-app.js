/* Maths 6e — contenu conforme au programme de mathématiques de 6e entré en vigueur à la rentrée 2025
   (BO du 17 avril 2025, cycle 3). Vérifié en octobre 2026.
   Nouveautés du programme prises en compte : grands nombres jusqu'au milliard, fraction = quotient, fractions sur une
   demi-droite graduée, pensée algébrique (schémas en barres, balances), somme des angles du triangle, symétrie axiale,
   volumes en cm³, durées, probabilités écrites en fraction, proportionnalité sans produit en croix, pensée informatique. */
const C={
 id:"maths6",app:"Maths 6e",icon:"📐",
 sousTitre:"Tout le programme de 6e (rentrée 2025) : cours illustrés, jeux, problèmes pas à pas et exercices à l'infini.",
 theme:{pri:"#5ad1ff",pri2:"#1a8fc4",acc:"#ffc83d"},
 pub:{actif:false,toutesLes:3},   // public mineur : voir docs/PUBLICITE.md avant d'activer
 examen:{titre:"Évaluation de fin de 6e",questions:30,seuil:18,minutes:30},
 calcul:[{op:"+",a:[12,99],b:[11,99]},{op:"−",a:[30,150],b:[11,60]},{op:"×",a:[2,10],b:[2,10]},{op:"×",a:[11,25],b:[2,5]},{op:"÷",a:[2,10],b:[2,10]}],
 niveaux:[
  {ic:"🔢",t:"Partie 1 — Nombres et calcul",d:"Entiers, décimaux, opérations, fractions, calcul mental."},
  {ic:"📏",t:"Partie 2 — Géométrie et mesures",d:"Droites, angles, triangles, symétrie, périmètres, aires, volumes, durées."},
  {ic:"🧠",t:"Partie 3 — Raisonner",d:"Proportionnalité, algèbre, données, probabilités, programmation, problèmes."}
 ],
 grades:["Débutant","Curieux","Explorateur","Explorateur","Calculateur","Calculateur","Géomètre","Géomètre","As des maths","As des maths","Champion","Champion","Expert","Expert","Génie des maths","Génie des maths"],
 jeux:{diag:{e:"🧩",t:"Problèmes",s:"Résous pas à pas"},sym:{e:"🔷",t:"Figures",s:"Reconnais les figures"},qui:{s:"Devine l'instrument"},atel:{t:"Exercices",s:"À l'infini, avec correction"}},
 diagTextes:{titre:"🧩 Problèmes pas à pas",sous:"Lis bien l'énoncé, puis avance étape par étape. Une erreur te coûte une étoile, mais tu peux réessayer.",entete:"🧩 Nouveau problème",carte:"PROBLÈME N°",prio:false,champs:[["lieu","📍 La situation"],["pb","❓ La question"],["qui","💡 Les données"]],go:"✏️ Je commence",fin:"Terminer",parfait:"Résolu sans erreur !",ok:"Problème résolu !",rapport:"📝 La solution complète",autre:"Autre problème",piste:"erreur",jour:"Problème du jour"},
 appareilsNom:"📏 Instruments",
 modules:[],lexique:[],quiz:[],vf:[],ordre:[]
};
C.fiches={};
