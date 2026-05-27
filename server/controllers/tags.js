const Tag = require("../models/tags");

//create tag handler function

exports.createTag = async (req , res) => {
    try
    {
        //fetch data 
        const {name , description } =req.body;  
        //validation 
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: 'all fields are required',
            })
        }
        //create entry in db
        const tagDetails = await Tag.create({
            name: name,
            description: description,
        });
        console.log(tagDetails);
        //return response

        return res.status(200).json({
            success:true,
            message: 'tag created successfully',
        })
    }
    catch(error)
    {
        return res.status(500).json({
            success:false,
            message: error.message,
        })
    }
};

//getAllTags handler function

exports.showAllTags = async (req , res) => {
    try
    {
       const allTags = await Tag.find({} , {name:true , description:true});
       res.status(200).json({
        success: true,
        message:"All tags are successfully created",
       });
    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}