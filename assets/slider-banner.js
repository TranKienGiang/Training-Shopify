const selectorSwiper = document.querySelector('.mySwiper');
const getTime = selectorSwiper.getAttribute('data-time');
const getEnabled = selectorSwiper.getAttribute('enable-auto');
var swiper = new Swiper(".swipers", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: getTime,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
if (getEnabled === "false") {
    swiper.autoplay.stop();
}


const swiperCollection = new Swiper('.swiper-collection', {
    slidesPerView: 4,
    spaceBetween: 12,
    pagination: {
        el: ".swiper-pagination",
      }
});