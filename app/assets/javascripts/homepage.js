// Homepage manifest
//= require jquery.scrollTo-1.4.2-min.js
//= require jquery.serialScroll-1.2.2-min.js
//= require_self
function initScroll() {
  var w=0;
  $('.homepage-carousel').find('li').each(function(){
    w += $(this).outerWidth(true);
  }).end().width(w);

  $('.homepage-carousel-wrapper').serialScroll({
    axis: 'x',
    duration: 800,
    easing: 'easeInOutQuad',
    step: 1,
    cycle: false,
    items: 'li',
    interval: 15000,
    force: true,
    exclude: 3,
    // prev: '.homepage-carousel-controls .prev a',
    // next: '.homepage-carousel-controls .next a',
    onBefore: function() {
      console.log('Hello! I‘m scrolling here!');
    }
  });

  $('.homepage-carousel-controls')
  .on('click', '.prev a', function(e) {
    e.preventDefault();
    $('.homepage-carousel-wrapper').trigger('prev');
  }).on('click', '.next a', function(e) {
    e.preventDefault();
    $('.homepage-carousel-wrapper').trigger('next');
  }).on('click', '.pause a', function(e) {
    e.preventDefault();
    $('.homepage-carousel-wrapper').trigger('stop');

    $(this).text('Play').parent('li').removeClass('pause').addClass('play');
  }).on('click', '.play a', function(e) {
    e.preventDefault();
    $('.homepage-carousel-wrapper').trigger('start');

    $(this).text('Pause').parent('li').removeClass('play').addClass('pause');
  });

  $('.homepage-carousel').on('focus', 'a', function(){
    $('.homepage-carousel-wrapper').trigger('stop');
    $('.homepage-carousel-wrapper').scrollTo($(this).parent());
  });
}

$(document).ready(function() {

  initScroll();

});