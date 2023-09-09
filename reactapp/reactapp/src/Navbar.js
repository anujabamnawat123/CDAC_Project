import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './App.css'


export default function Navbar(){

  const [user, setUser] = useState(localStorage.getItem("UserSession"));
  const navigate = useNavigate();

  useEffect(() => {
    // Whenever the "UserSession" value changes in localStorage,
    // update the "user" state accordingly
    const storedUser = localStorage.getItem("UserSession");
    setUser(storedUser);

    // Use navigate to re-render the Navbar
    navigate(); // This will trigger a re-render of the Navbar
  }, [navigate]);
   



    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>E-Tender APP</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to='/Search'>Search</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to='/AboutUs'>About Us</Link>
            </li>
            {user==null ? <li className="nav-item">
              <Link className="nav-link" to='/Login'>Login</Link>
            </li> : <></>}
            {user!=null ? <li className="nav-item">
              <Link className="nav-link" to='/Logout'>Logout</Link>
            </li> : <></>}
            {user==null ? <li className="nav-item">
              <Link className="nav-link" to='/Register'>Sign Up</Link>
            </li>: <></>}
            {user!=null ? <li className="nav-item">
              <Link className="nav-link" to='/UserDetails'>User Details</Link>
            </li>:<></>}
            {user!=null ? <li className="nav-item">
              <Link className="nav-link" to='/TenderSubmit'>Add Tender</Link>
            </li>:<></>}
            {user!=null ? <li className="nav-item">
              <Link className="nav-link" to='/BidByUser'>Show Bids</Link>
            </li>:<></>}
            {user==null ? 
            <li className="nav-item">
              <Link className="nav-link" to='/Search'>Search</Link>
            </li> : 
            <li className="nav-item">
              <Link className="nav-link" to='/SearchBid'>Search</Link>
            </li>}
          </ul>
          <ul>
            <li>
            {user!=null ? <div>{user?.username}</div> : <div></div>}
            </li>
          </ul>
            
        </div>
      </nav>
      <Outlet></Outlet>
    </>
    )
}

