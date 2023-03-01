const express = require('express');
const router = express.Router();

const { ResetPassword  } = require('../controllers/ResetPass');

router.put('/resetPass', ResetPassword);

module.exports = router;