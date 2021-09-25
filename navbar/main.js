const burgerBtn = document.querySelector('.burger')
const navBar = document.querySelector('.nav__links')

burgerBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('showBar')
})