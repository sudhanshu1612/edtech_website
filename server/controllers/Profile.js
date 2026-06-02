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


//delete account
exports.deleteAccount = async (req , res) => {
    try
    {
        //get id
        const id = req.user.id;
        //validation
        const userDetails = await User.findById(id);

        if(!userDetails) {
            return res.status(404).json({
                success: false,
                message:'User not found',
            });
        }
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
        // delete user
        await User.findByIdAndDelete({_id:id});
        //TODO : uneneroold user from all enrolled courses and remove user from all instructors courses
        //return response
        return res.status(200).json({
            success: true,
            message:'User deleted successfully',
        })
        //cron job find what is it and how to use it and implement it for deleting user data after 30 days of account deletion request if user want to recover his account within 30 days then we can recover his account otherwise we will delete his data permanently after 30 days
    }
    catch(error)
    {
            return res.status(500).json({
            success: false,
            message:'unable to delete account please try agiain',
            error: error.message,
        });
    }
}


exports.getAllUserDetails = async (req , res) => {
    try
    {
       //get user
       const id = req.user.id;
       //validation and get user details
       const userDetails = await User.findById(id).populate('additionalDetails').exec();  //populate is used to get the details of the additionalDetails field which is a reference to the Profile model
       if(!userDetails)
       {
        return res.status(404).json({
            success: false,
            message:'User not found',
        });
       }
       //return response
       return res.status(200).json({
        success: true,
        message:'user details fetched succcessfully',
        userDetails,
       })
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: 'unable to get user details please try again',
            error: error.message,
        })
    }
}

 