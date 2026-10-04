/* Froid & Clim Pro — contenu (titre pro Technicien en froid et climatisation + attestation d'aptitude fluides frigorigènes)
   Un fichier par module (1x = niveau 1, 2x = niveau 2, 3x = niveau 3), puis les jeux (8x).
   Réglementation vérifiée en octobre 2026 : règlement (UE) 2024/573 « F-Gas III », règlement d'exécution 2024/2215,
   arrêtés français de novembre 2025 (attestations), Cerfa 15497*04, Trackdéchets.
   Tables pression/température calculées avec CoolProp (bar relatifs, pression atmosphérique 1,013 bar). */
const C={
 id:"froidclim",app:"Froid & Clim Pro",icon:"❄️",
 sousTitre:"De zéro à technicien frigoriste : 3 niveaux, 20 modules, des dépannages réels et la préparation de l'attestation fluides.",
 theme:{pri:"#6fe3ff",pri2:"#1fa6c9",acc:"#ffc83d"},
 pub:{actif:true,toutesLes:3},
 examen:{titre:"Examen blanc fluides frigorigènes",questions:60,seuil:42,minutes:60},
 niveaux:[
  {ic:"🟢",t:"Niveau 1 — Les bases",d:"Chaleur, pression, cycle frigorifique, sécurité, outils et fluides."},
  {ic:"🟠",t:"Niveau 2 — Installer",d:"Composants, tuyauterie, mise en service, clim, PAC, électricité, froid commercial."},
  {ic:"🔴",t:"Niveau 3 — Expert",d:"Diagnostic, réglementation F-Gas, récupération, fluides inflammables, maintenance."}
 ],
 grades:["Curieux","Apprenti","Apprenti","Aide-frigoriste","Aide-frigoriste","Frigoriste débutant","Frigoriste","Frigoriste","Frigoriste confirmé","Frigoriste confirmé","Chef d'équipe","Chef d'équipe","Dépanneur expert","Dépanneur expert","Maître frigoriste","Maître frigoriste"],
 modules:[],lexique:[],quiz:[],vf:[],ordre:[]
};
C.fiches={};
/* Pressions de saturation en bar RELATIFS (lecture du manifold), calculées avec CoolProp.
   Pour les mélanges à glissement (R404A, R407C), on donne la pression de rosée (côté évaporation) et de bulle (côté condensation). */
const PT={
 R32:  {"-30":1.7,"-20":3.0,"-10":4.8,"-5":5.9,"0":7.1,"5":8.5,"10":10.1,"30":18.3,"35":20.9,"40":23.8,"45":26.9,"50":30.4},
 R410A:{"-30":1.7,"-20":3.0,"-10":4.7,"-5":5.8,"0":7.0,"5":8.3,"10":9.9,"30":17.8,"35":20.4,"40":23.2,"45":26.2,"50":29.6},
 R134a:{"-30":-0.2,"-20":0.3,"-10":1.0,"-5":1.4,"0":1.9,"5":2.5,"10":3.1,"30":6.7,"35":7.9,"40":9.2,"45":10.6,"50":12.2},
 R404A:{"-30":1.0,"-20":2.0,"-10":3.3,"-5":4.1,"0":5.0,"5":6.0,"10":7.1,"30":13.3,"35":15.2,"40":17.3,"45":19.6,"50":22.1},
 R290: {"-30":0.7,"-20":1.4,"-10":2.4,"-5":3.0,"0":3.7,"5":4.5,"10":5.4,"30":9.8,"35":11.2,"40":12.7,"45":14.3,"50":16.1}
};
