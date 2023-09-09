import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './TenderSubmit1.css';


export default function SubmitTender1(){

    const currentDate = new Date();

    // Get day, month, and year from the current date
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();
    
  
    // Format the date as "YYYY-MM-DD" string
    const un = JSON.parse(localStorage.getItem("UserSession")).username
    const postDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    const username = "Hello";

    var referenceNo = un+Math.floor(Math.random() * 10000000);

let initialData = {
    
    referenceNo,
     address:"",
     tenderName:"",
     tenderDeadline:"",
     tenderType:"Open",
     tenderCategory:"",
     tenderLocation:"",
     tenderAmount:"",
     paymentMode:"",
     invitingAuthorityName:"",
     invitingAuthorityAmount:"",
     postDate,
     
    };


    let BusinessData = {
        businessName : "",
        businessLocation:"",
    };

    let [FormData, setFormData] = useState(initialData);
    let [BusFormData, setBusFormData] = useState(BusinessData);

 const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...FormData, [name]: value});
          };

    const handleInputChangeBusiness = (e) => {
            const { name, value } = e.target;
            setBusFormData({ ...BusFormData, [name]: value});
            // console.log("business: ", BusFormData);
          };

        //   var obj = {
        //     "organizationDetails": FormData,  "business": BusFormData, "attachments": null
        // }
        // console.log(obj);



        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     addTender(obj);
        //     addUserInfo();
        //     console.log(obj);
        // };


        // const handleSubmit = (e) => {
        //     e.preventDefault();
        
        //     // Assign referenceNo
        //     const newFormData = { ...FormData, referenceNo: referenceNo };
        //     setFormData(newFormData); // Update state with new referenceNo
        
        //     // Create obj with updated FormData
        //     const updatedObj = {
        //         "organizationDetails": newFormData,
        //         "business": BusFormData,
        //         "attachments": null
        //     };
        
        //     // Call the functions
        //     addTender(updatedObj);
        //     addUserInfo(newFormData);
        //     console.log(updatedObj);
        // };

        const [successMessage, setSuccessMessage] = useState('');
        
        const [isFormValid, setIsFormValid] = useState(false);
        const [isTermsAccepted, setIsTermsAccepted] = useState(false);
        const [deadlineError, setDeadlineError] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (isFormValid && isTermsAccepted) {
                const selectedDate = new Date(FormData.tenderDeadline);
                const currentDate = new Date();
                
                if (selectedDate < currentDate) {
                    setSuccessMessage('Tender Deadline cannot be a past date.');
                    return;
                }
        
            // Assign referenceNo
            // const newReferenceNo = username + Math.floor(Math.random() * 10000000);
        
            // Create a copy of FormData with the updated referenceNo
            const updatedFormData = { ...FormData};
            setFormData(updatedFormData); // Update state with new referenceNo
            console.log("Handle Submit wala data",updatedFormData)
            // Create obj with updated FormData
            const updatedObj = {
                "organizationDetails": updatedFormData,
                "business": BusFormData,
                "attachments": null
            };
        
            // Call the functions
            addTender(updatedObj);
            addUserInfo(updatedFormData);
            console.log(updatedObj);
            setSuccessMessage('Form submitted successfully!');
        } else {
          setSuccessMessage('Please fill in all required fields.');
        }
        };
        useEffect(() => {
            const isValid =
              FormData.tenderName &&
              FormData.tenderLocation &&
              FormData.tenderDeadline &&
              FormData.tenderCategory &&
              FormData.tenderAmount &&
              FormData.paymentMode &&
              BusFormData.businessName &&
              BusFormData.businessLocation;
            setIsFormValid(isValid);
          }, [FormData, BusFormData]);


          
        // const handleSubmit = (e) => {
        //     e.preventDefault();
        
        //     // Assign referenceNo
        //     const newReferenceNo = JSON.parse(localStorage.getItem("UserSession"))?.username + Math.floor(Math.random() * 10000000);
        
        //     // Create a copy of FormData with the updated referenceNo
        //     const updatedFormData = { ...FormData, referenceNo: newReferenceNo };
        //     setFormData(updatedFormData); // Update state with new referenceNo
        
        //     // Create obj with updated FormData
        //     const updatedObj = {
        //         "organizationDetails": updatedFormData,
        //         "business": BusFormData,
        //         "attachments": null
        //     };
        
        //     // Call the functions
        //     addUserInfo({...updatedFormData,referenceNo:updatedObj.organizationDetails.referenceNo});
        //     addTender(updatedObj);
        //     console.log(updatedObj);
        //     setSuccessMessage('Form submitted successfully!');
        // };

        
        const addTender = (obj) => {
            axios.post("http://localhost:7000/addData",obj).then(
              (res)=>{
                console.log(res.data)
              }
            );
         }
         
         const addUserInfo = (updatedFormData)=>{
            var obj2 = {
                username:JSON.parse(localStorage.getItem("UserSession"))?.username,
                userId:JSON.parse(localStorage.getItem("UserSession"))?.id,
                referenceno:updatedFormData.referenceNo,
                tenderName:updatedFormData.tenderName,
                tenderLocation:updatedFormData.tenderLocation,
                postDate:updatedFormData.postDate,
                endDate:updatedFormData.tenderDeadline,
                tenderAmount:parseInt(updatedFormData?.tenderAmount)
            }
            axios.post("http://localhost:8282/addTendersForUser",obj2).then(
              (res)=>{
                console.log(res.data)
              }
            );
         }

return( 
<div className="tender-submit-form" style={{paddingTop:"7.5vh"}}>
  <form className="form" style={{backgroundColor:"rgba(255, 255, 255, 0.9)", margin:"auto"}}>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Business Name</label>
        <input
          type="text"
          name="businessName"
          className={`form-control ${BusFormData.businessName ? 'is-valid' : 'is-invalid'}`}
          value={BusFormData.businessName}
          onChange={handleInputChangeBusiness}
          placeholder="Business Name"
        />
        <div className="invalid-feedback">Please provide a valid Business Name.</div>
      </div>
      
      <div className="form-group col-md-6">
        <label for="inputPassword4">Business Location</label>
        <input
          type="text"
          maxLength={10}
          name="businessLocation"
          value={BusFormData.businessLocation}
          onChange={handleInputChangeBusiness}
          className={`form-control ${BusFormData.businessLocation ? 'is-valid' : 'is-invalid'}`}
          placeholder="Business Location"
        />
        <div className="invalid-feedback">Please provide a valid Business Location.</div>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Tender Name</label>
        <input
          type="text"
          name="tenderName" value={FormData.tenderName} onChange={handleInputChange}
          className={`form-control ${FormData.tenderName ? 'is-valid' : 'is-invalid'}`}
          placeholder="Tender Name"
        />
        <div className="invalid-feedback">Please provide a valid Tender Name.</div>
      </div>
      <div className="form-group col-md-6">
        <label for="inputPassword4">Tender Location</label>
        <input
          type="text"
          maxLength={10}
          name="tenderLocation" value={FormData.tenderLocation} onChange={handleInputChange}
          className={`form-control ${FormData.tenderLocation ? 'is-valid' : 'is-invalid'}`}
          placeholder="Tender Location"
        />
        <div className="invalid-feedback">Please provide a valid Location.</div>
      </div>
    </div>
    {/* <div className="form-group">
      <label for="inputAddress">Tender Name</label>
      <input
        type="text"
        maxLength={20}
        name="tenderName"
        value={FormData.tenderName}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Tender Name"
      />
    </div> */}
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="inputAddress2">Tender Deadline</label>
        <input
          type="date"
          name="tenderDeadline"
          value={FormData.tenderDeadline}
          onChange={handleInputChange}
          className={`form-control ${FormData.tenderDeadline ? 'is-valid' : 'is-invalid'}`}
        />
        <div className="invalid-feedback">Please provide a Deadline Date.</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputState">Tender Category</label>
        <select
          id="inputState"
          name="tenderCategory"
          value={FormData.tenderCategory}
          onChange={handleInputChange}
          className={`form-control ${FormData.tenderCategory ? 'is-valid' : 'is-invalid'}`}
        >
          <option value="">-----</option>
          {/* <option value="Media">Media</option> */}
          <option value="Construction">Construction</option>
          <option value="Defence">Defence</option>
          <option value="State Electricity">State Electricity</option>
          <option value="IT Projects">IT Projects</option>
        </select>
        <div className="invalid-feedback">Please select a Tender Category.</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputZip">Tender Amount</label>
        <input
          type="number"
          name="tenderAmount"
          step="0.01"
          placeholder="0.00"
          min="0"
          value={FormData.tenderAmount}
          onChange={handleInputChange}
          className={`form-control ${FormData.tenderAmount ? 'is-valid' : 'is-invalid'}`}
        />
        <div className="invalid-feedback">Please Provide the Tender Amount.</div>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="inputState">Tender Payment</label>
        <select
          id="inputState"
          name="paymentMode" value={FormData.paymentMode} onChange={handleInputChange}
          className={`form-control ${FormData.paymentMode ? 'is-valid' : 'is-invalid'}`}
        >
          <option value="">-----</option>
          <option value="Demand Draft">Demand Draft</option>
        <option value="Banker's Cheque">Banker's Cheque</option>
        <option value="Small Savings Instrument">Small Savings Instrument</option>
      </select>
      <div className="invalid-feedback">Please select a valid Tender Category.</div>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Inviting Authority Name</label>
        <input
          type="text"
          name="invitingAuthorityName"
          className="form-control"
        //   className={`form-control ${FormData.invitingAuthorityName ? 'is-valid' : 'is-invalid'}`}
          value={FormData.invitingAuthorityName} onChange={handleInputChange}
          placeholder="Inviting Authority Name"
        />
        <div className="invalid-feedback">Please Enter a valid Authority Name.</div>
      </div>
      <div className="form-group col-md-6">
        <label for="inputPassword4">Inviting Authority Amount</label>
        <input
          name="invitingAuthorityAmount"
          type="number"
          maxLength={10}
          step="0.01" placeholder="0.00" min="0" value={FormData.invitingAuthorityAmount} onChange={handleInputChange}
          className="form-control"
        //   className={`form-control ${FormData.invitingAuthorityAmount ? 'is-valid' : 'is-invalid'}`}
        />
        <div className="invalid-feedback">Please Enter a valid Amount.</div>
      </div>
    </div>
    <div className="form-group">
      <label for="inputZip">Address</label>
      <textarea
        name="address"
        maxLength="225"
        value={FormData.address}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Address"
      />
    </div>
    <div className="form-group">
      <input className="form-check-input" type="checkbox" id="gridCheck" checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted(!isTermsAccepted)}
            required />
      <label className="form-check-label" htmlFor="gridCheck" >
        Agree to Terms & Conditions
      </label>
      <div className="invalid-feedback">You must agree to the Terms & Conditions to submit the form.</div>
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleSubmit} disabled={!isFormValid || !isTermsAccepted}>
      Submit
    </button>
    {/* <div className="form-group">
      <input className="form-check-input" type="checkbox" id="gridCheck" required />
      <label className="form-check-label" htmlFor="gridCheck">
        Agree to Terms & Conditions
      </label>
      <div className="invalid-feedback">You must agree to the Terms & Conditions to submit the form.</div>
    </div> */}
    {/* <button type="submit" class="btn btn-primary" onClick={handleSubmit} >
      Submit
    </button> */}


    {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}
  </form>
</div>

 
);}