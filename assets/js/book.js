let books = JSON.parse(localStorage.getItem('bookData')) || [];

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#list');

class Book {
  constructor() {
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
  }

  removeBook(id) {
    let bookData = JSON.parse(localStorage.getItem('bookData'));
    bookData = bookData.filter((local) => local.id !== parseInt(id, 10));
    books = bookData;
    localStorage.setItem('bookData', JSON.stringify(books));
    this.displaylist();
  }

  displaylist() {
    books.forEach((book) => {
      const bookCard = document.createElement('li');
      bookCard.classList.add('my-display-flex');
      const removeButton = document.createElement('button');
      removeButton.classList.add('my-button-container');
      const hr = document.createElement('hr');

      bookCard.innerHTML += `    
      <p class="my-display-flex my-title-container">'${book.title}' by ${book.author}</p>
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
      bookCard.classList.add('book-stack');
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
      this.displaylist();
    }
  }
}

const newBook = new Book();
newBook.displaylist();

// display all books by default

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  newBook.addBook(formTitle.value, formAuthor.value);

  formTitle.value = '';
  formAuthor.value = '';
  window.location.reload();
});