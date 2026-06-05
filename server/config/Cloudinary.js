const cloudinary = require('cloudinary').v2;
require('dotenv').config();   //cloudinary is being required

exports.cloudinaryConnect = () => {
    try
    {
    //configuring the cloudinary to uplaod the media access
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
    }
    catch(error)
    {
        console.log('cloudinary connection failed',error);
        return res.status(500).json({
            success: false,
            message: 'cloudinary connection failed',
        })
    }
}