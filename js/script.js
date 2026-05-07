// API Daten laden
async function loadParkhaus() {
    const url = 'https://data.bs.ch/api/explore/v2.1/catalog/datasets/100088/records?limit=20'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const parkhaus = await loadParkhaus();
console.log(parkhaus); // gibt die Daten der API oder false in der Konsole aus