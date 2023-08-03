import React, { useState } from "react";
import { Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";

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
        <Form.Group>
      <Form.Control
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter currency code to search"
      />
      <button onClick={handleSearch}>Search</button>
    </Form.Group>
      {searchResults.length > 0 && (
  <div>
    <h2>Search Results:</h2>
    <ListGroup>
      {searchResults.map((currencyCode) => (
        <ListGroupItem>
          {currencyCode} - {searchResults[currencyCode]}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)}

      
    </div>
  );
}

export default SearchBar;
