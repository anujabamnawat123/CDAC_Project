// import React, { useState } from 'react';
// import axios from "axios";
// import SearchResultBox from './SearchResultBox';

// export default function SearchBar() {

//   let tenderCategory="Media"
//   let tenderLocation=""
//   let MinPrice=""
//   let MaxPrice=""
//   let tarr=[];
//   let tenderName=""
//   let objdata =  {
//     "_id": "64e717b9596ecd35c6751bca",
//     "organizationDetails": {
//         "tenderName": "Public Park Renovation",
//         "tenderDeadline": "2023-11-30",
//         "tenderType": "Open",
//         "tenderCategory": "Construction",
//         "tenderLocation": "City U",
//         "tenderAmount": 1200000,
//         "invitingAuthorityName": "City Parks and Recreation",
//         "invitingAuthorityAmount": null,
//         "referenceNo": "Hello2512894",
//         "postDate": "2022-08-24",
//         "address": "890 Park Avenue, City U",
//         "paymentMode": "Banker's Cheque"
//     },
//     "business": {
//         "businessName": "Greenscapes Design",
//         "businessLocation": "City V"
//     }
// }

//   const [advancedSearchOpen, setAdvancedSearchOpen] = useState(false);
//   let [searchResult,setSearchResult] = useState(tarr);

//   let SearchResults = {
//     tenderName:"",
//   }
//   // let AdvanceSearchResults = {
//   //   Category:"",
//   //   Location:"",
//   //   MinPrice:"",
//   //   MaxPrice:"",
//   // }

//   const [searchQuery, setSearchQuery] = useState(SearchResults);
//   // const [AdvSearchQuery, setAdvSearchQuery] = useState(AdvanceSearchResults);
//   // const handleSearchQueryChange = (event) => {
//   //   setSearchQuery(event.target.value);
//   // };

//   const handleSearchQueryChange =(e) =>{
//     const {tenderName,value} = e.target;
//     setSearchQuery({...SearchResults,[tenderName]:value})
//     // console.log(SearchResults)
//   };

//   const handleBasicSearch = () => {
//     // Add logic for basic search
//     let obj = {"tenderName":SearchResults.tenderName}
//     sendBasicSearch();
//     console.log(searchQuery);
//   };
//   const sendBasicSearch = () => {
//     axios.post("http://localhost:9001/defaultSearch1",searchQuery).then(
//       (res)=>{
//         setSearchResult(renderSearchOutput(res.data))
//         console.log(res.data)
//       }
//     );
//   }

//   const handleAdvancedSearchToggle = () => {
//     setAdvancedSearchOpen(!advancedSearchOpen);
//   };

//   const handleAdvancedSearch = ()=> {
//     var obj = {"tenderCategory": tenderCategory , "tenderLocation": tenderLocation, "lPrice": MinPrice, "hPrice": MaxPrice } 
//     // const {name,value} = e.target;
//     // setAdvSearchQuery({...AdvSearchQuery,[name]:value})
//     // Add logic for advanced search
//     sendAdvancedSearch(obj);
//     console.log('Performing advanced search:', obj);
//   };
//   const sendAdvancedSearch = (obj) => {
//     axios.post("http://localhost:9001/advancedSearch",obj).then(
//       (res)=>{
//         tarr = [...res.data]
//         setSearchResult(tarr)
//         console.log(tarr)}
//     );
//   }

//   const renderSearchOutput = (dataarr)=>{
//       return dataarr.map((item,key)=>{<li><SearchResultBox data={item}></SearchResultBox></li>})
//   }

//   function setCategory (e) {
//     tenderCategory = e.target.value;
//   }
//   function setLocation (e) {
//     tenderLocation = e.target.value;
//   }
//   function SetMinPrice (e) {
//     MinPrice = e.target.value;
//   }
//   function SetMaxPrice (e) {
//     MaxPrice = e.target.value;
//   }



//   return (

//     <div className="search-bar">
//     <table>
//     <thead>
//       <td>
//           <h2>Search Results</h2>
//       </td>
//     </thead>
//     <tbody>
//     <tr>
//     <td>
//       <input type="text" placeholder="Enter Name" name='Name' value={searchQuery.Name} onChange={handleSearchQueryChange} /> &nbsp;
//       <button onClick={handleBasicSearch}>Search</button>
//       </td>
//     </tr>&nbsp;
//     <tr>
//     <td>
//       <button onClick={handleAdvancedSearchToggle}>Advanced Search</button>
//       {advancedSearchOpen && (
//         <div className="advanced-search">
//           {/* Add advanced search fields here */}
//           {/* <input type='text'  placeholder='Category' onBlur={setCategory} name='tenderCategory'/> &nbsp; */}
//           Tender Category: <select id="Category" name="tenderCategory" onClick={setCategory}>
//                             <option value="Media" >Media</option>
//                             <option value="Construction">Construction</option>
//                             <option value="Defence">Defence</option>
//                             <option value="State Electricity">State Electricity</option>
//                             <option value="IT Projects">IT Projects</option>
//                         </select> &nbsp;
//           <input type='text'  placeholder='Location'  onBlur={setLocation} name='tenderLocation'/> &nbsp;
//           <input type='number'  placeholder='Min Price' onBlur={SetMinPrice} name='MinPrice' min="0" /> &nbsp;
//           <input type='number'  placeholder='Max Price' onBlur={SetMaxPrice} name='MaxPrice' min="0" />&nbsp;
//           <button onClick={handleAdvancedSearch}>Search</button>
//         </div>
//       )}
//       </td>
//       </tr>
//       </tbody>
//       </table>
//       <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
//       <h2>
//         Hello
//       </h2>
//       <ul>
//         {/* {searchResult.map((item,key)=>{<li><SearchResultBox data={item}></SearchResultBox></li>})} */}
//         {searchResult}
//       </ul>
//     </div>
    

// );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import SearchResultBox from './SearchResultBox';
import './SearchResultBar.css';

export default function SearchBar() {
  let tenderName = '';
  let tenderCategory = 'Construction';
  let tenderLocation = '';
  let MinPrice = 0;
  let MaxPrice = 0;
  let AdvSearchArr = [];
  let basSearchArr = [];

  const [advancedSearchOpen, setAdvancedSearchOpen] = useState(false);
  let [searchResult, setSearchResult] = useState(basSearchArr);

  let SearchResults = {
    tenderName: '',
  };

  const [searchQuery, setSearchQuery] = useState(SearchResults);
  
  const handleSearchQueryChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...SearchResults, [name]: value });
    // console.log(SearchResults)
  };

  const handleBasicSearch = () => {
    // logic for basic search
    let obj = { 'tenderName': tenderName };
    sendBasicSearch();
    console.log(searchQuery);
  };

  const sendBasicSearch = () => {
    axios.post('http://localhost:9001/defaultSearch1', searchQuery).then(
      (res) => {
        setSearchResult(renderSearchOutput(res.data));
        // console.log(res.data);
        basSearchArr = [...res.data];
        setSearchResult([...basSearchArr])
        console.log(basSearchArr)
      }
    );
  };



  const handleAdvancedSearchToggle = () => {
    setAdvancedSearchOpen(!advancedSearchOpen);
  };

  const handleAdvancedSearch = () => {
    var obj = {
      tenderCategory: tenderCategory,
      tenderLocation: tenderLocation,
      lPrice: MinPrice,
      hPrice: MaxPrice,
    };
    sendAdvancedSearch(obj);
    console.log('Performing advanced search:', obj);
  };

  const sendAdvancedSearch = (obj) => {
    axios.post('http://localhost:9001/advancedSearch', obj).then(
      (res) => {

        // setSearchQuery({ ...SearchResults, [name]: value });
        AdvSearchArr = [...res.data];
        setSearchResult([...AdvSearchArr]);
        console.log(basSearchArr);
      }
    );
  };

  const renderSearchOutput = (dataarr) => {
    return dataarr.map((item, key) => (
      <li key={key}>
        <SearchResultBox data={item} />
      </li>
    ));
  };

  function setCategory(e) {
    tenderCategory = e.target.value;
  }
  function setLocation(e) {
    tenderLocation = e.target.value;
  }
  function SetMinPrice(e) {
    MinPrice = e.target.value;
  }
  function SetMaxPrice(e) {
    MaxPrice = e.target.value;
  }

  return (
    <div>
      <table className="search-table" style={{marginTop:"8vh", border:"5px"}}>
        <thead>
          <th>
            <h3>Search Results</h3>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter Name"
                name="tenderName"
                value={searchQuery.tenderName}
                onChange={handleSearchQueryChange}
              />
              &nbsp;
              <button onClick={handleBasicSearch}>Search</button>
            </td>
          </tr>
          &nbsp;
          <tr>
            <td style={{width:"920px", height:"50px"}}>
              <button onClick={handleAdvancedSearchToggle} style={{margin:"5px"}}>Advanced Search</button>
              {advancedSearchOpen && (
                <div className="advanced-search">
                  {/* Add advanced search fields here */}
                  {/* <input type='text'  placeholder='Category' onBlur={setCategory} name='tenderCategory'/> &nbsp; */}
                  Tender Category:<select id="Category" name="tenderCategory" onClick={setCategory}>
                    {/* <option value="Media">Media</option> */}
                    <option value="Construction">Construction</option>
                    <option value="Defence">Defence</option>
                    <option value="State Electricity">State Electricity</option>
                    <option value="IT Projects">IT Projects</option>
                  </select>
                  &nbsp;
                  <input
                    type="text"
                    placeholder="Location"
                    onBlur={setLocation}
                    name="tenderLocation"
                  />
                  &nbsp;
                  <input
                    type="number"
                    placeholder="Min Price"
                    onBlur={SetMinPrice}
                    name="MinPrice"
                    min="0"
                  />
                  &nbsp;
                  <input
                    type="number"
                    placeholder="Max Price"
                    onBlur={SetMaxPrice}
                    name="MaxPrice"
                    min="0"
                  />
                  &nbsp;
                  <button onClick={handleAdvancedSearch} >Search</button>
                  
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      {/* <h2>Hello</h2> */}
      <ul className="search-results-container"> {searchResult.map((item,key)=>(<li><SearchResultBox data={item}></SearchResultBox></li>))}</ul>
    </div>
  );
}
