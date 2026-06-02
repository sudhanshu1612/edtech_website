const SubSection = require('../models/SubSection');
const Section = require('../models/Section');
const { uploadImageToCloudinary } = require('../utils/imageUploader');


//create Subsection handler

exports.createSubSection = async (req , res) => {
    try
    {
         //data fetch
         const {sectionId , title , timeDuration , description } = req.body;
         //extract file or video
         const video = req.files.video;
         //data validation
         if(!sectionId || !title || !timeDuration || !description || !video)
         {
            return res.status(400).json({
                success: false,
                message: 'Missing one or more properties',
            });
         }
         //upload video to cloudinary
         const uploadDetails = await uploadImageToCloudinary(video , process.env.FOLDER_NAME);
         //crete subsection
         const SubSectionDetails = await SubSection.create({
            title: title,
            timeDuration: timeDuration,
            description: description,
            videoUrl: uploadDetails.secure_url,
         })
         //update section with subsection objectID
         const updatedSection = await Section.findByIdAndUpdate(
            sectionId,
            {
                $push:
                {
                    subSection: SubSectionDetails._id,
                }   
            },
            {new:true},
         );
         //log update secgtion details after adding populate entry
         //return response
         return res.status(200).json({
            success: true,
            message: 'SubSection created successfully',
            updatedSectionDetails,
         })
    }
    catch(error)
    {
         return res.status(500).json({  
            success: false,
            message: 'Unable to create subsection ,please try again',
            error: error.message,
         })
    }
}

//HWupdae Subsection
exports.updateSubSection = async (req , res) => {
    try
    {       //data input
            const {subSectionId , title , timeDuration , description } = req.body;
            //data validation
            if(!subSectionId || !title || !timeDuration || !description)
            {
                return res.status(400).json({
                    success: false,
                    message: 'Missing one or more properties',
                });
            }
            //update data
            const updatedSubSection = await SubSection.findByIdAndUpdate(
                subSectionId,
                {
                    title: title,
                    timeDuration: timeDuration,
                    description: description,
                },
                {new:true},
            );  
            //return response
            return res.status(200).json({
                success: true,
                message: 'SubSection updated successfully',
                updatedSubSection,
            })
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: 'Unable to update subsection please try again',
            error: error.message,
        });
    }
}



//delete subsection
exports.deleteSubSection = async (req , res) => {
    try
    {   //get Id --assuming that we are sending id in params
        const {subSectionId}= req.params;
        //data validation
        if(!subSectionId)
        {
            return res.status(400).json({
                success: false,
                message:'SubSection Id is required',
            });
        }
        //delete data
        await SubSection.findByIdAndDelete(subSectionId);
        //return response
        return res.status(200).json({
            success: true,
            message: 'SubSection deleted successfully',
        })
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: 'Unable to delete subsection please try again',
            error: error.message,
        });
    }
}