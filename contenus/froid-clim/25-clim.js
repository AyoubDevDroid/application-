/* NIVEAU 2 — La climatisation */
C.modules.push({id:"clim",n:2,i:"🌬️",t:"Installer une climatisation",d:"Split, multisplit, gainable, VRV, condensats, liaisons",
 s:[{h:"Les types de systèmes",l:["<b>Monosplit</b> : 1 unité extérieure, 1 unité intérieure.","<b>Multisplit</b> : 1 unité extérieure, plusieurs unités intérieures.","<b>Gainable</b>, <b>cassette</b>, <b>console</b> : différentes unités intérieures.","<b>DRV / VRV</b> : grands bâtiments, débit de fluide variable.","<b>Monobloc</b> : tout dans un seul appareil."]},
    {h:"Placer les unités",l:["Unité intérieure : air bien réparti, hors des sources de chaleur, accès pour l'entretien.","Unité extérieure : bien ventilée, dégagements de la notice, support stable, voisinage (bruit).","Respecter longueurs et dénivelés maximaux entre unités."]},
    {h:"Les condensats",l:["L'unité intérieure produit de l'<b>eau</b> en mode froid.","Évacuation en <b>pente</b> continue, sans contre-pente, avec siphon si raccordée aux eaux usées.","Sinon : <b>pompe de relevage</b>."]},
    {h:"Les liaisons",l:["Deux tubes isolés (liquide et gaz), un câble d'alimentation / communication, l'évacuation des condensats.","Raccords flare au couple, essai à l'azote, tirage au vide.","Ouverture des vannes de l'unité extérieure à la <b>clé hexagonale</b>."]}],
 k:["Split","Multisplit","Condensats","Pompe de relevage","DRV"]});

C.fiches.clim={
 intro:"La climatisation est devenue le premier marché du frigoriste. Un split bien installé dure quinze ans sans souci ; un split mal posé fuit, goutte, fait du bruit chez le voisin ou tombe en panne au premier été chaud. Ce module te donne les règles de pose qui font la différence.",
 s:[
  {p:"Le <b>monosplit</b> relie une unité extérieure à une unité intérieure. Le <b>multisplit</b> alimente plusieurs unités intérieures avec une seule unité extérieure. Les unités intérieures existent en version murale, <b>console</b> (au sol), <b>cassette</b> (dans le faux plafond) ou <b>gainable</b> (cachée, l'air est distribué par des gaines). Les <b>DRV / VRV</b> (débit de réfrigérant variable) équipent bureaux et hôtels. Le <b>monobloc</b> regroupe tout dans un appareil.",
   fig:{type:"cycle",centre:"Systèmes de climatisation",etapes:[["Monosplit","#3db5ff"],["Multisplit","#7be0d0"],["Gainable / cassette","#ffc83d"],["DRV / VRV","#ff8a3d"],["Monobloc","#b18cff"]]},
   q:["Une unité extérieure qui alimente trois unités intérieures, c'est un…",["Multisplit","Monosplit","Monobloc","Gainable"],0,"Multi = plusieurs unités intérieures."]},
  {p:"L'<b>unité intérieure</b> se place pour bien répartir l'air, sans souffler directement sur les personnes, loin des sources de chaleur, avec un accès pour nettoyer les filtres. L'<b>unité extérieure</b> doit pouvoir aspirer et rejeter librement son air (dégagements de la notice), reposer sur un support stable avec plots antivibratiles, et ne pas gêner le voisinage. Les longueurs de liaison et les dénivelés maximaux de la notice sont impératifs.",
   att:"Une unité extérieure coincée dans un recoin recycle son propre air chaud : la HP monte, la machine perd en puissance et finit en sécurité haute pression.",
   q:["Pourquoi respecter les dégagements autour de l'unité extérieure ?",["Pour qu'elle ne recycle pas son air chaud","Pour la décoration","Pour le vol","Ce n'est pas important"],0,"Sinon la condensation monte et la machine perd en efficacité."]},
  {p:"En mode froid, l'air se refroidit sur l'évaporateur et son humidité se condense : un split produit facilement plusieurs litres d'eau par jour. Cette eau doit s'évacuer par un tuyau en <b>pente continue</b> (sans contre-pente ni écrasement), vers l'extérieur ou vers les eaux usées avec un <b>siphon</b> (contre les odeurs). Quand la pente est impossible, une <b>pompe de relevage</b> remonte l'eau.",
   ex:"Une unité qui goutte sur le mur après un mois : le tuyau de condensats fait une contre-pente derrière le meuble, l'eau stagne et déborde du bac. On reprend la pente.",
   q:["L'eau coule de l'unité intérieure. Première vérification ?",["La pente et l'état du tuyau de condensats","La pression HP","Le câble de communication","La télécommande"],0,"Contre-pente, tuyau écrasé ou bouché, pompe de relevage en panne."]},
  {p:"Les <b>liaisons</b> comprennent deux tubes en cuivre isolés séparément (ligne liquide, petit diamètre ; ligne gaz, gros diamètre), le câble électrique d'alimentation et de communication, et l'évacuation des condensats. Après les raccords flare serrés au couple, on fait l'essai à l'azote, le tirage au vide, la charge complémentaire si nécessaire, puis on ouvre les vannes de l'unité extérieure à la <b>clé hexagonale</b> (vanne liquide puis vanne gaz).",
   q:["Comment ouvre-t-on les vannes d'une unité extérieure de split ?",["À la clé hexagonale, après le tirage au vide","Avant le tirage au vide","Avec une pince","Elles sont toujours ouvertes"],0,"On ouvre une fois le vide fait et la charge complétée."]}
 ],
 retenir:["Monosplit, multisplit, gainable, cassette, console, DRV, monobloc.","Unités bien placées : air libre, dégagements, support antivibratile, accès entretien.","Condensats : pente continue, siphon, ou pompe de relevage.","Liaisons : 2 tubes isolés + câble + condensats ; vannes ouvertes à la clé hexagonale."]
};

C.lexique.push(
 ["Split","Climatiseur en deux parties (unité extérieure et unité intérieure) reliées par des tubes de fluide."],
 ["Multisplit","Système avec une unité extérieure alimentant plusieurs unités intérieures."],
 ["Condensats","Eau produite par la condensation de l'humidité de l'air sur l'évaporateur."],
 ["Pompe de relevage","Petite pompe qui évacue les condensats quand la pente naturelle est impossible."],
 ["DRV","Débit de Réfrigérant Variable (ou VRV) : système de climatisation pour grands bâtiments."]
);

C.quiz.push(
 ["clim","Une clim cassette s'installe…",["Dans un faux plafond","Au sol","Sur le toit","Dans la gaine du tableau"],0,"Elle souffle dans quatre directions."],
 ["clim","Sur un split, le tube de plus petit diamètre est…",["La ligne liquide","La ligne gaz","L'évacuation des condensats","Le câble"],0,"Le liquide occupe moins de volume que la vapeur."],
 ["clim","Le tuyau de condensats doit…",["Avoir une pente continue","Remonter puis descendre","Être bouché au bout","Passer dans la gaine électrique"],0,"Sans contre-pente, sinon l'eau stagne."],
 ["clim","Raccordement des condensats aux eaux usées : on prévoit…",["Un siphon","Une vanne","Un filtre déshydrateur","Rien"],0,"Il empêche les odeurs de remonter."],
 ["clim","Le DRV est surtout utilisé…",["Dans les grands bâtiments tertiaires","Dans les voitures","Dans les frigos ménagers","Pour les chambres froides"],0,"Débit de réfrigérant variable, nombreuses unités intérieures."]
);

C.vf.push(
 ["Un split en mode froid produit de l'eau.",true,"Les condensats doivent être évacués."],
 ["On ouvre les vannes de l'unité extérieure avant le tirage au vide.",false,"Après : sinon on vide la précharge dans la pompe."]
);
