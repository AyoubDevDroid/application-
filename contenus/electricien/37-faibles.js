/* NIVEAU 3 — Courants faibles et communication */
C.modules.push({id:"faibles",n:3,i:"📡",t:"Courants faibles et communication",d:"RJ45, tableau de communication, fibre, interphone, alarme",
 s:[{h:"Le réseau de communication du logement",l:["Toutes les prises <b>RJ45</b> partent en étoile du <b>tableau de communication</b>, dans la GTL.","Câble <b>4 paires torsadées</b> (catégorie 6 ou plus).","Au moins une prise RJ45 dans chaque <b>pièce principale</b> (séjour, chambres)."]},
    {h:"Câbler une prise RJ45",l:["Même norme de câblage aux <b>deux extrémités</b> : <b>T568A</b> ou <b>T568B</b>.","Détorsader les paires le <b>moins possible</b>.","Tester chaque lien avec un <b>testeur de câble</b>."]},
    {h:"Fibre, TV, interphone",l:["La <b>fibre</b> arrive sur un <b>DTIO</b> (dispositif de terminaison intérieur optique).","La <b>TV</b> peut passer par câble coaxial ou par le réseau RJ45 (grades « TV »).","<b>Interphone / visiophone</b> : platine de rue, poste intérieur, gâche électrique."]},
    {h:"Sécurité et domotique",l:["<b>Alarme</b> : centrale, détecteurs (mouvement, ouverture), sirène, clavier.","<b>Domotique</b> : bus filaire (ex. KNX) ou radio (Zigbee, Z-Wave…).","Courants faibles et courants forts : <b>conduits séparés</b>, croisement à angle droit."]}],
 k:["RJ45","Tableau de communication","Paire torsadée","DTIO"]});

C.fiches.faibles={
 intro:"Aujourd'hui, un logement sans internet dans chaque pièce est presque aussi gênant qu'un logement sans prises. Les « courants faibles » (réseau informatique, TV, fibre, interphone, alarme, domotique) font partie du travail de l'électricien. Ils ne sont pas dangereux, mais ils ont leurs propres règles : un câble mal serti, et le débit s'écroule.",
 s:[
  {p:"Le réseau de communication est câblé <b>en étoile</b> : chaque prise <b>RJ45</b> a son propre câble jusqu'au <b>tableau de communication</b> placé dans la GTL. Là, un panneau de brassage et un <b>switch</b> (ou la box) distribuent internet, le téléphone et la TV. On utilise du câble à <b>4 paires torsadées</b>, de catégorie 6 ou plus. La norme demande au moins une prise RJ45 par pièce principale ; le niveau de performance (le « grade ») dépend de l'édition de la norme et de la taille du logement.",
   fig:{type:"svg",legende:"Câblage en étoile : chaque prise a son câble jusqu'au tableau",svg:"<svg viewBox='0 0 280 140'><rect x='115' y='55' width='50' height='34' rx='6' fill='var(--card)' stroke='#3db5ff' stroke-width='2'/><text x='140' y='76' text-anchor='middle' font-size='9' font-weight='900' fill='#3db5ff'>TABLEAU</text><g stroke='#3db5ff' stroke-width='2.5' stroke-dasharray='5 5' class='flow'><path d='M140 55L40 20M140 55L240 20M140 89L40 120M140 89L240 120M165 72H260'/></g><g font-size='18' text-anchor='middle'><text x='30' y='26'>🛋️</text><text x='250' y='26'>🛏️</text><text x='30' y='132'>🛏️</text><text x='250' y='132'>💻</text><text x='268' y='78'>📺</text></g></svg>"},
   q:["Où arrivent tous les câbles des prises RJ45 ?",["Au tableau de communication","Au disjoncteur de branchement","À la prise la plus proche","Au compteur"],0,"Câblage en étoile vers le tableau de communication, dans la GTL."]},
  {p:"Une prise RJ45 a 8 contacts pour 4 paires de fils de couleur. On les raccorde selon un code couleur, <b>T568A</b> ou <b>T568B</b>, imprimé sur le connecteur. Règle d'or : <b>le même code aux deux extrémités</b>. On garde les paires torsadées jusqu'au plus près du contact (la torsade protège des perturbations) et on raccorde le blindage s'il y en a un. Enfin, on <b>teste</b> chaque lien : un testeur montre si les 8 fils arrivent au bon endroit.",
   fig:{type:"flux",legende:"Ordre des couleurs en T568B (contacts 1 à 8)",etapes:[["1-2","blanc-orange, orange"],["3","blanc-vert"],["4-5","bleu, blanc-bleu"],["6","vert"],["7-8","blanc-marron, marron"]]},
   att:"Détorsader 5 cm de paires « pour être à l'aise » dégrade fortement le débit. On dénude juste ce qu'il faut.",
   q:["Un câble RJ45 est câblé en T568B côté tableau. Côté prise, il faut…",["T568B aussi","T568A","N'importe quel ordre","Seulement 4 fils"],0,"Le même code aux deux extrémités."]},
  {p:"La <b>fibre optique</b> arrive dans le logement sur un <b>DTIO</b> (dispositif de terminaison intérieur optique), placé dans la GTL ; l'opérateur y raccorde sa box. La <b>télévision</b> peut être distribuée par câble coaxial depuis l'antenne, ou par le réseau RJ45. L'<b>interphone</b> ou le <b>visiophone</b> relie une platine de rue à un poste intérieur, et commande souvent une <b>gâche électrique</b> (portillon) ou une ventouse.",
   q:["Sur quel dispositif arrive la fibre optique dans un logement ?",["Le DTIO","Le disjoncteur de branchement","Le DCL","Le télérupteur"],0,"Dispositif de Terminaison Intérieur Optique."]},
  {p:"Une <b>alarme</b> comprend une <b>centrale</b> (le cerveau, secourue par batterie), des <b>détecteurs</b> (de mouvement infrarouge, d'ouverture sur les portes et fenêtres), une <b>sirène</b> et un <b>clavier</b> ou badge. La <b>domotique</b> pilote éclairage, volets et chauffage, par un bus filaire (comme KNX) ou par radio. Dans tous les cas, on <b>sépare</b> les câbles de courants faibles des câbles 230 V (conduits différents, distance), et on les croise à angle droit, pour éviter les perturbations.",
   att:"Un câble réseau tiré dans le même conduit qu'un câble 230 V : coupures, débit réduit, et en cas de défaut, du 230 V qui pourrait arriver sur une prise informatique.",
   q:["Comment faire passer un câble RJ45 près d'un câble 230 V ?",["Dans un conduit séparé, en le croisant à angle droit","Dans le même conduit","Enroulé autour","Collé dessus"],0,"Séparation pour éviter les perturbations et pour la sécurité."]}
 ],
 retenir:["RJ45 en étoile vers le tableau de communication (GTL), câble 4 paires catégorie 6+.","Même code (T568A ou B) aux deux bouts, détorsader le moins possible, tester.","Fibre → DTIO. Interphone : platine, poste, gâche.","Courants faibles séparés des courants forts, croisement à angle droit."]
};

C.lexique.push(
 ["RJ45","Prise et connecteur à 8 contacts pour le réseau informatique, le téléphone et la TV sur IP."],
 ["Tableau de communication","Coffret de la GTL où arrivent les câbles RJ45, la box et les arrivées des opérateurs."],
 ["Paire torsadée","Deux fils enroulés l'un autour de l'autre pour limiter les perturbations ; un câble réseau en contient 4."],
 ["DTIO","Dispositif de Terminaison Intérieur Optique : boîtier où arrive la fibre optique dans le logement."],
 ["Courants faibles","Réseaux de communication, sécurité et commande à très faible puissance (RJ45, TV, alarme, interphone)."]
);

C.quiz.push(
 ["faibles","Combien de paires contient un câble réseau RJ45 ?",["4","2","1","8"],0,"4 paires torsadées, soit 8 fils."],
 ["faibles","Que doit-on utiliser aux deux extrémités d'un lien RJ45 ?",["Le même code de câblage (T568A ou T568B)","Deux codes différents","N'importe quel ordre","Du scotch"],0,"Sinon les paires arrivent au mauvais endroit."],
 ["faibles","Pourquoi éviter de détorsader les paires ?",["La torsade protège contre les perturbations","Pour gagner du temps","Pour que ce soit plus joli","Ça n'a aucune importance"],0,"Moins on détorsade, meilleur est le débit."],
 ["faibles","Avec quoi vérifie-t-on un câblage RJ45 ?",["Un testeur de câble","Un VAT","Un mégohmmètre à 500 V","Un tournevis testeur"],0,"Le testeur montre si les 8 fils arrivent aux bons contacts."],
 ["faibles","Quel élément d'une alarme déclenche le bruit ?",["La sirène","Le détecteur d'ouverture","Le clavier","La batterie"],0,"La centrale commande la sirène quand un détecteur est activé."],
 ["faibles","Une gâche électrique est commandée par…",["L'interphone ou le visiophone","Le chauffe-eau","Le fil pilote","Le différentiel"],0,"Le poste intérieur ouvre le portillon."],
 ["faibles","Le câblage RJ45 d'un logement est organisé…",["En étoile depuis le tableau de communication","En série de prise en prise","En boucle","Au hasard"],0,"Chaque prise a son câble jusqu'au tableau."]
);

C.vf.push(
 ["On peut passer un câble RJ45 dans le même conduit qu'un câble 230 V.",false,"On les sépare : perturbations et sécurité."],
 ["La fibre optique arrive sur un DTIO dans la GTL.",true,"L'opérateur y raccorde sa box."],
 ["Un câble réseau contient 4 paires torsadées.",true,"8 fils en tout."]
);
