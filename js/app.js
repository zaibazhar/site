$(document).ready(function(){    
    const bottom     = $('.history').offset().top;
    $(window).scroll(function(){    
        if ($(this).scrollTop() > bottom){ 
            $('.navigation').addClass('nav-active');
            $(".logo-tagline").removeClass("d-none");
        }
        else{
            $('.navigation').removeClass('nav-active');
            $(".logo-tagline").addClass("d-none");
        }
    });

    $(".img-slider").slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1                  
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1                  
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1                  
                }
            }
        ]
    });
});