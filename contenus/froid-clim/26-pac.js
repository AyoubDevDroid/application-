/* NIVEAU 2 — Les pompes à chaleur */
C.modules.push({id:"pac",n:2,i:"♨️",t:"Les pompes à chaleur",d:"Air/air, air/eau, vanne 4 voies, dégivrage, COP",
 s:[{h:"Le principe",l:["Le même cycle que la clim, mais on utilise la chaleur du <b>condenseur</b> pour chauffer.","La chaleur est prise à l'air extérieur, au sol ou à l'eau, même par temps froid.","<b>Air/air</b> (split réversible), <b>air/eau</b> (radiateurs, plancher), <b>eau/eau</b> et géothermie."]},
    {h:"La vanne 4 voies",l:["Elle <b>inverse le cycle</b> : les échangeurs échangent leur rôle.","Été : l'unité intérieure est l'évaporateur. Hiver : elle devient le condenseur.","C'est aussi elle qui permet le dégivrage par inversion."]},
    {h:"Le dégivrage",l:["En hiver, l'échangeur extérieur (évaporateur) est sous 0 °C : il <b>givre</b>.","La machine inverse le cycle quelques minutes pour faire fondre la glace.","L'eau de dégivrage doit pouvoir s'écouler sans geler."]},
    {h:"Performance",l:["<b>COP</b> : chaleur fournie ÷ électricité consommée, à un point de mesure.","<b>SCOP</b> : COP moyen sur la saison.","Plus l'eau de chauffage est chaude et l'air extérieur froid, plus le COP baisse."]}],
 k:["Pompe à chaleur","Vanne 4 voies","Dégivrage","SCOP","COP"]});

C.fiches.pac={
 intro:"La pompe à chaleur remplace les chaudières au fioul et au gaz : c'est une machine frigorifique utilisée à l'envers. Pour 1 kWh d'électricité, elle en fournit 3 ou 4 en chaleur, en allant chercher l'énergie gratuite de l'air extérieur. Le frigoriste qui maîtrise les PAC a du travail pour des années.",
 s:[
  {p:"Une pompe à chaleur prend la chaleur d'une source froide (l'air extérieur, le sol, une nappe d'eau) dans son <b>évaporateur</b>, et la restitue dans le logement par son <b>condenseur</b>. Même à −5 °C, l'air extérieur contient de la chaleur : il suffit que le fluide s'évapore plus froid encore. La PAC <b>air/air</b> chauffe l'air (split réversible), la PAC <b>air/eau</b> chauffe l'eau des radiateurs ou du plancher chauffant, la PAC <b>eau/eau</b> ou géothermique prend sa chaleur dans le sol ou une nappe.",
   fig:{type:"flux",legende:"Une PAC air/eau en hiver",etapes:[["Air extérieur à 2 °C","l'évaporateur capte sa chaleur"],["Compresseur","fait monter pression et température"],["Condenseur","chauffe l'eau du chauffage à 35–45 °C"],["Radiateurs, plancher","chauffent le logement"]]},
   q:["Dans une PAC air/eau, la chaleur est cédée à l'eau du chauffage par…",["Le condenseur","L'évaporateur","Le détendeur","Le filtre"],0,"C'est le condenseur qui rejette (ici, donne) la chaleur."]},
  {p:"La <b>vanne 4 voies</b> est un tiroir commandé par une bobine : elle inverse le sens du fluide entre le refoulement et l'aspiration du compresseur. L'échangeur intérieur devient condenseur (chauffage) ou évaporateur (rafraîchissement). Le compresseur, lui, tourne toujours dans le même sens. Le détendeur, souvent électronique sur les PAC, fonctionne dans les deux sens.",
   fig:{type:"cycle",centre:"Vanne 4 voies",etapes:[["Hiver : unité intérieure = condenseur","#ff8a3d"],["Été : unité intérieure = évaporateur","#3db5ff"],["Dégivrage : inversion de quelques minutes","#7be0d0"]]},
   q:["Dans une pompe à chaleur, quel organe inverse le cycle ?",["La vanne 4 voies","Le détendeur","Le pressostat BP","Le voyant liquide"],0,"Chaud l'hiver, froid l'été."]},
  {p:"En hiver, l'échangeur extérieur est plus froid que l'air et souvent sous 0 °C : l'humidité de l'air y <b>givre</b>, la glace bouche les ailettes et la puissance chute. La machine lance un <b>dégivrage</b> : elle inverse le cycle quelques minutes pour envoyer du gaz chaud dans l'échangeur extérieur. On voit alors de la vapeur et de l'eau sortir de l'unité : c'est normal. L'eau doit pouvoir s'écouler (support surélevé, évacuation qui ne gèle pas).",
   att:"Une PAC posée au ras du sol en zone neigeuse ou dont l'eau de dégivrage regèle sous l'unité finit avec un bloc de glace dans la batterie. On la surélève et on prévoit l'évacuation.",
   q:["De la vapeur sort de l'unité extérieure d'une PAC en hiver. C'est…",["Probablement un dégivrage normal","Un incendie","Une fuite de fluide","Un compresseur grillé"],0,"Le gaz chaud fait fondre la glace."]},
  {p:"Le <b>COP</b> mesure la performance à un point de fonctionnement précis (température extérieure et température d'eau). Le <b>SCOP</b> la mesure sur toute une saison de chauffage : c'est la valeur qui compte pour le client. Le COP baisse quand l'écart augmente entre la source froide et l'eau de chauffage : une PAC sur plancher chauffant (eau à 35 °C) est plus efficace que sur de vieux radiateurs (eau à 55 °C).",
   fig:{type:"barres",legende:"Ordre de grandeur du COP d'une PAC air/eau selon l'eau de chauffage",items:[["Plancher chauffant, eau 35 °C",4,"","#2ed47a"],["Radiateurs basse température, 45 °C",3.2,"","#ffc83d"],["Anciens radiateurs, 55 °C",2.6,"","#ff8a3d"]]},
   q:["Une PAC est plus efficace avec…",["Un plancher chauffant (eau tiède)","De vieux radiateurs à eau très chaude","Une eau à 70 °C","Peu importe"],0,"Moins d'écart de température = meilleur COP."]}
 ],
 retenir:["PAC = cycle frigorifique ; la chaleur utile est celle du condenseur.","Air/air, air/eau, eau/eau, géothermie.","Vanne 4 voies : inverse le cycle ; dégivrage par inversion.","SCOP = performance saisonnière ; eau de chauffage tiède = meilleur COP."]
};

C.lexique.push(
 ["Pompe à chaleur","Machine frigorifique utilisée pour chauffer : elle prend la chaleur dehors et la restitue dedans."],
 ["Vanne 4 voies","Vanne qui inverse le sens de circulation du fluide pour passer du mode chaud au mode froid (et dégivrer)."],
 ["Dégivrage","Opération qui fait fondre la glace formée sur un évaporateur (inversion de cycle, résistances, gaz chauds)."],
 ["SCOP","COP saisonnier : performance moyenne d'une pompe à chaleur sur toute la saison de chauffage."]
);

C.quiz.push(
 ["pac","Une PAC air/eau chauffe…",["L'eau des radiateurs ou du plancher chauffant","L'air directement","Le fluide du voisin","Le compresseur"],0,"L'eau de chauffage passe dans le condenseur."],
 ["pac","Pourquoi l'échangeur extérieur d'une PAC givre-t-il en hiver ?",["Il est plus froid que l'air, souvent sous 0 °C","Il est trop chaud","Il manque d'huile","Il est mal raccordé"],0,"L'humidité de l'air gèle sur les ailettes."],
 ["pac","Le SCOP mesure…",["La performance sur une saison de chauffage","La pression HP","Le bruit","La charge en fluide"],0,"C'est un COP moyen saisonnier."],
 ["pac","Pendant le dégivrage par inversion, l'échangeur extérieur reçoit…",["Du gaz chaud","De l'eau froide","De l'azote","Rien"],0,"Le cycle est inversé quelques minutes."],
 ["pac","Une PAC consomme 3 kWh et fournit 12 kWh. Son COP ?",["4","9","36","0,25"],0,"12 ÷ 3 = 4."]
);

C.vf.push(
 ["Une pompe à chaleur peut chauffer même quand il fait 0 °C dehors.",true,"Le fluide s'évapore encore plus froid que l'air."],
 ["Le compresseur d'une PAC tourne à l'envers en mode froid.",false,"C'est la vanne 4 voies qui inverse le cycle."]
);
