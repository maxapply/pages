// 首页部分
    $('.Home').mouseover(function(){
        
    $('.slidNav').stop().slideDown(700)

})


    $('.slidNav').hover(function(){
    $('.isShow>li').mouseover(function(){
        $(this).css('background','#ccc').siblings().css('background','')
        $(this).find('div').fadeIn(500).parent('li').siblings().find('div').hide() 
    })

},function(){
    $('.slidNav').stop().slideUp()
    
})


    $('.isShow>li').click(function(){
        $('.slidNav').stop().slideUp(700)
        $('.box').stop().slideUp(700)
})



// 主治项目
$('.type').mouseover(function(){
    $(this).css('background','#a95fe0').find('a').css('color','#fff')
    $(this).siblings().css('background','').find('a').css({
        color:'#000',
        background: 'none'
    })
    var index = $(this).index()

    $('.tab').eq(index).show().siblings().hide()
    console.log($('.box'));
    


})

