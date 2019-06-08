"use strict";

const images = document.querySelectorAll('img');

window.onscroll = () => {
    images.forEach(image => {
        if (pageYOffset >= (image.offsetTop - (outerHeight / 2)) && pageYOffset <= (image.offsetTop + (outerHeight / 2)))
            image.classList.add('active');
        else
            image.classList.remove('active');

    });
};