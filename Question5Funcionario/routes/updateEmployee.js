const express = require('express');
const router = express.Router();
const { updateEmployee } = require('../data/employees');

router.put('/funcionario/:id', (req, res) => {
  const id = req.params.id;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'Digite o ID como número' });
  }

  const updatedEmployee = updateEmployee(id, req.body);

  if (updatedEmployee) {
    res.json(updatedEmployee);
  } else {
    res.status(404).json({ message: 'Funcionário não encontrado' });
  }
});

module.exports = router;
