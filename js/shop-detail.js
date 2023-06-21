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
            items:3
        },
        1000:{
            items:4
        }
    }
})

$(document).ready(function() {
  $('.nav-link').click(function() {
    $('.nav-link').removeClass('active'); // Remove 'active' class from all nav-links
    $(this).addClass('active'); // Add 'active' class to the clicked nav-link

    $('.nav-link').css('background-color', ''); // Remove background color from all nav-links
    $(this).css('background-color', 'whitesmoke'); // Set background color for the clicked nav-link

    var targetId = $(this).attr('href');
    $('.collapse').not(targetId).removeClass('show');
    $(targetId).addClass('show');
  });
});

// nav links & their collapse items
$(document).ready(function() {
    $('.nav-link').click(function() {
      var targetId = $(this).attr('href');
      $('.collapse').not(targetId).removeClass('show');
      $(targetId).addClass('show');
    });
});
