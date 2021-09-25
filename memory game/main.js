window.addEventListener('DOMContentLoaded', ()=> {
   const cards = [{
       name:'cheeseburger',
       img:'images/cheeseburger.png'
   }, {
    name:'cheeseburger',
    img:'images/cheeseburger.png'
},  
    {
       name:'fries',
       img:'images/fries.png'
   }, {
    name:'fries',
    img:'images/fries.png'
},  {
       name:'hotdog',
       img: 'images/hotdog.png'
   }, {
    name:'hotdog',
    img: 'images/hotdog.png'
}, {
    name:'ice-cream',
    img: 'images/ice-cream.png'
    }, 
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
        },{
        name:'milkshake',
        img: 'images/milkshake.png'
    }, {
        name:'milkshake',
        img: 'images/milkshake.png'
    }, {
        name:'pizza',
        img: 'images/pizza.png'
    }, {
        name:'pizza',
        img: 'images/pizza.png'
    }, ] 

//cards.sort(()=> 0.5-Math.random())

const gameContainer = document.querySelector('.game-container')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
const result = document.querySelector('.result')


function checkWon() {
    let cards = document.querySelectorAll('img')
    let cardOne = cardsChosenId[0]
    let cardTwo = cardsChosenId[1]
    console.log(cardsChosen)
    if(cardsChosen[0].name === cardsChosen[1].name){
        console.log('works')
        
        cards[cardOne].setAttribute('src','/images/white.png')
        cards[cardTwo].setAttribute('src','/images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        console.log('sorry, not right')
        cards[cardOne].setAttribute('src','/images/blank.png')
        cards[cardTwo].setAttribute('src','/images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    result.innerText = cardsWon.length
    if(cardsWon.length == cards.length/2){
        result.innerText = 'congratulations'
    }

}

function createBoard(){
    for(let i = 0; i<cards.length;i++){
    let card = document.createElement('img');
    card.setAttribute('src', '/images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click', flipcard)
    gameContainer.appendChild(card)
    }
}

function flipcard(){
    this.setAttribute('src',cards[this.getAttribute('data-id')].img)
    this.setAttribute('name', cards[this.getAttribute('data-id')].name)
    cardsChosen.push(this)
    cardsChosenId.push(this.getAttribute('data-id'))
    if(cardsChosen.length == 2){
        setTimeout(checkWon, 500)
    }
}

createBoard()

})