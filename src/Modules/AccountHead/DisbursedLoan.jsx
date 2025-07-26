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
import { useNavigate } from 'react-router-dom';

const DisbursedLoan = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    accountType: '',
    transferAmount: '',
  });

  const [customerID, setCustomerID] = useState('');
  const [message, setMessage] = useState('');
  const [disbursed, setDisbursed] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomerChange = (e) => {
    setCustomerID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8085/addLoanDisData/${customerID}`, formData);
      setMessage(`Loan Disbursement Added for Customer ID: ${customerID}`);
      setDisbursed(true);
    } catch (error) {
      console.error('Error adding loan disbursement:', error);
      setMessage('❌ Failed to add loan disbursement');
    }
  };

  const handlePay = async () => {
    try {
      await axios.put(`http://localhost:8085/paybutton/${customerID}`);
      navigate(`/ledger/${customerID}`); // ✅ FIXED: backtick used for dynamic route
    } catch (error) {
      console.error('Error while paying loan:', error);
      setMessage('❌ Failed to update loan payment status');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Loan Disbursement Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer ID: </label>
          <input
            type="text"
            value={customerID}
            onChange={handleCustomerChange}
            required
          />
        </div>

        <div>
          <label>Account Number: </label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Account Type: </label>
          <input
            type="text"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Transfer Amount: </label>
          <input
            type="number"
            name="transferAmount"
            value={formData.transferAmount}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Disburse Loan</button>
      </form>

      {disbursed && (
        <button style={{ marginTop: '20px' }} onClick={handlePay}>
          Pay & View Ledger
        </button>
      )}

      {message && (
        <p style={{ color: message.startsWith('❌') ? 'red' : 'green' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default DisbursedLoan;
