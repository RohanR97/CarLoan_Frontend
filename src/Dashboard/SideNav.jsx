import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className="p-4 bg-light" style={{ minHeight: '100vh', width: '250px' }}>
      <h2 className="mb-4 text-primary">Relational Executive</h2>

      <Link to="/dashboard/viewcustomer" className="btn btn-outline-primary w-100 mb-2">
        View All Customers
      </Link>
    </div>
  );
}

export default SideNav
