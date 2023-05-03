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

}  
  
  