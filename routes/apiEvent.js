const express = require('express');
const router = express.Router();


const { getAllEvent, createEvent, getEvent, updateEvent, deleteEvent } = require('../controllers/CrudEvent');

router.get('/', getAllEvent);
router.post('/createEvent', createEvent);
router.get('/:Id', getEvent);
router.put('/updateEvent/:Id', updateEvent);
router.delete('/deleteEvent/:Id', deleteEvent);


module.exports = router;