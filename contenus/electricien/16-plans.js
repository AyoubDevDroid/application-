/* NIVEAU 1 — Lire un plan et un schéma */
C.modules.push({id:"plans",n:1,i:"📐",t:"Lire un plan et un schéma",d:"Plan d'implantation, unifilaire, développé, symboles",
 s:[{h:"Les trois documents",l:["<b>Plan d'implantation</b> (plan architectural) : où sont placés prises, interrupteurs, points lumineux.","<b>Schéma unifilaire</b> : le tableau, circuit par circuit, avec une seule ligne par circuit.","<b>Schéma développé</b> : tous les conducteurs dessinés, pour comprendre le fonctionnement."]},
    {h:"Les symboles normalisés",l:["Chaque appareil a un <b>symbole</b> défini par la norme (NF EN 60617).","Les symboles sont les mêmes d'un électricien à l'autre : c'est une langue commune.","Une <b>légende</b> accompagne toujours le plan."]},
    {h:"Le repérage",l:["Chaque circuit a un <b>numéro</b> ou un <b>nom</b> (« C3 – Prises chambre 1 »).","On retrouve ce repérage au tableau, sur le schéma et parfois sur les câbles.","Le schéma du tableau est <b>remis au client</b> à la fin du chantier."]},
    {h:"Du plan au chantier",l:["On compte les appareillages pour la <b>liste de matériel</b>.","On mesure les longueurs de câble (à l'échelle du plan, + marge).","On respecte les <b>hauteurs</b> indiquées (prises, interrupteurs, tableau)."]}],
 k:["Schéma unifilaire","Schéma développé","Plan d'implantation","Repérage"]});

C.fiches.plans={
 intro:"Un électricien qui sait lire un plan peut travailler sur n'importe quel chantier, en France comme ailleurs. Les plans et les schémas sont la langue du métier : ils disent où poser, quoi poser et comment raccorder. Ce module t'apprend à les lire ; le jeu « Symboles » t'entraîne à les reconnaître.",
 s:[
  {p:"Sur un chantier, tu croiseras trois documents. Le <b>plan d'implantation</b> est dessiné sur le plan de l'architecte : il montre <b>où</b> placer chaque appareil. Le <b>schéma unifilaire</b> décrit le tableau : chaque circuit est un trait, avec sa protection, sa section de câble et ce qu'il alimente. Le <b>schéma développé</b> dessine chaque fil : il sert à comprendre <b>comment</b> fonctionne un montage (va-et-vient, télérupteur, contacteur).",
   fig:{type:"cycle",centre:"Un chantier, trois documents",etapes:[["Plan d'implantation<br>OÙ ?","#ffc83d"],["Schéma unifilaire<br>QUELLE protection ?","#3db5ff"],["Schéma développé<br>COMMENT ça marche ?","#2ed47a"]]},
   q:["Pour savoir où placer les prises d'une chambre, tu regardes…",["Le plan d'implantation","Le schéma développé","La facture","Le compteur"],0,"Le plan d'implantation indique l'emplacement de chaque appareillage."]},
  {p:"Les symboles sont normalisés : un point lumineux est un <b>cercle barré d'une croix</b>, une prise est un <b>demi-cercle</b>, un interrupteur est un <b>petit cercle avec un trait</b>. Sur le schéma développé, un disjoncteur est un contact avec une <b>croix</b>, un fusible un <b>rectangle traversé</b>, la terre <b>trois traits</b> de plus en plus courts.",
   fig:{type:"svg",legende:"Quelques symboles de plan : point lumineux, prise 2P+T, interrupteur, va-et-vient",svg:"<svg viewBox='0 0 300 90' fill='none' stroke='#fff' stroke-width='3' stroke-linecap='round'><g class='pop'><circle cx='40' cy='40' r='16'/><path d='M29 29L51 51M51 29L29 51'/></g><g class='pop' style='animation-delay:.2s'><path d='M95 30 A16 16 0 0 0 125 30'/><path d='M110 46V62M92 22H128'/></g><g class='pop' style='animation-delay:.4s'><circle cx='175' cy='52' r='7'/><path d='M180 47L200 25L206 31'/></g><g class='pop' style='animation-delay:.6s'><circle cx='255' cy='42' r='7'/><path d='M260 37L278 19L283 24M250 47L232 65L227 60'/></g><g fill='var(--mut)' stroke='none' font-size='10' font-weight='700' text-anchor='middle'><text x='40' y='82'>point lumineux</text><text x='110' y='82'>prise 2P+T</text><text x='185' y='82'>interrupteur</text><text x='255' y='82'>va-et-vient</text></g></svg>"},
   ex:"Sur le plan d'une chambre, tu vois : 1 cercle croisé au centre, 1 petit cercle avec un trait à côté de la porte, 3 demi-cercles avec un trait au-dessus. Tu lis : 1 point lumineux au plafond, 1 interrupteur simple allumage, 3 prises 2P+T.",
   q:["Sur un plan, un cercle barré d'une croix représente…",["Un point lumineux","Une prise","Un disjoncteur","La terre"],0,"Le cercle croisé est le symbole du point lumineux (ou d'une lampe)."]},
  {p:"Le <b>repérage</b> relie le terrain au tableau. Chaque disjoncteur porte une étiquette (« Prises cuisine », « Éclairage séjour ») et le même nom figure sur le schéma unifilaire. Le jour d'une panne, c'est ce qui permet de couper le bon circuit en quelques secondes. La norme demande que le tableau soit repéré et que le schéma soit remis à l'utilisateur.",
   att:"Un tableau sans repérage, c'est un risque : on coupe au hasard, et on travaille parfois sur un circuit encore sous tension. C'est aussi un motif de refus au contrôle de conformité.",
   q:["À quoi sert le repérage des circuits au tableau ?",["À couper le bon circuit rapidement et en sécurité","À faire joli","À augmenter le calibre","À rien"],0,"Le repérage relie chaque disjoncteur à ce qu'il alimente."]},
  {p:"Avant de commencer, on prépare : on <b>compte</b> sur le plan chaque type d'appareillage (le « métré »), on mesure les longueurs de câble à l'<b>échelle</b> (en ajoutant les montées, descentes et une marge), et on prépare la <b>liste de matériel</b>. Une bonne préparation évite les allers-retours au fournisseur.",
   fig:{type:"flux",legende:"Longueur réelle d'un circuit à partir du plan (échelle 1/50 : 1 cm = 50 cm)",etapes:[["Mesure sur le plan","14 cm"],["× 50 (échelle)","7 m"],["+ montées et descentes","+ 3 m"],["+ marge de 10 %","≈ 11 m"]]},
   q:["Sur un plan au 1/50, 10 cm représentent…",["5 m","50 cm","10 m","1 m"],0,"10 cm × 50 = 500 cm = 5 m."]}
 ],
 retenir:["Plan d'implantation = OÙ ; unifilaire = le tableau ; développé = COMMENT ça marche.","Les symboles sont normalisés : une langue commune.","Repérage identique au tableau et sur le schéma, schéma remis au client.","Préparer : métré, longueurs à l'échelle + marge, liste de matériel."]
};

C.lexique.push(
 ["Schéma unifilaire","Schéma où chaque circuit est représenté par un seul trait, avec sa protection et sa section. Il décrit le tableau."],
 ["Schéma développé","Schéma où tous les conducteurs sont dessinés : il montre comment fonctionne un montage."],
 ["Plan d'implantation","Plan du bâtiment sur lequel on place les symboles des appareillages électriques."],
 ["Repérage","Identification de chaque circuit (étiquette au tableau, nom sur le schéma)."],
 ["Métré","Comptage des quantités (appareillages, longueurs) à partir des plans."]
);

C.quiz.push(
 ["plans","Quel document décrit le tableau, circuit par circuit ?",["Le schéma unifilaire","Le plan d'implantation","Le schéma développé","Le permis de construire"],0,"L'unifilaire liste chaque circuit avec sa protection et sa section."],
 ["plans","Pour comprendre le fonctionnement d'un va-et-vient, on dessine…",["Un schéma développé","Un plan de masse","Un unifilaire","Une coupe du mur"],0,"Le développé montre chaque conducteur et donc le fonctionnement."],
 ["plans","Sur un plan, un demi-cercle avec un trait au-dessus représente…",["Une prise 2P+T","Un interrupteur","Un point lumineux","Une sonnerie"],0,"Le demi-cercle est la prise ; le trait au-dessus indique le contact de terre."],
 ["plans","Le schéma de l'installation doit être…",["Remis au client","Jeté après le chantier","Gardé secret","Affiché dans la rue"],0,"Le schéma et le repérage servent à l'utilisateur et aux futurs dépanneurs."],
 ["plans","Le « métré » consiste à…",["Compter les quantités sur le plan","Mesurer la tension","Tester le différentiel","Peindre les murs"],0,"On compte appareillages et longueurs pour préparer le matériel."],
 ["plans","Un symbole normalisé sert à…",["Être compris par tous les électriciens","Décorer le plan","Remplacer la légende","Indiquer le prix"],0,"Les symboles sont une langue commune définie par la norme."]
);

C.vf.push(
 ["Le schéma développé montre tous les conducteurs.",true,"Contrairement à l'unifilaire, qui résume chaque circuit par un trait."],
 ["Un tableau sans repérage est conforme s'il fonctionne.",false,"Le repérage des circuits est obligatoire."],
 ["Sur un plan au 1/100, 1 cm représente 1 m.",true,"1 cm × 100 = 100 cm = 1 m."]
);
