/* NIVEAU 2 — Les protections */
C.modules.push({id:"protec",n:2,i:"🛡️",t:"Les protections",d:"Disjoncteurs, différentiels, fusibles, parafoudre",
 s:[{h:"Qui protège quoi ?",l:["<b>Disjoncteur divisionnaire</b> : protège les <b>câbles</b> contre les surcharges et les courts-circuits.","<b>Interrupteur différentiel 30 mA</b> : protège les <b>personnes</b> contre les fuites de courant.","<b>Disjoncteur de branchement</b> : à l'entrée du logement, coupe tout."]},
    {h:"Comment déclenche un disjoncteur",l:["Partie <b>thermique</b> : coupe une <b>surcharge</b> après un certain temps.","Partie <b>magnétique</b> : coupe un <b>court-circuit</b> instantanément.","Courbes : <b>B</b> (3 à 5 In), <b>C</b> (5 à 10 In, le plus courant), <b>D</b> (10 à 20 In, moteurs, transformateurs)."]},
    {h:"Les différentiels",l:["Sensibilité <b>30 mA</b> pour protéger les personnes.","Type <b>AC</b> : courants alternatifs. Type <b>A</b> : en plus, courants avec composante continue (électronique).","Type A obligatoire pour la <b>plaque de cuisson</b>, le <b>lave-linge</b> et la <b>borne de recharge</b>."]},
    {h:"Sections et calibres (NF C 15-100)",l:["Éclairage : <b>1,5 mm²</b> → disjoncteur <b>16 A</b>.","Prises : <b>1,5 mm² → 16 A</b> ou <b>2,5 mm² → 20 A</b>.","Lave-linge, four, chauffe-eau : <b>2,5 mm² → 20 A</b>.","Plaque de cuisson : <b>6 mm² → 32 A</b>."]},
    {h:"Fusibles et parafoudre",l:["<b>Fusible gG</b> : usage général. <b>aM</b> : accompagnement moteur.","Un fusible fondu se <b>remplace</b> par un fusible de <b>même calibre</b>.","<b>Parafoudre</b> : protège les appareils contre les surtensions dues à la foudre."]}],
 k:["Disjoncteur","Différentiel","Court-circuit","Surcharge","Courbe de déclenchement","Parafoudre"]});

C.fiches.protec={
 intro:"Un tableau électrique, c'est le poste de garde de la maison. Chaque appareil qu'il contient a un rôle précis : protéger les câbles contre l'incendie, ou protéger les personnes contre l'électrocution. Savoir qui protège quoi, c'est la base du métier et la clé du dépannage.",
 s:[
  {p:"Retiens la différence en une phrase : le <b>disjoncteur protège les câbles</b>, le <b>différentiel protège les personnes</b>. Le disjoncteur coupe quand le courant est trop fort. Le différentiel compare le courant qui part par la phase et celui qui revient par le neutre : s'il manque <b>30 mA</b>, c'est qu'ils s'échappent ailleurs (peut-être à travers quelqu'un), et il coupe. Essaie ci-dessous.",
   fig:{type:"inter",legende:"Le différentiel compare l'aller et le retour.",inters:[["a","🧺 Mettre l'appareil en marche"],["p","🧍 Une personne touche la phase"]],
    svg:"<svg viewBox='0 0 300 178'><path class='w' data-k='amont' d='M18 40H58M18 130H58'/><text x='6' y='44' fill='#fff' font-size='11' font-weight='900'>L</text><text x='6' y='134' fill='#fff' font-size='11' font-weight='900'>N</text><rect x='58' y='22' width='62' height='126' rx='10' fill='var(--card)' stroke='var(--pri)' stroke-width='2'/><text x='89' y='44' text-anchor='middle' fill='#fff' font-size='11' font-weight='900'>DIFF.</text><text x='89' y='58' text-anchor='middle' fill='#fff' font-size='11' font-weight='900'>30 mA</text><circle cx='89' cy='90' r='15' fill='none' stroke='var(--mut)' stroke-width='5'/><text data-v='p:0' x='89' y='136' fill='var(--ok)' font-size='10' font-weight='900' text-anchor='middle'>FERMÉ</text><text data-v='p:1' x='89' y='136' fill='var(--ko)' font-size='9' font-weight='900' text-anchor='middle'>DÉCLENCHÉ</text><path class='w' data-k='l' d='M120 40H232'/><path class='w' data-k='n' d='M120 130H232'/><rect x='232' y='26' width='58' height='118' rx='10' fill='var(--card)' stroke='#fff' stroke-width='2'/><circle class='lp' data-k='lp' cx='261' cy='68' r='13'/><text x='261' y='120' font-size='22' text-anchor='middle'>🧺</text><g data-v='p:1'><path class='w ko' d='M176 40V64M176 112V158'/><text x='176' y='104' font-size='34' text-anchor='middle'>🧍</text><path d='M162 160H190M167 166H185M172 172H180' stroke='#fff' stroke-width='2'/></g></svg>",
    f:s=>s.p?["amont"]:s.a?["amont","l","n","lp"]:["amont"],
    msg:s=>s.p?"⚡ Une partie du courant s'échappe par la personne vers la terre : aller ≠ retour. Le différentiel le détecte et coupe tout en quelques dizaines de millisecondes.":s.a?"✅ 10 A partent par la phase, 10 A reviennent par le neutre : aller = retour, le différentiel ne bouge pas.":"Appareil à l'arrêt : aucun courant ne circule."},
   ex:"Tu branches un radiateur, un four et un lave-linge sur la même ligne : le <b>disjoncteur</b> saute (surcharge). Un sèche-cheveux tombe dans le lavabo : le <b>différentiel</b> coupe.",
   q:["Une personne touche un fil sous tension. Qui coupe ?",["Le différentiel 30 mA","Le disjoncteur divisionnaire","Le télérupteur","Personne"],0,"Le courant passe dans la personne vers la terre : c'est une fuite, le différentiel la détecte."]},
  {p:"Un disjoncteur a deux mécanismes. La partie <b>thermique</b> (un bilame qui chauffe) laisse passer une petite surcharge quelque temps, puis coupe : c'est la protection contre la <b>surcharge</b>. La partie <b>magnétique</b> (une bobine) réagit en quelques millisecondes à un courant énorme : c'est la protection contre le <b>court-circuit</b>. La <b>courbe</b> indique à partir de combien de fois le calibre le magnétique déclenche.",
   fig:{type:"barres",legende:"Seuil de déclenchement magnétique selon la courbe (en multiples du calibre In)",items:[["Courbe B (câbles longs, générateurs)",5,"× In","#3db5ff"],["Courbe C (usage courant, logement)",10,"× In","#ffc83d"],["Courbe D (moteurs, transformateurs)",20,"× In","#ff8a3d"]]},
   info:"Le <b>pouvoir de coupure</b> (3 000 A, 4 500 A, 6 000 A…) est le plus fort courant de court-circuit que le disjoncteur sait couper sans exploser. En logement, 3 kA minimum, souvent 4,5 ou 6 kA.",
   q:["Un disjoncteur qui déclenche instantanément avec un claquement, c'est le plus souvent…",["Un court-circuit (magnétique)","Une surcharge (thermique)","Une fuite à la terre","Une coupure réseau"],0,"Le magnétique réagit en quelques millisecondes à un courant très fort."]},
  {p:"Le différentiel existe en plusieurs <b>types</b>. Le <b>type AC</b> détecte les fuites de courant alternatif. Le <b>type A</b> détecte en plus les fuites avec une composante continue, produites par l'électronique (plaques à induction, lave-linge à variateur, bornes de recharge). Le type A est exigé sur les circuits plaque de cuisson et lave-linge, et la tendance des normes récentes est de le généraliser.",
   fig:{type:"cycle",centre:"Quel type de différentiel ?",etapes:[["Type AC<br>éclairage, prises","#3db5ff"],["Type A<br>plaque, lave-linge","#ffc83d"],["Type F / B<br>certaines bornes, variateurs","#ff8a3d"]]},
   att:"Remplacer un différentiel 30 mA par un 300 mA « parce qu'il saute tout le temps », c'est supprimer la protection des personnes. Un différentiel qui déclenche signale un défaut : on le cherche.",
   info:"La NF C 15-100 fixe aussi le nombre minimal d'interrupteurs différentiels selon la surface du logement, et limite le nombre de circuits par différentiel. Ces règles évoluent avec les éditions de la norme : vérifie l'édition applicable au chantier.",
   q:["Quel type de différentiel pour le circuit de la plaque de cuisson ?",["Type A","Type AC","Aucun","300 mA"],0,"Les plaques (électronique) peuvent produire des fuites avec composante continue : type A."]},
  {p:"La NF C 15-100 fixe la section des fils et le calibre du disjoncteur pour chaque type de circuit. Le principe : le disjoncteur doit couper <b>avant</b> que le fil chauffe. Un fil de 1,5 mm² ne se protège jamais au-delà de 16 A, un 2,5 mm² jamais au-delà de 20 A (en logement, pose courante).",
   fig:{type:"barres",legende:"Calibre du disjoncteur selon le circuit",items:[["Éclairage — 1,5 mm²",16,"A"],["Prises — 2,5 mm²",20,"A"],["Lave-linge, four, chauffe-eau — 2,5 mm²",20,"A"],["Plaque de cuisson — 6 mm²",32,"A"]]},
   att:"Ne jamais mettre un disjoncteur plus gros que prévu « pour qu'il arrête de sauter » : le câble chaufferait sans être protégé. C'est une cause classique d'incendie.",
   info:"Le nombre de prises par circuit est limité (historiquement 5 en 1,5 mm² et 8 en 2,5 mm²) ; la nouvelle édition de la norme a fait évoluer ces limites. Vérifie toujours l'édition applicable.",
   q:["Un circuit de prises en 2,5 mm² se protège en…",["20 A","32 A","10 A","40 A"],0,"2,5 mm² → 20 A."]},
  {p:"Le <b>fusible</b> est la protection la plus ancienne : un fil calibré qui fond quand le courant est trop fort. On en trouve encore dans les tableaux anciens et dans l'industrie. <b>gG</b> = usage général ; <b>aM</b> = accompagnement moteur (il supporte la pointe de démarrage, et laisse la surcharge au relais thermique). Le <b>parafoudre</b>, lui, protège contre les surtensions dues à la foudre : il écoule la surtension vers la terre.",
   att:"Remplacer un fusible fondu par un fusible plus gros, ou par un morceau de fil, supprime la protection du câble. Toujours le même calibre et le même type.",
   ex:"Dans une maison en zone très orageuse, ou avec un paratonnerre, la norme peut imposer un parafoudre au tableau. Il protège la box, la télé, les appareils électroniques.",
   q:["Un fusible aM est fait pour protéger…",["Un départ moteur","Un circuit d'éclairage","Une prise de téléphone","Une personne"],0,"aM = accompagnement moteur : il tolère la pointe de démarrage."]}
 ],
 retenir:["Disjoncteur → câbles ; différentiel 30 mA → personnes.","Thermique = surcharge (lent) ; magnétique = court-circuit (instantané). Courbe C en logement.","Type A pour plaque de cuisson, lave-linge, borne de recharge.","1,5 mm² / 16 A · 2,5 mm² / 20 A · 6 mm² / 32 A.","Un fusible se remplace par le même calibre ; le parafoudre protège de la foudre."]
};

C.lexique.push(
 ["Disjoncteur","Appareil qui coupe automatiquement un circuit en cas de surcharge ou de court-circuit."],
 ["Différentiel","Appareil qui coupe dès qu'il détecte une fuite de courant (30 mA pour protéger les personnes)."],
 ["Court-circuit","Contact direct entre deux conducteurs actifs (phase et neutre) : courant énorme, risque d'incendie."],
 ["Surcharge","Trop d'appareils sur un circuit : le courant dépasse ce que le câble supporte."],
 ["Courbe de déclenchement","Courbe B, C ou D d'un disjoncteur : à partir de combien de fois son calibre il coupe instantanément."],
 ["Pouvoir de coupure","Plus fort courant de court-circuit qu'un disjoncteur peut couper sans être détruit (ex. 6 kA)."],
 ["Parafoudre","Appareil qui protège l'installation contre les surtensions dues à la foudre en les écoulant vers la terre."],
 ["Fusible","Protection à fil calibré qui fond si le courant est trop fort. gG = usage général, aM = moteur."],
 ["Calibre","Courant nominal d'un disjoncteur ou d'un fusible (In), en ampères : 16 A, 20 A, 32 A…"]
);

C.quiz.push(
 ["protec","Qui protège les personnes contre les fuites de courant ?",["Le différentiel 30 mA","Le disjoncteur divisionnaire","Le fusible","Le télérupteur"],0,"Le différentiel détecte la fuite et coupe."],
 ["protec","Le disjoncteur divisionnaire protège surtout…",["Les câbles","Les personnes","Le compteur","La prise de terre"],0,"Il protège les câbles des surcharges et courts-circuits."],
 ["protec","Section et calibre pour un circuit d'éclairage ?",["1,5 mm² / 16 A","2,5 mm² / 32 A","6 mm² / 32 A","1 mm² / 10 A"],0,"Éclairage : 1,5 mm² protégé en 16 A."],
 ["protec","Section pour une plaque de cuisson en monophasé ?",["6 mm²","1,5 mm²","2,5 mm²","4 mm²"],0,"Plaque de cuisson : 6 mm² en 32 A."],
 ["protec","Quelle courbe de disjoncteur est la plus utilisée en logement ?",["C","D","Z","K"],0,"La courbe C (magnétique entre 5 et 10 In) est le standard."],
 ["protec","La partie thermique d'un disjoncteur protège contre…",["Les surcharges","Les courts-circuits","La foudre","Les fuites à la terre"],0,"Le bilame chauffe lentement : il réagit aux surcharges."],
 ["protec","Comment fonctionne un différentiel ?",["Il compare le courant aller (phase) et retour (neutre)","Il mesure la tension","Il compte les appareils branchés","Il mesure la température"],0,"S'il manque du courant au retour, c'est une fuite : il coupe."],
 ["protec","Un fusible gG fondu se remplace par…",["Un fusible gG de même calibre","Un fusible plus gros","Un morceau de fil","Un fusible aM plus petit"],0,"Même type, même calibre : sinon le câble n'est plus protégé."],
 ["protec","À quoi sert un parafoudre ?",["Protéger contre les surtensions dues à la foudre","Protéger les personnes","Remplacer le différentiel","Limiter la consommation"],0,"Il écoule les surtensions vers la terre."],
 ["protec","Le différentiel de 30 mA saute souvent. Que fais-tu ?",["Je cherche le défaut d'isolement","Je le remplace par un 300 mA","Je le shunte","Je le débranche"],0,"Il signale un défaut : on le cherche, on ne supprime pas la protection."],
 ["protec","Que signifie « 6 kA » sur un disjoncteur ?",["Son pouvoir de coupure","Son calibre","Sa sensibilité","Sa tension"],0,"Il peut couper un court-circuit jusqu'à 6 000 A."]
);

C.vf.push(
 ["Un différentiel 30 mA protège les personnes.",true,"C'est son rôle principal."],
 ["La plaque de cuisson se câble en 6 mm² en monophasé.",true,"6 mm² protégé en 32 A."],
 ["Le disjoncteur protège les câbles contre les surcharges.",true,"Surcharges et courts-circuits."],
 ["On peut protéger un fil de 1,5 mm² avec un disjoncteur 20 A.",false,"1,5 mm² → 16 A maximum."],
 ["Un différentiel de type A détecte aussi ce que détecte un type AC.",true,"Le type A fait tout ce que fait le AC, plus les fuites à composante continue."],
 ["Le magnétique d'un disjoncteur réagit en plusieurs minutes.",false,"Il réagit en quelques millisecondes ; c'est le thermique qui est lent."]
);
