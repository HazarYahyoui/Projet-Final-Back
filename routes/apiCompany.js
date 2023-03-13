const express = require('express');
const router = express.Router();


const { getAllCompany, createCompany, getCompany, updateCompany, deleteCompany } = require('../controllers/CrudCompany');

router.get('/AllCompany', getAllCompany);
router.post('/createCompany', createCompany);
router.get('/Company/:Id', getCompany);
router.put('/updateCompany/:Id', updateCompany);
router.delete('/deleteCompany/:Id', deleteCompany);


module.exports = router;