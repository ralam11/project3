document.addEventListener('DOMContentLoaded', () => {
    const flagImg = document.getElementById('flag');
    const countryNameDiv = document.getElementById('name');
    const capitalDiv = document.getElementById('capital');
    const regionDiv = document.getElementById('region');
    const subregionDiv = document.getElementById('subregion');
    const populationDiv = document.getElementById('population');
    const languagesDiv = document.getElementById('languages');

    fetch('https://restcountries.com/v3.1/name/india')
        .then(response => response.json())
        .then(data => {
            const country = data[0];

            // Update flag image
            flagImg.src = country.flags.svg;
            flagImg.alt = `Flag of ${country.name.common}`;

            // Update country details
            countryNameDiv.textContent = "Official Name: " + country.name.official;
            capitalDiv.textContent = `Capital: ${country.capital[0]}`;
            regionDiv.textContent = `Region: ${country.region}`;
            subregionDiv.textContent = `Subregion: ${country.subregion}`;
            populationDiv.textContent = `Population: ${country.population.toLocaleString()}`;
            languagesDiv.textContent = `Languages: ${Object.values(country.languages).join(', ')}`;
        })
        .catch(error => {
            document.getElementById('country-info').textContent = 'An error occurred while fetching country data.';
            console.error('Error fetching country data:', error);
        });
});