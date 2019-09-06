// **************************************
// JAVASCRIPT SCRIPTS
// **************************************

const menu = document.querySelector("header");
const navBar = document.querySelector(".nav__bar");

/*--Toggle mobile navigation once user clicks on nav menu--*/
menu.addEventListener('click', () => {
  menu.classList.toggle("change");
  navBar.classList.toggle("show__nav");
});





let xLabels = {
	0 : 'Force is not with you',
    2 : 'Young Padawan',
    4 : 'Apprentice',
    6 : 'Jedi Knight',
    8 : 'Jedi Master',
    10 : 'Yoda got nothing on you!',
    
}

// const frontEndChart = document.getElementById('front-end');

new Chart(document.getElementById("front-end"), {
  type: 'horizontalBar',
  data: {
    labels: ["HTML5", "CSS3", "SASS", "JAVASCRIPT", "JQUERY"],
    datasets: [
      {
        label: "Front-End Skills",
        data: [7.3, 7.6, 5, 4.5, 5.5],
        backgroundColor: '#FFBF00',
        borderColor: '#111E6C',
        borderWidth: 2,
        borderCapStyle: 'round',
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: true
        },
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return xLabels[value];
        }
        }
      }],
      yAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  }
});

const webToolsChart = document.getElementById('web-tools');

new Chart(document.getElementById("web-tools"), {
  type: 'horizontalBar',
  data: {
    labels: ["GIT", "MYSQL", "VSCODE", "ADOBE PS", "BOOTSTRAP"],
    datasets: [
      {
        label: "Front-End Skills",
        data: [6.3, 4, 7, 5.9, 5],
        backgroundColor: '#FFBF00',
        borderColor: '#111E6C',
        borderWidth: 2
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: true
        },
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return xLabels[value];
        }
        }
      }],
      yAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  }
});

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
  

  sr.reveal('.tech-skills', {
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

  
// function elementReveal(){
//   var skills = document.querySelector('.skills');
//   var skillsPosition = skills.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight / 2 ;

//   if(skillsPosition < screenPosition){
//       skills.classList.add('.skills__reveal');
//   }
// }

// window.addEventListener('scroll', elementReveal);