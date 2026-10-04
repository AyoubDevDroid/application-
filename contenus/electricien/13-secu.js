/* NIVEAU 1 — Habilitation et consignation (NF C 18-510) */
const VIGNETTE=(ic,txt)=>"<svg viewBox='0 0 240 120'><rect x='60' y='8' width='120' height='104' rx='18' fill='var(--card)' stroke='var(--pri)' stroke-width='2.5' class='pop'/><text x='120' y='70' font-size='46' text-anchor='middle' class='pop'>"+ic+"</text><text x='120' y='100' font-size='12' font-weight='800' text-anchor='middle' fill='var(--pri)'>"+txt+"</text></svg>";

C.modules.push({id:"secu",n:1,i:"🦺",t:"Habilitation & consignation",d:"NF C 18-510, domaines de tension, consignation",
 s:[{h:"Les domaines de tension (alternatif)",l:["<b>TBT</b> : jusqu'à 50 V.","<b>BT</b> : de 50 V à 1 000 V.","<b>HTA / HTB</b> : au-delà de 1 000 V."]},
    {h:"L'habilitation électrique",l:["Obligatoire pour travailler sur ou près d'installations électriques (norme <b>NF C 18-510</b>).","<b>B0</b> : non-électricien, travaux non électriques en zone à risque.","<b>BS</b> : interventions élémentaires (remplacer un fusible, une prise à l'identique).","<b>BR</b> : interventions générales en basse tension (dépannage, raccordement).","<b>BC</b> : réaliser une consignation.","<b>B1 / B2</b> : exécutant / chargé de travaux électriques. <b>V</b> = au voisinage."]},
    {h:"La consignation",l:["1. <b>Séparer</b> l'installation de sa source.","2. <b>Condamner</b> l'organe de séparation (cadenas).","3. <b>Identifier</b> l'ouvrage sur lequel on travaille.","4. <b>Vérifier l'absence de tension</b> (VAT).","5. <b>Mettre à la terre et en court-circuit</b> si nécessaire."]},
    {h:"Voisinage et travail sous tension",l:["À moins de <b>0,30 m</b> d'une pièce nue sous tension en BT : zone de <b>voisinage renforcé</b>.","Le travail <b>sous tension</b> demande une habilitation spécifique (lettre <b>T</b>) et une formation dédiée.","Par défaut, un électricien travaille <b>hors tension</b>."]}],
 k:["Habilitation","Consignation","VAT","EPI","NF C 18-510","Condamnation"]});

C.fiches.secu={
 intro:"L'électricité ne se voit pas, ne s'entend pas et ne prévient pas. Chaque année, des électriciens sont blessés ou tués parce qu'ils pensaient qu'un circuit était coupé. La sécurité n'est pas une option : elle est encadrée par la norme NF C 18-510 et c'est la première chose qu'on vérifie à l'examen comme sur le chantier.",
 s:[
  {p:"Plus la tension est élevée, plus le danger est grand et plus les règles sont strictes. On classe donc les installations en <b>domaines de tension</b>. Dans le bâtiment, tu travailleras presque toujours en <b>BT</b> (basse tension) : le 230 V et le 400 V en font partie.",
   fig:{type:"barres",legende:"Limites hautes des domaines (en alternatif)",items:[["TBT — très basse tension",50,"V","#2ed47a"],["BT — basse tension",1000,"V","#ffc83d"]]},
   att:"« Basse tension » ne veut pas dire « sans danger » : le 230 V d'une prise peut tuer.",
   q:["Une installation en 400 V est en…",["BT","TBT","HTA","HTB"],0,"BT = de 50 V à 1 000 V en alternatif."]},
  {p:"L'<b>habilitation</b> est une autorisation donnée par l'<b>employeur</b> après une formation. Elle dit ce que tu as le droit de faire. Le code se lit comme une carte d'identité : une lettre pour le domaine de tension (<b>B</b> = basse et très basse tension, <b>H</b> = haute tension), un chiffre ou une lettre pour le type d'opération, et parfois une lettre en plus (<b>V</b> = voisinage, <b>T</b> = sous tension).",
   fig:{type:"cycle",centre:"Lire un titre d'habilitation",etapes:[["B<br>basse tension","#ffc83d"],["R, C, S, 1, 2<br>type d'opération","#3db5ff"],["V, T<br>attribut","#2ed47a"],["Délivrée par l'employeur","#b18cff"]]},
   ex:"Un plombier qui perce un mur près d'un tableau a besoin d'un <b>B0</b>. Un gardien qui remplace une prise à l'identique : <b>BS</b>. Un électricien qui dépanne : <b>BR</b>. Celui qui consigne pour une équipe : <b>BC</b>. Le chef d'équipe des travaux électriques : <b>B2</b> (ou <b>B2V</b> s'il y a du voisinage).",
   info:"L'habilitation n'est pas un diplôme : elle est valable chez un employeur donné. Un recyclage est recommandé tous les 3 ans.",
   q:["Qui délivre l'habilitation électrique ?",["L'employeur","L'État","Le distributeur d'électricité","Le centre de formation"],0,"Le centre forme, mais c'est l'employeur qui habilite."]},
  {p:"La <b>consignation</b> est la procédure qui rend une installation sûre avant d'y travailler. Les 5 étapes se font <b>toujours dans le même ordre</b>. En sauter une, c'est prendre le risque que quelqu'un remette le courant pendant que tu as les mains dans le tableau.",
   fig:{type:"etapes",vues:[
     {svg:VIGNETTE("🔌","SÉPARER"),t:"<b>Séparer</b> : ouvrir l'organe de coupure (disjoncteur, sectionneur) qui alimente l'ouvrage. Tous les conducteurs actifs, y compris le neutre."},
     {svg:VIGNETTE("🔒","CONDAMNER"),t:"<b>Condamner</b> : bloquer l'organe en position ouverte avec un cadenas personnel, et poser une pancarte « Ne pas manœuvrer »."},
     {svg:VIGNETTE("🏷️","IDENTIFIER"),t:"<b>Identifier</b> : s'assurer que l'ouvrage sur lequel on va travailler est bien celui qui vient d'être séparé (schéma, repérage)."},
     {svg:VIGNETTE("📟","VÉRIFIER (VAT)"),t:"<b>VAT</b> : tester le VAT, vérifier l'absence de tension entre tous les conducteurs, retester le VAT."},
     {svg:VIGNETTE("⏚","MALT + CC"),t:"<b>Mise à la terre et en court-circuit</b> : obligatoire s'il y a un risque de tension induite ou de réalimentation. Ensuite seulement, on travaille."}]},
   att:"Couper le disjoncteur ne suffit pas : sans <b>cadenas</b> (condamnation), quelqu'un peut le réarmer. Sans <b>VAT</b>, tu ne sais pas si tu as coupé le bon circuit.",
   q:["Quelle étape vient juste après « condamner » ?",["Identifier","Vérifier l'absence de tension","Séparer","Mettre à la terre"],0,"Séparer, condamner, identifier, VAT, MALT-CC."]},
  {p:"Certaines opérations se font près de pièces nues sous tension (un tableau ouvert à côté de celui sur lequel on travaille). En BT, à moins de <b>0,30 m</b>, on est dans la zone de <b>voisinage renforcé</b> : il faut l'habilitation avec l'attribut <b>V</b> et des protections (nappe isolante, écran). Le <b>travail sous tension</b>, lui, est une spécialité à part (attribut <b>T</b>), qui n'est pas le quotidien de l'électricien du bâtiment.",
   ex:"Tu remplaces un disjoncteur dans un tableau dont l'arrivée reste sous tension : tu poses un écran isolant sur les parties restées sous tension avant de commencer.",
   q:["En BT, la zone de voisinage renforcé commence à…",["0,30 m d'une pièce nue sous tension","3 m","10 cm du tableau fermé","1 m du compteur"],0,"0,30 m en basse tension : c'est la distance limite du voisinage renforcé."]}
 ],
 retenir:["TBT ≤ 50 V · BT de 50 à 1 000 V · HT au-delà.","L'habilitation est délivrée par l'employeur (B0, BS, BR, BC, B1, B2, + V ou T).","Consignation : séparer, condamner, identifier, VAT, mise à la terre et en court-circuit.","Par défaut, on travaille hors tension."]
};

C.lexique.push(
 ["Habilitation","Autorisation donnée par l'employeur pour travailler sur ou près d'installations électriques."],
 ["Consignation","Ensemble des étapes pour mettre une installation hors tension en toute sécurité."],
 ["Condamnation","Blocage de l'organe de coupure en position ouverte (cadenas + pancarte) pour empêcher toute remise sous tension."],
 ["VAT","Vérificateur d'Absence de Tension : appareil obligatoire avant toute intervention."],
 ["EPI","Équipements de Protection Individuelle : gants isolants, écran facial, chaussures…"],
 ["NF C 18-510","Norme qui encadre la prévention du risque électrique et l'habilitation."],
 ["Voisinage","Zone autour des pièces nues sous tension où des règles particulières s'appliquent (0,30 m en BT pour le voisinage renforcé)."],
 ["BT","Basse tension : de 50 V à 1 000 V en alternatif (230 V et 400 V en font partie)."],
 ["TBT","Très basse tension : jusqu'à 50 V en alternatif."]
);

C.quiz.push(
 ["secu","Quelle norme encadre l'habilitation électrique ?",["NF C 18-510","NF C 15-100","ISO 9001","NF EN 60204"],0,"La NF C 18-510 encadre la prévention du risque électrique."],
 ["secu","Quelle habilitation pour un dépannage en basse tension ?",["BR","B0","H0","BC"],0,"BR = interventions générales en BT."],
 ["secu","Après avoir séparé et condamné, on…",["Identifie l'ouvrage","Coupe le neutre","Retire ses gants","Remet sous tension"],0,"Ordre : séparer, condamner, identifier, VAT, MALT-CC."],
 ["secu","Le domaine BT en alternatif va de…",["50 V à 1 000 V","0 à 50 V","1 000 à 5 000 V","230 à 400 V"],0,"Basse tension : 50 V à 1 000 V en alternatif."],
 ["secu","Que veut dire EPI ?",["Équipement de Protection Individuelle","Élément de Protection Intérieure","Essai de Prise Isolée","Équipement Pour Installation"],0,"Gants isolants, écran facial, etc."],
 ["secu","Remplacer un fusible ou une prise à l'identique demande au minimum…",["BS","B0","B2V","H1"],0,"BS = intervention élémentaire en BT."],
 ["secu","Qui doit être habilité BC ?",["Celui qui réalise la consignation","Tout le personnel du chantier","Le client","Le peintre"],0,"BC = chargé de consignation."],
 ["secu","À quoi sert le cadenas dans une consignation ?",["Empêcher qu'on remette sous tension","Mesurer la tension","Identifier le circuit","Mettre à la terre"],0,"C'est la condamnation : l'organe ne peut plus être refermé."],
 ["secu","Que signifie la lettre V dans B2V ?",["Voisinage","Vérification","Ventilation","Volt"],0,"V = travaux au voisinage de pièces nues sous tension."],
 ["secu","Un peintre qui travaille dans un local électrique sans toucher aux installations doit être…",["B0","BR","BC","Aucune habilitation"],0,"B0 : non-électricien en zone à risque électrique."]
);

C.vf.push(
 ["L'habilitation B0 permet de faire du dépannage électrique.",false,"B0 = non-électricien. Le dépannage, c'est BR."],
 ["La TBT va jusqu'à 50 V en alternatif.",true,"Très Basse Tension : ≤ 50 V AC."],
 ["Couper un disjoncteur suffit pour travailler en sécurité.",false,"Il faut aussi condamner, identifier et vérifier l'absence de tension."],
 ["L'habilitation est un diplôme valable à vie.",false,"C'est une autorisation de l'employeur ; un recyclage est recommandé tous les 3 ans."],
 ["Le neutre doit aussi être séparé lors d'une consignation.",true,"On sépare tous les conducteurs actifs : phases et neutre."]
);

C.ordre.push(
 {t:"La consignation électrique",ic:"🔒",s:["Séparer","Condamner","Identifier","Vérifier l'absence de tension","Mettre à la terre et en court-circuit"]},
 {t:"Utiliser le VAT",ic:"📟",s:["Choisir un VAT adapté à la tension","Tester le VAT sur une source sous tension connue","Vérifier l'absence de tension entre tous les conducteurs","Retester le VAT sur la source connue","Commencer le travail"]}
);
