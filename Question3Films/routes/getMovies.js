const express = require('express');
const router = express.Router();
const { getMovies } = require('../data/movies');

// GET /filmes - Listar todos os filmes
router.get('/filmes', (req, res) => {
  const movies = getMovies();
  res.json(movies);
});

module.exports = router;
