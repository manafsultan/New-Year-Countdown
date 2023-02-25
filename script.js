const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('mins');
const secondsE = document.getElementById('seconds');
const newYear = '1 Jan 2024';

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60 ;

  daysE.innerHTML = days;
  hoursE.innerHTML = formatTime(hours);
  minsE.innerHTML = formatTime(mins);
  secondsE.innerHTML = formatTime(seconds);
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);

