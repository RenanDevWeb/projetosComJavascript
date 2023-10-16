const backToTop = document.querySelector("#back-to-top")

window.addEventListener("scroll",function(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if(scrollTop > 500){
      backToTop.style.display  = "block"
    }
    else{
        backToTop.style.display  = "none"
    }
})

backToTop.addEventListener("click", function(e){
    e.preventDefault()
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})