"use strict";
/** @format */
const ratingForm = document.querySelector("#rating-form");
let checkEl = "";
ratingForm === null || ratingForm === void 0 ? void 0 : ratingForm.addEventListener("submit", (e) => submitRating(e));
// Submit the data 
function submitRating(e) {
    e.preventDefault();
    getRatingVal();
    if (!checkEl)
        return console.log("Please select one!");
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
    const thankYouDiv = document.querySelector("#thankyou");
    const messageSelect = document.getElementById('message-selection');
    const strMsg = `You selected ${checkEl} out of 5`;
    messageSelect.textContent = strMsg;
    formDiv === null || formDiv === void 0 ? void 0 : formDiv.classList.add("hide");
    thankYouDiv === null || thankYouDiv === void 0 ? void 0 : thankYouDiv.classList.remove("hide");
    thankYouDiv === null || thankYouDiv === void 0 ? void 0 : thankYouDiv.classList.add("show");
}
