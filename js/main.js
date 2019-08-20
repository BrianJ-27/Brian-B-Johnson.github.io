const menu = document.querySelector("header");
const navBar = document.querySelector(".nav__bar");

menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
});


window.sr = ScrollReveal({
    distance : '50px',
    easing   : 'ease-in-out',
    mobile   : true,
    delay    : 450,
    reset    : false,
    viewFactor: 0.1,
  });
  

  sr.reveal('.skills',{
    origin : 'left',  
  });

  

// $('.bio__wrapper').hide()

// $('.title__secondary').on('click', function(){
//     $('.bio__wrapper').slideDown(2000);
// })
