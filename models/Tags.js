const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const tagSchema= new mongoose.Schema({
    tagName : {type: String, required: true},
    tagDescription : {type: String, required: true},
   
})


module.exports = mongoose.model('Tag', tagSchema);