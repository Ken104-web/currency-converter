import React, { useState } from "react";

function SearchBar({ currencyOptions }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const searchTermUpperCase = searchTerm.toUpperCase();
    const filteredResults = Object.keys(currencyOptions).filter(
      (key) => key.includes(searchTermUpperCase)
    );
    setSearchResults(filteredResults);
  };
  

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter currency code to search"
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
  <div>
    <h2>Search Results:</h2>
    <ul>
      {searchResults.map((currencyCode) => (
        <li>
          {currencyCode} - {searchResults[currencyCode]}
        </li>
      ))}
    </ul>
  </div>
)}

      
    </div>
  );
}

export default SearchBar;
