const express = require('express');
const router = express.Router();
const { searchStudents } = require('../../data/students');

// GET /estudantes/busca - Buscar estudantes com base em critérios
router.get('/busca', (req, res) => {
  const { nome, matricula, curso, ano } = req.query;
  const result = searchStudents({ nome, matricula, curso, ano });
  res.json(result);
});

module.exports = router;
