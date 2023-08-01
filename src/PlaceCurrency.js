import React, { useEffect, useState } from "react";

function PlaceCurrency(props) {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/rates')
      .then(resp => resp.json())
      .then(data => {
        if (typeof data === 'object' && Array.isArray(data.rates)) {
          setRates(data.rates);
        } else {
          throw new Error('Invalid Data');
        }
      })
      .catch(error => {
        console.error('Error fetching rates:', error);
      });
  }, []);

  return (
    <div className="currency">
      <input type="text" value={props.amount} onChange={e => props.onAmountChange(e.target.value)} />
      <select value={props.currency}>
        {rates.map(rate => (
          <option key={rate} value={rate}>
            {rate}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlaceCurrency;
