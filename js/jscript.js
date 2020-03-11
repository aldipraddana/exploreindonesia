<!-- script -->

  $(window).load(function() {
    $("#content").fadeOut();
    $("#loader").delay(500).fadeOut("slow");
  })

  // navigation burger animate
  $(".toggle.navbar-top-btn").click(function() {
    $(".navbar-top").toggleClass("navbar-top-show");
  });

  var current = 0,
    slides = document.getElementsByName("sli");

  setInterval(function() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
  }, 5000);


  // ===== Scroll to Top ====
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });
