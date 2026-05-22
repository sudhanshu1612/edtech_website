const User = require("../models/User");
const OTP = require("../models/OTP");

//sendOTP
exports.sendOTP = async (req ,res) => {

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
}
//signup
//login

//change password