import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const myDate = ()=> {
  const clock = document.querySelector('.date');
  setInterval(() => {
    const timeNow = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    clock.textContent = timeNow;
  }, 1000);
}
myDate();