"use strict";

window.onload = function () {
    window.addEventListener('keydown', handleKeyPress);
};

function handleKeyPress(e) {
    if (e.keyCode === 65 || e.keyCode === 87 ||
        e.keyCode === 79 || e.keyCode === 69 ||
        e.keyCode === 77 || e.keyCode === 83)
        playAudio(e.keyCode);
}

function playAudio(code) {
    var keys = document.getElementsByTagName('kbd');
    var audio = new Audio('./audios/' + code + '.mp3');
    audio.currentTime = 0;
    audio.play().then(function (resolve) {
        for (var i = 0; i < keys.length; i++) {
            if (code == keys[i].getAttribute('data-code')) {
                keys[i].classList.add('pressed');
                setTimeout(function(key) {
                    key.classList.remove('pressed');
                }, 100, keys[i]);
            }
        }
    });
}