"use strict";
/** @format */
// Make a component in wich we select the text and get a tooltip, which can make the p on the page selected with the color we choose, bolded, etc
// Make changes depending on the button we selected
// const selectedText = window.getSelection()
// console.log(selectedText);
// console.log(window)
let selectedText;
let wrapperText;
const boldButton = document.getElementById("bold");
const highlightButton = document.getElementById("highlight");
document.addEventListener("selectionchange", onSelectText);
// Get the selected text
function onSelectText() {
    var _a;
    selectedText = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0);
    // selectedText = window.getSelection()?.toString();
    console.log(selectedText);
    //   Wrap the selcted in a span, that way i can ope the tooltip just above it.
    wrapperText = document.createElement("span");
    wrapperText.textContent = selectedText;
    wrapperText.classList.add("selected");
    const text = document.getElementById("text");
    text === null || text === void 0 ? void 0 : text.appendChild(wrapperText);
    console.log(wrapperText);
    tooltip(selectedText);
}
function tooltip(text) {
    const tooltip = document.getElementById("tooltip");
    text == ""
        ? tooltip === null || tooltip === void 0 ? void 0 : tooltip.classList.add("hide")
        : tooltip === null || tooltip === void 0 ? void 0 : tooltip.classList.remove("hide");
    //   if (!text) return errorMessage();
}
function errorMessage() {
    window.alert("You should select some text");
}
boldButton === null || boldButton === void 0 ? void 0 : boldButton.addEventListener("click", () => {
    // Wrap text in a span to be able to add style
    console.log("in the button", wrapperText);
    wrapperText.style.color = "red";
    // console.log('in the button');
    // wrapperText.classList.toggle('.boldText');
    // selectedText
    // Add when click
    // Remove it
    // I could toggle the style maybe
});
highlightButton === null || highlightButton === void 0 ? void 0 : highlightButton.addEventListener("click", () => {
    // Wrap text in a span to be able to add style
    // selectedText
    // Open the picker to select the color
});
// testing
const title = document.querySelector("h1");
const button = document.getElementById("change");
button === null || button === void 0 ? void 0 : button.addEventListener("click", changeColor);
function changeColor() {
    title.style.color = "red";
}
