const Reservation = require('../models/ReservationSchema');
const Event = require('../models/Event');
const Company = require('../models/Company');
const User = require('../models/UserSchema');
const nodemailer = require('nodemailer');
const QRCode = require('qrcode');
const pdf = require('pdf-creator-node');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');



exports.createReservation = async (req, res) => {
  const event = await Event.findById({id: req.params._id});
  const user = User.create(req.body.User);
  const ReservationMany = await insertMany.body.Ticket;
  const Reserved = ReservationMany;

Reserved.forEach(element => {
const StartD = new Date (event.startDateTime);
const FormatStartDate =  StartD.getDay/StartD.getMonth/StartD.getFullYear;
const EndD = new Date (event.endDateTime);
const FormatEndDate = EndD.getDay/EndD.getMonth/EndD.getFullYear;
// Create Pdf
const filepath = path.resolve('./mailTemplate/reservation.html');
const template = fs.readFileSync(filepath, {encoding:'utf-8'});
const option = {CompanyName: Company.companyName, 
              EventName : event.name,
              StartDate: FormatStartDate,
              EndDate: FormatEndDate, 
              Location: event.location,
              Price: event.price,
              FName: user.FirstName,
              LName: user.LastName,
              Email: user.LastName,
}
 
 //    Generate Qrcode
// const filepath = path.resolve('./view/Qrcode');
QRCode.toFile('../view/Qrcode.png', JSON.stringify(option), {
  errorCorrectionLevel: 'H'
}, function(err) {
  if (err) throw err;
  console.log('QR code saved!');
});
const LinkQRCode= `../view/Qrcode.png` ;

const render = ejs.render(template, {option, LinkQRCode } );

const OptionsPDF = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
};
const document = {
  html: render,
  path: "../Tickets/output.pdf",
  type: "",
};

const PDF = pdf.create(document, OptionsPDF).then((res) => {
  console.log(res);
  let transporter = nodemailer.createTransport({
     
      service: 'gmail',
      auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
      }
  });
  const from= 'festival.music2023@gmail.com';
  const to= `${option.Email}`;
  const subject= "Ticket";
  
   let info = {
      from: from,
      to: to,
      subject: subject,
      attachments: [
          {
              filename:'Ticket',
              path: '../Tickets/output.pdf'
          }
      ]
      
  };
  
   transporter.sendMail(info, function(error, info){
      if (error) {
          res.status(500).send(error.message);
      } else {
          res.status(200).send('Email sent ');
      }
  });
}).catch((error) => {
  console.error(error);
});
});
} 




