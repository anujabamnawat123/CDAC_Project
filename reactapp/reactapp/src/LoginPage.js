import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import './LoginPage.css'
import jwt_decode from "jwt-decode";

export default function LoginPage(){

  const navigate = useNavigate();
  let LoginData = {
  username:"",
  password:"",
}

let[LoginDetails,setLoginDetails] = useState(LoginData);



function handleCallbackResponse(response){
  var userObj = jwt_decode(response.credential);
  console.log(userObj);
  var setObj = {
    firstname:userObj.given_name,
    lastname:userObj.family_name,
    email:userObj.email,
    dob:"",
    username:userObj.email,
    password:"",
    phonenumber:"",
  }
  localStorage.setItem("UserSession",JSON.stringify(setObj));
  navigate("/UserDetails");

}

useEffect(()=>{
  /* global google */
  google.accounts.id.initialize({
    client_id:"430696131827-ia24b930niudne4ca53mq1qvh26092u2.apps.googleusercontent.com",
    callback:handleCallbackResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline",size:"large"}
  )

  google.accounts.id.prompt();
},[])

const handleInputChangeForLogin = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...LoginDetails, [name]:value});
    // console.log(LoginDetails);
};

const handleSubmit = (e) => {
    e.preventDefault();
    sendLogin();
    console.log(LoginDetails);
};

const sendLogin = () => {
  axios.post("http://localhost:8282/login",LoginDetails).then(
    (res)=>{
      if(res.data.username!=null){
        localStorage.setItem("UserSession",JSON.stringify(res.data))
        
        navigate("/UserDetails")
      }
    }
  );
}

      return(
        <div >
        <div>
        
          <form className='login-container'>
            <table >
            <thead>
                <th>
                <h2 className='login-header'>E-Tender Login Page</h2>
                </th>
              </thead>
            <tbody>
            <tr>
              <td>
              <label htmlFor='username' className='login-label'>Username: </label>
               <input type="text" name="username" value={LoginDetails.username} onChange={handleInputChangeForLogin} className='Login-User'></input>
              </td>
            </tr>
            <tr>
                <td>
                <label htmlFor='password' className='login-label'>Password: </label>
                <input type="password" name="password"  value={LoginDetails.password} onChange={handleInputChangeForLogin} className='Login-Password'></input>
                </td>
            </tr>
            <tr>
            <td>
            {/* onClick={submitevent} in the below button */}
            <div className='button-group'>
                <input type="button" class="btn btn-primary" id="h1" value="Login" onClick={handleSubmit} className='login-button'/> &nbsp;
                {/* <input type="button" class="btn btn-primary" value="Forgot Password"  className='forgot-password-button'/>  */}
                
                </div>
                </td>
                </tr>
                <tr>
                <td>
                {/* <div className='button-group'>
                <input type="button" class="btn btn-primary" value="Sign Up" ></input>
                </div> */}
                </td>
                </tr>
                <div className='button-group'>  
            <tr>
              {/* <input type='button' class="btn btn-primary" value='Login using Google' className='google-login-button'/> */}
              <div id="signInDiv"></div>
            </tr>
            </div>
                {/* <p id="h2">{change}</p> */}
                </tbody>
            </table>
            </form>
            
        </div>
        </div>
    );
    }