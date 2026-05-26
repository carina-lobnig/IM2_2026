async function loadParkhaus() {
  const url = 'https://data.bs.ch/api/explore/v2.1/catalog/datasets/100088/records?limit=20';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showDaten(data);
  } catch (error) {
    console.error(error);
  }
}

const cards = document.querySelector('#cards');

const parkIdMapping = {
  city: 'City',
  storchen: 'Storchen',
  europe: 'Europe',
  badbahnhof: 'BadBahnhof',
  messe: 'Messe',
  claramatte: 'Claramatte',
  rebgasse: 'Rebgasse',
  clarahuus: 'Clarahuus',
  aeschen: 'Aeschen',
  anfos: 'Anfos',
  kunstmuseum: 'Kunstmuseum',
  postbasel: 'Post',
  centralbahn: 'Centralbahn',
  bahnhofsued: 'BahnhofSued',
  elisabethen: 'Elisabethen',
  steinen: 'Steinen'
};

function activateCard(cardId) {
  const card = document.querySelector(`#card-${cardId}`);
  if (!card) return;

  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.cls-1').forEach(p => p.classList.remove('active-point'));

  card.classList.add('active');
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const punktId = parkIdMapping[cardId];
  if (punktId) {
    const punkt = document.querySelector(`#${punktId}`);
    if (punkt) punkt.classList.add('active-point');
  }
}

function showDaten(data) {
  cards.innerHTML = '';

  data.results.forEach((parkhaus) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `card-${parkhaus.id2}`;
    card.tabIndex = 0;

    let farbe;
    if (parkhaus.free <= 5) {
      farbe = '#ff7d7f';
    } else if (parkhaus.free <= 30) {
      farbe = '#ffb387';
    } else {
      farbe = '#e7ffb2';
    }

    const svgId = parkIdMapping[parkhaus.id2];
    const svgPunkt = document.querySelector(`#${svgId}`);
    if (svgPunkt) svgPunkt.setAttribute('fill', farbe);

    card.innerHTML = `
      <h3 class="card-title">${parkhaus.title}</h3>
      <p class="kategorie">
        <strong class="label">Status</strong><br>
        <span class="value">${parkhaus.status}</span>
      </p>
      <p class="kategorie">
        <strong class="label">Freie Plätze</strong><br>
        <span class="value">${parkhaus.free}</span>
      </p>
      <p class="kategorie">
        <strong class="label">Auslastung</strong><br>
        <span class="value">${parkhaus.auslastung_prozent ?? '–'}%</span>
      </p>
      <a class="link" href="${parkhaus.link}" target="_blank" rel="noopener noreferrer">
        mehr Infos
      </a>
    `;

    card.addEventListener('click', () => {
      activateCard(parkhaus.id2);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateCard(parkhaus.id2);
      }
    });

    const link = card.querySelector('.link');
    if (link) {
      link.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    }

    cards.appendChild(card);
  });
}

const punkte = {
  City: 'city',
  Storchen: 'storchen',
  Europe: 'europe',
  BadBahnhof: 'badbahnhof',
  Messe: 'messe',
  Claramatte: 'claramatte',
  Rebgasse: 'rebgasse',
  Clarahuus: 'clarahuus',
  Aeschen: 'aeschen',
  Anfos: 'anfos',
  Kunstmuseum: 'kunstmuseum',
  Post: 'postbasel',
  Centralbahn: 'centralbahn',
  BahnhofSued: 'bahnhofsued',
  Elisabethen: 'elisabethen',
  Steinen: 'steinen'
};

Object.entries(punkte).forEach(([punktId, cardId]) => {
  const punkt = document.querySelector(`#${punktId}`);
  if (punkt) {
    punkt.addEventListener('click', function () {
      activateCard(cardId);
    });
  }
});



loadParkhaus();