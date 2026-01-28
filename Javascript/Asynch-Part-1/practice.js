/*
Timer + Countdown App
🔹 Features:
Start timer (seconds)
Countdown show ho
Stop when 0
Button based UI
🔹 Basic Logic (JS only)
*/
let time = 10;

let timer = setInterval(() => {
  console.log(time);
  time--;
  if (time < 0) {
  clearInterval(timer);
  console.log("Time Up!");
    }
}, 1000);