/* NIVEAU 3 — Fluides inflammables et CO₂ */
C.modules.push({id:"inflammables",n:3,i:"🔥",t:"Fluides inflammables et CO₂",d:"R32, R290, R1234yf, R744 : précautions et particularités",
 s:[{h:"Pourquoi ces fluides ?",l:["Ils ont un <b>PRP faible</b> : la réglementation les impose de plus en plus.","R32 (A2L) dans les splits, R290 propane (A3) dans les meubles et PAC, R1234yf (A2L) en clim auto, R744 CO₂ (A1) en froid commercial."]},
    {h:"Travailler avec un fluide inflammable",l:["Outils et station <b>compatibles</b> (sans étincelle), détecteur adapté.","Zone <b>ventilée</b>, sans source d'inflammation, signalisation.","Jamais de <b>flamme</b> avant récupération complète et balayage à l'azote.","Charge limitée selon le volume du local (norme NF EN 378)."]},
    {h:"Le CO₂ (R744)",l:["Non inflammable, PRP 1, mais pressions <b>très élevées</b> (plus de 100 bar en transcritique).","Point critique à <b>31 °C</b> : au-delà, il ne se condense plus (cycle « transcritique »).","Formation spécifique et attestation de catégorie <b>B</b>."]},
    {h:"L'ammoniac (R717)",l:["Excellent fluide, PRP 0, mais <b>toxique</b> (B2L) et corrosif pour le cuivre.","Grandes installations industrielles, salles des machines dédiées.","Attestation de catégorie <b>C</b>."]}],
 k:["A2L","R290","R744","Transcritique","NF EN 378"]});

C.fiches.inflammables={
 intro:"Les fluides d'avenir ont un faible impact sur le climat, mais ils demandent de nouvelles précautions : le R32 et le R1234yf sont faiblement inflammables, le propane est très inflammable, le CO₂ fonctionne à des pressions énormes et l'ammoniac est toxique. Un technicien qui les maîtrise est recherché ; un technicien qui les sous-estime se met en danger.",
 s:[
  {p:"Le règlement F-Gas pousse vers les fluides à faible PRP. Résultat : le <b>R32</b> (PRP 675, classe A2L) équipe la plupart des splits récents ; le <b>R290</b> (propane, PRP quasi nul, classe A3) se répand dans les meubles frigorifiques à groupe logé et les PAC monobloc ; le <b>R1234yf</b> (A2L) est la référence en climatisation automobile ; le <b>R744</b> (CO₂) équipe de nombreux supermarchés.",
   fig:{type:"barres",legende:"PRP comparés (R410A, R32 : AR4 ; R290 : quasi nul)",items:[["R410A (ancien standard des splits)",2088,"","#ff8a3d"],["R32",675,"","#ffc83d"],["R290 propane",3,"","#2ed47a"],["R744 CO₂",1,"","#2ed47a"]]},
   q:["Pourquoi passe-t-on du R410A au R32 dans les splits ?",["Son PRP est environ 3 fois plus faible","Il est ininflammable","Il travaille à basse pression","Il est moins cher à jeter"],0,"675 contre 2 088."]},
  {p:"Avec un fluide inflammable, on supprime toute source d'inflammation : pas de flamme, pas de cigarette, outils et station de récupération <b>certifiés</b> pour ce fluide, détecteur de fuite adapté, zone <b>ventilée</b> et balisée. On ne brase qu'après <b>récupération complète</b>, tirage au vide et <b>balayage à l'azote</b>. La quantité de fluide admissible dans un local dépend de son volume et de son usage (norme <b>NF EN 378</b>, et normes produits) : on ne remplace pas un fluide par un autre plus inflammable sans étude.",
   fig:{type:"flux",legende:"Avant de braser sur un circuit au R290",etapes:["Ventiler, baliser, détecteur en marche","Récupérer tout le fluide (station compatible)","Tirer au vide","Balayer à l'azote","Braser sous azote, extincteur à portée"]},
   att:"Remplacer le R134a d'un meuble par du propane « parce que ça marche » est interdit : la machine n'est pas conçue pour (composants électriques, charge maximale, marquages).",
   q:["Avant de braser sur un circuit au R290, il faut…",["Récupérer, tirer au vide et balayer à l'azote","Juste arrêter la machine","Chauffer doucement","Rien de particulier"],0,"Jamais de flamme en présence de propane."]},
  {p:"Le <b>CO₂</b> (R744) n'est ni toxique aux faibles concentrations ni inflammable, et son PRP vaut 1. Mais ses pressions sont <b>très élevées</b> : plus de 30 bar à 0 °C, et souvent plus de 100 bar côté HP. Son <b>point critique</b> est à 31 °C : au-dessus, il ne peut plus se condenser. Quand il fait chaud dehors, le « condenseur » devient un <b>refroidisseur de gaz</b> : on parle de cycle <b>transcritique</b>. Il faut du matériel, une formation et une attestation spécifiques (catégorie B).",
   fig:{type:"barres",legende:"Pression relative de saturation à 0 °C (CoolProp)",items:[["R134a",1.9,"bar","#3db5ff"],["R32",7.1,"bar","#ffc83d"],["R744 (CO₂)",33.8,"bar","#ff5470"]]},
   att:"Un manifold classique ne supporte pas les pressions du CO₂ : il faut un manifold et des flexibles prévus pour ce fluide.",
   q:["Au-dessus de quelle température le CO₂ ne peut-il plus se condenser ?",["31 °C (point critique)","0 °C","100 °C","−56 °C"],0,"D'où le fonctionnement transcritique par temps chaud."]},
  {p:"L'<b>ammoniac</b> (R717) est un fluide historique de l'industrie : très performant, PRP nul, mais <b>toxique</b> (classe B2L) et incompatible avec le cuivre. On le trouve dans les grandes installations (entrepôts frigorifiques, industrie agroalimentaire, patinoires), en salle des machines dédiée, avec détection et ventilation. Intervenir dessus demande une formation spécifique et l'attestation de catégorie <b>C</b>.",
   q:["Pourquoi pas de tuyauterie en cuivre avec l'ammoniac ?",["L'ammoniac attaque le cuivre","Le cuivre est trop cher","Le cuivre est inflammable","C'est autorisé"],0,"On utilise de l'acier."]}
 ],
 retenir:["R32 et R1234yf : A2L ; R290 : A3 ; R744 : A1 mais très haute pression ; R717 : toxique.","Fluides inflammables : outils compatibles, ventilation, aucune flamme avant récupération + vide + azote.","Charge limitée selon le local (NF EN 378) ; pas de changement de fluide sans étude.","CO₂ : point critique 31 °C, transcritique, attestation B. Ammoniac : attestation C."]
};

C.lexique.push(
 ["A2L","Classe de sécurité des fluides faiblement inflammables (R32, R1234yf)."],
 ["R290","Propane : fluide naturel à PRP quasi nul, très inflammable (classe A3)."],
 ["R744","Dioxyde de carbone (CO₂) utilisé comme fluide frigorigène : PRP 1, pressions très élevées."],
 ["Transcritique","Cycle du CO₂ au-dessus de son point critique (31 °C) : il est refroidi sans se condenser."],
 ["NF EN 378","Norme de sécurité des systèmes frigorifiques : conception, charges admissibles selon les locaux."]
);

C.quiz.push(
 ["inflammables","Le R1234yf est surtout utilisé…",["En climatisation automobile","Dans les chambres froides à ammoniac","Dans les extincteurs","En chauffage au gaz"],0,"Il a remplacé le R134a dans les voitures neuves."],
 ["inflammables","Quelle catégorie d'attestation pour l'ammoniac ?",["C","B","A2","E"],0,"C = R717 ; B = CO₂."],
 ["inflammables","Quelle norme fixe les charges admissibles selon les locaux ?",["NF EN 378","NF C 15-100","NF C 18-510","ISO 9001"],0,"Sécurité des systèmes frigorifiques."],
 ["inflammables","Un manifold classique pour le R410A convient-il au CO₂ ?",["Non, il faut du matériel prévu pour ses pressions","Oui","Oui en hiver","Oui avec des gants"],0,"Le CO₂ dépasse largement les pressions des manifolds classiques."],
 ["inflammables","Quelle est la classe de sécurité du propane R290 ?",["A3","A1","B2L","A2L"],0,"Très inflammable."]
);

C.vf.push(
 ["Le CO₂ est un fluide inflammable.",false,"Il est classé A1, mais travaille à très haute pression."],
 ["On peut remplacer le R134a d'un meuble par du propane sans modification.",false,"Interdit : l'équipement doit être conçu pour un fluide A3."],
 ["L'ammoniac est toxique.",true,"Classe B2L."]
);
