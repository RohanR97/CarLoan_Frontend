import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicDetails from './application/BasicDetails'
import PermanentAddress from './application/PermanentAddress'
import LocalAddress from './application/LocalAddress'
import AccountDetails from './application/AccountDetails'
import DependentInfo from './application/DependentInfo'
import GuarantorDetails from './application/GuarantorDetails'
import Files from './application/Files'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Home from './template/Home'
import About from './application/About'
import Login from './application/Login'
import EmiCalculator from './application/EmiCalculator'
import Enquiry from './application/Enquiry'
import Dashboard from './Dashboard/Dashboard'
import CibilCheck from './Modules/OperationalExecutive/CibilCheck'
import DocumentVerification from './Modules/OperationalExecutive/DocumentVerification'
import SendMail from './Modules/CreditManager/SendMail' 
import DisbursedLoan from './Modules/AccountHead/DisbursedLoan'
import GenerateLedger from './Modules/AccountHead/GenerateLedger'
import AddEmployee from './Modules/AdminService/AddEmployee' 
import ViewEmployee from './Modules/AdminService/ViewEmployee'
import ApplyLoan from './Modules/Relational/ApplyLoan'
import SanctionLetter from './Modules/CreditManager/SanctionLetter'  
import ViewAllEnquiries from './Modules/Relational/ViewAllEnquiries'
import AddEnquiry from './Modules/Relational/AddEnquiry'



function App() {


  return (
    <>
      <BrowserRouter>
      <Home></Home>

      <div>
        <Routes>
          <Route path='enquiry' element={<Enquiry></Enquiry>}></Route>
          <Route path='emi' element={<EmiCalculator></EmiCalculator>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='add' element={<BasicDetails></BasicDetails>}></Route>
          <Route path='address' element={<PermanentAddress></PermanentAddress>}></Route>
          <Route path='addresslocal' element={<LocalAddress></LocalAddress>}></Route>
          <Route path='account' element={<AccountDetails></AccountDetails>}></Route>
          
          <Route path='dependent' element={<DependentInfo></DependentInfo>}></Route>
          <Route path='guarantor' element={<GuarantorDetails></GuarantorDetails>}></Route>
          <Route path='file' element={<Files></Files>}></Route>
          <Route path='dashboard/*' element={<Dashboard></Dashboard>}></Route>

          <Route path='viewAllEnquiries' element={<ViewAllEnquiries></ViewAllEnquiries>}></Route>
          <Route path='addEnquiry' element={<AddEnquiry></AddEnquiry>}></Route>

          <Route path='cibilcheck' element={<CibilCheck></CibilCheck>}></Route>
          <Route path='documentVerification' element={<DocumentVerification></DocumentVerification>}></Route>
          <Route path='applyloan' element={<ApplyLoan></ApplyLoan>}></Route>
          
          <Route path='SanctionLetter' element={<SanctionLetter></SanctionLetter>}></Route>
          <Route path='sendMail' element={<SendMail></SendMail>}></Route> 
         

          <Route path='disbursedLoan' element={<DisbursedLoan></DisbursedLoan>}></Route>
          <Route path='generateLedger' element={<GenerateLedger></GenerateLedger>}></Route>  

          <Route path='addEmployee' element={<AddEmployee></AddEmployee>}></Route> 
          <Route path='viewEmployee' element={<ViewEmployee></ViewEmployee>}></Route>


          

        
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
