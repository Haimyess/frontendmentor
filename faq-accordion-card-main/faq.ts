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



function createQuestion() {

}

function displayData(data) {
  //   console.log(data);

  if (!data) throw new Error("There is no data to display");

  //  FAQ wrapper
  const faqWrapper = document.getElementById("faq");
  //   const divContainer = document.createElement("div");
  faqWrapper?.classList.add("faq-container");

  for (const question of data) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionTitle = document.createElement("p");
    questionTitle.textContent = question.title;
    questionTitle.classList.add("question-title");


    const questionText = document.createElement("p");
    questionText.textContent = question.text;
    questionText.classList.add("hide", "text");



    const questionArrow = document.createElement("img");
    questionArrow.src = "/faq-accordion-card-main/images/icon-arrow-down.svg";
    questionArrow.classList.add("arrow");


    questionDiv.append(questionTitle, questionText, questionArrow);
    faqWrapper?.appendChild(questionDiv);

    questionDiv.addEventListener("click", () =>
      toggleShow(questionText, questionTitle, questionArrow, questionDiv)
    );
  }
}

function toggleShow(selected, title, arrow, div) {

    if(!selected || !title) throw new Error('Missing requirements')
  const current = !selected.classList.contains("hide");

  const content = [...document.querySelectorAll(".text")];
  for (const question of content) question.classList.add("hide");
  
  const titles = [...document.querySelectorAll(".question-title")];
  for (const title of titles) {
    title.classList.remove("question-title--selected");

  }


//   Check this part and make the arrow come back to normal state
  const divs = [...document.querySelectorAll(".question")];
  for (const div of divs) {
    console.log(div)
    // div.classList.remove("active");

  }

  if (!current) {
    selected.classList.toggle("hide");
    title.classList.add("question-title--selected");
    arrow.classList.add('active')
  }

  // current.classList.toggle('hide')
}

displayData(dataFaqs);