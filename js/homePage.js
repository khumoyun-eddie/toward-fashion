swiper1 = new Swiper('.showcase__slider', {
  slidesPerView: 2,
  slidesPerColumn: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".showcase-button-next",
    prevEl: ".showcase-button-prev"
  }
});

swiper2 = new Swiper('.swiper2', {
  slidesPerView: '4',
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {},
    resize: function (e) {
      if (e.width <= 600) {
        swiper2.params.slidesPerView = '2';
      } else {
        swiper2.params.slidesPerView = '4';
      }
    },
  },
});
