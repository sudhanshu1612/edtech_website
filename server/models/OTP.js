const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { emailVerificationTemplate } = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email:
    {
        type:String,
        required: true,
    },
    otp: 
    {
        type:String,
        required:true,
    },
    createdAt:
    {
        type: Date,
        default: Date.now,
        expires: 5*60,
    }
});

//a function to send mail
async function sendVerificationEmail(email,otp) 
{
    try
    {
        const mailResponse = await mailSender(
            email,
            "Verification Email from Study Notion",
            emailVerificationTemplate(otp)
        );
        console.log("email sent successfully",mailResponse);
    }
    catch(error)
    {
        console.log("error occured while sending mail : ", error);
        throw error;
    }
}

//before saving OTP to the database send the mail to the client
OTPSchema.pre("save" , async function()
{
    await sendVerificationEmail(this.email,this.otp);
})


module.exports = mongoose.model("OTP",OTPSchema);
