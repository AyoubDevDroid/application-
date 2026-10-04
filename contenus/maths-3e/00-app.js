/* Maths 3e Brevet — contenu conforme au programme de mathématiques du cycle 4 actuellement en vigueur en 3e
   (le nouveau programme du BO du 5 mars 2026 n'entrera en 3e qu'à la rentrée 2028).
   Épreuve du brevet (depuis 2026, vérifié en octobre 2026) : 2 h, coefficient 2 ;
   partie 1 « automatismes » 20 min sans calculatrice (6 points), partie 2 « problèmes » 1 h 40 avec calculatrice (14 points). */
const C={
 id:"maths3",app:"Maths 3e Brevet",icon:"🎯",
 sousTitre:"Tout le programme de 3e et la préparation du brevet : cours, automatismes, problèmes type brevet et exercices à l'infini.",
 theme:{pri:"#ff9d5c",pri2:"#d9661c",acc:"#5ad1ff"},
 pub:{actif:false,toutesLes:3},   // public mineur : voir docs/PUBLICITE.md avant d'activer
 examen:{titre:"Épreuve d'automatismes (sans calculatrice)",questions:15,seuil:9,minutes:20,modules:["automatismes"]},
 calcul:[{op:"×",a:[6,15],b:[6,15]},{op:"÷",a:[6,15],b:[3,12]},{op:"+",a:[120,480],b:[45,390]},{op:"−",a:[200,600],b:[35,190]}],
 niveaux:[
  {ic:"🔢",t:"Partie 1 — Nombres et calcul littéral",d:"Puissances, arithmétique, racines, développer, factoriser, équations."},
  {ic:"📈",t:"Partie 2 — Fonctions et géométrie",d:"Fonctions, proportionnalité, Pythagore, Thalès, trigonométrie, transformations, solides."},
  {ic:"🎓",t:"Partie 3 — Données, algorithmique et brevet",d:"Statistiques, probabilités, programmation, automatismes, méthode du brevet."}
 ],
 grades:["Débutant","Curieux","Élève sérieux","Élève sérieux","Bon élève","Bon élève","Matheux","Matheux","Prêt pour le brevet","Prêt pour le brevet","Mention bien","Mention bien","Mention très bien","Mention très bien","Champion des maths","Champion des maths"],
 jeux:{diag:{e:"🧩",t:"Problèmes",s:"Type brevet, pas à pas"},sym:{e:"🔷",t:"Figures",s:"Reconnais la configuration"},qui:{s:"Devine la formule"},atel:{t:"Exercices",s:"À l'infini, avec correction"}},
 diagTextes:{titre:"🧩 Problèmes type brevet",sous:"Comme dans la 2e partie du brevet : une situation, plusieurs questions qui s'enchaînent. Une erreur coûte une étoile, mais tu peux réessayer.",entete:"🧩 Nouveau problème",carte:"EXERCICE N°",prio:false,champs:[["lieu","📍 La situation"],["pb","❓ La question"],["qui","💡 Les données"]],go:"✏️ Je commence",fin:"Terminer",parfait:"Résolu sans erreur !",ok:"Problème résolu !",rapport:"📝 La rédaction attendue",autre:"Autre problème",piste:"erreur"},
 appareilsNom:"📘 Formules",
 modules:[],lexique:[],quiz:[],vf:[],ordre:[]
};
C.fiches={};
