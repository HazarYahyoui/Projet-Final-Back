const Company = require('../models/Company');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAllCompany = async (req, res) => {
  const companys = await Company.find();
  res.send(companys);
};

exports.createCompany = async (req, res) => {
    // salt c'est le nombre de fois ou on va crypter le password
    const salt= await bcrypt.genSalt(10); 

    // hashedPass est le password après cryptage
    const hashedPass= await bcrypt.hash(req.body.password, salt);  

  const company = new Company({
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    email: req.body.email,
    password: hashedPass,
    role : req.body.role,
    photo : req.body.photo,
    events : req.body.events
  });

  await Company.create(company);

  res.send(company);
};

exports.getCompany = async (req, res) => {
  const company = await Company.findById(req.params.Id);

  res.send(company);
};

exports.updateCompany = async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.Id);

  res.send(company);
};

exports.deleteCompany = async (req, res) => {
  await Company.findByIdAndDelete(req.params.Id);

  res.send({ message: 'company deleted' });
};