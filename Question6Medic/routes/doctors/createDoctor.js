const express = require('express');
const router = express.Router();
const { addDoctor } = require('../../data/doctors');

// POST /medico - Criar um novo médico
router.post('/', (req, res) => {
  const { nome, especialidade } = req.body;
  const newDoctor = { 
    id : null,
    nome, 
    especialidade 
  };
  const addedDoctor = addDoctor(newDoctor);
  res.status(201).json(addedDoctor);
});

module.exports = router;
