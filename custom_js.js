$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 100 && $(window).width() > 749) {
      $('nav').addClass('fix_header');
     }
    else 
      $('nav').removeClass('fix_header').addClass('remove_header');
  });
});