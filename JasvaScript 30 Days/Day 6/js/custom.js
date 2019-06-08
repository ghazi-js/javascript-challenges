"use strict";
const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

// grab the data
fetch(url).then(blob => blob.json()).then(data => cities = data).catch(error => console.error(error));

// handle search event
const _search = document.getElementById('search');
_search.addEventListener('keyup', displayCities);

function getMatches(wordToMatch) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayCities() {
    let _suggestion = document.querySelector('.result');
    if (!this.value.trim()) {
        _suggestion.innerHTML = '';
        return;
    }

    let cities = getMatches(this.value);
    const regex = new RegExp(this.value, 'gi');

    _suggestion.innerHTML = cities.map(place => {
        const city = place.city.replace(regex, `<mark>${this.value}</mark>`);
        const state = place.state.replace(regex, `<mark>${this.value}</mark>`);

       return `
            <li class="row">
                <span>${city}, ${state}</span>
                <span class="fr">${numberWithCommas(place.population)}</span>
            </li>`;
    }).join('');
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         let http = new XMLHttpRequest();
//         http.onload = () => {
//             if (http.status === 200)
//                 resolve(JSON.parse(http.response));
//         };
//         http.onerror = () => {
//             reject(http.response);
//         };
//         http.open('GET', url, true);
//         http.send();
//     });
// }
//
// response.then(response => {
//     cities = response;
// }).catch(response => {
//     console.error(response);
// });