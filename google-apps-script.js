// Google Apps Script for Contact Form Integration
// To deploy this script:
// 1. Go to script.google.com
// 2. Create a new project
// 3. Copy this code
// 4. Deploy as Web App
// 5. Copy the Web App URL and update it in contactService.ts

function doPost(e) {
  try {
    const sheetName = "Contacts"; // Change this to match your sheet name
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      // Create sheet if it doesn't exist
      const newSheet = ss.insertSheet(sheetName);
      // Add headers
      newSheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Subject", "Message"]);
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Sheet created, please try again"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Missing required fields"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add row to sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.subject || "",
      data.message || ""
    ]);
    
    // Send email notification (optional)
    try {
      MailApp.sendEmail({
        to: "support@seatifyai.com",
        subject: "New Contact Form Submission: " + data.subject,
        body: "You have received a new contact form submission:\n\n" +
              "Name: " + data.name + "\n" +
              "Email: " + data.email + "\n" +
              "Phone: " + (data.phone || "Not provided") + "\n" +
              "Subject: " + data.subject + "\n\n" +
              "Message:\n" + data.message + "\n\n" +
              "Timestamp: " + (data.timestamp || new Date().toISOString())
      });
    } catch (emailError) {
      Logger.log("Email notification failed: " + emailError.toString());
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: "success", message: "Data saved successfully"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("SeatifyAI Contact Form API")
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to get all submissions (for admin use)
function getAllSubmissions() {
  try {
    const sheetName = "Contacts";
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);
    
    const submissions = rows.map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });
    
    return ContentService.createTextOutput(JSON.stringify({status: "success", data: submissions}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to clear old submissions (for admin use)
function clearOldSubmissions(daysOld = 30) {
  try {
    const sheetName = "Contacts";
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({status: "error", message: "Sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getDataRange().getValues();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    let rowsToDelete = 0;
    for (let i = 1; i < data.length; i++) {
      const timestamp = new Date(data[i][0]);
      if (timestamp < cutoffDate) {
        rowsToDelete++;
      }
    }
    
    if (rowsToDelete > 1) { // Keep header row
      sheet.deleteRows(2, rowsToDelete - 1);
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: "success", message: `Cleared ${rowsToDelete - 1} old submissions`}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
