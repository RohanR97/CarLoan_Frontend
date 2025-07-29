import React from 'react'
import Profile from './Profile'
import SideNav from './SideNav'
import { Route, Routes } from 'react-router-dom'

import AddEnquiry from '../Modules/Relational/AddEnquiry'
import ViewAllEnquiries from '../Modules/Relational/ViewAllEnquiries'
import ApplyLoan from '../Modules/Relational/ApplyLoan'
import SanctionLetter from '../Modules/CreditManager/SanctionLetter'  
import SendMail from '../Modules/CreditManager/SendMail'
import CibilCheck from '../Modules/OperationalExecutive/CibilCheck'
import DocumentVerification from '../Modules/OperationalExecutive/DocumentVerification'
import DisbursedLoan from '../Modules/AccountHead/DisbursedLoan'
import GenerateLedger from '../Modules/AccountHead/GenerateLedger'
import AddEmployee from '../Modules/AdminService/AddEmployee'
import ViewEmployee from '../Modules/AdminService/ViewEmployee'


function Dashboard() {
  const userJson = localStorage.getItem("employee");
  const{userType} = JSON.parse(userJson);
  

  const appRoute={
    ADMIN:[
      {path:'addEmployee', component:<AddEmployee/>},
      {path:'viewEmployee', component:<ViewEmployee/>}
    ],

    CRM:[
      {path:'SanctionLetter',component:<SanctionLetter/>},
      {path:'sendMail',component:<SendMail/>}
      
    ],
    RE:[
      {path:'addenquiry', component:<AddEnquiry/>},
      {path:'viewallenquiries', component:<ViewAllEnquiries/>},
      {path:'applyloan', component:<ApplyLoan/>}
    ],
    OE:[
      {path:'documentverification', component:<DocumentVerification/>},
      {path:'cibilcheck',component:<CibilCheck/>}
    ],
    AH:[
      {path:'disbursedLoan',component:<DisbursedLoan/>},
      {path:'generateLedger',component:<GenerateLedger/>}
    ]
}
  return (
    <div>
      <h3>Dashboard</h3>

      <div style={{border:'solid 1px'}}>
        <Profile></Profile>
      </div>
       
      <div style={{display:'flex', minHeight:'80vh', maxWidth:'100vw', overflow:'hidden'}}>
        <div style={{
          border:'dashed 1px',
          width:'220px',
          minWidth:'180px',
          background:'rgba(248,249,250,0.7)', // semi-transparent light
          overflowY:'auto',
          backdropFilter:'blur(2px)'
        }}>
          <SideNav />
        </div>
        <div style={{
          border:'groove 2px',
          flex:1,
          padding:'24px',
          background:'rgba(255,255,255,0.7)', // semi-transparent white
          overflowY:'auto',
          boxSizing:'border-box',
          backdropFilter:'blur(2px)'
        }}>
          <Routes>
            {appRoute[userType]?.map((mapping,index)=> <Route key={index} path={mapping.path} element={mapping.component}></Route>)}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard




// import React from 'react';
// import Profile from './Profile';
// import SideNav from './SideNav';
// import { Route, Routes } from 'react-router-dom';
// import AddEmployee from '../Modules/AdminService/AddEmployee';
// import ViewEmployee from '../Modules/AdminService/ViewEmployee';
// import AddEnquiry from '../Modules/Relational/AddEnquiry';
// import ViewAllEnquiries from '../Modules/Relational/ViewAllEnquiries';
// import ApplyLoan from '../Modules/Relational/ApplyLoan';
// import SanctionLetter from '../Modules/CreditManager/SanctionLetter';
// import SendMail from '../Modules/CreditManager/SendMail';
// import CibilCheck from '../Modules/OperationalExecutive/CibilCheck';
// import DocumentVerification from '../Modules/OperationalExecutive/DocumentVerification';
// import DisbursedLoan from '../Modules/AccountHead/DisbursedLoan';
// import GenerateLedger from '../Modules/AccountHead/GenerateLedger';

// function Dashboard() {
//   const userJson = localStorage.getItem("employee");
//   let usertype = null;

//   try {
//     const userObj = JSON.parse(userJson);
//     usertype = userObj?.usertype;
//   } catch (error) {
//     console.error("Invalid JSON in localStorage:", error);
//   }

//   const appRoute = {
//     ADMIN: [
//       { path: 'addEmployee', component: <AddEmployee /> },
//       { path: 'viewEmployee', component: <ViewEmployee /> }
//     ],
//     CRM: [
//       { path: 'SanctionLetter', component: <SanctionLetter /> },
//       { path: 'sendMail', component: <SendMail /> }
//     ],
//     RE: [
//       { path: 'addenquiry', component: <AddEnquiry /> },
//       { path: 'viewallenquiries', component: <ViewAllEnquiries /> },
//       { path: 'applyloan', component: <ApplyLoan /> }
//     ],
//     OE: [
//       { path: 'documentverification', component: <DocumentVerification /> },
//       { path: 'cibilcheck', component: <CibilCheck /> }
//     ],
//     AH: [
//       { path: 'disbursedLoan', component: <DisbursedLoan /> },
//       { path: 'generateLedger', component: <GenerateLedger /> }
//     ]
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <div style={{ border: 'solid 1px' }}>
//         <Profile />
//       </div>

//       <div style={{ display: 'flex' }}>
//         <div style={{ border: 'dashed 1px', width: '30%' }}>
//           <SideNav />
//         </div>

//         <div style={{ border: 'groove 2px', width: '70%' }}>
//           <Routes>
//             {
//               appRoute[usertype]?.map((mapping, index) => (
//                 <Route key={index} path={mapping.path} element={mapping.component} />
//               ))
//             }
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;