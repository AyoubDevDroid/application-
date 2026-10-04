/* NIVEAU 2 — Mesures et instruments */
C.modules.push({id:"mesure",n:2,i:"📟",t:"Mesures et instruments",d:"Multimètre, VAT, pince ampèremétrique, continuité",
 s:[{h:"Bien brancher ses appareils",l:["<b>Voltmètre</b> : en <b>parallèle</b> (aux bornes).","<b>Ampèremètre</b> : en <b>série</b> (dans le circuit).","<b>Pince ampèremétrique</b> : autour d'<b>un seul</b> conducteur."]},
    {h:"Le VAT",l:["Vérificateur d'Absence de Tension : on le <b>teste avant et après</b> la vérification.","On vérifie entre <b>tous</b> les conducteurs, et entre chacun et la terre.","Un multimètre <b>ne remplace pas</b> un VAT."]},
    {h:"Le multimètre au quotidien",l:["<b>V~</b> : tension alternative ; <b>V⎓</b> : tension continue.","<b>Ω</b> et <b>continuité</b> (bip) : <b>toujours hors tension</b>.","On commence par le calibre le plus élevé (ou le mode automatique)."]},
    {h:"Mesurer pour comprendre",l:["Tension normale phase-neutre : <b>≈ 230 V</b> ; phase-terre : <b>≈ 230 V</b> ; neutre-terre : <b>≈ 0 V</b>.","Une mesure anormale est un <b>indice</b> : on la compare toujours à ce qu'on attend.","On mesure de point en point pour trouver où la tension disparaît."]}],
 k:["VAT","Multimètre","Pince ampèremétrique","Continuité"]});

C.fiches.mesure={
 intro:"Un électricien passe une grande partie de son temps à mesurer : pour vérifier qu'il peut travailler en sécurité, pour contrôler son travail et pour trouver une panne. Mal brancher un appareil de mesure peut le détruire… ou te blesser. Bien mesurer, c'est savoir quoi mesurer, avec quoi, et à quoi s'attendre.",
 s:[
  {p:"Le <b>voltmètre</b> mesure une différence entre deux points : on le branche <b>aux bornes</b>, en parallèle. L'<b>ampèremètre</b> mesure ce qui passe dans le fil : il doit être <b>dans le circuit</b>, en série. La <b>pince ampèremétrique</b> évite d'ouvrir le circuit : elle mesure le champ magnétique autour d'un seul fil.",
   fig:{type:"svg",legende:"Voltmètre aux bornes (parallèle), pince autour d'un seul fil",svg:"<svg viewBox='0 0 300 130'><path d='M20 30H280M20 100H280' stroke='#46508f' stroke-width='5'/><path d='M20 30H280M20 100H280' stroke='var(--pri)' stroke-width='2' stroke-dasharray='6 8' class='flow'/><circle cx='240' cy='65' r='16' fill='var(--pri)' class='glow'/><path d='M240 30V49M240 81V100' stroke='var(--pri)' stroke-width='3'/><g class='pop'><path d='M80 30V50M80 80V100' stroke='#3db5ff' stroke-width='2.5'/><circle cx='80' cy='65' r='15' fill='var(--card)' stroke='#3db5ff' stroke-width='2.5'/><text x='80' y='70' text-anchor='middle' font-size='13' font-weight='900' fill='#3db5ff'>V</text></g><g class='pop' style='animation-delay:.4s'><ellipse cx='160' cy='30' rx='14' ry='18' fill='none' stroke='#2ed47a' stroke-width='4'/><text x='160' y='64' text-anchor='middle' font-size='11' font-weight='900' fill='#2ed47a'>pince</text></g></svg>"},
   att:"Un multimètre réglé en ampèremètre et branché en parallèle sur une prise crée un <b>court-circuit</b> : le fusible de l'appareil saute, ou pire. Avant chaque mesure : vérifie la position du sélecteur et des cordons.",
   ex:"La pince refermée autour du câble complet (phase + neutre) affiche 0 A : les deux courants, opposés, s'annulent. Il faut prendre un seul conducteur.",
   q:["Pour mesurer l'intensité sans couper le circuit, on utilise…",["Une pince ampèremétrique","Un voltmètre","Un VAT","Un ohmmètre"],0,"La pince se referme autour d'un seul conducteur."]},
  {p:"Le <b>VAT</b> (vérificateur d'absence de tension) est l'outil de sécurité n°1. On le teste sur une source sous tension <b>avant</b> (pour être sûr qu'il marche), on vérifie l'absence de tension entre tous les conducteurs actifs et entre chacun et la terre, puis on le reteste <b>après</b>. Il est conçu pour cette seule tâche : pas de calibre à choisir, pas de mauvaise position possible.",
   fig:{type:"flux",legende:"Utiliser le VAT",etapes:["Tester le VAT sur une source connue","Vérifier : phase-neutre, phase-terre, neutre-terre","Retester le VAT sur la source connue","Je peux travailler"]},
   q:["Pourquoi retester le VAT après la vérification ?",["Pour être sûr qu'il n'est pas tombé en panne pendant la mesure","Pour recharger ses piles","Pour mesurer la terre","Ce n'est pas utile"],0,"S'il est tombé en panne, il aurait affiché « pas de tension » à tort."]},
  {p:"Le <b>multimètre</b> est l'outil de diagnostic. En position <b>V~</b>, il mesure la tension alternative (le réseau) ; en <b>V⎓</b>, la tension continue (piles, batteries, panneaux solaires). Les positions <b>Ω</b> (résistance) et <b>continuité</b> (il bipe si le circuit est fermé) s'utilisent <b>uniquement hors tension</b> : l'appareil envoie lui-même un petit courant pour mesurer.",
   fig:{type:"cycle",centre:"Multimètre",etapes:[["V~<br>réseau 230 V","#ffc83d"],["V⎓<br>piles, batteries","#3db5ff"],["Ω<br>hors tension","#2ed47a"],["Continuité 🔊<br>hors tension","#b18cff"]]},
   ex:"Pour savoir si un fil n'est pas coupé dans un mur : circuit consigné, tu relies les deux extrémités du fil à tester au multimètre en position continuité (avec un fil de retour connu) : s'il bipe, le fil est continu.",
   q:["La position « continuité » du multimètre s'utilise…",["Hors tension","Sous tension","Sur le disjoncteur de branchement","Seulement en 400 V"],0,"Ω et continuité : toujours hors tension."]},
  {p:"Une mesure n'a de sens que si on sait ce qu'on attend. Sur une prise saine : <b>230 V</b> entre phase et neutre, <b>230 V</b> entre phase et terre, <b>presque 0 V</b> entre neutre et terre. En triphasé : <b>400 V</b> entre phases. Quand on cherche une panne, on mesure de point en point, depuis le tableau vers l'appareil : la panne est entre le dernier point où la tension est bonne et le premier où elle disparaît.",
   fig:{type:"barres",legende:"Valeurs attendues sur une prise saine",items:[["Phase – neutre",230,"V"],["Phase – terre",230,"V"],["Neutre – terre (quelques volts au plus)",0,"V"]]},
   info:"230 V entre phase et neutre mais 0 V entre phase et terre ? La terre n'est probablement pas raccordée à cette prise.",
   q:["Sur une prise saine, la tension entre neutre et terre est…",["Presque 0 V","230 V","400 V","115 V"],0,"Neutre et terre sont au potentiel de la terre : quelques volts au plus."]}
 ],
 retenir:["Voltmètre en parallèle, ampèremètre en série, pince autour d'un seul fil.","VAT : tester, vérifier entre tous les conducteurs, retester.","Ω et continuité : toujours hors tension.","Prise saine : P-N 230 V, P-T 230 V, N-T ≈ 0 V."]
};

C.lexique.push(
 ["Pince ampèremétrique","Appareil qui mesure le courant en se refermant autour d'un seul conducteur, sans ouvrir le circuit."],
 ["Continuité","Vérification qu'un conducteur n'est pas coupé (le multimètre bipe), à faire hors tension."]
);

C.quiz.push(
 ["mesure","Un voltmètre se branche…",["En parallèle","En série","Autour du câble","Sur la terre seule"],0,"Le voltmètre se branche aux bornes, en parallèle."],
 ["mesure","Un ampèremètre se branche…",["En série","En parallèle","Sur le neutre seul","Hors tension"],0,"L'ampèremètre est dans le circuit, en série."],
 ["mesure","La pince ampèremétrique se place autour…",["D'un seul conducteur","De tout le câble","Du disjoncteur","De la prise"],0,"Autour du câble entier, les courants s'annulent : la pince affiche 0."],
 ["mesure","Avant et après la VAT, on doit…",["Tester le VAT","Couper le différentiel","Mesurer la terre","Changer les piles"],0,"On vérifie que le VAT fonctionne avant et après."],
 ["mesure","Pour mesurer la tension d'une batterie, on règle le multimètre sur…",["V⎓ (continu)","V~ (alternatif)","Ω","A"],0,"Une batterie fournit du continu."],
 ["mesure","Sur une prise, tu mesures 230 V entre phase et neutre et 0 V entre phase et terre. Conclusion ?",["La terre n'est pas raccordée","Tout est normal","Le neutre est coupé","La phase est coupée"],0,"Phase-terre devrait aussi donner environ 230 V."],
 ["mesure","Pourquoi ne pas mesurer une résistance sous tension ?",["L'ohmmètre envoie son propre courant : la mesure est fausse et l'appareil peut être détruit","Ça marche très bien","Pour économiser les piles","C'est plus lent"],0,"Ω et continuité : toujours hors tension."],
 ["mesure","Pour trouver un fil coupé, on mesure…",["De point en point, depuis le tableau vers l'appareil","Au hasard","Seulement au tableau","Seulement à l'appareil"],0,"La panne est entre le dernier point bon et le premier point mauvais."]
);

C.vf.push(
 ["Un multimètre peut remplacer un VAT.",false,"Le VAT est obligatoire pour la vérification d'absence de tension."],
 ["Un ampèremètre se branche en parallèle.",false,"En série."],
 ["Il faut tester le VAT avant et après la mesure.",true,"Pour être sûr qu'il marche."],
 ["La pince ampèremétrique refermée sur tout le câble (phase + neutre) affiche le courant de l'appareil.",false,"Les deux courants s'annulent : elle affiche 0 (sauf fuite)."]
);
