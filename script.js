gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});

gsap.from(".hero p", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});

gsap.from(".content", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
    }
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});