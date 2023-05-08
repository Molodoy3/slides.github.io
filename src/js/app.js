"use strict";
//?Импортирование Свайпера
import Swiper, { Autoplay, Pagination, Keyboard, Mousewheel } from 'swiper'; //импорт свайпера
//?Делегирование события клик
//import { delegationClick } from './modules/script.js';
//?Функция определения мобильного устройства
//import { isMobile } from "./modules/functions";
//?Импортирование плавного скролла
//import "./modules/smoothScroll.js"
//?Галерея FancyBox
//import { Fancybox } from "@fancyapps/ui";
//import "@fancyapps/ui/dist/fancybox/fancybox.css";
//Fancybox.bind("[data-gallery]", {});
//<a href="img/3.jfif" data-fancybox="gallery" data-caption="Природа" class="block__item"><img src="img/3.jfif" alt="Природа"></a>

window.addEventListener("load", windowLoad);
function windowLoad() {

    const progressValues = document.querySelectorAll('.progress-number');
    if (progressValues.length) {
        progressValues.forEach(value => {
            value.closest('.progress__item').querySelector('.progress__line').style.cssText = `width: ${value.innerText}%;`;
        });
    }

    const slider = document.querySelector('.page');
    if(slider){
        new Swiper(slider, {
            modules: [Pagination, Autoplay, Keyboard, Mousewheel],
            wrapperClass: 'page__wrapper',
            slideClass: 'page__slide',
            pagination: {
                el: '.page__navigation',
                clickable: true
            },
            /* autoplay: {
                speed: 800,
            }, */
            direction: 'vertical',
            slidesPerView: 1,
            loop: false,
            speed: 800,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            mousewheel: {
                sensitivity: 1,
            },
            watchOverflow: true,
        });
    }

}