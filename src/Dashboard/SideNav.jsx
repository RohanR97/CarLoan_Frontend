import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  const userJson = localStorage.getItem("employee");
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
    </div>
  )
}

export default SideNav





