window.onload = () => {
    "use strict";
    const filters = document.querySelectorAll('.filter');
    const _root = document.querySelector(':root');

    filters.forEach(filter => addEventListener('change', changeFilter));

    function changeFilter(e) {
        const _el = e.target;
        _root.style.setProperty(`--${_el.getAttribute('data-filter')}`, `${_el.value}${_el.getAttribute('data-size')}`);
    }
};