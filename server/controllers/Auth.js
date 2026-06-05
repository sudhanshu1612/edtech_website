const User = require("../models/User");
const OTP = require("../models/OTP");
const Profile = require("../models/Profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const {otpEmail} = require("../mail/templates/otpEmail");
require("dotenv").config();

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
        var otp =  otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets:false,
            specialChars:false, 
        })
        console.log("OTP generated : ",otp);

        //check unique otp or not 

        let result = await OTP.findOne({otp : otp});

        while (result) 
        {
            otp = otpGenerator.generate(6,
            {
            upperCaseAlphabets: false,
            lowerCaseAlphabets:false,
            specialChars:false,
            });
            result = await OTP.findOne({otp : otp});
        } 

        //create an otp object and create its entry at the database

        const otpPayload = {email ,otp};

        //create emtry in db for otp

        const otpBody =  await OTP.create(otpPayload);
        console.log(otpBody);

        //send OTP via email
        const emailResponse = await mailSender(
            email,
            "Verify your email address",
            otpEmail(otp)
        );
        console.log("Email response: ", emailResponse);

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
            else if(otp != recentOtp[0].otp)
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

            const profileDetails = await Profile.create(
            {
                gender:null,
                dateOfBirth: null,
                about: null,
                contactNumber: null,
            });

            const newUser = await User.create(
            {
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
            })
            //return res
            return res.status(200).json(
            {
                success: true,
                message:'User is registered successfully',
                user: newUser,
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
    exports.login = async (req ,res) => 
    {
        try
        {
            //get data from req body
            const {email , password } = req.body;

            //validation data
            if(!email || !password)
            {
                return res.status(403).json(
                {
                    success:false,
                    message:'All fields are required',
                })
            }

            //user check exist or not
            const user = await User.findOne({email}).populate("additionalDetails");

            if(!user)
            {
                return res.status(400).json(
                    {
                        success: false,
                        message: "user is not registered please sign up",
                    }
                );
            }

            //generate JWT , after password matching
            if(await bcrypt.compare(password , user.password))
            {
                const payload = 
                {
                    email: user.email,
                    id: user._id,
                    accountType: user.accountType,
                }
                const token = jwt.sign(payload , process.env.JWT_SECRET ,
                    {
                        expiresIn: "2h",
                    }
                );
                user.token = token;
                user.password = undefined;

                //create cookie and send response
                const options = 
                {
                    expires: new Date(Date.now() + 3*24*60*60*1000),
                    httpOnly: true,
                }
                res.cookie("token",token,options).status(200).json({
                    success: true,
                    token,
                    user,
                })
            }
            else
            {
                return res.status(401).json(
                {
                    success: false,
                    message: 'Password is incorrect',
                })
            }
        }
        catch(error)
        {
           console.log(error);
           return res.status(500).json(
            {
               success: false,
               message: 'Login Failure , please try agian',
            });
        }
    };


//change password
exports.changePassword = async (req ,res) => 
{
   try
   {
    //get data from req body
    const {oldPassword , newPassword , confirmNewPassword} = req.body;
    //get oldpassword , new password , confirm new password
    if( !oldPassword || !newPassword || !confirmNewPassword)
    {
        return res.status(403).json(
        {
            success:false,
            message:'All fields are required',
        })
    }
    //validation
    //upadate password in the data base
    //send mail - password upadated 
    //return response
   }
   catch(error)
   {
      console.log(error);
      return res.status(500).json({
         success: false,
         message: 'Error while changing password',
      });
   }
}