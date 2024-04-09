const wort = "beispiel"; // Das zu erratende Wort
const buchstaben = document.getElementById("buchstabenButtons");
const wortAnzeige = document.getElementById("wortAnzeige");

// Initialisiere das Spiel
function spielStarten() {
    for (let buchstabe of "abcdefghijklmnopqrstuvwxyzäöüß") {
        const button = document.createElement("button");
        button.textContent = buchstabe;
        button.onclick = buchstabenRaten;
        buchstaben.appendChild(button);
    }
    wortAnzeige.textContent = "_ ".repeat(wort.length);
}

// Funktion, die aufgerufen wird, wenn ein Buchstabe geraten wird
function buchstabenRaten(event) {
    const auswahl = event.target.textContent;
    let neuesWortAnzeige = "";

    for (let i = 0; i < wort.length; i++) {
        if (wort[i] === auswahl) {
            neuesWortAnzeige += auswahl + " ";
        } else if (wortAnzeige.textContent[i*2] !== "_") {
            neuesWortAnzeige += wort[i] + " ";
        } else {
            neuesWortAnzeige += "_ ";
        }
    }

    wortAnzeige.textContent = neuesWortAnzeige;
    event.target.disabled = true;
    // Überprüfe auf Sieg oder Niederlage
    if (!wortAnzeige.textContent.includes("_")) {
        alert("Gewonnen!");
    }
}

spielStarten();
