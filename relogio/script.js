let now;

function updateClock(){
    const clock = document.querySelector(".clock")
    const hoursElement = document.querySelector(".hours")
    const minutesElement = document.querySelector(".minutes")
    const secondElement = document.querySelector(".seconds")
    
   
    
    now = new Date()

    const hours = now.getHours().toString().padStart(2,"0")
    const minutes = now.getMinutes().toString().padStart(2,"0")
    const seconds = now.getSeconds().toString().padStart(2,0)
    
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondElement.textContent = seconds


}


function getDate(){
   const dayElement = document.querySelector(".day")
   const monthElement = document.querySelector(".month")
   const yearElement = document.querySelector(".year")


    now = new Date()

    const day = now.getDate().toString()
    const month = (now.getMonth() +1 ).toString()
    const year = now.getFullYear().toString()

    dayElement.textContent = day
    monthElement.textContent = month
    yearElement.textContent = year
}
getDate()
window.addEventListener("DOMContentLoaded",function(){
    getDate()
    setInterval(updateClock,1000)
})