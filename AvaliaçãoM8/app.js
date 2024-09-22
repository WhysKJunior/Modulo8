const express = require('express');
const app = express();

const createBook = require('./routes/books/createBook');
const deleteBook = require('./routes/books/deleteBook');
const getBooks = require('./routes/books/getBooks');
const searchBooks = require('./routes/books/searchBooks');
const updateBook = require('./routes/books/updateBook');

const createStudent = require('./routes/students/createStudent');
const getStudents = require('./routes/students/getStudents');
const deleteStudent = require('./routes/students/deleteStudent');
const searchStudents = require('./routes/students/searchStudents');
const updateStudent = require('./routes/students/updateStudent');

const createRental = require('./routes/rentals/createRental');
const updateRental = require('./routes/rentals/updateRental');
const deleteRental = require('./routes/rentals/deleteRental');
const searchRentals = require('./routes/rentals/searchRentals');
const getRentals = require('./routes/rentals/getRentals');

app.use(express.json());

// Rota de uso dos Livros (Books)
app.use('/livro', createBook);
app.use('/livro', deleteBook);
app.use('/livros', getBooks);
app.use('/livro', searchBooks);
app.use('/livro', updateBook);

// Rota de uso dos Estudantes (Students)
app.use('/estudante', createStudent);
app.use('/estudantes', getStudents);
app.use('/estudante', deleteStudent);
app.use('/estudante', searchStudents);
app.use('/estudante', updateStudent);

// Rota de uso dos Aluguéis (Rentals)
app.use('/aluguel', createRental);
app.use('/aluguel', deleteRental);
app.use('/alugueis', getRentals);
app.use('/aluguel', searchRentals);
app.use('/aluguel', updateRental);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
