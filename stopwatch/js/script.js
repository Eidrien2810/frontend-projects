/*
            estar seguros que los elementos del dom esten cargados antes de que accedan a ellos
        */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (item) => document.querySelector(item);
  const $startButton = $(".start");
  const $stopButton = $(".stop");
  const $resetButton = $(".reset");
  const $screen = $(".screen");

  let hour = 0;
  let sec = 0;
  let min = 0;
  let ms = 0;

  let interval = null;
  let msInterval = null;

  function formatTimeDisplay() {
    const hourDisplay = hour < 10 ? "0" + hour : hour;
    const secDisplay = sec < 10 ? "0" + sec : sec;
    const minDisplay = min < 10 ? "0" + min : min;
    const msDisplay =
      ms < 10
        ? "00" + ms.toFixed(0)
        : ms < 100
        ? "0" + ms.toFixed(0)
        : ms.toFixed(0);

    return `${hourDisplay}:${minDisplay}:${secDisplay}.${msDisplay}`;
  }

  function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
      $screen.textContent = formatTimeDisplay();
      ms += 16.5;
      if (ms >= 999) {
        sec++;
        ms = 0;
      }
      // sec++;
      if (sec >= 60) {
        min++;
        sec = 0;
      }
      if (min >= 60) {
        hour++;
        min = 0;
      }
    }, 0);
  }

  $startButton.addEventListener("click", startTimer);

  $resetButton.addEventListener("click", () => {
    clearInterval(interval);
    sec = 0;
    min = 0;
    ms = 0;
    $screen.textContent = formatTimeDisplay();
  });

  $stopButton.addEventListener("click", () => clearInterval(interval));
});
