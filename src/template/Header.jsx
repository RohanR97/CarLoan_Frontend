import React from 'react'
import img from '../assets/studentlogo.jpg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <img src={img} alt="image cannot load" width='100px' height='100px'></img>
      <div>
        <Link className='btn btn-light m-2' to='/add'>Loan Application</Link>
        
      </div>
    </div>
  )
}

export default Header
