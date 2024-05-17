const slider = document.querySelector("#success-stories-slide");

new Swiper(slider, {
  spaceBetween: 15,
  slidesPerView: 1,
  grabCursor: true,
  scrollbar: {
    // el: scrollbar,
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
