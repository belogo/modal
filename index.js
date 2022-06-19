// we need an event listener just attaches to an element (like a light switch) - in this case a DOM element, our button(s)!
// DOM elements = anything you see on the page on the document (divs, buttons, tables, links--any HTML element!divs, buttons, tables, links--any HTML element!)
// you can switch out "click" or be other types of DOM events (keydown, mouseover), any sort of event that a user can do, you can capture user actions using event listeners!

const openModalBtn = document.querySelector('#open-modal-btn')
const modalDialog = document.querySelector('#overlay')
const closeModalBtn = document.querySelector('#close-modal-btn')


openModalBtn.addEventListener('click', function(){
    modalDialog.style.display = "flex";
    openModalBtn.style.boxShadow = "none";
    openModalBtn.style.outline = "none";
})


closeModalBtn.addEventListener('click', function(){
    modalDialog.style.display = "none";
})

openModalBtn.addEventListener('mouseout', function(){
    openModalBtn.style.boxShadow = "none";
    openModalBtn.style.transition = ".5s";
})

openModalBtn.addEventListener('mouseover', function(){
    openModalBtn.style.boxShadow = "6px 6px #333";
    openModalBtn.style.transition = ".5s";
})

