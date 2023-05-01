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

addBooks('book4', 'author');
console.log(books)


function removeBook(books) {
  const filteredBook = books.filter((book) => book.title !== book);
  return filteredBook;
}

removeBook(books);
console.log(books)
