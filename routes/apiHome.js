const express = require('express');
const router = express.Router();
const passport= require('passport');


const { getAllEvent,  getEvent } = require('../controllers/CrudEvent');

router.get('/Home/AllEvent',passport.authenticate('bearer',{session: false}), getAllEvent);
router.get('/Home/Event/:Id',passport.authenticate('bearer',{session: false}), getEvent);


module.exports = router;