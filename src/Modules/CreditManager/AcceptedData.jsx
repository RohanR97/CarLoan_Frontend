// import React from 'react'

// function AcceptedData() {
//   return (
//     <div>
//         <h2>Accepted Datta Data</h2>
//     </div>
//   )
// }
// export default AcceptedData ;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AcceptedDataTable = ({ status = "Accepted" }) => {
  const [acceptedCustomers, setAcceptedCustomers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8084/AcceptedData/${status}`)
      .then((response) => {
        if (response.status === 200 && response.data.length > 0) {
          setAcceptedCustomers(response.data);
        } else {
          setMessage("No accepted customers found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching accepted data:", error);
        setMessage("Error fetching accepted data.");
      });
  }, [status]);

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleDateString("en-IN", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{status} Customer Details</h2>

      {message && <p>{message}</p>}

      {acceptedCustomers.length > 0 && (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", marginTop: "20px" }}>
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Loan Amount</th>
              <th>Tenure</th>
              <th>Sanction Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {acceptedCustomers.map((customer, index) => (
              <tr key={customer.customerID || index}>
                <td>{customer.customerID}</td>
                <td>{customer.customerName}</td>
                <td>{customer.sanctionLetter.loanRequired}</td>
                <td>{customer.sanctionLetter.loanTenureInMonths}</td>
                <td>{formatDate(customer.sanctionLetter.sanctionDate)}</td>
                <td>{customer.sanctionLetter.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AcceptedDataTable;



