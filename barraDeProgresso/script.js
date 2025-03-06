const progressBar = document.querySelector('.progress')
const previusBtn = document.querySelector('.previus-btn')
const nextBtn = document.querySelector('.next-btn')
const counter = document.querySelector('.counter')

let progress = 0 


function updateProgressBar(){
    progressBar.style.width = progress  + '%'
    counter.innerText = progress + '% '
}

function nextStep(){
    progress+= 25
    if(progress > 100 ) progress = 100
    updateProgressBar()

}

function previusStep(){
    progress-= 25
    if(progress < 0 ) progress = 0
    updateProgressBar()
}

nextBtn.addEventListener('click', nextStep)
previusBtn.addEventListener('click', previusStep)