import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}){
    const getSession = localStorage.getItem('UserSession')
    return getSession ? children : <Navigate to='/Login'/>
}