/* NIVEAU 2 — Les montages d'éclairage */
C.modules.push({id:"schemas",n:2,i:"💡",t:"Les montages d'éclairage",d:"Simple allumage, va-et-vient, télérupteur, minuterie",
 s:[{h:"Choisir le montage",l:["<b>Simple allumage</b> : 1 interrupteur commande 1 point lumineux.","<b>Double allumage</b> : 1 interrupteur double commande 2 points séparément.","<b>Va-et-vient</b> : 2 interrupteurs commandent le même point (couloir, escalier).","<b>Télérupteur</b> : 3 boutons poussoirs ou plus commandent le même point.","<b>Minuterie</b> : la lumière s'éteint seule après un temps réglé."]},
    {h:"La règle d'or",l:["L'interrupteur coupe toujours la <b>phase</b>, jamais le neutre.","Le neutre va <b>directement</b> au point lumineux.","Le fil entre l'interrupteur et la lampe s'appelle le <b>retour lampe</b>."]},
    {h:"Le va-et-vient",l:["Chaque va-et-vient a une borne <b>commune</b> et deux bornes de <b>navettes</b>.","Phase sur le commun du 1er, retour lampe sur le commun du 2e.","Les deux <b>navettes</b> relient les deux interrupteurs."]},
    {h:"Le télérupteur",l:["Un relais qui change d'état à chaque <b>impulsion</b> sur un bouton poussoir.","Les boutons poussoirs sont câblés <b>en parallèle</b> et alimentent la <b>bobine</b>.","Le contact du télérupteur alimente la lampe."]},
    {h:"Minuterie, variateur, détecteur",l:["<b>Minuterie</b> : comme un télérupteur, mais la lumière s'éteint seule.","<b>Variateur</b> : règle l'intensité lumineuse (compatible LED !).","<b>Détecteur de présence</b> : allume quand quelqu'un passe."]}],
 k:["Va-et-vient","Télérupteur","Phase","Retour lampe","Navette","Minuterie"]});

C.fiches.schemas={
 intro:"Allumer une lampe paraît simple, mais selon le nombre d'endroits d'où l'on veut la commander, on n'utilise pas le même montage. Ce module t'apprend à choisir le bon schéma et à le comprendre. Manipule les schémas interactifs, puis entraîne-toi dans le jeu « Câblage ».",
 s:[
  {p:"Le choix dépend du <b>nombre d'endroits</b> d'où l'on veut commander la lumière. Un seul endroit : simple allumage. Deux lampes depuis le même endroit : double allumage. Deux endroits (en haut et en bas d'un escalier) : va-et-vient. Trois endroits ou plus (long couloir, cage d'escalier) : télérupteur avec boutons poussoirs, ou minuterie.",
   fig:{type:"barres",legende:"Nombre de points de commande",items:[["Simple allumage",1,"point"],["Va-et-vient",2,"points"],["Télérupteur ou minuterie",3,"points et +"]]},
   ex:"Une chambre : simple allumage. Un séjour avec un lustre et des appliques : double allumage. Un escalier : va-et-vient. Un couloir d'immeuble avec 6 portes : minuterie.",
   q:["Une lampe commandée de 3 endroits : quel montage ?",["Télérupteur","Va-et-vient","Simple allumage","Double allumage"],0,"Au-delà de 2 points : télérupteur (ou minuterie)."]},
  {p:"L'interrupteur doit couper la <b>phase</b>. La phase arrive sur l'interrupteur, ressort par le <b>retour lampe</b> vers le point lumineux, et le <b>neutre</b> va directement à la lampe. Si on coupait le neutre, la lampe s'éteindrait bien… mais la douille resterait <b>sous tension</b> : quelqu'un qui change l'ampoule pourrait s'électriser.",
   fig:{type:"flux",legende:"Simple allumage : le chemin du courant",etapes:["Phase (disjoncteur 16 A)","Interrupteur",["Retour lampe","couleur ≠ bleu et ≠ vert/jaune"],"Lampe (DCL)",["Neutre","bleu, direct au tableau"]]},
   att:"Une lampe éteinte n'est pas forcément hors tension. Avant de toucher une douille, on coupe au tableau et on vérifie au VAT.",
   q:["Pourquoi couper la phase et pas le neutre ?",["Pour que la douille soit hors tension quand c'est éteint","Pour économiser du fil","Pour que la lampe éclaire mieux","C'est pareil"],0,"Coupure du neutre = douille toujours sous tension."]},
  {p:"Un va-et-vient a 3 bornes : un <b>commun</b> et deux <b>navettes</b>. Le commun est relié à l'une ou l'autre navette selon la position. La phase arrive sur le commun du premier, le retour lampe part du commun du second, et les deux navettes relient les interrupteurs. La lampe s'allume quand les deux communs sont sur la <b>même</b> navette. Essaie :",
   fig:{type:"inter",legende:"Va-et-vient : touche les interrupteurs",inters:[["a","Interrupteur 1"],["b","Interrupteur 2"]],
    svg:"<svg viewBox='0 0 300 160'><text x='6' y='79' fill='#fff' font-size='11' font-weight='900'>L</text><text x='6' y='144' fill='#fff' font-size='11' font-weight='900'>N</text><path class='w' data-k='w0' d='M18 75H70'/><path class='w' data-k='w0' data-v='a:0' d='M70 75L108 47'/><path class='w' data-k='w0' data-v='a:1' d='M70 75L108 103'/><path class='w' data-k='nh' d='M110 45H190'/><path class='w' data-k='nb' d='M110 105H190'/><path class='w' data-k='w2' data-v='b:0' d='M230 75L192 47'/><path class='w' data-k='w2' data-v='b:1' d='M230 75L192 103'/><path class='w' data-k='w2' d='M230 75H262'/><circle class='lp' data-k='lp' cx='275' cy='75' r='13'/><path d='M266 66L284 84M284 66L266 84' stroke='#fff' stroke-width='2'/><path class='w' data-k='wn' d='M275 88V140H18'/><g fill='#fff'><circle cx='70' cy='75' r='4'/><circle cx='110' cy='45' r='4'/><circle cx='110' cy='105' r='4'/><circle cx='190' cy='45' r='4'/><circle cx='190' cy='105' r='4'/><circle cx='230' cy='75' r='4'/></g><g fill='var(--mut)' font-size='10' font-weight='800' text-anchor='middle'><text x='90' y='22'>Interrupteur 1</text><text x='210' y='22'>Interrupteur 2</text><text x='150' y='38'>navette</text><text x='150' y='121'>navette</text><text x='66' y='92'>commun</text><text x='236' y='92'>commun</text></g></svg>",
    f:s=>{const on=["w0",s.a?"nb":"nh"];if(s.a===s.b)on.push("w2","lp","wn");return on},
    msg:s=>s.a===s.b?"💡 Allumée : les deux communs sont sur la même navette, le courant passe.":"⚫ Éteinte : chaque interrupteur est sur une navette différente."},
   att:"Erreur classique : inverser une navette et le commun sur un des interrupteurs. Le montage ne marche alors que dans certaines positions. Le commun est repéré (L, ou une couleur de vis) : on le vérifie avant de câbler.",
   q:["Dans un va-et-vient, où arrive le retour lampe ?",["Sur le commun du 2e interrupteur","Sur une navette","Sur le neutre","Sur la terre"],0,"Phase sur le commun du 1er, retour lampe sur le commun du 2e."]},
  {p:"Le <b>télérupteur</b> est un relais placé au tableau (ou dans une boîte). Sa <b>bobine</b> est alimentée par des <b>boutons poussoirs</b> câblés en parallèle : chaque appui envoie une impulsion, et le contact du télérupteur <b>change d'état</b> (fermé → ouvert → fermé…). On peut ajouter autant de boutons poussoirs qu'on veut, avec seulement deux fils entre eux.",
   fig:{type:"inter",legende:"Télérupteur : chaque impulsion fait basculer le contact",inters:[["t","👆 Appuyer sur un bouton poussoir"]],
    svg:"<svg viewBox='0 0 300 155'><text x='6' y='30' fill='#fff' font-size='11' font-weight='900'>L</text><text x='6' y='144' fill='#fff' font-size='11' font-weight='900'>N</text><path class='w on' d='M18 26H200V40'/><path class='w' d='M60 26V50M60 66V96M110 26V50M110 66V96M60 96H170M230 96H250V140M18 140H292'/><circle cx='60' cy='58' r='8' fill='none' stroke='#fff' stroke-width='2'/><circle cx='110' cy='58' r='8' fill='none' stroke='#fff' stroke-width='2'/><rect x='170' y='82' width='60' height='28' rx='4' fill='var(--card)' stroke='var(--pri)' stroke-width='2'/><text x='200' y='100' text-anchor='middle' font-size='10' font-weight='900' fill='#fff'>bobine</text><path class='w on' data-v='t:0' d='M200 40L216 58'/><path class='w on' data-v='t:1' d='M200 40V62'/><path class='w' data-k='lo' d='M200 62H240V45H257'/><circle class='lp' data-k='lp' cx='270' cy='45' r='13'/><path d='M261 36L279 54M279 36L261 54' stroke='#fff' stroke-width='2'/><path class='w' data-k='lo' d='M283 45H292V140'/><g fill='var(--mut)' font-size='9.5' font-weight='800' text-anchor='middle'><text x='60' y='82'>BP 1</text><text x='110' y='82'>BP 2</text><text x='226' y='30'>contact</text></g></svg>",
    f:s=>s.t?["lo","lp"]:[],
    msg:s=>s.t?"💡 Allumé : le contact reste fermé jusqu'à la prochaine impulsion.":"⚫ Éteint : appuie sur n'importe quel bouton poussoir."},
   ex:"Un long couloir avec 5 portes : 5 boutons poussoirs en parallèle, un télérupteur au tableau, la lampe sur le contact du télérupteur.",
   q:["Comment sont câblés les boutons poussoirs d'un télérupteur ?",["En parallèle","En série","En étoile","Un seul est autorisé"],0,"En parallèle : n'importe lequel envoie l'impulsion à la bobine."]},
  {p:"La <b>minuterie</b> fonctionne comme un télérupteur, mais la lumière s'éteint seule après un temps réglé : idéal pour les parties communes. Le <b>variateur</b> règle l'intensité lumineuse : il doit être compatible avec les ampoules (LED « dimmables ») et respecter une charge minimale. Le <b>détecteur de présence</b> allume quand il détecte un mouvement, et éteint après une temporisation.",
   att:"Des boutons poussoirs lumineux (avec voyant) laissent passer un petit courant : en trop grand nombre, ils peuvent empêcher une minuterie ou un télérupteur de retomber. Respecte le nombre maximal indiqué par le fabricant.",
   info:"Une LED éteinte qui garde une faible lueur est souvent le signe d'un interrupteur à voyant, d'un courant induit entre câbles… ou d'un interrupteur câblé sur le neutre.",
   q:["Pour une cage d'escalier d'immeuble, on choisit plutôt…",["Une minuterie","Un simple allumage","Un variateur","Un double allumage"],0,"La minuterie éteint seule : pas de lumière oubliée."]}
 ],
 retenir:["1 point → simple allumage · 2 points → va-et-vient · 3 et + → télérupteur ou minuterie.","L'interrupteur coupe toujours la phase ; le neutre va direct à la lampe.","Va-et-vient : phase sur le commun du 1er, retour lampe sur le commun du 2e, 2 navettes.","Télérupteur : BP en parallèle sur la bobine, le contact alimente la lampe."]
};

C.lexique.push(
 ["Phase","Conducteur sous tension (230 V par rapport au neutre). Marron, noir, rouge ou gris."],
 ["Neutre","Conducteur de retour du courant. Toujours bleu."],
 ["Va-et-vient","Montage où 2 interrupteurs commandent le même point lumineux."],
 ["Télérupteur","Relais à impulsion commandé par plusieurs boutons poussoirs pour un même éclairage."],
 ["Retour lampe","Conducteur qui relie l'interrupteur au point lumineux."],
 ["Navette","Conducteur qui relie les deux interrupteurs d'un va-et-vient."],
 ["Minuterie","Relais qui allume l'éclairage sur impulsion et l'éteint automatiquement après un temps réglé."],
 ["Bouton poussoir","Interrupteur qui ne reste pas enfoncé : il envoie une impulsion (télérupteur, minuterie, sonnette)."],
 ["Variateur","Appareil qui règle l'intensité lumineuse d'un éclairage."]
);

C.quiz.push(
 ["schemas","2 interrupteurs pour une même lampe, c'est un…",["Va-et-vient","Simple allumage","Double allumage","Télérupteur"],0,"Va-et-vient : couloir, escalier."],
 ["schemas","Pour 4 points de commande d'un même éclairage, on utilise…",["Un télérupteur","Un va-et-vient","Un simple allumage","Un différentiel"],0,"À partir de 3 points : télérupteur."],
 ["schemas","L'interrupteur doit couper…",["La phase","Le neutre","La terre","Les deux"],0,"On coupe toujours la phase."],
 ["schemas","Combien de bornes a un interrupteur va-et-vient ?",["3 (un commun et deux navettes)","2","4","1"],0,"Un commun et deux bornes de navettes."],
 ["schemas","Le fil entre l'interrupteur et la lampe s'appelle…",["Le retour lampe","La navette","Le neutre","Le fil pilote"],0,"Retour lampe."],
 ["schemas","Qu'est-ce qui alimente la bobine d'un télérupteur ?",["Les boutons poussoirs","La lampe","Le différentiel","Le neutre seul"],0,"Chaque appui sur un BP envoie une impulsion à la bobine."],
 ["schemas","Un séjour avec un lustre et des appliques commandés du même endroit : quel interrupteur ?",["Un double allumage","Un va-et-vient","Un bouton poussoir","Un variateur"],0,"L'interrupteur double commande 2 circuits d'éclairage séparément."],
 ["schemas","Pour faire varier la lumière de spots LED, il faut…",["Un variateur et des LED compatibles (dimmables)","N'importe quel variateur","Un télérupteur","Un fusible"],0,"Toutes les LED ne supportent pas la variation."],
 ["schemas","Quelle couleur est interdite pour un retour lampe ?",["Bleu","Orange","Violet","Noir"],0,"Le bleu est réservé au neutre (et le vert/jaune à la terre)."]
);

C.vf.push(
 ["L'interrupteur coupe le neutre.",false,"Il coupe la phase."],
 ["Un va-et-vient utilise 3 interrupteurs.",false,"2 interrupteurs. Au-delà : télérupteur."],
 ["Les boutons poussoirs d'un télérupteur sont en parallèle.",true,"N'importe lequel peut envoyer l'impulsion."],
 ["Une lampe éteinte est forcément hors tension.",false,"Si l'interrupteur coupe le neutre (erreur), la douille reste sous tension. On vérifie au VAT."],
 ["Une minuterie éteint la lumière automatiquement.",true,"Après le temps réglé."]
);
