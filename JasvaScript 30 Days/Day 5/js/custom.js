window.onload = () => {
    "use strict";

    let panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => panel.classList.toggle('open') );
        panel.addEventListener('transitionend', () => panel.classList.toggle('open-active') );
    });

};