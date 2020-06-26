// title部分 swiper 轮播
var titleSwiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,    // 无限轮播
    autoplay: {
       delay: 2500,
       disableOnInteraction: false,
    },
    pagination: {
       el: '#swiper-p1',
       clickable: true,
    },
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    });



// 门诊部分
var Depswiper = new Swiper("#DepSwiper", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>"
          },
        },
    })



// 医生团队Swiper
effect = 0
var swiper = new Swiper('.swiper3', {
    loop: true,
    speed: 2000,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides : true,
    watchSlidesProgress : true,
    autoplay: {
    delay: 2500, // 轮播时间
    disableOnInteraction: false
    },
    on: {
    setTranslate: function(){
        slides = this.slides
        for(i=0; i< slides.length; i++){
            slide = slides.eq(i)
            progress = slides[i].progress
            //slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
                slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
                
                if(effect == 1){
                    slide.transform('scale('+(1 - Math.abs(progress)/8)+')');  
                }else if(effect == 2){
                    slide.css('opacity',(1-Math.abs(progress)/6));
                    slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)');  
                }
                else if(effect == 3){
                    slide.transform('rotate('+ progress*30+'deg)');  
                }else if(effect == 4){
                    slide.css('background','rgba('+ (255 - Math.abs(progress)*20) +','+ (127 + progress*32) +',' + Math.abs(progress)*64 + ')');
                }
                
            }	
    },
    setTransition: function(transition) {
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
        }
    },
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});



// 关于我们 1
var Aboutswiper = new Swiper('#aboutSwiper', {
    cssMode: true,
    loop: true,    // 无限轮播
    autoplay: {
       delay: 2500,
       disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });
// 关于我们 2
effect = 0
var InSwiper = new Swiper('#inSwiper', {
    loop: true,
    speed: 2500,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides : true,
    watchSlidesProgress : true,
    loop: true,    // 无限轮播
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    on: {
    setTranslate: function(){
        slides = this.slides
        for(i=0; i< slides.length; i++){
            slide = slides.eq(i)
            progress = slides[i].progress
            //slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
                slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
                
                if(effect == 1){
                    slide.transform('scale('+(1 - Math.abs(progress)/8)+')');  
                }else if(effect == 2){
                    slide.css('opacity',(1-Math.abs(progress)/6));
                    slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)');  
                }
                else if(effect == 3){
                    slide.transform('rotate('+ progress*30+'deg)');  
                }else if(effect == 4){
                    slide.css('background','rgba('+ (255 - Math.abs(progress)*20) +','+ (127 + progress*32) +',' + Math.abs(progress)*64 + ')');
                }
                
            }	
    },
    setTransition: function(transition) {
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
        }
    },
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});
pe = document.getElementById('progressEffect');



// 先进设备
effect = 0
    var Advswiper = new Swiper('#AdvSwiper', {
	  loop: true,
	  speed: 1000,
      slidesPerView: 3,
      spaceBetween: 20,
	  centeredSlides : true,
	  autoplay: {
		 delay: 1500,
		 disableOnInteraction: false,
	  },
	  on: {
	    setTranslate: function(){
			slides = this.slides
			for(i=0; i< slides.length; i++){
				slide = slides.eq(i)
				progress = slides[i].progress
				//slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
				    slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
					
					if(effect == 1){
					    slide.transform('scale('+(1 - Math.abs(progress)/8)+')');  
					}else if(effect == 2){
						slide.css('opacity',(1-Math.abs(progress)/6));
					    slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)');  
					}
					else if(effect == 3){
					    slide.transform('rotate('+ progress*30+'deg)');  
					}else if(effect == 4){
						slide.css('background','rgba('+ (255 - Math.abs(progress)*20) +','+ (127 + progress*32) +',' + Math.abs(progress)*64 + ')');
					}
					
				}	
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}
		},
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

    
    



    