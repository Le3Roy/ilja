$(function() {
  for (var i = 0; i < 30; i++) {
    $('.stars').append('<div class="star"></div>');
  }
  $( '.star' ).each(function( index ) {
    $(this).css({
      left : Math.random() * ($('.stars').width() - $(this).width()),
      top : Math.random() * ($('.stars').height() - $(this).height())
    });
  });
  for (var i = 0; i < 30; i++) {
    $('.stars').append('<div class="starb"></div>');
  }
  $( '.starb' ).each(function( index ) {
    $(this).css({
      left : Math.random() * ($('.stars').width() - $(this).width()),
      top : Math.random() * ($('.stars').height() - $(this).height())
    });
  });
  for (var i = 0; i < 30; i++) {
    $('.stars').append('<div class="starm"></div>');
  }
  $( '.starm' ).each(function( index ) {
    $(this).css({
      left : Math.random() * ($('.stars').width() - $(this).width()),
      top : Math.random() * ($('.stars').height() - $(this).height())
    });
  });

});
