const books = [
  {
    id: 1,
    title: 'title1',
    author: 'Didy',
  },
  {
    id: 2,
    title: 'title1',
    author: 'Sylvester',
  },
  {
    id: 3,
    title: 'title1',
    author: 'Raphael',
  },
];

/* */
function Books() {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }

  let books = []
  const addBook = (title, author) => {
    let book = new Books({
      title, 
      author
    });
    return books.push(book);
  }
}


const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

function addBook(title, author){
  const book = {
    title: title, 
    author: author,
  }
  books.push(book);
}
addBook()
console.log(books);


function removeBook(books) {
  const filteredBook = books.filter((book) => book.title !== book);
  return filteredBook;
}


const bookList = document.querySelector("#list")
const bookCard = document.createElement("li")
books.forEach((book)=>{
bookCard.innerHTML += `
<p>${book.title}</p>
<p>${book.author}</p>`
})

bookList.appendChild(bookCard);


const addButton = document.getElementById('addBook');
addButton.addEventListener('submit', addBook);