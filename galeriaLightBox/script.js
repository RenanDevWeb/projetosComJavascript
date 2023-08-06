const galleryItems = document.querySelectorAll(".gallery-item")
const ligthBox = document.querySelector(".ligthBox")
const ligthBoxImage = document.querySelector(".ligthbox-imagem")
const ligthBoxCloseButton = document.querySelector(".ligthbox-close")


galleryItems.forEach(item => {
    item.addEventListener("click", (e) =>{
    //    console.log(e.target.dataset.src);
    const imgUrl = item.querySelector(".gallery-image").getAttribute("data-src")
    ligthBoxImage.setAttribute('src', imgUrl)
    console.log("clique");
    ligthBox.classList.add("ligthBox-img")
    // ligthBox.style.display = "flex"
})
})

ligthBoxCloseButton.addEventListener('click', () => {
    console.log("cliquei");
    ligthBox.classList.remove("ligthBox-img")
})