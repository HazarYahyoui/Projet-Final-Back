const express = require('express');
const router = express.Router();



const { createReservation } = require('../controllers/Reservation');

router.post('/reservation', createReservation);


module.exports = router;