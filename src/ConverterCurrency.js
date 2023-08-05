import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UpdateCurrencyRate from "./Update";
function ConverterCurrency({currencyOptions}) {
  const display =  {backgroundColor: "#f7f7f7",
color: "blue"}
  return (
    <div>
      <Link to="/">Back to Place Currency</Link>
      <UpdateCurrencyRate />
      <SearchBar currencyOptions={currencyOptions}/>
      <h1 className="text-center" style={display}>Here is Our Displayed rates</h1>
      <ul>
        {Object.keys(currencyOptions).map((key)=>{
          return <li> {key} - {currencyOptions[key]} </li>
        })}
      </ul>
    </div>
  );
}

export default ConverterCurrency;
