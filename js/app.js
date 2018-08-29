// const navigation = document.getElementById('menu');
// const links = navigation.getElementsByTagName('li');
//
// for (let i = 0; i < links.length; i += 1) {
//   links[0].addEventListener('click', (e) => {
//     let current = document.getElementsByClassName('active');
//     current[0].className.replace('active', '');
//     e.target.className += 'active';
//   })
// }


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
