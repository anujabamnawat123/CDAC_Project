import { useNavigate } from "react-router-dom";


export default function LogOut(handleLogout){
    const navigate = useNavigate();
    localStorage.removeItem("UserSession")
    
    navigate("/")
} 