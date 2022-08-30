var swiper = new Swiper('.swiper--thumbs', {
  //   spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 32,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },

  breakpoints: {
    300: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
   
    },
    600: {
      pagination: false,
      
    },
  },
});

const productsList = new Swiper('.products__list--1', {
  slidesPerView: '4',
  spaceBetween: 32,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 32,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const productsList2 = new Swiper('.products__list--2', {
  slidesPerView: '4',
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
