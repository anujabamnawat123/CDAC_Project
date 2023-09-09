import React, { useState } from 'react';
import { useLocation, navigate, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function BidPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const referenceNo = new URLSearchParams(location.search).get('referenceNo');
    const currentDate = new Date();

    // Get day, month, and year from the current date
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();
    const createdOn = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const referenceno = localStorage.getItem("referenceno");

    const [bidAmount, setBidAmount] = useState(0);

    const addBid = (obj) => {
        axios.post("http://localhost:8282/bid/addBid",obj).then(
          (res)=>{
            console.log(res.data)
          }
        );
     }

    const handleSubmit = () => {
        // Create the bid data JSON object
        const username = JSON.parse(localStorage.getItem("UserSession"))?.username
         
        const bidData = {
            "referenceno": referenceno,
            "bidAmount": bidAmount,
            "bidderName":username,
            "createdOn":createdOn,
            "status":"ongoing"
        };

        addBid(bidData)
        console.log(bidData);

        // Clear the bidAmount after submission
        setBidAmount(0);
        //navigate("/UserDetails");
    };

    return (
        <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Bid Page</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Reference Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{referenceno}</td>
                            </tr>
                        </tbody>
                    </table>
                    <form>
                        <div className="form-group">
                            <label htmlFor="bidAmount">Enter Bid Amount:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="bidAmount"
                                name="bidAmount"
                                value={bidAmount}
                                onChange={(e) => setBidAmount(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit Bid
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
);
    }