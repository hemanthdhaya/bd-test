const pages=[...document.querySelectorAll('.page')],bar=document.querySelector('.progress i');let current=0,lit=false;
function go(n){current=Math.max(0,Math.min(pages.length-1,n));pages.forEach((p,i)=>p.classList.toggle('active',i===current));bar.style.width=((current+1)/pages.length*100)+'%';document.querySelector('.touch').textContent=current===pages.length-1?'Replay ↻':'Swipe ↑'}
document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>go(current+1));
document.getElementById('lightBtn').onclick=()=>{lit=true;document.body.style.background='radial-gradient(circle at 50% 30%,#392d48,#0b0a11 65%)';spawnStars();go(2)};
document.getElementById('musicBtn').onclick=()=>{document.getElementById('musicText').textContent='The vibe is officially on. 🎵';go(3)};
document.getElementById('balloonBtn').onclick=()=>{balloons();go(4)};
document.getElementById('blowBtn').onclick=()=>{document.getElementById('flame').textContent='';confetti();fireworks();setTimeout(()=>go(5),700)};
let typed=false;
function typeNote(){
  if(typed)return; typed=true;
  const box=document.getElementById('letterText');
  [...box.querySelectorAll('p')].forEach((p,i)=>{
    const text=p.textContent;
    p.textContent='';
    p.style.opacity='0';
    p.style.transform='translateY(8px)';
    p.style.transition='opacity .7s ease,transform .7s ease';
    setTimeout(()=>{
      p.textContent=text;
      requestAnimationFrame(()=>{p.style.opacity='1';p.style.transform='none'});
    },i*450);
  });
}
const observer=new MutationObserver(()=>{if(pages[6].classList.contains('active'))typeNote()});
observer.observe(pages[6],{attributes:true});
document.getElementById('finalBtn').onclick=()=>{go(7);confetti();fireworks()};
document.getElementById('replay').onclick=()=>location.reload();
let startY=0;addEventListener('touchstart',e=>startY=e.touches[0].clientY,{passive:true});addEventListener('touchend',e=>{let d=startY-e.changedTouches[0].clientY;if(Math.abs(d)>55)go(current+(d>0?1:-1))},{passive:true});
addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>30){go(current+(e.deltaY>0?1:-1))}});
function balloons(){for(let i=0;i<18;i++){let b=document.createElement('div');b.textContent=['🎈','🎈','🩷','💜'][i%4];b.style.cssText=`position:fixed;left:${Math.random()*100}vw;bottom:-80px;font-size:${35+Math.random()*30}px;z-index:8;transition:transform ${4+Math.random()*4}s linear;pointer-events:none`;document.body.appendChild(b);requestAnimationFrame(()=>b.style.transform=`translateY(-${innerHeight+200}px) rotate(${Math.random()*50-25}deg)`);setTimeout(()=>b.remove(),8000)}}
function confetti(){for(let i=0;i<90;i++){let x=document.createElement('span');x.textContent=['✦','·','♡','✧'][i%4];x.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-20px;color:#e9bf69;font-size:${10+Math.random()*20}px;z-index:12;transition:transform ${2+Math.random()*2}s linear,opacity 3s`;document.body.appendChild(x);requestAnimationFrame(()=>x.style.transform=`translateY(${innerHeight+50}px) rotate(${Math.random()*720}deg)`);setTimeout(()=>x.remove(),4500)}}
function fireworks(){const c=document.getElementById('fx'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;let a=[];for(let k=0;k<6;k++){let X=Math.random()*c.width,Y=Math.random()*c.height*.55;for(let i=0;i<45;i++){let q=i*Math.PI*2/45;a.push({x:X,y:Y,vx:Math.cos(q)*(2+Math.random()*4),vy:Math.sin(q)*(2+Math.random()*4),l:80})}}function f(){x.clearRect(0,0,c.width,c.height);a.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.035;p.l--;x.globalAlpha=p.l/80;x.fillStyle='#e9bf69';x.fillRect(p.x,p.y,2,2)});a=a.filter(p=>p.l>0);if(a.length)requestAnimationFrame(f)}f()}
function spawnStars(){for(let i=0;i<35;i++){let s=document.createElement('i');s.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:${Math.random()*100}vh;width:2px;height:2px;border-radius:50%;background:#fff;opacity:${.2+Math.random()*.7};z-index:1`;document.getElementById('particles').appendChild(s)}}
spawnStars();