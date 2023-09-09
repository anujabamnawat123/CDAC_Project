import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function SearchResultBox(props) {

    // let i = props.data
    // console.log(i)
    // const boxStyle = {
    //     border: '3px solid black',
    //     padding: '10px',
    //     margin: '10px',
    //     borderRadius: '5px',
    // };
    let i = props.data
    const navigate = useNavigate();

    console.log(i)
    const boxStyle = {
        border: '3px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
    };

    function BidSubmit() {
        // Navigate to the bid page and pass the reference number as a query parameter
        navigate(`/AddBid?referenceNo=${i.organizationDetails.referenceNo}`);
    }

    return (
        <div>
            <form style={boxStyle}>
                <table >
                    <tbody >
                        <ul>
                            <tr>
                                <li>
                                    <td>
                                        <b>Reference Number: </b> {i.organizationDetails.referenceNo}
                                    </td>
                                </li>
                            </tr>
                            <tr>
                                <li>
                                    <td>
                                        <b>Name: </b> {i.organizationDetails.tenderName}
                                    </td>
                                </li>
                            </tr>
                            <tr>
                                <li>
                                    <td>
                                        <b>Location: </b> {i.organizationDetails.tenderLocation}
                                    </td>
                                </li>
                            </tr>
                            <tr>
                                <li>
                                    <td>
                                        <b>Category: </b> {i.organizationDetails.tenderCategory}
                                    </td>
                                </li>
                            </tr>
                            <tr>
                                <li>
                                    <td>
                                        <b>Price: </b> Rs.{i.organizationDetails.tenderAmount}
                                    </td>
                                </li>
                            </tr>
                            <tr>
                                <li>
                                    <td>
                                        <b>PaymentMode: </b> {i.organizationDetails.paymentMode}
                                    </td>
                                </li>
                            </tr>
                        </ul>
                    </tbody>
                    <tfoot>
                        <input type='button' value='Bid' onClick={()=>{localStorage.setItem("referenceno",i.organizationDetails.referenceNo);navigate(`/AddBid?referenceNo=${i.organizationDetails.referenceNo}`);}}/>
                    </tfoot>
                </table>
            </form>
        </div>
    )
}