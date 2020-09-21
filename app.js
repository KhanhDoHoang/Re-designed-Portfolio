let container;
let camera;
let renderer;
let scene;
let spaceship;

$(document).ready(function () {

        $("html").niceScroll();

    }

);

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.1,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 0.8,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", {
        left: "-100%"
    });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.4,
        delay: 0.2
    });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [{
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        }, ],
    });
});

// const [red, green, blue] = [13, 45, 70]
// // var bgn = document.querySelector(".bgn");
// const section1 = document.querySelector('.theBody')

// window.addEventListener('scroll', () => {
//     const y = 1 + (window.scrollY || window.pageYOffset) / 1500;
//     const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
//     section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     // bgn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// })

var tStart = 1000 // Start transition 100px from top
    ,
    tEnd = 3000 // End at 4000px
    ,
    cStart = [13, 45, 70] // Gold
    ,
    cEnd = [179, 217, 112] // Lime
    ,
    cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] + cStart[0]];

$(document).ready(function () {
    $(document).scroll(function () {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $(".theBody").css('background-color', 'rgb(' + cBg.join(',') + ')');
    });
});