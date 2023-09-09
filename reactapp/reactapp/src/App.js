import { Routes , Route , Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Register from './RegistrationForm';
import LoginPage from './LoginPage';
import Search from './SearchResultBar';
import SearchBid from "./SearchResultBarBid";
import Search1 from './SearchResultsBarWorking';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import UserDetails from './UserDetailsPageTable';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TenderSubmit from './TenderSubmit1';
import BidByUser from "./BidByUser";
import BidPage from './BidPage';
import LogOut from './LogOut';
import Image from './tender.jpg'
import VerifyByOTP from './VerifyByOTP';
import { UserProvider } from './UserContext';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("UserSession"));

  const handleLogin = (userData) => {
    // ... logic to handle login ...
    setUser(userData);
    navigate('/');
  };

  const handleLogout = () => {
    // ... logic to handle logout ...
    setUser(null);
    navigate('/');
  };

  return (
    <UserProvider>
    <div className="App" style={{ margin:"auto",backgroundImage: 'url(' + Image + ')'}}>
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navbar user={user}></Navbar>}>
            <Route path='/Search' element={<Search></Search>}></Route>
            <Route path="/LogOut" element={<LogOut handleLogout={handleLogout}></LogOut>}></Route>
            <Route path='/SearchBid' element={
            <PrivateRoute><SearchBid></SearchBid></PrivateRoute>
            }></Route>
            <Route path='/Login' element={<LoginPage handleLogin={handleLogin}></LoginPage>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
            <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
            <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
            <Route path='/VerifyOTP' element={<VerifyByOTP></VerifyByOTP>}></Route>
            <Route path='/BidByUser' element={
            <PrivateRoute><BidByUser></BidByUser></PrivateRoute>
            }></Route>
            <Route path='/AddBid' element={
            <PrivateRoute><BidPage></BidPage></PrivateRoute>
            }></Route>
            <Route path='/UserDetails' element={
            <PrivateRoute><UserDetails></UserDetails></PrivateRoute>
            }></Route>
            <Route path="/TenderSubmit" element={
              <PrivateRoute><TenderSubmit></TenderSubmit></PrivateRoute>}
            ></Route>
            
          </Route>
          
        </Routes>
      </header>
      <Outlet></Outlet>
    </div>
    </UserProvider>
  );
}

export default App;