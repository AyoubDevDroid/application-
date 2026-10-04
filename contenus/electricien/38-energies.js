/* NIVEAU 3 — Recharge de véhicules et nouvelles énergies */
C.modules.push({id:"energies",n:3,i:"🔋",t:"Recharge et nouvelles énergies",d:"Borne de recharge (IRVE), photovoltaïque, pompe à chaleur, Linky",
 s:[{h:"Recharger un véhicule électrique",l:["<b>Prise renforcée</b> (environ 3,2 kW) ou <b>borne murale</b> (wallbox, 7,4 kW en monophasé et plus).","Toujours un <b>circuit dédié</b>, avec sa protection et un <b>différentiel type A</b> au minimum (ou F / B selon la borne).","Au-delà de <b>3,7 kW</b>, l'installateur doit avoir la qualification <b>IRVE</b>."]},
    {h:"Le photovoltaïque",l:["Les panneaux produisent du courant <b>continu</b> ; l'<b>onduleur</b> le transforme en alternatif.","Côté continu, la tension est présente <b>dès qu'il fait jour</b> : on ne peut pas « couper » un panneau.","Habilitation spécifique <b>BP</b> pour intervenir sur la partie photovoltaïque."]},
    {h:"Pompe à chaleur et gros équipements",l:["Une <b>pompe à chaleur</b> a son circuit dédié, souvent en triphasé, dimensionné selon la notice.","Le <b>gestionnaire d'énergie</b> ou <b>délesteur</b> coupe le chauffage quand la puissance approche de l'abonnement."]},
    {h:"Le compteur communicant",l:["Le compteur <b>Linky</b> transmet les index à distance.","Il dispose d'un <b>contact</b> pour les heures creuses et d'une sortie d'informations (<b>TIC</b>) pour les gestionnaires d'énergie.","Le disjoncteur de branchement reste en place."]}],
 k:["IRVE","Onduleur","Délestage","Courant continu"]});

C.fiches.energies={
 intro:"Voitures électriques, panneaux solaires, pompes à chaleur : l'électricité prend la place de l'essence, du fioul et du gaz. C'est un énorme marché pour les électriciens, mais avec des règles nouvelles et des dangers particuliers (courant continu, fortes puissances permanentes). Ce module te donne les bases pour comprendre ces chantiers.",
 s:[
  {p:"Une voiture électrique se recharge pendant des heures à forte puissance : c'est très différent d'un appareil ordinaire. On utilise soit une <b>prise renforcée</b> (environ 3,2 kW, 14 A), soit une <b>borne murale</b> (wallbox : 7,4 kW en monophasé 32 A, 11 ou 22 kW en triphasé). Dans tous les cas : <b>circuit dédié</b>, protection adaptée, <b>différentiel 30 mA type A</b> au minimum (certaines bornes demandent un type F ou B, sauf si elles intègrent une détection du courant continu). Au-delà de <b>3,7 kW</b>, la loi exige un installateur qualifié <b>IRVE</b>.",
   fig:{type:"barres",legende:"Puissance de recharge et temps pour 40 kWh (ordre de grandeur)",items:[["Prise ordinaire (déconseillée) — 2,3 kW",17,"h","#ff5470"],["Prise renforcée — 3,2 kW",12.5,"h","#ffc83d"],["Wallbox mono — 7,4 kW",5.5,"h","#3db5ff"],["Wallbox tri — 11 kW",3.6,"h","#2ed47a"]]},
   att:"Recharger une voiture sur une prise ordinaire via une rallonge, des heures durant à 10 A : c'est une cause fréquente d'échauffement et d'incendie. On conseille toujours un circuit dédié.",
   q:["Au-delà de quelle puissance une borne doit-elle être posée par un installateur qualifié IRVE ?",["3,7 kW","1 kW","22 kW","100 kW"],0,"Au-delà de 3,7 kW, la qualification IRVE est exigée."]},
  {p:"Les panneaux <b>photovoltaïques</b> produisent du courant <b>continu</b>. L'<b>onduleur</b> le transforme en alternatif 230 V, synchronisé avec le réseau, pour l'<b>autoconsommation</b> (on consomme sa production) ou la <b>revente</b>. Le danger particulier : la partie continue est sous tension <b>dès qu'il y a de la lumière</b>, et on ne peut pas éteindre le soleil. Le courant continu entretient aussi les arcs électriques bien plus que l'alternatif.",
   fig:{type:"flux",legende:"Une installation en autoconsommation",etapes:[["Panneaux","courant continu (plusieurs centaines de volts)"],["Interrupteur-sectionneur DC","isole côté continu"],["Onduleur","continu → alternatif 230 V"],["Tableau du logement","consommation sur place"],["Surplus","vers le réseau"]]},
   att:"Ne jamais débrancher un connecteur de panneau en charge : l'arc en courant continu ne s'éteint pas tout seul. On coupe d'abord l'onduleur côté alternatif, puis le sectionneur côté continu. Intervention réservée aux personnes habilitées BP.",
   q:["Quel appareil transforme le courant continu des panneaux en alternatif ?",["L'onduleur","Le disjoncteur","Le transformateur de sécurité","Le contacteur"],0,"L'onduleur fabrique un courant alternatif synchronisé avec le réseau."]},
  {p:"Une <b>pompe à chaleur</b> (PAC) ou une climatisation demande un circuit dédié, souvent en <b>triphasé</b> pour les grosses puissances, dimensionné selon la notice du fabricant (courant de démarrage, protection, section). Pour éviter que tous ces gros appareils ne fassent sauter le disjoncteur de branchement, on installe un <b>gestionnaire d'énergie</b> ou un <b>délesteur</b> : il surveille la puissance appelée et coupe temporairement le chauffage ou le chauffe-eau quand on approche de la limite de l'abonnement.",
   ex:"Abonnement 9 kVA. Le délesteur voit 8,5 kVA (plaque + four + chauffage) : il coupe le chauffage pendant quelques minutes, le temps que la cuisson se termine. Le client ne s'en rend pas compte, et le disjoncteur de branchement ne saute pas.",
   q:["Que fait un délesteur ?",["Il coupe temporairement certains appareils pour ne pas dépasser l'abonnement","Il augmente la puissance","Il protège les personnes","Il recharge la voiture"],0,"Le délestage évite le déclenchement du disjoncteur de branchement."]},
  {p:"Le compteur <b>Linky</b> est communicant : il transmet la consommation à distance et permet des changements d'abonnement sans déplacement. Pour l'électricien, deux choses comptent : il a un <b>contact</b> (relais) qui se ferme aux heures creuses, utilisé pour commander le contacteur du chauffe-eau ; et une sortie <b>TIC</b> (télé-information client) qui renseigne les gestionnaires d'énergie sur la consommation en temps réel. Le <b>disjoncteur de branchement</b> reste l'appareil de coupure et de protection en tête de l'installation.",
   q:["À quoi sert le contact heures creuses du compteur ?",["À commander le contacteur du chauffe-eau","À couper tout le logement","À mesurer la terre","À recharger la voiture"],0,"Il donne l'ordre « heures creuses » au contacteur jour/nuit."]}
 ],
 retenir:["Recharge : circuit dédié, différentiel type A minimum, IRVE au-delà de 3,7 kW.","Photovoltaïque : continu → onduleur → alternatif. Le continu reste sous tension tant qu'il fait jour. Habilitation BP.","PAC : circuit dédié selon la notice. Délesteur pour rester sous l'abonnement.","Linky : contact heures creuses + sortie TIC."]
};

C.lexique.push(
 ["IRVE","Infrastructure de Recharge pour Véhicules Électriques. Qualification obligatoire pour installer une borne de plus de 3,7 kW."],
 ["Onduleur","Appareil qui transforme le courant continu (panneaux, batteries) en courant alternatif."],
 ["Autoconsommation","Consommer sur place l'électricité produite par ses propres panneaux solaires."],
 ["Linky","Compteur communicant du réseau public : index à distance, contact heures creuses, sortie TIC."]
);

C.quiz.push(
 ["energies","Quel différentiel au minimum pour une borne de recharge ?",["Type A","Type AC","300 mA","Aucun"],0,"Type A minimum, voire F ou B selon la borne."],
 ["energies","Une wallbox de 7,4 kW en monophasé tire environ…",["32 A","10 A","63 A","2 A"],0,"7 400 ÷ 230 ≈ 32 A."],
 ["energies","Pourquoi la partie continue d'une installation photovoltaïque est-elle dangereuse ?",["Elle reste sous tension tant qu'il fait jour","Elle est en 12 V","Elle n'est jamais sous tension","Elle est protégée par le différentiel"],0,"On ne peut pas éteindre les panneaux : ils produisent dès qu'il y a de la lumière."],
 ["energies","Quelle habilitation pour intervenir sur la partie photovoltaïque ?",["BP","B0","H2","BS"],0,"BP = habilitation spécifique photovoltaïque."],
 ["energies","Recharger une voiture tous les jours sur une prise ordinaire avec une rallonge…",["Risque de faire chauffer la prise et la rallonge","Est la meilleure solution","Recharge plus vite","Est obligatoire"],0,"Fort courant pendant des heures : échauffement."],
 ["energies","Que transmet la sortie TIC du compteur Linky ?",["Les informations de consommation en temps réel","Du courant pour la voiture","Le signal TV","La terre"],0,"Elle sert aux gestionnaires d'énergie."]
);

C.vf.push(
 ["Une borne de recharge doit avoir un circuit dédié.",true,"Elle consomme beaucoup pendant des heures."],
 ["On peut débrancher un connecteur de panneau solaire en charge sans risque.",false,"L'arc en courant continu ne s'éteint pas : on coupe d'abord l'onduleur puis le sectionneur DC."],
 ["Un délesteur évite de dépasser la puissance de l'abonnement.",true,"Il coupe temporairement certains appareils."]
);
