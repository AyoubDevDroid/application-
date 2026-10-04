/* NIVEAU 1 — Sécurité sur le chantier */
C.modules.push({id:"chantier",n:1,i:"⛑️",t:"Sécurité sur le chantier",d:"EPI, travail en hauteur, amiante, poussières",
 s:[{h:"Les EPI de l'électricien",l:["<b>Chaussures de sécurité</b> et <b>vêtements de travail</b> sans parties métalliques apparentes.","<b>Gants isolants</b> (classe adaptée à la tension) + <b>écran facial</b> anti-UV pour les opérations sous tension ou au voisinage.","<b>Lunettes</b>, <b>casque</b>, <b>protections auditives</b>, <b>masque</b> anti-poussière selon la tâche."]},
    {h:"Travailler en hauteur",l:["L'échelle sert à <b>monter</b>, pas à travailler (sauf travail court et sans danger).","On préfère la <b>PIRL</b> (plateforme individuelle roulante légère) ou l'échafaudage roulant.","Escabeau : jamais sur la dernière marche, toujours sur un sol stable."]},
    {h:"Amiante et poussières",l:["Bâtiment dont le permis de construire date d'<b>avant le 1er juillet 1997</b> : un <b>repérage amiante</b> est obligatoire avant travaux.","Percer ou rainurer un matériau amianté demande une formation spécifique (« sous-section 4 »).","Rainureuse et perforateur : <b>aspiration</b> + masque FFP3."]},
    {h:"Avant de percer",l:["Repérer les réseaux cachés : <b>détecteur</b> de câbles et de tuyaux.","Ne jamais percer à la verticale ou à l'horizontale d'un interrupteur ou d'une prise : un câble y passe sûrement."]}],
 k:["EPI","PIRL","Amiante","Gants isolants"]});

C.fiches.chantier={
 intro:"Sur un chantier, l'électricité n'est pas le seul danger. Les chutes de hauteur sont la première cause d'accidents graves dans le bâtiment, la poussière d'amiante tue encore des ouvriers des années après, et un foret qui rencontre un câble peut électriser. Un bon électricien protège sa santé pour faire tout sa carrière.",
 s:[
  {p:"Les <b>EPI</b> (équipements de protection individuelle) sont fournis par l'employeur, mais c'est toi qui les portes. Les EPI de base sont les chaussures de sécurité et la tenue de travail. Pour les opérations au voisinage de pièces sous tension (mesures dans un tableau, raccordement), on ajoute les <b>gants isolants</b> et l'<b>écran facial</b> qui protège de l'arc électrique.",
   fig:{type:"cycle",centre:"Les EPI de l'électricien",etapes:[["Chaussures de sécurité","#ffc83d"],["Tenue sans métal apparent","#3db5ff"],["Gants isolants","#2ed47a"],["Écran facial anti-UV","#ff8a3d"],["Lunettes, casque, bouchons","#b18cff"]]},
   att:"Avant chaque utilisation, on vérifie les gants isolants : on les gonfle pour détecter un trou. Un gant percé ne protège plus.",
   q:["Avant d'utiliser des gants isolants, on doit…",["Vérifier qu'ils ne sont pas percés (test de gonflage)","Les mouiller","Les mettre à l'envers","Rien, ils sont garantis"],0,"Un gant percé laisse passer le courant : on le contrôle à chaque fois."]},
  {p:"Les chutes de hauteur sont la <b>première cause de mortalité</b> dans le BTP. Pour travailler au plafond (pose de luminaires, passage de câbles), on utilise une <b>PIRL</b> ou un échafaudage roulant, qui ont des garde-corps. L'échelle est un moyen d'<b>accès</b>, pas un poste de travail.",
   ex:"Pour poser 12 spots dans un faux plafond, la PIRL te permet de travailler les deux mains libres, protégé par un garde-corps, et de te déplacer rapidement de spot en spot.",
   q:["Pour poser des luminaires au plafond toute la journée, on utilise…",["Une PIRL ou un échafaudage roulant","Une chaise","Une échelle simple","Un seau retourné"],0,"La PIRL a un garde-corps et une plateforme stable."]},
  {p:"L'<b>amiante</b> a été très utilisée jusqu'à son interdiction en 1997 : dalles de sol, conduits, enduits, plaques de faux plafond… Respirées, ses fibres provoquent des cancers des dizaines d'années plus tard. Avant de percer ou de démolir dans un bâtiment ancien, on demande le <b>repérage amiante</b>. La <b>poussière</b> de béton et de plâtre (silice) est aussi dangereuse : on rainure avec une aspiration.",
   att:"Si tu découvres un matériau suspect pendant les travaux (dalle, flocage, conduit fibreux) : tu arrêtes, tu ne perces pas, tu préviens ton responsable.",
   q:["Un repérage amiante est obligatoire avant travaux si le permis de construire date d'avant…",["Le 1er juillet 1997","1950","2010","Le 1er janvier 2020"],0,"L'amiante a été interdite en France en 1997."]},
  {p:"Avant de percer un mur, on se demande ce qu'il y a derrière. Par convention, les câbles encastrés montent ou descendent <b>à la verticale</b> des interrupteurs et des prises, ou passent à l'<b>horizontale</b> près du plafond ou du sol. Un <b>détecteur de réseaux</b> aide à les localiser, ainsi que les tuyaux d'eau et de gaz.",
   fig:{type:"svg",legende:"Zones à risque : à la verticale et à l'horizontale des appareillages",svg:"<svg viewBox='0 0 240 140'><rect x='10' y='10' width='220' height='120' rx='6' fill='var(--card)' stroke='#46508f' stroke-width='2'/><rect x='100' y='10' width='26' height='120' fill='var(--ko)' opacity='.25' class='glow'/><rect x='10' y='74' width='220' height='22' fill='var(--ko)' opacity='.25' class='glow'/><rect x='104' y='76' width='18' height='18' rx='3' fill='#fff'/><circle cx='113' cy='85' r='4' fill='#10142a'/><text x='170' y='40' fill='var(--mut)' font-size='11' font-weight='700' text-anchor='middle'>ne pas percer</text><text x='170' y='54' fill='var(--mut)' font-size='11' font-weight='700' text-anchor='middle'>dans les bandes rouges</text><text x='40' y='120' font-size='18' class='pop'>🔍</text></svg>"},
   q:["Où risques-tu le plus de percer un câble ?",["À la verticale d'une prise","Au milieu d'un mur sans appareillage, à 1 m de tout","Dans une porte","Dans le carrelage du sol, loin des murs"],0,"Les câbles rejoignent les appareillages par le haut ou par le bas, à la verticale."]}
 ],
 retenir:["EPI de base + gants isolants vérifiés + écran facial pour le voisinage.","Chutes de hauteur = 1re cause de mortalité : PIRL, échafaudage roulant.","Avant 1997 : repérage amiante. Matériau suspect = on arrête.","Pas de perçage à la verticale ou à l'horizontale d'un appareillage."]
};

C.lexique.push(
 ["PIRL","Plateforme Individuelle Roulante Légère : petite plateforme avec garde-corps pour travailler en hauteur."],
 ["Amiante","Fibre minérale cancérigène, interdite en 1997, encore présente dans de nombreux bâtiments anciens."],
 ["Gants isolants","Gants en caoutchouc testés pour une tension (classe 00 ou 0 en basse tension), à vérifier avant chaque usage."]
);

C.quiz.push(
 ["chantier","Quelle est la première cause d'accidents mortels dans le BTP ?",["Les chutes de hauteur","Les coupures","Le bruit","Les piqûres d'insectes"],0,"Les chutes de hauteur, d'où l'importance des PIRL et garde-corps."],
 ["chantier","Que protège l'écran facial de l'électricien ?",["Le visage contre l'arc électrique et ses UV","Les oreilles","Les mains","Contre la pluie"],0,"L'arc électrique brûle et émet des UV très intenses."],
 ["chantier","Une échelle sert d'abord à…",["Accéder en hauteur","Travailler toute la journée","Soutenir un câble","Faire un pont"],0,"L'échelle est un moyen d'accès, pas un poste de travail."],
 ["chantier","Que fais-tu si tu découvres un matériau suspect d'amiante ?",["J'arrête et je préviens mon responsable","Je perce doucement","Je l'humidifie et je continue","Je le jette à la poubelle"],0,"On ne touche pas : il faut un repérage et des intervenants formés."],
 ["chantier","Quel masque contre les poussières d'amiante ou de silice ?",["FFP3","Masque chirurgical","Un foulard","Aucun"],0,"Le FFP3 filtre le mieux les fines particules."],
 ["chantier","Quel outil aide à localiser un câble dans un mur ?",["Un détecteur de réseaux","Un niveau à bulle","Un mètre","Une pince à dénuder"],0,"Le détecteur repère les câbles et les tuyaux avant perçage."],
 ["chantier","Les outils isolés pour l'électricien sont marqués…",["Double triangle et 1 000 V","CE uniquement","Un éclair rouge","220 V"],0,"Le double triangle avec « 1000 V » garantit l'isolation de l'outil."]
);

C.vf.push(
 ["On peut travailler sur la dernière marche d'un escabeau si on fait attention.",false,"Jamais : on perd l'équilibre facilement. On prend un escabeau plus haut ou une PIRL."],
 ["L'amiante a été interdite en France en 1997.",true,"D'où le repérage obligatoire avant travaux dans les bâtiments plus anciens."],
 ["Un gant isolant se vérifie avant chaque utilisation.",true,"Par gonflage, pour détecter les trous."],
 ["Une rainureuse doit être utilisée avec une aspiration.",true,"Pour limiter la poussière de silice, dangereuse pour les poumons."]
);
