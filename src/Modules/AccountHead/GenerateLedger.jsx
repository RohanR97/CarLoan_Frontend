<<<<<<< HEAD
// import React from 'react'

// function GenerateLedger() {
//   return (
//     <div>
//         <h2>GenerateLedger</h2>
//     </div>
//   )
// }

// export default GenerateLedger

import React, { useState } from 'react';
import axios from 'axios';

const GenerateLedger = () => {
  const [customerId, setCustomerId] = useState('');
  const [message, setMessage] = useState('');
  const [ledger, setLedger] = useState(null);
  const [amountPaid, setAmountPaid] = useState('');


  const handleAddLedger = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8085/addLedger/${customerId}`,
        {} 
      );
      setLedger(response.data);
      setMessage('Ledger added successfully.');
    } catch (error) {
      console.error('Error adding ledger:', error);
      setMessage(error.response?.data?.message || 'Failed to add ledger');
    }
  };

  
  const handlePayEmi = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8085/paybuttonLedger/${customerId}`,
        null,
        {
          params: { amountPaid: amountPaid },
        }
      );
      setLedger(response.data);
      setMessage('EMI Payment updated successfully.');
      setAmountPaid('');
    } catch (error) {
      console.error('Error updating payment:', error);
      setMessage(error.response?.data?.message || 'Failed to update payment');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Ledger Management</h2>

      <label>Customer ID:</label>
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Enter Customer ID"
      />
      <br /><br />

      <button onClick={handleAddLedger}>Add Ledger</button>

      <hr />

      <h3>Pay EMI</h3>
      <label>Amount Paid:</label>
      <input
        type="number"
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
        placeholder="Enter EMI amount"
      />
      <br /><br />
      <button onClick={handlePayEmi}>Pay EMI</button>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      {ledger && (
        <div style={{ marginTop: '100px' }}>
          <h3>Ledger Details</h3>
          <p><strong>Loan Amount:</strong> ₹{ledger.totalLoanAmount}</p>
          <p><strong>Monthly EMI:</strong> ₹{ledger.monthlyEMI}</p>
          <p><strong>Amount Paid Till Now:</strong> ₹{ledger.amountPaidtillDate}</p>
          <p><strong>Remaining Amount:</strong> ₹{ledger.remainingAmount}</p>
          <p><strong>EMI Status:</strong> {ledger.currentMonthEmiStatus}</p>
          <p><strong>Next EMI Date:</strong> {new Date(ledger.nextEmiDateStart).toLocaleDateString()}</p>
          <p><strong>Ledger Status:</strong> {ledger.ledgerLoanStatus}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateLedger;
=======
import React from 'react'

function GenerateLedger() {
  return (
    <div>
        <h2>GenerateLedger</h2>
    </div>
  )
}

export default GenerateLedger
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
