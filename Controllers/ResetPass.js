const Company = require('../models/Company');
const Token = require('../models/TokenSchema');
const bcrypt= require('bcryptjs');
const { deleteOne } = require('../models/TokenSchema');

exports.ResetPassword = async (req, res) => {
  const token = await Token.findOne({token : req.params.generateToken});
 console.log(token);
 console.log(req.params);
  if (token != undefined) {
    const salt= await bcrypt.genSalt(10); 
    const hashedPass= await bcrypt.hash(req.body.password, salt);  
    
    await Company.updateOne( 
      {_id:token.companyID}, {$set:{password: hashedPass }}, {new:true}
    );
   
    await token.deleteOne()
  } else {
    return res.send({message: 'Invalid Email'});
  }
    
  
  };