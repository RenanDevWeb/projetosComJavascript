const quotes = [
    {
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
      image: "./img/charlie_chaplin.jpg"
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
      image: './img/steve.webp'
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
      image: './img/robert.jpg'
    },
    {
      quote:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
      image: './img/henry.jpg'
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
      image: './img/autorDesconhecido.jpg'
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
      image: './img/zigzaglar.jpg'
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      author: "Winston Churchill",
      image: './img/winston.jpg'
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
      image: './img/winston.jpg'
    },
    {
      quote: "Acredite em si próprio e todo o resto virá naturalmente.",
      author: "Elon Musk",
      image: './img/elon.jpg'
    },
    {
      quote:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      author: "Autor desconhecido",
      image: './img/autorDesconhecido.jpg'
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