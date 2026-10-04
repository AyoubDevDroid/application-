/* NIVEAU 1 — L'outillage du frigoriste */
C.modules.push({id:"outils",n:1,i:"🧰",t:"L'outillage du frigoriste",d:"Manifold, pompe à vide, station de récupération, outils du tube",
 s:[{h:"Mesurer",l:["<b>Manifold</b> (analogique ou électronique) : manomètre BP bleu, HP rouge, flexible jaune de service.","<b>Thermomètres à pince</b> pour la surchauffe et le sous-refroidissement.","<b>Vacuomètre</b> pour mesurer le vide en pression absolue."]},
    {h:"Vider, récupérer, charger",l:["<b>Pompe à vide</b> (bi-étagée) pour enlever l'air et l'humidité.","<b>Station de récupération</b> + <b>bouteille de récupération</b> pour retirer le fluide.","<b>Balance</b> : on charge et on récupère toujours <b>au poids</b>."]},
    {h:"Chercher les fuites",l:["<b>Détecteur électronique</b> adapté au fluide.","<b>Produit moussant</b> pour localiser précisément.","<b>Azote déshydraté</b> + détendeur pour la mise sous pression."]},
    {h:"Travailler le tube",l:["<b>Coupe-tube</b>, <b>ébavureur</b>, <b>cintreuse</b>.","<b>Évaseur (dudgeonnière)</b> et <b>clé dynamométrique</b> pour les raccords flare.","<b>Chalumeau</b> et <b>brasure</b> à l'argent, avec balayage d'azote."]}],
 k:["Manifold","Pompe à vide","Station de récupération","Vacuomètre","Dudgeon"]});

C.fiches.outils={
 intro:"Le frigoriste travaille sur un circuit fermé qu'il ne voit pas : ses outils sont ses yeux. Un manifold mal purgé, un flexible poreux, une pompe à vide dont l'huile est usée, et c'est de l'air, de l'humidité ou une fuite introduits dans le circuit. Bien connaître son matériel, c'est déjà éviter la moitié des pannes.",
 s:[
  {p:"Le <b>manifold</b> est l'outil central : un manomètre <b>bleu</b> pour la BP, un <b>rouge</b> pour la HP, et une voie centrale (flexible <b>jaune</b>) vers la pompe à vide, la bouteille ou la station. Les manomètres analogiques ont des échelles de température pour plusieurs fluides ; les manifolds <b>électroniques</b> calculent directement la surchauffe et le sous-refroidissement avec des sondes de température à pince.",
   fig:{type:"svg",legende:"Manifold : BP bleu, HP rouge, voie centrale jaune",svg:"<svg viewBox='0 0 260 130'><rect x='60' y='60' width='140' height='26' rx='8' fill='#c7ccd9'/><circle cx='85' cy='42' r='30' fill='var(--card)' stroke='#3db5ff' stroke-width='5' class='pop'/><circle cx='175' cy='42' r='30' fill='var(--card)' stroke='#ff5470' stroke-width='5' class='pop'/><text x='85' y='47' text-anchor='middle' font-size='14' font-weight='900' fill='#3db5ff'>BP</text><text x='175' y='47' text-anchor='middle' font-size='14' font-weight='900' fill='#ff5470'>HP</text><path d='M80 86 Q60 120 20 122' stroke='#3db5ff' stroke-width='6' fill='none' class='draw'/><path d='M130 86 V125' stroke='#ffc83d' stroke-width='6' class='draw'/><path d='M180 86 Q200 120 240 122' stroke='#ff5470' stroke-width='6' fill='none' class='draw'/></svg>"},
   att:"Les flexibles se purgent avant raccordement (ou on utilise des flexibles à vanne d'arrêt) : sinon on envoie l'air du flexible dans le circuit.",
   q:["Quelle est la couleur du flexible de service central ?",["Jaune","Bleu","Rouge","Vert"],0,"Bleu = BP, rouge = HP, jaune = service (vide, charge, récupération)."]},
  {p:"La <b>pompe à vide</b> (de préférence bi-étagée, avec clapet anti-retour) retire l'air et l'humidité du circuit. Le vide se lit au <b>vacuomètre</b>, en pression absolue. La <b>station de récupération</b> aspire le fluide et le pousse dans une <b>bouteille de récupération</b> (bouteille spéciale, à deux robinets liquide et gaz, prêtée par le distributeur). La <b>balance</b> sert à tout : on charge et on récupère au poids, pas à la pression.",
   ex:"Avant chaque tirage au vide, tu vérifies l'huile de la pompe : une huile laiteuse ou foncée est chargée d'humidité, la pompe n'atteindra plus un bon vide. On la vidange.",
   q:["Avec quoi charge-t-on un circuit ?",["Une balance : on charge au poids","Au jugé, en regardant le voyant","À la pression seulement","Au volume"],0,"La quantité de fluide est indiquée par le fabricant en kg."]},
  {p:"Pour trouver une fuite : on met le circuit sous pression d'<b>azote</b> (si le circuit est vide) et on cherche au <b>produit moussant</b>, ou on cherche directement le fluide avec un <b>détecteur électronique</b> compatible avec ce fluide (certains ne détectent pas les HFO ou le propane). Le détecteur s'utilise lentement, la sonde sous les raccords (les fluides sont plus lourds que l'air).",
   q:["Pourquoi passer la sonde du détecteur sous les raccords ?",["Les fluides sont plus lourds que l'air","Pour aller plus vite","Pour ne pas la salir","Ça n'a pas d'importance"],0,"Le fluide qui fuit descend."]},
  {p:"Le travail du cuivre demande des outils dédiés : <b>coupe-tube</b> (jamais de scie, qui laisse de la limaille), <b>ébavureur</b>, <b>cintreuse</b> (pour éviter les coudes et les écrasements), <b>évaseur</b> pour les raccords flare (dudgeon) avec une <b>clé dynamométrique</b> pour serrer au couple, et le <b>chalumeau</b> pour le brasage fort avec une brasure à l'argent, sous balayage d'azote.",
   fig:{type:"flux",legende:"Préparer un tube avant un raccord flare",etapes:["Couper au coupe-tube","Ébavurer, tube vers le bas","Glisser l'écrou","Évaser au bon diamètre","Serrer à la clé dynamométrique"]},
   att:"On ébavure le tube orienté vers le bas pour que les copeaux tombent dehors et pas dans le circuit.",
   q:["Pourquoi un coupe-tube plutôt qu'une scie ?",["Pas de limaille dans le circuit et une coupe droite","C'est plus joli","La scie est interdite par la loi","Le coupe-tube chauffe le cuivre"],0,"La limaille de la scie finirait dans le compresseur ou le détendeur."]}
 ],
 retenir:["Manifold : BP bleu, HP rouge, service jaune ; purger les flexibles.","Pompe à vide + vacuomètre ; station + bouteille de récupération ; balance.","Fuites : azote + moussant, ou détecteur électronique compatible.","Tube : coupe-tube, ébavureur, cintreuse, évaseur + clé dynamométrique, brasure argent sous azote."]
};

C.lexique.push(
 ["Manifold","Jeu de manomètres (BP bleu, HP rouge) et de vannes pour intervenir sur le circuit."],
 ["Pompe à vide","Pompe qui retire l'air et l'humidité d'un circuit avant la charge."],
 ["Vacuomètre","Appareil qui mesure le vide en pression absolue (mbar, Pa ou microns)."],
 ["Station de récupération","Appareil qui transfère le fluide du circuit vers une bouteille de récupération."],
 ["Dudgeon","Raccord évasé (flare) : l'extrémité du tube est évasée à 45° et serrée par un écrou."]
);

C.quiz.push(
 ["outils","Quel outil mesure un vide ?",["Le vacuomètre","Le manomètre HP","La balance","Le détecteur de fuite"],0,"Le vide se mesure en pression absolue."],
 ["outils","Quel outil serre un raccord flare au bon couple ?",["La clé dynamométrique","Une pince multiprise","Un marteau","Une clé à molette serrée au maximum"],0,"Trop serré, l'évasement se fend ; pas assez, il fuit."],
 ["outils","Pourquoi purger les flexibles du manifold ?",["Pour ne pas introduire d'air dans le circuit","Pour les nettoyer","Pour vérifier les manomètres","Ce n'est pas utile"],0,"L'air est un incondensable qui fait monter la HP."],
 ["outils","L'huile de la pompe à vide est laiteuse. Que fais-tu ?",["Je la vidange : elle est chargée d'humidité","Je continue","J'ajoute du fluide","Je la chauffe"],0,"Une huile humide empêche d'atteindre un bon vide."],
 ["outils","La bouteille de récupération…",["A deux robinets (liquide et gaz) et sert uniquement à la récupération","Est une bouteille de fluide neuf","Peut contenir de l'azote","Se remplit à 100 %"],0,"Bouteille spécifique, prêtée par le distributeur."]
);

C.vf.push(
 ["On peut couper un tube frigorifique à la scie à métaux.",false,"La limaille pollue le circuit : coupe-tube obligatoire."],
 ["Tous les détecteurs électroniques détectent tous les fluides.",false,"Il faut un détecteur compatible avec le fluide (HFC, HFO, hydrocarbures…)."],
 ["On ébavure le tube orienté vers le bas.",true,"Les copeaux tombent dehors et pas dans le tube."]
);
