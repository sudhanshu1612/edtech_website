const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

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
        console.log(token);
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
exports.resetPassword = async (req , res) => 
{
    try
    {
        //data fetch
        const {password , confirmPassword , token} = req.body;
        //validation
        if(password !== confirmPassword)
        {
            return res.json({
                success: false,
                message:'Password not matching',
            })
        }
        //get user details from token 
        const userDetails = await User.findOne({token: token});
        // if no entry available invalid token 
        if(!userDetails) 
        {
            return res.json({
                success: false,
                message: ' invalid password entry',
            })
        }
        //token time expired
        if(userDetails.resetPasswordExpires < Date.now())
        {
            return res.json({
                success: false,
                message: 'Token is expired , please regenerate your token',
            })
        }
        //hash the password
        const hashedPassword = await bcrypt.hash(password , 10 );
        //update the password
        await User.findOneAndUpdate(
                {token: token},
                {password:hashedPassword},
                {new:true},
        )
        //return res
        return res.status(200).json({
            success: true,
            message: 'Password reset successful',
        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while sending reset pwd mail',
        })
    }
}
