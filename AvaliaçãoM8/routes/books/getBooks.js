const express = require('express');
const router = express.Router();
const { getBooks } = require('../../data/books');

router.get('/', (req, res) => {
  const books = getBooks();
  res.json(books);
});

module.exports = router;
