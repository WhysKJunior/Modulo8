const express = require('express');
const router = express.Router();
const { addRental, validateRentalData } = require('../../data/rentals');



router.post('/', (req, res) => {
  const { id, idLivro, idEstudante, dataAluguel, dataDevolucao } = req.body;

  const validationError = validateRentalData({ idLivro, idEstudante, dataAluguel });
  if (validationError && validationError.error){
    return res.status(validationError.statusCode).json({error: validationError.error})
  }
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  
  const newRental = {
    id: null,
    idLivro,
    idEstudante,
    dataAluguel,
    dataDevolucao
  };
  const result = addRental(newRental);
  res.status(201).json(result);

});

module.exports = router;
