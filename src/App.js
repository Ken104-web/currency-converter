import { Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PlaceCurrency from './PlaceCurrency';
import ConverterCurrency from "./ConverterCurrency";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState({});
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)


  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }


useEffect(() => {
  fetch('https://cdn.moneyconvert.net/api/latest.json')
  .then(resp => resp.json())
  .then(data => {
    setCurrencyOptions(data.rates)
    setFromCurrency(data.base);
  })
}, [])
useEffect(() => {
  if (fromCurrency != null && toCurrency != null){
    fetch(`${'https://cdn.moneyconvert.net/api/latest.json'}?base=${fromCurrency}$symbols=${toCurrency}`)
    .then(resp => resp.json())
    .then(data => setExchangeRate(data[toCurrency]))
  }
}, [fromCurrency, toCurrency])
function handleFromAmountChange(e){
  setAmount(e.target.value)
  setAmountInFromCurrency(true)
}

return(
  <Routes>
  <Route path="/" element={<PlaceCurrency
  currencyOptions={currencyOptions}
  selectedCurrency={fromCurrency}
  onChangeCurrency={e => setFromCurrency(e.target.value)}
  onChangeAmount={handleFromAmountChange}
  amount={fromAmount}
  />}
  />/
      <Route path="/converter" element={<ConverterCurrency currencyOptions={currencyOptions}/>} />

  </Routes>
);
}
export default App;
