"use strict";

const navLinks = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');
const background = document.querySelector('.dropdownBackground');

function handleHover() {
    background.classList.add('open');
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter'))
            this.classList.add('trigger-enter-active')
    }, 150);

    const dropdown = this.querySelector('.dropdown');
    const nc = nav.getBoundingClientRect();
    const c = dropdown.getBoundingClientRect();
    c.x -= nc.x;
    c.y -= nc.y;

    background.style.cssText = `width: ${c.width}px; height: ${c.height}px; transform: translate(${c.x}px, ${c.y}px)`;
}

function handleLeave() {
    const dropdown = this.querySelector('.dropdown');
    background.classList.remove('open');
    background.querySelector('.dropdown');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

navLinks.forEach((nav) => {
    nav.addEventListener('mouseenter', handleHover);
    nav.addEventListener('mouseleave', handleLeave);
});