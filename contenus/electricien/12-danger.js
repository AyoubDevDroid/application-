/* NIVEAU 1 — Le danger électrique */
C.modules.push({id:"danger",n:1,i:"☠️",t:"Le danger électrique",d:"Électrisation, effets sur le corps, premiers secours",
 s:[{h:"Électrisation et électrocution",l:["<b>Électrisation</b> : le courant traverse le corps (brûlure, choc, blessure).","<b>Électrocution</b> : électrisation qui entraîne la <b>mort</b>.","Le danger vient du <b>courant</b> qui traverse le corps, poussé par la tension."]},
    {h:"Les effets selon le courant",l:["<b>0,5 mA</b> : seuil de perception (picotement).","<b>10 mA</b> : contraction, on ne peut plus lâcher.","<b>30 mA</b> : paralysie respiratoire.","<b>75 mA</b> : fibrillation du cœur.","<b>1 A</b> : arrêt du cœur."]},
    {h:"Contact direct, contact indirect",l:["<b>Contact direct</b> : on touche une partie normalement sous tension (fil dénudé, borne).","<b>Contact indirect</b> : on touche une masse mise accidentellement sous tension (carcasse d'appareil en défaut).","Autre danger : l'<b>arc électrique</b> (court-circuit) qui brûle et éblouit."]},
    {h:"La tension limite de sécurité",l:["<b>50 V</b> en local sec, <b>25 V</b> en local mouillé, <b>12 V</b> corps immergé (en alternatif).","Au-delà, il faut une protection contre les contacts."]},
    {h:"Porter secours",l:["<b>Ne jamais toucher</b> la victime tant qu'elle est en contact.","<b>Couper le courant</b> (protéger).","<b>Alerter</b> : 15 (SAMU), 18 (pompiers) ou 112.","<b>Secourir</b> : PLS si elle respire, massage cardiaque + défibrillateur sinon."]}],
 k:["Électrisation","Électrocution","Contact direct","Contact indirect","Tension limite de sécurité"]});

C.fiches.danger={
 intro:"Ce n'est pas la tension qui tue directement, c'est le courant qui traverse le corps. Et il en faut très peu : quelques dizaines de milliampères, soit 1 000 fois moins que ce que consomme un radiateur. Comprendre comment on se fait électriser, c'est comprendre pourquoi chaque règle de sécurité existe.",
 s:[
  {p:"Le corps humain conduit le courant, comme un fil… mais mal. Sa résistance varie selon l'état de la peau : environ <b>1 000 à 2 000 Ω</b> peau sèche, beaucoup moins peau mouillée. Avec la loi d'Ohm, on comprend vite le danger : 230 V ÷ 1 000 Ω = <b>230 mA</b>. C'est mortel.",
   fig:{type:"flux",legende:"Une main sur une phase, les pieds au sol : le courant traverse le cœur.",etapes:[["Tension touchée","230 V"],["Résistance du corps (peau sèche)","≈ 1 000 Ω"],["I = U ÷ R","230 ÷ 1 000"],["Courant dans le corps","230 mA → mortel"]]},
   att:"Peau mouillée, pieds nus, sol humide : la résistance du corps s'effondre et le courant augmente. C'est pourquoi la salle de bain a des règles spéciales.",
   q:["Qu'est-ce qui rend le contact électrique dangereux ?",["Le courant qui traverse le corps","La couleur du fil","La longueur du câble","Le bruit du tableau"],0,"C'est le courant (en mA) qui traverse le corps qui provoque les lésions. La tension est ce qui le pousse."]},
  {p:"Les seuils ci-dessous sont des ordres de grandeur (norme CEI 60479) : les effets dépendent de l'<b>intensité</b>, de la <b>durée</b> et du <b>trajet</b> du courant dans le corps. Un trajet main-main ou main-pieds passe par le cœur : c'est le plus dangereux. Plus le contact dure, plus le risque de fibrillation augmente. C'est pour ça que le différentiel 30 mA coupe en quelques dizaines de millisecondes.",
   fig:{type:"barres",legende:"Seuils d'effet du courant alternatif sur le corps (ordres de grandeur)",items:[["Perception (picotement)",0.5,"mA","#2ed47a"],["Non-lâcher (contraction)",10,"mA","#ffc83d"],["Paralysie respiratoire",30,"mA","#ff8a3d"],["Fibrillation du cœur",75,"mA","#ff5470"]]},
   info:"Le seuil de 30 mA n'est pas choisi au hasard : c'est la sensibilité des différentiels qui protègent les personnes. Ils coupent avant que la respiration ne soit bloquée.",
   q:["À partir de quel courant ne peut-on plus lâcher un conducteur ?",["Environ 10 mA","Environ 0,5 mA","Environ 1 A","Environ 10 A"],0,"Vers 10 mA, les muscles se contractent : la main se referme sur le conducteur."]},
  {p:"On distingue deux façons d'être électrisé. Le <b>contact direct</b>, c'est toucher une pièce faite pour être sous tension : un fil dénudé, une borne de tableau. On s'en protège par l'isolation, les capots, l'éloignement. Le <b>contact indirect</b>, c'est toucher une <b>masse</b> (la carcasse métallique d'un appareil) qui est passée sous tension à cause d'un défaut. On s'en protège par la <b>terre</b> associée au <b>différentiel</b>.",
   fig:{type:"cycle",centre:"Deux types de contact",etapes:[["Contact direct<br>borne, fil dénudé","#ff5470"],["Protection : isolation, capots, consignation","#ffc83d"],["Contact indirect<br>carcasse en défaut","#ff8a3d"],["Protection : terre + différentiel 30 mA","#2ed47a"]]},
   ex:"Un fil de phase abîmé touche l'intérieur métallique d'un lave-linge. Grâce au fil de terre, le courant de défaut part à la terre et le différentiel coupe. Sans terre, la carcasse reste sous tension… jusqu'à ce que quelqu'un la touche.",
   q:["Toucher la carcasse d'un frigo en défaut, c'est un…",["Contact indirect","Contact direct","Court-circuit","Arc électrique"],0,"La carcasse n'est pas faite pour être sous tension : c'est un contact indirect."]},
  {p:"La <b>tension limite conventionnelle de sécurité (UL)</b> est la tension qu'on peut toucher sans danger dans des conditions données : <b>50 V</b> en alternatif dans un local sec, <b>25 V</b> dans un local mouillé, et <b>12 V</b> si le corps est immergé. Au-delà, il faut une protection.",
   fig:{type:"barres",legende:"Tension limite de sécurité en alternatif (UL)",items:[["Local sec",50,"V","#2ed47a"],["Local mouillé",25,"V","#ffc83d"],["Corps immergé (baignoire, piscine)",12,"V","#3db5ff"]]},
   q:["Dans une baignoire, le matériel autorisé dans l'eau fonctionne en…",["12 V maximum (TBTS)","50 V","230 V avec différentiel","400 V"],0,"Corps immergé : 12 V alternatif maximum, en très basse tension de sécurité."]},
  {p:"Face à une victime, le premier réflexe est de <b>se protéger</b> : on ne touche pas une personne encore en contact avec le courant, sinon on devient la deuxième victime. On coupe le courant (disjoncteur, prise, arrêt d'urgence). Ensuite seulement on <b>alerte</b> et on <b>secourt</b>. Toute personne électrisée doit voir un médecin, même si elle se sent bien : des troubles du rythme cardiaque peuvent apparaître plus tard.",
   fig:{type:"flux",legende:"Protéger, alerter, secourir",etapes:["1. Ne pas toucher la victime","2. Couper le courant","3. Alerter : 15, 18 ou 112","4. Secourir : PLS ou massage + défibrillateur","5. Surveiller jusqu'aux secours"]},
   att:"Une brûlure électrique est souvent plus grave qu'elle n'en a l'air : le courant brûle à l'intérieur, sur tout son trajet. Toujours un avis médical.",
   q:["Un collègue reste « collé » à un câble. Ton premier geste ?",["Couper le courant","Le tirer par le bras","Lui jeter de l'eau","Appeler les secours en le tenant"],0,"On coupe d'abord : toucher la victime, c'est se faire électriser à son tour."]}
 ],
 retenir:["C'est le courant qui tue : 30 mA bloquent la respiration, 75 mA font fibriller le cœur.","Contact direct : on s'en protège par l'isolation. Contact indirect : par la terre + le différentiel 30 mA.","UL : 50 V local sec, 25 V local mouillé, 12 V immergé.","Secours : ne pas toucher, couper, alerter, secourir."]
};

C.lexique.push(
 ["Électrisation","Passage du courant électrique dans le corps, avec des blessures plus ou moins graves."],
 ["Électrocution","Électrisation qui entraîne la mort."],
 ["Contact direct","Contact avec une partie normalement sous tension (fil dénudé, borne)."],
 ["Contact indirect","Contact avec une masse mise accidentellement sous tension par un défaut."],
 ["Masse","Partie métallique d'un appareil, normalement hors tension, qui peut le devenir en cas de défaut."],
 ["Tension limite de sécurité","Tension UL qu'on peut toucher sans danger : 50 V (local sec), 25 V (mouillé), 12 V (immergé), en alternatif."],
 ["Arc électrique","Décharge lumineuse très chaude (plusieurs milliers de degrés) lors d'un court-circuit ou d'une ouverture en charge."],
 ["Fibrillation","Contractions désordonnées du cœur, qui ne pompe plus le sang. Mortelle sans défibrillateur."]
);

C.quiz.push(
 ["danger","Quelle est la différence entre électrisation et électrocution ?",["L'électrocution entraîne la mort","Il n'y en a pas","L'électrisation est plus grave","L'électrocution ne concerne que la haute tension"],0,"Électrisation = passage du courant ; électrocution = électrisation mortelle."],
 ["danger","Quel courant provoque la paralysie respiratoire ?",["Environ 30 mA","Environ 0,5 mA","Environ 10 A","Environ 1 mA"],0,"Vers 30 mA, la respiration peut se bloquer : d'où les différentiels 30 mA."],
 ["danger","Quel courant provoque la fibrillation du cœur ?",["Environ 75 mA","Environ 5 mA","Environ 10 mA","Environ 10 A"],0,"Vers 75 mA, le cœur peut fibriller : il ne pompe plus le sang."],
 ["danger","La tension limite de sécurité dans un local sec est…",["50 V","25 V","12 V","230 V"],0,"UL = 50 V en alternatif dans un local sec."],
 ["danger","La tension limite de sécurité dans un local mouillé est…",["25 V","50 V","12 V","120 V"],0,"Dans un local mouillé, la résistance du corps baisse : UL tombe à 25 V."],
 ["danger","Un fil dénudé touché par la main, c'est…",["Un contact direct","Un contact indirect","Une surcharge","Une surtension"],0,"Toucher une partie normalement sous tension = contact direct."],
 ["danger","Contre les contacts indirects, on se protège avec…",["La terre et un différentiel","Un fusible plus gros","Des fils plus longs","Un variateur"],0,"La terre évacue le défaut, le différentiel coupe."],
 ["danger","Pourquoi faut-il voir un médecin après une électrisation, même légère ?",["Des troubles cardiaques peuvent apparaître plus tard","Pour l'assurance seulement","Ce n'est pas utile","Pour mesurer sa tension"],0,"Le courant peut perturber le rythme cardiaque et brûler en profondeur."],
 ["danger","Quel numéro appeler en Europe pour les urgences ?",["112","17","3615","118"],0,"Le 112 fonctionne dans toute l'Europe ; en France, aussi le 15 (SAMU) et le 18 (pompiers)."],
 ["danger","Le trajet du courant le plus dangereux passe par…",["Le cœur (main-main, main-pieds)","Un seul doigt","Les cheveux","Les vêtements"],0,"Un trajet qui traverse la poitrine passe par le cœur."]
);

C.vf.push(
 ["On peut toucher une victime électrisée si on porte des gants de jardinage.",false,"On coupe d'abord le courant. Des gants de jardinage ne sont pas isolants."],
 ["Le 230 V d'une prise peut tuer.",true,"230 V ÷ 1 000 Ω ≈ 230 mA : largement au-dessus du seuil de fibrillation."],
 ["Une peau mouillée diminue la résistance du corps.",true,"Le courant passe plus facilement : le danger augmente."],
 ["La brûlure électrique est toujours superficielle.",false,"Elle peut être profonde, sur tout le trajet du courant."],
 ["Le danger électrique commence à partir de 1 000 V.",false,"Le danger est réel dès 50 V en local sec, et moins en milieu humide."]
);
