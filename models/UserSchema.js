const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const userSchema= new mongoose.Schema({
    FirstName : {type: String, required: true},
    LastName : {type: String, required: true},
    Email : {type: String, required: true},
    reservation : [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'}],
   
})


module.exports = mongoose.model('User', userSchema);