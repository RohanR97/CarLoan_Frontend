// // import React from 'react'

// // function ViewEmployee() {
// //   return (
// //     <div>
// //         <h2>ViewEmployee</h2>
// //     </div>
// //   )
// // }


<<<<<<< HEAD
=======
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function ViewEmployee() {
//   const [employees, setEmployees] = useState([]);

//   // Fetch employees on component load
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = () => {
//     axios.get("http://localhost:8086/viewEmployeesAPI")
//       .then((res) => {
//         setEmployees(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching employee data", err);
//       });
//   };

//   const deleteEmployee = (empId) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       axios.delete(`http://localhost:8086/deleteEmployee/${empId}`)
//         .then(() => {
//           alert("Employee deleted successfully!");
//           fetchEmployees(); // Refresh list
//         })
//         .catch((err) => {
//           console.error("Error deleting employee", err);
//         });
//     }
//   };

//   const editEmployee = (emp) => {
//     const updatedFirstName = prompt("Enter new first name", emp.empFirstName);
//     if (updatedFirstName && updatedFirstName.trim() !== "") {
//       const updatedEmp = { ...emp, empFirstName: updatedFirstName };
//       axios.put(`http://localhost:8086/updateEmployee/${emp.empId}`, updatedEmp)
//         .then(() => {
//           alert("Employee updated!");
//           fetchEmployees();
//         })
//         .catch((err) => {
//           console.error("Error updating employee", err);
//         });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Employee List</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>Emp ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Salary</th>
//             <th>Age</th>
//             <th>Username</th>
//             <th>User Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.empId}>
//               <td>{emp.empId}</td>
//               <td>{emp.empFirstName}</td>
//               <td>{emp.empLastName}</td>
//               <td>{emp.empEmail}</td>
//               <td>{emp.empSalary}</td>
//               <td>{emp.empAge}</td>
//               <td>{emp.username}</td>
//               <td>{emp.userType}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm me-2"
//                   onClick={() => editEmployee(emp)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => deleteEmployee(emp.empId)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewEmployee;

>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewEmployee() {
  const [employees, setEmployees] = useState([]);
<<<<<<< HEAD

  // Fetch employees on component load
=======
  const [editingId, setEditingId] = useState(null); // currently editing empId
  const [editedData, setEditedData] = useState({}); // temp data for editing

>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get("http://localhost:8086/viewEmployeesAPI")
<<<<<<< HEAD
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.error("Error fetching employee data", err);
      });
=======
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching data", err));
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
  };

  const deleteEmployee = (empId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`http://localhost:8086/deleteEmployee/${empId}`)
        .then(() => {
<<<<<<< HEAD
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
=======
          alert("Deleted");
          fetchEmployees();
        })
        .catch(err => console.error(err));
    }
  };

  const startEditing = (emp) => {
    setEditingId(emp.empId);
    setEditedData({ ...emp }); // copy of employee to edit
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    axios.put(`http://localhost:8086/updateEmployee/${editedData.empId}`, editedData)
      .then(() => {
        alert("Updated successfully");
        setEditingId(null);
        setEditedData({});
        fetchEmployees();
      })
      .catch(err => console.error("Update failed", err));
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
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
<<<<<<< HEAD
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
=======
          {employees.map(emp => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="text"
                    name="empFirstName"
                    value={editedData.empFirstName}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.empFirstName
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="text"
                    name="empLastName"
                    value={editedData.empLastName}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.empLastName
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="email"
                    name="empEmail"
                    value={editedData.empEmail}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.empEmail
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="number"
                    name="empSalary"
                    value={editedData.empSalary}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.empSalary
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="number"
                    name="empAge"
                    value={editedData.empAge}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.empAge
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="text"
                    name="username"
                    value={editedData.username}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.username
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <input
                    type="text"
                    name="userType"
                    value={editedData.userType}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  emp.userType
                )}
              </td>

              <td>
                {editingId === emp.empId ? (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={saveChanges}
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={cancelEditing}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEditing(emp)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteEmployee(emp.empId)}
                    >
                      Delete
                    </button>
                  </>
                )}
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEmployee;
<<<<<<< HEAD


=======
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
