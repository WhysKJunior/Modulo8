

const express = require('express');
const router = express.Router();
const { addBook, validateBookData } = require('../../data/books');

router.post('/', (req, res) => {
  const { title, author, year, genre } = req.body;

  const validationError = validateBookData({ title, author, year, genre });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const newBook = { 
    id : null, 
    title, 
    author, 
    year: parseInt(year), 
    genre
 };
  const addedBook = addBook(newBook);
  res.status(201).json(addedBook);
});

module.exports = router;
