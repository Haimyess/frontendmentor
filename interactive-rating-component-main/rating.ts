/** @format */


const ratingForm = document.querySelector<HTMLElement>("#rating-form");
let checkEl = "";

ratingForm?.addEventListener("submit", (e) => submitRating(e));

// Submit the data 
function submitRating(e: SubmitEvent) {
  e.preventDefault();
  getRatingVal();
  if (!checkEl) return console.log("Please select one!");
 
  showThanks();
}

// Get the rate selected by the user
function getRatingVal() {
  const ratingInputs = [...document.getElementsByName("rating")];

  for (let i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      checkEl = ratingInputs[i].value;
    //   console.log(checkEl);
    }
  }
}

// Show the Thanks message after submiting the form succewsfully
function showThanks() {
  // function showMessage(msg: string, isValue: boolean) {
  const formDiv = document.getElementById("rate");
  const thankYouDiv = document.querySelector<HTMLElement>("#thankyou");

  formDiv?.classList.add("hide");
  thankYouDiv?.classList.remove("hide");
  thankYouDiv?.classList.add("show");
  
}
