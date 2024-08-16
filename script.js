const deMenu = document.querySelector("section:nth-of-type(2)");



const toggleMenu = () => {
    deMenu.classList.toggle("open");
}

document.querySelector("ul li button").addEventListener("click", toggleMenu);
document.querySelector("section:nth-of-type(2) ul li button").addEventListener("click", toggleMenu);

function veranderKleur(variable, color) {
    document.documentElement.style.setProperty(variable, color);
}

document.addEventListener("DOMContentLoaded", () => {
    const vluchtTabelBody = document.querySelector("table tbody");
    const intervalInput = document.getElementById('interval');
    const intervalValueDisplay = document.getElementById('interval-value');

    const tabelData1 = [
        { tijd: '10:00', bestemming: 'Amsterdam', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '10:00', bestemming: 'Amsterdam', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '10:00', bestemming: 'Amsterdam', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '10:00', bestemming: 'Amsterdam', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '10:00', bestemming: 'Amsterdam', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '10:00', bestemming: 'Amsterdam', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
    ];

    const tabelData2 = [
        { tijd: '12:00', bestemming: 'Toronto', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Op tijd' },
        { tijd: '12:00', bestemming: 'Toronto', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Op tijd' },
        { tijd: '12:00', bestemming: 'Toronto', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '12:00', bestemming: 'Toronto', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Op tijd' },
        { tijd: '12:00', bestemming: 'Toronto', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Vertraagd' },
        { tijd: '12:00', bestemming: 'Toronto', vlucht: 'kl 1234', maatschappij: 'KLM', status: 'Op tijd' },
    ];

    let huidigeData = 0;
    const dataSets = [tabelData1, tabelData2];

    const updateTabel = (data) => {
        vluchtTabelBody.innerHTML = '';

        data.forEach(flight => {
            const row = document.createElement('tr');
            for (const key in flight) {
                const cell = document.createElement('td');
                cell.textContent = flight[key];
                row.appendChild(cell);
            }
            vluchtTabelBody.appendChild(row);
        });
    }

    const updateTableInterval = () => {
        huidigeData = (huidigeData + 1) % dataSets.length;
        updateTabel(dataSets[huidigeData]);
    }

    let intervalId = setInterval(updateTableInterval, intervalInput.value * 1000);

    intervalInput.addEventListener('input', () => {
        intervalValueDisplay.textContent = intervalInput.value;
        clearInterval(intervalId);
        intervalId = setInterval(updateTableInterval, intervalInput.value * 1000);
    });

    updateTabel(dataSets[huidigeData]);
});


// API Haperde helaas net iets te veel dus heb deze niet gebruikt ipv daarvan lokale tijd gebruikt//


// const klokUpdate = async () => {
//     const klokElement = document.getElementById("klok");
//     const antwoord = await fetch("https://worldtimeapi.org/api/timezone/Europe/Amsterdam");
//     const data = await antwoord.json();
//     const nu = new Date(data.datetime);

//     const uren = String(nu.getHours()).padStart(2, "0");
//     const minuten = String(nu.getMinutes()).padStart(2, "0");
//     const seconden = String(nu.getSeconds()).padStart(2, "0");

//     klokElement.textContent = `${uren}:${minuten}:${seconden}`;

// }

const klokUpdate1 =  () => {
    const klokElement = document.getElementById("klok");
    const nu = new Date();

    const uren = String(nu.getHours()).padStart(2, "0");
    const minuten = String(nu.getMinutes()).padStart(2, "0");
    const seconden = String(nu.getSeconds()).padStart(2, "0");

    klokElement.textContent = `${uren}:${minuten}:${seconden}`;
};


setInterval(klokUpdate1, 1000);

// klokUpdate();
klokUpdate1();