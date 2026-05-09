import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';


const swiper = new Swiper('.galery-swapper-container', {

modules: [Navigation],

  wrapperClass: 'galery-list',
  slideClass: 'galery-list_item',
    loop: true,
    loopAdditionalSlides: 5,
  watchOverflow: false,
  centeredSlides: true,

  navigation: {
    nextEl: '.galery-btn_right',
    prevEl: '.galery-btn_left',
  },

  spaceBetween: 38,
  
  breakpoints: {
    320: { slidesPerView: 1.22,
      centeredSlides: true,
      spaceBetween: 24
     },
    1440: { 
      slidesPerView: 3.5, 
      centeredSlides: true,
      spaceBetween: 38
    }
  },

});