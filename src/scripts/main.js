import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

console.info('Hello world');
gsap.from(".titre--center", { duration: 1, x: 50, opacity: 0, delay: 0.5 });
gsap.from(".sstitre--center", { duration: 1, x: 50, opacity: 0, delay: 0.5 });
gsap.from(".bt_bleu--intro", { duration: 1, x: 50, opacity: 0, delay: 0.5 });
gsap.from(".balimg--intro", { duration: 1, y: 50, opacity: 0 });
gsap.from(".section--study", { duration: 1, y: 50, opacity: 0 });
gsap.from(".section__start", { duration: 1, y: 50, opacity: 0 });

gsap.from(".cont__phonea", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".cont__phonea",
        start: "top center",


    },
});

gsap.from(".cont__phoneb", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".cont__phoneb",
        start: "top center",


    },
});

gsap.from(".section--end", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".section--end",
        start: "top bottom",


    },
});

gsap.from(".section--study__text", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".section--study__text",
        start: "top center",


    },
});

gsap.from(".block__studya", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".block__studya",
        start: "top center",


    },
});

gsap.from(".block__studyb", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".block__studyb",
        start: "top center",


    },
});


const darkTheme = document.querySelector(".btn__dark");

//Gérer le data-theme du body
darkTheme.addEventListener("click", function() {
    if (document.body.dataset.theme === "dark") {
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    }
});

//Est ce que l"utilisateur veut un theme dark?
const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//Est ce que l'utilisateur a déjà indiqué une préférence sur notre site?
let theme = localStorage.getItem('theme');
if ((!theme && userDark) || (theme === "dark")) {
    dark();
} else if (theme === "light") {
    light();
}

//function pour le dark
function dark() {
    document.body.setAttribute("data-theme", "dark");
}
//function pour le light
function light() {
    document.body.setAttribute("data-theme", "light");
}