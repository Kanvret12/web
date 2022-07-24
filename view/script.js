const toggle1 = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

toggle1.addEventListener('click', function(){
    nav.classList.toggle('slide')
});