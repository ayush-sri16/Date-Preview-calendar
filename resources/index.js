let monthIndex = new Date().getMonth();
const monthDisplay = document.getElementById("months");
const weekDayDisplay = document.querySelector(".date p");
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();

const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay()-1;
console.log(firstDay);

const dayEl= document.querySelector(".days")

const monthArr = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December"
]

monthDisplay.innerHTML = monthArr[monthIndex];

weekDayDisplay.innerHTML = new Date().toDateString();

// let days = "";
// for(let i=firstDay;i>-7;i--){
//     days= days +`<div></div>`;
// }

// for (let i = 1; i <= lastDay; i++) {
//     if(i===new Date().getDate()){
//         days+=`<div class="today">${i}</div>`;
//     }else{
//         days+=`<div class="today">${i}</div>`;
//     }
//     days= days +`<div>${i}</div>`;
// }
let days = "";

for (let i = firstDay; i > -7; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

dayEl.innerHTML=days;
