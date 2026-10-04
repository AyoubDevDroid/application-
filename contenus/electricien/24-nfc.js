/* NIVEAU 2 — La NF C 15-100 pièce par pièce */
C.modules.push({id:"nfc",n:2,i:"🏠",t:"La NF C 15-100 pièce par pièce",d:"Prises, éclairage et circuits obligatoires dans un logement",
 s:[{h:"Les grands principes",l:["La <b>NF C 15-100</b> fixe les règles des installations électriques basse tension, notamment dans les logements.","Objectifs : <b>sécurité</b>, <b>confort</b> (assez de prises) et <b>évolutivité</b> (réserve, GTL).","Les gros appareils ont chacun leur <b>circuit spécialisé</b>."]},
    {h:"Séjour et chambres",l:["Séjour : au moins <b>1 prise par tranche de 4 m²</b>, avec un <b>minimum de 5</b> ; au-delà de 28 m², <b>7 prises</b> minimum.","Chambre : au moins <b>3 prises</b>.","Chaque pièce : au moins <b>1 point d'éclairage</b> commandé, raccordé sur un <b>DCL</b>."]},
    {h:"La cuisine",l:["Au moins <b>6 prises</b>, dont <b>4 au-dessus du plan de travail</b>.","Circuits spécialisés : <b>plaque de cuisson</b> (32 A), <b>four</b>, <b>lave-vaisselle</b> (20 A).","Pas de prise juste au-dessus de l'évier ni de la plaque."]},
    {h:"Les autres pièces",l:["Entrée, couloir : au moins 1 prise et 1 point lumineux.","Salle de bain : règles des <b>volumes</b> (module dédié).","Extérieur : matériel à l'<b>indice IP</b> adapté.","<b>Détecteur de fumée (DAAF)</b> obligatoire dans tout logement."]},
    {h:"Hauteurs et emplacements",l:["Prise 16 A ou 20 A : axe à <b>5 cm minimum</b> du sol fini ; prise 32 A : <b>12 cm</b>.","Interrupteur à l'<b>entrée</b> de chaque pièce, côté ouverture de la porte.","Interrupteurs et commandes entre <b>0,90 m et 1,30 m</b> du sol."]}],
 k:["NF C 15-100","DCL","Circuit spécialisé","DAAF"]});

C.fiches.nfc={
 intro:"La NF C 15-100 est la norme que tout électricien du bâtiment doit connaître. Elle ne se limite pas à la sécurité : elle impose aussi un minimum de confort, pour qu'on n'ait pas besoin de multiprises partout. Ce module donne les règles les plus utiles, pièce par pièce. ⚠️ La norme a connu plusieurs éditions (la plus récente a été publiée en août 2024 et s'applique aux projets neufs depuis le 1er septembre 2025) : les valeurs ci-dessous sont les règles courantes, vérifie toujours l'édition qui s'applique à ton chantier.",
 s:[
  {p:"La norme répond à trois objectifs. <b>Sécurité</b> : protéger les personnes et les biens (différentiels, sections, terre). <b>Confort</b> : assez de prises et de points lumineux, bien placés. <b>Évolutivité</b> : une GTL, un tableau avec de la réserve, des conduits pour pouvoir modifier l'installation. Les appareils puissants ont chacun un <b>circuit spécialisé</b> : ils ne partagent pas leur câble avec d'autres appareils.",
   fig:{type:"cycle",centre:"NF C 15-100",etapes:[["Sécurité","#ff5470"],["Confort","#ffc83d"],["Évolutivité","#2ed47a"]]},
   ex:"Circuits spécialisés courants : plaque de cuisson, four, lave-linge, lave-vaisselle, sèche-linge, chauffe-eau, congélateur (conseillé), chauffage, borne de recharge.",
   q:["Pourquoi un lave-linge a-t-il son propre circuit ?",["Il consomme beaucoup : il ne doit pas partager son câble","Pour faire joli","Parce qu'il est bleu","Ce n'est pas obligatoire"],0,"Un appareil puissant seul sur son circuit évite les surcharges."]},
  {p:"Dans le <b>séjour</b>, on compte une prise par tranche de 4 m², avec un minimum de 5 ; au-delà de 28 m², la norme demande 7 prises minimum, réparties sur le pourtour : un séjour de 24 m² demande 6 prises, un séjour de 40 m² en demande 7. Dans chaque <b>chambre</b>, au moins 3 prises. Chaque pièce a au moins un <b>point d'éclairage</b> au plafond ou en applique, commandé par un interrupteur, et raccordé sur un <b>DCL</b> (dispositif de connexion pour luminaire) : le client branche son luminaire sans toucher aux fils.",
   fig:{type:"flux",legende:"Nombre de prises d'un séjour de 22 m²",etapes:[["Surface","22 m² (moins de 28 m²)"],["÷ 4 m² par prise","5,5"],["Arrondi au-dessus","6"],["Au moins 5 → OK","6 prises"]]},
   info:"Les pièces principales (séjour, chambres) ont aussi au moins une prise de communication RJ45, câblée vers le tableau de communication.",
   q:["Combien de prises au minimum dans un séjour de 20 m² ?",["5","4","3","10"],0,"20 ÷ 4 = 5 prises, et le minimum est de 5."]},
  {p:"La <b>cuisine</b> est la pièce la plus équipée. Au moins <b>6 prises</b>, dont <b>4 au-dessus du plan de travail</b> (3 prises suffisent dans une cuisine de 4 m² ou moins), sur un circuit <b>2,5 mm² / 20 A</b>. Les gros appareils ont leur circuit spécialisé : plaque de cuisson en <b>6 mm² / 32 A</b> (monophasé) sur un différentiel de type A, four et lave-vaisselle en <b>2,5 mm² / 20 A</b>. On évite les prises juste au-dessus de l'évier et de la plaque (eau, chaleur).",
   fig:{type:"barres",legende:"Les circuits d'une cuisine",items:[["Plaque de cuisson",32,"A"],["Four",20,"A"],["Lave-vaisselle",20,"A"],["Prises du plan de travail",20,"A"],["Éclairage",16,"A"]]},
   ex:"Une cuisine équipée typique : 1 sortie de câble 32 A pour la plaque, 2 prises spécialisées (four, lave-vaisselle), 4 prises au-dessus du plan de travail, 2 autres prises, 1 point lumineux au plafond + 1 éclairage sous meubles.",
   q:["Combien de prises au-dessus du plan de travail de la cuisine, au minimum ?",["4","1","2","6"],0,"4 prises au-dessus du plan de travail, 6 au total dans la cuisine."]},
  {p:"Dans l'<b>entrée</b> et les <b>couloirs</b>, au moins une prise (pour l'aspirateur) et un point lumineux, souvent commandé en va-et-vient ou par télérupteur. La <b>salle de bain</b> a ses propres règles (les volumes) : on les voit dans le module suivant. À l'<b>extérieur</b>, le matériel doit avoir un indice de protection adapté à la pluie. Enfin, tout logement doit avoir au moins un <b>détecteur de fumée (DAAF)</b>, de préférence dans le dégagement qui dessert les chambres.",
   att:"Le DAAF se fixe au plafond, loin de la cuisine et de la salle de bain (vapeur = fausses alarmes). Il ne se place pas dans un angle, où la fumée arrive mal.",
   q:["Où placer le détecteur de fumée ?",["Au plafond du dégagement qui dessert les chambres","Dans la cuisine, au-dessus de la plaque","Dans la salle de bain","Au sol"],0,"Au plafond, près des chambres, loin des vapeurs."]},
  {p:"Les hauteurs comptent. Une prise 16 A ou 20 A a son <b>axe à 5 cm minimum</b> du sol fini (12 cm pour une prise 32 A), pour éviter l'eau du ménage et les chocs. L'interrupteur se place à l'<b>entrée</b> de la pièce, du côté de la poignée de la porte, pour qu'on allume en entrant. Les interrupteurs et les commandes se placent entre <b>0,90 m et 1,30 m</b> du sol.",
   fig:{type:"barres",legende:"Hauteurs à retenir (depuis le sol fini)",items:[["Axe d'une prise 16 A (minimum)",5,"cm","#3db5ff"],["Axe d'une prise 32 A (minimum)",12,"cm","#3db5ff"],["Interrupteurs, commandes (bas)",90,"cm","#ffc83d"],["Interrupteurs, commandes (haut)",130,"cm","#ffc83d"]]},
   q:["L'axe d'une prise 16 A doit être au minimum à…",["5 cm du sol fini","30 cm du sol","1 m du sol","0 cm"],0,"5 cm minimum pour une prise jusqu'à 20 A, 12 cm pour une 32 A."]}
 ],
 retenir:["Circuits spécialisés pour les gros appareils.","Séjour : 1 prise par 4 m², minimum 5 (7 au-delà de 28 m²). Chambre : 3. Cuisine : 6 dont 4 au-dessus du plan de travail.","Chaque pièce : 1 point lumineux sur DCL. DAAF obligatoire.","Prise : axe à 5 cm mini (12 cm en 32 A). Commandes entre 0,90 et 1,30 m.","Vérifier l'édition de la norme applicable au chantier."]
};

C.lexique.push(
 ["NF C 15-100","Norme qui fixe les règles des installations électriques basse tension, notamment dans les logements."],
 ["DCL","Dispositif de Connexion pour Luminaire : douille ou fiche normalisée au plafond ou au mur, sur laquelle on branche le luminaire."],
 ["Circuit spécialisé","Circuit qui n'alimente qu'un seul appareil (four, lave-linge, chauffe-eau…)."],
 ["DAAF","Détecteur Avertisseur Autonome de Fumée : obligatoire dans tout logement depuis 2015."]
);

C.quiz.push(
 ["nfc","Combien de prises au minimum dans une chambre ?",["3","1","5","6"],0,"3 prises au minimum par chambre."],
 ["nfc","Combien de prises au minimum dans la cuisine ?",["6","3","4","10"],0,"6 prises dont 4 au-dessus du plan de travail."],
 ["nfc","Un séjour de 24 m² doit avoir au minimum…",["6 prises","5 prises","4 prises","24 prises"],0,"24 ÷ 4 = 6 prises."],
 ["nfc","Un séjour de 35 m² doit avoir au minimum…",["7 prises","9 prises","5 prises","35 prises"],0,"Au-delà de 28 m², la norme demande 7 prises minimum."],
 ["nfc","À quoi sert un DCL ?",["Brancher un luminaire sans toucher aux fils","Couper le courant","Mesurer la terre","Protéger les personnes"],0,"Le client raccorde son luminaire sur une fiche normalisée."],
 ["nfc","Le détecteur de fumée (DAAF) est…",["Obligatoire dans tout logement","Facultatif","Interdit dans les chambres","Seulement pour les immeubles"],0,"Obligatoire depuis mars 2015."],
 ["nfc","Où place-t-on l'interrupteur d'une pièce ?",["À l'entrée, côté poignée de la porte","Derrière la porte","Au plafond","À l'opposé de la porte"],0,"On allume en entrant, sans chercher."],
 ["nfc","Quel circuit est spécialisé ?",["Le lave-vaisselle","Les prises de la chambre","L'éclairage du couloir","La prise de l'entrée"],0,"Le lave-vaisselle a son circuit 2,5 mm² / 20 A."],
 ["nfc","L'axe d'une prise 32 A doit être au minimum à…",["12 cm du sol fini","5 cm","50 cm","1 m"],0,"12 cm pour les prises 32 A."],
 ["nfc","Pourquoi éviter une prise juste au-dessus de l'évier ?",["Risque de projection d'eau","Ça gêne la vaisselle","C'est moche","Aucune raison"],0,"L'eau et l'électricité ne font pas bon ménage."]
);

C.vf.push(
 ["Chaque pièce doit avoir au moins un point d'éclairage.",true,"Commandé par un interrupteur, raccordé sur un DCL."],
 ["Le four peut être branché sur le même circuit que les prises du plan de travail.",false,"Le four a son propre circuit spécialisé."],
 ["La NF C 15-100 ne change jamais.",false,"Elle a connu plusieurs éditions et amendements ; la dernière date de 2024."],
 ["Le DAAF se place de préférence dans la cuisine.",false,"La vapeur et les fumées de cuisson provoqueraient des fausses alarmes."]
);
