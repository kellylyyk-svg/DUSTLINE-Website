
// let number = 1
// $('.btn_next').click(function(){
//     $('.hero ul').css({marginLeft:-number*100+'%'})
//     console.log(number)
// })

// $('.btn_prev').click(function(){
//     $('.hero ul').css({marginLeft:'0'})
// })


$('.btn_af').click(function(){
    if($('.section1 ul').is(':animated')) return;

    let k = $('.section1 ul').width();
    $('.section1 ul').animate({marginLeft: -k-30}, 1000, function(){
        $('.section1 ul li').slice(0, 3).appendTo('.section1 ul');
        $('.section1 ul').css({marginLeft: 0})
    })
})

$('.btn_be').click(function(){
    if($('.section1 ul').is(':animated')) return;
    $('.section1 ul li:last-child').prependTo('.section1 ul');
    $('.section1 ul').css({marginLeft: '-100%'});
    $('.section1 ul').animate({marginLeft: 0}, 500);
});


let currentDegree = 0;

$('.cta').click(function(){
    currentDegree += 360;
    $(this).css({
        'transform': 'rotate(' + currentDegree + 'deg)',
        'transition': '1s'
    })
})

$('.gnb > li').click(function(){
    $('.gnb > li').removeClass('on')
    $(this).addClass('on')
})







