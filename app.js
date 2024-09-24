// stopwatch 
let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let second = 0;
let minute = 0;
let hours = 0;
let interval = null;
function startthewatch() {
    interval = setInterval(() => {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        if (minute == 60) {
            minute = 0;
            hours++;
        }
        displaytime()
    }, 1000)
}
function stopthewatch() {
    clearInterval(interval)
}
function refresh() {
    clearInterval(null)
    second = 0;
    minute = 0;
    hours = 0;
    displaytime()
}
function displaytime() {
    timer.innerHTML = `${hours} :${minute} : ${second}`
}

start.addEventListener("click", startthewatch);
stop.addEventListener("click", stopthewatch);
reset.addEventListener("click", refresh);