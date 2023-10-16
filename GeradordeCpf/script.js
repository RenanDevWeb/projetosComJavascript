const cpfElement = document.querySelector("#cpf")
const gerarCpfButton = document.querySelector("#gerarCpf")
const copiarCpfButton = document.querySelector("#copiarCpf")

function GerarCPF(){
    let n = Math.floor(Math.random() * 999999999)  + 1
    let nString = n.toString().padStart(9,"0")
    let digitoVerificador1 = caucularDigitoVerificador(nString,10)
    let digitoVerificador2 = caucularDigitoVerificador(nString + digitoVerificador1,11)    
   

    cpfElement.innerText = formatarCpf(nString + digitoVerificador1 + digitoVerificador2)
}

function copiarCpf(){
    const cpf = cpfElement.innerText
     navigator.clipboard.writeText(cpf)
     .then(() => {
      alert("cpf copiado para a area de transferencia")
     }).catch(error => { console.log(error);})
}

function caucularDigitoVerificador(numero,peso){
    let total = 0 
    for (let index = 0; index < numero.length; index++) {
        total += parseInt(numero.charAt(index)) * peso--
    }
    let resto = total % 11
    return resto < 2 ? 0 : 11 - resto
}
function formatarCpf(cpf){
    const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
    return cpf.replace(cpfRegex,"$1.$2.$3-$4")
}
gerarCpfButton.addEventListener("click",GerarCPF)
copiarCpfButton.addEventListener("click",copiarCpf)