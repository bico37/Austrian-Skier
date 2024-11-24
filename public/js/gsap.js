document.addEventListener('DOMContentLoaded', function () {
    // Hier den JavaScript-Code einfügen
    gsap.registerPlugin(ScrollTrigger);

    let sections = document.querySelectorAll('.gsap-box');

    sections.forEach((element, i) => {
        generateScrollAnimation(element, i);
    });


function generateScrollAnimation(element, i) {
    // Setze den Start-Status der Animation
    gsap.set(element, {
        x: '-50%', // Halbe Breite nach links verschieben
        opacity: 0
    });

    // Setze den End-Status der Animation
    gsap.to(element, {
        x: '0%',
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: element,
            start: 'top 50%', // Animation startet, wenn das Element mehr als 50% des Viewports überlappt
            end: 'bottom 50%', // Animation endet, wenn das Element mehr als 50% des Viewports überlappt
            scrub: 0.5, // Scrub-Effekt für ein flüssigeres Scrollen
        }
    });
}
