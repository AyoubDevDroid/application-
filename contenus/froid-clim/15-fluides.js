/* NIVEAU 1 — Les fluides frigorigènes (PRP AR4 pour les HFC, comme le prévoit le règlement F-Gas) */
C.modules.push({id:"fluides",n:1,i:"🧪",t:"Les fluides frigorigènes",d:"Familles, PRP, mélanges, classes de sécurité, huiles",
 s:[{h:"Les familles",l:["<b>CFC</b> (R12) et <b>HCFC</b> (R22) : détruisent la couche d'ozone, <b>interdits</b>.","<b>HFC</b> (R134a, R410A, R404A, R32) : sans effet sur l'ozone mais fort effet de serre, en réduction progressive.","<b>HFO</b> (R1234yf, R1234ze) : effet de serre très faible.","<b>Fluides naturels</b> : R290 (propane), R600a (isobutane), R744 (CO₂), R717 (ammoniac)."]},
    {h:"PAO et PRP",l:["<b>PAO</b> (ODP) : potentiel d'appauvrissement de la couche d'ozone.","<b>PRP</b> (GWP) : potentiel de réchauffement planétaire, CO₂ = 1.","R404A 3 922 · R410A 2 088 · R407C 1 774 · R134a 1 430 · R32 675 · R290 ≈ 3 · R744 = 1.","<b>Tonnes éq. CO₂ = charge (kg) × PRP ÷ 1 000</b>."]},
    {h:"Les mélanges",l:["Un <b>zéotrope</b> (R407C, R404A) a un <b>glissement</b> : il ne s'évapore pas à température constante.","Un mélange se charge <b>en phase liquide</b>, sinon sa composition change.","Un <b>azéotrope</b> se comporte comme un corps pur."]},
    {h:"Sécurité et huiles",l:["<b>A1</b> : non inflammable (R410A, R134a). <b>A2L</b> : faiblement inflammable (R32, R1234yf). <b>A3</b> : très inflammable (R290). <b>B2L</b> : toxique (R717).","Huiles : <b>minérale</b> (anciens CFC/HCFC), <b>POE</b> (HFC, très hygroscopique), <b>PVE</b>, <b>PAG</b> (clim auto)."]}],
 k:["HFC","HFO","PRP","PAO","Zéotrope","Tonne équivalent CO₂","Huile POE"]});

C.fiches.fluides={
 intro:"Le fluide frigorigène est le sang du circuit. Chaque fluide a ses pressions, son huile, ses règles de charge, son niveau de danger et son impact sur le climat. La réglementation pousse vers des fluides à faible PRP, souvent inflammables : un technicien d'aujourd'hui doit connaître les anciens fluides pour dépanner et les nouveaux pour installer.",
 s:[
  {p:"Les premiers fluides de synthèse, les <b>CFC</b> puis les <b>HCFC</b> (dont le célèbre R22), détruisaient la couche d'ozone : ils sont interdits. Les <b>HFC</b> les ont remplacés : sans chlore, ils n'abîment pas l'ozone, mais ce sont de puissants gaz à effet de serre. Le règlement européen F-Gas organise leur <b>réduction progressive</b> jusqu'à zéro en 2050. Les <b>HFO</b> ont un PRP très faible, et les <b>fluides naturels</b> (propane, isobutane, CO₂, ammoniac) reviennent en force.",
   fig:{type:"flux",legende:"L'histoire des fluides",etapes:[["CFC (R12)","détruisent l'ozone → interdits"],["HCFC (R22)","détruisent l'ozone → interdits"],["HFC (R410A, R32…)","fort effet de serre → réduction"],["HFO et naturels","faible PRP → l'avenir"]]},
   info:"Les désignations suivent une logique : R + chiffres. La série 400 désigne les mélanges zéotropes (R404A, R407C, R410A), la série 500 les azéotropes, la série 600 les hydrocarbures (R600a isobutane), la série 700 les fluides minéraux (R717 = ammoniac, de masse molaire 17 ; R744 = CO₂, 44).",
   q:["Le R22 est un…",["HCFC","HFC","HFO","Fluide naturel"],0,"Il détruit la couche d'ozone : interdit."]},
  {p:"Le <b>PRP</b> (potentiel de réchauffement planétaire) compare l'effet de serre d'1 kg de fluide à celui d'1 kg de CO₂ sur 100 ans. Il sert à calculer la charge en <b>tonnes équivalent CO₂</b>, qui fixe les obligations de contrôle d'étanchéité. Pour les HFC, la réglementation européenne utilise les valeurs du 4e rapport du GIEC (AR4).",
   fig:{type:"barres",legende:"PRP de quelques fluides (AR4 pour les HFC)",items:[["R404A",3922,"","#ff5470"],["R410A",2088,"","#ff8a3d"],["R407C",1774,"","#ff8a3d"],["R134a",1430,"","#ffc83d"],["R32",675,"","#3db5ff"],["R290 (propane)",3,"","#2ed47a"]]},
   ex:"Un climatiseur contient 3 kg de R410A : 3 × 2 088 ÷ 1 000 = 6,3 t éq. CO₂. Au-dessus de 5 t, il est soumis au contrôle d'étanchéité périodique.",
   q:["5 kg de R410A (PRP 2 088) représentent environ…",["10,4 t éq. CO₂","2,1 t éq. CO₂","104 t éq. CO₂","1 t éq. CO₂"],0,"5 × 2 088 ÷ 1 000 = 10,44."]},
  {p:"Beaucoup de fluides sont des <b>mélanges</b>. Un mélange <b>zéotrope</b> (R407C, R404A, R448A…) ne s'évapore pas à température constante : on parle de <b>glissement</b> de température. Pour ces fluides, la table donne une pression de <b>rosée</b> (pour la surchauffe) et de <b>bulle</b> (pour le sous-refroidissement). Surtout, on les charge toujours <b>en phase liquide</b> : en phase vapeur, les composants les plus volatils sortent en premier et la composition change.",
   att:"Après une fuite importante sur un zéotrope à fort glissement, la composition restante a changé : la bonne pratique est de récupérer la charge, tirer au vide et recharger entièrement au poids.",
   q:["Un mélange zéotrope se charge…",["En phase liquide","En phase vapeur","Peu importe","Seulement à chaud"],0,"Sinon la composition du mélange change."]},
  {p:"La norme ISO 817 classe les fluides par <b>toxicité</b> (A faible, B élevée) et <b>inflammabilité</b> (1 non inflammable, 2L faiblement, 2, 3 très inflammable). Chaque famille de fluide a aussi son <b>huile</b> : minérale ou alkylbenzène pour les anciens fluides, <b>POE</b> (polyolester) pour les HFC, PVE dans certaines clims, PAG en climatisation automobile. L'huile POE est très <b>hygroscopique</b> : elle absorbe l'humidité de l'air en quelques minutes.",
   fig:{type:"cycle",centre:"Classes de sécurité",etapes:[["A1<br>R134a, R410A, R744","#2ed47a"],["A2L<br>R32, R1234yf","#ffc83d"],["A3<br>R290, R600a","#ff5470"],["B2L<br>R717 ammoniac","#b18cff"]]},
   att:"Un bidon d'huile POE ouvert se referme aussitôt, et un compresseur neuf ne reste pas ouvert à l'air : l'huile humide forme des acides qui détruisent le moteur.",
   q:["Le R32 est classé…",["A2L","A1","A3","B2L"],0,"Faiblement inflammable."]}
 ],
 retenir:["CFC et HCFC interdits ; HFC en réduction ; HFO et naturels pour l'avenir.","t éq. CO₂ = kg × PRP ÷ 1 000 (PRP AR4 pour les HFC).","Zéotropes : glissement, chargés en phase liquide.","A1, A2L, A3, B2L ; huile POE très hygroscopique."]
};

C.lexique.push(
 ["HFC","Hydrofluorocarbures (R134a, R410A, R32…) : sans effet sur l'ozone mais à fort effet de serre."],
 ["HFO","Hydrofluoro-oléfines (R1234yf, R1234ze) : fluides à très faible PRP."],
 ["HCFC","Hydrochlorofluorocarbures (R22) : détruisent la couche d'ozone, interdits."],
 ["PRP","Potentiel de Réchauffement Planétaire (GWP), comparé au CO₂ qui vaut 1."],
 ["PAO","Potentiel d'Appauvrissement de la couche d'Ozone (ODP). Nul pour les HFC."],
 ["Zéotrope","Mélange de fluides qui a un glissement de température. Se charge en phase liquide."],
 ["Glissement","Écart de température entre le début et la fin de l'évaporation (ou de la condensation) d'un mélange zéotrope."],
 ["Tonne équivalent CO₂","Charge (kg) × PRP ÷ 1 000. Sert à fixer la fréquence des contrôles d'étanchéité."],
 ["Huile POE","Huile polyolester utilisée avec les HFC ; très hygroscopique (elle absorbe l'humidité)."]
);

C.quiz.push(
 ["fluides","Le R410A est un…",["HFC","HCFC","CFC","HFO"],0,"Mélange de HFC (R32 + R125)."],
 ["fluides","Le R744, c'est…",["Le CO₂","Le propane","L'ammoniac","Un HFO"],0,"R744 = dioxyde de carbone."],
 ["fluides","Le R290, c'est…",["Le propane","Le CO₂","L'ammoniac","Un HFC"],0,"Très inflammable : classe A3."],
 ["fluides","Le R717, c'est…",["L'ammoniac","Le propane","Le CO₂","Un CFC"],0,"Toxique : classe B2L."],
 ["fluides","Le PRP du CO₂ vaut…",["1","0","100","1 000"],0,"Le CO₂ sert de référence."],
 ["fluides","Les HFC ont un PAO…",["Nul","Très élevé","Égal à 1","Négatif"],0,"Ils ne détruisent pas l'ozone, mais réchauffent la planète."],
 ["fluides","Lequel a le PRP le plus faible ?",["R1234yf","R134a","R410A","R404A"],0,"Les HFO ont un PRP très faible."],
 ["fluides","Quelle huile pour un circuit au R410A ?",["POE (ou PVE selon le fabricant)","Huile minérale","Huile de moteur","Aucune"],0,"Les HFC ne sont pas miscibles avec l'huile minérale."],
 ["fluides","Que veut dire « hygroscopique » pour une huile POE ?",["Elle absorbe l'humidité de l'air","Elle gèle facilement","Elle est inflammable","Elle s'évapore"],0,"Bidon fermé, compresseur jamais laissé ouvert."],
 ["fluides","Quelle série de numéros désigne les mélanges zéotropes ?",["La série 400","La série 600","La série 700","La série 100"],0,"R404A, R407C, R410A…"],
 ["fluides","Pour la surchauffe d'un zéotrope, on prend la pression de…",["Rosée","Bulle","Condensation","Refoulement"],0,"Rosée = fin de l'évaporation (vapeur saturée)."]
);

C.vf.push(
 ["Le R22 ne peut plus être utilisé pour recharger une installation.",true,"Les HCFC sont interdits."],
 ["Les HFC détruisent la couche d'ozone.",false,"PAO nul, mais fort PRP."],
 ["Le R290 est très inflammable.",true,"Propane : classe A3."],
 ["Le R410A se charge en phase liquide.",true,"C'est un mélange."],
 ["Le PRP du CO₂ est égal à 1.",true,"C'est la référence."]
);
