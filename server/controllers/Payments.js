const {instance} = require("../config/razorpay");
const Course  = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const {courseEnrollmentEmail} = require("../mail/templates/courseEnrollmentEmail");

//capture the payment and initaiate the razorpay order
exports.capturePayment = async (req , res) => {
    try
    {
    //get course id and user id
    const {course_id} = req.body;
    const {userId} = req.user.id;
    //validation
    //valid courseId
    if(!course_id)
    {
        return res.status(400).json({
            success: false,
            message: 'Course id is required',
        });
    } 
    let course;
    try
    {
       course = await Course.findById(course_id);
       if(!course)
       {
         return res.status(404).json({
            success: false,
            message: ' could not find the course',
         })
       }
       //user already pay for the same course
       //convert user id ka string se object id
       const uid = new mongoose.Types.ObjectId(userId);
       if(course.studentsEnrolled.includes(uid))
       {
         return res.status(400).json({
            success: false,
            message: 'User has already enrolled in the course',
         })
       }
    }
    catch(error)
    {
        console.error('Error fetching course details:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching course details',
            error: error.message,
        });
    }
    //order create 
    const amount = course.price;
    const currency = 'INR';

    const options = {
        amount: amount*100,
        currency,
        receipt : Math.random(Date.now()).toString(),
        notes:{
            courseId: course_id,
            userId, 
        }
    }

    try
    {
        //initialis the paymne the razoepay orese
        const paymentResponse = await instance.orders.create(options);
        coonsole.log('Payment Response:', paymentResponse);
        return res.status(200).json({
            success: true,
            message: 'Razorpay order created successfully',
            orderId: paymentResponse.id,
        });
    }
    catch(error)
    {
        console.error('Error creating Razorpay order:', error);
        return res.status(500).json({
            success: false,
            message: 'Error creating Razorpay order',
            error: error.message,
        });
    }
    // return response
    }
    catch(error)
    {
        console.error('Error in capturePayment:', error);
        return res.status(500).json({
            success: false,
            message: 'Error in capturePayment',
            error: error.message,
        });
    }
}


//verifying the payment ie signature of razorpay and server

exports.verifySignature = async (req , res) => {
    try
    {
        const webhookSecret = "12345678";
        const signature = req.headers['x-razorpay-signature'];
    }
    catch(error)
    {
        console.error('Error in verifySignature:', error);
        return res.status(500).json({
            success: false,
            message: 'Error in verifySignature',
            error: error.message,
        });
    }
}
