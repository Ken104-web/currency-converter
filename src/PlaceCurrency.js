import React from "react";
import { Link } from "react-router-dom";
import { Form, Card, FormGroup } from "react-bootstrap";
function PlaceCurrency(props) {
    let {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
      } = props;    

      console.log(currencyOptions);
      const Me =  {backgroundColor: "#f7f7f7",
      color: "blue"}
    // assign the currency options object to be an array 
    const currencyOptionsArray = Object.entries(currencyOptions);
      // Function to calculate the converted amount based on the exchange rate
      const calculateConvertedAmount = () => {
        const exchangeRate = currencyOptions[selectedCurrency];
      
        if (exchangeRate === undefined) {
          console.error("Exchange rate not found for selected currency:", selectedCurrency);
          return "Place your rate above";
        }
      
        return (amount * exchangeRate).toFixed(2); // Fix the result to 2 decimal places
      };
// Function to find the strongest and weakest rate
const findStrongestAndWeakestRates = () => {
    let strongestRate = 0;
    let weakestRate = Number.MAX_VALUE;
    let strongestCurrency = "";
    let weakestCurrency = "";
    let sumOfInverseRates = 0; // Used to calculate harmonic mean

    for (const [currency, rate] of currencyOptionsArray) {
      if (rate > strongestRate) {
        strongestRate = rate;
        strongestCurrency = currency;
      }

      if (rate < weakestRate) {
        weakestRate = rate;
        weakestCurrency = currency;
      }

      sumOfInverseRates += 1 / rate; // Calculate sum of inverse rates for harmonic mean
    }

    const numberOfRates = currencyOptionsArray.length;
    const harmonicMean = (numberOfRates / sumOfInverseRates).toFixed(4); // Fix to 4 decimal places
   

    return {
      strongest: {
        currency: strongestCurrency,
        rate: strongestRate
      },
      weakest: {
        currency: weakestCurrency,
        rate: weakestRate
      },
      harmonicMean: harmonicMean
    };
  };
  // call the funtion to find the strongest and weakest rates
  const { strongest, weakest,  } = findStrongestAndWeakestRates();
  return (
    <div>
            <Link to="/converter">Go to Displayed Rates</Link>
      <h1 className="text-center" style={Me}>Currency Converter</h1>
     <FormGroup>
      <Form.Control
        type="number"
        value={amount}
        onChange={onChangeAmount}
        className="mb-2"

     />
      <Form.Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptionsArray.map(([currency, code]) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Form.Select>
      </FormGroup>

      {/* New section to display the converted amount */}
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Converted Amount:</Card.Title>
        <Card.Text>{calculateConvertedAmount()} {selectedCurrency}</Card.Text>
      </Card.Body>
      </Card>

      {/* New section to display the strongest and weakest rates */}
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Strongest Rate as of Date:</Card.Title>
          <Card.Text>
            {strongest.currency} - {strongest.rate}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Weakest Rate as of Date:</Card.Title>
          <Card.Text>
            {weakest.currency} - {weakest.rate}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    
  );


}  
export default PlaceCurrency; 