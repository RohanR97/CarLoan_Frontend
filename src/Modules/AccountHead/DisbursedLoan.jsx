// import React from 'react'

// function DisbursedLoan() {
//   return (
//     <div>
//         <h2>DisbursedLoan</h2>
//     </div>
//   )
// }

// export default DisbursedLoan


import React, { useState } from 'react';
import axios from 'axios';

const DisburseLoan = () => {
  const [customerId, setCustomerId] = useState('');
  const [formData, setFormData] = useState({
    accountNumber: '',
    accountType: '',
    transferAmount: '',
  });
  const [message, setMessage] = useState('');
  const [loanDisbursement, setLoanDisbursement] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDisburseLoan = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8085/addLoanDisData/${customerId}`,
        formData
      );
      setLoanDisbursement(response.data);
      setMessage('Loan disbursed successfully!');
    } catch (error) {
      console.error('Error disbursing loan:', error);
      setMessage(error.response?.data?.message || 'Failed to disburse loan');
    }
  };

 
  const handlePayLoan = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8085/paybutton/${customerId}`
      );
      setLoanDisbursement(response.data);
      setMessage('Loan payment status updated to "Disbursed".');
    } catch (error) {
      console.error('Error updating payment status:', error);
      setMessage(error.response?.data?.message || 'Failed to update payment status');
    }
  };

  return (
    <div style={{ padding: '100px' }}>
      <h2>Loan Disbursement</h2>

      <label>Customer ID:</label>
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Enter Customer ID"
      />
      <br />

      <label>Account Number:</label>
      <input
        type="text"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleChange}
        placeholder="Enter Account Number"
      />
      <br />

      <label>Account Type:</label>
      <input
        type="text"
        name="accountType"
        value={formData.accountType}
        onChange={handleChange}
        placeholder="Savings / Current"
      />
      <br />

      <label>Transfer Amount:</label>
      <input
        type="number"
        name="transferAmount"
        value={formData.transferAmount}
        onChange={handleChange}
        placeholder="Enter Transfer Amount"
      />
      <br /><br />

      <button onClick={handleDisburseLoan}>Disburse Loan</button>{' '}
      <button onClick={handlePayLoan}>Pay</button>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      {loanDisbursement && (
        <div style={{ marginTop: '100px' }}>
          <h3>Disbursement Details</h3>
          <p><strong>Bank:</strong> {loanDisbursement.bankName}</p>
          <p><strong>Account Number:</strong> {loanDisbursement.accountNumber}</p>
          <p><strong>Account Type:</strong> {loanDisbursement.accountType}</p>
          <p><strong>IFSC Code:</strong> {loanDisbursement.ifscCode}</p>
          <p><strong>Total Amount:</strong> ₹{loanDisbursement.totalAmount}</p>
          <p><strong>Transfer Amount:</strong> ₹{loanDisbursement.transferAmount}</p>
          <p><strong>Status:</strong> {loanDisbursement.paymentStatus}</p>
          {loanDisbursement.amountPaidDate && (
            <p><strong>Paid On:</strong> {new Date(loanDisbursement.amountPaidDate).toLocaleDateString()}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DisburseLoan;
