//js for Becoming a GOAT

document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded and ready.");
});

function toggleSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.toggle("hidden");
  }
}

let pomodoroInterval;
let breakInterval;
let pomodoroTime = 25 * 60;
let breakTime = 5 * 60;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function clearAllIntervals() {
  clearInterval(pomodoroInterval);
  clearInterval(breakInterval);
}

function startPomodoro() {
  clearAllIntervals();
  let timeLeft = pomodoroTime;
  const display = document.getElementById("pomodoroDisplay");
  if (!display) return;
  display.textContent = formatTime(timeLeft);
  pomodoroInterval = setInterval(() => {
    timeLeft--;
    display.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(pomodoroInterval);
      alert("Pomodoro complete! Time for a break!");
    }
  }, 1000);
}

// function resetPomodoro() {
//   clearAllIntervals();
//   const display = document.getElementById("pomodoroDisplay");
//   if (display) display.textContent = formatTime(pomodoroTime);
// }

function startBreak() {
  clearAllIntervals();
  let timeLeft = breakTime;
  const display = document.getElementById("pomodoroDisplay");
  if (!display) return;
  display.textContent = formatTime(timeLeft);
  breakInterval = setInterval(() => {
    timeLeft--;
    display.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(breakInterval);
      alert("Break over! Let's get back to work!");
    }
  }, 1000);
}

function stopTimers() {
  clearAllIntervals();
}

function resetPomodoroAndBreak() {
  clearAllIntervals();
  const display = document.getElementById("pomodoroDisplay");
  if (display) display.textContent = formatTime(pomodoroTime);
}

let stopwatch;
let stopwatchSeconds = 0;

function startStopwatch() {
  const display = document.getElementById("stopwatchDisplay");
  if (!display || stopwatch) return;
  stopwatch = setInterval(() => {
    stopwatchSeconds++;
    display.textContent = formatTime(stopwatchSeconds);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatch);
  stopwatch = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;
  const display = document.getElementById("stopwatchDisplay");
  if (display) display.textContent = "00:00";
}

const affirmations = [
  "I am compassionate with myself and others",
  "I accept change as a positive force in life",
  "I'm enough exactly as I am.",
  "I approve of myself and don't need external validation.",
  "You are not behind. You are on your own timeline.",
  "It is okay for me to set my boundaries.",
  "I am becoming the best version of myself.",
  "You are so GOAT-ed, twin.",
  "You’ve survived 100% of your flop eras. That’s talent.",
  "Breakdowns build baddies. Go cry and conquer, queen.",
  "You're not spiraling. You're doing interpretive dance through your growth arc.",
  "I’m just a girl- even when I rest, I’m still worthy.",
  "It’s okay to take up space. I’m the whole plot."
];

function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("affirmationDisplay").textContent = random;
}

