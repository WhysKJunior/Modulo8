const express = require('express');
const router = express.Router();
const { deleteEmployee } = require('../data/employees');

// Deletar funcionário (DELETE /funcionario/:id)
router.delete('/funcionario/:id', (req, res) => {
  const deletedEmployee = deleteEmployee(req.params.id);
  if (deletedEmployee) {
    res.json(deletedEmployee);
  } else {
    res.status(404).json({ message: 'Funcionário não encontrado' });
  }
});

module.exports = router;
