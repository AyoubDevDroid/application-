/* NIVEAU 1 — La sécurité du frigoriste */
C.modules.push({id:"securite",n:1,i:"🦺",t:"La sécurité du frigoriste",d:"Pression, brûlures par le froid, asphyxie, inflammabilité, brasage",
 s:[{h:"Les dangers des fluides",l:["<b>Brûlure par le froid</b> : un jet de liquide frigorigène gèle la peau et les yeux.","<b>Asphyxie</b> : les fluides sont plus lourds que l'air et chassent l'oxygène dans les locaux bas et fermés.","<b>Inflammabilité</b> : classes A2L et A3 (R32, R290…).","<b>Décomposition</b> au contact d'une flamme : gaz toxiques et corrosifs."]},
    {h:"La pression",l:["Un circuit en fonctionnement peut dépasser <b>30 bar</b> côté HP (R32, R410A).","Ne jamais chauffer une bouteille à la flamme, ne jamais la remplir au-delà de sa limite.","Jamais d'<b>oxygène</b> ni d'air comprimé dans un circuit : risque d'explosion avec l'huile."]},
    {h:"Les EPI",l:["<b>Lunettes</b> et <b>gants</b> adaptés au froid pour raccorder et déconnecter les flexibles.","Chaussures de sécurité, protection auditive, gants isolants pour l'électricité.","Pour le brasage : lunettes teintées, gants, vêtements non synthétiques."]},
    {h:"Électricité et brasage",l:["Les machines sont alimentées en 230 V ou 400 V : habilitation électrique (<b>BR</b>) et consignation.","Le brasage au chalumeau demande souvent un <b>permis de feu</b> et un extincteur à portée de main.","Jamais de flamme sur un circuit qui contient encore du fluide."]}],
 k:["Asphyxie","Permis de feu","EPI","Classe de sécurité"]});

C.fiches.securite={
 intro:"Un frigoriste cumule les risques : la pression, le froid extrême du fluide liquide, l'électricité, la flamme du chalumeau et, de plus en plus, des fluides inflammables. Les accidents graves viennent presque toujours d'un geste fait « juste une fois » sans protection. Les règles ci-dessous ne sont pas négociables.",
 s:[
  {p:"Un fluide frigorigène liquide qui s'échappe à l'air libre s'évapore instantanément à très basse température : un jet sur la peau ou dans l'œil provoque une <b>gelure</b> en une seconde. La plupart des fluides sont <b>plus lourds que l'air</b> et invisibles : en cas de grosse fuite dans un local bas (cave, chambre froide, local technique), ils prennent la place de l'oxygène et peuvent provoquer une <b>asphyxie</b> sans prévenir. Enfin, au contact d'une flamme ou d'une surface très chaude, les fluides fluorés se décomposent en gaz <b>toxiques et corrosifs</b>.",
   fig:{type:"cycle",centre:"Dangers des fluides",etapes:[["Gelure<br>jet de liquide","#3db5ff"],["Asphyxie<br>plus lourd que l'air","#b18cff"],["Inflammabilité<br>A2L, A3","#ff8a3d"],["Gaz toxiques<br>au contact d'une flamme","#ff5470"]]},
   att:"Après une grosse fuite dans un local fermé, on ventile avant d'entrer, on ne descend pas seul dans une fosse ou une cave, et on n'allume aucune flamme.",
   q:["Pourquoi une grosse fuite dans une cave est-elle dangereuse ?",["Le fluide, plus lourd que l'air, chasse l'oxygène","Le fluide sent très mauvais","Il fait monter la température","Ce n'est pas dangereux"],0,"Risque d'asphyxie, sans odeur ni signe visible."]},
  {p:"Côté HP, un climatiseur au R32 ou au R410A fonctionne à 25–30 bar, parfois plus. Une bouteille chauffée au soleil ou au chalumeau voit sa pression monter très vite. On ne teste jamais l'étanchéité avec de l'<b>oxygène</b> (explosion au contact de l'huile) ni avec de l'<b>air comprimé</b> (humidité, et risque d'inflammation de l'huile sous pression) : seulement de l'<b>azote déshydraté</b>, avec un détendeur réglé.",
   fig:{type:"barres",legende:"Pression HP typique d'un split à 45 °C de condensation (bar relatifs, CoolProp)",items:[["R134a",10.6,"bar","#3db5ff"],["R290 (propane)",14.3,"bar","#ffc83d"],["R410A",26.2,"bar","#ff8a3d"],["R32",26.9,"bar","#ff5470"]]},
   q:["Pour mettre un circuit sous pression d'essai, on utilise…",["De l'azote déshydraté avec un détendeur","De l'oxygène","De l'air comprimé","Du fluide neuf"],0,"Jamais d'oxygène : risque d'explosion avec l'huile."]},
  {p:"Les EPI du frigoriste : <b>lunettes</b> (ou écran) dès qu'on raccorde ou déconnecte un flexible, <b>gants</b> protégeant du froid et des coupures, chaussures de sécurité. Pour le brasage : lunettes teintées, gants de soudeur, vêtements en coton (le synthétique fond sur la peau). Pour l'électricité : gants isolants et écran facial lors des mesures dans un coffret sous tension.",
   ex:"Tu déconnectes un flexible HP : un peu de liquide sort toujours. Avec des lunettes, rien de grave. Sans lunettes, c'est une brûlure de la cornée.",
   q:["Quand faut-il porter des lunettes ?",["Dès qu'on raccorde ou déconnecte un flexible","Seulement pour le brasage","Jamais à l'intérieur","Seulement en hiver"],0,"Un jet de liquide frigorigène peut atteindre les yeux."]},
  {p:"Une machine frigorifique, c'est aussi de l'électricité : compresseur, ventilateurs, résistances de dégivrage, en 230 V ou 400 V. Le frigoriste doit être <b>habilité</b> (BR pour le dépannage) et <b>consigner</b> avant d'intervenir. Le brasage au chalumeau présente un risque d'incendie : <b>permis de feu</b> sur beaucoup de sites, extincteur à portée de main, protection des isolants et des matériaux combustibles derrière le tube. Et on ne brase <b>jamais</b> un circuit qui contient encore du fluide.",
   att:"Avec un fluide inflammable (R290, R32), chauffer un tube qui en contient encore peut provoquer une inflammation. Avec un fluide fluoré, la flamme le décompose en gaz toxiques. Toujours récupérer, tirer au vide, puis balayer à l'azote avant de braser.",
   q:["Avant de braser un tube du circuit, il faut…",["Récupérer le fluide et balayer à l'azote","Juste couper le compresseur","Mettre le circuit sous pression de fluide","Rien de particulier"],0,"Jamais de flamme sur un circuit contenant du fluide."]}
 ],
 retenir:["Lunettes et gants à chaque raccordement de flexible.","Fluides plus lourds que l'air : risque d'asphyxie dans les locaux bas.","Azote déshydraté pour les essais ; jamais d'oxygène ni d'air comprimé.","Habilitation électrique et consignation ; permis de feu et extincteur pour le brasage.","Jamais de flamme sur un circuit qui contient du fluide."]
};

C.lexique.push(
 ["Asphyxie","Manque d'oxygène. Un fluide frigorigène plus lourd que l'air peut chasser l'oxygène d'un local bas."],
 ["Permis de feu","Autorisation écrite pour réaliser un travail par point chaud (brasage) avec les précautions contre l'incendie."],
 ["EPI","Équipements de Protection Individuelle : lunettes, gants, chaussures de sécurité…"],
 ["Classe de sécurité","Classement d'un fluide (ISO 817) : A ou B pour la toxicité, 1, 2L, 2 ou 3 pour l'inflammabilité."]
);

C.quiz.push(
 ["securite","Un jet de fluide liquide sur la peau provoque…",["Une gelure","Une brûlure électrique","Rien","Une allergie"],0,"Le liquide s'évapore instantanément à très basse température."],
 ["securite","Pourquoi jamais d'oxygène dans un circuit ?",["Risque d'explosion au contact de l'huile","Il est trop cher","Il est trop lourd","Il colore l'huile"],0,"Oxygène + huile sous pression = explosion."],
 ["securite","Quelle habilitation pour dépanner l'électricité d'une machine frigorifique ?",["BR","B0","H0","Aucune"],0,"BR = interventions générales en basse tension."],
 ["securite","Au contact d'une flamme, un fluide fluoré…",["Se décompose en gaz toxiques et corrosifs","Devient inoffensif","Se transforme en eau","S'éteint"],0,"Il faut ventiler et ne jamais braser sur un circuit chargé."],
 ["securite","Quels vêtements pour le brasage ?",["En coton, non synthétiques","En polyester","Peu importe","Un ciré"],0,"Le synthétique fond et colle à la peau."],
 ["securite","Une bouteille de fluide au soleil…",["Voit sa pression augmenter dangereusement","Perd du fluide","Ne change pas","Refroidit"],0,"La pression suit la température."]
);

C.vf.push(
 ["On peut tester l'étanchéité à l'oxygène.",false,"Jamais : azote déshydraté uniquement."],
 ["Les fluides frigorigènes sont en général plus lourds que l'air.",true,"Ils s'accumulent dans les points bas."],
 ["On peut braser un tube tant que le circuit est à l'arrêt, même s'il contient du fluide.",false,"Il faut d'abord récupérer le fluide."]
);
