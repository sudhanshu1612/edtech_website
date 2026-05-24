const User = require("../models/USer");
const mailSender = require("../utils/mailSender");

//reset password token
exports.resetPasswordToken = async (req , res) => 
{
   try
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
        const token = crypto.randomUUID();
        //update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate(
                                {email:email},
                                {
                                token: token,
                                resetPasswordExpires: Date.now() + 5*60*1000,
                                },
                                {new:true}, //updated document will be returned in response with new:true
                            );
        //create url
        const url = `http://localhost:3000/udate-password/${token}`
        //send mail containing the url
        await mailSender(email,"Password Reset Link",
                                `Password Reset Link: ${url}`
        );
        //return response
        return res.json(
            {
                success: true,
                message: "email sent successfully , please check email and change password",
            }
        );
        }
   catch(error)
   {
       console.log(error);
       return res.status(500).json({
        success: false,
        message: "mail can't be sent try again",
       })
   }
}
//reset password
