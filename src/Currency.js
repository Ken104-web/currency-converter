import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/rates')
      .then(resp => resp.json())
      .then(data => {
        if (typeof data === 'object') {
          setCurrency(data);
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
    </div>
  );
}

export default CurrencyConverter;
