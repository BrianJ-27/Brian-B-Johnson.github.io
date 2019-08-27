// **************************************
// JAVASCRIPT SCRIPTS
// **************************************

const menu = document.querySelector("header");
const navBar = document.querySelector(".nav__bar");
// const projectArea = document.querySelector('main');
// const projectCard = document.querySelectorAll('.card');
// const cardOverlay = document.querySelector('card__overlay');

/*--Toggle mobile navigation once user clicks on nav menu--*/
menu.addEventListener('click', () => {
    menu.classList.toggle("change");
    navBar.classList.toggle("show__nav");
});


// function elementReveal(){
//   var skills = document.querySelector('.skills');
//   var skillsPosition = skills.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight / 2 ;

//   if(skillsPosition < screenPosition){
//       skills.classList.add('.skills__reveal');
//   }
// }

// window.addEventListener('scroll', elementReveal);


//In mobile mode, when a user clicks anywhere on a card the overlay will show
$('.main__grid--container').click(function(){
  $('.card__overlay').addClass('.card__overlay');
});

/*--Add Smooth Scroll to Page--*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/*--Add Animations on Scroll--*/
window.sr = ScrollReveal({
    distance : '50px',
    easing   : 'ease-in-out',
    mobile   : true,
    delay    : 450,
    reset    : false,
  });
  

  sr.reveal('.skills', {
    origin: 'left',
    delay: 850,
  });
 

  sr.reveal('.content__banner',{
    origin : 'bottom', 
    delay: 1000, 
  });

  sr.reveal('.content__name',{
    origin : 'top', 
    delay: 2000, 
    easing: 'ease-in',
    distance: '200px',
  });

  
