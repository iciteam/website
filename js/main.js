$('.slick-slider').slick({
    slidesToShow: 7,
    SlidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000, 
    infinite: true
});


$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
      start: 0,
      end: 100,
      easing: 'swing',
      duration: 400,
      complete: ''
    }, options);
  
    var thisElement = $(this);
  
    $({
      count: settings.start
    }).animate({
      count: settings.end
    }, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: function() {
        var mathCount = this.count > settings.maxNumber ? settings.maxNumber + '+' : this.count;
        thisElement.text(mathCount);
      }
  
    });
  };
  
  $('#number1').jQuerySimpleCounter({
    end: 201,
    duration: 3000,
    maxNumber: 200
  });
  $('#number2').jQuerySimpleCounter({
    end: 5001,
    duration: 3000,
    maxNumber: 5000
  });
  $('#number3').jQuerySimpleCounter({
    end: 20001,
    duration: 3000,
    maxNumber: 20000
  });
