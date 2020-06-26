$('.nav>li').hover(function(){
    $(this).css('background','#881bd9').find('a').css('color','#fff')
    $(this).siblings().css('background','none').find('a').css('color','#000')
    var index = $(this).index()
    $('.room>img').eq(index).show().siblings().hide()

    $('.cen>.cenTitle').eq(index).show().siblings().hide()
     $('.tnt>.box').eq(index).show().siblings().hide()

},function(){
    console.log(2);
})