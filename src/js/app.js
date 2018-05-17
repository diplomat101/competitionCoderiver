import sayHello from './lib/sayHello.js';
import 'slick-carousel';

sayHello();



var sliders = $('.js-slider');

$(sliders).each(function() {
  var self = $(this);
  self.slick({
    arrows: false
    // nextArrow: self.next().find('.right'),
    // prevArrow: self.next().find('.left')
  });
});
