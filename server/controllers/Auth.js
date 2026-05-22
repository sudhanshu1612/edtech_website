const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

//sendOTP

    exports.sendOTP = async (req ,res) => {
    try 
    {
        // fetch email from request ki body
        const {email} = req.body;

        //check if user already exist 
        const checkUserPresent = await User.findOne({email});

        //if user already exists then return a  response
        if(checkUserPresent) {
            return res.status(401).json({
                success: false,
                message:"user already present",
            })
        }

        //generate OTP
        var OTP =  otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })
        console.log("OTP generated : ",otp);

        //check unique otp or not 

        const result = await OTP.findOne({otp : otp});

        while (result) 
        {
            otp = otpGenerator.generate(6,
            {
            upperCaseAlphabets: false,
            lowerCaseAlphabets:false,
            specialChars:false,
            })
        } 

        //create an otp object and create its entry at the database

        const otpPayload = {email ,otp};

        //create emtry in db for otp

        const otpBody =  await OTP.create(otpPayload);
        console.log(otpBody);

        //return respomnse successful
        res.status(200).json({
            success:true,
            message: 'OTP sent successfully',
            otp,
        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//signup

//login

//change password