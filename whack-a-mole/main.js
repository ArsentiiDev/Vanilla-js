const box = document.querySelectorAll('.box')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('.timer')
const button = document.querySelector('.button')
const button2x = document.querySelector("#two")
const button3x = document.querySelector('#three')

let score = document.querySelector('.counter')


let result = 0;
let currentTime = timeLeft.textContent;
let interval = 1000;

    button2x.addEventListener('click', ()=> {
        interval = interval/2
    })
    button3x.addEventListener('click', ()=> {
        interval = interval/3
    })

button.addEventListener('click',()=> {
    
    
    function randomSquare() {
        box.forEach((className) => {
            className.classList.remove('mole');
        })
    
        let randomPosition = box[Math.floor(Math.random()*9)]
        randomPosition.classList.add('mole');
    
        hitPosition = randomPosition.id;
    }
    
    
        box.forEach(id => {
            id.addEventListener('mouseup', ()=> {
                if(id.id == hitPosition){
                    result = result+1;
                    score.textContent = result;
                }
            })
        })
    
        function moveMole() {
            let timerId = null;
            timerId = setInterval(randomSquare, interval)
        }
        moveMole()
    
        function countDown() {
            currentTime--
            timeLeft.textContent = currentTime
            if(currentTime == 0) {
                clearInterval(timerId)
                alert('game over')
            }
    
        }
        let timerId = setInterval(countDown, 1000)
    
        
    
})

