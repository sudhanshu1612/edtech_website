const Profile = require('../models/Profile');
const User = require('../models/Ueer');

exports.updateProfile = async(req , res) => {
    try
    {
        //get data and user id
        const {dateOfBirth="", about="",contactNumber,gender} = req.body;
        const id = req.user.id;
        //validation
        if(!contactNumber || !gender || !id)
        {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields',
            });
        }
        //find profile 
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        //updata profile 
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.contactNumber = contactNumber;
        profileDetails.gender = gender;
        await profileDetails.save();

        // return response
        return res.status(200).json({
            success: true,
            message: 'Profie updated successfully',
            profileDetails,
        })
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message:'unable to updat profile please try agiain',
            error: error.message,
        })
    }
}