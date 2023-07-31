"use strict";
/** @format */
const resultBtn = document.querySelector(".result-btn");
resultBtn === null || resultBtn === void 0 ? void 0 : resultBtn.addEventListener("click", getValues);
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
function calculateAge(dayVal, monthVal, yearVal) {
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
function displayAge(year, month, day) {
    var _a, _b, _c;
    const yearOutput = ((_a = document.getElementById("years")) === null || _a === void 0 ? void 0 : _a.innerText = year);
    const monthOutput = ((_b = document.getElementById("months")) === null || _b === void 0 ? void 0 : _b.innerText = month);
    const dayOutput = ((_c = document.getElementById("days")) === null || _c === void 0 ? void 0 : _c.innerText = day);
}
