import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function AccountDetails() {

    const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm();

    const{formData,setFormData}=useContext(FormContext);

  const navigate=useNavigate();

    function saveData(data)
    {

      setFormData({ 
      ...formData, 
      accountdetails: data 
    });

      navigate("/dependent");
    }
  return (
    <div>
      <h1>Account Details</h1>

        <div>
            <form onSubmit={handleSubmit(saveData)}>
              <div className="mb-3">
                 <label style={{ color: 'red' }}>Account Type</label>
                 <input type="text" name="accountType" {...register("accountType")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>Account Balance</label>
              <input type="number" name="accountBalance" {...register("accountBalance")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Account Holder Name</label>
              <input type="text" name="accountHolderName" {...register("accountHolderName")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Account Status</label>
              <input type="text" name="accountStatus" {...register("accountStatus")} style={{ color: 'blue' }}></input>
              </div>


                <div className="mb-3">
                <label style={{ color: 'red' }}>Account Number</label>
              <input type="number" name="accountNumber" {...register("accountNumber")} style={{ color: 'blue' }}></input>
              </div>

              <div>
                <button type='submit' className='btn btn-success'>SAVE & NEXT</button>
              </div>

              
            </form>
        </div>
    </div>
  )
}

export default AccountDetails
