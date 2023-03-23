const express = require('express');
const router = express.Router();
const passport= require('passport');


const { getAllCompany, createCompany, getCompany, updateCompany, deleteCompany } = require('../controllers/CrudCompany');

router.get('/AllCompany',passport.authenticate('bearer',{session: false}), getAllCompany);
router.post('/createCompany',passport.authenticate('bearer',{session: false}), createCompany);
router.get('/Company/:Id',passport.authenticate('bearer',{session: false}), getCompany);
router.put('/updateCompany/:Id',passport.authenticate('bearer',{session: false}), updateCompany);
router.delete('/deleteCompany/:Id',passport.authenticate('bearer',{session: false}), deleteCompany);


module.exports = router;