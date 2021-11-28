// Menu animation

const menuBtn = document.querySelector('.nav__btn--open');
const menuContainer = document.querySelector('.nav__container');
const menu = document.querySelector('.nav__menu');
const linkChap = document.querySelectorAll('.js-link');

menuBtn.addEventListener('click', function() {
    menuContainer.classList.toggle('nav__container--open');
    menu.classList.toggle('nav__menu--open');
    if(menu.classList.contains('nav__menu--open')) {
      menuBtn.innerHTML = "Close";
    }
    else {
      menuBtn.innerHTML = "Menu";
    }
});

linkChap.forEach(function(element) {
    element.addEventListener('click', function() {
        menuContainer.classList.remove('nav__container--open');
        menu.classList.remove('nav__menu--open');

        menuBtn.innerHTML = "Menu";
    });
});