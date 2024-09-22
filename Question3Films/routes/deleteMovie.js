const express = require('express');
const router = express.Router();
const { deleteMovie } = require('../data/movies');

// DELETE /filmes/:id - Deletar um filme
router.delete('/filmes/:id', (req, res) => {
  const isDeleted = deleteMovie(req.params.id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Filme não encontrado" });
  }
});

module.exports = router;
