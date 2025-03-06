const tooglePassword = document.querySelector('#tooglePassword');
const passwordInput = document.querySelector('#password');

tooglePassword.addEventListener('click', function(){
   
  const type = passwordInput.type === 'password' ? 'text' : 'password'
  
 

  passwordInput.type = type
  this.classList.toggle("fa-eye")
  this.classList.toggle("fa-eye-slash")

})