const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.querySelector(".container__button");
const color = document.querySelector('.container__color');
btn.addEventListener("click", ()=> {
    const randomNumber = Math.floor(Math.random() * 4);
    document.body.style.backgroundColor = generateColor();
    color.textContent= document.body.style.backgroundColor;
})

function generateColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}