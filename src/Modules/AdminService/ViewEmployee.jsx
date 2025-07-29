// // import React from 'react'

// // function ViewEmployee() {
// //   return (
// //     <div>
// //         <h2>ViewEmployee</h2>
// //     </div>
// //   )
// // }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewEmployee() {
  const [employees, setEmployees] = useState([]);

  // Fetch employees on component load
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get("http://localhost:8086/viewEmployeesAPI")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.error("Error fetching employee data", err);
      });
  };

  const deleteEmployee = (empId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`http://localhost:8086/deleteEmployee/${empId}`)
        .then(() => {
          alert("Employee deleted successfully!");
          fetchEmployees(); // Refresh list
        })
        .catch((err) => {
          console.error("Error deleting employee", err);
        });
    }
  };

  const editEmployee = (emp) => {
    const updatedFirstName = prompt("Enter new first name", emp.empFirstName);
    if (updatedFirstName && updatedFirstName.trim() !== "") {
      const updatedEmp = { ...emp, empFirstName: updatedFirstName };
      axios.put(`http://localhost:8086/updateEmployee/${emp.empId}`, updatedEmp)
        .then(() => {
          alert("Employee updated!");
          fetchEmployees();
        })
        .catch((err) => {
          console.error("Error updating employee", err);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Emp ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Username</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.empFirstName}</td>
              <td>{emp.empLastName}</td>
              <td>{emp.empEmail}</td>
              <td>{emp.empSalary}</td>
              <td>{emp.empAge}</td>
              <td>{emp.username}</td>
              <td>{emp.userType}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editEmployee(emp)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(emp.empId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEmployee;


