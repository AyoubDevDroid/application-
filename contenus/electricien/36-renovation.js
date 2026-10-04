/* NIVEAU 3 — Rénovation et mise en sécurité */
C.modules.push({id:"renovation",n:3,i:"🏚️",t:"Rénovation et mise en sécurité",d:"Diagnostic, installations anciennes, mise en sécurité",
 s:[{h:"Reconnaître une installation dangereuse",l:["<b>Fusibles</b> à broches en porcelaine, tableau en bois.","Fils sous <b>tissu</b> ou caoutchouc durci, <b>pas de terre</b>.","Prises sans terre, <b>pas de différentiel 30 mA</b>, conducteurs nus accessibles."]},
    {h:"Les points de sécurité essentiels",l:["Un <b>appareil général de commande et de protection</b> facile à atteindre.","Au moins un <b>différentiel</b> à l'origine de l'installation.","Une <b>prise de terre</b> et les circuits reliés à la terre.","Une <b>protection</b> adaptée à chaque circuit (section ↔ calibre).","La <b>liaison équipotentielle</b> et le respect des volumes dans la salle de bain.","Aucun <b>matériel vétuste</b> ou conducteur nu accessible."]},
    {h:"Passer les câbles en rénovation",l:["Réutiliser les <b>anciens conduits</b> avec le tire-fil quand c'est possible.","Sinon : <b>moulures</b>, <b>plinthes techniques</b>, <b>goulottes</b>.","Passer dans les combles, les vides de cloison, les faux plafonds."]},
    {h:"Le diagnostic électrique",l:["Obligatoire à la <b>vente</b> (et à la location) d'un logement dont l'installation a <b>plus de 15 ans</b>.","Il signale les anomalies sans les réparer.","C'est souvent le point de départ d'un chantier de mise en sécurité."]}],
 k:["Mise en sécurité","Diagnostic électrique","Moulure","Défaut d'isolement"]});

C.fiches.renovation={
 intro:"La moitié du travail d'un électricien du bâtiment se fait dans l'existant. Une installation de 40 ans peut fonctionner tous les jours et être dangereuse : pas de terre, pas de différentiel, des fils dont l'isolant tombe en poussière. Savoir reconnaître ces dangers et remettre en sécurité sans tout casser est un vrai savoir-faire.",
 s:[
  {p:"Certains signes ne trompent pas. Un tableau avec des <b>fusibles à broches en porcelaine</b> ou monté sur une planche en bois. Des fils gainés de <b>tissu</b> ou de caoutchouc qui s'effrite. Des prises <b>sans broche de terre</b>, des interrupteurs à manette en porcelaine. L'absence de tout <b>différentiel 30 mA</b>. Ces installations n'étaient pas illégales à leur époque, mais elles ne protègent plus les personnes selon les règles actuelles.",
   fig:{type:"cycle",centre:"Signes d'une installation ancienne",etapes:[["Fusibles porcelaine","#ff8a3d"],["Fils sous tissu","#ffc83d"],["Prises sans terre","#ff5470"],["Pas de 30 mA","#b18cff"]]},
   att:"Un fil sous tissu ou caoutchouc durci peut perdre son isolant au moindre mouvement. Dans une installation ancienne, on manipule les fils le moins possible, et on prévoit leur remplacement.",
   q:["Lequel de ces signes indique une installation à mettre en sécurité ?",["Des prises sans terre et pas de différentiel 30 mA","Des disjoncteurs repérés","Un tableau dans la GTL","Des bornes automatiques"],0,"Sans terre ni 30 mA, les personnes ne sont plus protégées."]},
  {p:"Quand le client ne peut pas tout refaire, on réalise une <b>mise en sécurité</b>. Elle reprend les points de sécurité essentiels contrôlés par le diagnostic : un appareil général de commande accessible, un différentiel à l'origine, une prise de terre avec les circuits reliés, une protection adaptée à la section de chaque circuit, la liaison équipotentielle et le respect des volumes dans la salle de bain, et la suppression du matériel dangereux. C'est souvent : <b>tableau neuf avec différentiels</b>, création ou amélioration de la <b>terre</b>, et remplacement des éléments vétustes.",
   fig:{type:"flux",legende:"Une mise en sécurité typique",etapes:["Diagnostic de l'existant","Tableau neuf : différentiels 30 mA + disjoncteurs adaptés aux sections","Prise de terre créée ou améliorée, terre tirée aux prises","Salle de bain : volumes et liaison équipotentielle","Remplacement des fils et appareils vétustes","Mesures et essais"]},
   ex:"Une maison des années 1970 : tableau à fusibles, pas de terre aux prises de la cuisine. Mise en sécurité : tableau neuf avec 3 différentiels, piquet de terre et conducteur de terre jusqu'au tableau, remplacement des prises de la cuisine et de la salle de bain avec terre.",
   q:["Que fait-on en priorité dans une installation sans aucune protection différentielle ?",["Installer des différentiels 30 mA","Changer les ampoules","Peindre le tableau","Ajouter des multiprises"],0,"Le 30 mA est la protection principale des personnes."]},
  {p:"En rénovation, on évite de casser. On <b>réutilise les conduits existants</b> : on tire les nouveaux fils avec les anciens ou avec le tire-fil. On passe par les <b>combles</b>, les <b>vides sanitaires</b>, les <b>faux plafonds</b>, l'intérieur des <b>cloisons</b> creuses. Quand on doit rester en apparent, on utilise des <b>moulures</b>, des <b>plinthes techniques</b> ou des <b>goulottes</b>, posées droites et proprement.",
   ex:"Pour ajouter une prise dans une chambre, tu descends un câble depuis les combles dans le vide de la cloison en plaques de plâtre, avec une aiguille et un aimant, et tu poses une boîte à griffes.",
   q:["En rénovation, pour ajouter un circuit sans saignée, on peut…",["Passer par les combles ou en moulure","Coller le câble au mur avec du ruban","Poser les fils au sol sous le tapis","Utiliser une rallonge"],0,"Combles, cloisons creuses, moulures, plinthes techniques."]},
  {p:"Le <b>diagnostic électrique</b> est obligatoire lors de la <b>vente</b> ou de la <b>location</b> d'un logement dont l'installation a <b>plus de 15 ans</b>. Réalisé par un diagnostiqueur certifié, il liste les anomalies (absence de terre, de différentiel, matériel vétuste, non-respect des volumes…) sans les réparer. Le client arrive souvent chez l'électricien avec ce rapport : il sert de cahier des charges pour la mise en sécurité.",
   q:["Le diagnostic électrique est obligatoire à la vente si l'installation a plus de…",["15 ans","2 ans","50 ans","100 ans"],0,"Plus de 15 ans."]}
 ],
 retenir:["Signes d'alerte : fusibles porcelaine, fils sous tissu, prises sans terre, pas de 30 mA.","Mise en sécurité : appareil général, différentiel, terre, protection adaptée, salle de bain, plus de matériel dangereux.","Rénovation : réutiliser les conduits, passer par les vides, moulures et goulottes.","Diagnostic obligatoire à la vente ou à la location si l'installation a plus de 15 ans."]
};

C.lexique.push(
 ["Mise en sécurité","Travaux qui reprennent les points de sécurité essentiels d'une installation ancienne sans tout refaire."],
 ["Diagnostic électrique","État de l'installation intérieure obligatoire à la vente ou à la location d'un logement de plus de 15 ans."],
 ["Moulure","Petit profilé fixé au mur pour faire passer des fils en apparent."]
);

C.quiz.push(
 ["renovation","Un tableau à fusibles en porcelaine sur planche en bois indique…",["Une installation ancienne à mettre en sécurité","Une installation neuve","Un tableau de chantier","Une installation photovoltaïque"],0,"C'est du matériel d'une autre époque, qui ne protège plus les personnes."],
 ["renovation","Lors d'une mise en sécurité, la protection de chaque circuit doit être…",["Adaptée à la section de ses conducteurs","La plus grosse possible","Supprimée","Un fusible de 32 A partout"],0,"Section ↔ calibre : 1,5 mm² / 16 A, 2,5 mm² / 20 A…"],
 ["renovation","Pour passer un câble dans une cloison en plaques de plâtre sans la casser, on utilise…",["Une aiguille (tire-fil) et parfois un aimant","Une masse","Un burin","Une rainureuse"],0,"On descend le câble dans le vide de la cloison."],
 ["renovation","Qui réalise le diagnostic électrique à la vente ?",["Un diagnostiqueur certifié","Le notaire","Le voisin","Le distributeur"],0,"Il liste les anomalies sans les réparer."],
 ["renovation","Des fils sous gaine de tissu doivent être…",["Remplacés (isolant vétuste)","Repeints","Gardés tels quels","Mouillés pour les assouplir"],0,"Leur isolant se dégrade et peut tomber au moindre mouvement."]
);

C.vf.push(
 ["Une installation ancienne qui fonctionne est forcément sûre.",false,"Elle peut fonctionner sans protéger les personnes (pas de terre, pas de 30 mA)."],
 ["En rénovation, on peut réutiliser les anciens conduits pour tirer de nouveaux fils.",true,"C'est souvent la solution la plus propre."],
 ["Le diagnostic électrique répare les anomalies qu'il trouve.",false,"Il les signale ; les travaux sont faits par un électricien."]
);
