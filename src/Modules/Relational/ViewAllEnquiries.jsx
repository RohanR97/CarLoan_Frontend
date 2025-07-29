// import React from 'react'

// function ViewAllEnquiries() {
//   return (
//     <div>
//       <h2>View All Enquiries</h2>
//     </div>
//   )
// }

// export default ViewAllEnquiries


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get("http://localhost:8081/getAll");
      setEnquiries(response.data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

 



 

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Enquiries</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Customer ID</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Mobile No</th>
              <th className="border px-4 py-2">PAN</th>
              <th className="border px-4 py-2">Status</th>
              

            </tr>
          </thead >
          <tbody>
            {enquiries.map((enquiry,customerID) => (
              <tr key={enquiry.customerID}
               className="hover:bg-gray-50">
               <td className="border px-4 py-2">{enquiry.customerID}</td>
                <td className="border px-4 py-2">{enquiry.firstName}</td>
                <td className="border px-4 py-2">{enquiry.lastName}</td>
                <td className="border px-4 py-2">{enquiry.age}</td>
                <td className="border px-4 py-2">{enquiry.email}</td>
                <td className="border px-4 py-2">{enquiry.mobileNo}</td>
                <td className="border px-4 py-2">{enquiry.panCardNo}</td>
                <td className="border px-4 py-2">{enquiry.enquiryStatus}</td>
                
               
                {/* <td>
                                 <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCustomer(enquiry.customerID)}
                    >
                      Delete
                    </button>
                </td> */}

              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllEnquiries;