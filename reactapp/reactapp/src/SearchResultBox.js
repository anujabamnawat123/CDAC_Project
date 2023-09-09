import React, { useState } from 'react';

export default function SearchResultBox(props) {

    let i = props.data
    console.log(i)
    const boxStyle = {
        border: '3px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
    };

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
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; <input type='button' value='Bid' /> */}
                    </tfoot>
                </table>
            </form>
        </div>
    )
}