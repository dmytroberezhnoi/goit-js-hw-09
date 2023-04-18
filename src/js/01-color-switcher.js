const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

buttonStartEl.addEventListener('click', changeColors);
buttonStopEl.addEventListener('click', stopChangeColors);
let idInterval = null;

function changeColors() {
  idInterval = setInterval(() => {
    let randomColor = getRandomHexColor();

    bodyEl.style.backgroundColor = randomColor;
  }, 1000);

  buttonStartEl.disabled = true;
  buttonStopEl.disabled = false;
}

function stopChangeColors() {
  clearInterval(idInterval);
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
