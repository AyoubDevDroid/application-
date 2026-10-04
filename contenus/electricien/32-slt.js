/* NIVEAU 3 — Les schémas de liaison à la terre */
C.modules.push({id:"slt",n:3,i:"🌍",t:"Les schémas de liaison à la terre",d:"TT, TN-S, TN-C, IT : comment le défaut est éliminé",
 s:[{h:"Deux lettres",l:["1re lettre : le <b>neutre</b> du transformateur. <b>T</b> = relié à la terre ; <b>I</b> = isolé (ou impédant).","2e lettre : les <b>masses</b> de l'installation. <b>T</b> = reliées à une terre locale ; <b>N</b> = reliées au neutre.","On parle de <b>SLT</b> (schéma de liaison à la terre) ou de « régime de neutre »."]},
    {h:"Le schéma TT",l:["Neutre à la terre chez le distributeur, masses à la <b>terre locale</b> du bâtiment.","Un défaut fait circuler un courant <b>faible</b> (limité par les terres) : c'est le <b>différentiel</b> qui coupe.","C'est le schéma des <b>logements</b> raccordés au réseau public en France."]},
    {h:"Le schéma TN",l:["Les masses sont reliées au <b>neutre</b> : un défaut devient un <b>court-circuit</b>, coupé par le disjoncteur ou le fusible.","<b>TN-C</b> : un seul conducteur <b>PEN</b> fait neutre et protection.","<b>TN-S</b> : neutre (N) et protection (PE) séparés."]},
    {h:"Le schéma IT",l:["Neutre <b>isolé</b> de la terre : le 1er défaut ne crée presque aucun courant, <b>on ne coupe pas</b>.","Un <b>contrôleur permanent d'isolement</b> (CPI) signale ce 1er défaut, qu'on doit rechercher rapidement.","Utilisé quand la <b>continuité de service</b> est vitale : blocs opératoires, certaines industries."]}],
 k:["Schéma TT","Schéma TN","Schéma IT","PEN","CPI"]});

C.fiches.slt={
 intro:"Que se passe-t-il quand un défaut met une carcasse sous tension ? La réponse dépend de la façon dont le neutre et les masses sont reliés à la terre : c'est le schéma de liaison à la terre. En logement, tu seras toujours en TT, mais dans un immeuble, une usine ou un hôpital, tu rencontreras TN et IT. Les confondre peut être dangereux.",
 s:[
  {p:"Le nom du schéma tient en deux lettres. La <b>première</b> dit comment est relié le <b>neutre du transformateur</b> : T (terre) ou I (isolé). La <b>deuxième</b> dit comment sont reliées les <b>masses</b> de l'installation : T (à une terre locale) ou N (au neutre). Pour TN, on précise C (neutre et protection combinés) ou S (séparés).",
   fig:{type:"flux",legende:"Lire « TT »",etapes:[["1re lettre T","neutre du transformateur à la terre"],["2e lettre T","masses à la terre du bâtiment"],["Résultat","schéma TT (logement)"]]},
   q:["Dans « TN », que signifie le N ?",["Les masses sont reliées au neutre","Le neutre est isolé","Il n'y a pas de neutre","Neutre bleu"],0,"2e lettre N = masses reliées au neutre."]},
  {p:"En <b>TT</b>, le neutre est à la terre au poste du distributeur, et les masses de la maison à sa propre prise de terre. Entre les deux, le courant de défaut passe par le sol : il est <b>faible</b> (quelques ampères au plus), pas assez pour faire déclencher un disjoncteur. C'est donc le <b>différentiel</b> qui assure la protection. Sans différentiel, un TT ne protège pas les personnes. C'est le schéma imposé aux logements raccordés au réseau public.",
   fig:{type:"cycle",centre:"Défaut en TT",etapes:[["Phase sur la carcasse","#ff5470"],["Courant par la terre locale","#ffc83d"],["Retour par la terre du transfo","#3db5ff"],["Courant faible → le différentiel coupe","#2ed47a"]]},
   att:"En TT, on ne relie jamais le neutre à la terre dans l'installation : le différentiel déclencherait sans cesse, et une coupure du neutre mettrait toutes les masses sous tension.",
   q:["En schéma TT, qui coupe en cas de défaut d'isolement ?",["Le différentiel","Le disjoncteur seul","Le fusible seul","Personne"],0,"Le courant de défaut est trop faible pour un disjoncteur : le différentiel coupe."]},
  {p:"En <b>TN</b>, les masses sont reliées au neutre du transformateur par un conducteur. Un défaut entre une phase et une masse devient alors un vrai <b>court-circuit</b> : le courant est très fort, le disjoncteur ou le fusible coupe. En <b>TN-C</b>, un seul conducteur, le <b>PEN</b>, sert de neutre et de protection : il ne doit jamais être coupé. En <b>TN-S</b>, le neutre (N) et le conducteur de protection (PE) sont séparés. On le trouve dans les bâtiments qui ont leur propre transformateur (industrie, grands bâtiments).",
   att:"Le PEN ne se coupe jamais et ne passe jamais dans un différentiel : couper le PEN, c'est couper la protection de toutes les masses.",
   q:["En TN-C, le conducteur PEN…",["Fait à la fois neutre et protection","Est un deuxième neutre","Est une phase","Est facultatif"],0,"PEN = PE + N combinés."]},
  {p:"En <b>IT</b>, le neutre du transformateur est <b>isolé</b> de la terre (ou relié par une grande impédance). Au premier défaut, le courant ne trouve presque pas de chemin de retour : il est minuscule, aucun danger, et <b>rien ne coupe</b>. Un <b>contrôleur permanent d'isolement (CPI)</b> déclenche une alarme : il faut trouver et réparer ce défaut avant qu'un deuxième apparaisse (le second défaut, lui, provoque une coupure). Ce schéma est choisi quand une coupure serait plus dangereuse que le défaut : bloc opératoire, process industriel continu.",
   fig:{type:"cycle",centre:"Quel schéma, où ?",etapes:[["TT<br>logements, petits commerces","#2ed47a"],["TN-S / TN-C<br>industrie, grands bâtiments","#ffc83d"],["IT<br>hôpitaux, process continus","#3db5ff"]]},
   q:["Quel schéma laisse fonctionner l'installation au premier défaut ?",["IT","TT","TN-C","TN-S"],0,"En IT, le 1er défaut est signalé par le CPI, sans coupure."]}
 ],
 retenir:["1re lettre = neutre (T ou I) ; 2e lettre = masses (T ou N).","TT (logement) : défaut faible → le différentiel coupe.","TN : défaut = court-circuit → disjoncteur ou fusible. PEN jamais coupé.","IT : 1er défaut signalé par le CPI, pas de coupure (continuité de service)."]
};

C.lexique.push(
 ["Schéma TT","Neutre du transformateur à la terre, masses à la terre locale. Protection par différentiel. Schéma des logements."],
 ["Schéma TN","Masses reliées au neutre du transformateur : un défaut devient un court-circuit, coupé par disjoncteur ou fusible."],
 ["Schéma IT","Neutre isolé de la terre : le premier défaut ne coupe pas, il est signalé par un contrôleur d'isolement."],
 ["PEN","Conducteur qui assure à la fois le rôle de neutre et de conducteur de protection (schéma TN-C)."],
 ["CPI","Contrôleur Permanent d'Isolement : surveille l'isolement d'une installation IT et signale le premier défaut."]
);

C.quiz.push(
 ["slt","Quel est le schéma de liaison à la terre des logements en France ?",["TT","IT","TN-C","TN-S"],0,"Les logements raccordés au réseau public sont en TT."],
 ["slt","Que signifie la 1re lettre d'un SLT ?",["La liaison du neutre du transformateur","La couleur des fils","Le type de différentiel","La tension"],0,"T = neutre à la terre ; I = neutre isolé."],
 ["slt","En TN, un défaut phase-masse provoque…",["Un court-circuit coupé par le disjoncteur ou le fusible","Rien","Une alarme seulement","Une baisse de tension"],0,"Les masses sont au neutre : le défaut est un court-circuit."],
 ["slt","Quel appareil signale le 1er défaut en IT ?",["Le contrôleur permanent d'isolement (CPI)","Le disjoncteur","Le VAT","Le parafoudre"],0,"Le CPI surveille l'isolement en continu."],
 ["slt","Pourquoi utiliser le schéma IT dans un bloc opératoire ?",["Pour ne pas couper au premier défaut","Parce que c'est moins cher","Pour avoir plus de puissance","Pour supprimer la terre"],0,"Une coupure en pleine opération serait plus dangereuse que le défaut."],
 ["slt","Que ne faut-il jamais faire avec un conducteur PEN ?",["Le couper","Le raccorder","Le mesurer","Le repérer"],0,"Couper le PEN supprime la protection de toutes les masses."]
);

C.vf.push(
 ["En schéma TT, le différentiel est indispensable à la protection des personnes.",true,"Le courant de défaut est trop faible pour faire déclencher un disjoncteur."],
 ["En schéma IT, le premier défaut provoque une coupure immédiate.",false,"Il est seulement signalé ; c'est le deuxième défaut qui coupe."],
 ["En TN-S, le neutre et le conducteur de protection sont séparés.",true,"S = séparés ; C = combinés (PEN)."]
);
