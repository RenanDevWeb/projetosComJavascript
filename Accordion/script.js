const headers = document.querySelectorAll(".accordion-header")
const accordionItems = document.querySelectorAll(".accordion-item")
const icon = document.querySelectorAll("#icone")
headers.forEach(function(header) {
    header.addEventListener("click",function(){
      const item = this.parentNode

     const isActive = item.classList.contains("accordion-item--active")
    
     accordionItems.forEach(function(item){
        item.classList.remove("accordion-item--active")
        item.classList.add("accordion-item--closed")
     })

     if(!isActive){
        item.classList.add("accordion-item--active")
        item.classList.remove("accordion-item--closed")
      icon.forEach(icone => {
         icone.classList.add("fa-minus")
         icone.classList.remove("fa-plus")
       });
     }
     if(isActive){
      icon.forEach(icone => {
         
         icone.classList.add("fa-plus")
         icone.classList.remove("fa-minus")
       });
     }

    })
});