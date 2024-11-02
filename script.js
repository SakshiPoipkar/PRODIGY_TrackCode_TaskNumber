let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            display.innerText = formatTime(seconds);
        }, 1000);
    }
}

function pause() {
    isRunning = false;
    clearInterval(timer);
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    display.innerText = '00:00:00';
    lapsContainer.innerHTML = ''; // Clear laps
}

function lap() {
    const lapTime = document.createElement('div');
    lapTime.innerText = formatTime(seconds);
    lapsContainer.appendChild(lapTime);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
