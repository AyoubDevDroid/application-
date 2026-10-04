/* JEU — Câblage électrique frigorifique (vérification des courts-circuits, liaisons et couleurs). */
C.cablage=[
 {id:"commande-compresseur",t:"Commande d'un compresseur",ic:"⚙️",niv:2,h:500,
  d:"Câble la commande du contacteur à travers le <b>thermostat</b>, puis le <b>pressostat HP</b>, puis le <b>pressostat BP</b> (en série) ; le contacteur alimente le compresseur (phase par 1→2, neutre par 3→4).",
  aide:"Phase → thermostat → pressostat HP → pressostat BP → A1 ; A2 → neutre. Puissance : phase → 1, 2 → L du compresseur ; neutre → 3, 4 → N du compresseur. Terre → PE du compresseur.",
  fin:"Les trois contacts sont en série avec la bobine : si le thermostat est satisfait, ou si une pression devient anormale, la bobine n'est plus alimentée et le compresseur s'arrête.",
  app:[{id:"d",t:"Disjoncteur",x:10,y:12,w:160,h:70,b:[["L","Phase"],["N","Neutre"]]},{id:"tt",t:"Bornier de terre",x:190,y:12,w:160,h:70,b:[["T","Terre"]]},
   {id:"th",t:"Thermostat",ic:"🌡️",x:10,y:140,w:105,h:65,cote:"t",b:[["1","1"],["2","2"]]},{id:"hp",t:"Pressostat HP",x:128,y:140,w:105,h:65,cote:"t",b:[["1","1"],["2","2"]]},{id:"bp",t:"Pressostat BP",x:246,y:140,w:105,h:65,cote:"t",b:[["1","1"],["2","2"]]},
   {id:"k",t:"Contacteur",ic:"🔲",x:40,y:260,w:280,h:100,ty:57,b:[["A1","A1",30,0,"t"],["A2","A2",80,0,"t"],["1","1",160,0,"t"],["3","3",215,0,"t"],["2","2",160,100,"b"],["4","4",215,100,"b"]]},
   {id:"cp",t:"Compresseur",ic:"⚙️",rot:true,x:150,y:405,w:200,h:80,cote:"t",b:[["L","L"],["N","N"],["T","PE"]]}],
  sol:[["P","d.L","th.1","k.1"],["X","th.2","hp.1"],["X","hp.2","bp.1"],["X","bp.2","k.A1"],["N","d.N","k.A2","k.3"],["P","k.2","cp.L"],["N","k.4","cp.N"],["T","tt.T","cp.T"]],
  perm:[["th.1","th.2"],["hp.1","hp.2"],["bp.1","bp.2"],["k.A1","k.A2"]],lum:["cp"]},

 {id:"psc",t:"Compresseur monophasé à condensateur permanent",ic:"🔋",niv:2,h:400,
  d:"Raccorde un compresseur monophasé : alimentation entre <b>C</b> (commun) et <b>R</b> (marche) — phase sur C, neutre sur R — et <b>condensateur permanent</b> entre R et S (démarrage).",
  aide:"Phase → C. Neutre → R et une borne du condensateur. L'autre borne du condensateur → S. Terre → PE.",
  fin:"Le bobinage de marche (C-R) est alimenté directement ; le bobinage de démarrage (C-S) est en série avec le condensateur, qui décale le courant et crée le couple de démarrage.",
  app:[{id:"d",t:"Disjoncteur",x:10,y:12,w:200,h:70,b:[["L","Phase"],["N","Neutre"]]},{id:"tt",t:"Terre",x:225,y:12,w:125,h:70,b:[["T","Terre"]]},
   {id:"cd",t:"Condensateur",ic:"🔋",x:20,y:170,w:150,h:70,cote:"t",b:[["1","1"],["2","2"]]},
   {id:"cp",t:"Compresseur monophasé",ic:"⚙️",rot:true,x:60,y:300,w:290,h:85,cote:"t",b:[["C","C"],["R","R"],["S","S"],["PE","PE"]]}],
  sol:[["P","d.L","cp.C"],["N","d.N","cp.R","cd.1"],["X","cd.2","cp.S"],["T","tt.T","cp.PE"]],perm:[["cd.1","cd.2"]],lum:["cp"]},

 {id:"pump-down",t:"Arrêt par pump-down",ic:"🔽",niv:3,h:520,
  d:"Le <b>thermostat</b> commande l'<b>électrovanne</b> de la ligne liquide. Le <b>pressostat BP</b> commande le contacteur du compresseur : quand l'électrovanne se ferme, le compresseur vide l'évaporateur puis s'arrête sur la BP. (Le pressostat HP est omis pour simplifier.)",
  aide:"Phase → thermostat 1 et pressostat BP 1 et contacteur 1. Thermostat 2 → électrovanne 1. Pressostat BP 2 → A1. Neutre → électrovanne 2, A2 et contacteur 3. Contacteur 2 → L compresseur, 4 → N compresseur. Terre → PE.",
  fin:"Le thermostat ne commande plus directement le compresseur : il ferme l'électrovanne, le compresseur aspire le fluide de l'évaporateur jusqu'au seuil du pressostat BP. Au redémarrage, l'électrovanne s'ouvre, la BP remonte et le pressostat relance le compresseur. Le fluide est stocké côté HP : pas de migration vers le compresseur à l'arrêt.",
  app:[{id:"d",t:"Disjoncteur",x:10,y:12,w:160,h:70,b:[["L","Phase"],["N","Neutre"]]},{id:"tt",t:"Bornier de terre",x:190,y:12,w:160,h:70,b:[["T","Terre"]]},
   {id:"th",t:"Thermostat",ic:"🌡️",x:10,y:140,w:105,h:65,cote:"t",b:[["1","1"],["2","2"]]},{id:"ev",t:"Électrovanne",ic:"🚰",x:128,y:140,w:105,h:65,cote:"t",b:[["1","1"],["2","2"]]},{id:"bp",t:"Pressostat BP",x:246,y:140,w:105,h:65,cote:"t",b:[["1","1"],["2","2"]]},
   {id:"k",t:"Contacteur",ic:"🔲",x:40,y:270,w:280,h:100,ty:57,b:[["A1","A1",30,0,"t"],["A2","A2",80,0,"t"],["1","1",160,0,"t"],["3","3",215,0,"t"],["2","2",160,100,"b"],["4","4",215,100,"b"]]},
   {id:"cp",t:"Compresseur",ic:"⚙️",rot:true,x:150,y:425,w:200,h:80,cote:"t",b:[["L","L"],["N","N"],["T","PE"]]}],
  sol:[["P","d.L","th.1","bp.1","k.1"],["X","th.2","ev.1"],["X","bp.2","k.A1"],["N","d.N","ev.2","k.A2","k.3"],["P","k.2","cp.L"],["N","k.4","cp.N"],["T","tt.T","cp.T"]],
  perm:[["th.1","th.2"],["ev.1","ev.2"],["bp.1","bp.2"],["k.A1","k.A2"]],lum:["cp"]}
];
