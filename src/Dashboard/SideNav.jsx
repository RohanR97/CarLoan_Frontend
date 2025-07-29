import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  const userJson = localStorage.getItem("employee");
<<<<<<< HEAD
  const { userType } = JSON.parse(userJson);

  const options = {
    ADMIN: [
      { label: 'Add Employee', to: '/dashboard/addEmployee' },
      { label: 'View Employee', to: '/dashboard/viewEmployee' }
    ],
    CRM: [
      { label: 'All Verified Data', to: '/dashboard/allVerifiedData' },
      { label: 'Generate PDF', to: '/dashboard/generatePdf' },
      { label: 'Send Sanction Letter Mail', to: '/dashboard/sendSanctionLetterMail' },
      { label: 'Accepted Data', to: '/dashboard/acceptedData' }
    ],
    RE: [
      { label: 'Add Enquiry', to: '/dashboard/addenquiry' },
      { label: 'View All Enquiries', to: '/dashboard/viewallenquiries' },
      { label: 'Apply Loan', to: '/dashboard/applyloan' }
    ],
    OE: [
      { label: 'Document Verification', to: '/dashboard/documentverification' },
      { label: 'Cibil Check', to: '/dashboard/cibilcheck' }
    ],
    AH: [
      { label: 'Disbursed Loan', to: '/dashboard/disbursedLoan' },
      { label: 'Generate Ledger', to: '/dashboard/generateLedger' }
    ]
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '10px', 
      padding: '20px',
      backgroundColor: '#f9f9f9',
      minHeight: '50vh',
      width: '250px',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Menu</h2>
      {options[userType]?.map((btn, index) => (
        <Link to={btn.to} key={index} style={{ textDecoration: 'none' }}>
          <button
            style={{
              width: '100%',
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '16px'
            }}
          >
            {btn.label}
          </button>
        </Link>
      ))}
=======
  const{userType} = JSON.parse(userJson); 

  const options={
    ADMIN:[
      {label:'Add Employee', to:'/dashboard/addemployee'},
      {label:'View Employee', to:'/dashboard/viewemployee'}
    ],
    CRM:[
      
      {label:'Sanction Letter', to:'/dashboard/SanctionLetter'}, 
      {label:'Send Mail', to:'/dashboard/sendMail'},
    
      ],
    RE:[
      {label:'Add Enquiry', to:'/dashboard/addEnquiry'},
      {label:'View All Enquiries', to:'/dashboard/viewAllEnquiries'},
      {label:'Apply Loan', to:'/dashboard/applyloan'}
    ],
    OE:[
      {label:'Document Verification', to:'/dashboard/documentverification'},
      {label:'Cibil Check', to:'/dashboard/cibilCheck'}
    ],
    AH:[
      {label:'Disbursed Loan', to:'/dashboard/disbursedLoan'},
      {label:'Generate Ledger', to:'/dashboard/generateLedger'}
    ]
  }
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <h2>Menu</h2>

        {/* <Link to={'/dashboard/addemployee'}>ADD EMPLOYEE</Link> <br/>
        <Link to={'/dashboard/viewemployee'}>VIEW EMPLOYEE</Link> */}


        {
          options[userType]?.map((btn,index)=> <Link key={index} to={btn.to}>{btn.label}</Link>)
        }
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
    </div>
  );
}

<<<<<<< HEAD
export default SideNav;
=======
export default SideNav

>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d




