import React from "react";
import ConverterCurrency from "./converter";

function PlaceCurrency(props) {
    let {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
      } = props;    

    // assign the currency options object to be an array 
    const currencyOptionsArray = Object.entries(currencyOptions);
      // Function to calculate the converted amount based on the exchange rate
      const calculateConvertedAmount = () => {
        const exchangeRate = currencyOptions[selectedCurrency];
      
        if (exchangeRate === undefined) {
          console.error("Exchange rate not found for selected currency:", selectedCurrency);
          return "Error";
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
      <h1>Currency Converter</h1>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptionsArray.map(([currency, code]) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <ConverterCurrency currencyOptions={currencyOptions} />

      {/* New section to display the converted amount */}
      <div>
        <h2>Converted Amount:</h2>
        <p>{calculateConvertedAmount()} {selectedCurrency}</p>
      </div>

      {/* New section to display the strongest and weakest rates */}
      <div>
        <h2>Strongest Rate:</h2>
        <p>{strongest.currency} - {strongest.rate}</p>
        <h2>Weakest Rate:</h2>
        <p>{weakest.currency} - {weakest.rate}</p>
      </div>
    </div>
  );


}  
export default PlaceCurrency; 