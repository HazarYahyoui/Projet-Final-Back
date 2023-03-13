const express = require('express');
const router = express.Router();


const { getAllTag, createTag, getTag, updateTag, deleteTag } = require('../controllers/CrudTags');


router.get('/AllTag', getAllTag);
router.post('/createTag', createTag);
router.get('/Tag/:Id', getTag);
router.put('/updateTag/:Id', updateTag);
router.delete('/deleteTag/:Id', deleteTag);


module.exports = router;