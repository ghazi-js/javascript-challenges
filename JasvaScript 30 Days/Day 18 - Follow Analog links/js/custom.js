"use strict";

const links = document.querySelectorAll('a');
const hoverEl = document.createElement('span');
hoverEl.classList.add('highlight');
document.body.appendChild(hoverEl);

function handleHover(e) {
    const [scrollX, scrollY] = [window.scrollX, window.scrollY];
    const coords = this.getBoundingClientRect();
    hoverEl.style.cssText = `width: ${coords.width}px; height: ${coords.height}px; transform: translate(${coords.x + scrollX}px, ${coords.y + scrollY}px)`;
    // hoverEl.style.width = width;
    // hoverEl.style.height = height;
}

links.forEach(link => link.addEventListener('mouseenter', handleHover));