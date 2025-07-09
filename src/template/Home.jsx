import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#e3f2fd',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        margin: '0',
        padding: '0',
      }}
    >
      <Link className="navbar-brand fw-bold text-primary ms-3" to="/">
        Car Loan
      </Link>
      <button
        className="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/emi">EMI Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/enquiry">Enquiry</Link>
          </li>

          {/* <li className="nav-item">
           <Link className='btn btn-light m-2' to='/add'>Loan Application</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Home;
