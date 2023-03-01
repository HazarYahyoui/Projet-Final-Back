const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const tokenSchema= new mongoose.Schema({
    companyID : {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
    token: {type: String, required: true},
   
})

module.exports = mongoose.model('Token', tokenSchema);