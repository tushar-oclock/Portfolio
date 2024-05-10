$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }


        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.sticky-icon').addClass("show");
        } else {
            $('.sticky-icon').removeClass("show");
        }




    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.stick-icon').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooty-h scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });




    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Analyst", "Data Engineer", "Data Scientist", "ML Engineer", "Developer", "MLOps Engineer","Prompt Engineer"],

        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 700,
        autoplayHoverPause: true,
        interval: 100,
        responsive: {
            0: {
                items: 3,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 13,
                nav: false
            }
        }
    });



    // var $root = $('html, body');

    // $('a[href^="#"]').click(function () {
    //     $root.animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);

    //     return false;
    // });







    // Add a class to the sticky icon when scrolling down
    window.onscroll = function() {
        var icon = document.getElementById('sticky-icon');

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          icon.classList.add('scrolling');
        } else {
          icon.classList.remove('scrolling');
        }
      };

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      

});










//-------------------------cursor-----------------------------

new kursor({
    type: 1,
    removeDefaultCursor:true,
    color: "#eed1c7"
})


// ----------------image hover-------------------------------
/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 10 * ((xVal - width / 1) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -10 * ((yVal - height / 1) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.3) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})



// ------------date & time------------------------
function displayDateTime() {
    var now = new Date();
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');

    // Format date
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = now.toLocaleDateString('en-US', options);

    // Format time
    var formattedTime = now.toLocaleTimeString('en-US');

    // Display date and time
    dateElement.innerText = formattedDate;
    timeElement.innerText = formattedTime;
}

// Update date and time every second
setInterval(displayDateTime, 1000);




document.addEventListener("click", function() {
    playSound();
  });
  
  function playSound() {
    var audio = document.getElementById("clickSound");
    audio.play();
  }

  document.getElementById('background-video').addEventListener('loadeddata', function() {
    document.body.style.backgroundColor = 'black';
});















var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}


// const modelViewer = document.getElementById('model');

// modelViewer.addEventListener('wheel', (event) => {
//   // Check if event originated within model viewer (implementation depends on your library)
//   if (isEventWithinModelViewer(event)) {
//     event.preventDefault(); // Prevent zoom
//   }
// });