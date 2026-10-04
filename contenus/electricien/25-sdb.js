/* NIVEAU 2 — La salle de bain et ses volumes */
C.modules.push({id:"sdb",n:2,i:"🛁",t:"La salle de bain et ses volumes",d:"Volumes 0, 1, 2, indices IP, liaison équipotentielle",
 s:[{h:"Pourquoi des règles spéciales ?",l:["Corps mouillé, pieds nus, eau partout : la résistance du corps s'effondre.","Tension limite de sécurité : <b>25 V</b> en local mouillé, <b>12 V</b> corps immergé.","Tous les circuits de la salle de bain sont protégés par un <b>différentiel 30 mA</b>."]},
    {h:"Les volumes",l:["<b>Volume 0</b> : l'intérieur de la baignoire ou du receveur de douche.","<b>Volume 1</b> : au-dessus, jusqu'à <b>2,25 m</b> du sol.","<b>Volume 2</b> : une bande de <b>0,60 m</b> autour du volume 1.","<b>Hors volume</b> : le reste de la pièce."]},
    {h:"Ce qu'on peut installer",l:["Volume 0 : uniquement du matériel en <b>TBTS 12 V</b>, IPX7.","Volume 1 : TBTS 12 V ; chauffe-eau électrique horizontal placé le plus haut possible ; <b>IPX5</b>.","Volume 2 : en plus, luminaires et chauffage de <b>classe II</b>, <b>prise rasoir</b> avec transformateur de séparation ; IPX4.","Hors volume : <b>prises 2P+T</b>, interrupteurs, appareils de classe I."]},
    {h:"La liaison équipotentielle",l:["La <b>LES</b> relie entre elles les parties métalliques (canalisations, bâti de baignoire métallique) et la terre.","But : qu'il n'y ait jamais de différence de tension dangereuse entre deux objets métalliques qu'on peut toucher.","Section : <b>2,5 mm²</b> si protégée mécaniquement, sinon <b>4 mm²</b>."]},
    {h:"Les indices IP",l:["<b>IP</b> = 2 chiffres : le 1er pour les poussières/corps solides (0 à 6), le 2e pour l'eau (0 à 8).","IPX4 = projections d'eau, IPX5 = jets d'eau, IPX7 = immersion temporaire.","Le X veut dire « non précisé »."]}],
 k:["Volume","TBTS","Indice IP","LES","Classe II"]});

C.fiches.sdb={
 intro:"La salle de bain est la pièce la plus dangereuse de la maison sur le plan électrique : on y est mouillé, pieds nus, en contact avec des canalisations métalliques. La NF C 15-100 la découpe en « volumes » autour de la baignoire et de la douche, avec des règles de plus en plus strictes à mesure qu'on s'approche de l'eau.",
 s:[
  {p:"Dans l'eau, la résistance du corps est très faible : une tension qu'on supporterait les mains sèches devient dangereuse. La tension limite de sécurité tombe à <b>12 V</b> quand le corps est immergé. C'est pour ça que seuls des appareils en <b>très basse tension de sécurité (TBTS)</b> sont admis tout près de l'eau, et que <b>tous</b> les circuits de la pièce sont protégés par un différentiel <b>30 mA</b>.",
   q:["Quelle protection pour tous les circuits de la salle de bain ?",["Un différentiel 30 mA","Un fusible 10 A","Un parafoudre","Rien de spécial"],0,"Tous les circuits de la salle d'eau sont protégés par un 30 mA."]},
  {p:"Les volumes se mesurent à partir de la baignoire ou de la douche. <b>Volume 0</b> : l'intérieur de la baignoire ou du receveur (sans receveur : les 10 premiers centimètres au-dessus du sol). <b>Volume 1</b> : au-dessus du volume 0, jusqu'à 2,25 m du sol. <b>Volume 2</b> : une bande de 0,60 m autour du volume 1. Au-delà, on est <b>hors volume</b>. Une douche à l'italienne (sans receveur) a un volume 1 plus large : un cylindre de 1,20 m de rayon autour de l'arrivée d'eau, réduit si une paroi fixe protège.",
   fig:{type:"svg",legende:"Vue de côté : les volumes autour d'une baignoire",svg:"<svg viewBox='0 0 300 175'><path d='M10 160H290' stroke='#fff' stroke-width='2'/><rect x='30' y='42' width='110' height='78' fill='#3db5ff' opacity='.25' class='appear'/><rect x='140' y='42' width='40' height='118' fill='#ffc83d' opacity='.25' class='appear' style='animation-delay:.3s'/><rect x='30' y='120' width='110' height='40' rx='6' fill='#2e7dd1' opacity='.6' class='pop'/><rect x='30' y='120' width='110' height='40' rx='6' fill='none' stroke='#fff' stroke-width='2'/><text x='85' y='145' text-anchor='middle' font-size='11' font-weight='900' fill='#fff'>Volume 0</text><text x='85' y='85' text-anchor='middle' font-size='11' font-weight='900' fill='#fff'>Volume 1</text><text x='160' y='100' text-anchor='middle' font-size='10' font-weight='900' fill='#fff' transform='rotate(-90 160 100)'>Volume 2</text><text x='235' y='100' text-anchor='middle' font-size='11' font-weight='900' fill='var(--ok)'>Hors volume</text><path d='M20 42V160' stroke='var(--mut)' stroke-width='1.5'/><text x='16' y='100' text-anchor='middle' font-size='9' font-weight='700' fill='var(--mut)' transform='rotate(-90 16 100)'>2,25 m</text><path d='M140 34H180' stroke='var(--mut)' stroke-width='1.5'/><text x='160' y='28' text-anchor='middle' font-size='9' font-weight='700' fill='var(--mut)'>0,60 m</text></svg>"},
   q:["Le volume 2 s'étend sur quelle largeur autour du volume 1 ?",["0,60 m","1 m","2,25 m","0,10 m"],0,"Une bande de 0,60 m autour du volume 1."]},
  {p:"Plus on s'approche de l'eau, moins on a le droit d'installer de choses. Dans le volume 0, seulement du matériel prévu pour être immergé et alimenté en 12 V maximum. Dans les volumes 1 et 2, on peut ajouter, sous conditions, le chauffe-eau, des luminaires et un sèche-serviettes de <b>classe II</b> (double isolation). Les <b>prises de courant 2P+T</b> et les interrupteurs ordinaires sont <b>hors volume</b> ; seule la <b>prise rasoir</b> (avec transformateur de séparation intégré, de 20 à 50 VA) est admise dans le volume 2.",
   fig:{type:"cycle",centre:"Où va quoi ?",etapes:[["Volume 0<br>TBTS 12 V seulement","#3db5ff"],["Volume 1<br>TBTS, chauffe-eau sous conditions","#7be0d0"],["Volume 2<br>classe II, prise rasoir","#ffc83d"],["Hors volume<br>prises, interrupteurs","#2ed47a"]]},
   att:"Un sèche-cheveux branché sur une prise trop proche de la baignoire est un accident classique. On respecte les volumes même si le client insiste.",
   q:["Une prise 2P+T 16 A dans une salle de bain se place…",["Hors volume","Dans le volume 1","Dans le volume 0","Dans le volume 2"],0,"Les prises 2P+T sont interdites dans les volumes 0, 1 et 2."]},
  {p:"La <b>liaison équipotentielle supplémentaire (LES)</b> relie à la terre toutes les parties métalliques accessibles de la salle de bain : canalisations d'eau métalliques, vidange, bâti métallique de la baignoire, corps de chauffage. Ainsi, si une canalisation est mise accidentellement sous tension, tout ce qui est métallique est au même potentiel : on ne peut pas recevoir de courant entre le robinet et la baignoire. La norme précise les cas où elle est exigée et ceux où elle peut être omise.",
   ex:"Rénovation d'une salle de bain avec tuyaux en cuivre : tu poses un conducteur vert/jaune de 2,5 mm² sous conduit (ou 4 mm² sans protection) depuis la borne de terre, avec des colliers de raccordement sur chaque canalisation métallique.",
   q:["À quoi sert la liaison équipotentielle de la salle de bain ?",["À éviter une différence de tension entre deux parties métalliques","À chauffer l'eau","À remplacer le différentiel","À éclairer la pièce"],0,"Tout ce qui est métallique est au même potentiel : pas de courant entre eux."]},
  {p:"L'<b>indice IP</b> (« International Protection ») dit à quoi résiste un matériel. Le 1er chiffre concerne les corps solides et la poussière (0 à 6), le 2e l'eau (0 à 8). Un X remplace un chiffre non précisé. Pour la salle de bain : <b>IPX7</b> (immersion temporaire) dans le volume 0, <b>IPX5</b> (jets d'eau) dans le volume 1, <b>IPX4</b> (projections d'eau) dans le volume 2. On trouve aussi l'indice <b>IK</b>, pour la résistance aux chocs.",
   fig:{type:"barres",legende:"Deuxième chiffre de l'indice IP (protection contre l'eau)",items:[["IPX1 : gouttes verticales",1,""],["IPX4 : projections de toutes directions",4,""],["IPX5 : jets d'eau",5,""],["IPX7 : immersion temporaire",7,""]]},
   q:["Que signifie IPX4 ?",["Protégé contre les projections d'eau","Étanche en immersion","Protégé contre la poussière seulement","4 heures d'autonomie"],0,"Le 2e chiffre 4 = projections d'eau de toutes directions."]}
 ],
 retenir:["Tous les circuits de la salle de bain : différentiel 30 mA.","V0 = dans la baignoire ; V1 = au-dessus jusqu'à 2,25 m ; V2 = 0,60 m autour ; puis hors volume.","Prises 2P+T et interrupteurs : hors volume. Prise rasoir admise en V2.","LES : relier les parties métalliques à la terre (2,5 mm² protégé ou 4 mm²).","IPX7 en V0, IPX5 en V1, IPX4 en V2."]
};

C.lexique.push(
 ["Volume","Zone de la salle de bain (0, 1, 2 ou hors volume) qui détermine le matériel autorisé."],
 ["TBTS","Très Basse Tension de Sécurité : tension ≤ 50 V (souvent 12 V) fournie par un transformateur de sécurité, isolée de la terre."],
 ["Indice IP","Code à 2 chiffres indiquant la protection d'un matériel contre les solides (1er chiffre) et l'eau (2e chiffre)."],
 ["LES","Liaison Équipotentielle Supplémentaire : relie à la terre les parties métalliques de la salle de bain."],
 ["Classe II","Appareil à double isolation, sans fil de terre. Symbole : deux carrés emboîtés."],
 ["Prise rasoir","Prise avec transformateur de séparation, autorisée dans le volume 2 de la salle de bain."]
);

C.quiz.push(
 ["sdb","Le volume 0, c'est…",["L'intérieur de la baignoire ou du receveur","Le plafond","La porte","Toute la pièce"],0,"Volume 0 = là où il y a de l'eau."],
 ["sdb","Jusqu'à quelle hauteur va le volume 1 ?",["2,25 m du sol","1 m","3 m","1,80 m"],0,"Le volume 1 monte jusqu'à 2,25 m du sol."],
 ["sdb","Quel matériel est admis dans le volume 0 ?",["Du matériel TBTS 12 V prévu pour l'immersion","Une prise 2P+T","Un interrupteur","Un radiateur 230 V"],0,"Volume 0 : TBTS 12 V et IPX7."],
 ["sdb","Quelle prise est admise dans le volume 2 ?",["La prise rasoir avec transformateur de séparation","La prise 2P+T 16 A","La prise 32 A","Aucune, jamais"],0,"La prise rasoir est alimentée par un transformateur de séparation."],
 ["sdb","Un appareil de classe II est…",["À double isolation, sans terre","Relié à la terre","Alimenté en 12 V","Interdit"],0,"Classe II = double isolation, symbole deux carrés."],
 ["sdb","Quel IP minimum pour un appareil du volume 1 ?",["IPX5","IPX1","IPX2","Aucun"],0,"IPX5 : protégé contre les jets d'eau. IPX4 suffit dans le volume 2."],
 ["sdb","Section de la LES protégée mécaniquement ?",["2,5 mm²","0,75 mm²","16 mm²","1 mm²"],0,"2,5 mm² sous protection mécanique, sinon 4 mm²."],
 ["sdb","Le 1er chiffre de l'indice IP concerne…",["Les corps solides et la poussière","L'eau","Les chocs","La température"],0,"1er chiffre = solides, 2e chiffre = eau."]
);

C.vf.push(
 ["On peut installer un interrupteur ordinaire dans le volume 1.",false,"Les interrupteurs ordinaires sont hors volume."],
 ["Tous les circuits de la salle de bain sont protégés par un différentiel 30 mA.",true,"C'est une exigence de la norme."],
 ["IPX7 signifie que l'appareil supporte une immersion temporaire.",true,"2e chiffre 7 = immersion temporaire."],
 ["La liaison équipotentielle relie les tuyaux métalliques à la terre.",true,"Pour qu'il n'y ait pas de différence de tension entre eux."]
);
