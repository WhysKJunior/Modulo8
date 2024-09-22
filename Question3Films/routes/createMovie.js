const express = require('express');
const router = express.Router();
const { addMovie, validateMovieData } = require('../data/movies');

// POST /filmes - Criar um novo filme
router.post('/filmes', (req, res) => {
  const { titulo, diretor, ano, genero } = req.body;

  const validationError = validateMovieData({ titulo, diretor, ano, genero });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const newMovie = { 
    id : null,
    titulo, 
    diretor, 
    ano: parseInt(ano), 
    genero 
};
  const addedMovie = addMovie(newMovie);
  res.status(201).json(addedMovie);
});

module.exports = router;
