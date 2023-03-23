const express = require('express');
const router = express.Router();
const passport = require('passport')


const { getAllTag, createTag, getTag, updateTag, deleteTag } = require('../controllers/CrudTags');


router.get('/AllTag',passport.authenticate('bearer',{session: false}), getAllTag);
router.post('/createTag',passport.authenticate('bearer',{session: false}), createTag);
router.get('/Tag/:Id',passport.authenticate('bearer',{session: false}), getTag);
router.put('/updateTag/:Id',passport.authenticate('bearer',{session: false}), updateTag);
router.delete('/deleteTag/:Id',passport.authenticate('bearer',{session: false}), deleteTag);


module.exports = router;