/* ═══════════════════════════════════════════════════════════════════
   HEIRLOOM MODERN — Eleshiba & Suraj
   script.js  ·  Edit CONFIG below to change any content.
   ═══════════════════════════════════════════════════════════════════ */

const CONFIG = {
  couple: { bride:"Eleshiba", groom:"Suraj", initials:"E S", hashtag:"#KishuKiLishu" },
  wedding: {
    dateISO:"2026-11-24T16:00:00+05:30",
    dateLabel:"24–25 November 2026",
    city:"Amritsar, Punjab",
    tagline:"Two lives, one beautiful beginning."
  },

  hero: "assets/hero.jpg",
  monogram: "assets/monogram.png",

  story: [
    { title:"The Beginning", img:"assets/story-1.jpg",
      text:"Every fairytale has a beginning — some start in castles, some under starlit skies, and theirs began in the corridors of St. Anthony's Convent School, when two children unknowingly stepped into the first chapter of a love story written long before they understood love." },
    { title:"The Meeting", img:"assets/story-2.jpg",
      text:"Eleshiba and Suraj first met in 7th standard. She was the lively, talkative, mischievous girl who could fill a room with laughter, and he was the cute, shy boy who quietly noticed everything — especially her. From the moment he first saw her, a little schoolboy crush began to bloom." },
    { title:"The Years Between", img:"assets/story-3.jpg",
      text:"From 7th to 10th standard, they shared the same classroom and countless little memories. Eleshiba, with her playful mischief, teased him in the sweetest school-time way, while Suraj — shy, gentle, and quietly fond of her — simply became part of her everyday world." },
    { title:"The Wait", img:"assets/story-4.jpg",
      text:"By the 10th standard, Suraj finally gathered the courage to express what had been in his heart. It was his first proposal — innocent and unforgettable. But life pulled them in different directions. They separated after school, yet some connections do not end with distance. They wait. Quietly. Patiently." },
    { title:"Forever", img:"assets/story-5.jpg",
      text:"Years later, destiny opened the next chapter. A playful invitation to Punjab, and the very next morning Suraj stood at her home in Amritsar like a hero from a movie. He won her heart and her family's. Then, on 4th December 2024 — her birthday — he turned their love story into a dream, and she said yes." }
  ],

  // Couple section: one feature image + two short bios (no solo portraits available)
  couplePhoto: "assets/couple.jpg",
  meet: {
    bride: { name:"Eleshiba Sunny", role:"The Bride",
      bio:"The biggest heart and the purest way of caring for people. Her love, strength, hard work, and cheerful nature inspire everyone around her — honest, courageous, and quick to stand for what is right." },
    groom: { name:"Suraj Thakur", role:"The Groom",
      bio:"Hardworking, loyal, simple, and full of warmth. He carries a rare positivity that turns an ordinary day into something beautiful — her calm in chaos, her strength in uncertainty, the one she would choose in every lifetime." }
  },

  // Family: typographic (no individual portraits provided)
  family: {
    bride: { title:"The Bride's Family", members:[
      { nm:"Kanchan & Ashok Sunny", rl:"Her Parents", ln:"Who gave her roots, and then her wings." },
      { nm:"Rubina Sunny & Johnathan", rl:"Her Sister & Brother", ln:"Her keepers of secrets and loudest cheerleaders." }
    ]},
    groom: { title:"The Groom's Family", members:[
      { nm:"Asha & Shailendra Kumar Thakur", rl:"His Parents", ln:"Who taught him that kindness counts more than everything." }
    ]}
  },

  events: [
    { name:"Haldi", when:"23 Nov · 11:30 AM", venue:"The Bageechi, Amritsar", color:"#e0a82e",
      mood:"Turmeric, laughter, and the first golden glow.",
      startISO:"2026-11-23T11:30:00+05:30", endISO:"2026-11-23T14:00:00+05:30",
      map:"https://www.google.com/maps/search/?api=1&query=The%20Bageechi%2C%20Amritsar" },
    { name:"Mehendi", when:"23 Nov · 5:00 PM", venue:"The Bageechi, Amritsar", color:"#5a7d3c",
      mood:"Henna, colour, and endless celebration.",
      startISO:"2026-11-23T17:00:00+05:30", endISO:"2026-11-23T19:30:00+05:30",
      map:"https://www.google.com/maps/search/?api=1&query=The%20Bageechi%2C%20Amritsar" },
    { name:"Sangeet", when:"23 Nov · 7:30 PM", venue:"The Bageechi, Amritsar", color:"#3b2a5a",
      mood:"Bring your dancing shoes and your loudest laugh.",
      startISO:"2026-11-23T19:30:00+05:30", endISO:"2026-11-23T23:30:00+05:30",
      map:"https://www.google.com/maps/search/?api=1&query=The%20Bageechi%2C%20Amritsar" },
    { name:"Christian Wedding", when:"24 Nov · 4:00 PM", venue:"Sacred Heart Church, Amritsar", color:"#a13a2a",
      mood:"Two hearts, one vow, before God and family.",
      startISO:"2026-11-24T16:00:00+05:30", endISO:"2026-11-24T18:00:00+05:30",
      map:"https://www.google.com/maps/search/?api=1&query=Sacred%20Heart%20Church%2C%20Bhawani%20Nagar%2C%20Amritsar%2C%20Punjab%20143001" },
    { name:"Christian Reception", when:"24 Nov · 7:30 PM", venue:"Green Tulip, Amritsar", color:"#6e2a37",
      mood:"Champagne, celebration, and a first dance.",
      startISO:"2026-11-24T19:30:00+05:30", endISO:"2026-11-24T23:59:00+05:30",
      map:"https://www.google.com/maps/search/?api=1&query=Green%20Tulip%2C%20Amritsar" },
    { name:"Hindu Wedding & Dinner", when:"25 Nov · 7:30 PM", venue:"Parin Azure, Verka, Amritsar", color:"#c4843d",
      mood:"Sacred rituals, family blessings, forever bonds.",
      startISO:"2026-11-25T19:30:00+05:30", endISO:"2026-11-26T01:00:00+05:30",
      map:"https://www.google.com/maps/search/?api=1&query=Parin%20Azure%2C%20Majitha%20Verka%20Bypass%2C%20near%20Fortis%20Escort%2C%20Verka%2C%20Amritsar%20143501" }
  ],

  venue: {
    image:"assets/venue.jpg",
    blocks:[
      { label:"Christian Wedding", name:"Sacred Heart Church", addr:"Bhawani Nagar, Amritsar, Punjab 143001", map:"https://www.google.com/maps/search/?api=1&query=Sacred%20Heart%20Church%2C%20Bhawani%20Nagar%2C%20Amritsar%2C%20Punjab%20143001" },
      { label:"Hindu Wedding & Dinner", name:"Parin Azure", addr:"Majitha–Verka Bypass, near Fortis Escort, Verka, Amritsar 143501", map:"https://www.google.com/maps/search/?api=1&query=Parin%20Azure%2C%20Majitha%20Verka%20Bypass%2C%20near%20Fortis%20Escort%2C%20Verka%2C%20Amritsar%20143501" }
    ]
  },

  gallery: Array.from({length:14},(_,i)=>`assets/gallery-${i+1}.jpg`),

  // RSVP is saved through /api/rsvp, which forwards to Google Sheets server-side.
  rsvp: { endpoint:"/api/rsvp", whatsapp:"+919592884646" },
  guestbook: { endpoint:"", seed:[
    { name:"The Sharma Family", message:"From classroom glances to forever vows. We couldn't be happier for you both." },
    { name:"Priya & Rohan", message:"Two of the kindest people we know, finally finding each other. A lifetime of laughter awaits." },
    { name:"Uncle Ramesh", message:"May your home be full of laughter and your table always full." },
    { name:"Ananya", message:"Here's to inside jokes, slow dances, and choosing each other every single day." }
  ]},

  music: { url:"", title:"" }
};

/* ─────────────────────── ENGINE ─────────────────────── */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const hasMusic=Boolean(CONFIG.music.url);

function setViewportUnit(){
  document.documentElement.style.setProperty('--vh',(innerHeight*.01)+'px');
}
setViewportUnit();
addEventListener('resize',setViewportUnit,{passive:true});
addEventListener('orientationchange',setViewportUnit,{passive:true});

function makeSubmissionId(){
  if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function placeholder(label){
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%232B1D22'/><stop offset='1' stop-color='%231A1014'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='50%' fill='%23C9A24B' font-family='Georgia' font-size='30' font-style='italic' text-anchor='middle'>${label||'Heirloom'}</text></svg>`;
  return 'data:image/svg+xml,'+encodeURIComponent(svg.replace(/\n\s*/g,' '));
}
function frame(src,label,alt){
  const f=document.createElement('div');f.className='frame';
  const img=document.createElement('img');
  img.src=src;img.alt=alt||label;img.loading='lazy';img.decoding='async';
  img.onerror=()=>{img.onerror=null;img.src=placeholder(label);};
  f.appendChild(img);return f;
}

const THREAD={
  horizontal:`<svg viewBox="0 0 180 24"><path pathLength="1" d="M2,12 C40,2 60,22 90,12 C120,2 140,22 178,12"/></svg>`,
  vertical:`<svg viewBox="0 0 30 1000" preserveAspectRatio="none"><path pathLength="1" d="M15,0 C5,200 25,400 15,600 C5,800 25,900 15,1000"/></svg>`,
  knot:`<svg viewBox="0 0 120 80"><path pathLength="1" d="M20,40 C45,8 75,72 100,40 C75,8 45,72 20,40 Z"/></svg>`,
  flourish:`<svg viewBox="0 0 120 30"><path pathLength="1" d="M2,15 C30,3 45,27 60,15 C75,3 90,27 118,15"/><circle pathLength="1" class="dot" cx="60" cy="15" r="2.5"/></svg>`
};

function spell(w){return [...w].map(c=>`<span class="ltr">${c}</span>`).join('');}

function build(){
  // loader monogram
  const lm=$('#loaderMono'); const mi=new Image(); mi.src=CONFIG.monogram;
  mi.alt='Eleshiba & Suraj monogram'; mi.onerror=()=>{lm.innerHTML='<span style="font-family:var(--serif);color:var(--gold);font-size:2.4rem">E&nbsp;S</span>';};
  lm.appendChild(mi);

  // hero
  $('#heroImg').src=CONFIG.hero;
  $('#heroImg').onerror=function(){this.onerror=null;this.src=placeholder('Hero');};
  $('#heroNames').innerHTML=`<span class="word">${spell(CONFIG.couple.bride)}</span><span class="amp">&amp;</span><span class="word">${spell(CONFIG.couple.groom)}</span>`;
  $$('#heroNames .ltr').forEach((l,i)=>l.style.animationDelay=(.4+i*.05)+'s');
  $('#heroThread').innerHTML=THREAD.horizontal;
  $('#heroTag').textContent=CONFIG.wedding.tagline;
  $('#heroMeta').textContent=`${CONFIG.wedding.dateLabel} · ${CONFIG.wedding.city}`;

  $('#inviteFlourish').innerHTML=THREAD.flourish;

  // countdown
  $('#countGrid').innerHTML=['days','hours','mins','secs'].map((u,i)=>
    (i?'<span class="count-sep">:</span>':'')+
    `<div class="count-unit"><div class="count-num" data-u="${u}">--</div><div class="count-lbl">${u}</div></div>`).join('');

  // story
  $('#storyList').innerHTML=CONFIG.story.map((c,i)=>`<div class="chapter reveal">
    <div class="ch-media frame"></div>
    <div class="ch-text-block"><div class="ch-num">Part ${i+1}</div>
    <h3 class="ch-title">${c.title}</h3><p class="ch-text">${c.text}</p></div></div>`).join('');
  $$('#storyList .chapter').forEach((ch,i)=>ch.querySelector('.ch-media').appendChild(frame(CONFIG.story[i].img,CONFIG.story[i].title)));

  // couple
  $('#couplePhoto').appendChild(frame(CONFIG.couplePhoto,'Eleshiba & Suraj'));
  $('#coupleBios').innerHTML=[CONFIG.meet.bride,CONFIG.meet.groom].map(p=>
    `<div class="cbio"><h3>${p.name}</h3><div class="role">${p.role}</div><p>${p.bio}</p><div class="div"></div></div>`).join('');

  // family
  $('#famBrideName').textContent=CONFIG.family.bride.title;
  $('#famGroomName').textContent=CONFIG.family.groom.title;
  $('#famThread').innerHTML=THREAD.vertical;
  const fh=m=>`<div class="fam-member"><div class="nm">${m.nm}</div><div class="rl">${m.rl}</div><div class="ln">${m.ln}</div></div>`;
  $('#famBride').innerHTML=CONFIG.family.bride.members.map(fh).join('');
  $('#famGroom').innerHTML=CONFIG.family.groom.members.map(fh).join('');

  // timeline
  $('#tlThread').innerHTML=THREAD.vertical;
  $('#tlList').innerHTML=CONFIG.events.map(e=>`<div class="tl-event reveal">
    <div class="tl-when">${e.when}<span class="swatch" style="background:${e.color}"></span></div>
    <div class="tl-name">${e.name}</div><div class="tl-venue">${e.venue}</div>
    <div class="tl-mood">${e.mood}</div>
    <div class="tl-acts">
      <a class="chip" href="${gcal(e)}" target="_blank" rel="noopener">+ Add to calendar</a>
      <a class="chip" href="${e.map}" target="_blank" rel="noopener">Directions</a>
    </div></div>`).join('');

  // gallery
  CONFIG.gallery.forEach((src,i)=>{
    const f=frame(src,'Moment '+(i+1));
    f.addEventListener('click',()=>openLightbox(src,'Moment '+(i+1)));
    const img=f.querySelector('img');
    img.loading='eager';
    img.decoding='async';
    img.fetchPriority='low';
    $('#galGrid').appendChild(f);
  });

  // venue
  $('#venueImg').appendChild(frame(CONFIG.venue.image,'Amritsar'));
  $('#venueBlocks').innerHTML=CONFIG.venue.blocks.map(b=>
    `<div class="venue-block"><div class="vlabel">${b.label}</div>
     <p class="addr"><strong>${b.name}</strong><br>${b.addr}</p>
     <a class="btn-gold" href="${b.map}" target="_blank" rel="noopener">Get directions</a></div>`).join('');

  // rsvp / dock
  const wa=`https://wa.me/${CONFIG.rsvp.whatsapp.replace(/[^0-9]/g,'')}?text=${encodeURIComponent("Hi! RSVP for Eleshiba & Suraj's wedding — ")}`;
  $('#rsvpWA').href=wa; $('#dockWA').href=wa;

  // guestbook
  CONFIG.guestbook.seed.forEach(b=>addBlessing(b,false));

  // finale
  $('#finaleKnot').innerHTML=THREAD.knot;
  $('#finaleSign').textContent=`${CONFIG.couple.bride} & ${CONFIG.couple.groom}`;
  $('#finaleHash').textContent=CONFIG.couple.hashtag;
  $('#year').textContent=new Date().getFullYear();
}

function gcal(e){
  const fmt=iso=>iso.replace(/[-:]/g,'').replace(/\.\d+/,'').slice(0,15);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Eleshiba & Suraj — '+e.name)}&dates=${fmt(e.startISO)}/${fmt(e.endISO)}&location=${encodeURIComponent(e.venue)}`;
}

function observe(){
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
  }),{threshold:.14,rootMargin:'0px 0px -8% 0px'});
  $$('.reveal,.stagger,.thread').forEach(el=>io.observe(el));
}

function tick(){
  const diff=new Date(CONFIG.wedding.dateISO).getTime()-Date.now();
  if(diff<=0){
    $('#countGrid').innerHTML='<div class="is-the-day">Today is the day ✦</div>';
    $('#countUntil').textContent='The celebration has begun.';return;
  }
  const d=Math.floor(diff/864e5),h=Math.floor(diff%864e5/36e5),m=Math.floor(diff%36e5/6e4),s=Math.floor(diff%6e4/1e3);
  const set=(u,v)=>{const el=$(`[data-u="${u}"]`);if(el)el.textContent=String(v).padStart(2,'0');};
  set('days',d);set('hours',h);set('mins',m);set('secs',s);
  $('#countUntil').textContent=`${d} day${d===1?'':'s'} until forever`;
}

function closeLightbox(){
  const lb=$('#lightbox');
  lb.classList.remove('open');
  document.body.classList.remove('modal-open');
}
function openLightbox(src,alt){
  const lb=$('#lightbox');
  lb.querySelector('img').src=src;
  lb.querySelector('img').alt=alt;
  lb.classList.add('open');
  document.body.classList.add('modal-open');
}
$('#lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox'||e.target.closest('.close'))closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

let playing=false;
function flash(el,msg){
  el.setAttribute('title',msg);
  if(el.animate)el.animate([{opacity:1},{opacity:.4},{opacity:1}],{duration:600});
}
function syncMusicUI(){
  $('#dockMusic').classList.toggle('muted',!playing);
  $('#dockMusic').setAttribute('aria-pressed',String(playing));
  $('#soundInvite').setAttribute('aria-pressed',String(playing));
  $('#soundInvite').setAttribute('aria-label',playing?'Pause wedding music':'Play wedding music');
}
async function toggleMusic(){
  const a=$('#bgm');
  if(!hasMusic)return;
  if(playing){a.pause();playing=false;syncMusicUI();return;}
  try{
    await a.play();
    playing=true;
  }catch(e){
    playing=false;
    flash($('#dockMusic'),'Tap again to allow sound');
  }
  syncMusicUI();
}
$('#dockMusic').addEventListener('click',toggleMusic);
$('#soundInvite').addEventListener('click',toggleMusic);

let attending=null;
let rsvpSubmitting=false;
$$('.attend button').forEach(b=>b.addEventListener('click',()=>{
  attending=b.dataset.v;$$('.attend button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  $$('.attend button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
}));
function setRsvpStatus(message,type=''){
  const el=$('#rsvpStatus');
  el.textContent=message;
  el.className='form-status';
  if(type)el.classList.add(type);
}
$('#rsvpSend').addEventListener('click',async()=>{
  if(rsvpSubmitting||$('#rsvpHoney').value)return;
  const name=$('#rsvpName').value.trim();
  const note=$('#rsvpNote').value.trim();
  if(!name){$('#rsvpName').focus();flash($('#rsvpName'),'Tell us your name');setRsvpStatus('Please enter your name.','error');return;}
  if(name.length>80){$('#rsvpName').focus();setRsvpStatus('Please keep your name under 80 characters.','error');return;}
  if(note.length>500){$('#rsvpNote').focus();setRsvpStatus('Please keep your note under 500 characters.','error');return;}
  const payload={
    type:'rsvp',
    name,
    attending:attending||'yes',
    party:$('#rsvpCount').value,
    note,
    submissionId:makeSubmissionId(),
    ts:new Date().toISOString()
  };
  const send=$('#rsvpSend');
  rsvpSubmitting=true;
  send.disabled=true;
  send.textContent='Saving...';
  setRsvpStatus('Saving your RSVP...');
  try{
    const res=await fetch(CONFIG.rsvp.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    const data=await res.json().catch(()=>({}));
    if(!res.ok||!data.ok)throw new Error(data.error||'Unable to save RSVP right now.');
    $('#rsvpForm').style.display='none';
    $('#rsvpConfirm').classList.add('show');
    $('#rsvpThanks').textContent=(attending==='no')?"We'll miss you — thank you for letting us know.":`We can't wait to celebrate with you, ${name.split(' ')[0]}.`;
  }catch(e){
    setRsvpStatus(`${e.message||'Unable to save RSVP right now.'} Please try again or use WhatsApp.`, 'error');
    send.disabled=false;
    send.textContent='Save my seat';
    rsvpSubmitting=false;
  }
});

const ROT=[-2,-1,0,1,2];
function addBlessing(b,prepend=true){
  const el=document.createElement('div');el.className='blessing';
  el.style.setProperty('--r',ROT[Math.floor(Math.random()*ROT.length)]+'deg');
  const pin=document.createElement('div');pin.className='pin';
  const msg=document.createElement('p');msg.textContent=`"${b.message}"`;
  const by=document.createElement('div');by.className='by';by.textContent=`— ${b.name}`;
  el.append(pin,msg,by);
  const wall=$('#gbWall');prepend?wall.prepend(el):wall.appendChild(el);
}
$('#gbSend').addEventListener('click',async()=>{
  const name=$('#gbName').value.trim(),message=$('#gbMsg').value.trim();
  if(!name||!message){flash($('#gbSend'),'Add your name and a wish');return;}
  addBlessing({name,message},true);
  $('#gbName').value='';$('#gbMsg').value='';
  if(CONFIG.guestbook.endpoint){try{await fetch(CONFIG.guestbook.endpoint,{method:'POST',body:JSON.stringify({type:'blessing',name,message,ts:new Date().toISOString()})});}catch(e){}}
  flash($('#gbSend'),'Thank you ✦');
});

const dock=$('#dock');
addEventListener('scroll',()=>{dock.classList.toggle('show',scrollY>innerHeight*.7);},{passive:true});
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=$(a.getAttribute('href'));
  if(!target)return;
  e.preventDefault();
  history.pushState(null,'',a.getAttribute('href'));
  const align=()=>scrollTo({top:Math.max(0,target.offsetTop-12),behavior:reduce?'auto':'smooth'});
  align();
  setTimeout(align,450);
}));

function start(){
  build();observe();tick();setInterval(tick,1000);
  $$('.attend button').forEach(x=>x.setAttribute('aria-pressed','false'));
  $('#dockMusic').classList.add('muted');
  syncMusicUI();
  if(hasMusic)$('#bgm').src=CONFIG.music.url;
  else{$('#dockMusic').hidden=true;$('#soundInvite').hidden=true;}
  setTimeout(()=>$('#loader').classList.add('done'),reduce?0:1700);
}
document.readyState!=='loading'?start():addEventListener('DOMContentLoaded',start);
