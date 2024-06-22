jQuery(document).ready(function($){
$('.gallery-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: false,
 dots: true,
 easing: 'linear',
 autoplay: true,
 autoplaySpeed: 4000,
 infinite: true,
 responsive: [
	 {
      breakpoint: 1099,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true 
      }
    },    
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,   
        arrows: false,
        dots: true
      }
    },    
    {
      breakpoint: 499,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false
      }
    }
  ]
});
});


jQuery(document).ready(function($){
$('.video-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: false,
 dots: true,
 easing: 'linear',
 autoplay: true,
 autoplaySpeed: 4000,
 infinite: true,
 responsive: [
	 {
      breakpoint: 1099,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true 
      }
    },    
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,   
        arrows: false,
        dots: true
      }
    },    
    {
      breakpoint: 499,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false
      }
    }
  ]
});
});

jQuery(document).ready(function($){
$('.post-slider').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: false,
 dots: true,
 easing: 'linear',
 autoplay: true,
 autoplaySpeed: 4000,
 infinite: true,
 responsive: [
	 {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true 
      }
    },   
    {
      breakpoint: 499,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false
      }
    }
  ]
});
});