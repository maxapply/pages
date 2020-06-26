// title 部分Swiper
var Pageswiper = new Swiper('#Pageswiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
     },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});



// 关于我们swiper
var aboutSwiper = new Swiper('#abSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// 相关资讯swiper
var infoswiper = new Swiper('#infoSwiper', {
spaceBetween: 30,
centeredSlides: true,
loop: true,
autoplay: {
  delay: 2000,
  disableOnInteraction: false,
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
});