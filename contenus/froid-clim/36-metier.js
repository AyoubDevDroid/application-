/* NIVEAU 3 — Efficacité énergétique et relation client */
C.modules.push({id:"metier",n:3,i:"👷",t:"Économies d'énergie et relation client",d:"Réglages, condensation basse, conseils, compte rendu",
 s:[{h:"Une machine efficace",l:["Plus l'écart entre <b>évaporation</b> et <b>condensation</b> est petit, moins le compresseur consomme.","Échangeurs propres, bonne charge, bonne surchauffe.","Ne pas régler une consigne plus froide que nécessaire."]},
    {h:"Les gestes qui économisent",l:["Portes de chambres froides fermées, joints en bon état, rideaux et couvercles sur les meubles.","Récupération de chaleur (eau chaude) sur les grosses installations.","Compresseurs à vitesse variable, régulation bien programmée."]},
    {h:"La relation client",l:["Expliquer ce qu'on a trouvé et fait, en mots simples.","Conseiller : entretien régulier, réglages, renouvellement d'un équipement ancien.","Laisser un chantier propre et un compte rendu écrit."]}],
 k:["Efficacité énergétique","Récupération de chaleur"]});

C.fiches.metier={
 intro:"Le froid et la climatisation consomment beaucoup d'électricité. Le technicien qui sait faire baisser la facture de son client, tout en assurant la conservation des denrées ou le confort, apporte une vraie valeur. Et un client bien informé fait confiance et rappelle.",
 s:[
  {p:"Le compresseur travaille d'autant plus que l'écart est grand entre la pression d'évaporation et la pression de condensation. Tout ce qui fait <b>baisser la condensation</b> (condenseur propre, bien ventilé, à l'ombre) ou <b>monter l'évaporation</b> (évaporateur propre, dégivré, bonne charge, consigne pas plus basse que nécessaire) réduit la consommation.",
   fig:{type:"flux",legende:"Ce qui fait baisser la consommation",etapes:["Condenseur propre et bien ventilé → condensation plus basse","Évaporateur propre et dégivré → évaporation plus haute","Bonne charge, bonne surchauffe","Écart plus faible → le compresseur consomme moins"]},
   q:["Pour qu'une machine consomme moins, on cherche…",["Un écart plus faible entre évaporation et condensation","Une condensation plus haute","Une évaporation plus basse","Un condenseur couvert"],0,"Moins d'écart, moins de travail pour le compresseur."]},
  {p:"Dans les commerces, les plus grosses économies viennent souvent de gestes simples : <b>fermer</b> les portes de chambres froides, changer les <b>joints</b> abîmés, mettre des <b>couvercles</b> ou des portes vitrées sur les meubles, bien programmer les <b>dégivrages</b>. Sur les grosses installations, la <b>récupération de chaleur</b> du condenseur peut produire l'eau chaude sanitaire gratuitement.",
   ex:"Un restaurant laisse la porte de sa chambre froide ouverte pendant tout le service : l'évaporateur givre en une heure, le compresseur tourne sans arrêt. Un ferme-porte et un rideau à lanières règlent le problème.",
   q:["Une chambre froide dont le joint de porte est abîmé…",["Consomme plus et givre davantage","Consomme moins","N'est pas concernée","Refroidit mieux"],0,"L'air chaud et humide entre."]},
  {p:"À la fin de l'intervention, on <b>explique</b> au client ce qu'on a trouvé, ce qu'on a fait, et ce qui reste à surveiller. On donne des <b>conseils</b> (entretien régulier, nettoyage des filtres, réglages), on laisse un <b>compte rendu écrit</b> et la fiche d'intervention, et un chantier <b>propre</b>. Si un travail non prévu est nécessaire, on le fait valider avant.",
   q:["Un travail non prévu est nécessaire. Tu…",["Le fais valider par le client avant","Le fais sans prévenir","Pars sans rien dire","Le factures sans explication"],0,"Le client doit accepter les travaux supplémentaires."]}
 ],
 retenir:["Petit écart évaporation / condensation = faible consommation.","Échangeurs propres, bonne charge, consignes justes, portes et joints en bon état.","Expliquer, conseiller, compte rendu écrit, chantier propre."]
};

C.lexique.push(
 ["Efficacité énergétique","Capacité d'une installation à produire le froid ou la chaleur demandés avec le moins d'électricité possible."],
 ["Récupération de chaleur","Utilisation de la chaleur rejetée au condenseur (par exemple pour produire de l'eau chaude)."]
);

C.quiz.push(
 ["metier","Un condenseur à l'ombre et propre…",["Fait baisser la condensation et la consommation","Fait monter la HP","N'a aucun effet","Fait givrer l'évaporateur"],0,"Il évacue mieux la chaleur."],
 ["metier","D'où peut venir l'eau chaude gratuite d'un supermarché ?",["De la récupération de chaleur sur le condenseur","Du dégivrage","De l'évaporateur","Du filtre déshydrateur"],0,"La chaleur rejetée est valorisée."]
);

C.vf.push(
 ["Régler une chambre froide plus froid que nécessaire augmente la consommation.",true,"L'évaporation se fait plus bas, l'écart augmente."]
);
