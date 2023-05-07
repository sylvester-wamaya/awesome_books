

const addButton = document.querySelector('#addBook');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const bookList = document.querySelector('#list');

class Book {
  constructor(title, author) {
    this.title = title
    this.author = author;
  }
}

class Library{
  constructor(){
    this.books = JSON.parse(localStorage.getItem('bookData')) || [];
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
      const removeButton = document.createElement('button');
      removeButton.classList.add('my-button-container');

      bookCard.innerHTML += `    
      <p class="my-title-container">'${book.title}' by ${book.author}</p>
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

const navList = document.getElementById('display-list');
const addNav = document.getElementById('display-add');
const contactNav = document.getElementById('display-contact');
const addSection = document.querySelector('.div');
const contactSection = document.querySelector('.contact-section');
const listSection = document.querySelector('.book-container');
const date = document.querySelector('#date');

navList.addEventListener('click', () => {
  addSection.style.display = 'none';
  contactSection.classList.add('hide');
  listSection.classList.remove('hide');
});

addNav.addEventListener('click', () => {
  listSection.classList.add('hide');
  contactSection.classList.add('hide');
  addSection.style.display = 'flex';
});

contactNav.addEventListener('click', () => {
  listSection.classList.add('hide');
  contactSection.classList.remove('hide');
  addSection.style.display = 'none';
});
date.innerHTML = `<small>${Date()}</small>`;
