window.onload = function () {
    "use strict";
    // HTML elements declarations
    var _clocks = document.querySelectorAll('.clock');

    var clockDeg        = getDegFromNow(); // initialize clock time
    var sTick           = rotateClockIncrease(clockDeg.s); // initial counter for seconds
    var mTick           = rotateClockIncrease(clockDeg.m); // initial counter for minutes
    var hourTick        = rotateClockIncrease(clockDeg.h); // initial counter for hours

    // initialize hour clock
    clockDeg.h += Math.floor(clockDeg.m / 72) * 6;


    // animate clock each 1s
    setInterval(animateClock, 1000, _clocks, sTick, mTick, hourTick, clockDeg);
};

/**
 * Animate clocks
 * @param {NodeList} _clocks 
 * @param {Function Reference} sTick 
 * @param {Function Reference} mTick 
 * @param {Function Reference} hTick 
 * @param {Object} clockDeg
 */
function animateClock(_clocks, sTick, mTick, hTick, clockDeg) {
    clockDeg.s    = sTick();

    _clocks[0].style.transform = 'rotate(' + clockDeg.s + 'deg)';
    _clocks[1].style.transform = 'rotate(' + clockDeg.m + 'deg)';
    _clocks[2].style.transform   = 'rotate(' + clockDeg.h + 'deg)';

    if (clockDeg.s % 360 === 0)
        clockDeg.m = mTick();

    if (clockDeg.m % 72 === 0)
        clockDeg.h = hTick();
}

/**
 * Increase clock rotation value
 * @param count clock to be increase
 * @param i increment val
 * @return closure {increment clock.val by clock.i each time}
 */
function rotateClockIncrease(clock) {
    return function () {
        clock += 6;
        return clock;
    }
}

/**
 * Convert clock time to rotation deg value
 * @return rotation deg from current time (hours, minutes, seconds)
 */
function getDegFromNow() {
    var currentTime = new Date();
    return {
        s: currentTime.getSeconds() * 6,
        m: currentTime.getMinutes() * 6,
        h: (currentTime.getHours() % 12) * 30
    };
}