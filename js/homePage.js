let init = false;
swiper = new Swiper('.swiper', {
    slidesPerView: '4',
    spaceBetween: 32,
  });
function swiperCard() {
  if (window.innerWidth <= 600) {
    if (!init) {
      init = true;
      swiper.destroy()
      swiper = new Swiper('.swiper', {
        slidesPerView: '2',
        spaceBetween: 32,
        navigation: {
            nextEl: ".designers__slider-button-next",
            prevEl: ".designers__slider-button-prev",
          },
      });
    }
  } else if (init) {
    init = false;
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);
