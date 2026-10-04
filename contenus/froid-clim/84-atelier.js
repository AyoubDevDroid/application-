/* JEU — Atelier de calcul (tables PT calculées avec CoolProp, voir 00-app.js). */
const PRP={R404A:3922,R410A:2088,R407C:1774,R134a:1430,R32:675};
const FL=["R32","R410A","R134a","R404A","R290"];
C.atelier=[
 {t:"Pression → température",ic:"📟",d:"Lire la table du fluide",gen:R=>{const f=R.pick(FL),t=R.pick(["-20","-10","-5","0","5","10","30","40","45","50"]),p=PT[f][t];
   return {q:`Le manomètre indique <b>${R.f(p,1)} bar</b> sur un circuit au <b>${f}</b>. Quelle est la température de saturation ?<br><small>Table ${f} : ${Object.entries(PT[f]).sort((a,b)=>a[0]-b[0]).map(([k,v])=>k+' °C → '+R.f(v,1)).join(' · ')}</small>`,r:+t,u:"°C",tol:0.6,ex:`Dans la table du ${f}, ${R.f(p,1)} bar correspond à <b>${t} °C</b>.`}}},
 {t:"Surchauffe",ic:"🌡️",d:"T aspiration − T évaporation",gen:R=>{const f=R.pick(FL),t=R.pick(["-20","-10","-5","0","5"]),p=PT[f][t],sh=R.r(3,16),ta=+t+sh;
   return {q:`<b>${f}</b> : BP = <b>${R.f(p,1)} bar</b> (évaporation à ${t} °C). Le tube d'aspiration est à <b>${ta} °C</b>. Quelle est la surchauffe ?`,r:sh,u:"K",tol:0.1,ex:`Surchauffe = ${ta} − (${t}) = <b>${sh} K</b> ${sh>10?'(élevée : évaporateur sous-alimenté ?)':sh<5?'(faible : risque de retour de liquide)':'(correcte)'}.`}}},
 {t:"Sous-refroidissement",ic:"💧",d:"T condensation − T liquide",gen:R=>{const f=R.pick(FL),t=R.pick(["30","35","40","45","50"]),p=PT[f][t],sr=R.r(1,14),tl=+t-sr;
   return {q:`<b>${f}</b> : HP = <b>${R.f(p,1)} bar</b> (condensation à ${t} °C). La ligne liquide est à <b>${tl} °C</b>. Quel est le sous-refroidissement ?`,r:sr,u:"K",tol:0.1,ex:`Sous-refroidissement = ${t} − ${tl} = <b>${sr} K</b> ${sr>9?'(élevé : excès de charge ou restriction ?)':sr<3?'(faible : manque de fluide ?)':'(correct)'}.`}}},
 {t:"Tonnes équivalent CO₂",ic:"🌍",d:"kg × PRP ÷ 1 000",gen:R=>{const f=R.pick(Object.keys(PRP)),kg=R.pick([0.8,1.2,2.5,3,5,8,12,15,25,40,60,150]),r=kg*PRP[f]/1000;
   return {q:`Une installation contient <b>${R.f(kg,1)} kg</b> de <b>${f}</b> (PRP ${PRP[f]}). Combien de tonnes équivalent CO₂ ?`,r,u:"t éq. CO₂",ex:`${R.f(kg,1)} × ${PRP[f]} ÷ 1 000 = <b>${R.f(r,2)} t éq. CO₂</b>.`}}},
 {t:"Fréquence du contrôle d'étanchéité",ic:"📅",d:"En mois (0 = pas obligatoire)",gen:R=>{const f=R.pick(Object.keys(PRP)),kg=R.pick([1,2,3,5,8,12,20,30,60,150,200]),det=R.r(0,1)===1,t=kg*PRP[f]/1000;
   let m=t>=500?3:t>=50?6:t>=5?12:0;if(m&&det)m*=2;
   return {q:`<b>${kg} kg</b> de <b>${f}</b> (PRP ${PRP[f]}), ${det?'<b>avec</b>':'<b>sans</b>'} détection permanente des fuites. Tous les combien de mois faut-il un contrôle d'étanchéité ? (0 si pas obligatoire)`,r:m,u:"mois",tol:0.01,
     ex:`${kg} × ${PRP[f]} ÷ 1 000 = ${R.f(t,1)} t éq. CO₂ → ${m?(`<b>${m} mois</b>`+(det?' (intervalle doublé par la détection)':'')):'<b>0</b> : sous le seuil de 5 t, pas de contrôle obligatoire'}${t>=500?' — la détection permanente est obligatoire à ce niveau.':'.'}`}}},
 {t:"COP et EER",ic:"♨️",d:"Puissance utile ÷ puissance électrique",gen:R=>{const pe=R.pick([0.8,1,1.5,2,2.5,3]),c=R.pick([2.5,3,3.2,3.5,4,4.5]),pu=+(pe*c).toFixed(2),chaud=R.r(0,1);
   return {q:`Une machine absorbe <b>${R.f(pe,1)} kW</b> électriques et fournit <b>${R.f(pu,2)} kW</b> ${chaud?'de chaleur':'de froid'}. Quel est son ${chaud?'COP':'EER'} ?`,r:c,u:"",ex:`${chaud?'COP':'EER'} = ${R.f(pu,2)} ÷ ${R.f(pe,1)} = <b>${R.f(c,2)}</b>.`}}},
 {t:"Pression absolue",ic:"🔢",d:"Absolue = relative + 1,013 bar",gen:R=>{const p=R.pick([0.5,1.9,3.3,4.8,7.1,8.5,10.6,17.3,23.8,26.9]),r=p+1.013;
   return {q:`Le manifold indique <b>${R.f(p,1)} bar</b>. Quelle est la pression absolue ?`,r,u:"bar abs",tol:0.06,ex:`${R.f(p,1)} + 1,013 = <b>${R.f(r,2)} bar absolus</b> (on arrondit souvent à + 1 bar).`}}},
 {t:"Charge complémentaire d'un split",ic:"📏",d:"(longueur − longueur préchargée) × g/m",gen:R=>{const lp=R.pick([5,7.5,10]),l=lp+R.r(2,20),g=R.pick([15,20,25,30]),r=(l-lp)*g;
   return {q:`Unité préchargée pour <b>${R.f(lp,1)} m</b>. Liaison réelle : <b>${R.f(l,1)} m</b>. Complément : <b>${g} g/m</b>. Combien de fluide ajouter ?`,r,u:"g",tol:0.5,ex:`(${R.f(l,1)} − ${R.f(lp,1)}) × ${g} = <b>${R.f(r,1)} g</b>, à charger au poids.`}}},
 {t:"Bouteille de récupération (80 %)",ic:"♻️",d:"Capacité × 0,8 − contenu",gen:R=>{const cap=R.pick([10,12.5,26,50]),deja=+(cap*R.r(0,6)/10).toFixed(1),r=Math.max(0,cap*0.8-deja);
   return {q:`Bouteille de récupération de <b>${R.f(cap,1)} kg</b> de capacité, qui contient déjà <b>${R.f(deja,1)} kg</b> du même fluide. Combien peut-on encore y récupérer au maximum ?`,r,u:"kg",tol:0.05,ex:`80 % de ${R.f(cap,1)} = ${R.f(cap*0.8,1)} kg ; ${R.f(cap*0.8,1)} − ${R.f(deja,1)} = <b>${R.f(r,1)} kg</b>.`}}},
 {t:"Puissance frigorifique sur l'air",ic:"🌬️",d:"P (W) ≈ 0,34 × débit (m³/h) × ΔT",gen:R=>{const q=R.pick([300,400,500,600,800,1000]),dt=R.r(6,14),r=0.34*q*dt;
   return {q:`Une unité intérieure brasse <b>${q} m³/h</b> d'air et le refroidit de <b>${dt} K</b>. Quelle puissance frigorifique sensible (en W) ?`,r,u:"W",tol:r*0.03,ex:`P ≈ 0,34 × ${q} × ${dt} = <b>${R.f(r,0)} W</b> (0,34 = masse volumique × chaleur massique de l'air, en Wh/m³·K).`}}},
 {t:"Degrés Celsius et kelvins",ic:"🌡️",d:"K = °C + 273",gen:R=>{const c=R.pick([-40,-30,-20,-18,-10,0,4,20,35,45]);
   return {q:`Combien de kelvins font <b>${c} °C</b> ?`,r:c+273,u:"K",tol:0.6,ex:`${c} + 273 = <b>${c+273} K</b>.`}}}
];
