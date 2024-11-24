let code = "";
generateCode();

function generateCode() {
    code += `<div id="genderHeadline"><h1>Men:</h1></div>`;
    code += `<div id="man-boxis">`;

    for (let i = 0; i < 14; i++) {
        skiAjax(i);
    }
}

function skiAjax(i) {
    fetch(`/worldCup-skiers`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            code += `
            <div id="grid-boxes" class="gsap-box">
                <div id="img-box">
                    <img src="${data.result[i].img}" alt="${data.result[i].name}">
                </div>
                <div id="content-box">
                    <h1>${data.result[i].name}</h1>
                    <h2>Times Won: ${data.result[i].timesWon}</h2>
                    <h2>Years Won: ${data.result[i].yearWon}</h2>
                    <h2>Retired Year: ${data.result[i].retartedYear}</h2>
                </div>
            </div>`;

            if (i == 4) {
                code += `</div>`;
                code += `<div id="genderHeadline"><h1>Women:</h1></div>`;
                code += `<div id="women-boxis">`;
            }

            if (i == 13) {
                code += `</div>`;
                document.getElementById('content').innerHTML += code;

                // Hier den Scroll-Trigger-Code einfügen, nachdem der HTML-Inhalt generiert wurde
                gsap.registerPlugin(ScrollTrigger);

                let sections = document.querySelectorAll(".gsap-box");

                sections.forEach((element, i) => {
                    generateScrollAnimation(element, i);
                });

                function generateScrollAnimation(element, i) {
                    /* SET START KEY FRAME */
                    if (i % 2 == 0) {
                        gsap.set(element, {
                          x: "-40%",
                          y: "30%",
                          scale: 0,
                          opacity: 0,
                        });
                      } else {
                        gsap.set(element, {
                          x: "40%",
                          y: "30%",
                          scale: 0,
                          opacity: 0,
                        });
                      }
            
                      /* SET END KEY FRAME */
                      gsap.to(element, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 160%', // Animation startet, wenn das Element mehr als 50% des Viewports überlappt
                            end: 'bottom 0%', // Animation endet, wenn das Element mehr als 50% des Viewports überlappt
                            scrub: 0.4, // Scrub-Effekt für ein flüssigeres Scrollen
                        },
                      });
                }
            }
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}
