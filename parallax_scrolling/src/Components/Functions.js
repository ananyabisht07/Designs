import $ from 'jquery'


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logoo').css({
        'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
    console.log(wScroll)

    $('.back-bird').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    })

    $('.fore-bird').css({
        'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    })
   });