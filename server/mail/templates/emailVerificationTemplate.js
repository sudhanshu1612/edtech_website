exports.emailVerificationTemplate = (otp) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f7fb;
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
            .otp-box {
                background-color: #e8f5e9;
                border: 1px solid #4CAF50;
                border-radius: 8px;
                color: #2e7d32;
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 8px;
                margin: 24px 0;
                padding: 16px;
                text-align: center;
            }
            .note {
                background-color: #f0f0f0;
                border-left: 4px solid #4CAF50;
                border-radius: 4px;
                margin: 20px 0;
                padding: 15px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 12px;
                color: #999;
                border-top: 1px solid #ddd;
                padding-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Email Verification</h1>
            </div>
            <div class="content">
                <p>Hello,</p>
                <p>Use the OTP below to verify your email address for Study Notion.</p>

                <div class="otp-box">${otp}</div>

                <div class="note">
                    <p>This OTP is valid for 5 minutes. Do not share it with anyone.</p>
                </div>

                <p>If you did not request this verification, you can safely ignore this email.</p>
                <p>Best regards,<br><strong>The Study Notion Team</strong></p>

                <div class="footer">
                    <p>This is an automated email. Please do not reply directly to this message.</p>
                    <p>&copy; 2026 Study Notion. All rights reserved.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};
