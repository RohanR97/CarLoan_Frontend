<<<<<<< HEAD
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
    <div style={{ padding: '50px' }}>
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

      <button onClick={handleDisburseLoan}>Disburse Loan</button>

      {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}

      {loanDisbursement && (
        <div style={{ marginTop: '40px' }}>
          <h3>Disbursement Details</h3>
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Bank</th>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>IFSC Code</th>
                <th>Total Amount</th>
                <th>Transfer Amount</th>
                <th>Status</th>
                <th>Paid On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{loanDisbursement.bankName}</td>
                <td>{loanDisbursement.accountNumber}</td>
                <td>{loanDisbursement.accountType}</td>
                <td>{loanDisbursement.ifscCode}</td>
                <td>₹{loanDisbursement.totalAmount}</td>
                <td>₹{loanDisbursement.transferAmount}</td>
                <td>{loanDisbursement.paymentStatus}</td>
                <td>
                  {loanDisbursement.amountPaidDate
                    ? new Date(loanDisbursement.amountPaidDate).toLocaleDateString()
                    : 'N/A'}
                </td>
                <td>
                  <button
                    onClick={handlePayLoan}
                    disabled={loanDisbursement.paymentStatus === 'Disbursed'}
                  >
                    Pay
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DisburseLoan;

=======
import React from 'react'

function DisbursedLoan() {
  return (
    <div>
        <h2>DisbursedLoan</h2>
    </div>
  )
}

export default DisbursedLoan
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
