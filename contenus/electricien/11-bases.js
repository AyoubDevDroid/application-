/* NIVEAU 1 — Les bases de l'électricité */
C.modules.push({id:"bases",n:1,i:"🔌",t:"Les bases de l'électricité",d:"Tension, courant, résistance, puissance, énergie",
 s:[{h:"Les 4 grandeurs",l:["<b>Tension (U)</b> en volts (V) : la « pression » qui pousse le courant.","<b>Intensité (I)</b> en ampères (A) : la quantité de courant qui circule.","<b>Résistance (R)</b> en ohms (Ω) : ce qui freine le courant.","<b>Puissance (P)</b> en watts (W) : l'énergie consommée par seconde."]},
    {h:"Les formules à connaître",l:["<b>Loi d'Ohm : U = R × I</b>","<b>Puissance : P = U × I</b>","Exemple : un radiateur de 2 300 W en 230 V consomme I = 2 300 ÷ 230 = <b>10 A</b>."]},
    {h:"Série et parallèle",l:["<b>En série</b> : les récepteurs sont à la suite, le même courant les traverse. Si l'un est coupé, tout s'arrête.","<b>En parallèle</b> : chaque récepteur reçoit la même tension. C'est le montage de toutes les prises et lampes d'un logement."]},
    {h:"Le réseau en France",l:["Courant <b>alternatif</b>, fréquence <b>50 Hz</b>.","Monophasé : <b>230 V</b> entre phase et neutre (logements).","Triphasé : <b>400 V</b> entre deux phases (gros équipements, ateliers)."]},
    {h:"L'énergie et la facture",l:["<b>Énergie = Puissance × temps</b> : E (kWh) = P (kW) × t (h).","Le compteur compte des <b>kilowattheures (kWh)</b> : c'est ce que le client paie."]}],
 k:["Tension","Intensité","Résistance","Puissance","Loi d'Ohm","Kilowattheure"]});

C.fiches.bases={
 intro:"Avant de toucher un fil, un électricien doit comprendre ce qui se passe dans un câble. Quatre grandeurs suffisent à tout expliquer : la tension, l'intensité, la résistance et la puissance. Avec elles, tu sauras dimensionner un circuit, choisir une protection et comprendre pourquoi un disjoncteur saute.",
 s:[
  {p:"Le plus simple est d'imaginer l'électricité comme de l'<b>eau dans un tuyau</b>. La <b>tension</b> est la pression de l'eau, l'<b>intensité</b> est le débit, la <b>résistance</b> est un rétrécissement du tuyau qui freine l'eau. La <b>puissance</b>, c'est le travail que l'eau fournit en tournant une roue.",
   fig:{type:"svg",legende:"Le courant (I) circule en boucle : il sort de la source (U), traverse le récepteur (R) et revient.",svg:"<svg viewBox='0 0 240 130'><rect x='30' y='20' width='180' height='90' rx='12' fill='none' stroke='#3a4380' stroke-width='7'/><rect x='30' y='20' width='180' height='90' rx='12' fill='none' stroke='var(--pri)' stroke-width='3' stroke-dasharray='6 10' class='flow'/><rect x='10' y='45' width='40' height='40' rx='8' fill='var(--card)' stroke='var(--pri)' stroke-width='2'/><text x='30' y='70' font-size='14' text-anchor='middle' fill='#fff' font-weight='900'>U</text><circle cx='210' cy='65' r='20' fill='var(--pri)' class='glow'/><text x='210' y='70' font-size='14' text-anchor='middle' fill='#10142a' font-weight='900'>R</text><text x='120' y='13' font-size='11' text-anchor='middle' fill='var(--mut)' font-weight='700'>I → le courant circule</text><text x='120' y='126' font-size='10' text-anchor='middle' fill='var(--mut)'>la lampe consomme une puissance P</text></svg>"},
   ex:"Une prise de ta maison délivre <b>230 V</b>. Si tu branches une bouilloire, il circule environ <b>9 A</b> dans le câble. Si tu branches un chargeur de téléphone, il en circule moins de 0,1 A : même tension, intensité très différente.",
   q:["Le débit d'eau dans un tuyau correspond à…",["L'intensité","La tension","La résistance","La puissance"],0,"L'intensité, c'est la quantité de courant qui passe, comme un débit."]},
  {p:"Deux formules suffisent pour 90 % des calculs du métier. La <b>loi d'Ohm</b> relie tension, résistance et intensité. La <b>formule de la puissance</b> permet de savoir combien d'ampères un appareil va tirer, donc quel câble et quel disjoncteur choisir. En les combinant, on obtient aussi <b>P = R × I²</b> : c'est pour ça qu'une mauvaise connexion (une petite résistance en trop) chauffe autant quand le courant est fort.",
   fig:{type:"flux",legende:"Retrouver l'intensité d'un radiateur avant de choisir le câble",etapes:[["Puissance du radiateur","2 300 W"],["Tension du réseau","230 V"],["I = P ÷ U","2 300 ÷ 230"],["Intensité","10 A"]]},
   att:"Ne confonds pas <b>P = U × I</b> (puissance) et <b>U = R × I</b> (loi d'Ohm). Astuce : on « Pui-se » pour P = U × I, et « URI » se lit d'un trait pour U = R × I.",
   q:["Un four de 3 450 W en 230 V consomme…",["15 A","10 A","20 A","34,5 A"],0,"I = 3 450 ÷ 230 = 15 A."]},
  {p:"Dans une maison, toutes les prises et toutes les lampes sont branchées <b>en parallèle</b> : chacune reçoit les 230 V, et chacune fonctionne même si on débranche les autres. Les courants s'additionnent dans le câble qui les alimente : c'est pour ça qu'un circuit chargé de trop d'appareils finit par faire déclencher son disjoncteur. Le montage <b>en série</b> existe aussi : un interrupteur est toujours en série avec la lampe qu'il commande.",
   fig:{type:"svg",legende:"En parallèle, chaque lampe reçoit 230 V et les courants s'additionnent.",svg:"<svg viewBox='0 0 260 130'><path d='M20 25H240M20 105H240' stroke='#3a4380' stroke-width='6' fill='none'/><path d='M20 25H240M20 105H240' stroke='var(--pri)' stroke-width='2.5' stroke-dasharray='6 8' class='flow' fill='none'/><text x='8' y='29' fill='#fff' font-size='11' font-weight='900'>L</text><text x='8' y='109' fill='#fff' font-size='11' font-weight='900'>N</text><g><path d='M80 25V50M80 80V105M150 25V50M150 80V105M220 25V50M220 80V105' stroke='var(--pri)' stroke-width='2.5'/><circle cx='80' cy='65' r='15' fill='var(--pri)' class='glow'/><circle cx='150' cy='65' r='15' fill='var(--pri)' class='glow'/><circle cx='220' cy='65' r='15' fill='var(--pri)' class='glow'/></g><text x='80' y='69' text-anchor='middle' font-size='10' font-weight='900' fill='#10142a'>230 V</text><text x='150' y='69' text-anchor='middle' font-size='10' font-weight='900' fill='#10142a'>230 V</text><text x='220' y='69' text-anchor='middle' font-size='10' font-weight='900' fill='#10142a'>230 V</text><text x='45' y='18' fill='var(--mut)' font-size='10' font-weight='700'>I total = I1 + I2 + I3</text></svg>"},
   ex:"3 radiateurs de 1 000 W branchés sur le même circuit : chacun tire 1 000 ÷ 230 ≈ 4,3 A, le câble en transporte 13 A au total.",
   q:["Deux lampes en parallèle sur le 230 V : si l'une grille…",["L'autre reste allumée","Les deux s'éteignent","L'autre brille deux fois plus","Le disjoncteur saute"],0,"En parallèle, chaque récepteur est indépendant : il garde ses 230 V."]},
  {p:"En France, le réseau des logements est en <b>monophasé 230 V</b> : une phase et un neutre. Les ateliers et les gros équipements sont souvent en <b>triphasé</b> : trois phases, avec 400 V entre deux phases. Le courant est <b>alternatif</b> : il change de sens 100 fois par seconde, c'est-à-dire 50 aller-retour (<b>50 Hz</b>). Les piles, les batteries et les panneaux solaires, eux, donnent du courant <b>continu</b>.",
   fig:{type:"chiffres",items:[[230,"V","monophasé (logement)"],[400,"V","triphasé, entre 2 phases"],[50,"Hz","fréquence du réseau"]]},
   info:"Aux États-Unis, le réseau domestique est en 120 V et 60 Hz. C'est pour ça qu'un appareil américain a besoin d'un transformateur en France.",
   q:["Le courant d'une pile est…",["Continu","Alternatif","Triphasé","À 50 Hz"],0,"Une pile ou une batterie fournit du courant continu : il circule toujours dans le même sens."]},
  {p:"Le client ne paie pas des watts, il paie de l'<b>énergie</b> : la puissance multipliée par le temps d'utilisation. L'unité de la facture est le <b>kilowattheure (kWh)</b> : 1 000 W pendant 1 heure. Savoir faire ce calcul te permet d'expliquer une facture, de comparer deux appareils ou de conseiller le client (LED, programmation du chauffage…).",
   fig:{type:"flux",legende:"Ce que coûte un radiateur de 1 500 W allumé 8 h (prix d'exemple : 0,25 € le kWh)",etapes:[["Puissance","1 500 W = 1,5 kW"],["Durée","8 h"],["Énergie = 1,5 × 8","12 kWh"],["Coût = 12 × 0,25","3 €"]]},
   info:"Une ampoule LED de 8 W éclaire comme une ancienne ampoule à incandescence de 60 W : pour la même lumière, elle consomme environ 7 fois moins d'énergie.",
   q:["Un appareil de 2 000 W qui fonctionne 3 heures consomme…",["6 kWh","600 kWh","2 kWh","0,6 kWh"],0,"E = 2 kW × 3 h = 6 kWh."]}
 ],
 retenir:["U en volts, I en ampères, R en ohms, P en watts.","<b>U = R × I</b> et <b>P = U × I</b>.","Dans un logement, tout est en parallèle : les courants s'additionnent dans le câble.","Logement : 230 V monophasé, 50 Hz. Triphasé : 400 V entre phases.","Énergie (kWh) = puissance (kW) × temps (h)."]
};

C.lexique.push(
 ["Tension","Différence de potentiel entre deux points, en volts (V). Symbole U."],
 ["Intensité","Quantité de courant qui circule, en ampères (A). Symbole I."],
 ["Résistance","Opposition au passage du courant, en ohms (Ω). Symbole R."],
 ["Puissance","Énergie consommée par seconde, en watts (W). P = U × I."],
 ["Loi d'Ohm","U = R × I : la tension égale la résistance multipliée par l'intensité."],
 ["Kilowattheure","Unité d'énergie facturée (kWh) : 1 000 W pendant 1 heure."],
 ["Courant alternatif","Courant qui change de sens périodiquement (50 fois par seconde en France). C'est celui du réseau."],
 ["Courant continu","Courant qui circule toujours dans le même sens (piles, batteries, panneaux solaires)."],
 ["Fréquence","Nombre de cycles par seconde du courant alternatif, en hertz (Hz). 50 Hz en France."]
);

C.quiz.push(
 ["bases","Quelle est l'unité de la tension ?",["Le volt (V)","L'ampère (A)","Le watt (W)","L'ohm (Ω)"],0,"La tension se mesure en volts."],
 ["bases","Un radiateur de 2 300 W en 230 V consomme…",["10 A","23 A","5 A","100 A"],0,"I = P ÷ U = 2 300 ÷ 230 = 10 A."],
 ["bases","La loi d'Ohm s'écrit…",["U = R × I","P = R × I","I = U × R","R = U × I"],0,"U = R × I."],
 ["bases","La tension du réseau domestique en France est…",["230 V","110 V","400 V","12 V"],0,"230 V monophasé, 50 Hz."],
 ["bases","En triphasé, la tension entre deux phases est…",["400 V","230 V","690 V","110 V"],0,"400 V entre phases, 230 V entre phase et neutre."],
 ["bases","Quelle est l'unité de la résistance ?",["L'ohm (Ω)","Le volt (V)","Le hertz (Hz)","Le watt (W)"],0,"La résistance se mesure en ohms."],
 ["bases","Dans un logement, les prises sont branchées…",["En parallèle","En série","En étoile","Au hasard"],0,"En parallèle : chaque prise reçoit 230 V et fonctionne indépendamment des autres."],
 ["bases","Quelle est la fréquence du réseau électrique en France ?",["50 Hz","60 Hz","230 Hz","100 Hz"],0,"50 Hz : le courant fait 50 aller-retour par seconde."],
 ["bases","Une résistance de 46 Ω est alimentée en 230 V. Le courant vaut…",["5 A","10 A","0,2 A","276 A"],0,"I = U ÷ R = 230 ÷ 46 = 5 A."],
 ["bases","Ce que le client paie sur sa facture d'électricité, ce sont…",["Des kilowattheures (kWh)","Des kilowatts (kW)","Des ampères","Des volts"],0,"La facture compte l'énergie consommée, en kWh."],
 ["bases","Pourquoi une connexion mal serrée chauffe-t-elle ?",["Elle ajoute une résistance traversée par le courant : P = R × I²","Elle augmente la tension","Elle crée du courant continu","Elle diminue l'intensité"],0,"Une petite résistance parcourue par un fort courant dissipe de la chaleur (P = R × I²)."]
);

C.vf.push(
 ["P = U × I.",true,"Puissance = tension × intensité."],
 ["En France, la fréquence du réseau est de 50 Hz.",true,"230 V – 50 Hz."],
 ["Un interrupteur est branché en parallèle avec la lampe qu'il commande.",false,"Il est en série : il ouvre ou ferme le chemin du courant."],
 ["Une pile fournit du courant alternatif.",false,"Une pile fournit du courant continu."],
 ["Plus on branche d'appareils sur un circuit, plus le courant dans le câble augmente.",true,"Les récepteurs sont en parallèle : leurs courants s'additionnent."],
 ["1 kWh, c'est 1 000 W pendant une heure.",true,"Kilo = 1 000, wattheure = watt pendant une heure."]
);
