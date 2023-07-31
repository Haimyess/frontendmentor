/** @format */

const resultBtn = document.querySelector(".result-btn");

resultBtn?.addEventListener("click", getValues);

// function checkValues() {

// }
function getValues() {
  // checkValues()

  let year, month, day;

  const inputs = [...document.querySelectorAll("input")];

  day = inputs[0].value;
  month = inputs[1].value;
  year = inputs[2].value;

  calculateAge(day, month, year);
}

//  getValues()

function calculateAge(dayVal: string, monthVal: string, yearVal: string) {
  // get current date
  // const birthday = `${dayVal}/${monthVal}/${yearVal}`
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const yearCount = currentYear - Number(yearVal);

  const currentMonth = currentDate.getMonth() + 1;
  const monthCount = currentMonth - Number(monthVal);

  const currentDay = currentDate.getDate();
  const dayCount = currentDay - Number(dayVal);

  displayAge(yearCount, monthCount, dayCount);
}

function displayAge(year: number, month: number, day: number) {
  if (month > 0) {
    const monthOutput = (document.getElementById("months")?.innerText = month);
  }

  const text = document.querySelector(".output-wrapper :nth-child(2)");
  // console.log(text);
  text?.classList.add("hide");

  const yearOutput = (document.getElementById("years")?.innerText = year);

  const dayOutput = (document.getElementById("days")?.innerText = day);
}
