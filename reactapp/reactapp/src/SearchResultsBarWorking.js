import React, { useState } from 'react';

export default function SearchResultsBar() {
    let DemoData = [
        {ReferenceNumber : "Hello8374959" ,
        Name:"Supply and Delivery of Water Tanks",
        Location:" Bhopal",
        Category:"Construction",
        Price:"237888",
        PaymentMode:"Demand Draft",
      },
      {ReferenceNumber : "Lol4343" ,
        Name:"BollywoodMafia",
        Location:" Nepal",
        Category:"Media",
        Price:"38525",
        PaymentMode:"Demand Draft",
      },
      {ReferenceNumber : "Hippie" ,
        Name:"KripaBarse",
        Location:" Kalyan",
        Category:"Defence",
        Price:"66573",
        PaymentMode:"Demand Draft",
      },
      {ReferenceNumber : "Hola" ,
        Name:"Paritosh",
        Location:"Honululu",
        Category:"Defence",
        Price:"86678",
        PaymentMode:"Demand Draft",
      },
      ]

      let [advancedSearchOpen, setAdvancedSearchOpen] = useState(false);
  let [searchQuery, setSearchQuery] = useState({ Name: '' });
  let [tenderCategory, setTenderCategory] = useState('');
  let [tenderLocation, setTenderLocation] = useState('');
  let [MinPrice, setMinPrice] = useState('');
  let [MaxPrice, setMaxPrice] = useState('');
  let [displayedData, setDisplayedData] = useState(DemoData);

  let SearchResults = {
    Name:"",
  }

  let handleSearchQueryChange =(e) =>{
    var {name,value} = e.target;
    setSearchQuery({...SearchResults,[name]:value})
    // console.log(SearchResults)
  };

  let handleBasicSearch = () => {
    var filteredData = DemoData.filter(item =>
      item.Name.toLowerCase().includes(searchQuery.Name.toLowerCase())
    );
    setDisplayedData(filteredData);
  };


  let handleAdvancedSearchToggle = () => {
    setAdvancedSearchOpen(!advancedSearchOpen);
  };

//   let handleAdvancedSearch = () => {
//     var filteredData = DemoData.filter(item =>
//       item.Category === tenderCategory &&
//       item.Location.toLowerCase().includes(tenderLocation.toLowerCase()) &&
//       (MinPrice === '' || item.Price >= MinPrice) &&
//       (MaxPrice === '' || item.Price <= MaxPrice)
//     );
//     setDisplayedData(filteredData);
//   };

let handleAdvancedSearch = () => {
    var filteredData = DemoData.filter(item => {
      const categoryMatch = tenderCategory === '' || item.Category === tenderCategory;
      const locationMatch = tenderLocation === '' || item.Location.toLowerCase().includes(tenderLocation.toLowerCase());
      const minPriceMatch = MinPrice === '' || item.Price >= parseFloat(MinPrice);
      const maxPriceMatch = MaxPrice === '' || item.Price <= parseFloat(MaxPrice);
  
      return categoryMatch && locationMatch && minPriceMatch && maxPriceMatch;
    });
  
    setDisplayedData(filteredData);
  };
  

  function setCategory (e) {
    setTenderCategory (e.target.value);
  }
  function setLocation (e) {
    setTenderLocation (e.target.value);
  }
  function SetMinPrice (e) {
    setMinPrice (e.target.value);
  }
  function SetMaxPrice (e) {
    setMaxPrice (e.target.value);
  }

  
  const boxStyle = {
    border: '3px solid black',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
  };

  return (
    <>
    <div className="search-bar">
    <table>
    <thead>
      <td>
          <h2>Search Results</h2>
      </td>
    </thead>
    <tbody>
    <tr>
    <td>
      <input type="text" placeholder="Enter Name" name='Name' value={searchQuery.Name} onChange={handleSearchQueryChange} /> &nbsp;
      <button onClick={handleBasicSearch}>Search</button>
      </td>
    </tr>&nbsp;
    <tr>
    <td>
      <button onClick={handleAdvancedSearchToggle}>Advanced Search</button>
      {advancedSearchOpen && (
        <div className="advanced-search">
          {/* Add advanced search fields here */}
          {/* <input type='text'  placeholder='Category' onBlur={setCategory} name='tenderCategory'/> &nbsp; */}
          Tender Category: <select id="Category" name="tenderCategory" onClick={setCategory}>
                            <option value="">Select Category</option>
                            <option value="Media" >Media</option>
                            <option value="Construction">Construction</option>
                            <option value="Defence">Defence</option>
                            <option value="State Electricity">State Electricity</option>
                            <option value="IT Projects">IT Projects</option>
                        </select> &nbsp;
          <input type='text'  placeholder='Location'  onBlur={setLocation} name='tenderLocation'/> &nbsp;
          <input type='number'  placeholder='Min Price' onBlur={SetMinPrice} name='MinPrice' min="0" /> &nbsp;
          <input type='number'  placeholder='Max Price' onBlur={SetMaxPrice} name='MaxPrice' min="0" />&nbsp;
          <button onClick={handleAdvancedSearch}>Search</button>
        </div>
      )}
      </td>
      </tr>
      </tbody>
      </table>
    </div>

    <br></br>
    <br></br>
    {/* <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br> */}

    <h2> Tender's Available: </h2> 
    <br></br>
    <br></br>
        {/* {DemoData.map((search, index) => ( */}
        {displayedData.map((search, index) => (
    <form style={boxStyle} key={index}>
        <table >
          <tbody >
          <ul >
          <tr>
            <li>
              <td>
                  <b>Reference Number: </b> {search.ReferenceNumber}
              </td>
              </li>
            </tr>
            <tr>
            <li>
              <td>
                  <b>Name: </b> {search.Name}
              </td>
              </li>
            </tr>
            <tr>
            <li>
              <td>
                  <b>Location: </b> {search.Location}
              </td>
              </li>
            </tr>
            <tr>
            <li>
              <td>
                  <b>Category: </b> {search.Category}
              </td>
              </li>
            </tr>
            <tr>
            <li>
              <td>
                  <b>Price: </b> Rs.{search.Price}
              </td>
              </li>
            </tr>
            <tr>
            <li>
              <td>
                  <b>PaymentMode: </b> {search.PaymentMode}
              </td>
              </li>
            </tr>
            &nbsp; &nbsp; &nbsp; &nbsp; <input type='button' value='Bid'/>
            </ul>
          </tbody>
        </table>
    </form>
            ))}
    </>

);
}


