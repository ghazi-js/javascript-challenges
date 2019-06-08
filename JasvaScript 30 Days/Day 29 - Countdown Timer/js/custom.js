"use strict";

const timer = document.querySelectorAll('.timer__button');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
let timeInterval;

function countTimer() {
    // clear interval
    clearInterval(timeInterval);
    let originSeconds = Number(this.dataset.time); // in seconds
    let seconds = originSeconds;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    const time = {minutes, seconds};
    displayEnd(originSeconds);
    displayLeft(time);
    timeInterval = setInterval(() => {
        time.seconds = (time.seconds >= 1 ) ? --time.seconds : 0;
        if (time.seconds === 0) {
            if (time.minutes > 0) {
                time.minutes--;
                time.seconds = 60;
            } else {
                clearInterval(timeInterval);
            }
        }
        displayLeft(time);
    }, 1000);
}

function displayLeft(time) {
    displayTimeLeft.textContent = `${twoDigitTime(time.minutes)}:${twoDigitTime(time.seconds)}`;
}

function displayEnd(secondsLeft) {
    let currentTime = new Date();
    let seconds = (currentTime.getHours() * 3600) + (currentTime.getMinutes() * 60) + currentTime.getSeconds();
    seconds += secondsLeft;

    const hours = Math.floor(seconds / 3600) % 12;
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    displayEndTime.innerHTML = `Be back at ${twoDigitTime(hours)}:${twoDigitTime(minutes)}`;
}

function twoDigitTime(time) {
    return (time < 10) ? `0${time}` : time;
}

timer.forEach(time => time.addEventListener('click', countTimer));