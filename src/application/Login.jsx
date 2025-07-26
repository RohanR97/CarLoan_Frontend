import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLogin = async (data) => {
    try {
      const response = await axios.get(`http://localhost:8086/userLogin/${data.username}/${data.password}`);
      const user = response.data;

      if (user && user.username) {
        alert("Login Success ...!!");
        console.log("Logged in user: ", user);
        localStorage.setItem("employee", JSON.stringify(user));
        navigate('/dashboard');
      } else {
        alert("Invalid details ...!!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Unable to connect to server or invalid credentials.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onLogin)}>
        <div style={{ marginBottom: '15px' }}>
          <label>Username: </label>
          <input type="text" {...register('username', { required: true })} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password: </label>
          <input type="password" {...register('password', { required: true })} />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
