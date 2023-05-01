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

function addBooks(title, author){
  const book = { title: title, author: author}
  books.push(book);
}



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

bookList.appendChild(bookCard)