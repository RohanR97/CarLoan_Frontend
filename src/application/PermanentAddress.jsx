import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function PermanentAddress() {

    const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm();
    const{formData,setFormData}=useContext(FormContext);

    const navigate=useNavigate();

    function saveData(data)
    {

      setFormData({ 
      ...formData, 
      permanentaddress: data 
    });

      navigate("/addresslocal");
}
  return (
    <div>
       <h1>Address</h1>
       <h2>Permanent Address</h2>

        <div>
            <form onSubmit={handleSubmit(saveData)}>
              <div className="mb-3">
                 <label style={{ color: 'red' }}>Areaname</label>
                 <input type="text" name="areaname" {...register("areaname")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>City Name</label>
              <input type="text" name="cityname" {...register("cityname")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>District</label>
              <input type="text" name="district" {...register("district")} style={{ color: 'blue' }}></input>
              </div>

                <div className="mb-3">
                <label style={{ color: 'red' }}>State</label>
              <input type="text" name="state" {...register("state")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>Pincode</label>
              <input type="number" name="pincode" {...register("pincode")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>House No.</label>
              <input type="number" name="houseNumber" {...register("houseNumber")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Street Name</label>
              <input type="number" name="streetName" {...register("streetName")} style={{ color: 'blue' }}></input>
              </div>

              <div>
                <button type='submit' className='btn btn-success'>SAVE & NEXT</button>
              </div>

              
            </form>
        </div>
    </div>
  )
}

export default PermanentAddress
