/* NIVEAU 2 — Les accessoires et les sécurités */
C.modules.push({id:"accessoires",n:2,i:"🧩",t:"Accessoires et sécurités",d:"Filtre, voyant, bouteilles, électrovanne, pressostats",
 s:[{h:"Sur la ligne liquide",l:["<b>Filtre déshydrateur</b> : retient humidité et impuretés.","<b>Voyant liquide</b> avec indicateur d'humidité : bulles = liquide pas pur ; couleur = humidité.","<b>Électrovanne</b> : coupe l'arrivée de liquide (arrêt, pump-down).","<b>Réservoir de liquide</b> : stocke la charge."]},
    {h:"Sur l'aspiration et le refoulement",l:["<b>Bouteille anti-coup de liquide</b> (aspiration) : protège le compresseur.","<b>Séparateur d'huile</b> (refoulement) : renvoie l'huile au compresseur.","<b>Clapet anti-retour</b>, <b>vannes de service</b>, valves <b>Schrader</b>."]},
    {h:"Les pressostats",l:["<b>Pressostat HP</b> : coupe si la pression de condensation est trop haute (souvent à réarmement <b>manuel</b>).","<b>Pressostat BP</b> : coupe si la pression d'aspiration est trop basse (manque de fluide, pump-down).","Ils sont câblés <b>en série</b> dans la commande du compresseur."]},
    {h:"Autres protections",l:["<b>Protection thermique</b> du moteur du compresseur (interne ou relais thermique).","<b>Résistance de carter</b> : chauffe l'huile à l'arrêt pour éviter la migration de fluide.","<b>Soupape de sécurité</b> sur les gros réservoirs."]}],
 k:["Filtre déshydrateur","Voyant liquide","Pressostat","Électrovanne","Résistance de carter"]});

C.fiches.accessoires={
 intro:"Les accessoires ne font pas le froid, mais ils protègent le circuit et renseignent le technicien. Un voyant qui montre des bulles, un filtre plus froid à la sortie qu'à l'entrée, un pressostat HP déclenché : ce sont des indices précieux. Encore faut-il savoir où chaque élément se trouve et à quoi il sert.",
 s:[
  {p:"Sur la <b>ligne liquide</b>, on trouve dans l'ordre : le <b>réservoir</b> (sur les installations à détendeur thermostatique), le <b>filtre déshydrateur</b> (il piège l'humidité et les particules), le <b>voyant liquide</b> (on doit y voir du liquide pur, sans bulles ; une pastille change de couleur s'il y a de l'humidité) et l'<b>électrovanne</b> juste avant le détendeur.",
   fig:{type:"flux",legende:"La ligne liquide, du condenseur au détendeur",etapes:["Condenseur","Réservoir de liquide","Filtre déshydrateur","Voyant liquide","Électrovanne","Détendeur"]},
   ex:"Tu touches le filtre : il est nettement plus froid à la sortie qu'à l'entrée, et il y a des bulles au voyant juste après. Le filtre est colmaté : le liquide se détend dedans. Il faut le remplacer.",
   q:["Où place-t-on le filtre déshydrateur ?",["Sur la ligne liquide","Sur l'aspiration","Dans le compresseur","Sur le refoulement"],0,"Avant le détendeur, sur la ligne liquide."]},
  {p:"Côté <b>aspiration</b>, la <b>bouteille anti-coup de liquide</b> retient le liquide qui pourrait revenir de l'évaporateur (démarrage, dégivrage). Côté <b>refoulement</b>, le <b>séparateur d'huile</b> renvoie au carter l'huile entraînée par le fluide (indispensable sur les longues tuyauteries et en froid négatif). Les <b>vannes de service</b> et les valves <b>Schrader</b> permettent de raccorder le manifold.",
   q:["À quoi sert la bouteille anti-coup de liquide ?",["Protéger le compresseur contre l'arrivée de liquide","Stocker l'huile","Filtrer l'humidité","Mesurer la pression"],0,"Elle se place sur l'aspiration."]},
  {p:"Le <b>pressostat HP</b> coupe le compresseur si la pression de refoulement dépasse un seuil (ventilateur de condenseur en panne, condenseur bouché, vanne fermée). C'est une sécurité : souvent à <b>réarmement manuel</b>, pour que le technicien cherche la cause. Le <b>pressostat BP</b> coupe si la pression d'aspiration descend trop (manque de fluide, évaporateur pris en glace) ; il sert aussi à la régulation en <b>pump-down</b>. Les deux sont câblés <b>en série</b> avec la commande du contacteur du compresseur.",
   fig:{type:"flux",legende:"La chaîne de sécurité du compresseur (en série)",etapes:["Thermostat (demande de froid)","Pressostat HP (fermé si HP normale)","Pressostat BP (fermé si BP normale)","Protection thermique","Bobine du contacteur → le compresseur démarre"]},
   att:"Réarmer un pressostat HP sans chercher pourquoi il a déclenché, c'est faire tourner un compresseur à une pression dangereuse. On cherche d'abord la cause (ventilateur, condenseur, vanne, excès de charge, incondensables).",
   q:["Le pressostat HP a déclenché. Que fais-tu d'abord ?",["Je cherche la cause avant de réarmer","Je le shunte","Je le réarme et je pars","Je baisse son réglage"],0,"Il protège contre une pression dangereuse."]},
  {p:"La <b>protection thermique</b> du moteur (sonde interne, Klixon ou relais thermique) coupe en cas de surchauffe du bobinage. La <b>résistance de carter</b> chauffe l'huile du compresseur pendant l'arrêt : sans elle, le fluide migre dans l'huile froide, et au démarrage l'huile mousse et le compresseur manque de lubrification. Elle doit être alimentée plusieurs heures avant une première mise en route (suivre la notice).",
   att:"Couper une installation par le disjoncteur général pendant des jours coupe aussi la résistance de carter. Avant de redémarrer, on la laisse chauffer le temps indiqué par le fabricant.",
   q:["À quoi sert la résistance de carter ?",["Éviter que le fluide migre dans l'huile pendant l'arrêt","Dégivrer l'évaporateur","Chauffer la pièce","Faire monter la HP"],0,"Elle garde l'huile chaude et protège le compresseur au démarrage."]}
 ],
 retenir:["Ligne liquide : réservoir, filtre déshydrateur, voyant, électrovanne, détendeur.","Aspiration : bouteille anti-coup de liquide ; refoulement : séparateur d'huile.","Pressostats HP (souvent réarmement manuel) et BP en série dans la commande.","Protection thermique du moteur ; résistance de carter à l'arrêt."]
};

C.lexique.push(
 ["Filtre déshydrateur","Filtre placé sur la ligne liquide qui retient l'humidité et les impuretés."],
 ["Voyant liquide","Hublot sur la ligne liquide : montre les bulles et, par une pastille colorée, la présence d'humidité."],
 ["Pressostat","Interrupteur commandé par la pression : HP (sécurité haute pression) ou BP (basse pression)."],
 ["Électrovanne","Vanne commandée électriquement qui ouvre ou ferme le passage du fluide."],
 ["Résistance de carter","Résistance qui chauffe l'huile du compresseur à l'arrêt pour éviter la migration du fluide."],
 ["Pump-down","Arrêt par vidange de l'évaporateur : l'électrovanne se ferme, le compresseur aspire jusqu'à ce que le pressostat BP coupe."]
);

C.quiz.push(
 ["accessoires","Des bulles dans le voyant liquide indiquent souvent…",["Un manque de fluide","Un excès d'huile","Un compresseur neuf","Un bon fonctionnement"],0,"Le liquide n'est pas pur : souvent manque de charge (ou filtre colmaté)."],
 ["accessoires","La pastille du voyant change de couleur. Cela indique…",["De l'humidité dans le circuit","Un excès de fluide","Une HP trop haute","Rien"],0,"Il faut remplacer le filtre et tirer au vide."],
 ["accessoires","Où se place le séparateur d'huile ?",["Au refoulement du compresseur","Sur la ligne liquide","Sur l'aspiration","Dans l'évaporateur"],0,"Il récupère l'huile entraînée et la renvoie au carter."],
 ["accessoires","Comment sont câblés les pressostats HP et BP ?",["En série dans la commande du compresseur","En parallèle","Sur la terre","Sur le ventilateur seulement"],0,"Si l'un s'ouvre, le compresseur s'arrête."],
 ["accessoires","Filtre déshydrateur plus froid en sortie qu'en entrée : signe…",["Qu'il est colmaté","Qu'il est neuf","Que tout va bien","Que la HP est trop basse"],0,"Le fluide se détend dans le filtre bouché."],
 ["accessoires","En pump-down, qu'est-ce qui arrête le compresseur ?",["Le pressostat BP","Le pressostat HP","Le thermostat directement","Le voyant"],0,"Le thermostat ferme l'électrovanne, le compresseur vide l'évaporateur puis le pressostat BP coupe."]
);

C.vf.push(
 ["Un pressostat HP se réarme sans chercher la cause.",false,"On cherche toujours pourquoi il a déclenché."],
 ["La résistance de carter fonctionne pendant l'arrêt du compresseur.",true,"Elle garde l'huile chaude."],
 ["L'électrovanne se place sur l'aspiration.",false,"En général sur la ligne liquide, avant le détendeur."]
);
