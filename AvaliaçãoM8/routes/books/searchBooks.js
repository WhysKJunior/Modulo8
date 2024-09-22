const express = require('express');
const router = express.Router();
const { searchBooks } = require('../../data/books');

router.get('/', (req, res) => {
  const { title, author, year, genre } = req.query;
  const result = searchBooks({ title, author, year, genre });
  res.json(result);
});

module.exports = router;
