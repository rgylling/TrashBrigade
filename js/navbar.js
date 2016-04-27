
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
      navbar = $('.navbar');

    if (scrollPos > 930) {
      navbar.css('background-color','orange');
      $('.navscroll').css({'color' : 'black', 'font-weight': 'bold'})
    } else {
      navbar.css('background-color','transparent');
      $('.navscroll').css({'color': 'white', 'font-weight':'200'})
    }
  });
});
