const nodemailer = require('nodemailer');
const Token = require('../models/TokenSchema');
const randomstring = require('randomstring');
const Company = require('../models/Company');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

exports.ForgotPassword= async (req, res) => {
    const company = await Company.findOne({email: req.body.email});
   

    if (company != undefined) {
     const generateToken =  randomstring.generate()
        const token =  new Token({
            companyID: company._id,
            token: generateToken
        }).save()
        

    const filepath = path.resolve('./mailTemplate/email.html');
    const template = fs.readFileSync(filepath, {encoding:'utf-8'});
    const option = {name: company.companyName, linkReset: `${process.env.URL_Front}#/reset-password/${generateToken}`, linkForgot: `${process.env.URL_Front}#/forgot-password` }
    const render = ejs.render(template, option );

    let transporter = nodemailer.createTransport({
       
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });
    const from= 'festival.music2023@gmail.com';
    const to= `${company.email}`;
    const subject= "Reset Password";
    const html= render;

     let info = {
        from: from,
        to: to,
        subject: subject,
        html: html,
    };
    
     transporter.sendMail(info, function(error, info){
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.status(200).send('Email sent: ' + token);
        }
    });
} 
else {
    return res.send({message: 'Invalid Email'});
}
} 