const burgerBtn = document.querySelector('.burger')
const navLinks = document.querySelector('.links-container')
const navBar = document.querySelector('.nav-container')
const links = document.querySelector('.nav__links')

let scrollPosition = 0;

burgerBtn.addEventListener('click', ()=> {

    navLinks.classList.toggle('showBar')
})
window.addEventListener('scroll', ()=> {    
    const nav = document.getElementById('nav')
    scrollPosition = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollPosition>navHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
})

const scrollLinks = document.querySelectorAll('.scroll__link')

scrollLinks.forEach((link)=> {
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e.currentTarget.getAttribute('href'))
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id)
        const element = document.getElementById(id);
        console.log(element)

        const navHeight = navBar.getBoundingClientRect().height;
        const linksContainer = navLinks.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop-navHeight;

        if(!fixedNav) position= position -navHeight;
        if(navHeight>82) position= position + linksContainer;

        window.scrollTo({
            left:0,
            top:position,
        })
        navLinks.classList.toggle('showBar')
    })
})
