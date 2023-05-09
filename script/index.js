const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');

let intervalId;
let hours;
let minutes;
let seconds;

function startTimer() {
  intervalId = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      resetTimer();
      return;
    }

    if (seconds === 0) {
      if (minutes === 0) {
        hours--;
        minutes = 59;
      } else {
        minutes--;
      }

      seconds = 59;
    } else {
      seconds--;
    }

    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  hours = parseInt(hoursInput.value);
  minutes = parseInt(minutesInput.value);
  seconds = parseInt(secondsInput.value);
  updateDisplay();
}

function updateDisplay() {
  const displayHours = hours < 10 ? `0${hours}` : hours;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  display.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

resetTimer(); // 페이지 로딩 시 초기화
