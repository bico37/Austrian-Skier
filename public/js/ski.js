let code = "";
generateCode();

function generateCode() {
  code += `<div id="genderHeadline"><h1>Men:</h1></div>`;
  code += `<div id="man-boxis">`;

  for (let i = 0; i < 15; i++) {
    skiAjax(i);
  }
}

function skiAjax(i) {
  fetch(`/skiers`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let statusText = "";
      let winNumber;

      if (data.result[i].wins >= 0) {
        winNumber = data.result[i].wins;
      } else {
        winNumber = "N/A";
      }

      if (data.result[i].status == true) {
        statusText = "Active";
      } else if (data.result[i].name.toLowerCase() == "toni sailer") {
        console.log("Name is Toni Sailer");
        statusText = "Dead";
      } else {
        statusText = "Retired";
      }

      code += `
            <div id="grid-boxes" class="gsap-box">
                <div id="img-box">
                    <h1>${data.result[i].name}</h1>
                    <img src="${data.result[i].img}" alt="${data.result[i].name}">
                </div>
                <div id="content-box">
                    <h2>Age: ${data.result[i].age}</h2>
                    <h2>Born: ${data.result[i].born}</h2>
                    <h2>SkiBrand: ${data.result[i].skiBrand}</h2>
                    <h2>Discipline: ${data.result[i].disziplin}</h2>
                    <h2>Wins: ${winNumber}</h2>
                    <h2>Special: ${data.result[i].specialWin}</h2>
                    <h2>Status: ${statusText}</h2>
                </div>
            </div>`;

      if (i == 10) {
        code += `</div>`;
        code += `<div id="genderHeadline"><h1>Women:</h1></div>`;
        code += `<div id="women-boxis">`;
      }

      if (i == 14) {
        code += `</div>`;
        document.getElementById("content").innerHTML += code;

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
                start: 'top 100%', // Animation startet, wenn das Element mehr als 50% des Viewports überlappt
                end: 'bottom 100%', // Animation endet, wenn das Element mehr als 50% des Viewports überlappt
                scrub: 0.5, // Scrub-Effekt für ein flüssigeres Scrollen
            },
          });
        }
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
