const express = require('express');
const router = express.Router();

// Import Controllers
const { 
    updateProfile, 
    deleteAccount, 
    getAllUserDetails 
} = require('../controllers/Profile');

// Import Middleware
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');

// ============================================================================
//                           PROFILE ROUTES
// ============================================================================

// Route for updating profile information (Protected - requires auth)
router.put('/update-profile', auth, updateProfile);

// Route for getting all user details (Protected - requires auth)
router.get('/get-user-details', auth, getAllUserDetails);

// Route for deleting user account (Protected - requires auth)
router.delete('/delete-account', auth, deleteAccount);

module.exports = router;
