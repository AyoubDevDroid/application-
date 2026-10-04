/* NIVEAU 3 — Maintenance et remplacement de composants */
C.modules.push({id:"maintenance",n:3,i:"🛠️",t:"Maintenance et remplacements",d:"Entretien préventif, changement de compresseur, acidité, filtres",
 s:[{h:"L'entretien préventif",l:["Nettoyer <b>filtres à air</b>, <b>évaporateur</b>, <b>condenseur</b>, bac et évacuation des condensats.","Contrôler serrages électriques, contacteurs, ventilateurs, intensités.","Mesurer pressions, surchauffe, sous-refroidissement ; contrôle d'étanchéité si obligatoire."]},
    {h:"Changer un compresseur",l:["Chercher la <b>cause</b> de la panne avant de remplacer.","Si le moteur a grillé : <b>test d'acidité</b> de l'huile, filtre <b>anti-acide</b>, nettoyage du circuit.","Même modèle ou équivalent validé, même fluide, même huile."]},
    {h:"Changer un filtre ou un détendeur",l:["Récupérer (ou isoler la partie concernée), remplacer, brasage sous azote.","Toujours remplacer le <b>filtre déshydrateur</b> quand on ouvre le circuit.","Essai d'étanchéité, tirage au vide, charge, fiche d'intervention."]},
    {h:"Le carnet d'entretien",l:["Noter les mesures à chaque visite : on voit les dérives.","Une HP qui monte de visite en visite, une intensité qui augmente : on anticipe la panne."]}],
 k:["Entretien préventif","Test d'acidité","Filtre anti-acide","Compresseur hermétique"]});

C.fiches.maintenance={
 intro:"Une installation entretenue consomme moins, tombe moins en panne et dure plus longtemps. Et quand un composant lâche, le bon technicien ne se contente pas de le changer : il comprend pourquoi il a lâché, pour que le nouveau ne connaisse pas le même sort.",
 s:[
  {p:"L'<b>entretien préventif</b> commence par la propreté : filtres à air, batteries de l'évaporateur et du condenseur, bac et évacuation des condensats (risque de débordement et de bactéries). Puis l'électrique : serrage des bornes, état des contacts du contacteur, ventilateurs, intensités. Enfin les mesures frigorifiques, et le contrôle d'étanchéité quand il est obligatoire. Tout est noté.",
   fig:{type:"cycle",centre:"Visite d'entretien",etapes:[["Nettoyage filtres et échangeurs","#3db5ff"],["Condensats","#7be0d0"],["Électrique","#ffc83d"],["Mesures frigorifiques","#ff8a3d"],["Étanchéité + compte rendu","#2ed47a"]]},
   q:["Pourquoi nettoyer le bac à condensats ?",["Éviter débordement et développement de bactéries","Pour faire joli","Pour augmenter la HP","Ce n'est pas utile"],0,"Un bac sale déborde et sent mauvais."]},
  {p:"Un compresseur ne meurt presque jamais de vieillesse : il meurt d'un <b>retour de liquide</b>, d'un <b>manque d'huile</b>, d'une <b>surchauffe</b> (HP trop haute, manque de fluide), d'humidité ou d'un problème électrique. Avant de le remplacer, on trouve cette cause. Si le moteur a <b>grillé</b> (odeur, huile noire), l'huile est devenue <b>acide</b> : on fait un <b>test d'acidité</b>, on pose un <b>filtre anti-acide</b> (à remplacer jusqu'à ce que l'huile soit saine) et on nettoie le circuit, sinon le nouveau compresseur grillera aussi.",
   fig:{type:"flux",legende:"Remplacer un compresseur grillé",etapes:["Trouver la cause de la panne","Récupérer le fluide","Test d'acidité de l'huile","Remplacer le compresseur + filtre anti-acide","Essai azote, vide poussé, charge, contrôles répétés de l'acidité"]},
   att:"Un compresseur neuf reste bouché jusqu'à la dernière minute : son huile POE absorbe l'humidité de l'air en quelques minutes.",
   q:["L'huile d'un compresseur grillé est noire et sent le brûlé. Que fais-tu ?",["Test d'acidité, filtre anti-acide et nettoyage du circuit","Je change juste le compresseur","J'ajoute de l'huile neuve","Je dégaze"],0,"Sinon l'acide détruira le nouveau compresseur."]},
  {p:"Pour remplacer un <b>filtre</b>, un <b>détendeur</b> ou une <b>électrovanne</b>, on récupère le fluide (ou on l'isole dans une partie du circuit grâce aux vannes, par exemple en pump-down vers le réservoir), on remplace la pièce en brasant sous azote, et on change <b>toujours le filtre déshydrateur</b> quand le circuit a été ouvert. Puis essai d'étanchéité, tirage au vide, charge au poids, mesures et fiche d'intervention.",
   q:["Quand on a ouvert un circuit, on remplace toujours…",["Le filtre déshydrateur","Le compresseur","Le condenseur","Le thermostat"],0,"Il a pris l'humidité de l'air."]},
  {p:"Le <b>carnet d'entretien</b> (papier ou logiciel) garde l'historique des mesures. C'est l'outil de l'anticipation : une HP qui monte de visite en visite signale un condenseur qui s'encrasse, une intensité qui augmente un compresseur qui fatigue, une charge qu'on complète régulièrement une fuite non trouvée.",
   q:["À quoi sert de noter les mesures à chaque visite ?",["Repérer les dérives et anticiper les pannes","À rien","À facturer plus","À remplacer le contrôle d'étanchéité"],0,"L'historique révèle les tendances."]}
 ],
 retenir:["Entretien : propreté (filtres, échangeurs, condensats), électrique, mesures, étanchéité, compte rendu.","Compresseur : trouver la cause ; s'il a grillé, acidité + filtre anti-acide + nettoyage.","Circuit ouvert = filtre déshydrateur neuf, essai, vide, charge au poids, fiche.","Carnet d'entretien pour voir les dérives."]
};

C.lexique.push(
 ["Entretien préventif","Visites régulières pour nettoyer, contrôler et mesurer avant que la panne n'arrive."],
 ["Test d'acidité","Contrôle de l'huile du compresseur après une panne moteur : une huile acide détruit le compresseur neuf."],
 ["Filtre anti-acide","Filtre déshydrateur spécial qui retient les acides après un compresseur grillé."]
);

C.quiz.push(
 ["maintenance","Cause fréquente de casse d'un compresseur ?",["Retour de liquide","Un condenseur trop propre","Une surchauffe correcte","Un bon niveau d'huile"],0,"Le liquide ne se comprime pas."],
 ["maintenance","Le circuit a été ouvert pour changer un détendeur. On remplace aussi…",["Le filtre déshydrateur","Le compresseur","La vanne 4 voies","L'unité intérieure"],0,"Il a pris l'humidité de l'air."],
 ["maintenance","Une charge qu'on doit compléter à chaque visite révèle…",["Une fuite non trouvée","Un fonctionnement normal","Un compresseur neuf","Un excès d'huile"],0,"Un circuit étanche ne perd pas de fluide."],
 ["maintenance","Pourquoi laisser un compresseur neuf bouché jusqu'au dernier moment ?",["Son huile absorbe l'humidité de l'air","Pour qu'il ne tombe pas","Pour garder la garantie","Sans raison"],0,"Huile POE hygroscopique."]
);

C.vf.push(
 ["Un compresseur meurt le plus souvent de vieillesse.",false,"Il meurt d'une cause à trouver : liquide, huile, surchauffe, humidité, électricité."],
 ["Après un compresseur grillé, il faut vérifier l'acidité de l'huile.",true,"Et poser un filtre anti-acide."]
);

C.ordre.push({t:"Remplacer un compresseur grillé",ic:"🛠️",s:["Trouver la cause de la panne","Récupérer le fluide","Tester l'acidité de l'huile","Remplacer le compresseur et poser un filtre anti-acide","Essai à l'azote, tirage au vide, charge au poids","Recontrôler l'acidité après quelques jours"]});
