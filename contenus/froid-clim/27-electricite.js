/* NIVEAU 2 — L'électricité frigorifique */
C.modules.push({id:"electricite",n:2,i:"⚡",t:"L'électricité frigorifique",d:"Commande du compresseur, bobinages, condensateurs, régulation",
 s:[{h:"La commande du compresseur",l:["Le <b>thermostat</b> (ou régulateur) demande le froid.","Les sécurités (<b>HP</b>, <b>BP</b>, thermique) sont <b>en série</b> avec la bobine du <b>contacteur</b>.","Le contacteur alimente le compresseur ; un <b>disjoncteur</b> protège le circuit."]},
    {h:"Le compresseur monophasé",l:["3 bornes : <b>C</b> (commun), <b>R</b> (marche), <b>S</b> (démarrage).","À l'ohmmètre : <b>R-S = C-R + C-S</b> ; C-R est la plus faible valeur.","Un <b>condensateur</b> aide le démarrage et/ou la marche."]},
    {h:"Les ventilateurs et le dégivrage",l:["Moteurs de ventilateurs, souvent avec leur propre condensateur.","Résistances de dégivrage commandées par le régulateur.","Sondes de température <b>NTC</b> (la résistance baisse quand la température monte)."]},
    {h:"Sécurité électrique",l:["Habilitation <b>BR</b> pour dépanner, consignation avant d'intervenir.","Condensateurs : les <b>décharger</b> avant de les toucher.","Mesures d'isolement du compresseur au mégohmmètre."]}],
 k:["Contacteur","Thermostat","Condensateur","Sonde NTC","Bobinage"]});

C.fiches.electricite={
 intro:"Une grande partie des pannes en froid sont électriques : un condensateur fatigué, un contacteur aux contacts brûlés, une sonde qui dérive, un pressostat mal câblé. Le frigoriste est aussi électricien : il lit le schéma de commande, mesure et remplace les composants en sécurité. Entraîne-toi au jeu « Câblage ».",
 s:[
  {p:"Le compresseur est commandé par un <b>contacteur</b>. La bobine du contacteur est alimentée à travers une chaîne de contacts <b>en série</b> : le <b>thermostat</b> (ou le relais du régulateur) qui demande du froid, le <b>pressostat HP</b>, le <b>pressostat BP</b>, la protection thermique. Si un seul de ces contacts s'ouvre, la bobine n'est plus alimentée et le compresseur s'arrête.",
   fig:{type:"flux",legende:"Chaîne de commande d'un compresseur",etapes:["Phase (disjoncteur de commande)","Thermostat ou régulateur","Pressostat HP","Pressostat BP","Bobine A1-A2 du contacteur","Neutre"]},
   ex:"Le compresseur ne démarre pas, mais le ventilateur tourne. Tu mesures la tension aux bornes A1-A2 du contacteur : 0 V. Tu remontes la chaîne : 230 V avant le pressostat HP, 0 V après. Le pressostat HP est ouvert : il a déclenché.",
   q:["Comment sont câblés le thermostat et les pressostats dans la commande ?",["En série avec la bobine du contacteur","En parallèle","Sur le neutre seulement","Ils ne sont pas câblés"],0,"Tous doivent être fermés pour que le compresseur tourne."]},
  {p:"Un compresseur <b>monophasé</b> a deux bobinages : le bobinage de <b>marche</b> (entre C et R) et le bobinage de <b>démarrage</b> (entre C et S), relié au réseau par un <b>condensateur</b>. À l'ohmmètre (hors tension), on retrouve les bornes : la plus faible valeur est C-R, puis C-S, et R-S est la somme des deux. Une valeur infinie = bobinage coupé ; une valeur à la masse = défaut d'isolement.",
   fig:{type:"barres",legende:"Exemple de mesures sur un compresseur monophasé (hors tension)",items:[["C – R (marche)",2,"Ω","#2ed47a"],["C – S (démarrage)",5,"Ω","#ffc83d"],["R – S (= 2 + 5)",7,"Ω","#ff8a3d"]]},
   att:"Un condensateur peut rester chargé après la coupure : on le <b>décharge</b> avec une résistance adaptée avant de le toucher ou de le mesurer.",
   q:["Bornes d'un compresseur : 3 Ω, 9 Ω et 12 Ω. Quelle mesure est entre R et S ?",["12 Ω","3 Ω","9 Ω","Impossible à dire"],0,"R-S est la somme des deux bobinages : 3 + 9 = 12."]},
  {p:"Les <b>ventilateurs</b> (condenseur et évaporateur) ont souvent leur propre condensateur ; un condensateur fatigué fait tourner le moteur lentement ou l'empêche de démarrer. Le <b>régulateur électronique</b> lit des <b>sondes NTC</b> (leur résistance baisse quand la température monte), commande le compresseur, les ventilateurs, le dégivrage, et affiche des alarmes. On compare la valeur d'une sonde à la table du fabricant pour savoir si elle est juste.",
   ex:"Le régulateur affiche +12 °C alors que le thermomètre de contrôle indique +3 °C dans la chambre froide. Tu débranches la sonde et mesures sa résistance : elle ne correspond pas à la table à 3 °C. La sonde est à remplacer.",
   q:["Une sonde NTC chauffe : sa résistance…",["Baisse","Monte","Ne change pas","Devient infinie"],0,"NTC = coefficient de température négatif."]},
  {p:"Les tensions sont dangereuses (230 V, 400 V) et les cartes électroniques des machines inverter stockent de l'énergie. Le dépannage demande l'habilitation <b>BR</b>, des EPI et la <b>consignation</b> avant toute intervention sur les bornes. Pour vérifier l'isolement d'un compresseur, on utilise un <b>mégohmmètre</b> entre les bornes et la carcasse (circuit consigné, électronique débranchée).",
   q:["Avant de mesurer un condensateur de compresseur, on…",["Le décharge","Le chauffe","Le met sous tension","Le mouille"],0,"Il peut rester chargé et électriser."]}
 ],
 retenir:["Thermostat, HP, BP, thermique en série avec la bobine du contacteur.","Monophasé : C-R la plus faible, R-S = C-R + C-S ; condensateur de démarrage ou permanent.","Régulateur et sondes NTC ; comparer la sonde à la table.","Habilitation BR, consignation, condensateurs déchargés."]
};

C.lexique.push(
 ["Contacteur","Interrupteur commandé par une bobine (A1-A2) qui alimente le compresseur."],
 ["Thermostat","Appareil qui ferme ou ouvre un contact selon la température, pour commander le froid."],
 ["Condensateur","Composant qui aide un moteur monophasé à démarrer ou à tourner ; il peut rester chargé."],
 ["Sonde NTC","Sonde de température dont la résistance diminue quand la température augmente."],
 ["Bobinage","Enroulement de fil d'un moteur (bobinage de marche C-R, de démarrage C-S)."],
 ["Régulateur","Boîtier électronique qui gère la température, le dégivrage, les ventilateurs et les alarmes."]
);

C.quiz.push(
 ["electricite","Sur un compresseur monophasé, quelle mesure est la plus faible ?",["C – R","C – S","R – S","Elles sont égales"],0,"Le bobinage de marche a la plus faible résistance."],
 ["electricite","Bobinage mesuré infini entre C et R. Cela veut dire…",["Le bobinage de marche est coupé","Tout est normal","Il y a un court-circuit","Le condensateur est bon"],0,"Infini = circuit ouvert."],
 ["electricite","Le compresseur ne démarre pas : 0 V sur la bobine du contacteur. Tu…",["Remontes la chaîne de commande pour trouver le contact ouvert","Changes le compresseur","Ajoutes du fluide","Changes le contacteur sans mesurer"],0,"Un thermostat ou un pressostat est ouvert."],
 ["electricite","Un ventilateur de condenseur tourne au ralenti. Composant suspect ?",["Son condensateur","Le filtre déshydrateur","Le détendeur","Le voyant"],0,"Un condensateur fatigué fait perdre du couple au moteur."],
 ["electricite","Où sont les contacts A1-A2 d'un contacteur ?",["Ce sont les bornes de sa bobine","Ce sont les pôles de puissance","C'est la terre","C'est le neutre"],0,"A1-A2 = bobine de commande."]
);

C.vf.push(
 ["Les pressostats HP et BP sont câblés en parallèle.",false,"En série : chacun peut arrêter le compresseur."],
 ["Sur un compresseur monophasé, R-S = C-R + C-S.",true,"Les deux bobinages sont en série entre R et S."],
 ["Un condensateur débranché ne présente aucun danger.",false,"Il peut rester chargé : on le décharge."]
);
