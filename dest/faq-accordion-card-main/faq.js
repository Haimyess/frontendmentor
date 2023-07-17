"use strict";
/** @format */
const dataFaqs = [
    {
        id: 1,
        title: "How many team members can I invite?",
        text: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        title: "What is the maximum file upload size",
        text: "No more than 2GB. ALl files in your account must fit your allotted storage space",
    },
    {
        id: 3,
        title: "How do I rest my password",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eum?",
    },
    {
        id: 4,
        title: "Can I cancel my subscription?",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates odio pariatur!",
    },
    {
        id: 5,
        title: "Do you provide additional support",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corrupti doloribus rerum molestiae expedita ipsam omnis veritatis? Repudiandae, ipsam quidem.",
    },
];
// ------------------
// display all data
// ------------------
// div containeing each question
// p containing the question
// another p containing the text
// Div containing the title and the textof each question
// let questionDiv;
function displayData(data) {
    console.log(data);
    if (!data)
        throw new Error("There is no data to display");
    //  FAQ wrapper
    const faqWrapper = document.getElementById('faq');
    //   const divContainer = document.createElement("div");
    faqWrapper === null || faqWrapper === void 0 ? void 0 : faqWrapper.classList.add('faq-container');
    //   looping the data
    for (const question of dataFaqs) {
        console.log(question);
        // Every loop i create a div
        const questionDiv = document.createElement("div");
        questionDiv.classList.add('question');
        // Each div will have 2 paragraphs containing the title and the text
        const questionTitle = document.createElement("p");
        const questionText = document.createElement("p");
        const questionArrow = document.createElement('img');
        questionArrow.src = '/faq-accordion-card-main/images/icon-arrow-down.svg';
        questionArrow.classList.add('arrow');
        questionTitle.textContent = question.title;
        questionTitle.classList.add('question-title');
        questionText.textContent = question.text;
        questionText.classList.add('hide', 'text');
        // I will append the text and title to the div
        questionDiv.append(questionTitle, questionText, questionArrow);
        // And the div contaning the title and the text will be appended to the wrapper div
        faqWrapper === null || faqWrapper === void 0 ? void 0 : faqWrapper.appendChild(questionDiv);
    }
    // faqWrapper?.appendChild(divContainer)
}
displayData(dataFaqs);
// ---------------------------
// create function to open
// ---------------------------
// when one is selected close the other one
const questions = [...document.querySelectorAll('.question')];
questions.forEach(question => {
    return question.addEventListener('click', (e) => toggleShow(e));
});
function toggleShow(e) {
    // if is the current
    for (const acc of questions) {
        acc.classList.add('hide');
    }
    console.log('Clicked', e.target);
    const target = e.target;
    const text = target.nextSibling;
    //   console.log(text)
    text.classList.toggle('hide');
    //   text.classList.remove('hide')
    //   text.classList.add('show')
    if (!target) {
        target.classList.add('show');
    }
}
