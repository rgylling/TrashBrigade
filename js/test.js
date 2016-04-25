$('.navbar').css('background-color', 'transparent')
(function ($) {
$(document).ready(function(){

// hide .navbar first
// $(".navbar").hide();

// fade in .navbar
$(function () {
$(window).scroll(function () {
  // set distance user needs to scroll before we fadeIn navbar
if ($(this).scrollTop() > 350) {

$('.navbar').css('background-color','#00aeef');
} else {
 $('.navbar').css('background-color','transparent');
}
});


});

});
}(jQuery));
