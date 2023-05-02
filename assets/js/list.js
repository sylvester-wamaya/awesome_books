let books = [
  {
    id: 1,
    title: 'title1',
    author: 'Didy',
  },
  {
    id: 2,
    title: 'title2',
    author: 'Sylvester',
  },
  {
    id: 3,
    title: 'title3',
    author: 'Raphael',
  },
];

/* */

const titleInput = document.getElementById('title').value;
const authorInput = document.getElementById('author').value;

/*
class Book {
    constructor(title, author){
      this.title = title;
      this.author = author;
    }

    updateBook(updatedTtitle) {
      this.title = updatedTtitle;
    }

    removeBook(book) {
      const filteredBook = books.filter((book) => book.title !== book);
      return filteredBook;
    }

  }

  const addButton = document.getElementById('addBook');
  addButton.addEventListener('submit', () => {
  const newBook = new Book(
    titleInput.value,
    authorInput.value, 
  );
  books.push(newBook);
  return books;
  }); 
*/

function addBook() {
  let book = {titleInput, authorInput};
  books.push(book);
  return books;
}


const addButton = document.getElementById('addBook');
addButton.addEventListener('submit', addBook);


function removeBook(books) {
  const filteredBook = books.filter((book) => book.title !== book);
  return filteredBook;
}


const bookList = document.querySelector('#list')
const bookCard = document.createElement('li')
const removeButton = document.createElement('button')
books.forEach((book)=>{
bookCard.innerHTML += `
<p>${book.title}</p>
<p>${book.author}</p>
<button>Remove</button>
<hr>
<br>`
})

bookList.appendChild(bookCard);

/*



const addButton1 = document.getElementById('addBook1');
addButton1.addEventListener('submit', addBook1);
*/
