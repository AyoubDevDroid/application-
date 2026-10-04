/* NIVEAU 1 — Lire un circuit : les mesures */
C.modules.push({id:"mesures",n:1,i:"📟",t:"Lire un circuit : les mesures",d:"Table P/T, surchauffe, sous-refroidissement, écarts d'air",
 s:[{h:"La table pression-température",l:["Chaque fluide a sa table : pression de saturation ↔ température.","On lit la <b>température d'évaporation</b> au manomètre BP, la <b>température de condensation</b> au manomètre HP.","Attention aux unités : bar <b>relatifs</b> au manifold."]},
    {h:"Les 4 mesures de base",l:["Pression BP → <b>T évaporation</b>.","Pression HP → <b>T condensation</b>.","Température du tube d'aspiration → <b>surchauffe</b>.","Température de la ligne liquide → <b>sous-refroidissement</b>."]},
    {h:"Les écarts de température d'air",l:["Évaporateur de clim : l'air soufflé est souvent <b>8 à 12 K</b> plus froid que l'air repris.","Condenseur à air : condensation souvent <b>10 à 15 K</b> au-dessus de l'air extérieur.","Ce sont des ordres de grandeur : la référence reste la notice du fabricant."]},
    {h:"Les mesures électriques",l:["Intensité du compresseur à la pince, comparée à la plaque.","Tension d'alimentation (230 V ou 400 V).","Une intensité anormale est un indice précieux."]}],
 k:["Table pression-température","Surchauffe","Sous-refroidissement","Manifold"]});

C.fiches.mesures={
 intro:"Un circuit frigorifique parle à qui sait le lire. Quatre valeurs (deux pressions, deux températures) suffisent à savoir si la machine manque de fluide, en a trop, si son condenseur est sale ou si son détendeur est bloqué. Ce module t'apprend à les mesurer proprement ; le module Diagnostic t'apprendra à les interpréter.",
 s:[
  {p:"La <b>table pression-température</b> donne, pour chaque fluide, la température de saturation correspondant à une pression. Le manifold affiche des bar <b>relatifs</b> ; certaines tables sont en bar absolus : vérifie toujours. Les manomètres analogiques ont des échelles de température gravées pour quelques fluides, les manifolds électroniques font la conversion automatiquement si on choisit le bon fluide.",
   fig:{type:"barres",legende:"Pression BP (bar relatifs) pour une évaporation à 0 °C, selon le fluide (CoolProp)",items:[["R134a",1.9,"bar","#3db5ff"],["R290",3.7,"bar","#2ed47a"],["R404A (rosée)",5.0,"bar","#ffc83d"],["R410A",7.0,"bar","#ff8a3d"],["R32",7.1,"bar","#ff5470"]]},
   att:"Régler le manifold électronique sur le mauvais fluide donne des températures fausses, donc une surchauffe et un sous-refroidissement faux. Lis la plaque signalétique de la machine.",
   q:["Un manomètre BP indique 7,1 bar sur un circuit au R32. L'évaporation se fait à environ…",["0 °C","−20 °C","+20 °C","+45 °C"],0,"Table du R32 : 7,1 bar relatifs ≈ 0 °C."]},
  {p:"On mesure dans l'ordre, machine stabilisée (au moins 10 à 15 minutes de fonctionnement). Côté BP : pression → température d'évaporation, puis température du tube d'aspiration (sonde à pince bien serrée, isolée, près du compresseur ou de la sortie d'évaporateur selon ce qu'on vérifie) → <b>surchauffe</b>. Côté HP : pression → température de condensation, puis température de la ligne liquide en sortie de condenseur → <b>sous-refroidissement</b>.",
   fig:{type:"flux",legende:"Exemple sur un split au R32, air extérieur 30 °C",etapes:[["BP 8,5 bar","évaporation +5 °C"],["Aspiration +11 °C","surchauffe 6 K ✔"],["HP 26,9 bar","condensation +45 °C"],["Ligne liquide +40 °C","sous-refroidissement 5 K ✔"]]},
   q:["HP = 23,8 bar sur du R32 (≈ 40 °C). Ligne liquide à 34 °C. Sous-refroidissement ?",["6 K","74 K","34 K","16 K"],0,"40 − 34 = 6 K."]},
  {p:"Les températures d'<b>air</b> complètent le tableau. En climatisation, l'air soufflé par l'unité intérieure est en général 8 à 12 K plus froid que l'air repris. Au condenseur à air, la condensation se fait en général 10 à 15 K au-dessus de la température de l'air extérieur. Ce sont des repères : chaque fabricant donne ses valeurs dans la notice.",
   ex:"Air extérieur 30 °C et condensation à 55 °C : 25 K d'écart, c'est beaucoup. Tu regardes le condenseur : couvert de poussière et de feuilles. Le nettoyer fera baisser la HP.",
   q:["Air extérieur 25 °C, condensation à 37 °C. L'écart est…",["Normal (12 K)","Beaucoup trop grand","Négatif","Impossible"],0,"10 à 15 K est un écart courant."]},
  {p:"Les mesures électriques font partie du diagnostic : la <b>tension</b> d'alimentation (une tension trop basse fait chauffer le compresseur) et l'<b>intensité</b> du compresseur à la pince, à comparer avec la plaque signalétique. Une intensité trop forte peut signaler une HP trop haute, un compresseur qui force ou un problème électrique ; trop faible, un compresseur qui ne comprime plus ou un manque de fluide.",
   q:["Pour mesurer le courant d'un compresseur sans couper le circuit, on utilise…",["Une pince ampèremétrique","Un manifold","Un vacuomètre","Un VAT"],0,"La pince se referme autour d'un seul conducteur."]}
 ],
 retenir:["Table P/T : pression → température de saturation (attention relatif / absolu, et au bon fluide).","BP → T évap → surchauffe ; HP → T cond → sous-refroidissement.","Repères : air soufflé 8–12 K plus froid ; condensation 10–15 K au-dessus de l'air extérieur.","Tension et intensité du compresseur complètent le diagnostic."]
};

C.lexique.push(
 ["Table pression-température","Tableau qui donne, pour un fluide, la température de saturation correspondant à chaque pression."]
);

C.quiz.push(
 ["mesures","Combien de temps laisser tourner la machine avant de mesurer ?",["10 à 15 minutes, jusqu'à stabilisation","10 secondes","Pas besoin","24 heures"],0,"Les pressions et températures doivent être stables."],
 ["mesures","Le manifold électronique est réglé sur R410A alors que la machine est au R32…",["Les températures calculées sont fausses","Ça ne change rien","Les pressions sont fausses","Le manifold refuse de mesurer"],0,"Chaque fluide a sa propre table P/T."],
 ["mesures","R404A : BP 3,3 bar (rosée ≈ −10 °C), aspiration à −4 °C. Surchauffe ?",["6 K","14 K","−6 K","3,3 K"],0,"−4 − (−10) = 6 K."],
 ["mesures","L'air soufflé par une clim est en général plus froid que l'air repris de…",["8 à 12 K","1 K","30 K","50 K"],0,"C'est un ordre de grandeur courant."],
 ["mesures","Une pression lue sur une table en bar absolus vaut 9 bar. Le manifold affichera environ…",["8 bar","9 bar","10 bar","4,5 bar"],0,"Relatif ≈ absolu − 1 bar."]
);

C.vf.push(
 ["Le manifold affiche des pressions relatives.",true,"Il affiche 0 à l'air libre."],
 ["On peut mesurer la surchauffe juste après le démarrage.",false,"Il faut attendre que la machine soit stabilisée."]
);

C.ordre.push({t:"Mesurer la surchauffe",ic:"📟",s:["Laisser la machine se stabiliser","Lire la pression BP","Convertir en température d'évaporation avec la table","Mesurer la température du tube d'aspiration","Calculer : T aspiration − T évaporation"]});
