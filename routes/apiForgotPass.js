const express = require('express');
const router = express.Router();
const { ForgotPassword  } = require('../controllers/ForgotPass');

router.post('/forgotPass', ForgotPassword);

module.exports = router;