"use strict";
const player        = document.querySelector('.player');
const video         = player.querySelector('video');
const progressBar   = player.querySelector('.progress');
const progressFill  = player.querySelector('.progress-fill');
const playBtn       = player.querySelector('#playBtn');
const volume        = player.querySelector('.volume');
const playBack      = player.querySelector('.playback-rate');
const skipButtons   = player.querySelectorAll('[data-skip]');
const expand        = player.querySelector('.expand');
// initialize
volume.value        = video.volume;
playBack.value      = video.defaultPlaybackRate;
video.playbackRate  = 1;
video.controls = false;


function togglePlay() {
    const method = (video.paused) ? 'play' : 'pause';
    video[method]();
}

function updateBtn() {
    playBtn.textContent = (video.paused) ? '►' : '❚ ❚';
}

function handleRangeUpdate() {
    video[this.name] = Number(this.value);
}

function skip() {
    video.currentTime += Number(this.dataset.skip);
}

function updateProgressBar() {
    progressFill.style.width = `${video.currentTime / video.duration * 100}%`;
}

function seekProgress(e) {
    video.currentTime = (e.offsetX / progressBar.clientWidth) * video.duration;
}

function toggleFullScreen() {
    console.log(document.webkitFullscreenElement);
    if (document.webkitFullscreenElement)
        document.webkitExitFullscreen();
    else
        player.webkitRequestFullScreen();
}

let mouseDown = false;

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', updateProgressBar);
progressBar.addEventListener('click', seekProgress);
progressBar.addEventListener('mousemove', (e) => mouseDown && seekProgress(e));
progressBar.addEventListener('mousedown', () => mouseDown = true);
progressBar.addEventListener('mousedown', () => mouseDown = false);
playBtn.addEventListener('click', togglePlay);
volume.addEventListener('change', handleRangeUpdate);
volume.addEventListener('input', handleRangeUpdate);
playBack.addEventListener('change', handleRangeUpdate);
playBack.addEventListener('input', handleRangeUpdate);
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skip));
expand.addEventListener('click', toggleFullScreen);
window.addEventListener('dblclick', toggleFullScreen);