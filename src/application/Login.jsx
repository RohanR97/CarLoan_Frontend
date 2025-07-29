import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const{register, handleSubmit}=useForm();

  const navigate=useNavigate();

  function onLogin(data)
  {
    axios.get(`http://localhost:8086/userLogin/${data.username}/${data.password}`).
    then((res)=>{
      if(res.data!=="")
      {
        alert("Login Success ...!!");
        console.log(res);
        localStorage.setItem("employee", JSON.stringify(res.data));
        navigate('/dashboard');
      }
      
      else{
        alert("Invalid details ...!!")
      }

    }).
    catch((error)=>console.log(error))

  }
    
  
  return (
    // <div className="container mt-5">
    //   <h2 className="mb-4">Login</h2>
    //   <form onSubmit={handleSubmit(onLogin)}>
    //     <div className="form-group">
    //       <label htmlFor="exampleInputEmail1">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter email"
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         We'll never share your email with anyone else.
    //       </small>
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="exampleInputPassword1">Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="exampleInputPassword1"
    //         placeholder="Password"
    //       />
    //     </div>

    //     {/* <div className="form-group">
    //       <label htmlFor="roleSelect">Select Role</label>
    //       <select className="form-control" id="roleSelect">
    //         <option value="">-- Select Role --</option>
    //         <option value="OE">OE (Operational Executive)</option>
    //         <option value="RE">RE (Relational Executive)</option>
    //         <option value="ADMIN">ADMIN</option>
    //         <option value="CM">CM (Credit Manager)</option>
    //         <option value="AH">AH (Account Head)</option>
    //       </select>
    //     </div> */}

    //     <div className="form-group form-check">
    //       <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    //       <label className="form-check-label" htmlFor="exampleCheck1">
    //         Remember me
    //       </label>
    //     </div>

    //     <button type="submit" className="btn btn-primary">Login</button>
    //   </form>
    // </div>
    <div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onLogin)}>
          Username : <input type="text" {...register('username')}></input> <br/><br/>
          Password : <input type="password" {...register('password')}></input> <br/><br/>

          {/* Usertype : <select {...register('usertype')}>
                      <option>ADMIN</option>
                      <option>CRM</option>
                    </select> <br/><br/> */}

          <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;
