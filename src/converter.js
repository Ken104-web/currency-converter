import React from "react";

const ConverterCurrency = (props) => {
  let {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
   } = props
   const currencyOptionsB = Object.entries(currencyOptions)
  return(
    <div>
    <input type="number" className="input" value={amount} onChange={onChangeAmount} />
    <select value={selectedCurrency}  onChange={onChangeCurrency}>
        {currencyOptionsB.map(option => (
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
    </div>
  )
}
 
export default ConverterCurrency;