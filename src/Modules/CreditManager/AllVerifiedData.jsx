// import React from 'react'

// function AllVerifiedData() {
//   return (
//     <div>
//         <h2>Verified Data</h2>
//     </div>
//   )
// }
// export default AllVerifiedData ;


import React, { useEffect, useState } from "react";
import axios from "axios";

const AllVerifiedData = () => {
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState("");

  const fetchVerifiedCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:8084/getVerifiedCustomersAPI");
      
      if (response.data && response.data.length > 0) {
        setCustomers(response.data);
        setMessage("");
      } else {
        setCustomers([]);
        setMessage("No verified customers found.");
      }
    } catch (error) {
      setMessage("Error fetching data.");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchVerifiedCustomers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📋 All Verified Customers</h2>

      {message && <p className="text-red-500">{message}</p>}

      {customers.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border">Customer ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Loan Status</th>
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
               

              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !message && <p>Loading...</p>
      )}
    </div>
  );
};

export default AllVerifiedData;

