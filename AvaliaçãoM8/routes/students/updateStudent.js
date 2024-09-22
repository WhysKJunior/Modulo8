const express = require('express');
const router = express.Router();
const { updateStudent, validateStudentData } = require('../../data/students');

// PUT /estudantes/:id - Atualizar um estudante
router.put('/:id', (req, res) => {
  const { nome, matricula, curso, ano } = req.body;

  const validationError = validateStudentData({ nome, matricula, curso, ano });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const updatedStudent = updateStudent(req.params.id, { nome, matricula, curso, ano: parseInt(ano) });
  
  if (updatedStudent) {
    res.json(updatedStudent);
  } else {
    res.status(404).json({ error: "Estudante não encontrado" });
  }
});

module.exports = router;
