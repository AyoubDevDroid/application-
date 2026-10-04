/* JEU — Atelier de calcul : exercices générés à l'infini avec leur correction.
   gen(R) renvoie {q:énoncé, r:résultat, u:unité, tol?:tolérance, ex:correction}. R.r(a,b) entier, R.pick(liste), R.f(x,déc) nombre à la française. */
C.atelier=[
 {t:"Intensité d'un appareil",ic:"🔌",d:"I = P ÷ U",gen:R=>{const p=R.pick([500,750,1000,1200,1500,2000,2200,2300,2500,3000,3450,4600]),r=p/230;
   return {q:`Un appareil de <b>${R.f(p,0)} W</b> est branché en 230 V. Quelle intensité consomme-t-il ?`,r,u:"A",ex:`I = P ÷ U = ${R.f(p,0)} ÷ 230 = <b>${R.f(r)} A</b>`}}},
 {t:"Loi d'Ohm",ic:"Ω",d:"U = R × I",gen:R=>{const k=R.r(0,2);
   if(k===0){const r=R.pick([10,22,47,100,220,470]),i=R.pick([0.1,0.2,0.5,1,2]);return {q:`Une résistance de <b>${r} Ω</b> est traversée par <b>${R.f(i)} A</b>. Quelle est la tension à ses bornes ?`,r:r*i,u:"V",ex:`U = R × I = ${r} × ${R.f(i)} = <b>${R.f(r*i)} V</b>`}}
   if(k===1){const u=R.pick([12,24,48,230]),r=R.pick([6,12,24,46,115]);return {q:`Une résistance de <b>${r} Ω</b> est alimentée en <b>${u} V</b>. Quel courant la traverse ?`,r:u/r,u:"A",ex:`I = U ÷ R = ${u} ÷ ${r} = <b>${R.f(u/r)} A</b>`}}
   const i=R.pick([0.5,2,5,10,23]);return {q:`Un récepteur alimenté en <b>230 V</b> consomme <b>${R.f(i)} A</b>. Quelle est sa résistance ?`,r:230/i,u:"Ω",ex:`R = U ÷ I = 230 ÷ ${R.f(i)} = <b>${R.f(230/i)} Ω</b>`}}},
 {t:"Résistance d'un appareil chauffant",ic:"♨️",d:"R = U² ÷ P",gen:R=>{const p=R.pick([500,1000,1500,2000,2300,2500,3000]),r=230*230/p;
   return {q:`Quelle est la résistance d'un radiateur de <b>${R.f(p,0)} W</b> prévu pour 230 V ?`,r,u:"Ω",ex:`R = U² ÷ P = 230² ÷ ${R.f(p,0)} = 52 900 ÷ ${R.f(p,0)} = <b>${R.f(r,1)} Ω</b>`}}},
 {t:"Plusieurs appareils sur un circuit",ic:"➕",d:"On additionne les puissances",gen:R=>{const L=[["un radiateur",1000],["un radiateur",1500],["une TV",150],["un ordinateur",200],["une bouilloire",2000],["un fer à repasser",1800],["un aspirateur",800],["un sèche-cheveux",1600],["une lampe",60]];
   const a=[R.pick(L),R.pick(L),R.pick(L)],p=a.reduce((s,x)=>s+x[1],0),r=p/230;
   return {q:`Sur le même circuit en 230 V fonctionnent ${a.map(x=>`${x[0]} (<b>${x[1]} W</b>)`).join(', ')}. Quelle est l'intensité totale ?`,r,u:"A",ex:`P totale = ${a.map(x=>x[1]).join(' + ')} = ${R.f(p,0)} W ; I = ${R.f(p,0)} ÷ 230 = <b>${R.f(r)} A</b>${r>16?' : un circuit protégé en 16 A déclencherait.':'.'}`}}},
 {t:"Énergie et coût",ic:"💶",d:"E (kWh) = P (kW) × t (h)",gen:R=>{const p=R.pick([60,500,1000,1500,2000,2400]),t=R.pick([2,3,5,8,10]),e=p/1000*t,prix=0.25;
   if(R.r(0,1))return {q:`Un appareil de <b>${R.f(p,0)} W</b> fonctionne <b>${t} h</b>. Quelle énergie consomme-t-il ?`,r:e,u:"kWh",ex:`E = ${R.f(p/1000,3)} kW × ${t} h = <b>${R.f(e,2)} kWh</b>`};
   return {q:`Un appareil de <b>${R.f(p,0)} W</b> fonctionne <b>${t} h</b>. Combien coûte cette énergie à <b>0,25 € le kWh</b> ?`,r:e*prix,u:"€",tol:0.02,ex:`E = ${R.f(p/1000,3)} × ${t} = ${R.f(e,2)} kWh ; coût = ${R.f(e,2)} × 0,25 = <b>${R.f(e*prix,2)} €</b>`}}},
 {t:"Chute de tension",ic:"📉",d:"ΔU = 2 × ρ × L × I ÷ S",gen:R=>{const l=R.pick([10,15,20,25,30,40,50]),i=R.pick([10,16,20,32]),s=R.pick([1.5,2.5,4,6,10]),r=2*0.0225*l*i/s;
   return {q:`Câble monophasé en cuivre de <b>${l} m</b>, section <b>${R.f(s,1)} mm²</b>, parcouru par <b>${i} A</b>. Quelle est la chute de tension ? (ρ = 0,0225 Ω·mm²/m)`,r,u:"V",tol:Math.max(r*0.03,0.05),
     ex:`ΔU = 2 × 0,0225 × ${l} × ${i} ÷ ${R.f(s,1)} = <b>${R.f(r)} V</b>, soit ${R.f(r/230*100,1)} % de 230 V ${r/230*100>5?'(au-delà de 5 % : section à augmenter)':r/230*100>3?'(plus de 3 % : trop pour de l\'éclairage)':'(acceptable)'}.`}}},
 {t:"Résistances en série et en parallèle",ic:"🔗",d:"Série : R1 + R2 · Parallèle : R1 × R2 ÷ (R1 + R2)",gen:R=>{const a=R.pick([10,20,30,40,60,100,120]),b=R.pick([10,20,30,40,60,100,120]);
   if(R.r(0,1))return {q:`Deux résistances de <b>${a} Ω</b> et <b>${b} Ω</b> sont branchées <b>en série</b>. Résistance équivalente ?`,r:a+b,u:"Ω",ex:`En série, on additionne : ${a} + ${b} = <b>${a+b} Ω</b>`};
   const r=a*b/(a+b);return {q:`Deux résistances de <b>${a} Ω</b> et <b>${b} Ω</b> sont branchées <b>en parallèle</b>. Résistance équivalente ?`,r,u:"Ω",ex:`R = (${a} × ${b}) ÷ (${a} + ${b}) = ${a*b} ÷ ${a+b} = <b>${R.f(r)} Ω</b> (toujours plus petite que la plus petite des deux).`}}},
 {t:"Courant d'un moteur triphasé",ic:"⚙️",d:"I = P ÷ (U × √3 × cos φ)",gen:R=>{const p=R.pick([3,4,5.5,7.5,11,15]),c=R.pick([0.8,0.85,0.9]),r=p*1000/(400*Math.sqrt(3)*c);
   return {q:`Un moteur triphasé absorbe <b>${R.f(p,1)} kW</b> sur un réseau <b>400 V</b>, avec cos φ = <b>${R.f(c,2)}</b>. Quel est son courant de ligne ?`,r,u:"A",tol:r*0.03,ex:`I = ${R.f(p*1000,0)} ÷ (400 × 1,732 × ${R.f(c,2)}) = <b>${R.f(r,1)} A</b>`}}},
 {t:"Résistance maximale de la prise de terre",ic:"⏚",d:"R ≤ UL ÷ IΔn",gen:R=>{const ul=R.pick([50,25]),id=R.pick([[0.03,"30 mA"],[0.3,"300 mA"],[0.5,"500 mA"],[1,"1 A"]]),r=ul/id[0];
   return {q:`Tension limite <b>UL = ${ul} V</b> (local ${ul===50?'sec':'mouillé'}), différentiel de <b>${id[1]}</b>. Quelle résistance de terre maximale ?`,r,u:"Ω",ex:`R ≤ UL ÷ IΔn = ${ul} ÷ ${R.f(id[0],2)} = <b>${R.f(r,1)} Ω</b>`}}},
 {t:"Abonnement et intensité",ic:"🏠",d:"I = puissance ÷ 230",gen:R=>{const k=R.pick([3,6,9,12]),r=k*1000/230;
   return {q:`Un abonnement monophasé de <b>${k} kVA</b> correspond à quelle intensité en 230 V (au dixième près) ?`,r,u:"A",tol:0.3,ex:`I = ${k*1000} ÷ 230 = <b>${R.f(r,1)} A</b> ; le disjoncteur de branchement est réglé sur ${({3:15,6:30,9:45,12:60})[k]} A.`}}},
 {t:"Nombre de prises d'un séjour",ic:"🛋️",d:"1 prise par 4 m², minimum 5",gen:R=>{const s=R.r(14,48),r=Math.max(5,Math.ceil(s/4));
   return {q:`Combien de prises au minimum dans un séjour de <b>${s} m²</b> ?`,r,u:"prises",tol:0.01,ex:`${s} ÷ 4 = ${R.f(s/4,2)} → arrondi au-dessus : ${Math.ceil(s/4)}${Math.ceil(s/4)<5?', mais le minimum est de 5':''} → <b>${r} prises</b>.`}}}
];
