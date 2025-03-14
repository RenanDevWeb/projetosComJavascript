const input = document.querySelector('.input')
const counter = document.querySelector('.counter')
const ToogleButton = document.querySelector('.toggle')

let mode  ="characters"

ToogleButton.addEventListener('click', () => {
    if(mode === "characters"){
        mode = "words"
        ToogleButton.textContent = "Contar Palavras"
    }else{
         mode = "characters"
        ToogleButton.textContent = "Contar Caracteres"
    }
    input.dispatchEvent(new Event("input"))
})

input.addEventListener('input', () => {
    let count = 0;
    if(mode === "characters"){
        count = input.value.length
        counter.textContent = `${count} caracteres`    
    }else{
        const words = input.value.trim().split(/\s+/)
         count =input.value.trim() === '' ? 0 : words.length
         counter.textContent = `${count} Palavras`
    }
})