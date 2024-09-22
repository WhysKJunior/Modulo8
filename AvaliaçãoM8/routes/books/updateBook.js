const express = require('express');
const router = express.Router();
const { updateBook, validateBookData } = require('../../data/books');

router.put('/livros/:id', (req, res) => {
  const { title, author, year, genre } = req.body;

  const validationError = validateBookData({ title, author, year, genre });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const updatedBook = updateBook(req.params.id, { title, author, year: parseInt(year), genre });
  
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ error: "Livro não encontrado" });
  }
});

module.exports = router;
