/* JEU + WIKI — Symboles électriques des schémas de commande frigorifiques (cadre 100 × 60, traits en currentColor). */
C.symboles=[
 ["Contact à fermeture (NO)","<path d='M5 40H35L62 24M65 40H95'/>","Ouvert au repos, il se ferme quand on l'actionne."],
 ["Contact à ouverture (NF / NC)","<path d='M5 40H35L72 30M65 40H95M65 40V25'/>","Fermé au repos, il s'ouvre quand on l'actionne."],
 ["Bobine de contacteur ou de relais","<rect x='32' y='18' width='36' height='24'/><path d='M50 2V18M50 42V58'/><text class='t' x='80' y='17' style='font-size:11px'>A1</text><text class='t' x='80' y='55' style='font-size:11px'>A2</text>","Rectangle raccordé par ses grands côtés, bornes A1 et A2."],
 ["Contact de puissance d'un contacteur","<path d='M5 40H35L60 22M65 40H95'/><path d='M65 40A5 5 0 0 1 65 30'/>","Contact avec un petit demi-cercle sur la partie fixe."],
 ["Pressostat","<path d='M5 46H35L62 30M65 46H95'/><path d='M49 38V20' style='stroke-dasharray:4 3'/><rect x='38' y='2' width='22' height='18'/><text class='t' x='49' y='16' style='font-size:13px'>P</text>","Contact commandé par la pression (pressostat HP ou BP)."],
 ["Thermostat","<path d='M5 46H35L62 30M65 46H95'/><path d='M49 38V20' style='stroke-dasharray:4 3'/><rect x='38' y='2' width='22' height='18'/><text class='t' x='49' y='16' style='font-size:13px'>θ</text>","Contact commandé par la température."],
 ["Disjoncteur","<path d='M5 40H35L60 22M65 40H95M60 35L70 45M70 35L60 45'/>","Contact avec une croix sur la partie fixe."],
 ["Fusible","<rect x='30' y='31' width='40' height='18'/><path d='M5 40H95'/>","Rectangle traversé par le conducteur."],
 ["Relais thermique","<rect x='28' y='16' width='44' height='28'/><path d='M5 30H36V22H50V38H64V30H95'/>","Protection contre la surcharge du moteur."],
 ["Moteur triphasé","<path d='M50 2V8'/><circle cx='50' cy='30' r='22'/><text class='t' x='50' y='29'>M</text><text class='t' x='50' y='45' style='font-size:11px'>3~</text>","Cercle avec M et 3~."],
 ["Moteur monophasé","<path d='M50 2V8'/><circle cx='50' cy='30' r='22'/><text class='t' x='50' y='29'>M</text><text class='t' x='50' y='45' style='font-size:11px'>1~</text>","Cercle avec M et 1~ : compresseur ou ventilateur monophasé."],
 ["Condensateur","<path d='M5 30H45M55 30H95M45 14V46M55 14V46'/>","Deux plaques parallèles."],
 ["Résistance (dégivrage, carter)","<rect x='30' y='31' width='40' height='18'/><path d='M5 40H30M70 40H95'/>","Rectangle sans trait intérieur : résistance chauffante."],
 ["Terre","<path d='M50 4V30M30 30H70M37 40H63M44 50H56'/>","Trois traits de plus en plus courts."],
 ["Lampe ou voyant","<path d='M5 30H34M66 30H95'/><circle cx='50' cy='30' r='16'/><path d='M39 19L61 41M61 19L39 41'/>","Cercle barré d'une croix : voyant de défaut ou de marche."],
 ["Transformateur","<circle cx='40' cy='30' r='16'/><circle cx='60' cy='30' r='16'/><path d='M5 30H24M76 30H95'/>","Deux cercles qui se chevauchent."]
];
