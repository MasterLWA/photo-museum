$(function(){
    $('.timeline-nav').slick({
       slidesToShow: 12,
       slidesToScroll: 1,
       asNavFor: '.timeline-slider',
       centerMode: false,
       focusOnSelect: true,
        mobileFirst: true,
       arrows: false,
       infinite:false,
        responsive: [
            {
           breakpoint: 768,
           settings: {
             slidesToShow: 8,
            }
           },
          {
           breakpoint: 0,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 2,
           }
         }
      ]
   });
   
    $('.timeline-slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       asNavFor: '.timeline-nav',     
       centerMode: true,     
       cssEase: 'ease',
        edgeFriction: 0.5,
        mobileFirst: true,
        speed: 500,
        responsive: [
          {
           breakpoint: 0,
           settings: {
               centerMode: false
           }
         },
            {
           breakpoint: 768,
           settings: {
               centerMode: true
           }
         }
      ]
   });
  
 });