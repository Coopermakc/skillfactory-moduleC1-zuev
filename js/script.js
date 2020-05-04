
const $ = (e) => new jQuery(e);


const minutes = $('.minutes');
const seconds = $('.seconds');
const plusMin = $('.plus-min');
const minusMin = $('.minus-min');
const plusSec = $('.plus-sec');
const minusSec = $('.minus-sec');
const start = $('.start');
const timer = $('.countdown').first();
const message = $('.message');
const reset = $('.reset');
const reload = $('.reload');


let countMin = 0;
let countSec = 0;

// вставляем цифры в блоки
const updateText = () => {
  minutes.html((0 + String(countMin)).slice(-2));
  seconds.html((0 + String(countSec)).slice(-2));
}

//таймеры
const countDown = () => {
  let total = countSec + countMin*60;
  const timeinterval = setTimeout(countDown,1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.html('<p>Finished</p>');
    reload.first().style.display = 'block';
  }
  if (countSec > 0) {
    countSec--;
  } else {
    countMin--;
    countSec = 59;
  }
  updateText();
}

// увеличиваем минуты
plusMin.click(() => {
  if (countMin < 59) {
    countMin++;
  } else {
    countMin = 0
  }
  updateText();
});

//уменьшаем минуты
minusMin.click(() =>{
  if (countMin <= 0) {
    countMin = 59
  } else {
    countMin--;
  }
  updateText();
});

//увеличиваем секунды
plusSec.click(() => {
  if (countSec < 59) {
    countSec++;
  } else {
    countSec = 0
  }
  updateText();
});

//уменьшаем секунды
minusSec.click(() =>{
  if (countSec <= 0) {
    countSec = 59
  } else {
    countSec--;
  }
  updateText();
});

//запуск таймера
start.click(() => {
  start.first().style.display = 'none';
  reset.first().style.display = 'block';
  countDown();
});

//сброс таймера
reset.click(()=>{
  document.location.reload();
});

//перезапуск после завершения
reload.click(() => {
  document.location.reload();
});
