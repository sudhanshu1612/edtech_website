const express = require('express');
const router = express.Router();

// Import Controllers
const { 
    capturePayment, 
    verifySignature
} = require('../controllers/Payments');

// Import Middleware
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');

// ============================================================================
//                           PAYMENT ROUTES
// ============================================================================

// Route for capturing payment (Protected - Student only)
router.post('/capture-payment', auth, isStudent, capturePayment);

// Route for verifying payment signature (Protected - Student only)
router.post('/verify-signature', auth, isStudent, verifySignature);

module.exports = router;
