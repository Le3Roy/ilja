$(function() {
  $('#menu').click(function(){
    $('.hamburger').toggleClass('cross');
    $('.hamburger2').toggleClass('cross');
  });

  $(window).scroll(function() {
    parallax();
  });
  function parallax() {

    var wScroll = $(window).scrollTop();

    $('.parallax').css('bottom', +0 +(wScroll*0.2)+'px')
    $('.parallax-text h1').css('top',+383+(wScroll*-0.3)+'px')
    $('.lineme').css('top',+495+(wScroll*-0.3)+'px')
    $('.parallax-text p').css('bottom',+82+(wScroll*0.3)+'px')
};
  $('#menu').click(function(){
    $('#flex').toggleClass('navi');
  });
  $('#menu').click(function() {
    $(this).toggleClass('fix');
  });
$(window).scroll(function() {

var wScroll = $(window).scrollTop();

  if (wScroll > $('#about').offset().top - ($(window).height() / 2)) {
    $('#about').each(function(i) {
      setTimeout(function(){
      $('#about').eq(i).addClass('showing')
    }, 200 * (i+1));
  });
};

});





});
