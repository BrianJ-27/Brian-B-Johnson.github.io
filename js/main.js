const menu = document.querySelector("header");
const navBar = document.querySelector(".nav__bar");


menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
});

// $('.nav__bar').on('click', function(){
//     console.log('navbar was selected');
// });