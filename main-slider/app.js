const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slides = mainSlide.
querySelectorAll('div').length

let activeSlide = 0
 sidebar.style.left = `-${(slides - 1) * 100}vw`


upBtn.addEventListener('click', ()=> {
    changeSlide('up')
})
downBtn.addEventListener('click', ()=> {
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up') {
        activeSlide++
        if(activeSlide === slides) {
            activeSlide = 0
        }

    } else if (direction === 'down'){
        activeSlide--
        if(activeSlide < 0) {
            activeSlide = slides-1
        }
    }
    const width = container.clientWidth
    mainSlide.style.transform = `translateX(-${activeSlide * width}px)`
    sidebar.style.transform = `translateX(${activeSlide*width}px)`
}



