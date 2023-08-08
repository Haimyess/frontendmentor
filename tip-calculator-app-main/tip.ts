
const btns = [...document.querySelectorAll("button")];
btns.forEach((btn) => btn.addEventListener("click", (e) => getPercentage(e)));

function getPercentage(e) {
  const percentageSelected = e.target.value;

  calculateTip(percentageSelected);
}

function calculateTip(percentage : Number) {
  const bill = document.getElementById("bill-val");

  if(bill == null) throw new Error('Bill is undefined')
  const billValue = bill.value;

  const totalTipVal = (percentage / 100 ) * billValue;

  const tipString = totalTipVal.toString();

  // Display
  const displayTotalTip = document.getElementById("total-tip");

  displayTotalTip.textContent = tipString;

  tipPerPersonValue(totalTipVal);
}

function tipPerPersonValue(total : Number) {
  // display
  const displayTipPerPerson = document.getElementById("tip-person");

  // Get num of people
  const num = document.getElementById("people-selected");
  const numOfPeople = getPeople(num);

  const tipPerPerson = (total / numOfPeople).toString();

  displayTipPerPerson.textContent = tipPerPerson;
}

function getPeople(num) {
  if (!num.value || num.value < 1 || num.value === "") {
    throw new Error("You should add a number");
  } else {
    return num.value;
  }
}

function resetCalc() {}

function showDetails() {}
