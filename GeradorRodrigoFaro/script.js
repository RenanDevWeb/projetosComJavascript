const quotes = [
    {
      quote: "Se cada vez que eu pensar em você, sumisse um pedacinho de mim... Epa, cadê eu?",
      author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote: "Me chama de água do sertão que eu venho acabar com a sua seca",
      author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote: "Moças, fiquem à vontade para tomar um copo de água, porque assim que eu entrei eu acabei de secar todas",
      author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote:
       "O homem pra ser homem, não precisa ter mil mulheres aos seus pés, mas ao menos uma que faça ele feliz",
       author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote:  "Eu não trabalho como eletricista, mas posso iluminar o seu dia e fazer o nosso caminho brilhar",
       author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
       author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
       author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
       author: "Rodrigo Faro",
      image: "./img/rodrigo2.jpg"
    },
    {
      quote:
        "Tudo o que é perfeito a gente pega pelo braço.",
       author: "Rodrigo Faro",
      image: "./img/rodrigo3.jpg"
    },
    {
      quote:
        "Gato você conhece a Gi? A gigantesca vontade que eu estou de beijar a sua linda boca nesse momento.",
       author: "Rodrigo Faro",
      image: "./img/rodrigo1.jpg"
    },
   
  ];
  

const quotesBtn = document.querySelector('#quotebtn')
const quoteText = document.querySelector('.text')
const quoteAuthor = document.querySelector('.author')
const imgAuthor = document.querySelector('.img')

function getQuote(){
  const index = Math.round((Math.random() * quotes.length))
  const imagem =quotes[index].image
  console.log(imagem);
 quoteText.textContent = `"${quotes[index].quote}"` 
 quoteAuthor.textContent = quotes[index].author


 imgAuthor.setAttribute('src', imagem)
}

quotesBtn.addEventListener('click', getQuote)