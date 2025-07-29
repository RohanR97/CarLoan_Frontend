// import React from 'react'

// function AddEmployee() {
//   return (
//     <div>
//         <h2>AddEmployee</h2>
//     </div>
//   )
// }

// export default AddEmployee

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function EmployeeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Build employee JSON object with exact Java field names
      const empDetailsObj = {
        empFirstName: data.empFirstName,
        empLastName: data.empLastName,
        empEmail: data.empEmail,
        empSalary: parseFloat(data.empSalary),
        empAge: parseInt(data.empAge),
        userType: data.userType,
<<<<<<< HEAD
        username: data.username,
        password: data.password,
=======
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
        dateOfBirth: data.dateOfBirth
      };

      // Append employee data JSON
      formData.append('empData', JSON.stringify(empDetailsObj));

      // Attach image and PAN card
      formData.append('empImage', data.empImage[0]);
      formData.append('empPancard', data.empPancard[0]);

      // Send to backend
      const response = await axios.post('http://localhost:8086/addEmpData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        alert('Employee saved successfully!');
        reset();
      } else {
        alert('Failed to save employee.');
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Error while submitting form!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">Add New Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

        <div className="form-group mb-3">
          <label>First Name</label>
          <input type="text" className="form-control"
            {...register('empFirstName', { required: true })} />
          {errors.empFirstName && <span className="text-danger">First name is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control"
            {...register('empLastName', { required: true })} />
          {errors.empLastName && <span className="text-danger">Last name is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
            {...register('empEmail', { required: true })} />
          {errors.empEmail && <span className="text-danger">Email is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Salary</label>
          <input type="number" step="0.01" className="form-control"
            {...register('empSalary', { required: true })} />
          {errors.empSalary && <span className="text-danger">Salary is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Age</label>
          <input type="number" className="form-control"
            {...register('empAge', { required: true })} />
          {errors.empAge && <span className="text-danger">Age is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>User Type</label>
          <input type="text" className="form-control"
            {...register('userType', { required: true })} />
          {errors.userType && <span className="text-danger">User type is required</span>}
        </div>

        <div className="form-group mb-3">
<<<<<<< HEAD
          <label>Username</label>
          <input type="text" className="form-control"
            {...register('username', { required: true })} />
          {errors.username && <span className="text-danger">Username is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" className="form-control"
            {...register('password', { required: true })} />
          {errors.password && <span className="text-danger">Password is required</span>}
        </div>

        <div className="form-group mb-3">
=======
>>>>>>> 9bac0ebb5e504c0c2b84a09141ad3eeeccfe687d
          <label>Date of Birth</label>
          <input type="date" className="form-control"
            {...register('dateOfBirth', { required: true })} />
          {errors.dateOfBirth && <span className="text-danger">DOB is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Upload Profile Photo</label>
          <input type="file" className="form-control"
            accept="image/*"
            {...register('empImage', { required: true })} />
          {errors.empImage && <span className="text-danger">Image is required</span>}
        </div>

        <div className="form-group mb-3">
          <label>Upload PAN Card</label>
          <input type="file" className="form-control"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register('empPancard', { required: true })} />
          {errors.empPancard && <span className="text-danger">PAN card is required</span>}
        </div>

        <div className="form-group text-center">
          <button type="submit" className="btn btn-success px-5">Save Employee</button>
        </div>

      </form>
    </div>
  );
}

export default EmployeeForm;