
"use strict";

const item = document.querySelector('.items');
let mouseDown = false;
let startX;
let scrollLeft;

function drag(e) {
    const walk = ((e.pageX - item.offsetLeft) - startX) * 3;
    item.scrollLeft = scrollLeft - walk;
}
item.addEventListener('mousedown', (e) => {
    mouseDown = true;
    item.classList.add('active');
    startX = e.pageX - item.offsetLeft;
    scrollLeft = item.scrollLeft;
});
item.addEventListener('mouseup', () => {
    mouseDown = false;
    item.classList.remove('active');
});
item.addEventListener('mouseleave', () => {
    mouseDown = false;
    item.classList.remove('active');
});
item.addEventListener('mousemove', (e) => mouseDown && drag(e));