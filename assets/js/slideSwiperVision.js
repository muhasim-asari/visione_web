const slider = document.querySelector("#vision-slider");

new Swiper(slider, {
  spaceBetween: 15,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar", // Ensure you have an element with this class
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {  // when window width is <= 499px
      slidesPerView: 1,
    },
    500: {  // when window width is >= 500px
      slidesPerView: 1,
    },
    1000: {  // when window width is >= 1000px
      slidesPerView: 2,
    },
    1440: {  // when window width is >= 1440px
      slidesPerView: 3,
    },
  },
});