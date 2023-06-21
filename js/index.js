// show back to top button when user scroll
var btn = $('#back-to-top');
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});



// Enable nested dropdowns
$('.dropdown-submenu > .dropdown-toggler').on('click', function (e) {
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');

    return false;
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      autoplay: true,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          300:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      }
  })