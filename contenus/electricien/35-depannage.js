/* NIVEAU 3 — La méthode de dépannage */
C.modules.push({id:"depannage",n:3,i:"🔎",t:"La méthode de dépannage",d:"Questionner, raisonner, mesurer, réparer, rendre compte",
 s:[{h:"La démarche",l:["1. <b>Écouter</b> le client et <b>constater</b> le symptôme soi-même.","2. <b>Consulter</b> le schéma, repérer le circuit.","3. Faire des <b>hypothèses</b>, de la plus probable à la moins probable.","4. <b>Mesurer</b> pour confirmer, du général au particulier.","5. <b>Réparer</b>, 6. <b>Essayer</b>, 7. <b>Rendre compte</b>."]},
    {h:"Qui a déclenché ?",l:["<b>Différentiel</b> → fuite à la terre (défaut d'isolement, humidité).","<b>Disjoncteur instantanément</b> → court-circuit.","<b>Disjoncteur après un moment</b> → surcharge.","<b>Disjoncteur de branchement</b> → dépassement de l'abonnement (ou défaut général)."]},
    {h:"Les techniques de recherche",l:["<b>Par élimination</b> : couper tout, remettre un par un.","<b>De point en point</b> : suivre la tension jusqu'à l'endroit où elle disparaît.","<b>Par substitution</b> : échanger avec un élément qu'on sait bon (appareil, ampoule)."]},
    {h:"Les pièges",l:["Remplacer des pièces au hasard (« changer pour voir »).","Supprimer une protection qui « saute tout le temps ».","Oublier de chercher la <b>cause</b> : une borne brûlée a été mal serrée."]}],
 k:["Dépannage","Hypothèse","Défaut d'isolement","Bon de travail"]});

C.fiches.depannage={
 intro:"Le dépannage est ce qui distingue un bon électricien d'un excellent électricien. Face à une panne, l'amateur change des pièces au hasard ; le professionnel raisonne, mesure et trouve. La méthode est toujours la même : elle marche pour une prise morte comme pour une usine à l'arrêt. Entraîne-la dans le jeu « Dépannage ».",
 s:[
  {p:"La méthode tient en sept étapes. On <b>écoute</b> le client (depuis quand ? que s'est-il passé juste avant ? quel appareil était en route ?) et on <b>constate</b> soi-même. On <b>consulte</b> le schéma pour savoir ce qui alimente quoi. On formule des <b>hypothèses</b>, de la plus probable à la moins probable. On les vérifie par des <b>mesures</b>, en allant du général au particulier. Puis on <b>répare</b>, on <b>essaie</b>, et on <b>rend compte</b> (bon de travail rempli, conseils au client).",
   fig:{type:"cycle",centre:"Méthode de dépannage",etapes:[["Écouter, constater","#ffc83d"],["Consulter le schéma","#3db5ff"],["Hypothèses","#b18cff"],["Mesurer","#ff8a3d"],["Réparer","#2ed47a"],["Essayer","#7be0d0"],["Rendre compte","#ff8fab"]]},
   ex:"« Depuis hier, la prise de la chambre ne marche plus. Il y a eu une odeur de brûlé quand j'ai branché le radiateur. » En une phrase, le client t'a donné l'hypothèse principale : une connexion qui a chauffé.",
   q:["Quelle est la première étape d'un dépannage ?",["Écouter le client et constater","Changer le disjoncteur","Démonter la prise","Couper tout le logement"],0,"Les questions et l'observation donnent souvent la piste principale."]},
  {p:"Le premier indice est souvent au tableau : <b>qu'est-ce qui a déclenché ?</b> Un <b>différentiel</b> qui déclenche signale une <b>fuite à la terre</b> (isolant abîmé, humidité, appareil en défaut). Un <b>disjoncteur</b> qui déclenche <b>instantanément</b>, parfois avec un claquement, signale un <b>court-circuit</b>. Un disjoncteur qui tient quelques minutes puis déclenche signale une <b>surcharge</b>. Le <b>disjoncteur de branchement</b> qui déclenche quand beaucoup d'appareils tournent signale un dépassement de l'abonnement.",
   fig:{type:"cycle",centre:"Ce qui a déclenché…",etapes:[["Différentiel<br>→ fuite à la terre","#3db5ff"],["Disjoncteur, instantané<br>→ court-circuit","#ff5470"],["Disjoncteur, au bout d'un moment<br>→ surcharge","#ffc83d"],["Branchement<br>→ abonnement dépassé","#b18cff"]]},
   q:["Le différentiel déclenche dès qu'il pleut. Hypothèse principale ?",["Un défaut d'isolement dû à l'humidité","Une surcharge","Un abonnement trop faible","Un court-circuit franc"],0,"L'eau rend un isolant conducteur : fuite à la terre."]},
  {p:"Trois techniques de recherche. <b>Par élimination</b> : on coupe tous les disjoncteurs sous un différentiel, on réarme, puis on remonte les disjoncteurs un par un : celui qui fait redéclencher est le fautif. <b>De point en point</b> : on suit la tension depuis le tableau (230 V ✔), à la boîte de dérivation (230 V ✔), à l'appareil (0 V ✗) : la panne est entre les deux derniers points. <b>Par substitution</b> : on remplace un élément douteux par un élément qu'on sait bon (une ampoule, un appareil branché sur une autre prise).",
   fig:{type:"flux",legende:"Recherche de point en point",etapes:[["Départ du disjoncteur","230 V ✔"],["Boîte de dérivation","230 V ✔"],["Entrée de l'appareil","0 V ✗"],["La panne est entre la boîte et l'appareil","câble coupé ?"]]},
   att:"Les mesures sous tension (recherche de point en point) demandent l'habilitation BR, des EPI (gants, écran) et un appareil de catégorie adaptée. Les mesures de résistance et d'isolement se font hors tension.",
   q:["Pour trouver le circuit qui fait déclencher un différentiel, on…",["Coupe les disjoncteurs en aval, réarme, puis les remonte un par un","Remplace le différentiel","Débranche la terre","Attend que ça passe"],0,"C'est la recherche par élimination."]},
  {p:"Les erreurs classiques coûtent cher. <b>Changer des pièces au hasard</b> coûte au client et ne trouve pas la cause. <b>Supprimer une protection</b> (shunter un différentiel, surcalibrer un disjoncteur) met des vies en danger. <b>Réparer l'effet sans la cause</b> : une borne brûlée remplacée sans comprendre qu'elle était mal serrée, ou qu'un radiateur était branché sur une multiprise, et la panne revient. Enfin, un dépannage n'est fini qu'après l'<b>essai</b> et le <b>compte rendu</b>.",
   att:"Un différentiel qui saute ou un disjoncteur qui déclenche n'est presque jamais « trop sensible » : il fait son travail. On cherche le défaut.",
   q:["Un disjoncteur 16 A déclenche souvent. Quelle « solution » est interdite ?",["Le remplacer par un 25 A","Chercher la surcharge","Répartir les appareils","Créer un circuit supplémentaire"],0,"Surcalibrer, c'est laisser le câble chauffer sans protection."]}
 ],
 retenir:["Écouter, constater, schéma, hypothèses, mesures, réparer, essayer, rendre compte.","Différentiel = fuite ; disjoncteur instantané = court-circuit ; disjoncteur lent = surcharge.","Élimination, point en point, substitution.","On cherche la cause ; on ne supprime jamais une protection."]
};

C.lexique.push(
 ["Dépannage","Recherche méthodique de la cause d'une panne, puis réparation et essai."],
 ["Hypothèse","Cause possible d'une panne, à vérifier par une mesure ou un test."],
 ["Bon de travail","Document qui décrit une intervention : lieu, demandeur, symptôme, travaux réalisés, temps, pièces."]
);

C.quiz.push(
 ["depannage","Un disjoncteur déclenche au bout de 20 minutes. Probablement…",["Une surcharge","Un court-circuit","Une fuite à la terre","La foudre"],0,"Le thermique laisse passer une surcharge un moment, puis coupe."],
 ["depannage","La technique « par substitution » consiste à…",["Remplacer un élément douteux par un élément qu'on sait bon","Tout remplacer","Mesurer l'isolement","Couper le courant général"],0,"Ex. : tester l'appareil sur une autre prise, essayer une ampoule neuve."],
 ["depannage","230 V à la boîte de dérivation, 0 V à l'appareil. La panne est…",["Entre la boîte et l'appareil","Au tableau","Chez le distributeur","Dans la terre"],0,"De point en point : entre le dernier point bon et le premier mauvais."],
 ["depannage","Après une réparation, on…",["Essaie, puis rend compte au client","Part tout de suite","Laisse le circuit coupé","Change le différentiel par précaution"],0,"Essai et compte rendu terminent l'intervention."],
 ["depannage","Le client dit qu'un appareil « fait sauter » le différentiel. Premier test simple ?",["Brancher l'appareil sur une autre prise (substitution)","Remplacer le différentiel","Mesurer la tension du compteur","Couper la terre"],0,"Si le défaut suit l'appareil, c'est l'appareil."],
 ["depannage","Pourquoi questionner le client en premier ?",["Il donne souvent l'indice principal (ce qui s'est passé juste avant)","Pour remplir le temps","Pour facturer plus","Ce n'est pas utile"],0,"Odeur de brûlé, orage, travaux récents : autant de pistes."]
);

C.vf.push(
 ["Un différentiel qui saute souvent doit être remplacé par un modèle moins sensible.",false,"Il signale un défaut : on cherche le défaut."],
 ["On remonte les disjoncteurs un par un pour trouver le circuit en défaut.",true,"C'est la recherche par élimination."],
 ["Un dépannage est terminé dès que la pièce est changée.",false,"Il faut encore essayer et rendre compte."]
);

C.ordre.push(
 {t:"La méthode de dépannage",ic:"🔎",s:["Écouter le client et constater le symptôme","Consulter le schéma de l'installation","Faire des hypothèses","Mesurer pour confirmer, du général au particulier","Réparer","Essayer","Rendre compte et remplir le bon de travail"]}
);
