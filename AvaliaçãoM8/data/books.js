let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949, genre: "Distopia" },
  { id: 2, title: "Dom Quixote", author: "Miguel de Cervantes", year: 1605, genre: "Aventura" }
];
let nextId = 3;

function addBook(book) {
  book.id = nextId++;
  books.push(book);
  return book;
}

function getBooks() {
  return books;
}

function searchBooks({ title, author, year, genre }) {
  return books.filter(book =>
    (title ? book.title.includes(title) : true) &&
    (author ? book.author.includes(author) : true) &&
    (year ? book.year === parseInt(year) : true) &&
    (genre ? book.genre.includes(genre) : true)
  );
}

function updateBook(id, updatedBook) {
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index !== -1) {
    books[index] = { id : parseInt(id), ...updateBook}
    return books[index];
  }
  return null;
}

function deleteBook(id) {
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
}

function validateBookData({ title, author, year, genre }) {
  if (!title) return "O campo 'title' é obrigatório.";
  if (!author) return "O campo 'author' é obrigatório.";
  if (!year || isNaN(parseInt(year))) return "O campo 'year' deve ser um número válido.";
  if (!genre) return "O campo 'genre' é obrigatório.";
  return null;
}

module.exports = { 
  books,
  addBook, 
  getBooks, 
  searchBooks, 
  updateBook, 
  deleteBook, 
  validateBookData
};
