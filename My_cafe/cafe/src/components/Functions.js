import $ from 'jquery'


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.img1').css({
        'transform' : 'translate(0px, -'+ wScroll /19 +'%)'
    });

    $('.img2').css({
        'transform' : 'translate(0px, -'+ wScroll /24 +'%)'
    })

    $('.img3').css({
        'transform' : 'translate(0px, -'+ wScroll /27 +'%)'
    })
    $('.img4').css({
        'transform' : 'translate(0px, -'+ wScroll /35 +'%)'
    })
    $('.img5').css({
        'transform' : 'translate(0px, -'+ wScroll /22 +'%)'
    })
    $('.img6').css({
        'transform' : 'translate(0px, -'+ wScroll /32 +'%)'
    })
   });