# Genpro Service Provider Platform

## Project Overview
Genpro is a comprehensive service provider management platform designed to streamline booking, scheduling, and earnings tracking for beauty and wellness professionals.

## Features
- Mobile Number Authentication
- Provider Dashboard
- Booking Management
- Profile Management
- Earnings Tracking
- Work Schedule Configuration

## Technology Stack
- HTML5
- CSS3
- Vanilla JavaScript
- SessionStorage for Data Management

## Deployment Prerequisites
1. Modern web browser
2. Static website hosting
3. HTTPS support recommended

## Local Development Setup
1. Clone the repository
2. Open `index.html` in a web browser
3. Use Live Server extension for development

## Deployment Steps
1. Choose a hosting platform
2. Upload all files in the project directory
3. Ensure `index.html` is the entry point
4. Configure domain (optional)

## Login Credentials (Test Users)
- Mobile: 9876543210 (John Doe)
- Mobile: 8765432109 (Jane Smith)

## Security Notes
- Uses client-side session management
- Recommended to implement backend authentication for production

## SMS OTP Verification Setup

### Twilio Configuration

1. **Create a Twilio Account**
   - Go to [Twilio's website](https://www.twilio.com/) and sign up for an account
   - Verify your account and add funds if needed

2. **Obtain Twilio Credentials**
   - Log into your Twilio Console
   - Navigate to "Account" > "Settings" > "API Credentials"
   - Find and copy:
     * Account SID
     * Auth Token
     * Twilio Phone Number

3. **Configure Environment Variables**
   - Open `.env` file in the project root
   - Replace placeholders with your actual Twilio credentials:
     ```
     TWILIO_ACCOUNT_SID=your_account_sid_here
     TWILIO_AUTH_TOKEN=your_auth_token_here
     TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
     ```

4. **Important Security Notes**
   - NEVER commit your `.env` file to version control
   - Keep your Twilio credentials confidential
   - Use strong, unique passwords and enable two-factor authentication on your Twilio account

### Troubleshooting
- If SMS fails to send, check:
  * Twilio account balance
  * Phone number format
  * Network connectivity
  * Twilio service status

### Support
For issues, contact project maintainers or Twilio support.

## Project Setup Guide

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB
- Twilio Account

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/genpro.git
   cd genpro
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Fill in your Twilio and MongoDB credentials

   ```bash
   cp .env.example .env
   ```

4. **Twilio Configuration**
   - Sign up at [Twilio](https://www.twilio.com/try-twilio)
   - Get Account SID, Auth Token, and a Twilio Phone Number
   - Update `.env` file with these credentials

5. **Database Setup**
   - Ensure MongoDB is running
   - Create databases: 
     * Development: `genpro`
     * Testing: `genpro_test`

6. **Run Tests**
   ```bash
   npm test
   ```

7. **Start the Server**
   ```bash
   npm start
   ```

### Troubleshooting
- Verify Twilio credentials
- Check MongoDB connection
- Ensure all dependencies are installed

### Security Notes
- Never commit `.env` to version control
- Use strong, unique passwords
- Rotate credentials periodically

## Future Enhancements
- Backend database integration
- User authentication system
- Real-time booking notifications

## Contact
Email: support@genpro.com
