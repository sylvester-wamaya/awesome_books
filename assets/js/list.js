const books = JSON.parse(localStorage.getItem('bookData')) || [];;


const bookForm = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');


function addBook(title, author) {
  let book = {
    title: title,
    author: author
  };
  return book;
}

function removeBook(books) {
  
const filteredBook = books.filter((book) => book.title !== book);
return filteredBook;
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
    <button>Remove</button>
    <hr>
    <br>`
    })
}

bookForm.addEventListener('click', ()=>{

  const bookAdd = addBook(formTitle.value, formAuthor.value);
  
 
 
  const localBook = {
    title: bookAdd.title,
    author: bookAdd.author
  }

  books.push(localBook)
  
localStorage.setItem("bookData", JSON.stringify(books))

  bookCard.innerHTML += `
<p>${formTitle.value}</p>
<p>${formAuthor.value}</p>
<button>Remove</button>
<hr>
<br>`
bookList.appendChild(bookCard);
});

bookList.appendChild(bookCard);
console.log(books)
console.log(data)

