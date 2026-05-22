const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");

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
exports.signUp = async (req , res) => 
{
    try
    {
    //data fetch from req ki body
        const 
        {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,  //will get one value already student or instuctor
            contactNumber,
            otp
        } = req.body;
        //validate
        if(!firstName || !lastName || !password || !confirmPassword || !otp)
        {
            return res.status(403).json({
                success: false,
                message:"All fields are required",
            })
        }
        // match the password second password
        if(password !== confirmPassword)
        {
            return res.status(400).json({
                success: false,
                message: "password and confirm password does not match please try again"
            });
        }
        //check if user already exist
        const existUser = await User.findOne({email});
        if(existUser)
        {
            return res.status(400).json({
                success: false,
                message: "user is already registered",
            });
        }
        //find most recent otp
        const recentOtp = await OTP.find({email}).sort({createdAt: -1}).limit(1);
        console.log(recentOtp);
        //validate otp
        if(recentOtp.length == 0) 
        {
            //otp not found
            return res.status(400).json({
                success: false,
                message: "OTP not found",
            })
        }
        else if(otp != recentOtp)
        {
            //invalid otp
            return res.status(400).json({
                success:false,
                message:"otp entered is incorrect",
            })
        }
        //hash passaword
        const hashedPassword = await bcrypt.hash(password , 10);
        //entry create in db

        const profileDetails = await Profiler.create (
        {
            gender:null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        });

        const user = await user.create(
        {
        firstName,
        lastName,
        email,
        contactNumber,
        password:hashedPassword,
        accountType,
        additionalDetails: profileDetails._id,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastName}`,
        })
        //return res
        return res.status(200).json(
        {
            success: true,
            message:'User is registered successfully',
            user,
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:'User cannot be registered please try again',
        })
    }
}

//login

//change password