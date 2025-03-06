const calculatorButton = document.querySelector("#caulateButton")




function cauculateTip(){
 const billAmmout = parseFloat(document.querySelector("#billAmount").value)
 const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value)


  console.log(billAmmout);

 if(isNaN(billAmmout)){ 
    alert("Dados vazios")
    return; 
}
  




 const tipAmmout  = billAmmout * serviceQuality
 const totalAmount = billAmmout + tipAmmout

  const tipAmmoutText =  tipAmmout.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const totalAmountText =  totalAmount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

 console.log(tipAmmoutText,totalAmountText);


 const tipAmmoutElement = document.querySelector("#tipAmount")
 const totalAmountElement = document.querySelector("#totalAmount")


  tipAmmoutElement.value = tipAmmoutText
  totalAmountElement.value = totalAmountText

}

calculatorButton.addEventListener("click",cauculateTip)
