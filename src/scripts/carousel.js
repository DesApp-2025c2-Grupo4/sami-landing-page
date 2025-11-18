import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

new Swiper("#mySwiper", {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 20,
  slidesPerView:1,
  breakpoints: {
    750: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});