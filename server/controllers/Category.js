const Category = require("../models/Category");

//create category handler function

exports.createCategory = async (req , res) => {
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
        const categoryDetails = await Category.create({
            name: name,
            description: description,
        });
        console.log(categoryDetails);
        //return response

        return res.status(200).json({
            success:true,
            message: 'category created successfully',
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

//getAllCategories handler function

exports.showAllCategories = async (req , res) => {
    try
    {
       const allCategories = await Category.find({} , {name:true , description:true});
       res.status(200).json({
        success: true,
        data: allCategories,
        message:"All categories are successfully created",
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

//category page details handler function
exports.categoryPageDetails = async (req , res) => {
    try
    {
        //get category id from request
        const {categoryId} = req.body;

        //get courses for specified category id
        const selectedCategory = await Category.findById(categoryId).populate("Course").exec();;

        //validation
        if(!selectedCategory)
        {
            return res.status(404).json({
                success: false,
                message: 'category of the course not found',
            })
        }
        //get courses for different categories
        const differentCategory = await Category.find({_id: {$ne: categoryId}}).populate("Course").exec();

        //get top selling courses for the category
        const topSellingCourses = await Course.find({category: categoryId}).sort({enrolledStudents: -1}).limit(10).exec();

        //return response
        return res.status(200).json({
            success: true,
            message: 'category page details fetched successfully',
            data : {selectedCategory,
                    differentCategory,
                    topSellingCourses,
                  },
        });
    }
    catch(error)
    {
            return res.status(500).json({
            success: false,
            message: error.message,
         });
    }
}