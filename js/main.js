const menu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav__bar");


menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("changeNav");
});