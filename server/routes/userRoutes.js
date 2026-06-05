const express = require('express');
const router = express.Router();

// Import Controllers
const { sendOTP, signUp, login } = require('../controllers/Auth');
const { resetPasswordToken, resetPassword } = require('../controllers/ResetPassword');

// Import Middleware
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');

// ============================================================================
//                           AUTHENTICATION ROUTES
// ============================================================================

// Route for sending OTP
router.post('/sendotp', sendOTP);

// Route for user signup
router.post('/signup', signUp);

// Route for user login
router.post('/login', login);

// ============================================================================
//                           PASSWORD RESET ROUTES
// ============================================================================

// Route for sending password reset token
router.post('/reset-password-token', resetPasswordToken);

// Route for resetting password
router.post('/reset-password', resetPassword);

module.exports = router;
