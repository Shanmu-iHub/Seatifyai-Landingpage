import { useState, useEffect } from "react";
import { contactService } from "@/services/contactService";
import { ContactFormData } from "@/services/contactService";

const DataManager = () => {
  const [submissions, setSubmissions] = useState<ContactFormData[]>([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const storedSubmissions = contactService.getStoredSubmissions();
    setSubmissions(storedSubmissions);
  }, []);

  const handleDownloadCSV = () => {
    contactService.downloadCSV();
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all stored data? This action cannot be undone.')) {
      contactService.clearStoredData();
      setSubmissions([]);
    }
  };

  const refreshData = () => {
    const storedSubmissions = contactService.getStoredSubmissions();
    setSubmissions(storedSubmissions);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Contact Form Data Management</h2>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowData(!showData)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {showData ? 'Hide Data' : 'Show Data'} ({submissions.length} submissions)
          </button>
          
          <button
            onClick={refreshData}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Refresh
          </button>
          
          <button
            onClick={handleDownloadCSV}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
            disabled={submissions.length === 0}
          >
            Download CSV
          </button>
          
          <button
            onClick={handleClearData}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            disabled={submissions.length === 0}
          >
            Clear All Data
          </button>
        </div>

        {showData && submissions.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-b text-left">Timestamp</th>
                  <th className="px-4 py-2 border-b text-left">Name</th>
                  <th className="px-4 py-2 border-b text-left">Email</th>
                  <th className="px-4 py-2 border-b text-left">Phone</th>
                  <th className="px-4 py-2 border-b text-left">Subject</th>
                  <th className="px-4 py-2 border-b text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">
                      {new Date(submission.timestamp).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border-b">{submission.name}</td>
                    <td className="px-4 py-2 border-b">{submission.email}</td>
                    <td className="px-4 py-2 border-b">{submission.phone || '-'}</td>
                    <td className="px-4 py-2 border-b">{submission.subject}</td>
                    <td className="px-4 py-2 border-b max-w-xs truncate" title={submission.message}>
                      {submission.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showData && submissions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No submissions found. Data will appear here when users submit the contact form.
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Setup Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Go to <a href="https://script.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">script.google.com</a></li>
            <li>Create a new project and copy the code from <code>google-apps-script.js</code></li>
            <li>Deploy as Web App with "Execute as: Me" and "Who has access: Anyone"</li>
            <li>Copy the Web App URL and update it in <code>src/services/contactService.ts</code></li>
            <li>Share your Google Sheet with the script's email address</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DataManager;
