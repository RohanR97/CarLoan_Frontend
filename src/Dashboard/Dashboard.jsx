import React from 'react'
import Profile from './Profile'
import SideNav from './SideNav'
import { Route, Routes } from 'react-router-dom'
import ViewCustomer from '../Modules/Relational/ViewCustomer'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{border:'solid 1px'}}>
        <Profile></Profile>
      </div>
       
       <div style={{display:'flex'}}>
      <div style={{border:'dashed 1px' ,width:'30%' }}>
        <SideNav></SideNav>
      </div>

      <div style={{border:'groove 2px', width:'70%'}}>
        <Routes>
            <Route path="viewcustomer" element={<ViewCustomer></ViewCustomer>}></Route>
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
