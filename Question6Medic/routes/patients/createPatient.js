const express = require('express');
const router = express.Router();
const { addPatient } = require('../../data/patients');

// POST /paciente - Criar um novo paciente
router.post('/', (req, res) => {
  const { nome, dataNascimento } = req.body;
  const newPatient = { 
    id : null, 
    nome, 
    dataNascimento 
  };
  const addedPatient = addPatient(newPatient);
  res.status(201).json(addedPatient);
});

module.exports = router;
