exports.otpEmail = (otp) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Your OTP for Registration</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-wrapper {
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 20px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: bold;
            }
            .header p {
                margin: 10px 0 0 0;
                font-size: 14px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .greeting {
                font-size: 16px;
                margin-bottom: 20px;
                color: #333;
            }
            .otp-section {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 30px;
                border-radius: 8px;
                text-align: center;
                margin: 30px 0;
            }
            .otp-label {
                color: white;
                font-size: 14px;
                margin-bottom: 10px;
                text-transform: uppercase;
                letter-spacing: 1px;
                opacity: 0.9;
            }
            .otp-code {
                color: white;
                font-size: 48px;
                font-weight: bold;
                letter-spacing: 8px;
                font-family: 'Courier New', monospace;
                margin: 0;
                word-break: break-all;
            }
            .otp-info {
                background-color: #f0f0f0;
                padding: 20px;
                border-left: 4px solid #667eea;
                margin: 25px 0;
                border-radius: 4px;
            }
            .otp-info h3 {
                margin-top: 0;
                color: #667eea;
                font-size: 16px;
            }
            .otp-info ul {
                margin: 10px 0;
                padding-left: 20px;
            }
            .otp-info li {
                margin: 8px 0;
                font-size: 14px;
                color: #555;
            }
            .warning {
                background-color: #fff3cd;
                border-left: 4px solid #ffc107;
                padding: 15px;
                border-radius: 4px;
                margin: 20px 0;
                font-size: 14px;
                color: #856404;
            }
            .footer {
                border-top: 1px solid #ddd;
                padding-top: 20px;
                margin-top: 30px;
                font-size: 12px;
                color: #999;
                text-align: center;
            }
            .footer p {
                margin: 5px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="email-wrapper">
                <div class="header">
                    <h1>Verify Your Email</h1>
                    <p>Your One-Time Password for Registration</p>
                </div>
                
                <div class="content">
                    <div class="greeting">
                        <p>Hello,</p>
                        <p>Thank you for registering with us! To complete your registration, please use the One-Time Password (OTP) below:</p>
                    </div>

                    <div class="otp-section">
                        <div class="otp-label">Your One-Time Password</div>
                        <div class="otp-code">${otp}</div>
                    </div>

                    <div class="otp-info">
                        <h3>⚠️ Important Information</h3>
                        <ul>
                            <li><strong>Validity:</strong> This OTP is valid for 10 minutes only</li>
                            <li><strong>Usage:</strong> Use this code only once during registration</li>
                            <li><strong>Security:</strong> Never share this OTP with anyone</li>
                            <li><strong>Confirmation:</strong> You will be asked to enter this code on the registration page</li>
                        </ul>
                    </div>

                    <div class="warning">
                        <strong>⚠️ Security Alert:</strong> If you did not request this OTP, please ignore this email. Your account remains secure.
                    </div>

                    <p style="font-size: 14px; color: #666; margin-top: 30px;">
                        If you have any questions or need assistance, please don't hesitate to contact our support team.
                    </p>
                </div>

                <div class="footer">
                    <p>&copy; 2026 Course Management Platform. All rights reserved.</p>
                    <p>This is an automated message. Please do not reply to this email.</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};
