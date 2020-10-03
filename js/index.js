

let list = document.querySelector('.js-list');
let input  = document.querySelector('.js-input');

input.addEventListener('click', function(){
    list.classList.toggle('isActive');
})