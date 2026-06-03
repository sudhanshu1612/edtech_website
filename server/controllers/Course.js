const Course = require("../model/Course");
const Tag = require("../models/tags");
const User = require("../models/User");
const {uploadImageToCloudinary} = require("../utils/imageUploader");

//cretaeCourse handler
exports.createCourse = async (req , res) => {
try
{
    //fetchData
    const {courseName , courseDescription,whatYouWillLearn,price,tag} = req.body;

    //get thumbnail
    const thumbnail = req.files?.thumbnailImage;

    //validation
    if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail)
    {
        return res.status(400).json({
            success: false,
            message: 'all fields are required',
        })
    }

    //check for instructor
    const UserId = req.user.id;
    const instructorDetails = await User.findById(UserId);

    if(!instructorDetails)
    {
        return res.status(400).json({
            success: false,
            message: 'instructor details not found',
        });
    }

    //check given tag is valid or not
    const tagDetails = await Tag.findById(tag);
    if(!tagDetails)
    {
        return res.status(404).json({
            success: false,
            message: 'Tag details not found',
        });
    }

    //upload image to cloudinary
    const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);

    //create an entry for new course
    const newCourse = await Course.create({
        courseName,
        courseDescription,
        instructor: instructorDetails._id,
        whatYouWillLearn: whatYouWillLearn,
        price,
        tag:tagDetails._id,
        thumbnail:thumbnailImage.secure_url,
    })

    //add the new course to the user schema of the insturctor
    await User.findByIdAndUpdate(
                    instructorDetails._id,
          {
            $push:
            {
                courses: newCourse._id,
            }
          },
          {new:true},
        );
          //update the tag ka schema
          //

          //return responser
          return res.status(200).json({
            success: true,
            message: 'Course Created Successfully',
            data: newCourse,
          }
    );
}
    catch(error)
    {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};


//getAllcourse handler function
exports.getAllCourse = async (req , res) => {
    try
    {
       const allCourses = await Course.find({});

       return res.status(200).json({
        success: true,
        message: 'data for all courses retrived successfully',
        data: allCourses,
       })
    }
    catch(error)
    {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Cannot Fetch Course Details',
        error: error.message,
      })
    }
}



//print all the details of a particular course
exports.getCourseDetails = async (req , res) => { 
    try
    {
        //get id
        const { courseId } = req.body;

        //find course details
        const courseDetails = await Course.findById(courseId)
            .populate({
                path: 'instructor',
                populate: {
                    path: 'additionalDetails',
                },
            })
            .populate('category')
            .populate('ratingAndReviews')
            .populate({
                path: 'courseContent',
                populate: {
                    path: 'subSection',
                },
            })
            .exec();

        if(!courseDetails)
        {
            return res.status(404).json({
                success: false,
                message: 'Course details not found with the given id',
            });
        }

        //return response
        return res.status(200).json({
            success: true,
            data: courseDetails,
        });
        
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: 'Could not fetch course details',
            error: error.message,
        });
    }
};

