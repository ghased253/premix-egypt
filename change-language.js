const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');
const langOptions = document.querySelectorAll('.lang-option');
const langBtnM = document.querySelector('.lang-btn-mobile');
const langMenuM = document.querySelector('.lang-menu-mobile');

langBtn.addEventListener('click',() => {
    langMenu.classList.toggle('show');
})

langBtnM.addEventListener('click', () => {
    langMenuM.classList.toggle('show-mobile');
})