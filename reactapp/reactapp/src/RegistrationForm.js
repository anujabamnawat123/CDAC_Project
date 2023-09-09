//This Form to be linked to Sign-Up section

//Username & Password to be mapped to the login page SQL user Database
// it is using the same data

//For Phone number section: npm install react-phone-input-2 --save
//import PhoneInput from 'react-phone-input-2';
//import 'react-phone-input-2/lib/style.css';

import axios from "axios";
import React,{useEffect, useState} from "react";
import { Navigate, NavigationType, useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberInput.css';
import './RegistrationForm.css';


export default function Register(){

const navigate = useNavigate();
var status = false;
let RegisterUser = {
    firstname:"",
    lastname:"",
    email:"",
    dob:"",
    username:"",
    password:"",
    phonenumber:"",
};

let [RegisterNewUser, setRegisterNewUser] = useState(RegisterUser);
let [successMessage, setSuccessMessage] = useState('');
let [isFormValid, setIsFormValid] = useState(false);
const [isDobValid, setIsDobValid] = useState(true);

const handleInputChange = (e, name, value) => {
    if (e && e.target) {
        ({ name, value } = e.target);
    }
    if(name==='dob'){
        const selectedDate= new Date(value);
        const currentDate = new Date();
        setIsDobValid(selectedDate <= currentDate);
    }
    setRegisterNewUser({ ...RegisterNewUser, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
    sendRegister();
    console.log(RegisterNewUser);
    setSuccessMessage('Form submitted successfully!');
} else {
    setSuccessMessage('Please fill in all required fields.');
  }
};

useEffect(() => {
    const isValid = Object.values(RegisterNewUser).every((value) => value !== '' && isDobValid );
    setIsFormValid(isValid);
}, [RegisterNewUser]);

const sendRegister = () => {
    axios.post("http://localhost:8282/register",RegisterNewUser).then(
      (res)=>{
        sendVerificationEmail();
        console.log("Register sucessful",res.data)
    }
    );
  }

const sendVerificationEmail = () => {

    let otp = ""+Math.floor(Math.random() * 1000000);
    localStorage.setItem('otp',otp)
    localStorage.setItem('email',RegisterNewUser.email)

    var mailContent = {
        "to":RegisterNewUser.email,
        "intro":"Welcome to our application, here are the verification details",
        "table":{
            "data":[{
                username:RegisterNewUser.firstname,
                otp:otp
            }]
        },
        "subject":"sign up verification"
    }
    console.log(mailContent);
    axios.post("http://localhost:7000/mailService",mailContent).then(
        (res)=>{console.log("Verification mail sent")}
    )

    navigate("/VerifyOTP");
}


  function RegisteredTender(){
    var reg = {
        "email":RegisterNewUser.email,
        "Message":"Thank you for Registering your Account"
    }

    console.log(reg)
 }

return (
<div>
    <div style={{}}>
        <form className="registration-container" onSubmit={handleSubmit}>
        {/* <h2 >Registration form:</h2> */}
        <table>
            <thead>
                <th>
                     <tb> Sign Up </tb>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td className='registration-label'> First Name: <input type="text" name="firstname" className="form-control" required maxLength={20} value={RegisterNewUser.firstname} onChange={handleInputChange}/> 
                    </td>
                </tr>
                <tr>
                    <td className='registration-label'> Last Name: <input type="text" name="lastname" className="form-control"  required maxLength={20} value={RegisterNewUser.lastname} onChange={handleInputChange}/>
                    </td>
                </tr>
                <tr>
                    <td className='registration-label' > Email: <input type="email" name="email" required className="form-control" value={RegisterNewUser.email} onChange={handleInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <td className='registration-label' > Date of Birth: <input type="date" name="dob"  className="form-control"  required value={RegisterNewUser.dob} onChange={handleInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <td className='registration-label'>
                        Phone number: <PhoneInput country={'in'} name="phonenumber"  value={RegisterNewUser.phonenumber}  onChange={(value) => handleInputChange(null, "phonenumber",value)} />
                    </td>
                </tr>
                <tr>
                    <td className='registration-label'> Username: <input type="text" maxLength={10} name="username" className="form-control"  value={RegisterNewUser.username} onChange={handleInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <td className='registration-label'> Password: <input type="password" maxLength={10} name="password" className="form-control"  value={RegisterNewUser.password} onChange={handleInputChange}></input>
                    </td>
                </tr>
            </tbody>
            &nbsp;
            <tfoot>
            <tr>
            <td><input type="Button" value="Submit" onClick={handleSubmit} class="btn btn-primary" disabled={!isFormValid}/> </td> 
            </tr>
            </tfoot>
            {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage} </div>
          )}
        </table>
        </form>
        </div>
    </div>
);

}