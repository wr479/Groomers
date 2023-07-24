import Swiper from "swiper";
export function sliders() {
    
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}