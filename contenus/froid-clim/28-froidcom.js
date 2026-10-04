/* NIVEAU 2 — Le froid commercial */
C.modules.push({id:"froidcom",n:2,i:"🧊",t:"Le froid commercial",d:"Chambres froides, meubles frigorifiques, dégivrage, sécurité",
 s:[{h:"Les chambres froides",l:["<b>Positive</b> : autour de 0 à +4 °C (produits frais).","<b>Négative</b> : −18 °C ou moins (surgelés).","Panneaux isolants, porte avec joint chauffé en négatif, groupe de condensation dehors ou en local technique."]},
    {h:"Les meubles frigorifiques",l:["Vitrines, armoires, gondoles, tables réfrigérées.","<b>Groupe logé</b> (tout intégré) ou <b>à distance</b> (centrale frigorifique).","Les rideaux d'air et les couvercles limitent les pertes."]},
    {h:"Le dégivrage",l:["L'évaporateur d'une chambre négative givre : il faut le dégivrer régulièrement.","Par <b>résistances électriques</b>, par <b>gaz chauds</b>, ou par arrêt (en positif).","Égouttage, puis redémarrage des ventilateurs en retard pour ne pas projeter d'eau."]},
    {h:"Sécurité et hygiène",l:["Dispositif d'<b>appel</b> et ouverture de la porte de l'intérieur : on ne doit jamais rester enfermé.","Enregistrement des températures (traçabilité des denrées).","Alarmes de température reportées à l'exploitant."]}],
 k:["Chambre froide","Dégivrage","Groupe de condensation","Chaîne du froid"]});

C.fiches.froidcom={
 intro:"Boucheries, supermarchés, restaurants, entrepôts : le froid commercial conserve nos aliments. Une panne un vendredi soir, et c'est un stock entier à jeter. Le technicien doit connaître les températures de conservation, le dégivrage et la sécurité des personnes dans les chambres froides.",
 s:[
  {p:"Une <b>chambre froide positive</b> conserve les produits frais (viandes, fromages, légumes), en général entre 0 et +4 °C selon les denrées. Une <b>chambre froide négative</b> conserve les surgelés à <b>−18 °C</b> ou moins. Elles sont faites de panneaux isolants (mousse entre deux tôles). Le <b>groupe de condensation</b> (compresseur + condenseur) est dehors ou dans un local technique ; l'<b>évaporateur ventilé</b> est dans la chambre, avec son détendeur.",
   fig:{type:"barres",legende:"Températures d'ambiance courantes",items:[["Chambre positive (produits frais)",4,"°C max","#3db5ff"],["Chambre négative (surgelés)",18,"°C sous zéro","#b18cff"]]},
   q:["À quelle température conserve-t-on les surgelés ?",["−18 °C ou moins","0 °C","+4 °C","−5 °C"],0,"La chaîne du froid des surgelés exige au moins −18 °C."]},
  {p:"Les <b>meubles frigorifiques</b> (vitrines, armoires, gondoles) ont soit un <b>groupe logé</b> (compresseur intégré, qui rejette sa chaleur dans le magasin), soit un raccordement à une <b>centrale frigorifique</b> à distance qui alimente tout le magasin. Les meubles ouverts perdent beaucoup de froid : rideaux d'air, couvercles et portes vitrées réduisent la consommation.",
   q:["Un meuble à « groupe logé »…",["Contient son propre compresseur","Est relié à une centrale","N'a pas de compresseur","Fonctionne sans électricité"],0,"Tout est intégré dans le meuble."]},
  {p:"L'humidité de l'air se dépose en <b>givre</b> sur l'évaporateur. En chambre positive, un simple arrêt du compresseur (ventilateurs en marche) suffit souvent. En négatif, il faut chauffer : par <b>résistances électriques</b> ou par <b>gaz chauds</b>. Le régulateur arrête le compresseur, lance le dégivrage jusqu'à une température de fin (sonde d'évaporateur) ou une durée maximale, laisse <b>égoutter</b>, puis redémarre les ventilateurs en retard. Le tuyau d'évacuation de l'eau de dégivrage est chauffé (cordon chauffant) pour ne pas geler.",
   fig:{type:"cycle",centre:"Cycle de dégivrage",etapes:[["Froid","#3db5ff"],["Dégivrage (résistances)","#ff8a3d"],["Égouttage","#7be0d0"],["Retard ventilateurs","#ffc83d"]]},
   att:"Un évaporateur pris en bloc de glace ne refroidit plus : la BP chute, la température de la chambre monte. Avant d'accuser le fluide, vérifie le dégivrage (résistance, sonde de fin, programmation, évacuation gelée).",
   q:["Pourquoi les ventilateurs redémarrent-ils en retard après un dégivrage ?",["Pour ne pas projeter l'eau restante dans la chambre","Pour économiser l'électricité","Pour faire du bruit","Sans raison"],0,"Le retard laisse l'évaporateur égoutter et refroidir."]},
  {p:"Une personne enfermée dans une chambre froide négative est en danger de mort. Les chambres froides doivent pouvoir s'ouvrir <b>de l'intérieur</b> et disposer d'un <b>dispositif d'appel</b> (alarme) ; on vérifie leur fonctionnement à chaque intervention. Côté hygiène, les températures sont <b>enregistrées</b> et les alarmes reportées : en cas de panne, l'exploitant doit pouvoir réagir avant que les denrées ne soient perdues.",
   att:"Ne jamais bloquer la poignée intérieure ni débrancher l'alarme de la chambre, même « pour la durée de l'intervention ».",
   q:["Quelle sécurité est indispensable dans une chambre froide ?",["Ouverture de l'intérieur et dispositif d'appel","Un extincteur à eau","Une prise de courant","Une fenêtre"],0,"On ne doit jamais pouvoir y rester enfermé."]}
 ],
 retenir:["Positive : 0 à +4 °C ; négative : −18 °C ou moins.","Groupe logé ou centrale à distance.","Dégivrage : résistances, gaz chauds ou arrêt ; égouttage ; retard ventilateurs ; évacuation chauffée.","Ouverture intérieure, dispositif d'appel, enregistrement des températures."]
};

C.lexique.push(
 ["Chambre froide","Local isolé maintenu à basse température : positive (0 à +4 °C) ou négative (−18 °C ou moins)."],
 ["Groupe de condensation","Ensemble compresseur + condenseur installé hors de la chambre froide."],
 ["Chaîne du froid","Maintien continu des denrées à la bonne température, de la production à la consommation."]
);

C.quiz.push(
 ["froidcom","Une chambre froide positive est en général entre…",["0 et +4 °C","−18 et −25 °C","+10 et +15 °C","−5 et −10 °C"],0,"Pour les produits frais."],
 ["froidcom","Comment dégivre-t-on souvent un évaporateur de chambre négative ?",["Par résistances électriques ou gaz chauds","En ouvrant la porte","En arrêtant seulement les ventilateurs","On ne le dégivre jamais"],0,"En négatif, l'arrêt seul ne suffit pas."],
 ["froidcom","Pourquoi chauffer le tuyau d'évacuation de l'eau de dégivrage en négatif ?",["Pour que l'eau ne gèle pas dedans","Pour chauffer la chambre","Pour économiser","Pour la décoration"],0,"Un tuyau gelé fait déborder le bac."],
 ["froidcom","Évaporateur en bloc de glace : première piste ?",["Un problème de dégivrage","Un excès de fluide","Une HP trop basse","Un compresseur neuf"],0,"Résistance, sonde de fin, programmation, évacuation."],
 ["froidcom","Un meuble relié à une centrale frigorifique est un meuble…",["À distance","À groupe logé","Sans froid","Monobloc autonome"],0,"Le compresseur est dans la centrale, ailleurs."]
);

C.vf.push(
 ["Les surgelés se conservent à −18 °C ou moins.",true,"C'est la référence de la chaîne du froid des surgelés."],
 ["On peut débrancher l'alarme de la chambre froide pendant l'intervention.",false,"Jamais : c'est une sécurité vitale."]
);
