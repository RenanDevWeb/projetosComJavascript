const generateButton = document.querySelector("#generate-button")
const colorsDiv = document.querySelector(".colors")
const quantidadeDeCor = document.querySelector("#quantidadeDeCor")



function generateColors(){
    colorsDiv.innerHTML = ''
    const quantidade = quantidadeDeCor.value || 5
  
    

    for (let index = 0; index < quantidade; index++) {
     const color = generateRandonColor()
     const colorDivs = document.createElement('div')
     const colorName = document.createElement('p')

     colorDivs.style.backgroundColor = color
     colorName.textContent = color
     colorName.style.color = color



     colorDivs.appendChild(colorName)
     colorsDiv.appendChild(colorDivs)

    colorName.addEventListener("click", () => {
        copyCode(color)
    })

    }
}

function generateRandonColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
   for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
   }

    return color
}


function copyCode(text){
    navigator.clipboard.writeText(text)
    .then(() => {
        swal("Codigo copiado!")
    }).catch(err => {
        swal("Erro ao copiar o codigo")
    })
}

generateButton.addEventListener('click', generateColors)