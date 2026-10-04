/* NIVEAU 3 — Organiser un chantier et le métier */
C.modules.push({id:"metier",n:3,i:"👷",t:"Organiser un chantier",d:"Préparation, ordre des travaux, réception, relation client",
 s:[{h:"Préparer",l:["Lire les <b>plans</b> et le <b>devis</b> : ce qui est prévu, rien de plus, rien de moins.","Faire le <b>métré</b> et la <b>liste de matériel</b>.","Prévoir l'outillage, les EPI, l'accès au chantier."]},
    {h:"L'ordre des travaux en neuf",l:["<b>Implantation</b> (tracer boîtes et passages) → <b>réservations</b> et pose des boîtes → <b>conduits</b>.","Puis <b>tirage des fils</b> → <b>raccordement</b> de l'appareillage et du tableau.","Enfin <b>autocontrôle</b>, mesures, mise en service."]},
    {h:"Travailler avec les autres corps de métier",l:["Le plaquiste, le plombier, le maçon, le peintre interviennent avant ou après toi.","Les conduits se posent avant la chape ou avant la fermeture des cloisons.","On protège son travail (boîtes bouchées, câbles repérés)."]},
    {h:"La relation client",l:["Expliquer le tableau, les différentiels, le bouton test.","Remettre le <b>dossier</b> : schémas, notices, attestation.","Laisser le chantier <b>propre</b>. Signaler tout travail supplémentaire <b>avant</b> de le faire."]}],
 k:["Devis","Métré","Réception"]});

C.fiches.metier={
 intro:"Savoir câbler ne suffit pas pour être un bon électricien : il faut aussi savoir organiser son chantier, travailler avec les autres métiers et parler au client. Un chantier bien préparé se fait plus vite, avec moins d'oublis, et le client recommande l'entreprise.",
 s:[
  {p:"Avant le premier coup de perforateur, on lit le <b>devis</b> (ce que le client a commandé et payé) et les <b>plans</b>. On fait le <b>métré</b> : nombre de prises, d'interrupteurs, de points lumineux, longueurs de câbles et de conduits, nombre de modules au tableau. On prépare la <b>liste de matériel</b> pour le fournisseur. On vérifie aussi l'accès, les horaires, l'électricité de chantier et les EPI nécessaires.",
   ex:"Sur le plan d'un T3 : 24 prises, 9 interrupteurs, 11 points lumineux, 6 RJ45, 1 tableau de 3 rangées. Tu ajoutes 10 % de câble et de conduit pour les chutes et imprévus.",
   q:["Pourquoi lire le devis avant de commencer ?",["Pour savoir exactement ce que le client a commandé","Pour connaître le prix du café","Ce n'est pas utile","Pour choisir la couleur des murs"],0,"Le devis fixe ce qu'on doit réaliser."]},
  {p:"En construction neuve, l'ordre est toujours le même. On <b>implante</b> (on trace l'emplacement des boîtes et des passages, au niveau laser). On fait les <b>réservations</b> et on pose les <b>boîtes</b>. On pose les <b>conduits</b> (dans les dalles avant le coulage, dans les cloisons avant leur fermeture). On <b>tire les fils</b>, on <b>raccorde</b> l'appareillage et le tableau. Enfin, <b>autocontrôle</b>, mesures et mise en service.",
   fig:{type:"flux",legende:"Chantier neuf : l'ordre des travaux",etapes:["Préparer (plans, matériel)","Implanter","Réservations et boîtes","Conduits","Tirage des fils","Raccordements","Autocontrôle, mesures, mise en service"]},
   q:["Dans un chantier neuf, que fait-on avant de tirer les fils ?",["Poser les conduits","Raccorder les prises","Mettre sous tension","Faire les mesures d'isolement"],0,"Les fils se tirent dans des conduits déjà posés."]},
  {p:"Sur un chantier, tu n'es pas seul. Les conduits noyés dans la dalle doivent être posés <b>avant</b> le coulage du béton ; ceux des cloisons <b>avant</b> que le plaquiste ne les ferme ; l'appareillage se pose <b>après</b> la peinture. Il faut donc suivre le <b>planning</b> du chantier et communiquer avec les autres corps de métier. On <b>protège</b> son travail : boîtes bouchées pour que l'enduit n'y entre pas, extrémités de câbles repérées.",
   att:"Un conduit oublié dans une dalle coulée, c'est une saignée dans le béton ou un passage apparent. Un oubli de 5 minutes coûte des heures.",
   q:["Quand pose-t-on les conduits noyés dans une dalle ?",["Avant le coulage du béton","Après le coulage","Après la peinture","Jamais"],0,"Une fois le béton coulé, il est trop tard."]},
  {p:"La fin du chantier compte autant que le reste. On <b>explique</b> au client son tableau : quel disjoncteur pour quoi, comment réarmer, à quoi sert le bouton test du différentiel (à presser régulièrement). On remet le <b>dossier</b> : schéma, notices, attestation de conformité si besoin. On laisse un chantier <b>propre</b>. Et si un travail non prévu au devis est nécessaire, on le <b>signale et on le fait valider avant</b> de le réaliser.",
   ex:"« Ici, la rangée du haut protège la cuisine. Si le différentiel saute, coupez tous les disjoncteurs de la rangée, réarmez-le, puis remontez-les un par un : celui qui fait sauter, c'est celui à me signaler. »",
   q:["Un travail supplémentaire non prévu au devis est nécessaire. Que fais-tu ?",["Je le signale et je le fais valider avant de le réaliser","Je le fais sans rien dire","Je ne fais rien et je pars","Je le facture sans prévenir"],0,"Le client doit accepter tout travail supplémentaire."]}
 ],
 retenir:["Préparer : devis, plans, métré, liste de matériel.","Neuf : implanter, boîtes, conduits, fils, raccordements, contrôles.","Respecter le planning des autres métiers ; protéger son travail.","Expliquer le tableau, remettre le dossier, chantier propre, travaux en plus validés avant."]
};

C.lexique.push(
 ["Devis","Document qui décrit et chiffre les travaux à réaliser ; une fois signé, il engage l'entreprise et le client."],
 ["Réception","Moment où le client accepte les travaux terminés, avec ou sans réserves."]
);

C.quiz.push(
 ["metier","Quelle est la première étape d'un chantier neuf ?",["Préparer : plans, métré, matériel","Tirer les fils","Poser les prises","Faire les mesures"],0,"Une bonne préparation évite les oublis."],
 ["metier","Pourquoi boucher les boîtes d'encastrement pendant l'enduit ?",["Pour que l'enduit n'y entre pas","Pour faire joli","Pour l'isolation thermique","Ce n'est pas utile"],0,"Une boîte pleine d'enduit est à nettoyer ou à refaire."],
 ["metier","Quand pose-t-on l'appareillage (prises, interrupteurs) en finition ?",["Après la peinture","Avant les cloisons","Avant le coulage de la dalle","Avant de tirer les fils"],0,"Sinon il serait taché ou abîmé."],
 ["metier","Que remet-on au client en fin de chantier ?",["Le dossier : schémas, notices, attestation","Rien","Les chutes de câble","Les clés du fournisseur"],0,"Le dossier permet l'entretien et les futurs dépannages."],
 ["metier","Que conseilles-tu au client à propos du bouton test du différentiel ?",["Le presser régulièrement pour vérifier qu'il déclenche","Ne jamais y toucher","Le bloquer","Le démonter"],0,"Un test régulier vérifie la mécanique du différentiel."]
);

C.vf.push(
 ["Les conduits des cloisons se posent avant leur fermeture par le plaquiste.",true,"Il faut suivre le planning des autres corps de métier."],
 ["On peut réaliser un travail supplémentaire sans prévenir le client.",false,"Il doit être signalé et validé avant."]
);

C.ordre.push(
 {t:"Chantier neuf : l'ordre des travaux",ic:"🏗️",s:["Lire les plans et préparer le matériel","Implanter (tracer les boîtes et les passages)","Faire les réservations et poser les boîtes","Poser les conduits","Tirer les fils","Raccorder l'appareillage et le tableau","Autocontrôle, mesures et essais","Mise en service et explications au client"]},
 {t:"Poser une prise en cloison sèche",ic:"🔌",s:["Tracer l'emplacement (hauteur, niveau)","Percer à la scie cloche Ø 67 mm","Passer le câble avec le tire-fil","Poser la boîte d'encastrement à griffes","Dénuder et raccorder phase, neutre et terre","Fixer le mécanisme et la plaque","Remettre sous tension et tester la prise"]},
 {t:"Remplacer une prise de courant",ic:"🔁",s:["Couper le disjoncteur du circuit","Vérifier l'absence de tension","Démonter l'ancienne prise","Raccorder phase, neutre et terre","Fixer la nouvelle prise","Remettre sous tension et tester"]},
 {t:"Premiers secours face à une électrisation",ic:"🚑",s:["Ne pas toucher la victime","Couper le courant","Alerter les secours (15, 18 ou 112)","Secourir : PLS ou massage cardiaque + défibrillateur","Surveiller jusqu'à l'arrivée des secours"]}
);
