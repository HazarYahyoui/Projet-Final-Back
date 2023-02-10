const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const eventSchema= new mongoose.Schema({
    name : {type: String, required: true},
    description : {type: String, required: true},
    startDateTime : {type: Date, required: true},
    endDateTime : {type: Date, required: true},
    photo : {type: String, required: true},
    price : {type: String, required: true},
    availableTicketNumber : {type: Number, required: true},
    eventType : {type: String, required: true, },
    location : {type: String, required: true,},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tags'}],
})


module.exports = mongoose.model('Event', eventSchema);