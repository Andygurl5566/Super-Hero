
const heroForm = document.getElementById('hero-form')
heroForm.addEventListener('submit', searchSuperhero)

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

                
            
        })
    heroForm.reset()
}

function handleStats(element){
for (let singleStats in element.results[0].powerstats)
    {
        console.log(singleStats, element.results[0].powerstats[singleStats])
        const stats = document.getElementById('stat-box');
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

let commentBar = document.getElementById("commentBar")

commentBar.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("hi")
    let commentContainer = {}

    console.log(e.target.comment.value)
    commentBar.reset()
}
)


// form.addEventListener("submit", (e)=> {  
//     e.preventDefault()
//     console.log(e.target.comment.value)
//     let newPost = e.target.comment.value

//     newLi = document.createElement("li")
//     newLi.textContent = newPost
//     let ul = document.getElementById("comments-list")
//     ul.append(newLi)

//     form.reset()
// })








