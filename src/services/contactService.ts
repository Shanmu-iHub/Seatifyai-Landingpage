interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

class ContactService {
  private readonly GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyMwnhvuMJTV4GPViWB6gjy24FlmUnnp2TZcWTDdwdo2DE3q0CiJ63srd_WJj6omCLxEA/exec';
  private readonly LOCAL_STORAGE_KEY = 'seatifyai_contact_submissions';

  // Store form data in Google Sheets
  async submitToGoogleSheets(data: ContactFormData): Promise<boolean> {
    try {
      const response = await fetch(this.GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  }

  // Store form data in localStorage as fallback
  storeInLocalStorage(data: ContactFormData): void {
    try {
      const existingData = this.getStoredSubmissions();
      existingData.push(data);
      
      // Keep only last 100 submissions to prevent localStorage overflow
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100);
      }
      
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(existingData));
    } catch (error) {
      console.error('Error storing in localStorage:', error);
    }
  }

  // Get stored submissions from localStorage
  getStoredSubmissions(): ContactFormData[] {
    try {
      const stored = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  // Export stored data as CSV
  exportToCSV(): string {
    const data = this.getStoredSubmissions();
    if (data.length === 0) return '';

    const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'];
    const csvContent = [
      headers.join(','),
      ...data.map(row => [
        row.timestamp,
        `"${row.name.replace(/"/g, '""')}"`,
        `"${row.email}"`,
        `"${row.phone}"`,
        `"${row.subject}"`,
        `"${row.message.replace(/"/g, '""').replace(/\n/g, '\\n')}"`
      ].join(','))
    ].join('\n');

    return csvContent;
  }

  // Download stored data as CSV file
  downloadCSV(): void {
    const csvContent = this.exportToCSV();
    if (!csvContent) {
      alert('No data to download');
      return;
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seatifyai_contacts_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  // Main submission method
  async submitForm(formData: Omit<ContactFormData, 'timestamp'>): Promise<{ success: boolean; message: string }> {
    const submissionData: ContactFormData = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    // Always store in localStorage first
    this.storeInLocalStorage(submissionData);

    // Try to submit to Google Sheets
    const googleSheetsSuccess = await this.submitToGoogleSheets(submissionData);

    if (googleSheetsSuccess) {
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      };
    } else {
      return {
        success: true,
        message: 'Thank you for your message! Your submission has been saved locally and will be processed soon.'
      };
    }
  }

  // Clear stored data (for admin use)
  clearStoredData(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  }
}

export const contactService = new ContactService();
export type { ContactFormData };
