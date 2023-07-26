"use strict";
// const dataObj = {
//     title: ,
//     content: ,
//     author: ,
//     date: ,
// }
// Creation of the card
// function createCard(data : Object) {
// Create image
// Create title
// Create content
// 
// }
// createCard()
// Creation of the button
function createButton() {
    // Add event listener here
}
console.log('hi');
// The author class we will change the content
// let isShow = false;
const shareBtn = document.getElementById('share');
console.log(shareBtn);
shareBtn === null || shareBtn === void 0 ? void 0 : shareBtn.addEventListener('click', share);
// Button functionality
function share() {
    // isShow = true;
    // select author
    const authorSection = document.getElementById('author');
    authorSection === null || authorSection === void 0 ? void 0 : authorSection.classList.toggle('hide');
    const tooltip = document.getElementById('tooltip');
    tooltip === null || tooltip === void 0 ? void 0 : tooltip.classList.toggle('hide');
    const shareContainer = document.querySelector('.share');
    shareContainer === null || shareContainer === void 0 ? void 0 : shareContainer.classList.toggle('active');
    // if(isShow) {}
}
