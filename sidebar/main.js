const closeBtn = document.querySelector('.close__btn')
const burger = document.querySelector('.burger')
const sideBar = document.querySelector('.sidebar')

burger.addEventListener('click', ()=> {
    sideBar.classList.toggle('show')
    
})

closeBtn.addEventListener('click', ()=> {
    sideBar.classList.toggle('show')
})