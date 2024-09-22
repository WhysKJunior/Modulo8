const express = require('express');
const router = express.Router();
const { deleteBook } = require('../../data/books');

router.delete('/livros/:id', (req, res) => {
  const isDeleted = deleteBook(req.params.id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Livro não encontrado" });
  }
});

module.exports = router;
