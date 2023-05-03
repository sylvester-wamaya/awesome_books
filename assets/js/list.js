const books = JSON.parse(localStorage.getItem('bookData')) || [];;


const bookForm = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');


function addBook(title, author) {
  if(title !="" && author !=""){
  let book = {
    id: getRandomInt(),
    title: title,
    author: author
  };
  return book;
}}
function getRandomInt() {
  return Math.floor(Math.random() * 1000)
}



const bookList = document.querySelector('#list')
const bookCard = document.createElement('li')
const removeButton = document.createElement('button')

const data = JSON.parse(localStorage.getItem("bookData"))
if(data){
  data.forEach((book)=>{
    bookCard.innerHTML += `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove" data-id=${book.id}>Remove</button>
    <hr>
    <br>`
    })
}

bookForm.addEventListener('click', ()=>{

  const bookAdd = addBook(formTitle.value, formAuthor.value);
  
 
 
  const localBook = {
    id: bookAdd.id,
    title: bookAdd.title,
    author: bookAdd.author
  }

  books.push(localBook)
  
localStorage.setItem("bookData", JSON.stringify(books))

  bookCard.innerHTML += `
<p>${bookAdd.title}</p>
<p>${bookAdd.author}</p>
<button class="remove" data-id=${bookAdd.id}>Remove</button>
<hr>
<br>`
bookList.appendChild(bookCard);

formTitle.value = ""
formAuthor.value = ""
});

bookList.appendChild(bookCard);


function removeBook(bookId) {  
  const filteredBooks = data.filter((book) => book.id !== bookId);
  localStorage.setItem("bookData", JSON.stringify(filteredBooks))
  
 window.location.reload
  }

Array.from(document.querySelectorAll(".remove")).forEach((btn)=>{
  btn.addEventListener("click",()=>{removeBook(btn.dataset.id)})
})
console.log(books)
console.log(data)


