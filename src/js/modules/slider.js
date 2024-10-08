import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

function popularSlider(){
    const swiper = new Swiper('.popular-section__content', {
        loop: true,
        slidesPerView: 5,
        navigation: {
            prevEl: '.popular-section__slider-button--prev',
            nextEl: '.popular-section__slider-button--next',
        },
    })
}

export default popularSlider;