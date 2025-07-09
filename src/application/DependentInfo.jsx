import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

function DependentInfo() {

     const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm();
 
 const{formData,setFormData}=useContext(FormContext);

 const navigate=useNavigate();

 function saveData(data)
    {

      setFormData({ 
      ...formData, 
      familydependentinfo: data 
    });

    navigate("/guarantor")
    }
     return (
    <div>
       <h1>Dependent Information</h1>

        <div>
            <form onSubmit={handleSubmit(saveData)}>
              <div className="mb-3">
                 <label style={{ color: 'red' }}>No.of Family Members</label>
                 <input type="number" name="noOfFamilyMember" {...register("noOfFamilyMember")} style={{ color: 'blue' }}></input>
              </div>

              <div className="mb-3">
                <label style={{ color: 'red' }}>No.of Children</label>
              <input type="number" name="noOfChild" {...register("noOfChild")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Marital Status</label>
              <input type="text" name="maritalStatus" {...register("maritalStatus")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Dependent Member</label>
              <input type="text" name="dependentMember" {...register("dependentMember")} style={{ color: 'blue' }}></input>
              </div>

               <div className="mb-3">
                <label style={{ color: 'red' }}>Family Income</label>
              <input type="text" name="familyIncome" {...register("familyIncome")} style={{ color: 'blue' }}></input>
              </div>

              <div>
                <button type='submit' className='btn btn-success'>SAVE & NEXT</button>
              </div>
           </form>
        </div>
    </div>
  )
}

export default DependentInfo
