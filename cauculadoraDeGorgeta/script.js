const calculatorButton = document.querySelector("#caulateButton")




function cauculateTip(){
 const billAmmout = parseFloat(document.querySelector("#billAmount").value)
 const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value)

 const tipAmmoutElement = document.querySelector("#tipAmount")
 const totalAmountElement = document.querySelector("#totalAmount")

 if(billAmmout === ""){ 
    alert("Dados vazios")
    return; 
}

 const tipAmmout  = billAmmout * serviceQuality
 const totalAmount = billAmmout + tipAmmout


  tipAmmoutElement.value = tipAmmout
  totalAmountElement.value = totalAmount

}

calculatorButton.addEventListener("click",cauculateTip)
