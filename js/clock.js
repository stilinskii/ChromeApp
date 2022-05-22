const clock = document.getElementById('clock');

function getClock() {
  const date = new Date(); // number to string
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const Seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${Seconds}`;
}

getClock(); //페이지가 로드되면 바로 시간을 보여주기 so cool~
setInterval(getClock, 1000);
// setTimeout(getClock, 5000);
