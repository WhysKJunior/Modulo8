const express = require('express');
const router = express.Router();
const { addStudent, validateStudentData } = require('../data/students');

// POST /estudantes - Criar um novo estudante
router.post('/estudantes', (req, res) => {
  const { nome, matricula, curso, ano } = req.body;

  const validationError = validateStudentData({ nome, matricula, curso, ano });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const newStudent = { 
    id : null,
    nome, 
    matricula, 
    curso, 
    ano: parseInt(ano) 
};
  const addedStudent = addStudent(newStudent);
  res.status(201).json(addedStudent);
});

module.exports = router;
