const express = require('express');
const router = express.Router();
const { updateMovie, validateMovieData } = require('../data/movies');

// PUT /filmes/:id - Atualizar um filme
router.put('/filmes/:id', (req, res) => {
  const { titulo, diretor, ano, genero } = req.body;

  const validationError = validateMovieData({ titulo, diretor, ano, genero });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const updatedMovie = updateMovie(req.params.id, { titulo, diretor, ano: parseInt(ano), genero });
  
  if (updatedMovie) {
    res.json(updatedMovie);
  } else {
    res.status(404).json({ error: "Filme não encontrado" });
  }
});

module.exports = router;
