/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/
// Стилі Swiper
// Базові стилі
// Повний набір стилів з scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import "swiper/css";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".banner__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".banner__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 100,
      speed: 800,
      pagination: {
        el: ".banner__pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".banner__arrow_prev",
        nextEl: ".banner__arrow_next",
      },
      breakpoints: {
        320: { spaceBetween: 10 },
        768: { spaceBetween: 100 },
      },
    });
  }
  // if (document.querySelector(".swiper")) {
  //   // Вказуємо склас потрібного слайдера
  //   // Створюємо слайдер
  //   new Swiper(".swiper", {
  //     // Вказуємо склас потрібного слайдера
  //     // Підключаємо модулі слайдера
  //     // для конкретного випадку
  //     modules: [Navigation],
  //     observer: true,
  //     observeParents: true,
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     autoHeight: true,
  //     speed: 800,
  //
  //     //touchRatio: 0,
  //     //simulateTouch: false,
  //     //loop: true,
  //     //preloadImages: false,
  //     //lazy: true,
  //
  //     /*
  //                                                                                                           // Ефекти
  //                                                                                                           effect: 'fade',
  //                                                                                                           autoplay: {
  //                                                                                                               delay: 3000,
  //                                                                                                               disableOnInteraction: false,
  //                                                                                                           },
  //                                                                                                           */
  //
  //     // Пагінація
  //     /*
  //                                                                                                           pagination: {
  //                                                                                                               el: '.swiper-pagination',
  //                                                                                                               clickable: true,
  //                                                                                                           },
  //                                                                                                           */
  //
  //     // Скроллбар
  //     /*
  //                                                                                                           scrollbar: {
  //                                                                                                               el: '.swiper-scrollbar',
  //                                                                                                               draggable: true,
  //                                                                                                           },
  //                                                                                                           */
  //
  //     // Кнопки "вліво/вправо"
  //     navigation: {
  //       prevEl: ".swiper-button-prev",
  //       nextEl: ".swiper-button-next",
  //     },
  //     /*
  //                                                                                                           // Брейкпоінти
  //                                                                                                           breakpoints: {
  //                                                                                                               640: {
  //                                                                                                                   slidesPerView: 1,
  //                                                                                                                   spaceBetween: 0,
  //                                                                                                                   autoHeight: true,
  //                                                                                                               },
  //                                                                                                               768: {
  //                                                                                                                   slidesPerView: 2,
  //                                                                                                                   spaceBetween: 20,
  //                                                                                                               },
  //                                                                                                               992: {
  //                                                                                                                   slidesPerView: 3,
  //                                                                                                                   spaceBetween: 20,
  //                                                                                                               },
  //                                                                                                               1268: {
  //                                                                                                                   slidesPerView: 4,
  //                                                                                                                   spaceBetween: 30,
  //                                                                                                               },
  //                                                                                                           },
  //                                                                                                           */
  //     // Події
  //     on: {},
  //   });
  // }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
