// Get elements by IDs
let startStopBtn = document.getElementById("startStop");
let resetBtn = document.getElementById("reset");
let hoursDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let timer;
let isRunning = false;
let startTime = 0;
function startTimer() {
  if (!isRunning) {
    startStopBtn.textContent = "Stop";
    startStopBtn.classList.remove("resume");
    startStopBtn.classList.add("stop");
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  } else {
    stopTimer();
  }
}
function stopTimer() {
  startStopBtn.textContent = "Resume";
  startStopBtn.classList.remove("stop");
  startStopBtn.classList.add("resume");
  isRunning = false;
  clearInterval(timer);
}
function resetTimer() {
  clearInterval(timer);
  startTime = 0;
  hoursDisplay.textContent = "00";
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  startStopBtn.textContent = "Start";
  startStopBtn.classList.remove("stop", "resume");
  isRunning = false;
}
function updateTimer() {
  startTime += 1000;
  const hours = Math.floor(startTime / 3600000);
  const minutes = Math.floor((startTime % 3600000) / 60000);
  const seconds = Math.floor((startTime % 60000) / 1000);
  hoursDisplay.textContent = formatTime(hours);
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// Event listeners
startStopBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
