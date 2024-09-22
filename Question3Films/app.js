const express = require('express');
const app = express();

const createMovieRoute = require('./routes/createMovie');
const getMoviesRoute = require('./routes/getMovies');
const updateMovieRoute = require('./routes/updateMovie');
const deleteMovieRoute = require('./routes/deleteMovie');
const searchMoviesRoute = require('./routes/searchMovies');

app.use(express.json());

app.use('/', createMovieRoute);
app.use('/', getMoviesRoute);
app.use('/', updateMovieRoute);
app.use('/', deleteMovieRoute);
app.use('/', searchMoviesRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
