class Clock {
    _clocks;
    clockDeg;
    sTick;
    mTick;
    hourTick;

    constructor() {
        this._clock = document.querySelectorAll('.clock');
        this.clockDeg = this.getDegFromNow();
        this.sTick = this.rotateClockIncrease(this.clockDeg.s);
        this.mTick = this.rotateClockIncrease(this.clockDeg.m);
        this.hTick = this.rotateClockIncrease(this.clockDeg.h);
        setInterval(this.animateClock, 1000);
    }

    animateClock() {
        this.clockDeg.s.val    = this.sTick();

        this._clocks[0].style.transform = 'rotate(' + this.clockDeg.s.val + 'deg)';
        this._clocks[1].style.transform = 'rotate(' + this.clockDeg.m.val + 'deg)';
        this._clocks[2].style.transform   = 'rotate(' + this.clockDeg.h.val + 'deg)';

        if (this.clockDeg.s.val % 360 === 0) {
            this.clockDeg.m.val = this.mTick(); // increase minutes
            this.clockDeg.s.val = 0; // reset rotation degree
            if (this.clockDeg.m.val % 360 === 0) {
                this.clockDeg.h.val = this.hTick();
                this.clockDeg.m.val = 0;
                if (this.clockDeg.h.val % 360 === 0) {
                    this.clockDeg.h.val = 0;
                }
            }
        }
    }

    rotateClockIncrease(clock) {
        return function () {
            clock.val += clock.i;
            return clock.val;
        }
    }

    getDegFromNow() {
        let currentTime = new Date();
        return {
            s: { i: 6, val: currentTime.getSeconds() * 6 },
            m: { i: 6, val: currentTime.getMinutes() * 6 },
            h: { i: 30, val: (currentTime.getHours() % 12) * 30 }
        };
    }
}








window.onload = function () {
    "use strict";
    new Clock();
};