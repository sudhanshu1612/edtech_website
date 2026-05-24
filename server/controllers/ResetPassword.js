const User = require("../models/USer");
const mailSender = require("../utils/mailSender");

//reset password token
exports.resetPasswordToken = async (req , res) => 
{
   //get email from req.body
   const email = req.body.email;
   //check user for this email
   const user = await User.findOne({email: email});
   if(!user)
   {
    return res.json(
    {
        success: false,
        message:'your email is not registered with us',
    })
   }
   //generate token
   const token = 
   //update user by adding token and expiration time
   //create url
   //send mail containing the url
   //return response

   const url = `http://localhost:3000/udate-password/${token}`

}
//reset password
