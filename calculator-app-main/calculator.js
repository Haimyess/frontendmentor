/** @format */

const initVal = 0;
let currVal;
let show = "";
// click a number
// add number to the show result
// if i add another number, it will be replaced with the new one
// if i add another operation to the cal, it will do it automatically
//  if not, we need to press the equal to show result

const numbers = [...document.getElementsByClassName("number")];

numbers.forEach((num) => {
  return num.addEventListener("click", (e) => selectNum(e));
});

function selectNum(e) {
  console.log(e.target.textContent);
  currVal = e.target.textContent;
  show += currVal;
  display(show);

  // console.log(numbers);
}

const sumBtn = document.getElementById("sum");
sumBtn.addEventListener("click", sum);

function sum() {}

function min() {}

function multiplication() {}

function division() {}

function display(curr) {
  // select result show
  const show = document.querySelector(".result");

  // add curr to result

  show.textContent = curr;

  //   if the current is more than one i need to concatenate them
}

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", reset);

function reset() {
  show = initVal.toString();
  display(show);
  currVal = 0;
}
