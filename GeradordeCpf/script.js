const cpfElement = document.querySelector("#cpf")
const gerarCpfButton = document.querySelector("#gerarCpf")
const copiarCpfButton = document.querySelector("#copiarCpf")
const cnpjElement = document.querySelector("#cnpj")
const gerarCnpjButton = document.querySelector("#gerarCnpj")
const copiarCnpjButton = document.querySelector("#copiarCnpj")




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
gerarCnpjButton.addEventListener("click",gerarCNPJ)
copiarCnpjButton.addEventListener("click",copiarCnpj)


// gerar cnpj

    function gerarCNPJ() {
        function random(n) {
            return Math.floor(Math.random() * n);
        }
    
        let n = [];
        for (let i = 0; i < 8; i++) n.push(random(9));
        n.push(0, 0, 0, 1); // Filial padrão 0001
    
        // Calcula o primeiro dígito verificador
        let multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma1 = n.reduce((acc, num, i) => acc + num * multiplicadores1[i], 0);
        let d1 = soma1 % 11 < 2 ? 0 : 11 - (soma1 % 11);
        n.push(d1);
    
        // Calcula o segundo dígito verificador
        let multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma2 = n.reduce((acc, num, i) => acc + num * multiplicadores2[i], 0);
        let d2 = soma2 % 11 < 2 ? 0 : 11 - (soma2 % 11);
        n.push(d2);
    
        let cnpj = `${n.slice(0, 2).join("")}.${n.slice(2, 5).join("")}.${n.slice(5, 8).join("")}/${n.slice(8, 12).join("")}-${n.slice(12).join("")}`;
        cnpjElement.innerText = cnpj
    }

    
    function copiarCnpj(){
        const cnpj = cnpjElement.innerText
         navigator.clipboard.writeText(cnpj)
         .then(() => {
          alert("cpf copiado para a area de transferencia")
         }).catch(error => { console.log(error);})
    }