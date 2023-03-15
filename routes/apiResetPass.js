const express = require('express');
const router = express.Router();

const { ResetPassword  } = require('../controllers/ResetPass');

router.post('/resetPass/:generateToken', ResetPassword);

module.exports = router;