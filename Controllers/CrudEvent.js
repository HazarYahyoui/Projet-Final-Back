const Event = require('../models/Event');

exports.getAllEvent = async (req, res) => {
  const events = await Event.find(req.body);
  res.send(events);
};

exports.createEvent = async (req, res) => {
  const event = new Event({
    name: req.body.name,
    description: req.body.description,
    startDateTime: req.body.startDateTime,
    endDateTime: req.body.endDateTime,
    photo : req.body.photo,
    ticketNumber : req.body.ticketNumber,
    eventType : req.body.eventType,
    price : req.body.price,
    location : req.body. location,
    tags : req.body.tags,
  });

  await Event.create(event);

  res.send(event);
};

exports.getEvent = async (req, res) => {
  const event = await Event.findById(req.params.Id);

  res.send(event);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.Id);

  res.send(event);
};

exports.deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.Id);

  res.send({ message: 'event deleted' });
};