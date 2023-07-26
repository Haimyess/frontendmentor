

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


console.log('hi')
// The author class we will change the content

// let isShow = false;

const shareBtn = document.getElementById('share')
console.log(shareBtn)
shareBtn?.addEventListener('click', share)
// Button functionality

function share() {
    // isShow = true;

    // select author
    const authorSection = document.getElementById('author')
    authorSection?.classList.toggle('hide')

    const tooltip = document.getElementById('tooltip')
    tooltip?.classList.toggle('hide')

    const shareContainer = document.querySelector('.share')
    shareContainer?.classList.toggle('active')

    // if(isShow) {}
   
}