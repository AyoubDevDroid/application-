/* NIVEAU 3 — Le triphasé et les moteurs */
const SINUS3=()=>{const c=[["#ff5470","L1"],["#ffc83d","L2"],["#3db5ff","L3"]];let h="<svg viewBox='0 0 300 125'><path d='M10 62H290' stroke='#46508f' stroke-width='1.5'/>";
 c.forEach(([col,n],k)=>{let d="";for(let x=0;x<=280;x+=4)d+=(x?"L":"M")+(10+x)+" "+(62-45*Math.sin(x/280*3*Math.PI-k*2*Math.PI/3)).toFixed(1);h+="<path class='draw' style='animation-delay:"+k*.3+"s' d='"+d+"' stroke='"+col+"' stroke-width='3' fill='none'/><text x='"+(200+k*22)+"' y='12' font-size='11' font-weight='900' fill='"+col+"'>"+n+"</text>"});return h+"</svg>"};
C.modules.push({id:"tri",n:3,i:"🔄",t:"Le triphasé et les moteurs",d:"Tensions simples et composées, couplage, sens de rotation",
 s:[{h:"Trois phases",l:["3 phases <b>L1, L2, L3</b> décalées d'un tiers de période, + le <b>neutre</b>.","Tension <b>simple</b> V (phase-neutre) = <b>230 V</b> ; tension <b>composée</b> U (entre phases) = <b>400 V</b>.","U = V × √3 (400 ≈ 230 × 1,73)."]},
    {h:"Pourquoi le triphasé ?",l:["Plus de puissance avec des câbles plus fins.","Les moteurs démarrent et tournent seuls grâce au <b>champ tournant</b>.","En logement : on <b>équilibre</b> les circuits monophasés sur les 3 phases."]},
    {h:"Le neutre en triphasé",l:["Si les 3 phases sont équilibrées, le courant dans le neutre est faible.","Une <b>coupure du neutre</b> déséquilibre les tensions : certains appareils reçoivent bien plus de 230 V.","Le neutre ne se coupe jamais seul et ses connexions sont soignées."]},
    {h:"Le moteur asynchrone triphasé",l:["Plaque à bornes : <b>U1 V1 W1</b> en bas, <b>W2 U2 V2</b> en haut.","Plaque 230/400 V sur réseau 400 V → <b>étoile (Y)</b>. Plaque 400/690 V sur réseau 400 V → <b>triangle (Δ)</b>.","Inverser le sens : <b>permuter deux phases</b>."]},
    {h:"Protéger et commander un moteur",l:["<b>Contacteur</b> : met en marche et arrête.","<b>Relais thermique</b> : protège contre la surcharge, réglé sur l'<b>intensité nominale</b> de la plaque.","Ou <b>disjoncteur-moteur</b> (magnétothermique réglable)."]}],
 k:["Triphasé","Tension simple","Tension composée","Couplage étoile","Couplage triangle","Relais thermique"]});

C.fiches.tri={
 intro:"Le triphasé, c'est l'électricité de l'industrie, des ateliers, des immeubles et des grandes maisons. Il alimente les moteurs, les pompes à chaleur, les bornes de recharge rapides. Bien le comprendre, c'est passer du logement à tous les autres chantiers.",
 s:[
  {p:"Le réseau triphasé a <b>trois phases</b> (L1, L2, L3) dont les tensions sont décalées d'un tiers de tour, et un <b>neutre</b>. Entre une phase et le neutre, on mesure la <b>tension simple V = 230 V</b>. Entre deux phases, la <b>tension composée U = 400 V</b>. Les deux sont liées par <b>U = V × √3</b>.",
   fig:{type:"svg",legende:"Trois tensions décalées d'un tiers de période",svg:SINUS3()},
   ex:"Dans un atelier : un moteur de scie en 400 V (entre phases), et les prises de courant en 230 V (entre une phase et le neutre). Les deux sur le même réseau.",
   q:["Quelle est la tension entre deux phases d'un réseau 230/400 V ?",["400 V","230 V","690 V","115 V"],0,"Tension composée U = 400 V."]},
  {p:"Le triphasé transporte plus de puissance avec moins de cuivre, et il crée naturellement un <b>champ magnétique tournant</b> : c'est ce qui fait tourner les moteurs asynchrones sans démarreur compliqué. La puissance se calcule avec <b>P = U × I × √3 × cos φ</b>. Dans un logement en triphasé, on <b>répartit</b> les circuits monophasés sur les trois phases pour qu'elles soient chargées de façon équilibrée.",
   fig:{type:"flux",legende:"Courant d'un moteur de 7,5 kW (cos φ = 0,85) en 400 V",etapes:[["Puissance","7 500 W"],["U × √3 × cos φ","400 × 1,73 × 0,85 ≈ 588"],["I = 7 500 ÷ 588","≈ 12,8 A"]]},
   q:["Pourquoi répartir les circuits d'un logement sur les 3 phases ?",["Pour équilibrer la charge","Pour faire des économies de câble","Parce que c'est plus joli","Ce n'est pas utile"],0,"Une phase surchargée ferait déclencher le disjoncteur de branchement."]},
  {p:"Dans un réseau équilibré, les courants des trois phases s'annulent presque dans le neutre. Mais si le <b>neutre se coupe</b> (borne desserrée, câble arraché), les appareils monophasés se retrouvent <b>en série entre deux phases</b> : la tension se répartit selon leurs charges. Certains reçoivent 300 V ou plus et grillent, d'autres sont sous-alimentés. C'est la <b>rupture de neutre</b>, une panne grave.",
   fig:{type:"barres",legende:"Exemple de tensions mesurées après une rupture de neutre",items:[["L1 – N",312,"V","#ff5470"],["L2 – N",148,"V","#3db5ff"],["L3 – N",235,"V","#ffc83d"],["L1 – L2 (normal)",400,"V","#2ed47a"]]},
   att:"On ne coupe jamais le neutre seul (par exemple avec un disjoncteur unipolaire sur le neutre), et on serre ses bornes au couple indiqué, comme celles des phases.",
   q:["Des lampes brillent trop fort et d'autres trop peu sur une installation triphasée : tu penses à…",["Une rupture du neutre","Une surcharge","Un différentiel défectueux","Une phase de trop"],0,"Sans neutre, les tensions phase-neutre se déséquilibrent."]},
  {p:"Le moteur asynchrone triphasé a trois enroulements, dont les 6 extrémités arrivent sur la <b>plaque à bornes</b> : U1 V1 W1 en bas, W2 U2 V2 en haut. Avec des <b>barrettes</b>, on choisit le <b>couplage</b>. La plaque signalétique indique deux tensions (ex. <b>230/400 V</b>) : la plus petite est la tension que supporte un enroulement. Sur un réseau 400 V, un moteur 230/400 V se couple en <b>étoile</b> ; un moteur 400/690 V se couple en <b>triangle</b>. Pour <b>inverser le sens</b> de rotation, on <b>permute deux phases</b>.",
   fig:{type:"svg",legende:"Barrettes en étoile (horizontales en haut) et en triangle (verticales)",svg:"<svg viewBox='0 0 300 130'><g font-size='10' font-weight='900' text-anchor='middle'><text x='75' y='12' fill='var(--pri)'>ÉTOILE (Y)</text><text x='225' y='12' fill='#3db5ff'>TRIANGLE (Δ)</text></g><g fill='var(--card)' stroke='#fff' stroke-width='2'><rect x='15' y='20' width='120' height='95' rx='8'/><rect x='165' y='20' width='120' height='95' rx='8'/></g><g fill='#d9dce8'><circle cx='40' cy='45' r='8'/><circle cx='75' cy='45' r='8'/><circle cx='110' cy='45' r='8'/><circle cx='40' cy='90' r='8'/><circle cx='75' cy='90' r='8'/><circle cx='110' cy='90' r='8'/><circle cx='190' cy='45' r='8'/><circle cx='225' cy='45' r='8'/><circle cx='260' cy='45' r='8'/><circle cx='190' cy='90' r='8'/><circle cx='225' cy='90' r='8'/><circle cx='260' cy='90' r='8'/></g><g font-size='8' font-weight='900' fill='#10142a' text-anchor='middle'><text x='40' y='48'>W2</text><text x='75' y='48'>U2</text><text x='110' y='48'>V2</text><text x='40' y='93'>U1</text><text x='75' y='93'>V1</text><text x='110' y='93'>W1</text><text x='190' y='48'>W2</text><text x='225' y='48'>U2</text><text x='260' y='48'>V2</text><text x='190' y='93'>U1</text><text x='225' y='93'>V1</text><text x='260' y='93'>W1</text></g><path class='draw' d='M40 33H110' stroke='var(--pri)' stroke-width='5' stroke-linecap='round' opacity='.85'/><path class='draw' d='M178 45V90M213 45V90M248 45V90' stroke='#3db5ff' stroke-width='4' stroke-linecap='round' opacity='.6' transform='translate(12 0)'/></svg>"},
   att:"Un moteur 230/400 V couplé en triangle sur un réseau 400 V reçoit 400 V par enroulement au lieu de 230 V : il chauffe et grille en quelques minutes.",
   q:["Pour inverser le sens d'un moteur triphasé, on…",["Permute deux phases","Permute les trois phases en rond","Inverse neutre et terre","Change le couplage"],0,"Deux phases permutées = ordre des phases inversé = champ tournant inversé."]},
  {p:"Un départ moteur a trois fonctions. <b>Sectionner</b> (sectionneur ou disjoncteur, pour consigner), <b>commander</b> (le <b>contacteur</b>, piloté par des boutons marche/arrêt ou un automate) et <b>protéger</b> : contre le court-circuit (fusibles aM ou magnétique) et contre la <b>surcharge</b> (le <b>relais thermique</b>, réglé sur l'<b>intensité nominale</b> lue sur la plaque, pour la tension du réseau). Le <b>disjoncteur-moteur</b> regroupe sectionnement et protections dans un seul appareil.",
   fig:{type:"cycle",centre:"Départ moteur",etapes:[["Sectionner<br>sectionneur","#a9b0d6"],["Protéger court-circuit<br>fusibles aM","#ff8a3d"],["Commander<br>contacteur","#3db5ff"],["Protéger surcharge<br>relais thermique","#ffc83d"]]},
   ex:"Plaque : 5,5 kW — 230/400 V — 19,5 / 11,3 A. Réseau 400 V : couplage étoile, relais thermique réglé sur 11,3 A.",
   q:["Sur quelle valeur règle-t-on le relais thermique ?",["L'intensité nominale de la plaque, pour la tension du réseau","Le double de l'intensité nominale","Le calibre du disjoncteur général","10 A toujours"],0,"Le thermique protège le moteur : il se règle sur son In."]}
 ],
 retenir:["V = 230 V (phase-neutre), U = 400 V (entre phases), U = V × √3.","P = U × I × √3 × cos φ.","Rupture de neutre = surtensions sur les circuits monophasés.","Plaque 230/400 V sur réseau 400 V → étoile. Inverser le sens : permuter 2 phases.","Départ moteur : sectionner, commander (contacteur), protéger (aM + thermique réglé sur In)."]
};

C.lexique.push(
 ["Triphasé","Réseau à 3 phases (L1, L2, L3) décalées d'un tiers de période, souvent avec un neutre : 230/400 V."],
 ["Tension simple","Tension entre une phase et le neutre : 230 V. Symbole V."],
 ["Tension composée","Tension entre deux phases : 400 V. Symbole U. U = V × √3."],
 ["Couplage étoile","Branchement des enroulements d'un moteur avec un point commun (W2-U2-V2 reliés). Symbole Y."],
 ["Couplage triangle","Branchement des enroulements d'un moteur bout à bout (U1-W2, V1-U2, W1-V2). Symbole Δ."],
 ["Relais thermique","Protection contre la surcharge d'un moteur, réglée sur son intensité nominale."],
 ["Contacteur","Interrupteur commandé par une bobine, pour mettre en marche et arrêter un récepteur puissant."],
 ["Rupture de neutre","Coupure accidentelle du neutre en triphasé : les tensions phase-neutre se déséquilibrent et des appareils grillent."],
 ["Plaque signalétique","Étiquette d'un moteur : puissance, tensions (ex. 230/400 V), intensités, vitesse, cos φ."]
);

C.quiz.push(
 ["tri","Quelle relation lie U et V en triphasé ?",["U = V × √3","U = V × 2","U = V ÷ 3","U = V"],0,"400 ≈ 230 × 1,73."],
 ["tri","Un moteur 230/400 V sur un réseau 400 V se couple en…",["Étoile","Triangle","Série","Parallèle"],0,"Chaque enroulement supporte 230 V : en étoile il reçoit 400 ÷ √3 = 230 V."],
 ["tri","Un moteur 400/690 V sur un réseau 400 V se couple en…",["Triangle","Étoile","Peu importe","Il ne peut pas fonctionner"],0,"Chaque enroulement supporte 400 V : en triangle il reçoit 400 V."],
 ["tri","En couplage étoile, les barrettes relient…",["W2, U2 et V2","U1 et W2, V1 et U2, W1 et V2","Les phases au neutre","Rien"],0,"Les 3 bornes du haut sont reliées : c'est le point étoile."],
 ["tri","Quelle formule donne la puissance d'un moteur triphasé ?",["P = U × I × √3 × cos φ","P = U × I","P = R × I","P = U ÷ I"],0,"En triphasé, on multiplie par √3 et par le facteur de puissance."],
 ["tri","Une coupure du neutre en triphasé provoque…",["Des surtensions sur certains appareils monophasés","Rien","Un arrêt de tous les moteurs","Une baisse de la facture"],0,"Les tensions phase-neutre se déséquilibrent."],
 ["tri","Le relais thermique protège le moteur contre…",["La surcharge","Le court-circuit","La foudre","Les fuites à la terre"],0,"Le thermique coupe quand le moteur tire trop longtemps plus que son In."],
 ["tri","Quel fusible accompagne un départ moteur ?",["aM","gG","Fusible de 2 A","Aucun"],0,"aM supporte la pointe de démarrage ; la surcharge est confiée au thermique."],
 ["tri","Permuter les trois phases « en rond » (L1→L2, L2→L3, L3→L1)…",["Ne change pas le sens de rotation","Inverse le sens","Arrête le moteur","Le fait tourner deux fois plus vite"],0,"L'ordre des phases reste le même : seul l'échange de deux phases inverse le sens."]
);

C.vf.push(
 ["En triphasé 230/400 V, on mesure 400 V entre deux phases.",true,"C'est la tension composée."],
 ["Pour inverser le sens d'un moteur triphasé, on inverse le neutre et la terre.",false,"On permute deux phases."],
 ["Un moteur couplé en triangle alors qu'il fallait l'étoile risque de griller.",true,"Ses enroulements reçoivent une tension trop élevée."],
 ["Le neutre peut être coupé seul par un disjoncteur unipolaire.",false,"Le neutre ne doit jamais être coupé sans les phases."]
);

C.ordre.push(
 {t:"Inverser le sens d'un moteur triphasé",ic:"🔄",s:["Consigner le départ moteur","Vérifier l'absence de tension","Ouvrir la boîte à bornes","Permuter deux phases","Refermer et déconsigner","Essai : vérifier le sens et mesurer l'intensité"]}
);
