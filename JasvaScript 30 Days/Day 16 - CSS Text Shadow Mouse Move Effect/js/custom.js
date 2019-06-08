"use strict";

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x += e.target.offsetX;
        y += e.target.offsetY;
    }

    const walkX = (x / width) * walk - (walk / 2);
    const walkY = (y / height) * walk - (walk / 2);

    text.style.textShadow = `
        ${walkX}px ${walkY}px 0 rgba(0, 255, 255, 0.5),
        ${walkX * -1}px ${walkY}px 0 rgba(255, 0, 255, 0.5),
        ${walkX}px ${walkY * -1}px 0 rgba(255, 255, 0, 0.5),
        ${walkX * -1}px ${walkY * -1}px 0 rgba(0, 0, 255, 0.5)
    `;
}

hero.addEventListener('mousemove', shadow);