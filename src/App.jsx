import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicDetails from './application/BasicDetails'
import PermanentAddress from './application/PermanentAddress'
import LocalAddress from './application/LocalAddress'
import AccountDetails from './application/AccountDetails'
import DependentInfo from './application/DependentInfo'
import GuarantorDetails from './application/GuarantorDetails'
import Files from './application/Files'
import Header from './template/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Home from './template/Home'
import About from './application/About'
import Login from './application/Login'
import EmiCalculator from './application/EmiCalculator'
import Enquiry from './application/Enquiry'
import Dashboard from './Dashboard/Dashboard'
import ViewCustomer from './Modules/Relational/ViewCustomer'



function App() {
  const [count, setCount] = useState(0)

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
          <Route path="viewcustomer" element={<ViewCustomer></ViewCustomer>}></Route>

        
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
