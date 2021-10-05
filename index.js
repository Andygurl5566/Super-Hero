
fetch('https://www.superheroapi.com/api.php/1804029439799110/search/batman')
    .then(resp => resp.json())
    .then(element => {
        console.log(element.results[0]);
        // renderPowerstats(element.results[0].powerstats);
        // renderBiography(element.results[0].biography);
        for (let singleStats in element.results[0].powerstats)
        {
            console.log(singleStats, element.results[0].powerstats[singleStats])
            const stats = document.getElementById('stat-box');
            const newStats = document.createElement('li')
            newStats.textContent = `${singleStats}: ${element.results[0].powerstats[singleStats]}`
            stats.append(newStats)
            
        }
        for (let singleBiography in element.results[0].biography)
        {
            console.log(singleBiography, element.results[0].biography[singleBiography])
            const bioBox = document.getElementById('bio-box');
            const newBio = document.createElement('li')
            newBio.textContent = `${singleBiography}: ${element.results[0].biography[singleBiography]}`
            bioBox.append(newBio)
            
        }
        // console.log(element.results[0].powerstats)
        // console.log(element.results[0].biography)
    });



// function renderBiography(biography) {
//     const biography = document.getElementById('bio-box');

// }