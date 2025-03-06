// Preencher um vetor com 5 números inteiros. Solicitar um número do teclado. Pesquisar se esse número existe no vetor. Se existir, imprimir em qual posição do vetor. Se não existir, imprimir mensagem informando que não existe

var numeros = [10,15,12,13,55,45]

var entradaDeNumero = 15;

numeros.forEach((numero,indice) => {
      
   if(numero == entradaDeNumero){
    console.log(indice);
   }
  
})

  
    

