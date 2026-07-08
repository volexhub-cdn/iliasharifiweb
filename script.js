/* ==========================
   Scroll Progress Bar
========================== */

const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent =
        (scroll / height) * 100;

    progress.style.width = percent + "%";

});


/* ==========================
   Mouse Glow
========================== */

const glow =
document.getElementById("cursor-glow");

window.addEventListener("mousemove", e=>{

    glow.style.left = e.clientX + "px";
    glow.style.top  = e.clientY + "px";

});


/* ==========================
   Hero Fade Animation
========================== */

window.addEventListener("load",()=>{

document.querySelector(".hero-content").classList.add("show");

});


/* ==========================
   Navbar Blur on Scroll
========================== */

const nav =
document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

nav.style.background="rgba(10,15,35,.55)";
nav.style.backdropFilter="blur(25px)";

}else{

nav.style.background="rgba(255,255,255,.07)";

}

});


/* ==========================
   Floating Stars
========================== */

for(let i=0;i<60;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=
5+Math.random()*6+"s";

document.body.appendChild(star);

}

/*==========================
 Reveal Animation
==========================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".glass-card,.skill-card,.project-card,.contact-card"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*==========================
 Loader
==========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("loader-hide");

},1500);

});


/*==========================
 Typing Animation
==========================*/

const words=[

"Web Development Student",

"Owner of MV LAB",

"Web Designer",

"Graphic Designer",

"Frontend Developer"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.getElementById("typing");

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?40:90);

}

type();



/*==========================
 Theme
==========================*/

const button=document.getElementById("themeToggle");

button.onclick=()=>{

document.body.classList.toggle("light");

button.textContent=

document.body.classList.contains("light")

?

"☀️"

:

"🌙";

};