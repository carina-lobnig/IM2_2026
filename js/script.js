console.log('Script geladen');

const cards = document.querySelector('#cards');

async function loadParkhaus() {
    const url = 'https://data.bs.ch/api/explore/v2.1/catalog/datasets/100088/records?limit=20';
    try {
        const response = await fetch(url);
        const data = await response.json(); // ← erst speichern
        console.log(data);                  // ← dann loggen
        showDaten(data);                    // ← dann anzeigen
    } catch (error) {
        console.error(error);
    }
}

function showDaten(data) {
  cards.innerHTML = '';

  data.results.forEach((parkhaus) => {
    const card = document.createElement('div');
    card.classList.add('card');

    let farbe;
    if (parkhaus.auslastung_prozent >= 80) {
      farbe = 'var(--col-rot)';
    } else if (parkhaus.auslastung_prozent >= 50) {
      farbe = 'var(--col-orange)';
    } else {
      farbe = 'var(--col-gruen)';
    }

    card.innerHTML = `
      <h3>${parkhaus.title}</h3>
      <p><strong>Status</strong><br>${parkhaus.status}</p>
      <p><strong>Freie Plätze</strong><br>${parkhaus.free}</p>
      <p><strong>Auslastung</strong><br>
        <span style="color: ${farbe}">${parkhaus.auslastung_prozent ?? '–'}%</span>
      </p>
      <a href="${parkhaus.link}" target="_blank" rel="noopener noreferrer">mehr Infos</a>
    `;

    cards.appendChild(card);
  });
}

loadParkhaus();