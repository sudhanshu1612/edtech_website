const {instance} = require("../config/razorpay");
const Course  = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} = require("../mail/templates/courseEnrollmentEmail");

//capture the payment and initaiate the razorpay order
exports.capturePayment = async (req , res) => {
    //get course id and user id
    //validation
    //valid courseId
    //uer already pay for the same course
    //order create 
    // return response
}