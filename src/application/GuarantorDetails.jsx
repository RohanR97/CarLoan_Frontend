import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../FormContext';

function GuarantorDetails() {

    const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm();

    const{formData,setFormData}=useContext(FormContext);

  const navigate=useNavigate();

    function saveData(data)
    {

      setFormData({ 
      ...formData, 
       guaratordetails: data 
    });

      navigate("/file");
    }
  return (
    <div>
       <h1>Guarantor Details</h1>

        <div>
            <form onSubmit={handleSubmit(saveData)}>
              <div className="mb-3">
                 <label style={{ color: 'red' }}>Guarantor Name</label>
                 <input type="text" name="guarantorName" {...register("guarantorName")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Date Of Birth</label>
              <input type="text" name="guarantorDateOfBirth" {...register("guarantorDateOfBirth")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Relationship With Customer</label>
              <input type="text" name="guarantorRelationshipWithCustomer" {...register("guarantorRelationshipWithCustomer")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Mobile Number</label>
              <input type="number" name="guarantorMobileNumber" {...register("guarantorMobileNumber")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor AadharCard No.</label>
              <input type="number" name="guarantorAdharCardNo" {...register("guarantorAdharCardNo")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Mortgage Details</label>
              <input type="text" name="guarantorMortgageDetails" {...register("guarantorMortgageDetails")} style={{ color: 'blue' }}></input>
              </div>


              <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Job Details</label>
              <input type="text" name="guarantorJobDetails" {...register("guarantorJobDetails")} style={{ color: 'blue' }}></input>
              </div>


              <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Local Address</label>
              <input type="text" name="guarantorLocalAddress" {...register("guarantorLocalAddress")} style={{ color: 'blue' }}></input>
              </div>


              <div className="mb-3">
                <label style={{ color: 'red' }}>Guarantor Permanent Address</label>
              <input type="text" name="guarantorPermanentAddress" {...register("guarantorPermanentAddress")} style={{ color: 'blue' }}></input>
              </div>

               <div>
                <button type='submit' className='btn btn-success'>SAVE & NEXT</button>
              </div>

              
            </form>
        </div>
    </div>
  )
}

export default GuarantorDetails
