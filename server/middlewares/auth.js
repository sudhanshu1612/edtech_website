const jwt = require("jsonwebtoken");
require("dotenv").config;
const User = require("../models/User");

//auth 
exports.auth = async ( req , res , next) => 
{
    try
    {
       //extrct token 
       const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ", "");

       //if missing token return response
       if(!token)
       {
          return res.status(401).json(
            {
                success: false,
                message: 'Token is missing',
            })
       }
       //verify the token
       try
       {
          const decode = jwt.verify(token , process.env.JWT_SECRET);
          console.log(decode);
          req.user = decode;
       }
       catch(error)
       {
           //issue in verification
           res.status(401).json(
            {
                success: false,
                message: 'Token is invalid',
            })
       }
       next();
    }
    catch (error)
    {
        res.status(401).json(
            {
                success: false,
                message: 'Something went wrong while validating the token',
            })
    }
}
//isstudent
exports.isStudent = async (req ,res , next) =>
{
   try
   {
      if(req.user.accountType !== "Student")
      {
        return res.status(401).json(
            {
                success: false,
                message:"this is protected route for students only",
            }
        )}
    next();
   }
   catch(error)
   {
      res.status(401).json(
        {
            success: false,
            message: 'User role cannot be verified',
        })
   }
}
//isinstructor
exports.isinstructor = async (req ,res , next) =>
{
   try
   {
      if(req.user.accountType !== "Instructor")
      {
        return res.status(401).json(
            {
                success: false,
                message:"this is protected route for instructor only",
            }
        )}
    next();
   }
   catch(error)
   {
      res.status(401).json(
        {
            success: false,
            message: 'User role cannot be verified',
        })
   }
}
//isAdmin
exports.isAdmin = async (req ,res , next) =>
{
   try
   {
      if(req.user.accountType !== "Admin")
      {
        return res.status(401).json(
            {
                success: false,
                message:"this is protected route for Admin only",
            }
        )}
    next();
   }
   catch(error)
   {
      res.status(401).json(
        {
            success: false,
            message: 'User role cannot be verified',
        })
   }
}

