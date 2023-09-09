import React, { useState } from 'react';
import Image from '../Project/tender.jpg';
import './LoginPageBootStrapTest.css'

export default function LoginPageBootStrapTest() {
  let LoginData = {
    username: '',
    password: '',
  };

  let [LoginDetails, setLoginDetails] = useState(LoginData);

  const handleInputChangeForLogin = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...LoginDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(LoginDetails);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
        <div className="card p-3">
          <form>
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">E-Tender Login Page</h2>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username/Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={LoginDetails.username}
                    onChange={handleInputChangeForLogin}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={LoginDetails.password}
                    onChange={handleInputChangeForLogin}
                  />
                </div>
                <div className="d-grid gap-2">
                  <input
                    type="button"
                    className="btn btn-primary"
                    value="Login"
                    onClick={handleSubmit}
                  />
                  <input
                    type="button"
                    className="btn btn-secondary"
                    value="Forgot Password"
                  />
                  <br />
                  <input
                    type="button"
                    className="btn btn-success"
                    value="Sign Up"
                  />
                </div>
                <br />
                <div className="text-center">
                  <button className="btn btn-danger">
                    Login using Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
