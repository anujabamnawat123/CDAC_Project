//The Working User Details Page table... This one should be executed.
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import './UserDetailsPageTable.css'

export default function BidByUser(){

    
let tenderData = [
  {
    bidAmount:5641,
    bidderName:"asd",
    createdOn:"",
    referenceno:"asd564"
  }
  ,
  {
    bidAmount:5641,
    bidderName:"zxc",
    createdOn:"",
    referenceno:"zxc564"
  },
  {
    bidAmount:5641,
    bidderName:"qwe",
    createdOn:"",
    referenceno:"qwe564"
  }
];
const [data, setData] = useState(tenderData);
  
  useEffect(() => {
    getTenderForUser(tenderData)
  },[]);

  const getTenderForUser = (obj) => {
    let username = JSON.parse(localStorage.getItem("UserSession"))?.username
    axios.post("http://localhost:8282/bid/allForUser",{
        "bidderName": username
      }).then(
      (res)=>{
        console.log(res.data)
        obj = [...res.data]
        tenderData = [...obj]
        setData(tenderData)
      }
    );
 }



  return (
    <div >
    <table>
    <tr>
          <th border="1" width="5%" height="10px"><h1><u className='user-details-header'>Your Bids</u></h1> </th>
      </tr>
    </table>

    <table className="user-details-table" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '98%', margin:"1%" }}>
      <thead>
        <tr className="table-header-row" style={{ borderBottom: '1px solid black' }}>
          <th>Bid Amount</th>
          <th>Bidder Name</th>
          <th>Created On</th>
          <th>Reference No</th>
          {/* <th style={{ border: '1px solid black', padding: '8px' }}> Action</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((tender, index) => (
          <tr className="table-data-row" key={index} style={{ borderBottom: '1px solid black' }}>
            <td scope='col'>{tender.bidAmount}</td>
            <td scope='col'>{tender.bidderName}</td>
            <td scope='col'>{tender.createdOn}</td>
            <td scope='col'>{tender.referenceno}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};