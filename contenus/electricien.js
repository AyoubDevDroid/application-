/* Électricien Pro — contenu (titre pro Électricien d'équipement du bâtiment) */
const C={
 id:'electricien',app:'Électricien Pro',icon:'⚡',
 sousTitre:'Les modules du titre professionnel, en fiches courtes.',
 pub:{actif:true,toutesLes:3},
 modules:[
  {id:'bases',i:'🔌',t:'Les bases de l\'électricité',d:'Tension, courant, résistance, puissance',
   s:[{h:'Les 4 grandeurs',l:['<b>Tension (U)</b> en volts (V) : la « pression » qui pousse le courant.','<b>Intensité (I)</b> en ampères (A) : la quantité de courant qui circule.','<b>Résistance (R)</b> en ohms (Ω) : ce qui freine le courant.','<b>Puissance (P)</b> en watts (W) : l\'énergie consommée par seconde.']},
      {h:'Les 2 formules à connaître',l:['<b>Loi d\'Ohm : U = R × I</b>','<b>Puissance : P = U × I</b>','Exemple : un radiateur de 2 300 W en 230 V consomme I = 2300 ÷ 230 = <b>10 A</b>.']},
      {h:'Le réseau en France',l:['Monophasé : <b>230 V – 50 Hz</b> (logements).','Triphasé : <b>400 V</b> entre phases (gros équipements, ateliers).']}],
   k:['Tension','Intensité','Résistance','Puissance','Loi d\'Ohm']},
  {id:'secu',i:'🦺',t:'Sécurité & habilitation',d:'NF C 18-510, consignation, domaines de tension',
   s:[{h:'Les domaines de tension (alternatif)',l:['<b>TBT</b> : jusqu\'à 50 V.','<b>BT</b> : de 50 V à 1 000 V.','<b>HTA / HTB</b> : au-delà de 1 000 V.']},
      {h:'L\'habilitation électrique',l:['Obligatoire pour travailler sur ou près d\'installations électriques (norme <b>NF C 18-510</b>).','<b>B0</b> : non-électricien, travaux non électriques en zone à risque.','<b>BR</b> : interventions générales en basse tension (dépannage, raccordement).','<b>BC</b> : réaliser une consignation.','<b>B1 / B2</b> : exécutant / chargé de travaux électriques.']},
      {h:'La consignation',l:['1. <b>Séparer</b> l\'installation de sa source.','2. <b>Condamner</b> l\'organe de séparation (cadenas).','3. <b>Identifier</b> l\'ouvrage sur lequel on travaille.','4. <b>Vérifier l\'absence de tension</b> (VAT).','5. <b>Mettre à la terre et en court-circuit</b> si nécessaire.']}],
   k:['Habilitation','Consignation','VAT','EPI']},
  {id:'protec',i:'🛡️',t:'Protections & tableau',d:'Disjoncteurs, différentiels, NF C 15-100',
   s:[{h:'Qui protège quoi ?',l:['<b>Disjoncteur divisionnaire</b> : protège les <b>câbles</b> contre les surcharges et les courts-circuits.','<b>Interrupteur différentiel 30 mA</b> : protège les <b>personnes</b> contre les fuites de courant.','<b>Disjoncteur de branchement</b> : à l\'entrée du logement, coupe tout.']},
      {h:'Sections et calibres (NF C 15-100)',l:['Éclairage : <b>1,5 mm²</b> → disjoncteur <b>16 A</b>.','Prises (max 12) : <b>2,5 mm²</b> → <b>20 A</b>.','Lave-linge, four, chauffe-eau : circuit spécialisé <b>2,5 mm²</b> → <b>20 A</b>.','Plaque de cuisson : <b>6 mm²</b> → <b>32 A</b>.']},
      {h:'Les couleurs des fils',l:['<b>Vert/jaune</b> : terre (PE) — réservé, jamais autre chose.','<b>Bleu</b> : neutre.','<b>Phase</b> : rouge, marron, noir…']}],
   k:['Disjoncteur','Différentiel','Terre','Neutre','Phase','Court-circuit']},
  {id:'schemas',i:'💡',t:'Schémas & montages',d:'Simple allumage, va-et-vient, télérupteur',
   s:[{h:'Les montages d\'éclairage',l:['<b>Simple allumage</b> : 1 interrupteur commande 1 point lumineux.','<b>Va-et-vient</b> : 2 interrupteurs commandent le même point (couloir, escalier).','<b>Télérupteur</b> : 3 boutons poussoirs ou plus commandent le même point.','<b>Minuterie</b> : la lumière s\'éteint seule après un temps réglé.']},
      {h:'La règle d\'or',l:['L\'interrupteur coupe toujours la <b>phase</b>, jamais le neutre.']}],
   k:['Va-et-vient','Télérupteur','Phase']},
  {id:'mesure',i:'📟',t:'Mesures & contrôle',d:'Multimètre, VAT, pince ampèremétrique',
   s:[{h:'Bien brancher ses appareils',l:['<b>Voltmètre</b> : en <b>parallèle</b> (aux bornes).','<b>Ampèremètre</b> : en <b>série</b> (dans le circuit).','<b>Pince ampèremétrique</b> : autour d\'<b>un seul</b> conducteur.']},
      {h:'Le VAT',l:['Vérificateur d\'Absence de Tension : on le <b>teste avant et après</b> la mesure pour être sûr qu\'il fonctionne.','Un multimètre <b>ne remplace pas</b> un VAT.']}],
   k:['VAT','Multimètre']}
 ],
 lexique:[
  ['Tension','Différence de potentiel entre deux points, en volts (V). Symbole U.'],
  ['Intensité','Quantité de courant qui circule, en ampères (A). Symbole I.'],
  ['Résistance','Opposition au passage du courant, en ohms (Ω). Symbole R.'],
  ['Puissance','Énergie consommée par seconde, en watts (W). P = U × I.'],
  ['Loi d\'Ohm','U = R × I : la tension égale la résistance multipliée par l\'intensité.'],
  ['Phase','Conducteur sous tension (230 V par rapport au neutre). Rouge, marron ou noir.'],
  ['Neutre','Conducteur de retour du courant. Toujours bleu.'],
  ['Terre','Conducteur de protection (PE) qui évacue les fuites vers le sol. Toujours vert/jaune.'],
  ['Disjoncteur','Appareil qui coupe automatiquement un circuit en cas de surcharge ou de court-circuit.'],
  ['Différentiel','Appareil qui coupe dès qu\'il détecte une fuite de courant (30 mA pour protéger les personnes).'],
  ['Court-circuit','Contact direct entre phase et neutre : courant énorme, risque d\'incendie.'],
  ['Surcharge','Trop d\'appareils sur un circuit : le courant dépasse ce que le câble supporte.'],
  ['Habilitation','Autorisation donnée par l\'employeur pour travailler sur ou près d\'installations électriques.'],
  ['Consignation','Ensemble des étapes pour mettre une installation hors tension en toute sécurité.'],
  ['VAT','Vérificateur d\'Absence de Tension : appareil obligatoire avant toute intervention.'],
  ['EPI','Équipements de Protection Individuelle : gants isolants, écran facial, chaussures…'],
  ['Va-et-vient','Montage où 2 interrupteurs commandent le même point lumineux.'],
  ['Télérupteur','Relais commandé par plusieurs boutons poussoirs pour un même éclairage.'],
  ['Multimètre','Appareil de mesure : tension, intensité, résistance, continuité.'],
  ['NF C 15-100','Norme qui fixe les règles des installations électriques basse tension dans les logements.'],
  ['NF C 18-510','Norme qui encadre la prévention du risque électrique et l\'habilitation.'],
  ['TGBT','Tableau Général Basse Tension : tableau principal d\'un bâtiment.']
 ],
 quiz:[
  ['bases','Quelle est l\'unité de la tension ?',['Le volt (V)','L\'ampère (A)','Le watt (W)','L\'ohm (Ω)'],0,'La tension se mesure en volts.'],
  ['bases','Un radiateur de 2 300 W en 230 V consomme…',['10 A','23 A','5 A','100 A'],0,'I = P ÷ U = 2300 ÷ 230 = 10 A.'],
  ['bases','La loi d\'Ohm s\'écrit…',['U = R × I','P = R × I','I = U × R','R = U × I'],0,'U = R × I.'],
  ['bases','La tension du réseau domestique en France est…',['230 V','110 V','400 V','12 V'],0,'230 V monophasé, 50 Hz.'],
  ['bases','En triphasé, la tension entre deux phases est…',['400 V','230 V','690 V','110 V'],0,'400 V entre phases, 230 V entre phase et neutre.'],
  ['secu','Quelle norme encadre l\'habilitation électrique ?',['NF C 18-510','NF C 15-100','ISO 9001','NF EN 60204'],0,'La NF C 18-510 encadre la prévention du risque électrique.'],
  ['secu','Quelle habilitation pour un dépannage en basse tension ?',['BR','B0','H0','BC'],0,'BR = interventions générales en BT.'],
  ['secu','Après avoir séparé et condamné, on…',['Identifie l\'ouvrage','Coupe le neutre','Retire ses gants','Remet sous tension'],0,'Ordre : séparer, condamner, identifier, VAT, MALT-CC.'],
  ['secu','Le domaine BT en alternatif va de…',['50 V à 1 000 V','0 à 50 V','1 000 à 5 000 V','230 à 400 V'],0,'Basse tension : 50 V à 1 000 V en alternatif.'],
  ['secu','Que veut dire EPI ?',['Équipement de Protection Individuelle','Élément de Protection Intérieure','Essai de Prise Isolée','Équipement Pour Installation'],0,'Gants isolants, écran facial, etc.'],
  ['protec','Qui protège les personnes contre les fuites de courant ?',['Le différentiel 30 mA','Le disjoncteur divisionnaire','Le fusible','Le télérupteur'],0,'Le différentiel détecte la fuite et coupe.'],
  ['protec','Le disjoncteur divisionnaire protège surtout…',['Les câbles','Les personnes','Le compteur','La prise de terre'],0,'Il protège les câbles des surcharges et courts-circuits.'],
  ['protec','Section et calibre pour un circuit d\'éclairage ?',['1,5 mm² / 16 A','2,5 mm² / 32 A','6 mm² / 32 A','1 mm² / 10 A'],0,'Éclairage : 1,5 mm² protégé en 16 A.'],
  ['protec','Section pour une plaque de cuisson ?',['6 mm²','1,5 mm²','2,5 mm²','4 mm²'],0,'Plaque de cuisson : 6 mm² en 32 A.'],
  ['protec','Quelle couleur pour le neutre ?',['Bleu','Vert/jaune','Rouge','Noir'],0,'Le neutre est toujours bleu.'],
  ['protec','Le fil vert/jaune est…',['La terre','Le neutre','Une phase','Au choix'],0,'Vert/jaune = terre, uniquement.'],
  ['schemas','2 interrupteurs pour une même lampe, c\'est un…',['Va-et-vient','Simple allumage','Double allumage','Télérupteur'],0,'Va-et-vient : couloir, escalier.'],
  ['schemas','Pour 4 points de commande d\'un même éclairage on utilise…',['Un télérupteur','Un va-et-vient','Un simple allumage','Un différentiel'],0,'À partir de 3 points : télérupteur.'],
  ['schemas','L\'interrupteur doit couper…',['La phase','Le neutre','La terre','Les deux'],0,'On coupe toujours la phase.'],
  ['mesure','Un voltmètre se branche…',['En parallèle','En série','Autour du câble','Sur la terre'],0,'Le voltmètre se branche aux bornes, en parallèle.'],
  ['mesure','Un ampèremètre se branche…',['En série','En parallèle','Sur le neutre seul','Hors tension'],0,'L\'ampèremètre est dans le circuit, en série.'],
  ['mesure','La pince ampèremétrique se place autour…',['D\'un seul conducteur','De tout le câble','Du disjoncteur','De la prise'],0,'Autour du câble entier, les courants s\'annulent : la pince affiche 0.'],
  ['mesure','Avant et après la VAT, on doit…',['Tester le VAT','Couper le différentiel','Mesurer la terre','Changer les piles'],0,'On vérifie que le VAT fonctionne avant et après.']
 ],
 vf:[
  ['Le fil vert/jaune peut servir de phase si on manque de fil.',false,'Jamais : vert/jaune = terre uniquement.'],
  ['Un différentiel 30 mA protège les personnes.',true,'C\'est son rôle principal.'],
  ['L\'interrupteur coupe le neutre.',false,'Il coupe la phase.'],
  ['P = U × I.',true,'Puissance = tension × intensité.'],
  ['Un multimètre peut remplacer un VAT.',false,'Le VAT est obligatoire pour la vérification d\'absence de tension.'],
  ['Le neutre est bleu.',true,'Toujours bleu.'],
  ['Un ampèremètre se branche en parallèle.',false,'En série.'],
  ['La plaque de cuisson se câble en 6 mm².',true,'6 mm² protégé en 32 A.'],
  ['L\'habilitation B0 permet de faire du dépannage électrique.',false,'B0 = non-électricien. Le dépannage, c\'est BR.'],
  ['En France, la fréquence du réseau est de 50 Hz.',true,'230 V – 50 Hz.'],
  ['Le disjoncteur protège les câbles contre les surcharges.',true,'Surcharges et courts-circuits.'],
  ['La TBT va jusqu\'à 50 V en alternatif.',true,'Très Basse Tension : ≤ 50 V AC.'],
  ['Un va-et-vient utilise 3 interrupteurs.',false,'2 interrupteurs. Au-delà : télérupteur.'],
  ['Il faut tester le VAT avant et après la mesure.',true,'Pour être sûr qu\'il marche.']
 ],
 ordre:[
  {t:'La consignation électrique',s:['Séparer','Condamner','Identifier','Vérifier l\'absence de tension','Mettre à la terre et en court-circuit']},
  {t:'Remplacer une prise de courant',s:['Couper le disjoncteur du circuit','Vérifier l\'absence de tension','Démonter l\'ancienne prise','Raccorder phase, neutre et terre','Fixer la nouvelle prise','Remettre sous tension et tester']}
 ]
};

/* =====================================================================
   FICHES WIKI — explications détaillées, exemples, schémas animés, mini-questions.
   Une entrée par module ; s[i] complète la partie i du module.
   ===================================================================== */
C.fiches={
 bases:{
  intro:'Avant de toucher un fil, un électricien doit comprendre ce qui se passe dans un câble. Quatre grandeurs suffisent à tout expliquer : la tension, l\'intensité, la résistance et la puissance. Avec elles, tu sauras dimensionner un circuit, choisir une protection et comprendre pourquoi un disjoncteur saute.',
  s:[
   {p:'Le plus simple est d\'imaginer l\'électricité comme de l\'<b>eau dans un tuyau</b>. La <b>tension</b> est la pression de l\'eau, l\'<b>intensité</b> est le débit, la <b>résistance</b> est un rétrécissement du tuyau qui freine l\'eau. La <b>puissance</b>, c\'est le travail que l\'eau fournit en tournant une roue.',
    fig:{type:'svg',legende:'Le courant (I) circule en boucle : il sort de la source (U), traverse le récepteur (R) et revient.',svg:'<svg viewBox="0 0 240 130"><rect x="30" y="20" width="180" height="90" rx="12" fill="none" stroke="#3a4380" stroke-width="7"/><rect x="30" y="20" width="180" height="90" rx="12" fill="none" stroke="var(--pri)" stroke-width="3" stroke-dasharray="6 10" class="flow"/><rect x="10" y="45" width="40" height="40" rx="8" fill="var(--card)" stroke="var(--pri)" stroke-width="2"/><text x="30" y="70" font-size="14" text-anchor="middle" fill="#fff" font-weight="900">U</text><circle cx="210" cy="65" r="20" fill="var(--pri)" class="glow"/><text x="210" y="70" font-size="14" text-anchor="middle" fill="#10142a" font-weight="900">R</text><text x="120" y="13" font-size="11" text-anchor="middle" fill="var(--mut)" font-weight="700">I → le courant circule</text><text x="120" y="126" font-size="10" text-anchor="middle" fill="var(--mut)">la lampe consomme une puissance P</text></svg>'},
    ex:'Une prise de ta maison délivre <b>230 V</b>. Si tu branches une bouilloire, il circule environ <b>9 A</b> dans le câble. Si tu branches un chargeur de téléphone, il en circule moins de 0,1 A : même tension, intensité très différente.',
    q:['Le débit d\'eau dans un tuyau correspond à…',['L\'intensité','La tension','La résistance','La puissance'],0,'L\'intensité, c\'est la quantité de courant qui passe, comme un débit.']},
   {p:'Deux formules suffisent pour 90 % des calculs du métier. La <b>loi d\'Ohm</b> relie tension, résistance et intensité. La <b>formule de la puissance</b> permet de savoir combien d\'ampères un appareil va tirer, donc quel câble et quel disjoncteur choisir.',
    fig:{type:'flux',legende:'Retrouver l\'intensité d\'un radiateur avant de choisir le câble',etapes:[['Puissance du radiateur','2 300 W'],['Tension du réseau','230 V'],['I = P ÷ U','2 300 ÷ 230'],['Intensité','10 A']]},
    att:'Ne confonds pas <b>P = U × I</b> (puissance) et <b>U = R × I</b> (loi d\'Ohm). Astuce : « <b>P</b>apa <b>U</b>rbain » pour P = U × I, et « <b>U</b>ri <b>R</b>essemble à <b>I</b>sa » pour U = R × I.',
    q:['Un four de 3 450 W en 230 V consomme…',['15 A','10 A','20 A','34,5 A'],0,'I = 3 450 ÷ 230 = 15 A.']},
   {p:'En France, le réseau des logements est en <b>monophasé 230 V</b> : une phase et un neutre. Les ateliers et les gros équipements sont souvent en <b>triphasé</b> : trois phases, avec 400 V entre deux phases. La fréquence est de <b>50 Hz</b> : le courant change de sens 100 fois par seconde.',
    fig:{type:'chiffres',items:[[230,'V','monophasé (logement)'],[400,'V','triphasé, entre 2 phases'],[50,'Hz','fréquence du réseau']]},
    info:'Aux États-Unis, le réseau domestique est en 120 V et 60 Hz. C\'est pour ça qu\'un appareil américain a besoin d\'un transformateur en France.'}
  ],
  retenir:['U en volts, I en ampères, R en ohms, P en watts.','<b>U = R × I</b> et <b>P = U × I</b>.','Logement : 230 V monophasé, 50 Hz. Triphasé : 400 V entre phases.']
 },
 secu:{
  intro:'L\'électricité ne se voit pas, ne s\'entend pas et ne prévient pas. Chaque année, des électriciens sont blessés ou tués parce qu\'ils pensaient qu\'un circuit était coupé. La sécurité n\'est pas une option : elle est encadrée par la norme NF C 18-510 et c\'est la première chose qu\'on vérifie à l\'examen.',
  s:[
   {p:'Plus la tension est élevée, plus le danger est grand et plus les règles sont strictes. On classe donc les installations en <b>domaines de tension</b>. Dans le bâtiment, tu travailleras presque toujours en <b>BT</b> (basse tension).',
    fig:{type:'barres',legende:'Limites hautes des domaines (en alternatif)',items:[['TBT — très basse tension',50,'V','#2ed47a'],['BT — basse tension',1000,'V','#ffc83d']]},
    att:'« Basse tension » ne veut pas dire « sans danger » : le 230 V d\'une prise peut tuer. Le danger commence dès 50 V en alternatif dans un local sec.',
    q:['Une installation en 400 V est en…',['BT','TBT','HTA','HTB'],0,'BT = de 50 V à 1 000 V en alternatif.']},
   {p:'L\'<b>habilitation</b> est une autorisation donnée par l\'<b>employeur</b> après une formation. Elle dit ce que tu as le droit de faire. Le code se lit comme une carte d\'identité : une lettre pour le domaine de tension (B = basse tension), puis un chiffre ou une lettre pour le type d\'opération.',
    ex:'Un plombier qui perce un mur près d\'un tableau électrique a besoin d\'un <b>B0</b>. Un électricien qui dépanne une prise a besoin d\'un <b>BR</b>. Celui qui coupe et sécurise un circuit avant les travaux doit être <b>BC</b>.',
    info:'L\'habilitation n\'est pas un diplôme : elle est valable chez un employeur donné, et un recyclage est recommandé tous les 3 ans.',
    q:['Qui délivre l\'habilitation électrique ?',['L\'employeur','L\'État','EDF','Le centre de formation'],0,'Le centre forme, mais c\'est l\'employeur qui habilite.']},
   {p:'La <b>consignation</b> est la procédure qui rend une installation sûre avant d\'y travailler. Les 5 étapes se font <b>toujours dans le même ordre</b>. En sauter une, c\'est prendre le risque que quelqu\'un remette le courant pendant que tu as les mains dans le tableau.',
    fig:{type:'flux',legende:'Les 5 étapes de la consignation',etapes:['1. Séparer de la source','2. Condamner (cadenas)','3. Identifier l\'ouvrage','4. Vérifier l\'absence de tension (VAT)','5. Mise à la terre et en court-circuit']},
    att:'Couper le disjoncteur ne suffit pas : sans <b>cadenas</b> (condamnation), quelqu\'un peut le réarmer. Sans <b>VAT</b>, tu ne sais pas si tu as coupé le bon circuit.',
    q:['Quelle étape vient juste après « condamner » ?',['Identifier','Vérifier l\'absence de tension','Séparer','Mettre à la terre'],0,'Séparer, condamner, identifier, VAT, MALT-CC.']}
  ],
  retenir:['TBT ≤ 50 V · BT de 50 à 1 000 V · HT au-delà.','L\'habilitation est délivrée par l\'employeur (B0, BR, BC, B1, B2).','Consignation : séparer, condamner, identifier, VAT, mise à la terre.']
 },
 protec:{
  intro:'Un tableau électrique, c\'est le poste de garde de la maison. Chaque appareil qu\'il contient a un rôle précis : protéger les câbles contre l\'incendie, ou protéger les personnes contre l\'électrocution. Savoir qui protège quoi, c\'est la base du métier.',
  s:[
   {p:'Retiens la différence en une phrase : le <b>disjoncteur protège les câbles</b>, le <b>différentiel protège les personnes</b>. Le disjoncteur coupe quand le courant est trop fort (le câble chaufferait). Le différentiel coupe quand une partie du courant « s\'échappe », par exemple à travers une personne.',
    fig:{type:'cycle',centre:'Qui protège quoi ?',etapes:[['Disjoncteur<br>→ câbles','#ffc83d'],['Surcharge ou court-circuit','#ff8a3d'],['Différentiel 30 mA<br>→ personnes','#2ed47a'],['Fuite de courant','#3db5ff']]},
    ex:'Tu branches un radiateur, un four et un lave-linge sur la même ligne : le <b>disjoncteur</b> saute (surcharge). Un sèche-cheveux tombe dans le lavabo : le <b>différentiel</b> coupe en quelques millisecondes.',
    q:['Une personne touche un fil sous tension. Qui coupe ?',['Le différentiel 30 mA','Le disjoncteur divisionnaire','Le télérupteur','Personne'],0,'Le courant passe dans la personne vers la terre : c\'est une fuite, le différentiel la détecte.']},
   {p:'La norme <b>NF C 15-100</b> fixe la section des fils et le calibre du disjoncteur pour chaque type de circuit. La règle : plus le circuit tire d\'ampères, plus le fil est gros, et le disjoncteur doit toujours couper <b>avant</b> que le fil chauffe.',
    fig:{type:'barres',legende:'Calibre du disjoncteur selon le circuit',items:[['Éclairage — 1,5 mm²',16,'A'],['Prises — 2,5 mm²',20,'A'],['Plaque de cuisson — 6 mm²',32,'A']]},
    att:'Ne jamais mettre un disjoncteur plus gros que prévu « pour qu\'il arrête de sauter » : le câble chaufferait sans être protégé. C\'est une cause classique d\'incendie.',
    q:['Un circuit de prises en 2,5 mm² se protège en…',['20 A','32 A','10 A','40 A'],0,'2,5 mm² → 20 A.']},
   {p:'Les couleurs des fils ne sont pas décoratives : elles permettent à n\'importe quel électricien de comprendre une installation. Le <b>vert/jaune</b> est réservé à la terre, le <b>bleu</b> au neutre. Les autres couleurs sont pour la phase.',
    info:'Le fil de terre ne transporte normalement aucun courant. Il ne sert qu\'en cas de défaut, pour emmener la fuite vers le sol et faire déclencher le différentiel.',
    q:['Un fil marron est…',['Une phase','Le neutre','La terre','Interdit'],0,'Rouge, marron, noir… = phase.']}
  ],
  retenir:['Disjoncteur → câbles ; différentiel 30 mA → personnes.','Éclairage 1,5 mm² / 16 A · Prises 2,5 mm² / 20 A · Cuisson 6 mm² / 32 A.','Vert/jaune = terre, bleu = neutre, autres = phase.']
 },
 schemas:{
  intro:'Allumer une lampe paraît simple, mais selon le nombre d\'interrupteurs, on n\'utilise pas le même montage. Ce module t\'apprend à choisir le bon schéma pour chaque pièce.',
  s:[
   {p:'Le choix dépend du <b>nombre d\'endroits</b> d\'où l\'on veut commander la lumière. Un seul endroit : simple allumage. Deux endroits (en haut et en bas d\'un escalier) : va-et-vient. Trois endroits ou plus (long couloir) : télérupteur avec boutons poussoirs.',
    fig:{type:'barres',legende:'Nombre de points de commande',items:[['Simple allumage',1,'point'],['Va-et-vient',2,'points'],['Télérupteur',3,'points et +']]},
    ex:'Une chambre : simple allumage. Un escalier : va-et-vient. Un couloir d\'immeuble avec 6 portes : télérupteur ou minuterie.',
    q:['Une lampe commandée de 3 endroits : quel montage ?',['Télérupteur','Va-et-vient','Simple allumage','Double allumage'],0,'Au-delà de 2 points : télérupteur.']},
   {p:'L\'interrupteur doit couper la <b>phase</b>. Si on coupe le neutre, la lampe s\'éteint bien, mais la douille reste <b>sous tension</b> : quelqu\'un qui change l\'ampoule peut s\'électrocuter.',
    att:'Une lampe éteinte n\'est pas forcément hors tension. Avant de toucher une douille, on coupe au tableau et on vérifie au VAT.',
    q:['Pourquoi couper la phase et pas le neutre ?',['Pour que la douille soit hors tension','Pour économiser du fil','Pour que la lampe éclaire mieux','C\'est pareil'],0,'Coupure du neutre = douille toujours sous tension.']}
  ],
  retenir:['1 point → simple allumage · 2 points → va-et-vient · 3 et + → télérupteur.','L\'interrupteur coupe toujours la phase.']
 },
 mesure:{
  intro:'Un électricien passe une grande partie de son temps à mesurer : pour trouver une panne, pour contrôler son travail et surtout pour vérifier qu\'il peut travailler en sécurité. Mal brancher un appareil de mesure peut le détruire… ou te blesser.',
  s:[
   {p:'Le <b>voltmètre</b> mesure une différence entre deux points : on le branche <b>aux bornes</b>, en parallèle. L\'<b>ampèremètre</b> mesure ce qui passe dans le fil : il doit être <b>dans le circuit</b>, en série. La <b>pince ampèremétrique</b> évite d\'ouvrir le circuit : elle mesure le champ magnétique autour d\'un seul fil.',
    att:'Un multimètre réglé en ampèremètre et branché en parallèle sur une prise crée un <b>court-circuit</b> : le fusible de l\'appareil saute, ou pire.',
    q:['Pour mesurer l\'intensité sans couper le circuit, on utilise…',['Une pince ampèremétrique','Un voltmètre','Un VAT','Un ohmmètre'],0,'La pince se referme autour d\'un seul conducteur.']},
   {p:'Le <b>VAT</b> (vérificateur d\'absence de tension) est l\'outil de sécurité n°1. On le teste sur une source sous tension <b>avant</b> la mesure (pour être sûr qu\'il marche), on vérifie l\'absence de tension, puis on le reteste <b>après</b>.',
    fig:{type:'flux',legende:'Utiliser le VAT',etapes:['Tester le VAT sur une source connue','Vérifier l\'absence de tension sur l\'ouvrage','Retester le VAT sur la source connue','Je peux travailler']},
    info:'Un VAT n\'a pas de bouton « marche » qu\'on pourrait oublier : il est conçu pour être fiable et ne demande aucun réglage, contrairement au multimètre.',
    q:['Pourquoi retester le VAT après la vérification ?',['Pour être sûr qu\'il n\'est pas tombé en panne pendant la mesure','Pour recharger ses piles','Pour mesurer la terre','Ce n\'est pas utile'],0,'S\'il est tombé en panne, il aurait affiché « pas de tension » à tort.']}
  ],
  retenir:['Voltmètre en parallèle, ampèremètre en série, pince autour d\'un seul fil.','VAT : tester, vérifier, retester.']
 }
};
