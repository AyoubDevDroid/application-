/* NIVEAU 3 — Récupérer le fluide */
C.modules.push({id:"recuperation",n:3,i:"♻️",t:"Récupérer le fluide",d:"Station, bouteilles, 80 %, pesée, BSFF",
 s:[{h:"Quand récupère-t-on ?",l:["Avant toute ouverture du circuit (réparation, remplacement d'un composant).","À la mise au rebut d'un équipement.","Quand le fluide est pollué ou à remplacer."]},
    {h:"Le matériel",l:["<b>Station de récupération</b> compatible avec le fluide.","<b>Bouteille de récupération</b> fournie par le distributeur : une bouteille <b>par type de fluide</b>.","<b>Balance</b> pour peser avant et après."]},
    {h:"Les règles de remplissage",l:["Jamais plus de <b>80 %</b> de la capacité liquide : le liquide se dilate en chauffant.","Ne <b>jamais mélanger</b> deux fluides dans une bouteille.","Peser la bouteille vide (tare) et pleine ; noter la masse récupérée."]},
    {h:"Après la récupération",l:["Fiche d'intervention + <b>BSFF</b> sur Trackdéchets.","Retour au distributeur : <b>recyclage</b>, <b>régénération</b> ou <b>destruction</b>.","Un fluide récupéré ne se recharge que s'il est recyclé ou régénéré."]}],
 k:["Récupération","Bouteille de récupération","Régénération","BSFF"]});

C.fiches.recuperation={
 intro:"Le fluide qu'on retire d'un circuit ne se jette jamais dans l'air : il se récupère, se pèse, se trace et repart chez le distributeur. C'est une obligation légale, une opération technique (avec ses dangers) et, avec la raréfaction des HFC, une ressource précieuse.",
 s:[
  {p:"On récupère le fluide avant d'ouvrir un circuit (changer un compresseur, un détendeur, réparer une fuite brasée), à la <b>fin de vie</b> d'un équipement, ou quand le fluide est contaminé (humidité, acide, mélange). La récupération est réservée aux personnes titulaires de la bonne <b>attestation d'aptitude</b>.",
   q:["Quand faut-il récupérer le fluide ?",["Avant d'ouvrir le circuit et à la mise au rebut","Jamais, on le relâche","Seulement en hiver","Seulement s'il est neuf"],0,"Le dégazage est interdit."]},
  {p:"La <b>station de récupération</b> aspire le fluide (en vapeur, ou en liquide pour aller plus vite) et le refoule dans une <b>bouteille de récupération</b>. Ces bouteilles sont spécifiques, avec deux robinets (liquide et gaz), et sont fournies par le distributeur. Une bouteille ne reçoit qu'<b>un seul type de fluide</b> : un mélange de fluides ne peut plus être régénéré et coûte cher à détruire.",
   fig:{type:"flux",legende:"Récupérer le fluide d'un circuit",etapes:["Peser la bouteille vide (tare)","Raccorder manifold, station et bouteille","Récupérer (liquide puis vapeur)","Surveiller la balance : 80 % maximum","Peser, étiqueter, remplir la fiche et le BSFF"]},
   att:"Avec un fluide inflammable (R290, R32), on utilise une station et des outils compatibles, dans un lieu ventilé, sans source d'inflammation.",
   q:["Peut-on mettre du R410A et du R32 dans la même bouteille de récupération ?",["Non, une bouteille par fluide","Oui, sans problème","Oui si la bouteille est grande","Oui s'ils sont neufs"],0,"Un mélange ne peut plus être régénéré."]},
  {p:"Une bouteille ne se remplit jamais à plus de <b>80 %</b> de sa capacité en liquide : le liquide se dilate fortement quand la température monte, et une bouteille pleine de liquide peut éclater. On travaille donc <b>à la balance</b> : tare de la bouteille vide, masse maximale autorisée (inscrite sur la bouteille ou calculée), masse récupérée notée sur la fiche d'intervention.",
   fig:{type:"flux",legende:"Remplissage maximal d'une bouteille de récupération (exemple)",etapes:[["Capacité de la bouteille","12,5 kg de fluide"],["80 % de la capacité","10 kg maximum"],["Déjà dans la bouteille","6 kg"],["Encore possible","4 kg"]]},
   q:["Une bouteille de récupération se remplit au maximum à…",["80 %","100 %","50 %","95 %"],0,"Le liquide se dilate avec la chaleur."]},
  {p:"Le fluide récupéré est un <b>déchet dangereux</b>. On remplit la <b>fiche d'intervention</b> (masse récupérée) et le <b>BSFF</b> sur <b>Trackdéchets</b>, puis la bouteille retourne au distributeur. Selon son état, le fluide sera <b>recyclé</b> (simplement filtré, pour la même installation), <b>régénéré</b> (remis aux spécifications du fluide neuf) ou <b>détruit</b>. Un fluide récupéré ne peut être rechargé dans un équipement que s'il a été recyclé ou régénéré.",
   fig:{type:"cycle",centre:"Que devient le fluide ?",etapes:[["Recyclé<br>filtré","#3db5ff"],["Régénéré<br>remis à neuf","#2ed47a"],["Détruit<br>s'il est trop pollué","#ff5470"]]},
   q:["Un fluide régénéré, c'est un fluide…",["Remis aux spécifications du fluide neuf","Simplement filtré","Mélangé à un autre","Relâché dans l'air"],0,"La régénération se fait en usine."]}
 ],
 retenir:["On récupère avant d'ouvrir le circuit et en fin de vie ; dégazage interdit.","Une bouteille de récupération par fluide ; jamais de mélange.","80 % maximum, travail à la balance (tare, masse récupérée).","Fiche d'intervention + BSFF sur Trackdéchets ; recyclage, régénération ou destruction."]
};

C.lexique.push(
 ["Récupération","Transfert du fluide d'un circuit vers une bouteille de récupération, sans rejet dans l'air."],
 ["Bouteille de récupération","Bouteille spéciale à deux robinets, un seul fluide, remplie à 80 % au maximum."],
 ["Régénération","Traitement en usine d'un fluide récupéré pour le remettre aux spécifications du fluide neuf."],
 ["Recyclage","Nettoyage simple (filtration, séchage) d'un fluide récupéré pour le réutiliser."]
);

C.quiz.push(
 ["recuperation","Pourquoi ne pas remplir une bouteille à 100 % ?",["Le liquide se dilate et peut faire éclater la bouteille","Pour économiser","Pour qu'elle soit plus légère","C'est autorisé"],0,"80 % maximum."],
 ["recuperation","Bouteille de 12,5 kg de capacité, déjà 7 kg dedans. Combien peut-on encore récupérer au maximum ?",["3 kg","5,5 kg","10 kg","12,5 kg"],0,"80 % de 12,5 = 10 kg ; 10 − 7 = 3 kg."],
 ["recuperation","Qui fournit les bouteilles de récupération ?",["Le distributeur de fluides","Le client","La mairie","Personne"],0,"Les distributeurs doivent les mettre à disposition."],
 ["recuperation","Avant de récupérer, on…",["Pèse la bouteille vide (tare)","Chauffe la bouteille","La remplit d'azote","Ouvre tous les robinets"],0,"Pour connaître la masse récupérée."],
 ["recuperation","Le fluide récupéré peut être rechargé dans un équipement…",["S'il a été recyclé ou régénéré","Toujours, directement","Jamais","Seulement s'il est mélangé"],0,"C'est ce que prévoit le règlement."]
);

C.vf.push(
 ["Une bouteille de récupération peut être remplie à 100 %.",false,"80 % maximum."],
 ["On peut mélanger deux fluides dans une bouteille de récupération.",false,"Une bouteille par fluide."],
 ["Le fluide récupéré est un déchet dangereux tracé par un BSFF.",true,"Sur la plateforme Trackdéchets."]
);

C.ordre.push({t:"Récupérer le fluide d'une installation",ic:"♻️",s:["Peser la bouteille de récupération vide","Raccorder la station et la bouteille","Récupérer le fluide","Peser la bouteille pleine (80 % max)","Remplir la fiche d'intervention et le BSFF"]});
