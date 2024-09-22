const express = require('express');
const router = express.Router();
const { searchMovies } = require('../data/movies');

// GET /filmes/busca - Buscar filmes com base em critérios
router.get('/filmes/busca', (req, res) => {
  const { titulo, diretor, ano, genero } = req.query;
  const result = searchMovies({ titulo, diretor, ano, genero });
  res.json(result);
});

module.exports = router;
