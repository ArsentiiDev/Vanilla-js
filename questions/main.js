const questions = document.querySelectorAll('.question');

questions.forEach(answer => {
    const btn = answer.querySelector('.question-btn')

    btn.addEventListener('click', ()=> {
        questions.forEach(item => {
            console.log(item)
            console.log(answer)
            
            if(item!== answer) item.classList.remove('show-text');
        })

        answer.classList.toggle('show-text')
        
    })

})
