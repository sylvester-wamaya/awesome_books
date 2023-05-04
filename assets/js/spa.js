//write a display page function
// use addEventListeners to the pages links
let displayBooks = document.getElementById('display-div');
let navbarDisplaylink = getElementById('display-list');
let displayAddBook = document.getElementById('display-div');
let navbarAddlink = getElementById('display-add');
let displayContact = document.getElementById('contact-div');
let navbarContactlink = getElementById('display-contact');
  
navbarDisplaylink.addEventListener('click', () => {
  displayBooks.classList.remove('hidden');
})

navbarAddlink.addEventListener('click', () => {
  displayAddBook.classList.remove('hidden');
})

navbarContactlink.addEventListener('click', () => {
  displayContact.classList.remove('hidden');
})