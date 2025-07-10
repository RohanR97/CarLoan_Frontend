import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function ViewCustomer() {

    const [customer, setCustomer] = useState([]);

    function getAllCustomers()
    {
        axios.get("http://localhost:8081/getAllEnquiry")
        .then(res=>{
            setCustomer(res.data);
        })
        .catch(error=>console.log(error.message))
    }

  useEffect(getAllCustomers,[]);
  return (
    <div className="table-responsive">

        <h4 className="text-center text-primary mb-3">Customer Enquiries</h4>
      <table className="table table-bordered table-striped">
        <thead  className="table-dark">
            <tr>
                <th>Customer Id</th>
                <th>Age</th>
                <th>E-Mail</th>
                <th>Enquiry Status</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile No.</th>
                <th>Pan Card No</th>
            </tr>
        </thead>

        <tbody>
            {
                customer.map((customer,i)=>(
                    <tr key={i}>
                        <td>{customer.customerID}</td>
                        <td>{customer.age}</td>
                        <td>{customer.email}</td>
                        <td>{customer.enquiryStatus}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.mobileNo}</td>
                        <td>{customer.panCardNo}</td>

                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ViewCustomer
