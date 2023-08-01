import React, {  useEffect, useState } from "react";
import PlaceCurrency from "./PlaceCurrency";
function CurrencyConverter() {
  const [currency] = useState({});
  
    
    useEffect(() => {
    fetch('http://localhost:3000/rates')
      .then(resp => resp.json())
      .then(data => {
        if (typeof data === 'object') {
          
          console.log(data);
        } else {
          throw new Error('Invalid Data');
        }
      })
      .catch(error => {
      });
  }, []);

  
  return (
    <div>
      <h1>Insert Your Currency</h1>
      {Object.keys(currency).map(currencyCode => (
        <div key={currencyCode}>
          <span>{currencyCode}</span>
          <span>{currency[currencyCode]}</span>
        </div>
      ))}
        <PlaceCurrency/>
    </div>
  );
}

export default CurrencyConverter;
