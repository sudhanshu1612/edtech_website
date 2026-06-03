exports.courseEnrollmentEmail = (courseName, studentName) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Course Enrollment Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
                margin: -20px -20px 20px -20px;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
            }
            .content {
                background-color: white;
                padding: 20px;
                border-radius: 0 0 8px 8px;
            }
            .greeting {
                font-size: 16px;
                margin-bottom: 15px;
            }
            .course-info {
                background-color: #f0f0f0;
                padding: 15px;
                border-left: 4px solid #4CAF50;
                margin: 20px 0;
                border-radius: 4px;
            }
            .course-info p {
                margin: 10px 0;
                font-size: 14px;
            }
            .course-name {
                font-weight: bold;
                font-size: 18px;
                color: #4CAF50;
            }
            .next-steps {
                background-color: #e8f5e9;
                padding: 15px;
                border-radius: 4px;
                margin: 20px 0;
            }
            .next-steps h3 {
                color: #4CAF50;
                margin-top: 0;
            }
            .next-steps ul {
                padding-left: 20px;
            }
            .next-steps li {
                margin-bottom: 10px;
                font-size: 14px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 12px;
                color: #999;
                border-top: 1px solid #ddd;
                padding-top: 15px;
            }
            .button {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 4px;
                display: inline-block;
                margin: 20px 0;
            }
            .button:hover {
                background-color: #45a049;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎓 Welcome to Your Course!</h1>
            </div>
            <div class="content">
                <div class="greeting">
                    <p>Dear <strong>${studentName}</strong>,</p>
                    <p>Congratulations! 🎉 Your enrollment has been successfully confirmed.</p>
                </div>

                <div class="course-info">
                    <p>You have been enrolled in:</p>
                    <p class="course-name">📚 ${courseName}</p>
                </div>

                <p>You now have access to all the course materials, including lectures, assignments, and resources. Get ready to embark on an exciting learning journey!</p>

                <div class="next-steps">
                    <h3>📋 Next Steps:</h3>
                    <ul>
                        <li><strong>Access Your Course:</strong> Log in to your account to view course content</li>
                        <li><strong>Download Materials:</strong> All course materials are available for download</li>
                        <li><strong>Join Community:</strong> Connect with fellow students in the discussion forum</li>
                        <li><strong>Check Schedule:</strong> Review the course timeline and assignment deadlines</li>
                    </ul>
                </div>

                <p>If you have any questions or need technical support, please don't hesitate to reach out to our support team.</p>

                <p style="text-align: center;">
                    <a href="https://your-platform.com/courses" class="button">Go to Your Course</a>
                </p>

                <p>Happy learning!</p>
                <p>Best regards,<br><strong>The Learning Platform Team</strong></p>

                <div class="footer">
                    <p>This is an automated email. Please do not reply directly to this message.</p>
                    <p>&copy; 2026 Your Learning Platform. All rights reserved.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};
