import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const createBtn = document.querySelector('button');

let counter;
let delayedTime;

form.addEventListener('submit', onCreate);

function onCreate(evt) {
  evt.preventDefault();

  counter = 0;
  delayedTime = 0;

  let delay = Number(firstDelay.value);
  const step = Number(delayStep.value);
  const promiseAmount = Number(amount.value);

  if (!promiseAmount) {
    return;
  } else {
    createBtn.disabled = true;
  }

  setTimeout(() => {
    counter += 1;
    delayedTime += delay;

    createPromise(counter, delay);
    if (counter === promiseAmount) {
      return;
    }

    const IntervalId = setInterval(() => {
      counter += 1;
      delayedTime += step;

      if (counter === promiseAmount) {
        createBtn.disabled = false;
        clearInterval(IntervalId);
      }
      createPromise(counter, delayedTime);
    }, step);
  }, delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    if (shouldResolve) {
      // Fulfill
      res({ position, delay });
    } else {
      // Reject
      rej({ position, delay });
    }
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
