const mainMenu = document.querySelector('nav ul');
const btnMenu = document.querySelector('nav .btn-menu');

btnMenu.addEventListener('click', function(){
  mainMenu.classList.toggle('active');
});