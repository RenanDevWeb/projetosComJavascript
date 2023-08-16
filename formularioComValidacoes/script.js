const form = document.querySelector('form')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const mensagem = document.querySelector('#mensagem')
const errorMensageElement = document.querySelectorAll(".error-mensage")

console.log(errorMensageElement);

form.addEventListener('submit',(e) =>{
    clearErrors()
    e.preventDefault()
    validateInput()
})


function setError(input,errorMensagem){
    const errorMensagemText = input.nextElementSibling
    errorMensagemText.textContent = errorMensagem
    input.parentElement.classList.add("error")
    
}


function clearErrors(){
    errorMensageElement.forEach((mensagem)=> {
        mensagem.textContent= ''
    })
    nome.parentElement.classList.remove("error")
    email.parentElement.classList.remove("error")
    assunto.parentElement.classList.remove("error")
    mensagem.parentElement.classList.remove("error")
}

function validateInput(){
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()

    if(nomeValue === ""){
        setError(nome,"Nome em branco")
    }

    if(emailValue === ""){
        setError(email,"E-mail em branco")
    }else if(!validateEmail(emailValue)){
        setError(email,"E-mail invalido")
    }

    if(assuntoValue === ""){
        setError(assunto,"Assunto em branco")
    }

    if(mensagemValue === ""){
        setError(mensagem,"Mensagem em branco")
    }
}

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

}