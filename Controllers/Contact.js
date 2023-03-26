const nodemailer = require('nodemailer');

exports.Contact= async (req, res) => {

    let transporter = nodemailer.createTransport({
       
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });
    const from= req.body.email;
    const to=  process.env.EMAIL_USER;
    const subject= req.body.subject ;
    const text =  req.body.message

     let info = {
        from: from,
        to: to,
        subject: subject,
        text: text 
    };
    
     transporter.sendMail(info, function(error, info){
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.status(200).send('Email sent ');
        }
    });

}