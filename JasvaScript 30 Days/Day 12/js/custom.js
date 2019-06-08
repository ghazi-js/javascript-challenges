"use strict";

let pressed = [];
const secretWord = 'awesome';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    if (pressed.length > secretWord.length)
        pressed.shift();

    if (pressed.join('').includes(secretWord))
        cornify_add();
});