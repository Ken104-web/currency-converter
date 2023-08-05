import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
function UpdateCurrencyRate() {
    const [currency, setCurrency] = useState("");
    const [rate, setRate] = useState("");
    const [message, setMessage] = useState("");
  
    function handleCurrencyChange(e) {
      setCurrency(e.target.value);
    }
  
    function handleRateChange(e) {
      setRate(e.target.value);
    }
  
    function handleUpdateRate() {
      const postData = {
        currency: currency,
        rate: parseFloat(rate),
      };
  
      fetch("http://localhost:3000/rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((resp) => resp.json())
        .then((data) => setMessage(data.message))
        .catch((error) => {
          console.error("Error:", error);
          setMessage("Failed to update rate. Please try again later.");
        });
    }
    const Display =  {backgroundColor: "#f7f7f7",
    color: "blue"}
    return (
      <div>
        <h2 style={Display}>Update Rate</h2>
        <Form>
          <Form.Group className="mb-3" controlId="currency">
            <Form.Label>Currency Code:</Form.Label>
            <Form.Control
              type="text"
              value={currency}
              onChange={handleCurrencyChange}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="rate">
            <Form.Label>New Exchange Rate:</Form.Label>
            <Form.Control
              type="number"
              value={rate}
              onChange={handleRateChange}
            />
          </Form.Group>
  
          <Button variant="primary" onClick={handleUpdateRate}>
            Update Rate
          </Button>
        </Form>
  
        <p>{message}</p>
      </div>
    );
  }
  
  export default UpdateCurrencyRate;
  
