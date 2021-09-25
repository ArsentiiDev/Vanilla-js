const number = document.querySelector('.container__number');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

resetBtn.addEventListener('click', ()=> {
    number.style.color = "black";
    number.textContent = '0';
})
increaseBtn.addEventListener('click', ()=>{
    number.textContent = +number.textContent + 1;
    checkColor(number)
})
decreaseBtn.addEventListener('click', ()=>{
    number.textContent = +number.textContent - 1;
    checkColor(number)
})    

function checkColor(number){
    if(+number.textContent>0){
        number.style.color = "green";
    } else if(+number.textContent<0){
        number.style.color = "red";
    } else  number.style.color = "black";
}