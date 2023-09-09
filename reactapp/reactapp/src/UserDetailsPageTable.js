//The Working User Details Page table... This one should be executed.
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import './UserDetailsPageTable.css'

export default function TenderTable(){

    
let tenderData = [
  {
    organizationDetails: {
      tenderName: 'Construction Project',
      tenderDeadline: '2023-09-15',
      tenderType: 'Open',
      tenderCategory: 'Media',
      tenderLocation: 'City A',
      tenderAmount: 1000000,
      invitingAuthorityName: 'City Department of Public Works',
      invitingAuthorityAmount: 5000,
      address: '123 Main Street, City A',
      paymentMode: 'Demand Draft'
    },
    business: {
      businessName: 'tata Construction Company',
      businessLocation: 'City B'
    }
  },
  {
    organizationDetails: {
      tenderName: 'IT Services Procurement',
      tenderDeadline: '2023-10-10',
      tenderType: 'Closed',
      tenderCategory: 'Media',
      tenderLocation: 'City C',
      tenderAmount: 500000,
      invitingAuthorityName: 'City Government IT Department',
      address: '456 Tech Boulevard, City C',
      paymentMode: 'Demand Draft'
    },
    business: {
      businessName: 'Tech Solutions Inc.',
      businessLocation: 'City D'
    }
  },
  {
    organizationDetails: {
      tenderName: 'Supply of Medical Equipment',
      tenderDeadline: '2023-09-30',
      tenderType: 'Open',
      tenderCategory: 'Media',
      tenderLocation: 'City E',
      tenderAmount: 750000,
      invitingAuthorityName: 'Regional Hospital Authority',
      address: '789 Health Avenue, City E',
      paymentMode: 'Demand Draft'
    },
    business: {
      businessName: 'MedTech Supplies Ltd.',
      businessLocation: 'City F'
    }
  }
];
const [data, setData] = useState(tenderData);

const handleUpdate = (index) => {
    // Implement the logic to update the data here
    // For example: setData([...data.slice(0, index), updatedItem, ...data.slice(index + 1)]);
  };

  const handleDelete = (index) => {
    // axios.delete("http://localhost:8282/deleteTendersForUser/"+index).then(
    //   (res)=>{
    //     console.log("deleted for index "+index)
    //   }
    // )
  };
  
  useEffect(() => {
    getTenderForUser(tenderData)
  },[]);

  const getTenderForUser = (obj) => {
    let query = {username:JSON.parse(localStorage.getItem("UserSession"))?.username}
    axios.post("http://localhost:8282/getTendersForUser",query).then(
      (res)=>{
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
          <th border="1" width="5%" height="10px"><h1><u className='user-details-header'>Tender's Added</u></h1> </th>
      </tr>
    </table>

    <table className="user-details-table" style={{ border: '1px solid black', borderCollapse: 'collapse', width: '98%', margin:"1%" }}>
      <thead>
        <tr className="table-header-row" style={{ borderBottom: '1px solid black' }}>
          <th>Tender Name</th>
          <th>Date Added</th>
          <th>Deadline</th>
          <th>Location</th>
          <th>Amount</th>
          <th>Delete</th>
          {/* <th style={{ border: '1px solid black', padding: '8px' }}> Action</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((tender, index) => (
          <tr className="table-data-row" key={index} style={{ borderBottom: '1px solid black' }}>
            <td scope='col'>{tender.tenderName}</td>
            <td scope='col'>{tender.postDate}</td>
            <td scope='col'>{tender.endDate}</td>
            <td scope='col'>{tender.tenderLocation}</td>
            <td scope='col'>{tender.tenderAmount}</td>
            
            <td className="action-buttons" style={{ border: '1px solid black', padding: '8px' }}>
              {/* <button onClick={() => handleUpdate(index)}>Update</button> */}
              <button onClick={() => {
                axios.delete("http://localhost:8282/deleteTendersForUser/",{
                  params: {
                    referenceno: tender.referenceno
                  }
                }).then(
                    (res)=>{
                      console.log("deleted for reference no "+tender.referenceno)
                      getTenderForUser(tenderData)
                    }
                    
                )
                axios.post("http://localhost:7000/deleteData/",{
                    "organizationDetails.referenceNo": tender.referenceno
                }).then(
                    (res)=>{
                      console.log("deleted for reference no "+tender.referenceno)
                      getTenderForUser(tenderData)
                    }
                    
                )

                  
              }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};