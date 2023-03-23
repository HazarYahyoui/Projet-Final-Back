const express = require('express');
const router = express.Router();
const passport= require('passport');


const { getAllEvent, createEvent, getEvent, updateEvent, deleteEvent } = require('../controllers/CrudEvent');

router.get('/AllEvent',passport.authenticate('bearer',{session: false}), getAllEvent);
router.post('/createEvent',passport.authenticate('bearer',{session: false}), createEvent);
router.get('/Event/:Id',passport.authenticate('bearer',{session: false}), getEvent);
router.put('/updateEvent/:Id',passport.authenticate('bearer',{session: false}), updateEvent);
router.delete('/deleteEvent/:Id',passport.authenticate('bearer',{session: false}), deleteEvent);


module.exports = router;