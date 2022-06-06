import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

console.info('Hello world');
gsap.from(".section--study", { duration: 1, y: 50, opacity: 0 });
gsap.from(".section__start", { duration: 1, y: 50, opacity: 0 });





gsap.from(".bold--intro", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".bold--intro",
        start: "top bottom",


    },
});

gsap.to(".balimg--intro", {

    opacity: 0,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".backgroundblue--intro__text",
        start: "center bottom",
        end: "bottom bottom",
        scrub: true

    },
});


gsap.from(".section--phone__intro", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".section--phone__intro",
        start: "top center",


    },
});



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


darkTheme.addEventListener("click", function() {
    if (document.body.dataset.theme === "dark") {
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    }
});


const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;


let theme = localStorage.getItem('theme');
if ((!theme && userDark) || (theme === "dark")) {
    dark();
} else if (theme === "light") {
    light();
}


function dark() {
    document.body.setAttribute("data-theme", "dark");
}

function light() {
    document.body.setAttribute("data-theme", "light");
}