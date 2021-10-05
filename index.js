function searchHero(name) {
    fetch(`https://www.superheroapi.com/api.php/1804029439799110/search/${name}`)
    .then(resp => resp.json())
    .then(element => console.log(element))
}