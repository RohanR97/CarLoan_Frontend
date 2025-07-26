// import React from 'react'

// function SendSanctionLetterMail() {
//   return (
//     <div>
//         <h2>SanctionLetterMail</h2>
//     </div>
//   )
// }

// export default SendSanctionLetterMail



import React, { useEffect, useState } from "react";
import axios from "axios";

const SendSanctionLetterMail = () => {
  const [sanctionLetters, setSanctionLetters] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchSanctionData();
  }, []);

  const fetchSanctionData = async () => {
    try {
      const res = await axios.get("http://localhost:8084/getVerifiedCustomersAPI");
      if (res.data && res.data.length > 0) {
        setSanctionLetters(res.data);
        setMessage(""); 
      } else {
        setMessage("⚠️ No sanction letters found.");
      }
    } catch (err) {
      console.error("Error fetching sanction data", err);
      setMessage("❌ Failed to load data");
    }
  };

  const handleSendMail = async (customerID) => {
    try {
      const res = await axios.get(`http://localhost:8084/sendSanctionLetterMail/${customerID}`);
      if (res.data) {
        setMessage(`✅ Mail sent to Customer ID ${customerID}`);
        fetchSanctionData();
      } else {
        setMessage(`❌ Mail sending failed for Customer ID ${customerID}`);
      }
    } catch (err) {
      console.error("Error sending mail", err);
      setMessage("❌ Failed to send mail.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 All Sanction Letters</h2>
      {message && <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>}
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Applicant Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Loan Amount</th>
            <th>Interest Rate</th>
            <th>Tenure</th>
            <th>Monthly EMI</th>
            <th>Status</th>
            <th>Sanction Date</th>
            <th>📧 Action</th>
          </tr>
        </thead>
        <tbody>
          {sanctionLetters.map((item, index) => (
            <tr key={index}>
              <td>{item.customerID}</td>
              <td>{item.sanctionLetter?.applicantName}</td>
              <td>{item.sanctionLetter?.contactDetails}</td>
              <td>{item.customerEmail}</td>
              <td>₹ {item.sanctionLetter?.loanAmountSanctioned}</td>
              <td>{item.sanctionLetter?.rateOfInterest} %</td>
              <td>{item.sanctionLetter?.loanTenureInMonths} months</td>
              <td>₹ {Math.round(item.sanctionLetter?.monthlyEmiAmount)}</td>
              <td>{item.sanctionLetter?.status}</td>
              <td>{new Date(item.sanctionLetter?.sanctionDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleSendMail(item.customerID)}>Send Mail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SendSanctionLetterMail;

