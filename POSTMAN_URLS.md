# Postman API Testing URLs

**Base URL:** `http://localhost:4000/api/v1`

---

## 🔐 AUTHENTICATION ROUTES (`/auth`)

### 1. Send OTP
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/auth/sendotp`
- **Body (JSON):**
```json
{
  "email": "user@example.com"
}
```

### 2. Sign Up
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/auth/signup`
- **Body (JSON):**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "accountType": "Student",
  "otp": "123456"
}
```

### 3. Login
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/auth/login`
- **Body (JSON):**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 4. Reset Password Token
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/auth/reset-password-token`
- **Body (JSON):**
```json
{
  "email": "john@example.com"
}
```

### 5. Reset Password
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/auth/reset-password`
- **Body (JSON):**
```json
{
  "password": "newPassword123",
  "confirmPassword": "newPassword123",
  "token": "reset_token_here"
}
```

---

## 👤 PROFILE ROUTES (`/profile`)

### 1. Update Profile
- **Method:** PUT
- **URL:** `http://localhost:4000/api/v1/profile/update-profile`
- **Headers:** `Authorization: Bearer {token}`
- **Body (JSON):**
```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "about": "I love coding",
  "contactNumber": "1234567890"
}
```

### 2. Get User Details
- **Method:** GET
- **URL:** `http://localhost:4000/api/v1/profile/get-user-details`
- **Headers:** `Authorization: Bearer {token}`

### 3. Delete Account
- **Method:** DELETE
- **URL:** `http://localhost:4000/api/v1/profile/delete-account`
- **Headers:** `Authorization: Bearer {token}`

---

## 💳 PAYMENT ROUTES (`/payment`)

### 1. Capture Payment
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/payment/capture-payment`
- **Headers:** `Authorization: Bearer {token}` (Student only)
- **Body (JSON):**
```json
{
  "courseId": "course_id_here"
}
```

### 2. Verify Payment Signature
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/payment/verify-signature`
- **Headers:** `Authorization: Bearer {token}` (Student only)
- **Body (JSON):**
```json
{
  "razorpay_order_id": "order_id_here",
  "razorpay_payment_id": "payment_id_here",
  "razorpay_signature": "signature_here"
}
```

---

## 📚 COURSE ROUTES (`/courses`)

### 1. Create Course
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/create-course`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)
- **Body (Form-data):**
  - `courseName` (text)
  - `courseDescription` (text)
  - `whatYouWillLearn` (text)
  - `category` (text - category ID)
  - `thumbnail` (file)

### 2. Get All Courses
- **Method:** GET
- **URL:** `http://localhost:4000/api/v1/courses/get-all-courses`

### 3. Get Course Details
- **Method:** GET
- **URL:** `http://localhost:4000/api/v1/courses/get-course-details?courseId=course_id_here`

---

## 📖 SECTION ROUTES (`/courses`)

### 1. Create Section
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/add-section`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)
- **Body (JSON):**
```json
{
  "sectionName": "Introduction",
  "courseId": "course_id_here"
}
```

### 2. Update Section
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/update-section`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)
- **Body (JSON):**
```json
{
  "sectionId": "section_id_here",
  "sectionName": "Updated Section Name"
}
```

### 3. Delete Section
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/delete-section/section_id_here`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)

---

## 📝 SUB-SECTION ROUTES (`/courses`)

### 1. Create Sub-Section
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/add-sub-section`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)
- **Body (Form-data):**
  - `sectionId` (text)
  - `title` (text)
  - `description` (text)
  - `timeDuration` (text)
  - `videoFile` (file)

### 2. Update Sub-Section
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/update-sub-section`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)
- **Body (Form-data):**
  - `subSectionId` (text)
  - `title` (text)
  - `description` (text)
  - `timeDuration` (text)
  - `videoFile` (file - optional)

### 3. Delete Sub-Section
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/delete-sub-section/subSectionId_here`
- **Headers:** `Authorization: Bearer {token}` (Instructor only)

---

## 🏷️ CATEGORY ROUTES (`/courses`)

### 1. Create Category
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/create-category`
- **Headers:** `Authorization: Bearer {token}` (Admin only)
- **Body (JSON):**
```json
{
  "name": "Programming",
  "description": "All programming related courses"
}
```

### 2. Get All Categories
- **Method:** GET
- **URL:** `http://localhost:4000/api/v1/courses/show-all-categories`

### 3. Get Category Page Details
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/get-category-page-details`
- **Body (JSON):**
```json
{
  "categoryId": "category_id_here"
}
```

---

## ⭐ RATING AND REVIEW ROUTES (`/courses`)

### 1. Create Rating & Review
- **Method:** POST
- **URL:** `http://localhost:4000/api/v1/courses/create-rating`
- **Headers:** `Authorization: Bearer {token}` (Student only)
- **Body (JSON):**
```json
{
  "courseId": "course_id_here",
  "rating": 5,
  "review": "Great course!"
}
```

### 2. Get Average Rating
- **Method:** GET
- **URL:** `http://localhost:4000/api/v1/courses/get-average-rating?courseId=course_id_here`

### 3. Get All Ratings
- **Method:** GET
- **URL:** `http://localhost:4000/api/v1/courses/get-all-rating?courseId=course_id_here`

---

## 🔑 Authentication Notes

- Replace `{token}` with the JWT token received from the login endpoint
- Protected routes require the Authorization header with format: `Bearer {token}`
- Account Types: `Student`, `Instructor`, `Admin`
- For form-data requests, ensure the Content-Type is set to `multipart/form-data`

## Tips for Postman

1. Create an environment variable for the base URL and token:
   - Variable: `baseUrl` = `http://localhost:4000/api/v1`
   - Variable: `token` = Your JWT token
   
2. Use `{{baseUrl}}` and `{{token}}` in your requests

3. Store tokens from login response for subsequent authenticated requests

4. Test order: Auth → Categories → Courses → Sections → SubSections → Ratings → Payments
