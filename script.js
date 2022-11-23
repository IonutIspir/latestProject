// Slider //
const date = new Date();
document.querySelector(".footer-year").innerText = date.getFullYear();
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// End Slider //
