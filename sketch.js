const date1box = document.querySelector('#date1');
const date2box = document.querySelector('#date2');
const daySpan = document.querySelector(`#days`);

date1box.value = '2020-09-28';
date2box.value = '2020-09-30';
let date1 = new Date(date1box.value);
let date2 = new Date(date2box.value);
computeDays();

date1box.addEventListener('input', () => {
    date1 = new Date(date1box.value);
    console.log(date1);
    computeDays();
});

date2box.addEventListener('input', () => {
    date2 = new Date(date2box.value);
    console.log(date2);
    computeDays();
});

function computeDays() {
    let days = Math.abs((date2-date1)/1000/60/60/24);
    daySpan.textContent = days;
}