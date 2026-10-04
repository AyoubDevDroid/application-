/* NIVEAU 2 — Conducteurs, câbles et conduits */
C.modules.push({id:"cables",n:2,i:"🧵",t:"Conducteurs, câbles et conduits",d:"H07V-U, U1000R2V, sections, couleurs, ICTA",
 s:[{h:"Fil ou câble ?",l:["Un <b>conducteur</b> (fil) = une âme en cuivre + un isolant.","Un <b>câble</b> = plusieurs conducteurs isolés + une <b>gaine</b> de protection.","Âme <b>rigide</b> (installations fixes) ou <b>souple</b> (appareils mobiles, rallonges)."]},
    {h:"Lire une désignation",l:["<b>H07V-U</b> : H = harmonisé, 07 = 450/750 V, V = isolant PVC, U = rigide un brin.","<b>-R</b> = rigide plusieurs brins, <b>-K</b> = souple pour pose fixe, <b>-F</b> = souple pour usage mobile.","<b>U1000R2V</b> : 1 000 V, isolant polyéthylène réticulé (R), gaine épaisse (2) en PVC (V)."]},
    {h:"Sections et couleurs",l:["Sections courantes : <b>1,5 / 2,5 / 6 / 10 mm²</b>.","<b>Vert/jaune</b> = terre, <b>bleu</b> = neutre, autres couleurs = phase.","Retour lampe et navettes : orange, violet, noir… jamais bleu ni vert/jaune."]},
    {h:"Les conduits",l:["<b>ICTA</b> : annelé, souple, peut être noyé dans le béton.","<b>IRL</b> : rigide lisse, en apparent.","<b>Goulotte</b> et <b>moulure</b> : en apparent, en rénovation.","Remplissage maxi : les fils occupent au plus <b>1/3</b> de la section du conduit."]}],
 k:["Conducteur","Câble","H07V-U","U1000R2V","ICTA","Section"]});

C.fiches.cables={
 intro:"Le câble est la colonne vertébrale de l'installation. Un mauvais choix (section trop petite, câble non adapté à l'extérieur, conduit trop rempli) ne se voit pas le jour de la pose, mais chauffe, vieillit et finit par provoquer une panne ou un incendie. Savoir lire une désignation, c'est savoir ce qu'on a dans les mains.",
 s:[
  {p:"Un <b>conducteur</b> (ou « fil ») est une âme en cuivre recouverte d'un isolant. Il doit être protégé mécaniquement : on le tire dans un <b>conduit</b> ou une goulotte. Un <b>câble</b> regroupe plusieurs conducteurs dans une <b>gaine</b> : il peut être posé directement (agrafé, sur chemin de câbles, dans un vide de cloison). L'âme peut être <b>rigide</b> (un ou quelques gros brins) ou <b>souple</b> (beaucoup de brins fins).",
   fig:{type:"svg",legende:"Un câble 3G2,5 : 3 conducteurs (dont la terre) de 2,5 mm² sous une gaine",svg:"<svg viewBox='0 0 260 110'><rect x='20' y='35' width='150' height='40' rx='20' fill='#ddd'/><text x='95' y='60' text-anchor='middle' font-size='11' font-weight='800' fill='#10142a'>gaine</text><g class='appear'><rect x='150' y='38' width='70' height='10' rx='5' fill='#8d5524'/><rect x='150' y='50' width='80' height='10' rx='5' fill='#1e88e5'/><rect x='150' y='62' width='60' height='10' rx='5' fill='#2e9d3a'/><rect x='150' y='62' width='60' height='10' rx='5' fill='#f2d10f' opacity='.55'/></g><g class='draw' stroke='#d08a3b' stroke-width='5' stroke-linecap='round'><path d='M220 43H245M230 55H252M210 67H240'/></g><text x='130' y='100' text-anchor='middle' font-size='11' fill='var(--mut)' font-weight='700'>phase · neutre · terre · âme en cuivre</text></svg>"},
   q:["Quelle est la différence entre un fil et un câble ?",["Le câble a une gaine qui regroupe plusieurs conducteurs","Le fil est plus gros","Le câble n'a pas de cuivre","Aucune"],0,"Le câble = plusieurs conducteurs isolés + une gaine de protection."]},
  {p:"La désignation est un code. Pour les fils harmonisés européens : <b>H07V-U</b>. H = norme harmonisée ; 07 = tension 450/750 V ; V = isolant en PVC ; la lettre après le tiret donne l'âme : <b>U</b> rigide un brin, <b>R</b> rigide câblée, <b>K</b> souple pour pose fixe, <b>F</b> souple pour usage mobile. Pour les câbles français : <b>U1000R2V</b> = câble pour 1 000 V, isolant en polyéthylène réticulé, gaine épaisse en PVC. On l'utilise en apparent, sur chemin de câbles ou enterré sous fourreau.",
   fig:{type:"flux",legende:"Lire « H07V-U »",etapes:[["H","harmonisé (Europe)"],["07","450/750 V"],["V","isolant PVC"],["-U","rigide un seul brin"]]},
   ex:"Pour tirer des fils dans un conduit ICTA encastré : H07V-U (ou H07V-R pour les sections plus grosses). Pour alimenter un abri de jardin sous fourreau enterré : U1000R2V. Pour une rallonge de chantier : H07RN-F (souple, caoutchouc, résistant).",
   q:["Que signifie la lettre K dans H07V-K ?",["Âme souple pour pose fixe","Âme rigide un brin","Isolant caoutchouc","Câble enterré"],0,"K = souple, pour les installations fixes (tableaux, goulottes)."]},
  {p:"La <b>section</b> (en mm²) est la surface du cuivre : plus elle est grande, plus le fil peut transporter de courant sans chauffer. En logement : <b>1,5 mm²</b> pour l'éclairage, <b>2,5 mm²</b> pour les prises et la plupart des circuits spécialisés, <b>6 mm²</b> pour la plaque de cuisson. Les <b>couleurs</b> sont obligatoires : vert/jaune réservé à la terre, bleu au neutre.",
   fig:{type:"barres",legende:"Sections courantes en logement",items:[["Éclairage, volets",1.5,"mm²"],["Prises, lave-linge, four",2.5,"mm²"],["Plaque de cuisson (mono)",6,"mm²"],["Alimentation du tableau (selon puissance)",10,"mm²"]]},
   att:"On ne recolore jamais un fil vert/jaune pour en faire une phase, et on n'utilise jamais un bleu comme retour lampe : le prochain électricien se fierait aux couleurs et pourrait s'électriser.",
   q:["Quelle couleur ne doit jamais être utilisée pour une navette de va-et-vient ?",["Bleu","Orange","Violet","Noir"],0,"Le bleu est réservé au neutre, le vert/jaune à la terre."]},
  {p:"Le conduit protège les fils et permet de les remplacer plus tard. L'<b>ICTA</b> (annelé, souvent gris) se pose dans les cloisons et peut être <b>noyé dans le béton</b>. L'<b>IRL</b> (rigide lisse) se pose en <b>apparent</b>, avec des colliers. En rénovation, on utilise des <b>moulures</b> et des <b>goulottes</b>. Règle de remplissage : la somme des sections des fils (isolant compris) ne doit pas dépasser environ <b>1/3</b> de la section intérieure du conduit, sinon on ne peut plus tirer ni remplacer les fils.",
   ex:"Dans un conduit ICTA de 20 mm, on passe sans problème 3 fils de 2,5 mm² (phase, neutre, terre). Si on veut y ajouter un autre circuit, on prend un 25 mm ou un second conduit.",
   info:"On tire les fils dans un conduit après la pose du conduit, avec un tire-fil : c'est ce qui permet, 20 ans plus tard, de remplacer un fil abîmé sans casser le mur.",
   q:["Quel conduit peut être noyé dans le béton ?",["L'ICTA","L'IRL","La moulure","La goulotte"],0,"L'ICTA est conçu pour être encastré et noyé dans le béton."]}
 ],
 retenir:["Fil = conducteur isolé (dans un conduit) ; câble = conducteurs + gaine.","H07V-U : harmonisé, 450/750 V, PVC, rigide un brin. U1000R2V : câble 1 000 V à gaine.","1,5 mm² éclairage · 2,5 mm² prises · 6 mm² cuisson.","Vert/jaune = terre, bleu = neutre, jamais autre chose.","ICTA encastré/béton, IRL apparent, remplissage ≤ 1/3."]
};

C.lexique.push(
 ["Conducteur","Fil électrique : une âme en cuivre (ou aluminium) recouverte d'un isolant."],
 ["Câble","Ensemble de conducteurs isolés réunis sous une gaine de protection."],
 ["H07V-U","Fil rigide un brin, isolant PVC, 450/750 V, harmonisé : le fil classique tiré dans les conduits."],
 ["U1000R2V","Câble rigide 1 000 V à gaine PVC épaisse, pour pose apparente, sur chemin de câbles ou enterrée sous fourreau."],
 ["H07RN-F","Câble souple à gaine caoutchouc, résistant, pour rallonges et appareils mobiles."],
 ["ICTA","Conduit Isolant Cintrable Transversalement élastique Annelé : se pose encastré, peut être noyé dans le béton."],
 ["IRL","Conduit Isolant Rigide Lisse : pour les poses en apparent."],
 ["Section","Surface du cuivre d'un conducteur, en mm². Plus elle est grande, plus le courant admissible est élevé."],
 ["Goulotte","Profilé en plastique avec couvercle, fixé au mur, pour faire passer des câbles en apparent."]
);

C.quiz.push(
 ["cables","Dans H07V-U, que signifie « 07 » ?",["Tension 450/750 V","7 brins","7 mm²","Fabriqué en 2007"],0,"07 = tension nominale 450/750 V."],
 ["cables","Quel câble pour une liaison enterrée sous fourreau vers un abri de jardin ?",["U1000R2V","H07V-U","H05VV-F","Câble téléphone"],0,"Le U1000R2V, à gaine épaisse, peut être enterré sous fourreau."],
 ["cables","Quel conduit pose-t-on en apparent sur un mur ?",["IRL","ICTA noyé","Aucun","Fourreau enterré"],0,"L'IRL (rigide lisse) se fixe en apparent avec des colliers."],
 ["cables","Dans un conduit, les fils occupent au maximum environ…",["1/3 de la section","Toute la section","La moitié","10 %"],0,"Au-delà d'un tiers, les fils se tirent mal et chauffent."],
 ["cables","Que désigne « 3G2,5 » sur un câble ?",["3 conducteurs de 2,5 mm² dont un vert/jaune","3 câbles de 2,5 m","2,5 conducteurs de 3 mm²","Un câble de 3 kV"],0,"3 conducteurs, G = avec terre vert/jaune, 2,5 mm² chacun."],
 ["cables","Quelle section pour un circuit d'éclairage ?",["1,5 mm²","2,5 mm²","6 mm²","0,75 mm²"],0,"1,5 mm² protégé en 16 A (disjoncteur)."],
 ["cables","Pour une rallonge de chantier, on choisit…",["Un câble souple H07RN-F","Du fil rigide H07V-U","Un U1000R2V","Du fil de terre"],0,"Souple, résistant, gaine caoutchouc : H07RN-F."],
 ["cables","Le fil vert/jaune est…",["La terre","Le neutre","Une phase","Au choix"],0,"Vert/jaune = terre, uniquement."]
);

C.vf.push(
 ["Le fil vert/jaune peut servir de phase si on manque de fil.",false,"Jamais : vert/jaune = terre uniquement."],
 ["Le neutre est bleu.",true,"Toujours bleu."],
 ["Un câble H07V-U se pose directement agrafé au mur, sans conduit.",false,"C'est un fil sans gaine : il doit être protégé dans un conduit ou une goulotte."],
 ["Un conduit ICTA peut être noyé dans le béton.",true,"C'est même son usage principal."]
);
