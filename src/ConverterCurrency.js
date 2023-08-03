import React from "react";
import { Link } from "react-router-dom";

function ConverterCurrency({currencyOptions}) {
  return (
    <div>
            <Link to="/">Back to Place Currency</Link>
      <h1>Converter Currency</h1>
      <h2>Here is Our Displayed rates</h2>
      <ul>
        {Object.entries(currencyOptions).map(([currency, rate])=> (
          <li key={currency}>
            {currency} - {rate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConverterCurrency;
