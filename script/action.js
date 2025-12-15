
let number = 1
$('.btn_next').click(function(){
    $('.hero ul').css({marginLeft:-number*100+'%'})
    console.log(number)
})

$('.btn_prev').click(function(){
    $('.hero ul').css({marginLeft:'0'})
})






