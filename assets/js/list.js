
let books = JSON.parse(localStorage.getItem('bookData')) || [];;


const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#list')



function addBook(title, author) {
  if(title !="" && author !=""){
  let book = {
    id: books.length + 1,
    title,
    author
  };
  
  books.push(book)
  localStorage.setItem("bookData",JSON.stringify(books))
}}


function removeBook(id) {  
  books = books.filter((book) => book.id !== id);
  let bookData = JSON.parse(localStorage.getItem('bookData'));
  bookData = bookData.filter((local) => local.id !== parseInt(id, 10));
  localStorage.setItem('bookData', JSON.stringify(bookData));
  books = bookData
 
  }

function displaylist(){

  books.forEach((book)=>{
    const bookCard = document.createElement('li')
    const removeButton = document.createElement("button")
    const hr = document.createElement("hr")

    bookCard.innerHTML += `    
    <p>${book.title}</p>
    <p>${book.author}</p>  
       `
    bookCard.id = `data-${book.id}`
    removeButton.textContent = "Remove"
    removeButton.dataset.id = book.id
    removeButton.addEventListener("click", (e)=>{
      const {id} = e.target.dataset
      removeBook(id)
      const bookEl = document.getElementById(`data-${book.id}`)
      bookList.removeChild(bookEl)
    })
    bookCard.appendChild(removeButton)
    bookCard.appendChild(hr)
    bookList.appendChild(bookCard)
    })
}

addButton.addEventListener('click', (e)=>{
e.preventDefault()
  addBook(formTitle.value, formAuthor.value);
  
formTitle.value = ""
formAuthor.value = ""
location.reload()
});


displaylist()





