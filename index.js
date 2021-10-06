
 document.addEventListener('DOMContentLoaded', () => {
    const heroForm = document.getElementById('hero-form')
    heroForm.addEventListener('submit', searchSuperhero)
  });


function searchSuperhero(e){

    e.preventDefault();
     
    let name = document.querySelector('#superSearch').value;
    const baseURL = `https://www.superheroapi.com/api.php/1804029439799110/search/${name}` 
    console.log(baseURL)

    fetch(baseURL)
        .then(resp => resp.json())
        .then(element => {
            console.log(element)
            // console.log(element.results[0].biography.aliases)
            addImage(element)
            changeName(element)
            addBio(element)
            handleLikeandDislikeButton() //added by Andrea
            handleStats(element)
            //handleComments(element)
            document.getElementById('comment-container').innerHTML = ""
           
           

                
            
        })
    heroForm.reset()
}

// function commentForEachHero(element){
//     for (let element in elements){
//         handleComments(element)
//     }
// }


function handleStats(element){
    const stats = document.getElementById('stat-box');
    stats.innerHTML = " <h3> Stats: </h3> "
    for (let singleStats in element.results[0].powerstats)
        {
            // console.log(singleStats, element.results[0].powerstats[singleStats])
            const newStats = document.createElement('li')
            newStats.textContent = `${singleStats}: ${element.results[0].powerstats[singleStats]}`
            stats.append(newStats)
         }
    }
                



function addImage(element){
    const imageContainer = document.getElementById("placeholder-image")
        imageContainer.src = element.results[0].image.url
}


function changeName(element){
    const heroText = document.getElementById("hero-text")
    heroText.textContent = element.results[0].name
    console.log(element.results[0].name)
}


function addBio (element) {
    const bioContainer = document.getElementById("bio-text")
    const aliases = element.results[0].biography.aliases
    const publisher = element.results[0].biography.publisher
    const firstAppearance = element.results[0].biography["first-appearance"]
    bioContainer.textContent = `This hero also goes by ${aliases}. 
        They first appear in ${firstAppearance}. This hero is published by 
        ${publisher}.`
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

//Like Buttons - Hero's name has been liked # times - make likes for each hero

function handleLikeandDislikeButton(){

    let likesNumber = document.querySelector("#likes-amount")

    likesNumber.innerHTML = ""

    let dislikes = document.querySelector("#dislike-amount")

    dislikes.innerHTML = ""


    let num1 = 0
    let num2 = 0

    let buttonDiv = document.querySelector("#button-section")

    let buttons = buttonDiv.getElementsByTagName("button")

    let likeButton = buttons[0]

    let dislikeButton = buttons[1]


    likeButton.addEventListener("click", function (){
        console.log("click")
        likesNumber.innerHTML = `This hero has ${++num1} fans` //or could say current Hero ranking
    })


    dislikeButton.addEventListener("click", function (){
        console.log("click")
        
        dislikes.innerHTML = `This hero has ${++num2} foes`  //add else if for fan vs fans
    })
    

}

// comments

const commentArea = document.getElementById("commentBar")
commentArea.addEventListener("submit", handleComments)

function handleComments(e){
    e.preventDefault()
    // const heroName = element.results[0].name
    // commentArea.innerHTML = ""
    const commentContainer = document.getElementById('comment-container')
    const newLi = document.createElement("li") ///each comment will append to a new li
    newLi.textContent = e.target.comment.value //get this to reset for each hero
    commentContainer.append(newLi)
    e.target.reset()
    // newLi.innerHTML = `${heroName} fans are saying:  ${e.target.comment.value}` //get this to reset for each hero
}




