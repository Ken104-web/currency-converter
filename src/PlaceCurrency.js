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
}