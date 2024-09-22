const express = require('express');
const router = express.Router();
const { getStudents } = require('../../data/students');

// GET /estudantes - Listar todos os estudantes
router.get('/', (req, res) => {
  const students = getStudents();
  res.json(students);
});

module.exports = router;
