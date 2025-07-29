<<<<<<< HEAD
import React from 'react'

function ApplyLoan() {
  return (
    <div>
        <h2>Apply Loan</h2>
    </div>
  )
}

export default ApplyLoan
=======
// // import React from 'react'

// function ApplyLoan() {
//   return (
//     <div>
//         <h2>Apply Loan</h2>
//     </div>
//   )
// }

// export default ApplyLoan

import React, { useState } from 'react';
import axios from 'axios';

const ApplyLoanForm = () => {
  const [basicDetails, setBasicDetails] = useState({
    customerID: '',
    dateOfBirth: '',
    requiredTenure: '',
    customerGender: '',
    additionalMobileNumber: '',
    amountPaidForHome: '',
  });

  const [familyInfo, setFamilyInfo] = useState({
    noOfFamilyMember: '',
    noOfChild: '',
    maritalStatus: '',
    dependentMember: '',
    familyIncome: '',
  });

  const [accountDetails, setAccountDetails] = useState({
    accountType: '',
    accountBalance: '',
    accountHolderName: '',
    accountStatus: '',
    accountNumber: '',
  });

  const [guarantorDetails, setGuarantorDetails] = useState({
    guarantorName: '',
    guarantorDateOfBirth: '',
    guarantorRelationshipWithCustomer: '',
    guarantorMobileNumber: '',
    guarantorAdharCardNo: '',
    guarantorMortgageDetails: '',
    guarantorJobDetails: '',
    guarantorLocalAddress: '',
    guarantorPermanentAddress: '',
  });

  const [files, setFiles] = useState({
    addressProof: null,
    panCard: null,
    aadharCard: null,
    photo: null,
    signature: null,
    bankCheque: null,
    salarySlips: null,
    incomeTax: null,
  });

  const handleInputChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles(prev => ({ ...prev, [name]: fileList[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all files are uploaded
    for (const [key, file] of Object.entries(files)) {
      if (!file) {
        alert(`Please upload: ${key}`);
        return;
      }
    }

    const loanData = {
      ...basicDetails,
      familyInfo,
      accountDetails,
      guarantorDetails,
    };

    const formData = new FormData();
    formData.append('loanData', JSON.stringify(loanData));
    Object.entries(files).forEach(([key, file]) => {
      formData.append(key, file);
    });

    try {
      const response = await axios.post('http://localhost:8081/addLoanData', formData);
      alert('Loan Application Submitted Successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting loan application:', error);
      alert('Submission failed. Please check server logs.');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ padding: '20px' }}>
      <h2>Apply Loan</h2>

      {/* Basic Details */}
      <h3>Basic Details</h3>
      {Object.entries(basicDetails).map(([field, value]) => (
        <div key={field}>
          <label>{field}</label><br />
          <input
            name={field}
            value={value}
            type={field.toLowerCase().includes("date") ? "date" : "text"}
            onChange={(e) => handleInputChange(e, setBasicDetails)}
            required
          /><br />
        </div>
      ))}

      <h3>Family Info</h3>
      {Object.entries(familyInfo).map(([field, value]) => (
        <div key={field}>
          <label>{field}</label><br />
          <input
            name={field}
            value={value}
            onChange={(e) => handleInputChange(e, setFamilyInfo)}
            required
          /><br />
        </div>
      ))}

      <h3>Account Info</h3>
      {Object.entries(accountDetails).map(([field, value]) => (
        <div key={field}>
          <label>{field}</label><br />
          <input
            name={field}
            value={value}
            onChange={(e) => handleInputChange(e, setAccountDetails)}
            required
          /><br />
        </div>
      ))}

      <h3>Guarantor Info</h3>
      {Object.entries(guarantorDetails).map(([field, value]) => (
        <div key={field}>
          <label>{field}</label><br />
          <input
            name={field}
            value={value}
            onChange={(e) => handleInputChange(e, setGuarantorDetails)}
            required
          /><br />
        </div>
      ))}

      <h3>Upload Documents</h3>
      {Object.keys(files).map((key) => (
        <div key={key}>
          <label>{key}</label><br />
          <input
            type="file"
            name={key}
            accept="image/*,.pdf"
            onChange={handleFileChange}
            required
          /><br />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplyLoanForm;
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
