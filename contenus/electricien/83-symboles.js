/* JEU + WIKI — Symboles électriques (dessinés pour l'appli, cadre 100 × 60, traits en currentColor).
   Plan d'implantation (plan du logement) et schéma développé. À faire relire avec la NF EN 60617 avant publication. */
C.symboles=[
 ["Point lumineux / lampe","<path d='M5 30H34M66 30H95'/><circle cx='50' cy='30' r='16'/><path d='M39 19L61 41M61 19L39 41'/>","Un cercle barré d'une croix : point d'éclairage sur un plan, lampe ou voyant sur un schéma."],
 ["Interrupteur simple allumage","<circle cx='38' cy='44' r='7'/><path d='M43 39L66 16L73 23'/>","Symbole de plan : un petit cercle et un trait terminé par un petit crochet."],
 ["Interrupteur double allumage","<circle cx='38' cy='44' r='7'/><path d='M43 39L66 16L73 23M58 24L65 31'/>","Comme le simple allumage, avec deux petits crochets : il commande deux circuits."],
 ["Interrupteur va-et-vient","<circle cx='50' cy='30' r='7'/><path d='M55 25L74 6L80 12M45 35L26 54L20 48'/>","Le trait traverse le cercle avec un crochet à chaque bout."],
 ["Bouton poussoir (plan)","<circle cx='50' cy='30' r='15'/><circle cx='50' cy='30' r='6'/>","Un cercle dans un cercle : bouton de télérupteur, de minuterie ou de sonnette."],
 ["Prise de courant 2P+T","<path d='M34 24A16 16 0 0 0 66 24'/><path d='M50 40V56M30 17H70'/>","Un demi-cercle avec sa queue ; le trait au-dessus indique le contact de terre."],
 ["Disjoncteur","<path d='M5 40H35L60 22M65 40H95M60 35L70 45M70 35L60 45'/>","Un contact avec une croix sur la partie fixe."],
 ["Sectionneur","<path d='M5 40H35L60 22M65 40H95M65 31V49'/>","Un contact avec un petit trait perpendiculaire sur la partie fixe : il isole, mais ne coupe pas en charge."],
 ["Contact de puissance d'un contacteur","<path d='M5 40H35L60 22M65 40H95'/><path d='M65 40A5 5 0 0 1 65 30'/>","Un contact avec un petit demi-cercle sur la partie fixe."],
 ["Fusible","<rect x='30' y='31' width='40' height='18'/><path d='M5 40H95'/>","Un rectangle traversé par le conducteur."],
 ["Résistance (élément chauffant)","<rect x='30' y='31' width='40' height='18'/><path d='M5 40H30M70 40H95'/>","Un rectangle raccordé par ses petits côtés, sans trait à l'intérieur."],
 ["Terre","<path d='M50 4V30M30 30H70M37 40H63M44 50H56'/>","Trois traits de plus en plus courts."],
 ["Contact à fermeture (NO)","<path d='M5 40H35L62 24M65 40H95'/>","Contact ouvert au repos : il se ferme quand on l'actionne (« normalement ouvert »)."],
 ["Contact à ouverture (NF / NC)","<path d='M5 40H35L72 30M65 40H95M65 40V25'/>","Contact fermé au repos : il s'ouvre quand on l'actionne (« normalement fermé »)."],
 ["Bouton poussoir à fermeture (schéma)","<path d='M5 46H35L62 30M65 46H95'/><path d='M49 38V17' style='stroke-dasharray:4 3'/><path d='M41 10V17H57V10'/>","Un contact à fermeture avec sa commande manuelle (trait pointillé et poussoir)."],
 ["Bobine de contacteur ou de relais","<rect x='32' y='18' width='36' height='24'/><path d='M50 2V18M50 42V58'/><text class='t' x='80' y='17' style='font-size:11px'>A1</text><text class='t' x='80' y='55' style='font-size:11px'>A2</text>","Un rectangle raccordé par ses grands côtés, bornes A1 et A2."],
 ["Relais thermique","<rect x='28' y='16' width='44' height='28'/><path d='M5 30H36V22H50V38H64V30H95'/>","Un rectangle avec un élément en créneau : la protection contre la surcharge d'un moteur."],
 ["Moteur triphasé","<path d='M50 2V8'/><circle cx='50' cy='30' r='22'/><text class='t' x='50' y='29'>M</text><text class='t' x='50' y='45' style='font-size:11px'>3~</text>","Un cercle avec M et 3~ (triphasé alternatif)."],
 ["Transformateur","<circle cx='40' cy='30' r='16'/><circle cx='60' cy='30' r='16'/><path d='M5 30H24M76 30H95'/>","Deux cercles qui se chevauchent : les deux enroulements."],
 ["Pile ou source de courant continu","<path d='M5 30H44M56 30H95M44 13V47'/><path d='M56 21V39' style='stroke-width:6'/><text class='t' x='36' y='14' style='font-size:13px'>+</text>","Un trait long (le +) et un trait court épais."],
 ["Source de courant alternatif","<circle cx='50' cy='30' r='18'/><path d='M5 30H32M68 30H95'/><path d='M40 30C43 21 47 21 50 30S57 39 60 30'/>","Un cercle avec une petite sinusoïde."],
 ["Sonnerie","<path d='M28 36A22 22 0 0 1 72 36Z'/><path d='M40 36V56M60 36V56'/>","Un dôme avec ses deux raccordements."],
 ["Diode","<path d='M5 30H95'/><path d='M40 16L62 30L40 44Z' class='f'/><path d='M62 15V45'/>","Un triangle et une barre : le courant ne passe que dans le sens de la flèche."],
 ["Connexion de conducteurs","<path d='M5 30H95M50 30V58'/><circle cx='50' cy='30' r='5' class='f'/>","Un point plein : les conducteurs sont reliés. Sans point, ils se croisent sans contact."],
 ["Double isolation (classe II)","<rect x='30' y='10' width='40' height='40'/><rect x='40' y='20' width='20' height='20'/>","Deux carrés emboîtés, marqués sur les appareils de classe II (pas de terre)."]
];
