const Company = require('../models/Company');

exports.getAllCompany = async (req, res) => {
  const companys = await Company.find();
  res.send(companys);
};

exports.createCompany = async (req, res) => {
  const company = new Company({
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    email: req.body.email,
    password: req.body.password,
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