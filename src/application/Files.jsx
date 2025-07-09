import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from '../FormContext';

function Files() {
  const{register,handleSubmit,setValue,reset,formState:{errors}}=useForm();
  const { formData, setFormData } = useContext(FormContext);
  
  function saveData(data)
    {
         const updatedFormData = {
    ...formData,
    files: {
      addressProof: data.addressProof[0],
      panCard: data.panCard[0],
      incomeTax: data.incomeTax[0],
      aadharCard: data.aadharCard[0],
      photo: data.photo[0],
      signature: data.signature[0],
      bankCheque: data.bankCheque[0],
      salarySlips: data.salarySlips[0]
    }
  };

  setFormData(updatedFormData);


    const fd= new FormData();
    fd.append("loanData", new Blob([JSON.stringify({      
  customerName: formData.basic.name,
  dateOfBirth: formData.basic.dateOfBirth,
  age: formData.basic.age,
  requiredTenure:formData.basic.requiredTenure,
  customerGender:formData.basic.customerGender,
  customerEmail:formData.basic.customerEmail,
  customerMobileNumber:formData.basic.customerMobileNumber,
  additionalMobileNumber:formData.basic.additionalMobileNumber,
  amountPaidForHome:formData.basic.amountPaidForHome,
  totalLoanRequired:formData.basic.totalLoanRequired,
  loanStatus:formData.basic.loanStatus,
  
   customerAddress: {
    permanentAddress: {
      areaname: formData.permanentaddress.areaname,
      cityname: formData.permanentaddress.cityname,
      district: formData.permanentaddress.district,
      state: formData.permanentaddress.state,
      pincode: formData.permanentaddress.pincode,
      houseNumber: formData.permanentaddress.houseNumber,
      streetName: formData.permanentaddress.streetName
    },
    localAddress: {
      areaname: formData.localaddress.areaname,
      cityname: formData.localaddress.cityname,
      district: formData.localaddress.district,
      state: formData.localaddress.state,
      pincode: formData.localaddress.pincode,
      houseNumber: formData.localaddress.houseNumber,
      streetName: formData.localaddress.streetName
    }
  },

  familydependentInfo: {
    noOfFamilyMember: formData.familydependentinfo.noOfFamilyMember,
    noOfChild: formData.familydependentinfo.noOfChild,
    maritalStatus: formData.familydependentinfo.maritalStatus,
    dependentMember: formData.familydependentinfo.dependentMember,
    familyIncome: formData.familydependentinfo.familyIncome
  },

  accountdetails: {
    accountType: formData.accountdetails.accountType,
    accountBalance: formData.accountdetails.accountBalance,
    accountHolderName: formData.accountdetails.accountHolderName,
    accountStatus: formData.accountdetails.accountStatus,
    accountNumber: formData.accountdetails.accountNumber
  },

  guarantordetails: {
    guarantorName: formData.guaratordetails.guarantorName,
    guarantorDateOfBirth: formData.guaratordetails.guarantorDateOfBirth,
    guarantorRelationshipWithCustomer: formData.guaratordetails.guarantorRelationshipWithCustomer,
    guarantorMobileNumber: formData.guaratordetails.guarantorMobileNumber,
    guarantorAdharCardNo: formData.guaratordetails.guarantorAdharCardNo,
    guarantorMortgageDetails: formData.guaratordetails.guarantorMortgageDetails,
    guarantorJobDetails: formData.guaratordetails.guarantorJobDetails,
    guarantorLocalAddress: formData.guaratordetails.guarantorLocalAddress,
    guarantorPermanentAddress: formData.guaratordetails.guarantorPermanentAddress
  }
    })], { type: "application/json" }));

fd.append("addressProof", formData.files.addressProof[0]);
fd.append("panCard", formData.files.panCard[0]);
fd.append("incomeTax", formData.files.incomeTax[0]);
fd.append("aadharCard", formData.files.aadharCard[0]);
fd.append("photo", formData.files.photo[0]);
fd.append("signature", formData.files.signature[0]);
fd.append("bankCheque", formData.files.bankCheque[0]);
fd.append("salarySlips", formData.files.salarySlips[0]);

return axios.post('http://localhost:8080/addData', fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  .then(response => {
    console.log("Success!", response);
  })
  .catch(error => {
    console.error("Error posting files", error);
  });
  }
  return (
    <div className="container mt-5">
      <h1>Upload Files</h1>

        <div>
            <form onSubmit={handleSubmit(saveData)}>
       

                    <div>
                <label style={{ color: 'red' }}>Address Proof</label>
                <input type="file" name="addressProof" {...register("addressProof")}></input>
              </div>

              <div>
                <label style={{ color: 'red' }}>Pan Card</label>
              <input type="file" name="panCard" {...register("panCard")}></input>
              </div>

              <div>
                <label style={{ color: 'red' }}>Income Tax</label>
              <input type="file" name="incomeTax" {...register("incomeTax")}></input>
              </div>

               <div>
                <label style={{ color: 'red' }}>Photo</label>
              <input type="file" name="photo" {...register("photo")}></input>
              </div>

              <div>
                <label style={{ color: 'red' }}>Aadhar Card</label>
              <input type="file" name="aadharCard" {...register("aadharCard")}></input>
              </div>

                <div>
                <label style={{ color: 'red' }}>Signature</label>
              <input type="file" name="signature" {...register("signature")}></input>
              </div>


               <div>
                <label style={{ color: 'red' }}>Bank Cheque</label>
              <input type="file" name="bankCheque" {...register("bankCheque")}></input>
              </div>

              <div>
                <label style={{ color: 'red' }}>Salary Slips</label>
              <input type="file" name="salarySlips" {...register("salarySlips")}></input>
              </div>



              <div>
                <button type='submit' className='btn btn-success'>SAVE & SUBMIT</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Files
