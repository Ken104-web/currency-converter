import React, { useState } from "react";
import { Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";
const searchResultsStyle = {
    backgroundColor: "#f7f7f7",
    padding: "10px",
    borderRadius: "5px",
}
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
    <div style={searchResultsStyle}>
        <Form.Group className="mb-3">
      <Form.Control
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter currency code to search"
        className="mr-2"
      />
      <Button  variable="primary" onClick={handleSearch}>Search</Button>
    </Form.Group>
      {searchResults.length > 0 && (
  <div>
    <h2>Search Results:</h2>
    <ListGroup className="d-flex justify-between">
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
