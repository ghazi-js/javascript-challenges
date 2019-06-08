"use strict";

let checkboxes = document.querySelectorAll('input');

let lastChecked;
let inBetween = false;

function handleCheck(e) {
    const self = e.target;
    if (e.shiftKey && lastChecked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === self || checkbox === lastChecked) inBetween = !inBetween;
            if (inBetween) checkbox.checked = self.checked;
        });
    }
    lastChecked = self;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));