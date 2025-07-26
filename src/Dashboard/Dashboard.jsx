import React from 'react';
import Profile from './Profile';
import SideNav from './SideNav';
import { Route, Routes } from 'react-router-dom';

import AddEnquiry from '../Modules/Relational/AddEnquiry';
import ViewAllEnquiries from '../Modules/Relational/ViewAllEnquiries';
import ApplyLoan from '../Modules/Relational/ApplyLoan';

import SendSanctionLetterMail from "../Modules/CreditManager/SendSanctionLetterMail";
import GeneratePdf from "../Modules/CreditManager/GeneratePdf";
import AcceptedData from '../Modules/CreditManager/AcceptedData';
import AllVerifiedData from '../Modules/CreditManager/AllVerifiedData';
// import AllVerifiedData from '../Modules/CreditManager/AllVerifiedData';

import CibilCheck from '../Modules/OperationalExecutive/CibilCheck';
import DocumentVerification from '../Modules/OperationalExecutive/DocumentVerification';

import DisbursedLoan from '../Modules/AccountHead/DisbursedLoan';
import GenerateLedger from '../Modules/AccountHead/GenerateLedger';

import AddEmployee from '../Modules/AdminService/AddEmployee';
import ViewEmployee from '../Modules/AdminService/ViewEmployee';


function Dashboard() {
  const userJson = localStorage.getItem("employee");
  const { userType } = JSON.parse(userJson);

  const appRoute = {
    ADMIN: [
      { path: 'addEmployee', component: <AddEmployee /> },
      { path: 'viewEmployee', component: <ViewEmployee /> }
    ],
    CRM: [
      { path: 'sendSanctionLetterMail', component: <SendSanctionLetterMail /> },
      { path: 'generatePdf', component: <GeneratePdf /> },
      { path: 'acceptedData', component: <AcceptedData></AcceptedData>},
      { path: 'allVerifiedData', component: <AllVerifiedData></AllVerifiedData>}    
    ],
    RE: [
      { path: 'addenquiry', component: <AddEnquiry /> },
      { path: 'viewallenquiries', component: <ViewAllEnquiries /> },
      { path: 'applyloan', component: <ApplyLoan /> }
    ],
    OE: [
      { path: 'documentverification', component: <DocumentVerification /> },
      { path: 'cibilcheck', component: <CibilCheck /> }
    ],
    AH: [
      { path: 'disbursedLoan', component: <DisbursedLoan /> },
      { path: 'generateLedger', component: <GenerateLedger /> }
    ]
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Dashboard</h2>

      <div style={{ border: 'solid 1px', padding: '10px' }}>
        <Profile />
      </div>

      <div style={{ display: 'flex', height: '60vh', marginTop: '20px' }}>
        <div style={{ border: 'dashed 1px', width: '30%', padding: '10px' }}>
          <SideNav />
        </div>

        <div style={{ border: 'groove 2px', width: '70%', padding: '20px' }}>
          <Routes>
            {
              
              appRoute[userType]?.map((mapping, index) => (
                <Route key={index} path={mapping.path} element={mapping.component} />
              ))
            }
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

