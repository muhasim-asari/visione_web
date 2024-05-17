const slider = document.querySelector("#vision-slider");

new Swiper(slider, {
  spaceBetween: 15,
  slidesPerView: 2,
  grabCursor: true,
  scrollbar: {
    // el: scrollbar,
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 999px
    499: {
        slidesPerView: 1,
        spaceBetweenSlides: 15
    }
  },
});
