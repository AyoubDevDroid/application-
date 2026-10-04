/* Électricien Pro — contenu (titre pro Électricien d'équipement du bâtiment)
   Un fichier par module (10-…, 20-…, 30-… = niveaux 1, 2, 3), puis les jeux (80-…).
   Tous les fichiers sont mis bout à bout par build.js, dans l'ordre alphabétique.
   Valeurs normatives : NF C 15-100 (logement) et NF C 18-510 (habilitation). Quand une valeur
   dépend de l'édition de la norme, le contenu le dit. À faire relire par un formateur avant publication. */
const C={
 id:"electricien",app:"Électricien Pro",icon:"⚡",
 sousTitre:"De zéro à électricien confirmé : 3 niveaux, 24 modules, des jeux et des dépannages réels.",
 pub:{actif:true,toutesLes:3},
 examen:{titre:"Examen blanc Électricien",questions:40,seuil:28,minutes:40},
 niveaux:[
  {ic:"🟢",t:"Niveau 1 — Les bases",d:"Comprendre l'électricité, le danger, les outils et les plans."},
  {ic:"🟠",t:"Niveau 2 — Installer",d:"Câbler un logement neuf selon la NF C 15-100."},
  {ic:"🔴",t:"Niveau 3 — Expert",d:"Triphasé, dimensionnement, contrôles, dépannage, rénovation, nouvelles énergies."}
 ],
 grades:["Curieux","Apprenti","Apprenti","Aide-électricien","Aide-électricien","Électricien débutant","Électricien","Électricien","Électricien confirmé","Électricien confirmé","Chef d'équipe","Chef d'équipe","Dépanneur expert","Dépanneur expert","Maître électricien","Maître électricien"],
 modules:[],lexique:[],quiz:[],vf:[],ordre:[]
};
C.fiches={};
