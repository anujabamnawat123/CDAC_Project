import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyByOTP(){

    const navigate = useNavigate();
    let LoginData = {
        otp:""
    }
    let[LoginDetails,setLoginDetails] = useState(LoginData);
    

    const handleInputChangeForLogin = (e) => {
        const {name, value} = e.target;
        setLoginDetails({...LoginDetails, [name]:value});        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(LoginDetails.otp === localStorage.getItem("otp")){
            localStorage.removeItem("otp")
            sendConfirmationEmail();
            localStorage.removeItem("email")
            navigate("/Login")
        }   
    };

    const sendConfirmationEmail = () => {
    
        var mailContent = {
            "to":localStorage.getItem('email'),
            "intro":"Thank you for registering with us",
            "subject":"sign up confirmation"
        }
        console.log(mailContent);
        axios.post("http://localhost:7000/mailService",mailContent).then(
            (res)=>{console.log("Verification mail sent")}
        )
    }



    return (
        <div>
            Enter the otp received through email
            <form>
                <input type='text' name="otp" value={LoginDetails.otp} onChange={handleInputChangeForLogin}/>
                <input type="button" class="btn btn-primary" id="h1" value="Login" onClick={handleSubmit} className='login-button'/>
            </form>
            
        </div>
    )

}