const menu = document.querySelector("header");
const navBar = document.querySelector(".nav__bar");

menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
});

$(document).ready(function(){
    $('.progress-bars').animate({width:'90%'}, 2000);
});


// $('.bio__wrapper').hide()

// $('.title__secondary').on('click', function(){
//     $('.bio__wrapper').slideDown(2000);
// })
