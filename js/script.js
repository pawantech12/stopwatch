let timedisplay = document.getElementById("timedisplay");

let stopBtn = document.getElementById("stop-btn");
let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let timer = null;
let [hours,minutes,seconds,milliseconds] = [0,0,0,0];

stopwatch = () => {
    milliseconds++;
    if(milliseconds == 100){
        milliseconds = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let hrs = hours < 10 ? ("0"+hours) : hours;
    let min = minutes < 10 ? ("0"+minutes) : minutes;
    let sec = seconds < 10 ? ("0"+seconds) : seconds;
    let millisec = milliseconds < 10 ? ("0"+milliseconds) : milliseconds;

    timedisplay.innerHTML = hrs+":"+min+":"+sec+":"+millisec;
}

startBtn.addEventListener("click",() => {
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
})
stopBtn.addEventListener("click",() => {
    clearInterval(timer);
})
resetBtn.addEventListener("click",() => {
    clearInterval(timer);
    [hours,minutes,seconds,milliseconds] = [0,0,0,0];
    timedisplay.innerHTML = "00:00:00:00"
})