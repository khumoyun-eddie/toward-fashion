swiper1 = new Swiper('.showcase__swiper', {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: '.showcase-button-next',
    prevEl: '.showcase-button-prev',
  },
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },
    600: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
  },
});

swiper2 = new Swiper('.swiper2', {
  slidesPerView: '4',
  spaceBetween: 32,
  navigation: {
    nextEl: '.designers__slider-button-next',
    prevEl: '.designers__slider-button-prev',
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

swiper3 = new Swiper('.newArrivals__slider', {
  slidesPerView: '3',
  spaceBetween: 32,
  navigation: {
    nextEl: '.newArrivals-button-next',
    prevEl: '.newArrivals-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
