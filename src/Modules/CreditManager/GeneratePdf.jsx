// // import React from 'react'

// // function GeneratePdf() {
// //   return (
// //     <div>
// //         <h2>GeneratePdf</h2>
// //     </div>
// //   )
// // }



// import React, { useState } from "react";
// import axios from "axios";

// const GeneratePdf = () => {
//   const [customerID, setCustomerID] = useState("");
//   const [sanctionData, setSanctionData] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleGenerate = async () => {
//     try {
//       const sanctionRequest = {
//         loanRequired: 1000000 // Replace with dynamic input if needed
//       };

//       const res = await axios.put(
//         `http://localhost:8084/generatePdf/${customerID}`,
//         sanctionRequest
//       );

//       if (res.data) {
//         setSanctionData(res.data);
//         setMessage("✅ Sanction Letter PDF generated successfully!");
//       } else {
//         setMessage("⚠️ No data returned from the server.");
//       }
//     } catch (error) {
//       console.error("Error generating sanction PDF:", error);
//       setMessage("❌ Failed to generate PDF.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>📄 Generate Sanction Letter PDF</h2>

//       <input
//         type="text"
//         placeholder="Enter Customer ID"
//         value={customerID}
//         onChange={(e) => setCustomerID(e.target.value)}
//         style={{ padding: "8px", marginRight: "10px", width: "200px" }}
//       />

//       <button onClick={handleGenerate} style={{ padding: "8px 16px" }}>
//         Generate PDF
//       </button>

//       <p style={{ marginTop: "15px", color: message.startsWith("✅") ? "green" : "red" }}>
//         {message}
//       </p>

//       {sanctionData?.sanctionLetter && (
//         <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "6px" }}>
//           <h4>📋 Sanction Letter Details</h4>
//           <p><strong>Applicant Name:</strong> {sanctionData.sanctionLetter.applicantName}</p>
//           <p><strong>Contact:</strong> {sanctionData.sanctionLetter.contactDetails}</p>
//           <p><strong>Email:</strong> {sanctionData.customerEmail}</p>
//           <p><strong>Loan Amount:</strong> ₹{sanctionData.sanctionLetter.loanAmountSanctioned}</p>
//           <p><strong>Rate of Interest:</strong> {sanctionData.sanctionLetter.rateOfInterest}%</p>
//           <p><strong>Tenure:</strong> {sanctionData.sanctionLetter.loanTenureInMonths} months</p>
//           <p><strong>Monthly EMI:</strong> ₹{Math.round(sanctionData.sanctionLetter.monthlyEmiAmount)}</p>
//           <p><strong>Status:</strong> {sanctionData.sanctionLetter.status}</p>
//           <p><strong>Sanction Date:</strong> {new Date(sanctionData.sanctionLetter.sanctionDate).toLocaleDateString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeneratePdf;
import React, { useEffect, useState } from "react";
import axios from "axios";

const GeneratePdf = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedSanctionData, setSelectedSanctionData] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch verified customers when the component loads
  const fetchVerifiedCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:8084/getVerifiedCustomersAPI");
      setCustomers(res.data || []);
    } catch (error) {
      console.error("Error fetching verified customers:", error);
      setMessage("❌ Failed to fetch verified customers.");
    }
  };

  useEffect(() => {
    fetchVerifiedCustomers();
  }, []);

  // Generate PDF for a specific customer
  const handleGeneratePdf = async (customerID) => {
    try {
      const sanctionRequest = {
        loanRequired: 1000000 // Static or make dynamic if needed
      };

      const res = await axios.put(
        `http://localhost:8084/generatePdf/${customerID}`,
        sanctionRequest
      );

      if (res.data) {
        setSelectedSanctionData(res.data);
        setMessage("✅ Sanction Letter PDF generated successfully!");
      } else {
        setMessage("⚠️ No data returned from the server.");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      setMessage("❌ Failed to generate PDF.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📄 Generate Sanction Letters</h2>

      {message && <p className="mb-4 text-red-600">{message}</p>}

      {customers.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border">Customer ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Loan Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border">{customer.customerID}</td>
                <td className="py-2 px-4 border">{customer.customerName}</td>
                <td className="py-2 px-4 border">{customer.customerEmail}</td>
                <td className="py-2 px-4 border">
                  {customer.customerLoanApplication?.loanStatus || "N/A"}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => handleGeneratePdf(customer.customerID)}
                  >
                    Generate PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No verified customers found.</p>
      )}

      {/* Display sanction letter details if available */}
      {selectedSanctionData?.sanctionLetter && (
        <div className="mt-6 border p-4 rounded bg-gray-100">
          <h4 className="text-lg font-semibold mb-2">📋 Sanction Letter Details</h4>
          <p><strong>Applicant Name:</strong> {selectedSanctionData.sanctionLetter.applicantName}</p>
          <p><strong>Contact:</strong> {selectedSanctionData.sanctionLetter.contactDetails}</p>
          <p><strong>Email:</strong> {selectedSanctionData.customerEmail}</p>
          <p><strong>Loan Amount:</strong> ₹{selectedSanctionData.sanctionLetter.loanAmountSanctioned}</p>
          <p><strong>Rate of Interest:</strong> {selectedSanctionData.sanctionLetter.rateOfInterest}%</p>
          <p><strong>Tenure:</strong> {selectedSanctionData.sanctionLetter.loanTenureInMonths} months</p>
          <p><strong>Monthly EMI:</strong> ₹{Math.round(selectedSanctionData.sanctionLetter.monthlyEmiAmount)}</p>
          <p><strong>Status:</strong> {selectedSanctionData.sanctionLetter.status}</p>
          <p><strong>Sanction Date:</strong> {new Date(selectedSanctionData.sanctionLetter.sanctionDate).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default GeneratePdf;
