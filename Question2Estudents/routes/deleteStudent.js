const express = require('express');
const router = express.Router();
const { deleteStudent } = require('../data/students');

// DELETE /estudantes/:id - Deletar um estudante
router.delete('/estudantes/:id', (req, res) => {
  const isDeleted = deleteStudent(req.params.id);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Estudante não encontrado" });
  }
});

module.exports = router;
