const express = require('express');
const router = express.Router();
const passport= require('passport');


const { Contact } = require('../controllers/Contact');

router.post('/contact', Contact);



module.exports = router;