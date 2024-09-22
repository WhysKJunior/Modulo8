const express = require('express');
const app = express();

const createBookRoute = require('./routes/createBook');
const getBooksRoute = require('./routes/getBooks');
const updateBookRoute = require('./routes/updateBook');
const deleteBookRoute = require('./routes/deleteBook');
const searchBooksRoute = require('./routes/searchBooks');

app.use(express.json()); // Middleware para lidar com JSON no corpo da requisição

app.use('/', createBookRoute);
app.use('/', getBooksRoute);
app.use('/', updateBookRoute);
app.use('/', deleteBookRoute);
app.use('/', searchBooksRoute);

const PORT = 2020;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
