
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
      navbar = $('.navbar');

    if (scrollPos > 530) {
      navbar.css('background-color','#f2f2f2');
      $('.navscroll').css({'color' : 'black', 'font-weight': '200'});
      $('.navbar-brand').text('The Trash Brigade');
    } else {
      navbar.css('background-color','transparent');
      $('.navscroll').css({'color': 'white', 'font-weight':'200'});
      $('.navbar-brand').text('');
    }
  });
});
