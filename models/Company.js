const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const companySchema= new mongoose.Schema({
    companyName : {type: String, required: true},
    companyDescription : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    role : {type: String,  default:'user'},
    photo : {type: String, default:'../view/photoCompany' },
    events : [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    
})

module.exports = mongoose.model('Company', companySchema);