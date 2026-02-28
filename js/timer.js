let timerInterval = null;
let timeLeft = 0;
let timerElement = document.getElementById("timer");

export function startTimer(seconds, onGameOver) {
  stopTimer();
  timeLeft = seconds;
  timerElement.classList.remove("hidden");
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      stopTimer();
      hideTimer();
      onGameOver();
    }
  }, 1000);
}

export function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

export function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds}`;
  if (minutes === 0 && seconds <= 10) {
    timerElement.style.color = "red";
  }
}

export function hideTimer() {
  timerElement.classList.add("hidden");
}

export function resetTimer() {
  stopTimer();
  hideTimer();
}
