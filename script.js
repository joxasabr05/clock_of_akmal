// const hours1 = document.querySelector("#hours");
// const minutes1 = document.querySelector("#minutes");
// const seconds1 = document.querySelector("#seconds");

// const day1 = document.querySelector("#kun");
// const month1 = document.querySelector("#oy");
// const year1 = document.querySelector("#yil");

// const clock1 = document.querySelector(".soat1"),
//   clock2 = document.querySelector(".soat2"),
//   clock3 = document.querySelector(".soat3"),
//   clock4 = document.querySelector(".soat4"),
//   clock5 = document.querySelector(".soat5"),
//   clock6 = document.querySelector(".soat6"),
//   clock7 = document.querySelector(".soat7"),
//   clock8 = document.querySelector(".soat8"),
//   clock9 = document.querySelector(".soat9");

// let clock = setInterval(function () {
//   let data = new Date();
//   let hh = data.getHours();
//   let mm = data.getMinutes();
//   let ss = data.getSeconds();

//   if (hh > 12) {
//     hh = 12;
//     clock2.style.opacity = 1;
//   }
//   if (hh < 12) {
//     clock1.style.opacity = 1;
//     clock2.style.opacity = 0.2;
//   }
//   if (hh == 0) {
//     hh = 112;
//   }
//   let day = data.getDate();
//   let month = data.getMonth();
//   let year = data.getFullYear();
//   let dayWeek = data.getDay();
//   month = month + 1;

//   hours1.innerHTML = hh;
//   minutes1.innerHTML = mm;
//   seconds1.innerHTML = ss;
//   day1.innerHTML = day;
//   month1.innerHTML = month;
//   year1.innerHTML = year;
//   if (hh < 10) {
//     hours1.innerHTML = "0" + hh;
//   }

//   if (month < 10) {
//     month1.innerHTML = "0" + month;
//   }
//   if (day < 10) {
//     day1.innerHTML = "0" + day;
//   }
//   if (mm < 10) {
//     minutes1.innerHTML = "0" + mm;
//   }
//   if (ss < 10) {
//     seconds1.innerHTML = "0" + ss;
//   }
//   switch (dayWeek) {
//     case 0:
//       clock3.style.opacity = 1;
//       break;
//     case 1:
//       clock4.style.opacity = 1;
//       break;
//     case 2:
//       clock5.style.opacity = 1;
//       break;
//     case 3:
//       clock6.style.opacity = 1;
//       break;
//     case 4:
//       clock7.style.opacity = 1;
//       break;
//     case 5:
//       clock8.style.opacity = 1;
//       break;
//     case 6:
//       clock9.style.opacity = 1;
//       break;
//   }
// });

// ------------------------------------------------------==============================================
// neyroset ispravleno

const hours1 = document.querySelector("#hours");
const minutes1 = document.querySelector("#minutes");
const seconds1 = document.querySelector("#seconds");

const day1 = document.querySelector("#kun");
const month1 = document.querySelector("#oy");
const year1 = document.querySelector("#yil");

const clock1 = document.querySelector(".soat1"),
  clock2 = document.querySelector(".soat2"),
  clock3 = document.querySelector(".soat3"),
  clock4 = document.querySelector(".soat4"),
  clock5 = document.querySelector(".soat5"),
  clock6 = document.querySelector(".soat6"),
  clock7 = document.querySelector(".soat7"),
  clock8 = document.querySelector(".soat8"),
  clock9 = document.querySelector(".soat9");

let clock = setInterval(function () {
  let data = new Date();
  let hh = data.getHours();
  let mm = data.getMinutes();
  let ss = data.getSeconds();

  if (hh >= 12) {
    hh = hh % 12;
    clock1.style.opacity = 1;
  }
  if (hh < 12) {
    clock2.style.opacity = 1;
    clock1.style.opacity = 0.2;
    console.log("ok");
  }
  if (hh == 0) {
    hh = 12;
  }
  let day = data.getDate();
  let month = data.getMonth();
  let year = data.getFullYear();
  let dayWeek = data.getDay();
  month = month + 1;

  hours1.innerHTML = hh;
  minutes1.innerHTML = mm;
  seconds1.innerHTML = ss;
  day1.innerHTML = day;
  month1.innerHTML = month;
  year1.innerHTML = year;
  if (hh < 10) {
    hours1.innerHTML = "0" + hh;
  }

  if (month < 10) {
    month1.innerHTML = "0" + month;
  }
  if (day < 10) {
    day1.innerHTML = "0" + day;
  }
  if (mm < 10) {
    minutes1.innerHTML = "0" + mm;
  }
  if (ss < 10) {
    seconds1.innerHTML = "0" + ss;
  }
  switch (dayWeek) {
    case 0:
      clock3.style.opacity = 1;
      break;
    case 1:
      clock4.style.opacity = 1;
      break;
    case 2:
      clock5.style.opacity = 1;
      break;
    case 3:
      clock6.style.opacity = 1;
      break;
    case 4:
      clock7.style.opacity = 1;
      break;
    case 5:
      clock8.style.opacity = 1;
      break;
    case 6:
      clock9.style.opacity = 1;
      break;
  }
});
