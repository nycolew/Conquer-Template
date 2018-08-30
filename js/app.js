
// Set up mobile navigation

$(function(){
  $('#menu').slicknav({
    label: '',
    easingOpen: 'linear',
    easingClose: 'linear',
    duration: 400
  });
});

// Set up scroll to top functionality

$(function(){
$.scrollUp({
  scrollText: ''
});
});

// Set up parallax scroll effect

$('.header-section').parallax({
  imageSrc: 'img/bg-1.jpg'
  });
$('.services-section').parallax({
  imageSrc: 'img/bg-2.jpg'
});
$('.contact-section').parallax({
  imageSrc: 'img/bg-3.jpg'
});


// Add 'active' class to current element (not working)

$(document).ready(function() {
$("#menu li").click(function () {
    $(this).addClass("active");
    $("#menu li").not(this).removeClass("active");
});

});

// Enable smooth scrolling effect to page anchors

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (event.target.hasAttribute('target')) return;
    if (this.has !== "") {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});
