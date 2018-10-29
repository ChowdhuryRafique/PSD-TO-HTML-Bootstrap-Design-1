$(function () {
 $('.slick_team').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoPlay:true,
        speed: 1200,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

});
