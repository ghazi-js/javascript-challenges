"use strict";

// initialize the canvas element
let canvas = document.getElementById('canvas');
[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight - 74];

// initialize the context of canvas
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// define properties
let startX = 0;
let startY = 0;
let isDraw = false;
let direction = true;
let hue = 0;
let shuffleWidth = true;
let shuffleColor = true;

function drawStroke(e) {
    if (!isDraw) return;

    // draw the stroke
    ctx.beginPath();
    if (shuffleColor)
        ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`;
    ctx.moveTo(startX, startY); // draw from
    ctx.lineTo(e.offsetX, e.offsetY); // go to
    ctx.stroke();

    // update properties
    [startX, startY] = [e.offsetX, e.offsetY];

    hue = (hue >= 360) ? 0 : hue;

    if (shuffleWidth) {
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
        (direction) ? ctx.lineWidth++ : ctx.lineWidth--;
    }
}

// event listener
canvas.addEventListener('mousemove', drawStroke);
canvas.addEventListener('mousedown', (e) => {
    isDraw = true;
    [startX, startY] = [e.offsetX, e.offsetY];
    drawStroke(e);
});
canvas.addEventListener('mouseup', () => isDraw = false);
canvas.addEventListener('mouseout', () => isDraw = false);

// toggle show drop down menu
const dropdown = document.getElementById('line-width-dropdown');
const menu = document.querySelector('.menu');
dropdown.addEventListener('click', () => menu.classList.toggle('open'));

// change base line width option
const options = document.querySelectorAll('.menu li');
options.forEach(option => option.addEventListener('click', () => {
    options.forEach(option => option.classList.remove('active'));
    option.classList.add('active');
    shuffleWidth = option.getAttribute('data-shuffle') === 'true';
    ctx.lineWidth = Number(option.getAttribute('data-width'));
}));

// change base color option
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    shuffleColor = false;
});

// hide drop down when click outside
document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && e.target !== dropdown)
        menu.classList.remove('open')
});