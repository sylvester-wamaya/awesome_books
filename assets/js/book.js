let books = JSON.parse(localStorage.getItem('bookData')) || [];

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#list');


// Book class
class Book {
  constructor() {
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
  }

  // Remove book function takes 'book' parameter from 'displayAllBooks' function and
  // removes only that element and update local Storage
  removeBook(id) {
    let bookData = JSON.parse(localStorage.getItem('bookData'));
    bookData = bookData.filter((local) => local.id !== parseInt(id, 10));
    books = bookData;
    localStorage.setItem('bookData', JSON.stringify(books));
  }

  // Clears any previous book list and loops through each book element creating the elements and
  // calling the 'removeBook' function when user clicks the remove btn
  displaylist() {
    books.forEach((book) => {
      const bookCard = document.createElement('li');
      const removeButton = document.createElement('button');
      const hr = document.createElement('hr');
  
      bookCard.innerHTML += `    
      <p>${book.title}</p>
      <p>${book.author}</p>  
         `;
      bookCard.id = `data-${book.id}`;
      removeButton.textContent = 'Remove';
      removeButton.dataset.id = book.id;
      removeButton.addEventListener('click', (e) => {
        const { id } = e.target.dataset;
        this.removeBook(id);
        const bookEl = document.getElementById(`data-${book.id}`);
        bookList.removeChild(bookEl);
        window.location.reload();
      });
      bookCard.appendChild(removeButton);
      bookCard.appendChild(hr);
      bookList.appendChild(bookCard);
    });
  }

  addBook(title, author) {
    if (title !== '' && author !== '') {
      const book = {
        id: books.length + 1,
        title,
        author,
      };
  
      books.push(book);
      localStorage.setItem('bookData', JSON.stringify(books));
    }
  }
  
}

const newBook = new Book();
newBook.displaylist(); // display all books by default

// Listen when form is busmitted and call addBook function with parameters then display all books
// if not empty and show error message if it is

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    newBook.addBook(formTitle.value, formAuthor.value);
  
    formTitle.value = '';
    formAuthor.value = '';
    window.location.reload();
  });
