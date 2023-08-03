mport { Route, Routes} from 'react-router-dom';
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

}