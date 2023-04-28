import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('input');
const startButton = document.querySelector('button');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startButton.disabled = true;
let selectedData = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedData = selectedDates[0];

    if (selectedData <= new Date()) {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }

    if (selectedData > new Date()) {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', startTimer);

function startTimer() {
  if (selectedData <= new Date()) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  startButton.disabled = true;
  input.disabled = true;
  let idInterval = null;

  idInterval = setInterval(() => {
    const leftTime = selectedData - new Date();

    days.textContent = addLeadingZero(convertMs(leftTime).days);
    hours.textContent = addLeadingZero(convertMs(leftTime).hours);
    minutes.textContent = addLeadingZero(convertMs(leftTime).minutes);
    seconds.textContent = addLeadingZero(convertMs(leftTime).seconds);
    console.log(leftTime);
    if (leftTime <= 1000) {
      clearInterval(idInterval);
      input.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
