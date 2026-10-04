/* NIVEAU 3 — Dimensionner un circuit */
C.modules.push({id:"dimension",n:3,i:"📏",t:"Dimensionner un circuit",d:"Ib, In, Iz, chute de tension, pose et sélectivité",
 s:[{h:"La règle des trois courants",l:["<b>Ib</b> : courant d'emploi (ce que consomme le circuit).","<b>In</b> : calibre de la protection.","<b>Iz</b> : courant que le câble supporte sans chauffer.","Toujours : <b>Ib ≤ In ≤ Iz</b>."]},
    {h:"Ce qui change Iz",l:["Le <b>mode de pose</b> : un câble encastré dans un isolant refroidit mal.","La <b>température</b> ambiante (comble l'été, chaufferie).","Le <b>groupement</b> : plusieurs câbles serrés se réchauffent entre eux.","On applique des <b>facteurs de correction</b> (tableaux de la norme)."]},
    {h:"La chute de tension",l:["Un câble long fait perdre de la tension.","Limites usuelles (depuis l'origine de l'installation) : <b>3 %</b> pour l'éclairage, <b>5 %</b> pour les autres usages.","Monophasé : <b>ΔU = 2 × ρ × L × I ÷ S</b> (ρ cuivre ≈ 0,0225 Ω·mm²/m)."]},
    {h:"La sélectivité",l:["En cas de défaut, seule la protection <b>la plus proche</b> doit couper.","Ex. : un différentiel <b>sélectif (S)</b> en tête, des 30 mA en aval.","Une bonne sélectivité évite de couper tout le bâtiment pour un seul défaut."]}],
 k:["Courant d'emploi","Chute de tension","Sélectivité","Calibre"]});

C.fiches.dimension={
 intro:"Choisir un câble « au jugé » marche dans un petit logement, avec les valeurs toutes faites de la norme. Mais pour alimenter un garage au fond du jardin, un atelier, une pompe à chaleur ou une borne de recharge, il faut calculer. Le dimensionnement répond à deux questions : le câble va-t-il chauffer ? et la tension arrivera-t-elle assez forte au bout ?",
 s:[
  {p:"Trois courants à comparer. <b>Ib</b>, le courant d'emploi : ce que les appareils vont réellement consommer. <b>In</b>, le calibre de la protection. <b>Iz</b>, le courant admissible du câble dans ses conditions de pose. La règle est toujours <b>Ib ≤ In ≤ Iz</b> : la protection laisse passer ce dont le circuit a besoin, mais coupe avant que le câble ne chauffe.",
   fig:{type:"barres",legende:"Exemple : circuit de chauffage de 3 000 W en 1,5 mm²",items:[["Ib = 3 000 ÷ 230",13,"A","#3db5ff"],["In (disjoncteur)",16,"A","#ffc83d"],["Iz du 1,5 mm² (pose courante, ordre de grandeur)",17.5,"A","#2ed47a"]]},
   att:"Si Ib > In, le disjoncteur déclenche en permanence. Si In > Iz, le câble chauffe sans être protégé : c'est le plus dangereux.",
   q:["Quelle relation doit toujours être respectée ?",["Ib ≤ In ≤ Iz","Iz ≤ In ≤ Ib","In ≤ Ib ≤ Iz","Ib = In = Iz"],0,"Le besoin, puis la protection, puis la capacité du câble."]},
  {p:"Le courant admissible d'un câble n'est pas fixe : il dépend de sa capacité à évacuer sa chaleur. Un câble à l'air libre sur un chemin de câbles refroidit bien ; le même câble noyé dans un isolant thermique, dans un comble à 40 °C, serré contre 6 autres câbles, refroidit mal. La norme donne des <b>facteurs de correction</b> (pose, température, groupement) qui diminuent Iz. Dans ces cas, on prend la section au-dessus.",
   fig:{type:"barres",legende:"Le même câble, des conditions différentes (Iz relatif, ordre de grandeur)",items:[["À l'air libre",100,"%","#2ed47a"],["Encastré dans un conduit",85,"%","#ffc83d"],["Dans un isolant, comble chaud, groupé",60,"%","#ff5470"]]},
   q:["Un câble posé dans un isolant thermique de comble…",["Supporte moins de courant (il refroidit mal)","Supporte plus de courant","Ne change rien","N'a plus besoin de protection"],0,"Il faut appliquer un facteur de correction et souvent augmenter la section."]},
  {p:"Le câble a une résistance : plus il est long et fin, plus il fait perdre de tension. Au bout d'un câble trop long, un moteur démarre mal, une lampe éclaire moins, une borne de recharge se met en défaut. En monophasé, la chute de tension vaut <b>ΔU = 2 × ρ × L × I ÷ S</b> (le 2 parce que le courant fait l'aller et le retour), avec ρ ≈ 0,0225 Ω·mm²/m pour le cuivre en fonctionnement. Les limites usuelles, depuis l'origine de l'installation alimentée par le réseau public, sont <b>3 %</b> pour l'éclairage et <b>5 %</b> pour les autres usages.",
   fig:{type:"flux",legende:"Abri de jardin à 40 m, 16 A, câble 2,5 mm²",etapes:[["ΔU = 2 × 0,0225 × 40 × 16 ÷ 2,5","11,5 V"],["En % de 230 V","5 % → limite atteinte"],["Avec du 6 mm²","4,8 V soit 2,1 % ✔"]]},
   ex:"Pour alimenter un garage à 40 m avec une prise 16 A, le 2,5 mm² serait juste à la limite. On passe en 6 mm² (ou en 4 mm² selon le calcul exact), protégé selon la norme à l'origine du câble.",
   q:["Que fait-on si la chute de tension est trop forte ?",["On augmente la section","On augmente le calibre du disjoncteur","On rallonge le câble","On supprime la terre"],0,"Plus de section = moins de résistance = moins de chute de tension."]},
  {p:"La <b>sélectivité</b>, c'est faire en sorte qu'un défaut ne fasse couper que la protection juste au-dessus de lui. Un défaut sur une prise doit faire déclencher le disjoncteur de cette prise, pas le disjoncteur général. Pour les différentiels, on met un différentiel <b>sélectif (type S, retardé)</b> en amont, et des 30 mA en aval : le 30 mA coupe en premier.",
   fig:{type:"flux",legende:"Sélectivité : seul le plus proche du défaut coupe",etapes:[["Disjoncteur de branchement 500 mA type S","reste fermé"],["Différentiel 30 mA de la rangée","reste fermé"],["Disjoncteur 20 A de la prise en défaut","DÉCLENCHE"]]},
   q:["À quoi sert un différentiel de type S (sélectif) en tête d'installation ?",["À laisser couper d'abord les différentiels en aval","À protéger les personnes à 30 mA","À couper plus vite","À rien"],0,"Il est retardé : les 30 mA en aval ont le temps de couper."]}
 ],
 retenir:["Ib ≤ In ≤ Iz, toujours.","Iz diminue avec une mauvaise pose, la chaleur, le groupement.","ΔU = 2ρLI/S en monophasé ; 3 % éclairage, 5 % autres usages.","Sélectivité : seule la protection la plus proche du défaut coupe."]
};

C.lexique.push(
 ["Courant d'emploi","Courant Ib réellement consommé par un circuit, calculé à partir des puissances des appareils."],
 ["Courant admissible","Courant Iz qu'un câble peut transporter en permanence sans chauffer, selon ses conditions de pose."],
 ["Chute de tension","Perte de tension dans un câble, due à sa résistance. Elle augmente avec la longueur et le courant."],
 ["Sélectivité","Organisation des protections pour que seule celle située juste au-dessus d'un défaut coupe."]
);

C.quiz.push(
 ["dimension","Que représente Ib ?",["Le courant d'emploi du circuit","Le calibre du disjoncteur","Le courant admissible du câble","Le courant de court-circuit"],0,"Ib = ce que consomment réellement les appareils."],
 ["dimension","Que représente Iz ?",["Le courant admissible du câble","Le courant d'emploi","Le calibre","La sensibilité du différentiel"],0,"Iz dépend de la section et des conditions de pose."],
 ["dimension","Quelle chute de tension maximale pour un circuit d'éclairage (réseau public) ?",["3 %","10 %","1 %","20 %"],0,"3 % pour l'éclairage, 5 % pour les autres usages."],
 ["dimension","Dans ΔU = 2 × ρ × L × I ÷ S, que signifie le 2 ?",["L'aller et le retour du courant","Deux phases","Deux circuits","Un coefficient de sécurité"],0,"En monophasé, le courant parcourt la phase et le neutre."],
 ["dimension","Si on double la longueur du câble, la chute de tension…",["Double","Reste la même","Est divisée par deux","Disparaît"],0,"ΔU est proportionnelle à L."],
 ["dimension","Pour réduire la chute de tension, on…",["Augmente la section","Diminue la section","Augmente le calibre","Ajoute un différentiel"],0,"S est au dénominateur : plus de section, moins de chute."],
 ["dimension","Plusieurs câbles serrés dans un même conduit…",["Se réchauffent entre eux : Iz diminue","N'ont aucune influence","Supportent plus de courant","Font baisser la tension"],0,"C'est le facteur de groupement."],
 ["dimension","Un défaut sur une prise fait sauter le disjoncteur général au lieu du disjoncteur de la prise. C'est un problème de…",["Sélectivité","Chute de tension","Section","Couleur"],0,"Une bonne sélectivité ne coupe que le circuit en défaut."]
);

C.vf.push(
 ["Un câble trop long peut empêcher un moteur de démarrer correctement.",true,"La chute de tension diminue la tension disponible."],
 ["On peut toujours mettre un disjoncteur plus gros que le courant admissible du câble.",false,"In doit rester inférieur ou égal à Iz."],
 ["Un différentiel type S est retardé pour assurer la sélectivité.",true,"Il laisse couper d'abord les 30 mA en aval."]
);
