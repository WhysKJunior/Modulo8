const express = require('express');
const { searchAppointments } = require('../../data/appointments');

const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query;
    const foundAppointments = searchAppointments(query);
    res.json(foundAppointments);
});

module.exports = router;
