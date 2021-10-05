// function searchHero(name) {
    fetch(`https://www.superheroapi.com/api.php/1804029439799110/search/batman`)
    .then(resp => resp.json())
    .then(element => {
        console.log(element.results[0].biography.aliases)
        addImage(element)
        changeName(element)
        addBio(element)
        for (let singleStats in element.results[0].powerstats)
        {
            console.log(singleStats, element.results[0].powerstats[singleStats])
            const stats = document.getElementById('stat-box');
            const newStats = document.createElement('li')
            newStats.textContent = `${singleStats}: ${element.results[0].powerstats[singleStats]}`
            stats.append(newStats)
            
        }
    })
// }

function addImage(element){
    const imageContainer = document.getElementById("placeholder-image")
        imageContainer.src = element.results[0].image.url
}


function changeName(element){
    const heroText = document.getElementById("hero-text")
    heroText.textContent = element.results[0].name
}


function addBio (element) {
    const bioContainer = document.getElementById("bio-text")
    const aliases = element.results[0].biography.aliases
    const publisher = element.results[0].biography.publisher
    const firstAppearance = element.results[0].biography["first-appearance"]
    bioContainer.textContent = `This hero also goes by ${aliases}. 
        They first appear in ${firstAppearance}. This hero is published by 
        ${publisher}`
    console.log(bioContainer)
}

//----------------------------------------------------------------------------------------

// const searchBar = document.getElementById("superSearch")

// function searchbarInput(e){
//     e.preventDefault()
//     const newHero = {}
//     newHero.name = e.target.superSearch.value
//     console.log(newHero)
// }


// searchBar.addEventListener(document.addEventListener("submit", searchbarInput))

//-----------------------------------------------------------------------------------------

function searchBreweries(e){

    e.preventDefault();
    brewList.replaceChildren();

    let query = document.querySelector('#superSearch').value;

    brewForm.reset();

    fetch(BASE_URL + `/search/${query}`) // returns a promise
    .then(resp => resp.json()) // another promise
    .then(breweries => {
        { breweries.length == 0 ? returnNone() : breweries.forEach(renderBrew) }
    });
}