const express = require('express');
const router = express.Router();

// Import Controllers
const { 
    createCourse, 
    getAllCourse, 
    getCourseDetails 
} = require('../controllers/Course');

const { 
    createCategory, 
    showAllCategories, 
    categoryPageDetails 
} = require('../controllers/Category');

const { 
    createSection, 
    updateSection, 
    deleteSection 
} = require('../controllers/Section');

const { 
    createSubSection, 
    updateSubSection, 
    deleteSubSection 
} = require('../controllers/SubSection');

const { 
    createRating, 
    getAverageRating, 
    getAllRating 
} = require('../controllers/RatingAndReview');

// Import Middleware
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');

// ============================================================================
//                           COURSE ROUTES
// ============================================================================

// Create a new course (Protected - Instructor only)
router.post('/create-course', auth, isInstructor, createCourse);

// Get all courses
router.get('/get-all-courses', getAllCourse);

// Get course details
router.get('/get-course-details', getCourseDetails);

// ============================================================================
//                           SECTION ROUTES
// ============================================================================

// Create a section (Protected - Instructor only)
router.post('/add-section', auth, isInstructor, createSection);

// Update a section (Protected - Instructor only)
router.post('/update-section', auth, isInstructor, updateSection);

// Delete a section (Protected - Instructor only)
router.post('/delete-section/:sectionId', auth, isInstructor, deleteSection);

// ============================================================================
//                           SUB-SECTION ROUTES
// ============================================================================

// Create a sub-section (Protected - Instructor only)
router.post('/add-sub-section', auth, isInstructor, createSubSection);

// Update a sub-section (Protected - Instructor only)
router.post('/update-sub-section', auth, isInstructor, updateSubSection);

// Delete a sub-section (Protected - Instructor only)
router.post('/delete-sub-section/:subSectionId', auth, isInstructor, deleteSubSection);

// ============================================================================
//                           CATEGORY ROUTES
// ============================================================================

// Create a category (Protected - Admin only)
router.post('/create-category', auth, isAdmin, createCategory);

// Get all categories
router.get('/show-all-categories', showAllCategories);

// Get category page details
router.post('/get-category-page-details', categoryPageDetails);

// ============================================================================
//                           RATING AND REVIEW ROUTES
// ============================================================================

// Create rating and review (Protected - Student only)
router.post('/create-rating', auth, isStudent, createRating);

// Get average rating for a course
router.get('/get-average-rating', getAverageRating);

// Get all ratings for a course
router.get('/get-all-rating', getAllRating);

module.exports = router;
