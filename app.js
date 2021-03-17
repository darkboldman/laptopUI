const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const hero = document.querySelector(".hero");
const headline = document.querySelector(".headline");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade')
    });
});

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width:"100"}, {width:"80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut});