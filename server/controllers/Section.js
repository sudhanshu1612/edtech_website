const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req , res ) => 
{
    try
    {
      //data fetch
      const {sectionName , courseId} = req.body;
      //data validation
      if(!sectionName || !courseId)
      {
        return res.status(400).json({
            success: false,
            message: 'Missing properties',
        });
      }
      //createsection
      const newSection = await Section.create({sectionName});
      //update course with section objectID
      const updatedCourse = await Course.findByIdAndUpdate(
        courseId,
        {
            $push:
            {
                courseContent: newSection._id,
            }
        },
        {new:true},
      )
      // hw use populate to replace sections sub sections both in the updated course details
      //response response
      return res.status(200).json({
        success: true,
        message: 'Section created successfully',
        updatedCourseDetails,
      })
    }
    catch(error)
    {
       return res.status(500).json({
        success: false,
        message: 'Unable to create section ,please try again',
        error: error.message,
       })
    }
}

exports.updateSection = async (req , res) => {
    try
    {
       //data input
       const {sectionName , sectionId} = req.body;
       //data validation
       if(!sectionName || !sectionId)
       {
        return res.status(400).json({
            success: false,
            message: 'Missing Properties',
        });
       }
       //update data
       const section = await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true});
       //return response
       return res.status(200).json({
        success: true,
        message:'Section Updated Successfully',
       });
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message:'Unable to update section please try again',
            error: error.message,
        });
    }
}

exports.deleteSection = async (req , res) => {
    try
    {
        //get Id --assuming that we are sending id in params
        const {sectionId}= req.params;
        //data validation
        if(!sectionId)
        {
            return res.status(400).json({
                success: false,
                message:'Section Id is required',
            });
        }
        //todo: do we need to remove the section objectID from the course content array in course schema ? yes we need to do that
        //delete section
        await Section.findByIdAndDelete(sectionId);
        //return response
        return res.status(200).json({
            success: true,
            message:'Section Deleted Successfully',
        });
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message:'Unable to delete section plesase try again',
            error: error.message,
        });
    }
}