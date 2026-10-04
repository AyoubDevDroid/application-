/* NIVEAU 2 — La tuyauterie frigorifique */
C.modules.push({id:"tuyauterie",n:2,i:"🔧",t:"La tuyauterie frigorifique",d:"Cuivre, dudgeon, brasage sous azote, retour d'huile, isolation",
 s:[{h:"Le cuivre frigorifique",l:["Tube en cuivre <b>déshydraté</b> et <b>bouchonné</b>, diamètres en <b>pouces</b> (1/4\", 3/8\", 1/2\", 5/8\"…).","Couronnes (recuit, cintrable) ou barres (écroui, rigide).","On garde les extrémités bouchées jusqu'au raccordement."]},
    {h:"Les raccords flare (dudgeon)",l:["Évasement à <b>45°</b> avec l'évaseur, écrou glissé avant.","Une goutte d'huile frigorifique sur l'évasement (selon le fabricant).","Serrage à la <b>clé dynamométrique</b>, au couple indiqué."]},
    {h:"Le brasage fort",l:["Brasure à l'<b>argent</b> (ou cuivre-phosphore pour cuivre/cuivre).","<b>Balayage d'azote</b> à faible débit dans le tube pendant le brasage : pas de calamine.","Chauffer le tube et le raccord, laisser la brasure couler par capillarité."]},
    {h:"Pose et isolation",l:["Tuyauteries bien <b>supportées</b>, sans contrainte.","Pentes et <b>pièges à huile</b> sur les colonnes montantes d'aspiration pour le retour d'huile.","<b>Isolation</b> de l'aspiration (et de la ligne liquide en clim) avec un isolant à cellules fermées."]}],
 k:["Dudgeon","Brasage","Azote","Calamine","Piège à huile"]});

C.fiches.tuyauterie={
 intro:"La plupart des fuites et beaucoup de pannes de compresseurs viennent de la tuyauterie : un dudgeon mal fait, une brasure poreuse, de la calamine qui bouche un détendeur, une colonne montante qui ne ramène pas l'huile. Le travail du tube est un savoir-faire de base, qui se voit et se juge au premier coup d'œil.",
 s:[
  {p:"Le cuivre frigorifique est livré <b>propre, sec et bouchonné</b> : il ne doit contenir ni humidité ni poussière. Ses diamètres sont en <b>pouces</b> (1/4\" = 6,35 mm ; 3/8\" = 9,52 mm ; 1/2\" = 12,7 mm ; 5/8\" = 15,88 mm). En <b>couronne</b> (recuit), il se cintre à la main ou à la cintreuse ; en <b>barre</b> (écroui), il est rigide et se raccorde par brasage. On laisse les bouchons jusqu'au dernier moment.",
   fig:{type:"barres",legende:"Diamètres courants (diamètre extérieur)",items:[["1/4\"",6.35,"mm"],["3/8\"",9.52,"mm"],["1/2\"",12.7,"mm"],["5/8\"",15.88,"mm"],["3/4\"",19.05,"mm"]]},
   q:["1/4 de pouce, c'est environ…",["6,35 mm","2,5 mm","25 mm","12,7 mm"],0,"1 pouce = 25,4 mm ; ÷ 4 = 6,35 mm."]},
  {p:"Les splits se raccordent par <b>raccords flare</b> (dudgeons). On coupe au coupe-tube, on ébavure tube vers le bas, on glisse l'écrou, on évase à 45° au bon diamètre. L'évasement doit être lisse, régulier, sans fissure. On serre à la <b>clé dynamométrique</b> au couple donné par le fabricant (il dépend du diamètre) : trop serré, l'évasement se fissure et fuira plus tard ; pas assez, il fuit tout de suite.",
   ex:"Un évasement trop court ne porte pas sur toute la surface conique de l'écrou : il fuit. Trop long, l'écrou ne se visse pas jusqu'au bout. On contrôle avec l'écrou avant de serrer.",
   q:["Quel angle pour un évasement flare frigorifique ?",["45°","90°","30°","60°"],0,"Les raccords flare frigorifiques sont à 45°."]},
  {p:"Le <b>brasage fort</b> assemble le cuivre avec une brasure qui fond vers 650–800 °C. Pendant toute la chauffe, on fait circuler un <b>faible débit d'azote</b> dans le tube : sinon, l'intérieur s'oxyde et forme de la <b>calamine</b>, des écailles noires qui partent avec le fluide et bouchent les filtres, les capillaires et les détendeurs. On chauffe uniformément tube et raccord, et c'est la chaleur du métal (pas la flamme) qui fait fondre la brasure, aspirée par capillarité.",
   fig:{type:"flux",legende:"Braser sous azote",etapes:["Nettoyer et emboîter","Ouvrir l'azote à faible débit","Chauffer le tube et le raccord","Apporter la brasure (elle coule seule)","Laisser refroidir sous azote"]},
   att:"Pas d'azote à pression élevée pendant le brasage : seulement un balayage à faible débit (la brasure ne prendrait pas). Et jamais de brasage sur un circuit qui contient du fluide.",
   q:["Pourquoi un balayage d'azote pendant le brasage ?",["Pour éviter la calamine à l'intérieur du tube","Pour refroidir la flamme","Pour tester l'étanchéité","Pour sécher la brasure"],0,"L'azote chasse l'oxygène : pas d'oxydation intérieure."]},
  {p:"L'huile du compresseur voyage avec le fluide et doit revenir au carter. Sur l'aspiration, la vitesse du gaz doit être suffisante (diamètre adapté) ; les tuyauteries horizontales ont une légère <b>pente</b> vers le compresseur ; une colonne montante a un <b>piège à huile</b> (siphon) à sa base. Les tuyaux sont <b>supportés</b> régulièrement, sans vibration ni contrainte. L'aspiration est <b>isolée</b> (isolant à cellules fermées) pour éviter condensation et réchauffage ; en clim, la ligne liquide l'est aussi.",
   att:"Un compresseur qui manque d'huile casse. Si l'huile reste piégée dans un évaporateur ou une longue colonne montante mal conçue, le compresseur se vide petit à petit.",
   q:["À quoi sert un piège à huile en bas d'une colonne montante d'aspiration ?",["À aider l'huile à remonter vers le compresseur","À filtrer l'humidité","À stocker du fluide","À isoler le tube"],0,"L'huile s'y accumule puis est entraînée par le gaz."]}
 ],
 retenir:["Cuivre déshydraté, bouchonné, diamètres en pouces.","Flare : 45°, évasement régulier, clé dynamométrique.","Brasure argent sous balayage d'azote : pas de calamine.","Pentes, pièges à huile, supports, isolation de l'aspiration."]
};

C.lexique.push(
 ["Brasage","Assemblage de tubes par une brasure fondue (vers 650–800 °C) qui pénètre par capillarité."],
 ["Azote","Gaz inerte et sec utilisé pour tester l'étanchéité et balayer les tubes pendant le brasage."],
 ["Calamine","Écailles d'oxyde formées dans un tube brasé sans azote ; elles bouchent filtres et détendeurs."],
 ["Piège à huile","Siphon en bas d'une colonne montante d'aspiration qui aide l'huile à remonter au compresseur."]
);

C.quiz.push(
 ["tuyauterie","Pendant le brasage d'un tube, on fait…",["Un balayage d'azote","Un tirage au vide","Une charge de fluide","Un dégazage"],0,"Évite la calamine à l'intérieur du tube."],
 ["tuyauterie","La calamine dans un circuit risque de…",["Boucher les filtres et les détendeurs","Améliorer l'étanchéité","Lubrifier le compresseur","Rien du tout"],0,"Les écailles circulent avec le fluide."],
 ["tuyauterie","Un raccord flare trop serré…",["Peut se fissurer et fuir plus tard","Est plus étanche","Ne pose aucun problème","Se desserre seul"],0,"D'où la clé dynamométrique."],
 ["tuyauterie","Le tube frigorifique doit rester…",["Bouchonné jusqu'au raccordement","Ouvert pour sécher","Rempli d'eau","Huilé à l'intérieur"],0,"On évite humidité et poussières."],
 ["tuyauterie","Quelle tuyauterie isole-t-on toujours ?",["L'aspiration","Le refoulement","Aucune","Le câble électrique"],0,"Elle est froide : condensation et réchauffage à éviter."]
);

C.vf.push(
 ["On peut braser sans azote si on va vite.",false,"La calamine se forme dès la chauffe."],
 ["Les diamètres de tube frigorifique sont souvent exprimés en pouces.",true,"1/4\", 3/8\", 1/2\"…"]
);

C.ordre.push({t:"Réaliser un raccord flare",ic:"🔧",s:["Couper le tube au coupe-tube","Ébavurer, tube vers le bas","Glisser l'écrou sur le tube","Évaser à 45° au bon diamètre","Contrôler l'évasement","Serrer à la clé dynamométrique"]});
