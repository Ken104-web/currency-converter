import React from "react";
import { Link } from "react-router-dom";

function ConverterCurrency({currencyOptions}) {
  return (
    <div>
            <Link to="/">Back to Place Currency</Link>
      <h1>Here is Our Displayed rates</h1>
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
