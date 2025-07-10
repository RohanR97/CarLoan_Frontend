import React from 'react';
import Profile from './Profile';
import SideNav from './SideNav';
import { Route, Routes } from 'react-router-dom';
import ViewCustomer from '../Modules/Relational/ViewCustomer';


function Dashboard() {
  return (
    <div className="container-fluid">
      <h2 className="text-center my-4 text-primary">Dashboard</h2>

     <div className="card mb-3">
  <div className="card-body text-start ps-3">
    <h5 className="text-primary"></h5>
    <Profile />
  </div>
</div>

     
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-body p-2">
              <SideNav />
            </div>
          </div>
        </div>

     
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <Routes>
                <Route path="viewcustomer" element={<ViewCustomer />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

