/* NIVEAU 2 — Le tableau et la GTL */
C.modules.push({id:"tableau",n:2,i:"🗄️",t:"Le tableau et la GTL",d:"Disjoncteur de branchement, GTL, répartition des circuits",
 s:[{h:"De la rue au tableau",l:["Réseau public → <b>compteur</b> (Linky) → <b>disjoncteur de branchement</b> → <b>tableau de répartition</b>.","Le disjoncteur de branchement est <b>différentiel 500 mA</b> et réglé selon l'<b>abonnement</b>.","Il sert d'<b>appareil général de commande</b> : il coupe tout le logement."]},
    {h:"La GTL",l:["<b>Gaine Technique Logement</b> : emplacement qui regroupe tableau électrique, tableau de communication et arrivées.","Obligatoire en logement neuf, sur <b>toute la hauteur</b> du mur.","Le tableau doit rester <b>accessible</b> (pas derrière un meuble fixe)."]},
    {h:"Organiser le tableau",l:["Une rangée commence par un <b>interrupteur différentiel</b>, suivi des disjoncteurs qu'il protège.","Les circuits sont <b>répartis</b> sur plusieurs différentiels : une panne ne plonge pas tout le logement dans le noir.","Prévoir une <b>réserve</b> d'emplacements libres (environ 20 %)."]},
    {h:"Raccorder proprement",l:["<b>Peignes</b> d'alimentation entre différentiel et disjoncteurs.","Serrage au <b>couple</b> indiqué, fils sans cuivre apparent hors borne.","<b>Repérage</b> de chaque circuit, schéma remis au client."]}],
 k:["Disjoncteur de branchement","GTL","TGBT","Peigne","Tableau de répartition"]});

C.fiches.tableau={
 intro:"Le tableau est le cœur de l'installation : tout part de là. Un tableau bien pensé rend l'installation sûre, facile à dépanner et évolutive. Un tableau mal organisé, c'est un logement entier dans le noir pour un simple défaut sur une prise, ou un dépanneur qui cherche une heure le bon disjoncteur.",
 s:[
  {p:"Le courant arrive du réseau public, passe par le <b>compteur</b>, puis par le <b>disjoncteur de branchement</b> (qui appartient au réseau, posé et plombé par le distributeur). Ce disjoncteur a deux rôles : il limite la puissance à celle de l'<b>abonnement</b> et il assure une protection <b>différentielle 500 mA</b> de toute l'installation. Ensuite vient le <b>tableau de répartition</b>, qui est sous ta responsabilité.",
   fig:{type:"flux",legende:"Le chemin du courant jusqu'au circuit",etapes:["Réseau public (distributeur)","Compteur (Linky)",["Disjoncteur de branchement","500 mA, réglé selon l'abonnement"],["Interrupteur différentiel","30 mA"],["Disjoncteur divisionnaire","16 A, 20 A, 32 A…"],"Le circuit (prises, éclairage…)"]},
   ex:"Abonnement 6 kVA en monophasé : le disjoncteur de branchement est réglé à 30 A (6 000 VA ÷ 230 V ≈ 26 A). 9 kVA : 45 A. 12 kVA : 60 A.",
   att:"L'électricien ne modifie pas le réglage du disjoncteur de branchement : il est plombé par le distributeur. Pour plus de puissance, le client change d'abonnement.",
   q:["Pour un abonnement de 9 kVA en monophasé, le disjoncteur de branchement est réglé à…",["45 A","30 A","60 A","9 A"],0,"9 000 ÷ 230 ≈ 39 A : on règle sur le calibre standard de 45 A."]},
  {p:"En logement neuf, la <b>GTL</b> (gaine technique logement) est obligatoire. C'est un emplacement réservé, souvent près de l'entrée, qui va du sol au plafond et regroupe le tableau électrique, le tableau de communication (box, prises RJ45) et les arrivées des réseaux. Elle doit être accessible : jamais dans un placard fermé à clé, jamais derrière un meuble fixe.",
   fig:{type:"svg",legende:"La GTL regroupe toutes les arrivées sur toute la hauteur",svg:"<svg viewBox='0 0 200 170'><rect x='60' y='5' width='80' height='160' rx='6' fill='var(--card)' stroke='var(--pri)' stroke-width='2' stroke-dasharray='5 4'/><rect x='68' y='18' width='64' height='60' rx='5' fill='#2a3266' stroke='#fff' stroke-width='1.5' class='pop'/><text x='100' y='52' text-anchor='middle' font-size='10' font-weight='800' fill='#fff'>Tableau ⚡</text><rect x='68' y='88' width='64' height='36' rx='5' fill='#2a3266' stroke='#3db5ff' stroke-width='1.5' class='pop' style='animation-delay:.3s'/><text x='100' y='110' text-anchor='middle' font-size='9' font-weight='800' fill='#3db5ff'>Communication</text><path d='M100 165V140' stroke='var(--pri)' stroke-width='3' class='flow' stroke-dasharray='4 4'/><text x='150' y='160' font-size='9' fill='var(--mut)' font-weight='700'>arrivées</text><text x='150' y='20' font-size='9' fill='var(--mut)' font-weight='700'>plafond</text></svg>"},
   info:"La norme demande aussi que les organes de commande du tableau soient à une hauteur accessible (entre <b>0,90 m et 1,80 m</b> du sol, ou à partir de 0,50 m pour un coffret avec porte). Dans les logements accessibles aux personnes handicapées : entre <b>0,75 m et 1,30 m</b>.",
   q:["Que contient la GTL ?",["Le tableau électrique, le tableau de communication et les arrivées","Le chauffe-eau","Les compteurs d'eau et de gaz","Seulement la box internet"],0,"Elle regroupe les équipements électriques et de communication du logement."]},
  {p:"Dans le tableau, on organise par <b>rangées</b> : un <b>interrupteur différentiel</b> en tête, puis les disjoncteurs des circuits qu'il protège. On <b>répartit</b> les circuits intelligemment : l'éclairage d'une pièce et ses prises sur deux différentiels différents, pour qu'un défaut ne laisse pas la pièce dans le noir. Les circuits qui demandent un <b>type A</b> (plaque, lave-linge) vont sur le différentiel de type A. On garde une <b>réserve</b> d'environ 20 % pour les ajouts futurs.",
   fig:{type:"svg",legende:"Une rangée : le différentiel alimente ses disjoncteurs par un peigne",svg:"<svg viewBox='0 0 300 120'><rect x='5' y='5' width='290' height='110' rx='8' fill='var(--card)'/><g class='pop'><rect x='15' y='25' width='50' height='70' rx='4' fill='#e8e8ef'/><text x='40' y='55' text-anchor='middle' font-size='9' font-weight='900' fill='#10142a'>ID 40 A</text><text x='40' y='68' text-anchor='middle' font-size='9' font-weight='900' fill='#10142a'>30 mA</text></g><g fill='#e8e8ef'><rect x='75' y='25' width='24' height='70' rx='3'/><rect x='103' y='25' width='24' height='70' rx='3'/><rect x='131' y='25' width='24' height='70' rx='3'/><rect x='159' y='25' width='24' height='70' rx='3'/><rect x='187' y='25' width='24' height='70' rx='3'/></g><g font-size='9' font-weight='900' fill='#10142a' text-anchor='middle'><text x='87' y='63'>16</text><text x='115' y='63'>16</text><text x='143' y='63'>20</text><text x='171' y='63'>20</text><text x='199' y='63'>2</text></g><path d='M40 20H200' stroke='var(--pri)' stroke-width='4' class='draw'/><path d='M87 20V25M115 20V25M143 20V25M171 20V25M199 20V25' stroke='var(--pri)' stroke-width='3'/><rect x='219' y='25' width='66' height='70' rx='3' fill='none' stroke='var(--mut)' stroke-dasharray='4 3'/><text x='252' y='63' text-anchor='middle' font-size='9' font-weight='800' fill='var(--mut)'>réserve</text></svg>"},
   ex:"Rangée 1 (différentiel type AC) : éclairage séjour, prises chambres, volets. Rangée 2 (différentiel type A) : plaque de cuisson, lave-linge. Rangée 3 (type AC) : éclairage chambres, prises séjour, chauffe-eau.",
   q:["Pourquoi répartir les circuits sur plusieurs différentiels ?",["Pour qu'un défaut ne coupe pas tout le logement","Pour faire des économies","Pour augmenter la puissance","C'est interdit"],0,"Si un différentiel déclenche, seuls ses circuits sont coupés."]},
  {p:"Un tableau propre se reconnaît au premier coup d'œil : <b>peignes</b> d'alimentation (plus sûrs et plus rapides que des fils de pontage), fils coupés à la bonne longueur et rangés, <b>aucun cuivre visible</b> hors des bornes, serrage au <b>couple</b> indiqué par le fabricant, et un <b>repérage</b> clair de chaque circuit. Le schéma unifilaire est rangé dans la porte du tableau ou remis au client.",
   att:"Un fil mal serré dans un tableau chauffe à chaque utilisation, jusqu'à brûler la borne. Après le raccordement, on tire sur chaque fil pour vérifier qu'il est bien tenu.",
   info:"Le TGBT (tableau général basse tension) est l'équivalent du tableau principal dans un immeuble, un commerce ou une usine.",
   q:["Que doit-on faire après avoir serré un fil dans un disjoncteur ?",["Tirer dessus pour vérifier qu'il est bien tenu","Le plier","Mettre du ruban adhésif","Rien"],0,"Le test de traction détecte un fil mal serré avant qu'il ne chauffe."]}
 ],
 retenir:["Compteur → disjoncteur de branchement (500 mA, abonnement) → tableau.","GTL obligatoire en neuf : tableau + communication, accessible.","Rangées : différentiel en tête + ses disjoncteurs ; circuits répartis ; 20 % de réserve.","Peignes, serrage au couple, test de traction, repérage, schéma remis."]
};

C.lexique.push(
 ["Disjoncteur de branchement","Disjoncteur différentiel 500 mA en tête de l'installation, réglé selon l'abonnement et plombé par le distributeur."],
 ["GTL","Gaine Technique Logement : emplacement obligatoire en neuf regroupant tableau électrique et tableau de communication."],
 ["TGBT","Tableau Général Basse Tension : tableau principal d'un bâtiment."],
 ["Peigne","Barrette de connexion qui alimente plusieurs appareils modulaires d'une même rangée."],
 ["Tableau de répartition","Tableau qui répartit l'alimentation entre les circuits du logement, avec leurs protections."],
 ["Abonnement","Puissance souscrite auprès du fournisseur, en kVA (3, 6, 9, 12…). Elle fixe le réglage du disjoncteur de branchement."]
);

C.quiz.push(
 ["tableau","Quelle est la sensibilité du disjoncteur de branchement ?",["500 mA","30 mA","10 mA","5 A"],0,"Le disjoncteur de branchement est un différentiel 500 mA."],
 ["tableau","Qui peut modifier le réglage du disjoncteur de branchement ?",["Le distributeur (après changement d'abonnement)","L'électricien quand il veut","Le client","Personne, jamais"],0,"Il est plombé : seul le distributeur intervient dessus."],
 ["tableau","Abonnement 6 kVA en monophasé : réglage du disjoncteur de branchement ?",["30 A","15 A","60 A","6 A"],0,"6 000 ÷ 230 ≈ 26 A → réglage 30 A."],
 ["tableau","La GTL doit être…",["Accessible","Fermée à clé","Derrière un meuble fixe","À l'extérieur"],0,"Le tableau doit pouvoir être manœuvré rapidement."],
 ["tableau","Quelle réserve d'emplacements prévoir dans un tableau ?",["Environ 20 %","Aucune","100 %","Un seul emplacement"],0,"Pour pouvoir ajouter des circuits plus tard."],
 ["tableau","Dans une rangée, qu'est-ce qui est en tête ?",["L'interrupteur différentiel","Le disjoncteur 2 A","Le télérupteur","Le parafoudre"],0,"Le différentiel protège les disjoncteurs qui le suivent."],
 ["tableau","À quoi sert le peigne dans un tableau ?",["Alimenter plusieurs appareils d'une rangée","Coiffer les fils","Fixer le tableau au mur","Mesurer le courant"],0,"Le peigne remplace les fils de pontage entre appareils modulaires."],
 ["tableau","Que signifie TGBT ?",["Tableau Général Basse Tension","Très Grande Boîte Technique","Tension Générale de Branchement Triphasé","Tableau de Gestion du Bâtiment"],0,"C'est le tableau principal d'un bâtiment."]
);

C.vf.push(
 ["Le disjoncteur de branchement coupe tout le logement.",true,"Il sert d'appareil général de commande."],
 ["Il est conseillé de mettre l'éclairage et les prises d'une même pièce sur deux différentiels différents.",true,"Un défaut ne laisse pas la pièce dans le noir."],
 ["On peut laisser du cuivre dénudé visible à la sortie d'une borne.",false,"Aucun cuivre ne doit être apparent hors de la borne."],
 ["La GTL est obligatoire en logement neuf.",true,"Elle regroupe tableau électrique et de communication."]
);

C.ordre.push(
 {t:"Monter un tableau électrique",ic:"🗄️",s:["Fixer le coffret dans la GTL","Placer les interrupteurs différentiels et les disjoncteurs sur les rails","Poser les peignes d'alimentation","Raccorder les circuits et les terres","Raccorder l'arrivée depuis le disjoncteur de branchement","Repérer chaque circuit","Contrôler, puis mettre sous tension"]},
 {t:"Remplacer un disjoncteur dans un tableau",ic:"🔁",s:["Prévenir le client et consigner le tableau","Vérifier l'absence de tension","Repérer et déconnecter les fils","Poser le disjoncteur neuf (même calibre, même courbe)","Reconnecter et serrer au couple","Remettre sous tension et essayer"]}
);
