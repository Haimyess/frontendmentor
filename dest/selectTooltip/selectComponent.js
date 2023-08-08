"use strict";
/** @format */
// Make a component in wich we select the text and get a tooltip, which can make the p on the page selected with the color we choose, bolded, etc
// Make changes depending on the button we selected
// const selectedText = window.getSelection()
// console.log(selectedText);
// console.log(window)
let selectedText;
const boldButton = document.getElementById('bold');
const highlightButton = document.getElementById('highlight');
boldButton === null || boldButton === void 0 ? void 0 : boldButton.addEventListener('click', () => {
    selectedText;
});
document.addEventListener("selectionchange", onSelectText);
// Get the selected text
function onSelectText() {
    var _a;
    selectedText = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString();
    console.log(selectedText);
    tooltip();
}
function tooltip() {
    //   if (!text) return errorMessage();
    // Open tooltip
    const tooltip = document.getElementById("tooltip");
    tooltip === null || tooltip === void 0 ? void 0 : tooltip.classList.remove("hide");
}
function errorMessage() {
    window.alert("You should select some text");
}
