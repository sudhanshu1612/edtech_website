const SubSection = require('../models/SubSection');
const Section = require('../models/Section');


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
         //return response

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