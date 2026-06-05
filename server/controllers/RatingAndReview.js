const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");
const User = require("../models/User");

//create rating 
exports.createRating = async (req , res) => {
    try
    {
       //get user id
       const userId = req.user.id;
       //fetch data from req.body
       const {rating , review , courseId} = req.body;
       //check if user is enrolled or not in the course
       const courseDetails = await Course.findOne(
        {
            _id: courseId,
            studentsEnrolled: { $elemMatch: { $eq: userId } },
        }
       );
       if(!courseDetails)
       {
           return res.status(404).json({
               success: false,
               message: 'Course not found or user is not enrolled in the course',
           });
       }
       //check if user has already given the rating and review for the course
       const alreadyReviewed = await RatingAndReview.findOne({
        course: courseId,
        user: userId,
       });
       if(alreadyReviewed)
       {
           return res.status(400).json({
               success: false,
               message: 'User has already reviewed the course',
           });
       }
       //crate rating and review
         const ratingReview = await RatingAndReview.create({
            rating,
            review,
            course: courseId,
            user: userId,
         });
           //push the rating and review id into course model
            const updatedCourseDetails = await Course.findByIdAndUpdate(
                courseId,
                {$push: { ratingAndReviews: ratingReview._id } },
                {new: true}
            );
            //return response
            return res.status(200).json({
                success: true,
                message: 'Rating and review created successfully',
                ratingReview,
            });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'cannot create rating and review internal server error',
        })
    }
}


//get avg rating 
exports.getAverageRating = async (req ,res) => {
    try
    {
        //get course id
        const courseId = req.body.courseId;
        //calculate avg rating for the course
        const result = await RatingAndReview.aggregate([
            { $match: { course: courseId } },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$rating" }
                }
            }
        ]);

        //return rating
        return res.status(200).json({
            success: true,
            message: 'Average rating fetched successfully',
            averageRating: result[0]?.averageRating || 0
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'cannot fetch average rating internal server error',
        });
    }
}


//get all rating
exports.getAllRating = async (req , res) => {
    try
    {        //get course id
        const courseId = req.body.courseId; 
        //fetch all rating and review for the course
        const courseDetails = await Course.findById(courseId)
            .populate({
                path: "ratingAndReviews",
                populate: {
                    path: "user",
                    select: "firstName lastName email"
                }
            });
        //return response
        return res.status(200).json({
            success: true,
            message: 'All ratings fetched successfully',
            ratings: courseDetails.ratingAndReviews
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'cannot fetch all ratings internal server error',
        });
    }
}

