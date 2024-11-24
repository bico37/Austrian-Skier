let htmlCode = "";

function generateSkierHTML(data) {
    for (let i = 0; i < 6; i++) {
        htmlCode += `<br>
            <div id="skier${i}" class="skier" onclick="loadBigCard(${i})">
                <h1>${data.result[i].name}</h1>
                <img src="${data.result[i].img}" alt="${data.result[i].name}">
            </div>`;
    }
    htmlCode += `<div id="bigCard"></div>`
}

function skiAjaxSmall() {
    fetch(`/skiMap-Skiers`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            
            generateSkierHTML(data);
    
            document.getElementById('content').innerHTML = htmlCode;
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}

skiAjaxSmall();

let codeBigCard = ""
function loadBigCard(id) {
    fetch(`/skiMap-Skiers`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            let statusText;
            if (data.result[id].status == true) {
                statusText = "Active";
            } else {
                statusText = "Retired";
            }

            
            codeBigCard = `
            <div id="grid-boxes">
                    <h1>${data.result[id].name}</h1>
                    <img src="${data.result[id].img}" alt="${data.result[id].name}">
                    <h2>Age: ${data.result[id].age}</h2>
                    <h2>Born: ${data.result[id].born}</h2>
                    <h2>SkiBrand: ${data.result[id].skiBrand}</h2>
                    <h2>Discipline: ${data.result[id].disziplin}</h2>
                    <h2>Wins: ${data.result[id].wins}</h2>
                    <h2>Special: ${data.result[id].specialWin}</h2>
                    <h2>Status: ${statusText}</h2>
            </div>`

            document.getElementById('bigCard').innerHTML = codeBigCard;
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
}