/* NIVEAU 3 — Le diagnostic frigorifique */
C.modules.push({id:"diagnostic",n:3,i:"🔎",t:"Le diagnostic frigorifique",d:"Lire BP, HP, surchauffe et sous-refroidissement",
 s:[{h:"La méthode",l:["Écouter le client, constater (températures, bruits, givre, alarmes).","Contrôler l'<b>électrique</b> et l'<b>aéraulique</b> (filtres, ventilateurs, échangeurs) avant d'ouvrir le circuit.","Mesurer : <b>BP, HP, surchauffe, sous-refroidissement</b>, intensité.","Comparer aux valeurs normales, conclure, réparer, contrôler."]},
    {h:"Les pannes « de charge »",l:["<b>Manque de fluide</b> : BP basse, HP basse, surchauffe <b>haute</b>, sous-refroidissement <b>faible</b>, bulles au voyant.","<b>Excès de fluide</b> : HP haute, sous-refroidissement <b>élevé</b>.","<b>Incondensables</b> (air) : HP haute ; à l'arrêt, pression supérieure à la saturation à température ambiante."]},
    {h:"Les pannes « d'échange »",l:["<b>Condenseur encrassé</b> ou ventilateur HS : HP haute, écart condensation/air extérieur trop grand.","<b>Évaporateur encrassé / givré</b>, filtre à air bouché : BP basse, surchauffe faible."]},
    {h:"Les pannes de détente et de compression",l:["<b>Restriction</b> (filtre colmaté, détendeur bloqué) : BP basse, surchauffe haute, sous-refroidissement <b>élevé</b>.","<b>Compresseur inefficace</b> : BP haute, HP basse, faible écart, intensité basse."]}],
 k:["Manque de fluide","Restriction","Incondensables","Surchauffe","Sous-refroidissement"]});

C.fiches.diagnostic={
 intro:"Diagnostiquer, c'est relier des mesures à une cause. Les quatre valeurs du circuit (BP, HP, surchauffe, sous-refroidissement) forment une « signature » propre à chaque panne. Avec la méthode et ces signatures, tu évites l'erreur la plus coûteuse du métier : rajouter du fluide à une machine qui n'en manque pas. Entraîne-toi ensuite au jeu « Dépannage ».",
 s:[
  {p:"On commence toujours par le plus simple. Beaucoup de « pannes de froid » ne sont pas frigorifiques : filtre à air bouché, ventilateur arrêté, condenseur sale, consigne mal réglée, porte de chambre froide mal fermée, alimentation absente. On vérifie l'<b>électrique</b> et l'<b>aéraulique</b> avant de brancher le manifold. Ensuite seulement, on mesure les quatre valeurs, machine stabilisée, et on les compare aux valeurs normales de la machine.",
   fig:{type:"flux",legende:"Méthode de diagnostic",etapes:["Écouter et constater","Électrique : tension, intensité, sécurités","Aéraulique : filtres, ventilateurs, échangeurs","Mesures : BP, HP, surchauffe, sous-refroidissement","Conclure, réparer, contrôler"]},
   q:["Une clim refroidit mal. Avant de brancher le manifold, tu…",["Vérifies filtres, ventilateurs et échangeurs","Ajoutes du fluide","Changes le compresseur","Changes le détendeur"],0,"Les causes aérauliques sont fréquentes et ne demandent pas d'ouvrir le circuit."]},
  {p:"<b>Manque de fluide</b> : l'évaporateur est sous-alimenté. La BP est basse, la surchauffe est <b>élevée</b> (le peu de fluide s'évapore tôt et la vapeur se réchauffe), la HP est plutôt basse et le sous-refroidissement <b>faible</b> (pas assez de liquide stocké au condenseur), avec des bulles au voyant. Un manque de fluide est toujours le signe d'une <b>fuite</b> : on la cherche et on la répare avant de recharger. <b>Excès de fluide</b> : le condenseur se remplit de liquide, la HP monte et le sous-refroidissement devient <b>élevé</b>. Les <b>incondensables</b> (air) font aussi monter la HP ; à l'arrêt, la pression est supérieure à la pression de saturation correspondant à la température ambiante.",
   fig:{type:"cycle",centre:"Pannes de charge",etapes:[["Manque : surchauffe ↑ sous-refroid. ↓","#3db5ff"],["Excès : HP ↑ sous-refroid. ↑","#ff8a3d"],["Air : HP ↑ à l'arrêt aussi","#b18cff"]]},
   att:"Ne jamais « faire l'appoint » sans chercher la fuite : le fluide repartira, le client paiera deux fois et la loi impose de réparer les fuites.",
   q:["BP basse, surchauffe élevée, sous-refroidissement faible, bulles au voyant :",["Manque de fluide","Excès de fluide","Condenseur encrassé","Compresseur inefficace"],0,"C'est la signature typique du manque de charge."]},
  {p:"Les <b>pannes d'échange</b> se reconnaissent aux écarts avec l'air. <b>Condenseur</b> encrassé ou ventilateur de condenseur en panne : la HP monte et l'écart entre la température de condensation et l'air extérieur devient trop grand (plus de 20 K, par exemple). <b>Évaporateur</b> encrassé, givré, filtre à air bouché ou ventilateur intérieur lent : l'air ne passe plus, la BP chute, et comme le fluide ne s'évapore pas complètement, la surchauffe est <b>faible</b>, avec un risque de retour de liquide.",
   q:["BP basse et surchauffe faible : cause probable ?",["Évaporateur qui manque d'air (filtre bouché, givre, ventilateur)","Manque de fluide","Excès de fluide","Incondensables"],0,"Le fluide ne trouve pas assez de chaleur pour s'évaporer."]},
  {p:"Une <b>restriction</b> (filtre déshydrateur colmaté, détendeur bloqué ou bouché par de la glace ou de la calamine) donne une BP basse et une surchauffe haute, comme un manque de fluide… mais le sous-refroidissement est <b>élevé</b> : le fluide s'accumule en amont du bouchon. Un écart de température à travers le filtre trahit le colmatage. Un <b>compresseur inefficace</b> (clapets ou spirales usés) ne crée plus l'écart de pression : BP trop haute, HP trop basse, intensité faible, peu de froid.",
   fig:{type:"cycle",centre:"Manque de fluide ou restriction ?",etapes:[["Les deux : BP ↓ surchauffe ↑","#ffc83d"],["Manque : sous-refroid. FAIBLE","#3db5ff"],["Restriction : sous-refroid. ÉLEVÉ","#ff5470"]]},
   q:["BP basse, surchauffe haute, sous-refroidissement élevé, filtre froid en sortie :",["Restriction (filtre colmaté)","Manque de fluide","Excès de fluide","Condenseur sale"],0,"Le sous-refroidissement élevé distingue la restriction du manque de fluide."]}
 ],
 retenir:["D'abord l'électrique et l'aéraulique, ensuite le manifold.","Manque : surchauffe ↑, sous-refroidissement ↓. Excès : HP ↑, sous-refroidissement ↑.","Condenseur : HP ↑. Évaporateur : BP ↓, surchauffe ↓.","Restriction : BP ↓, surchauffe ↑, sous-refroidissement ↑. Compresseur faible : BP ↑, HP ↓.","Un manque de fluide = une fuite à trouver et réparer."]
};

C.lexique.push(
 ["Manque de fluide","Charge insuffisante, presque toujours due à une fuite : BP basse, surchauffe élevée, sous-refroidissement faible."],
 ["Restriction","Obstacle au passage du fluide (filtre colmaté, détendeur bloqué) : BP basse, sous-refroidissement élevé."]
);

C.quiz.push(
 ["diagnostic","HP très haute et sous-refroidissement très élevé, condenseur propre :",["Excès de fluide","Manque de fluide","Restriction","Compresseur faible"],0,"Le liquide en excès noie le condenseur."],
 ["diagnostic","BP haute, HP basse, intensité faible, peu de froid :",["Compresseur inefficace","Manque de fluide","Condenseur encrassé","Filtre colmaté"],0,"Il ne crée plus l'écart de pression."],
 ["diagnostic","À l'arrêt depuis longtemps à 25 °C, un circuit au R32 affiche 18 bar (saturation à 25 °C ≈ 15,9 bar). Cause ?",["Présence d'incondensables (air)","Manque de fluide","Tout est normal","Compresseur grillé"],0,"À l'arrêt, la pression devrait correspondre à la saturation à température ambiante."],
 ["diagnostic","HP haute, écart de 25 K entre condensation et air extérieur, ventilateur arrêté :",["Panne du ventilateur de condenseur","Manque de fluide","Évaporateur givré","Détendeur bloqué"],0,"La chaleur n'est plus évacuée."],
 ["diagnostic","Que fais-tu quand tu constates un manque de fluide ?",["Je cherche et je répare la fuite avant de recharger","Je rajoute du fluide et je pars","Je baisse la consigne","Je change le compresseur"],0,"La réglementation impose de réparer les fuites."],
 ["diagnostic","Le filtre à air de l'unité intérieure est bouché. On observe…",["BP basse, surchauffe faible","HP très haute","BP haute","Sous-refroidissement très élevé"],0,"L'évaporateur manque d'air."]
);

C.vf.push(
 ["Un manque de fluide est presque toujours causé par une fuite.",true,"Un circuit étanche ne perd pas de fluide."],
 ["Une restriction et un manque de fluide se distinguent par le sous-refroidissement.",true,"Faible pour le manque, élevé pour la restriction."],
 ["Une HP trop haute signifie toujours un excès de fluide.",false,"Condenseur sale, ventilateur HS ou incondensables donnent aussi une HP haute."]
);
