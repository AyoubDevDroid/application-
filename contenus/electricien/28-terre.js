/* NIVEAU 2 — La mise à la terre */
C.modules.push({id:"terre",n:2,i:"⏚",t:"La mise à la terre",d:"Prise de terre, barrette, liaisons équipotentielles",
 s:[{h:"À quoi sert la terre ?",l:["Elle évacue vers le sol le courant d'un <b>défaut</b> (masse sous tension).","Avec le <b>différentiel</b>, elle permet de couper avant qu'une personne soit en danger.","Sans terre, un appareil en défaut reste sous tension sans que rien ne coupe."]},
    {h:"La prise de terre",l:["<b>Boucle à fond de fouille</b> : câble de cuivre nu (25 mm²) posé sous les fondations (construction neuve).","Ou <b>piquet de terre</b> enfoncé dans le sol (rénovation).","Valeur recommandée en logement : <b>≤ 100 Ω</b>."]},
    {h:"Du sol au tableau",l:["Prise de terre → <b>conducteur de terre</b> → <b>barrette de coupure</b> (pour la mesure) → <b>borne principale de terre</b>.","Puis les conducteurs de protection (vert/jaune) vers chaque circuit.","La <b>LEP</b> (liaison équipotentielle principale) relie les canalisations métalliques à l'arrivée du bâtiment."]},
    {h:"Les appareils et la terre",l:["<b>Classe I</b> : carcasse métallique reliée à la terre (lave-linge, four…).","<b>Classe II</b> : double isolation, pas de terre (radiateurs, sèche-cheveux).","<b>Classe III</b> : alimentés en très basse tension de sécurité."]}],
 k:["Terre","Prise de terre","Barrette de coupure","LEP","Classe I"]});

C.fiches.terre={
 intro:"La terre est la protection silencieuse de l'installation : elle ne sert jamais… jusqu'au jour où un appareil a un défaut. Ce jour-là, c'est elle qui fait la différence entre un différentiel qui coupe et une personne électrisée. Une installation sans terre correcte n'est pas sûre, même avec des différentiels.",
 s:[
  {p:"Quand un fil de phase touche la carcasse métallique d'un appareil (défaut d'isolement), cette carcasse passe sous tension. Si elle est reliée à la <b>terre</b>, le courant de défaut s'écoule dans le sol ; le <b>différentiel</b> voit que le courant ne revient pas par le neutre, et il coupe. Sans terre, le courant ne trouve pas de chemin… sauf à travers la personne qui touchera l'appareil.",
   fig:{type:"flux",legende:"Un défaut sur un lave-linge relié à la terre",etapes:["La phase touche la carcasse","Le courant de défaut part par le fil vert/jaune","Il s'écoule dans la prise de terre","Le différentiel voit aller ≠ retour","Coupure : plus de danger"]},
   q:["Sans fil de terre, un appareil en défaut…",["Reste sous tension sans que rien ne coupe","Fait sauter le disjoncteur","S'arrête tout seul","Est protégé par le neutre"],0,"Le défaut n'a pas de chemin : il attend une personne pour s'écouler."]},
  {p:"La <b>prise de terre</b> est le contact électrique avec le sol. En construction neuve, on pose une <b>boucle à fond de fouille</b> : un câble de cuivre nu de 25 mm² au fond des tranchées des fondations, avant le béton. En rénovation, on enfonce un ou plusieurs <b>piquets de terre</b>. On mesure sa <b>résistance</b> : plus elle est faible, mieux le défaut s'écoule. En logement, on vise <b>100 Ω maximum</b>.",
   fig:{type:"svg",legende:"Boucle à fond de fouille ou piquet de terre",svg:"<svg viewBox='0 0 300 140'><rect x='0' y='60' width='300' height='80' fill='#5a3d22' opacity='.55'/><path d='M0 60H300' stroke='#8d6b45' stroke-width='3'/><rect x='30' y='20' width='110' height='40' fill='var(--card)' stroke='#fff' stroke-width='1.5'/><text x='85' y='45' text-anchor='middle' font-size='10' font-weight='800' fill='#fff'>maison neuve</text><path d='M30 75H140' stroke='#d08a3b' stroke-width='4' class='draw'/><text x='85' y='92' text-anchor='middle' font-size='9' fill='#fff' font-weight='700'>cuivre nu 25 mm²</text><rect x='190' y='20' width='90' height='40' fill='var(--card)' stroke='#fff' stroke-width='1.5'/><text x='235' y='45' text-anchor='middle' font-size='10' font-weight='800' fill='#fff'>rénovation</text><path d='M235 60V128' stroke='#c0c4d6' stroke-width='6' class='draw'/><text x='252' y='110' font-size='9' fill='#fff' font-weight='700'>piquet</text></svg>"},
   ex:"Tu mesures 280 Ω sur la terre d'une vieille maison. Tu ajoutes un piquet à quelques mètres du premier, relié au même conducteur : la mesure tombe à 60 Ω.",
   info:"Pourquoi 100 Ω ? Avec le différentiel 500 mA du disjoncteur de branchement, 100 Ω × 0,5 A = 50 V : la tension de défaut reste sous la limite de sécurité d'un local sec.",
   q:["Quelle valeur de résistance de terre vise-t-on en logement ?",["100 Ω maximum","1 000 Ω minimum","0 Ω exactement","500 Ω"],0,"≤ 100 Ω est la valeur recommandée en habitation."]},
  {p:"Du sol jusqu'aux prises, le chemin de la terre est toujours le même. La prise de terre est reliée par le <b>conducteur de terre</b> à une <b>barrette de coupure</b> : en l'ouvrant, on isole la prise de terre pour la mesurer. Ensuite vient la <b>borne principale de terre</b>, d'où partent les conducteurs de protection vers le tableau et chaque circuit. La <b>liaison équipotentielle principale (LEP)</b> relie aussi à cette borne les canalisations métalliques (eau, gaz, chauffage) à leur entrée dans le bâtiment.",
   fig:{type:"flux",legende:"Le chemin de la terre",etapes:["Prise de terre (fond de fouille ou piquet)","Conducteur de terre","Barrette de coupure (mesure)","Borne principale de terre (+ LEP)","Conducteurs de protection vert/jaune → chaque circuit"]},
   att:"On ne coupe jamais la barrette de terre d'une installation en service sans précaution : pendant la mesure, plus aucun appareil n'est protégé par la terre.",
   q:["À quoi sert la barrette de coupure ?",["À isoler la prise de terre pour la mesurer","À couper le courant","À relier le neutre et la terre","À brancher le compteur"],0,"On l'ouvre pour mesurer la résistance de la prise de terre seule."]},
  {p:"Les appareils sont classés selon leur protection. <b>Classe I</b> : carcasse métallique reliée à la terre par le 3e fil (lave-linge, four, chauffe-eau, luminaires métalliques). <b>Classe II</b> : double isolation, pas de terre, symbole ⧈ (deux carrés emboîtés) : radiateurs, petit électroménager. <b>Classe III</b> : alimentés en très basse tension de sécurité (lampes 12 V, jouets). Les appareils de <b>classe 0</b> (isolation simple sans terre) ne sont plus admis dans les installations neuves.",
   fig:{type:"cycle",centre:"Classes des appareils",etapes:[["Classe I<br>reliée à la terre","#ffc83d"],["Classe II<br>double isolation ⧈","#3db5ff"],["Classe III<br>TBTS","#2ed47a"]]},
   q:["Un lave-linge à carcasse métallique est un appareil de…",["Classe I : il doit être relié à la terre","Classe II","Classe III","Classe 0"],0,"Carcasse métallique + fil de terre = classe I."]}
 ],
 retenir:["Terre + différentiel = protection contre les contacts indirects.","Fond de fouille (cuivre nu 25 mm²) ou piquet ; ≤ 100 Ω en logement.","Prise de terre → conducteur de terre → barrette → borne principale (+ LEP) → circuits.","Classe I = terre ; classe II = double isolation ; classe III = TBTS."]
};

C.lexique.push(
 ["Terre","Conducteur de protection (PE) qui évacue les fuites vers le sol. Toujours vert/jaune."],
 ["Prise de terre","Contact électrique avec le sol : boucle à fond de fouille ou piquet de terre."],
 ["Barrette de coupure","Dispositif démontable entre la prise de terre et la borne principale, qui permet de mesurer la prise de terre."],
 ["LEP","Liaison Équipotentielle Principale : relie les canalisations métalliques du bâtiment à la borne principale de terre."],
 ["Classe I","Appareil dont la carcasse métallique doit être reliée à la terre."],
 ["Défaut d'isolement","Isolant abîmé qui laisse le courant s'échapper vers une masse ou vers la terre."]
);

C.quiz.push(
 ["terre","En construction neuve, la prise de terre est souvent…",["Une boucle à fond de fouille en cuivre nu","Le tuyau d'eau","Le neutre","Un fil sous le carrelage"],0,"Câble de cuivre nu 25 mm² sous les fondations."],
 ["terre","Section du câble de cuivre nu à fond de fouille ?",["25 mm²","1,5 mm²","6 mm²","2,5 mm²"],0,"25 mm² en cuivre nu."],
 ["terre","La LEP relie à la terre…",["Les canalisations métalliques du bâtiment","Le neutre","Les prises RJ45","Les radiateurs"],0,"Eau, gaz, chauffage métalliques, à leur entrée."],
 ["terre","Un radiateur à double isolation est de…",["Classe II","Classe I","Classe III","Classe 0"],0,"Double isolation = classe II, pas de terre."],
 ["terre","Avec quel appareil mesure-t-on une prise de terre ?",["Un telluromètre ou un contrôleur d'installation","Un VAT","Une pince ampèremétrique seule","Un niveau laser"],0,"Le telluromètre (ou la fonction terre du contrôleur) mesure sa résistance."],
 ["terre","Pourquoi viser 100 Ω maximum avec un branchement 500 mA ?",["100 Ω × 0,5 A = 50 V : tension de défaut sous la limite de sécurité","Pour économiser du cuivre","C'est une valeur au hasard","Pour le compteur"],0,"R × IΔn ≤ UL : 50 V ÷ 0,5 A = 100 Ω."],
 ["terre","La barrette de coupure sert à…",["Mesurer la prise de terre seule","Couper la phase","Brancher le chauffe-eau","Relier neutre et terre"],0,"On l'ouvre pour isoler la prise de terre pendant la mesure."]
);

C.vf.push(
 ["Le fil de terre transporte du courant en fonctionnement normal.",false,"Il ne transporte du courant qu'en cas de défaut."],
 ["Un appareil de classe II n'a pas besoin de terre.",true,"Sa double isolation suffit."],
 ["Sans terre, le différentiel ne peut détecter un défaut qu'au moment où quelqu'un touche l'appareil.",true,"Le courant de défaut passe alors par la personne : la terre évite d'en arriver là."],
 ["On peut relier la terre au neutre dans un logement (schéma TT).",false,"Interdit en TT : terre et neutre restent séparés."]
);
