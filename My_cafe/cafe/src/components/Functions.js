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

    $('.img7').css({
        'transform' : 'translate(0px, -'+ wScroll /19 +'%)'
    })

    $('.img8').css({
        'transform' : 'translate(0px, -'+ wScroll /12 +'%)'
    })
    $('.img9').css({
        'transform' : 'translate(0px, -'+ wScroll /22 +'%)'
    })

    $('.img11').css({
        'transform' : 'translate(0px, -'+ wScroll /15 +'%)'
    })

    $('.img13').css({
        'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
    })

    $('.img14').css({
        'transform' : 'translate(0px, -'+ wScroll /5 +'%)'
    })

    $('.img15').css({
        'transform' : 'translate(0px, -'+ wScroll /7 +'%)'
    })

    $('.img16').css({
        'transform' : 'translate(0px, -'+ wScroll /5 +'%)'
    })

    $('.img17').css({
        'transform' : 'translate(0px, -'+ wScroll /5 +'%)'
    })
    $('.img18').css({
        'transform' : 'translate(0px, -'+ wScroll /5 +'%)'
    })
    
   });
