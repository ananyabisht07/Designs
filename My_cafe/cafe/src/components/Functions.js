import $ from 'jquery'


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.img1').css({
        'transform' : 'translate(0px, -'+ wScroll /19 +'%)'
    });

    $('.img2').css({
        'transform' : 'translate(0px, -'+ wScroll /24 +'%)'
    })
   });