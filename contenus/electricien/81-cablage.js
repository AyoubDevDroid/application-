/* JEU — Câblage : l'apprenant tire les fils lui-même, le moteur vérifie (courts-circuits, liaisons manquantes, couleurs).
   Plan de 360 de large. Types de réseaux : P phase, N neutre, T terre, X retour/navette/commande, B barrette. */
const TAB={id:"tab",t:"Tableau : disjoncteur + terre",ic:"🗄️",x:15,y:12,w:330,h:72,b:[["L","Phase"],["N","Neutre"],["T","Terre"]]};
const LAMPE=(id,t,x,y,w)=>({id,t,ic:"💡",x,y,w:w||160,h:85,cote:"t",b:[["L","L"],["N","N"],["T","PE"]]});
C.cablage=[
 {id:"prise",t:"Raccorder une prise 2P+T",ic:"🔌",niv:1,h:330,
  d:"Raccorde la prise au tableau : la <b>phase</b>, le <b>neutre</b> et la <b>terre</b>. Choisis la bonne couleur de fil avant de tirer chaque liaison.",
  aide:"Trois fils : tableau Phase → prise L (marron, noir ou rouge) ; tableau Neutre → prise N (bleu) ; tableau Terre → prise PE (vert/jaune).",
  fin:"La prise est raccordée : phase, neutre, terre. Sur une prise 2P+T, la phase et le neutre peuvent être sur l'une ou l'autre des deux bornes, mais la terre va toujours sur la borne de terre.",
  app:[TAB,{id:"pr",t:"Prise 2P+T",ic:"🔌",x:100,y:220,w:160,h:90,cote:"t",b:[["L","L"],["N","N"],["T","PE"]]}],
  sol:[["P","tab.L","pr.L"],["N","tab.N","pr.N"],["T","tab.T","pr.T"]],perm:[["pr.L","pr.N"]],lum:["pr"]},

 {id:"simple",t:"Simple allumage",ic:"💡",niv:1,h:380,
  d:"Câble une lampe commandée par un interrupteur. N'oublie pas la règle d'or : l'interrupteur coupe la <b>phase</b>.",
  aide:"Phase du tableau → une borne de l'interrupteur. L'autre borne de l'interrupteur → L de la lampe (retour lampe, pas en bleu). Neutre du tableau → N de la lampe. Terre → PE de la lampe.",
  fin:"La phase passe par l'interrupteur, le neutre va directement à la lampe : quand l'interrupteur est ouvert, la douille n'est plus sous tension.",
  app:[TAB,{id:"i",t:"Interrupteur",ic:"🔘",x:15,y:200,w:140,h:80,cote:"t",b:[["1","1"],["2","2"]]},LAMPE("l","Point lumineux (DCL)",185,270)],
  sol:[["P","tab.L","i.1"],["X","i.2","l.L"],["N","tab.N","l.N"],["T","tab.T","l.T"]],perm:[["i.1","i.2"]],lum:["l"]},

 {id:"double",t:"Double allumage",ic:"🎚️",niv:2,h:400,
  d:"Un interrupteur double commande séparément le <b>lustre</b> et les <b>appliques</b>. La phase arrive sur la borne commune <b>L</b> de l'interrupteur.",
  aide:"Phase → L de l'interrupteur. Borne 1 → L du lustre, borne 2 → L des appliques (retours lampe). Les neutres et les terres vont directement du tableau aux deux points lumineux.",
  fin:"Chaque touche de l'interrupteur double alimente son propre retour lampe. Le neutre et la terre sont communs aux deux points lumineux.",
  app:[TAB,{id:"i",t:"Interrupteur double",ic:"🎚️",x:100,y:150,w:160,h:70,cote:"t",b:[["L","L"],["1","1"],["2","2"]]},LAMPE("l1","Lustre",15,300,155),LAMPE("l2","Appliques",190,300,155)],
  sol:[["P","tab.L","i.L"],["X","i.1","l1.L"],["X","i.2","l2.L"],["N","tab.N","l1.N","l2.N"],["T","tab.T","l1.T","l2.T"]],perm:[["i.1","i.2"]],lum:["l1","l2"]},

 {id:"vav",t:"Va-et-vient",ic:"🔀",niv:2,h:400,
  d:"La lampe du couloir est commandée par deux va-et-vient. Sur chaque interrupteur, <b>C</b> = borne commune, <b>1</b> et <b>2</b> = navettes.",
  aide:"Phase → C d'un des va-et-vient. Navettes : 1 ↔ 1 et 2 ↔ 2 entre les deux interrupteurs. C de l'autre va-et-vient → L de la lampe. Neutre et terre directement à la lampe.",
  fin:"Phase sur un commun, retour lampe sur l'autre commun, deux navettes entre les interrupteurs : chaque interrupteur change l'état de la lampe, quelle que soit la position de l'autre.",
  app:[TAB,{id:"v1",t:"Va-et-vient 1",ic:"🔘",x:15,y:160,w:150,h:75,cote:"t",b:[["C","C"],["1","1"],["2","2"]]},{id:"v2",t:"Va-et-vient 2",ic:"🔘",x:195,y:160,w:150,h:75,cote:"t",b:[["C","C"],["1","1"],["2","2"]]},LAMPE("l","Plafonnier du couloir",100,300)],
  sol:[["P","tab.L","v1.C"],["X","v1.1","v2.1"],["X","v1.2","v2.2"],["X","v2.C","l.L"],["N","tab.N","l.N"],["T","tab.T","l.T"]],perm:[["v1.1","v1.2"],["v1.C","v2.C"]],lum:["l"]},

 {id:"telerupteur",t:"Télérupteur et boutons poussoirs",ic:"🔁",niv:2,h:400,
  d:"Deux boutons poussoirs commandent le plafonnier par un télérupteur. <b>A1-A2</b> = bobine, <b>1-2</b> = contact qui alimente la lampe.",
  aide:"Phase → une borne de chaque BP et la borne 1 du télérupteur. L'autre borne de chaque BP → A1 (les BP sont en parallèle). A2 → neutre. Borne 2 du télérupteur → L de la lampe. Neutre et terre à la lampe.",
  fin:"Les boutons poussoirs, en parallèle, envoient la phase à la bobine (A1-A2) ; à chaque impulsion, le contact 1-2 change d'état et allume ou éteint la lampe.",
  app:[TAB,{id:"bp1",t:"BP entrée",ic:"👆",x:15,y:150,w:100,h:70,cote:"t",b:[["1","1"],["2","2"]]},{id:"bp2",t:"BP fond",ic:"👆",x:128,y:150,w:100,h:70,cote:"t",b:[["1","1"],["2","2"]]},
   {id:"tl",t:"Télérupteur",ic:"🔁",x:240,y:150,w:105,h:110,ty:60,b:[["A1","A1",28,0,"t"],["A2","A2",77,0,"t"],["1","1",28,110,"b"],["2","2",77,110,"b"]]},LAMPE("l","Plafonnier",15,300,200)],
  sol:[["P","tab.L","bp1.1","bp2.1","tl.1"],["X","bp1.2","bp2.2","tl.A1"],["N","tab.N","tl.A2","l.N"],["X","tl.2","l.L"],["T","tab.T","l.T"]],
  perm:[["bp1.1","bp1.2"],["bp2.1","bp2.2"],["tl.A1","tl.A2"],["tl.1","tl.2"]],lum:["l"]},

 {id:"chauffe-eau",t:"Chauffe-eau en heures creuses",ic:"🛢️",niv:3,h:430,
  d:"Câble le chauffe-eau à travers le <b>contacteur jour/nuit</b>. Puissance : disjoncteur 20 A → contacteur (1→2 phase, 3→4 neutre) → chauffe-eau. Commande : disjoncteur 2 A → contact heures creuses → bobine A1-A2.",
  aide:"Puissance : 20 A L → 1, 20 A N → 3, 2 → L du chauffe-eau, 4 → N du chauffe-eau. Commande : 2 A L → C1, C2 → A1, 2 A N → A2. Terre : bornier → PE du chauffe-eau.",
  fin:"La nuit, le contact heures creuses se ferme : la bobine A1-A2 est alimentée, le contacteur ferme ses pôles 1-2 et 3-4 et le chauffe-eau chauffe. Le circuit de commande (2 A) et le circuit de puissance (20 A) sont bien séparés.",
  app:[{id:"d20",t:"Disj. 20 A",x:10,y:12,w:110,h:70,b:[["L","L"],["N","N"]]},{id:"d2",t:"Disj. 2 A",x:125,y:12,w:110,h:70,b:[["L","L"],["N","N"]]},{id:"hc",t:"Contact HC",ic:"🌙",x:240,y:12,w:110,h:70,b:[["C1","C1"],["C2","C2"]]},
   {id:"k",t:"Contacteur jour/nuit",ic:"🔲",x:60,y:170,w:240,h:110,ty:62,b:[["A1","A1",30,0,"t"],["A2","A2",80,0,"t"],["1","1",150,0,"t"],["3","3",200,0,"t"],["2","2",150,110,"b"],["4","4",200,110,"b"]]},
   {id:"tt",t:"Bornier terre",x:15,y:330,w:120,h:85,cote:"t",b:[["T","PE"]]},{id:"ce",t:"Chauffe-eau",ic:"🛢️",x:180,y:330,w:165,h:85,cote:"t",b:[["L","L"],["N","N"],["T","PE"]]}],
  sol:[["P","d20.L","k.1"],["N","d20.N","k.3"],["P","k.2","ce.L"],["N","k.4","ce.N"],["P","d2.L","hc.C1"],["X","hc.C2","k.A1"],["N","d2.N","k.A2"],["T","tt.T","ce.T"]],
  perm:[["hc.C1","hc.C2"],["k.A1","k.A2"]],lum:["ce"]},

 {id:"etoile",t:"Moteur triphasé en étoile",ic:"⭐",niv:3,h:400,
  d:"Plaque du moteur : <b>230 V Δ / 400 V Y</b>. Réseau : <b>400 V</b> entre phases. Place les barrettes (fil gris) pour le bon couplage, puis raccorde les 3 phases et la terre.",
  aide:"Sur 400 V, ce moteur se couple en étoile : relie entre elles W2, U2 et V2 (rangée du haut). Puis L1 → U1, L2 → V1, L3 → W1, et PE → PE.",
  fin:"Couplage étoile : chaque enroulement reçoit 400 ÷ √3 = 230 V, sa tension nominale. Pour inverser le sens de rotation, il suffirait de permuter deux phases.",
  app:[{id:"p",t:"Plaque à bornes du moteur",ic:"⚙️",rot:true,x:60,y:15,w:240,h:170,ty:18,b:[["W2","W2",50,55,"n"],["U2","U2",110,55,"n"],["V2","V2",170,55,"n"],["U1","U1",50,125,"b"],["V1","V1",110,125,"b"],["W1","W1",170,125,"b"],["PE","PE",215,125,"b"]]},
   {id:"r",t:"Réseau 400 V triphasé",ic:"🏭",x:15,y:300,w:330,h:80,cote:"t",b:[["L1","L1"],["L2","L2"],["L3","L3"],["PE","PE"]]}],
  sol:[["B","p.W2","p.U2","p.V2"],["P","r.L1","p.U1"],["P","r.L2","p.V1"],["P","r.L3","p.W1"],["T","r.PE","p.PE"]],perm:[["r.L1","r.L2","r.L3"]],lum:["p"]},

 {id:"triangle",t:"Moteur triphasé en triangle",ic:"🔺",niv:3,h:400,
  d:"Plaque du moteur : <b>400 V Δ / 690 V Y</b>. Réseau : <b>400 V</b> entre phases. Place les barrettes (fil gris) pour le bon couplage, puis raccorde les 3 phases et la terre.",
  aide:"Sur 400 V, ce moteur se couple en triangle : barrettes verticales U1–W2, V1–U2 et W1–V2. Puis L1 → U1, L2 → V1, L3 → W1, et PE → PE.",
  fin:"Couplage triangle : chaque enroulement reçoit directement 400 V, sa tension nominale pour ce moteur 400/690 V.",
  app:[{id:"p",t:"Plaque à bornes du moteur",ic:"⚙️",rot:true,x:60,y:15,w:240,h:170,ty:18,b:[["W2","W2",50,55,"n"],["U2","U2",110,55,"n"],["V2","V2",170,55,"n"],["U1","U1",50,125,"b"],["V1","V1",110,125,"b"],["W1","W1",170,125,"b"],["PE","PE",215,125,"b"]]},
   {id:"r",t:"Réseau 400 V triphasé",ic:"🏭",x:15,y:300,w:330,h:80,cote:"t",b:[["L1","L1"],["L2","L2"],["L3","L3"],["PE","PE"]]}],
  sol:[["P","r.L1","p.U1","p.W2"],["P","r.L2","p.V1","p.U2"],["P","r.L3","p.W1","p.V2"],["T","r.PE","p.PE"]],perm:[["r.L1","r.L2","r.L3"]],lum:["p"]}
];
