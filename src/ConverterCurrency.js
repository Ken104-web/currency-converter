import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
function ConverterCurrency({currencyOptions}) {
  return (
    <div>
      <Link to="/">Back to Place Currency</Link>
      <SearchBar currencyOptions={currencyOptions}/>
      <h1>Here is Our Displayed rates</h1>
      <ul>
        {Object.keys(currencyOptions).map((key)=>{
          return <li> {key} - {currencyOptions[key]} </li>
        })}
       
      </ul>
    </div>
  );
}

export default ConverterCurrency;
