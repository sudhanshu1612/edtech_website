 const express = require('express');
 const app = express();

 const userRoutes = require('./routes/userRoutes');
 const profileRoutes = require('./routes/profileRoutes');
 const paymentRoutes = require('./routes/paymentRoutes');
 const courseRoutes = require('./routes/courseRoutes');  

 const database = require('./config/database');
 const cookieParser = require('cookie-parser');
 const cors = require('cors');
 const {cloudinaryConnect} = require('./config/Cloudinary');
 const fileUpload = require('express-fileupload');
 const dotenv = require('dotenv');

 const PORT = process.env.PORT || 4000;

 //connect to db
 database.connect();

 app.use(express.json());
 app.use(cookieParser());
 app.use(cors(
    {
        origin: 'http://localhost:3000',  //the request comming form front end
        credentials: true,
    }
 ));

 app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
 )

 //cloudinary connection

 cloudinaryConnect();

 //routes
 app.use('/api/v1/auth', userRoutes);
 app.use('/api/v1/profile', profileRoutes);
 app.use('/api/v1/payment', paymentRoutes);
 app.use('/api/v1/courses', courseRoutes);

 //default route
 app.get("/", (req,res) => {
     return res.json({
        success: true,
        messaage:"your server is up and running",
     });
 });

 app.listen(PORT, () => {
     console.log(`server is running on port ${PORT}`);
 } );