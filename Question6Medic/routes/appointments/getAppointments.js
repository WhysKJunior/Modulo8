const express = require('express');
const { getAllAppointments } = require('../../data/appointments');

const router = express.Router();

router.get('/', (req, res) => {
    const appointments = getAllAppointments();
    res.json(appointments);
});

module.exports = router;
