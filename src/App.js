import { Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PlaceCurrency from './PlaceCurrency';
import ConverterCurrency from './converter';

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
  fetch('http://localhost:3000/rates')
  .then(resp => resp.json())
  .then(data => {
    
    setCurrencyOptions(data)
    setFromCurrency(data.base);
  })
}, [])
useEffect(() => {
  if (fromCurrency != null && toCurrency != null){
    fetch(`${'http://localhost:3000/rates'}?base=${fromCurrency}$symbols=${toCurrency}`)
    .then(resp => resp.json())
    .then(data => setExchangeRate(data[toCurrency]))
  }
}, [fromCurrency, toCurrency])
function handleFromAmountChange(e){
  setAmount(e.target.value)
  setAmountInFromCurrency(true)
}
function handleToAmountChange(e) {
  setAmount(e.target.value)
  setAmountInFromCurrency(false)
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
  <Route path="./converter" element={<ConverterCurrency
  currencyOptions={currencyOptions}
  selectedCurrency={toCurrency}
  onChangeCurrency={e => setToCurrency(e.target.value)}
  onChangeAmount={handleToAmountChange}
  amount={toAmount}
  />}
  />
  </Routes>
);
}
export default App;
