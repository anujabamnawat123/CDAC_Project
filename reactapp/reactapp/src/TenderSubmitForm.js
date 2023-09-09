//Use TenderSubmit1 for JSON object sending. This is rough code


import React from "react";
import { useState } from "react";



export default function SubmitTender(){

    // let businessName;
    // let businessLocation;
    // let tenderName;
    // let tenderDeadline;
    // let type;
    // let Category;
    // let TbusinessLocation;
    // let Amount;
    // let payment;
    // let Aname;
    // let Aamount;
    // let address;
    // let Pdate;
    
    let [submithandler, setsubmithandler] = useState({});
   
    let handleSubmit=(e) => {

    initialData = {
    
     address:"",
     tenderName:"",
     tenderDeadline:"",
     tenderType:"",
     tenderCategory:"",
     TbusinessLocation:"",
     tenderAmount:"",
     payment:"",
     invitingAuthorityName:"",
     invitingAuthorityAmount:"",
     Pdate:"",
     businessName: "",
     businessLocation:"",
    };
};

    // let BusinessData = {
    //     businessName : "",
    //     businessLocation:"",
    // };

    // let [FormData, setFormData] = useState(initialData);
    // let [BusFormData, setBusFormData] = useState(BusinessData);
    // let [Formerror, setFormError] = useState({});

    // const [formData, setFormData] = useState({
    //  businessName : "",
    //  businessLocation:"",
    //  tenderName:"",
    //  tenderDeadline:"",
    //  type:"",
    //  Category:"",
    //  TbusinessLocation:"",
    //  Amount:"",
    //  payment:"",
    //  Aname:"",
    //  Aamount:"",
    //  Pdate:"",
    // });
    // const handleInputChange = (e) => {
    //     const { id, value } = e.target;
    //     setFormData((prevData) => ({ ...prevData, [id]: value }));
    //   };

    // const handleInputChange = (e) => {
    //         const { name, value } = e.target;
    //         setFormData({ ...FormData, [name]: value });
    //         // setBusFormData({ ...BusFormData, [name]: value });
    //         // var obj = {
    //         //     "organizationDetails": FormData,  "business": BusFormData, "attachments": null
    //         // }
    //         // console.log(obj);
    //       };

    // const handleInputChangeBusiness = (e) => {
    //         const { name, value } = e.target;
    //         setBusFormData({ ...BusFormData, [name]: value });
    //         console.log("business: ", BusFormData);
    //       };

    //       var obj = {
    //         "organizationDetails": FormData,  "business": BusFormData, "attachments": null
    //     }
    //     console.log(obj);

    // let handleSubmit = (e) =>{
    //     // e.preventDefault();
    //     console.log(e);
    // }

   

        //   const logFormData = () => {
        //     const data = {
        //       organizationDetails: FormData,
        //       business: BusFormData
        //     };
        //     console.log(JSON.stringify(data, null, 2));
        //   };


    function BusinessName(e){
        initialData.businessName = e.target.value;
        console.log(initialData.businessName);
    }

    function BusinessLocation(e){
        initialData.businessLocation = e.target.value;
        console.log(initialData.businessLocation);
    }

    function TenderName(e){
        initialData.tenderName = e.target.value;
        console.log(initialData.tenderName);
    }
    
    function DeadlineDate(e){
        let DDate= e.target.value;
        initialData.tenderDeadline = (DDate.getFullYear())+"-"+(DDate.getMonth() + 1)+"-"+DDate.getDate();
        console.log(initialData.tenderDeadline);
    }

    function TenderType(e){
        initialData.type = e.target.value;
        console.log(initialData.type);
    }

    function TenderCategory(e){
        initialData.Category = e.target.value;
        console.log(initialData.Category);
    }

    function TenderbusinessLocation(e){
        initialData.TbusinessLocation = e.target.value;
        console.log(initialData.TbusinessLocation);
    }

    function TenderAmount(e){
        initialData.Amount = e.target.value;
        console.log(initialData.Amount);
    }

    function TenderPayment(e){
        initialData.payment = e.target.value;
        console.log(initialData.payment);
    }

    function AuthorityName(e){
        initialData.Aname = e.target.value;
        console.log(initialData.Aname);
    }

    function AuthorityAmount(e){
        initialData.Aamount = e.target.value;
        console.log(initialData.Aamount)
    }

    function PostDate(e) {
        var Gdate;
        var DateOfBirth = new Date(e.target.value); // Convert the input value to a Date object
        Gdate =  (DateOfBirth.getFullYear() )+ '-' + (DateOfBirth.getMonth() + 1) + '-' + DateOfBirth.getDate();
        console.log(Gdate);
    }

    function Address(e) {
        initialData.address = e.target.value;
        console.log(initialData.address);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
        // You can perform any further actions like API calls here
       
       
        // let handleSubmit = async (e) => {
        //     e.preventDefault();
        //     try {
        //       const response = await fetch("YOUR_API_ENDPOINT", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(formData),
        //       });
          
        //       if (response.ok) {
        //         console.log("Form data submitted successfully!");
        //         // Reset the form data after successful submission
        //         setFormData({
        //           businessName: "",
        //           businessLocation: "",
        //           tenderName: "",
        //           tenderDeadline: "",
        //           type: "",
        //           Category: "",
        //           TbusinessLocation: "",
        //           Amount: "",
        //           payment: "",
        //           Aname: "",
        //           Aamount: "",
        //           Pdate: "",
        //         });
        //       } else {
        //         console.error("Form data submission failed.");
        //       }
        //     } catch (error) {
        //       console.error("An error occurred:", error);
        //     }
          
    //   };

    return(
        <div>
 {/* onSubmit={handleSubmit}  //under the form field */}
        <form onSubmit={handleSubmit} >
        {/* <pre>{JSON.stringify(FormData, undefined,2)}</pre>
        <pre>{JSON.stringify(BusFormData, undefined,2)}</pre> */}
        <table>
            <thead>
                <td>
                    <h2>
                        Organisational Details: 
                    </h2>
                </td>
            </thead>
            <tbody>
                <tr>
                <td>
                Business Name:
                    <input type="text" maxLength={50} name="businessName"  onBlur={BusinessName}/> </td>
                </tr>
                <tr>
                    <td>Business Location: <input type="text" maxLength={10} name="businessLocation"   onBlur={BusinessLocation}/> </td>
                </tr>
            </tbody>
            <br></br>
            <br></br>
            <thead>
                <td>
                    <h2>
                        Tender Details: 
                    </h2>
                </td>
            </thead>
            <tbody>
                <tr>
                    <td> Tender Name: <input type="text" maxLength={20} name="tenderName"  onBlur={TenderName}/> 
                    </td>
                </tr>
                <tr>
                {/* This part is to be automatically saved without prompting the user to do so */}
                    {/* <td> Tender PostDate: <input type="text" name="tdate"  onBlur={handleInputChange}/>
                    </td> */}
                </tr>
                <tr>
                    <td> Tender Deadline: <input type="date" name="tenderDeadline"  onBlur={DeadlineDate}/>
                    </td>
                </tr>
                <tr>
                {/* This field needs to be auto-generated using formula which needs to be devised */}
                    {/* <td> Tender Reference number: <input type="number" name="TenderReferenceNumber"></input>
                    </td> */}
                </tr>
                <tr>
                    <td>
                            Tender Type: <select  name="tenderType"  onBlur={TenderType}>
                                    <option value="India">India</option>
                                    <option value="Global">Global</option>
                                    </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Tender Category: <select id="Category" name="tenderCategory"  onBlur={TenderCategory}>
                            <option value="Media">Media</option>
                            <option value="Construction">Construction</option>
                            <option value="Defence">Defence</option>
                            <option value="State Electricity">State Electricity</option>
                            <option value="IT Projects">IT Projects</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Tender businessLocation: <input type="Text" name="TbusinessLocation" maxLength="10"  onBlur={TenderbusinessLocation}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Address: <textarea name="address" maxLength="225"  onBlur={Address}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Tender Amount: <input type="number" name="tenderAmount" step="0.01" placeholder="0.00" min="0"  onBlur={TenderAmount}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Tender Payment: <select id="payment" name="payment"  onBlur={TenderPayment}>
                            <option value="Demand Draft">Demand Draft</option>
                            <option value="Banker's Cheque">Banker's Cheque</option>
                            <option value="Small Savings Instrument">Small Savings Instrument</option>
                            </select>
                    </td>
                </tr>
                <tr>
                {/* This field needs to be verified from Jeremy to make sure this works fine */}
                    <td>Tender Documents: <input type="file"></input> 
                    </td>
                </tr>
            </tbody>
                <br></br><br></br>
            <thead>
                <h2>
                    Inviting Authority: 
                </h2>
            </thead>
            <tbody>
            <tr>
                <td>
                    Inviting Authority Name: <input type="text" name="invitingAuthorityName"  onBlur={AuthorityName}></input>
                </td>
            </tr>
            <tr>    
                <td>
                    Inviting Authority Amount: <input type="number" name="AuthorityAmount" step="0.01" placeholder="0.00" min="0" onBlur={AuthorityAmount}></input>
                </td>
            </tr>
            </tbody>
        </table>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
        {/* <button onClick={logFormData}>Log Form Data</button> */}
        </form>
       
        </div>
    );
}