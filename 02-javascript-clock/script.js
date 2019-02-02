const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const houHand = document.querySelector('.hou-hand');

function setDate() {
  const today = new Date();

  const sec = today.getSeconds();
  const min = today.getMinutes();
  const hou = today.getHours();

  const secDeg = ((sec / 60) * 360) + 90;
  const minDeg = ((min / 60) * 360) + 90;
  const houDeg = ((hou / 12) * 360) + 90;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  houHand.style.transform = `rotate(${houDeg}deg)`;

  playSound();
}

function playSound() {
  const tickSound = document.querySelector('audio');

  tickSound.currentTime = 0;
  tickSound.play();
}

setInterval(setDate, 1000);