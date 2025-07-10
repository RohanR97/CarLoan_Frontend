import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div>
      <h2>SideNav</h2>

      <Link to={'/dashboard/viewcustomer'}>View Customer</Link>
    </div>
  )
}

export default SideNav
