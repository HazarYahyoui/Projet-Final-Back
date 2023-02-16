const Tag = require('../models/Tags');

exports.getAllTag = async (req, res) => {
  const tags = await Tag.find();
  res.send(tags);
};

exports.createTag = async (req, res) => {
  const tag = new Tag({
    tagName: req.body.tagName,
    tagDescription: req.body.tagDescription,
    
  });

  await Tag.create(tag);

  res.send(tag);
};

exports.getTag = async (req, res) => {
  const tag = await Tag.findById(req.params.Id);

  res.send(tag);
};

exports.updateTag = async (req, res) => {
  const tag = await Tag.findByIdAndUpdate(req.params.Id);

  res.send(tag);
};

exports.deleteTag = async (req, res) => {
  await Tag.findByIdAndDelete(req.params.Id);

  res.send({ message: 'Tag deleted' });
};