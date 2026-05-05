# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration to store contact form submissions from your SeatifyAI website.

## Overview

The contact form data will be stored in two places:
1. **Google Sheets** (primary storage) - Real-time data storage with email notifications
2. **Local Storage** (fallback) - Browser-based storage if Google Sheets is unavailable

## Step 1: Prepare Your Google Sheet

1. Open your existing Google Sheet: [Seatifyai Leads](https://docs.google.com/spreadsheets/d/1rcclNlHaUQRct1-AFAjuY-kS8vFTP6kfzeIhBr-bZhI/edit?usp=sharing)
2. Create a new sheet named "Contacts" (if it doesn't exist)
3. Add the following headers in the first row:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
   - Column D: Phone
   - Column E: Subject
   - Column F: Message

## Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click on "New Project"
3. Delete the default code and copy the entire content from `google-apps-script.js` in your project
4. **Important**: Update the email address in the script to your preferred email:
   ```javascript
   to: "support@seatifyai.com", // Change this if needed
   ```

## Step 3: Deploy the Web App

1. In the Google Apps Script editor, click "Deploy" → "New deployment"
2. Choose "Web app" as the deployment type
3. Configure the deployment settings:
   - **Description**: "SeatifyAI Contact Form API"
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (required for public website access)
4. Click "Deploy"
5. **Authorization**: You'll need to grant permissions for the script to access your Google Sheets
6. Copy the Web app URL (it will look like: `https://script.google.com/macros/s/ABCDEFGHIJKLMNOPQRSTUVWXYZ123456/exec`)

## Step 4: Update Your Website Code

1. Open `src/services/contactService.ts`
2. Replace `YOUR_SCRIPT_ID` with your actual script ID from the Web app URL
   ```typescript
   private readonly GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec';
   ```

## Step 5: Test the Integration

1. Navigate to `/contact` on your website
2. Fill out the contact form with test data
3. Click "Send Message"
4. Check your Google Sheet for the new entry
5. Check your email for the notification

## Step 6: Access Admin Dashboard

1. Navigate to `/admin` on your website
2. View all stored submissions
3. Download data as CSV if needed
4. Clear data when necessary

## Features

### Automatic Email Notifications
- When someone submits the contact form, you'll receive an email at `support@seatifyai.com`
- The email includes all form details and timestamp

### Local Storage Fallback
- If Google Sheets is temporarily unavailable, data is stored in browser localStorage
- Data is automatically synced when Google Sheets becomes available
- You can download locally stored data as CSV

### Admin Dashboard Features
- View all submissions in a table format
- Download data as CSV file
- Clear stored data
- Real-time data refresh

## Troubleshooting

### Common Issues

1. **"Script execution failed" error**
   - Check if the script has permission to access your Google Sheet
   - Re-deploy the web app with correct permissions

2. **"No data appears in Google Sheet"**
   - Verify the Web app URL is correct in `contactService.ts`
   - Check browser console for any errors
   - Ensure the sheet name is exactly "Contacts"

3. **"Email notifications not working"**
   - Verify the email address in the Google Apps Script
   - Check if MailApp service is enabled in your Google account

### Debug Mode

To enable debug mode, open browser console and look for:
- Google Sheets submission attempts
- Local storage operations
- Any error messages

## Security Considerations

- The Google Apps Script URL is public but only authorized to access your sheet
- Form data is validated before submission
- No sensitive API keys are exposed in the frontend code

## Maintenance

- Periodically check your Google Sheet for data integrity
- Clear old data from localStorage to prevent browser storage issues
- Update email notifications if your support email changes

## Alternative Setup (No Google Sheets)

If you prefer not to use Google Sheets, the system will automatically:
- Store all data in localStorage
- Allow CSV download from admin dashboard
- Provide email notifications via alternative methods

## Support

For issues with:
- **Google Apps Script**: Google's documentation and community forums
- **Website integration**: Check browser console for errors
- **Data management**: Use the admin dashboard at `/admin`

---

**Note**: This setup provides a complete solution for storing and managing contact form submissions with both cloud-based (Google Sheets) and local storage options for maximum reliability.
