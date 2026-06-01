const Course = require("../model/Course");
const Tag = require("../models/tags");
const USer = require("../models/User");
const {uploadImageToCloudinary} = require("../utils/imageUploader");

//cretaeCourse handler
exports.createCourse = async (req , res) => {
try
{
    //fetchData
    const {courseName , courseDescription,whatYouWillLearn,price,tag} = req.body;

    //get thumbnail
    const thumbnail = req.files.thumbnailImage;

    //validation
    if(!courseName || !courseDecription || !whatYouWillLearn || !price || !tag || !thumbnail)
    {
        return res.status(400).json({
            success: false,
            message: 'all fields are required',
        })
    }

    //check for instructor
    const UserId = req.user.id;
    const instructorDetails = await User.findById(UserId);
    console.log(insturctorDetails);

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
          {_id: insturctorDetails._id},
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
          })
    )
}
catch(error)
{

}
};


//getAllcourse handler function

