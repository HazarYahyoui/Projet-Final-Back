const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const reservationSchema= new mongoose.Schema({
    reservedFName : {type: String, required: true},
    reservedLName : {type: String, required: true},
    reservedEmail : {type: String, required: true}
   
})


module.exports = mongoose.model('Reservation', reservationSchema);