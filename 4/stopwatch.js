const time = document.getElementById("time");
let seconds = 0;

function padTime(value) {
  return String(value).padStart(2, "0");
}

let intervalId = null;

function starInterval() {
  console.log(" interval ...");
  seconds++;   // The first change happens after the interval.
  setTimeDisplay();
}

function setTimeDisplay() {
  const secs = seconds % 60;
  const mins = Math.floor(seconds / 60);
  time.innerHTML = `${padTime(mins)}:${padTime(secs)}`;
}

function startTimer() {
  if (intervalId) stopTimer();
  console.log("StartTimer");
  intervalId = setInterval(starInterval, 1000);
  console.log("into interval");
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  setTimeDisplay();
}
