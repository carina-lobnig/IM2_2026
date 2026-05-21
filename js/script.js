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

  card.innerHTML = `
    <h3 class="card-title">${parkhaus.title}</h3>

    <p>
      <strong class="label">Status</strong><br>
      <span class="value">${parkhaus.status}</span>
    </p>

    <p>
      <strong class="label">Freie Plätze</strong><br>
      <span class="value">${parkhaus.free}</span>
    </p>

    <p>
      <strong class="label">Auslastung</strong><br>
      <span class="value">
        ${parkhaus.auslastung_prozent ?? '–'}%
      </span>
    </p>

    <a href="${parkhaus.link}" target="_blank" rel="noopener noreferrer">
      mehr Infos
    </a>
  `;

  cards.appendChild(card);
});
}

loadParkhaus();