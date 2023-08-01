import React, {useEffect, useState} from "react";
import CurrencyConverter from "./Currency";

const HandleConvesrion = () => {    
    const [basedCurrency, setBasedCurrency] = useState('USD');
    const [basedCurrency1, setBasedCurrency1] = useState('EUR');
    const [amount, setAmount] = useState('');
    const [rates, setRates] = useState({});
    
    useEffect(() => {
        fetch('http://localhost:3000/rates')
          .then(resp => resp.json())
          .then(data => {
            if (typeof data === 'object') {
              
                setRates(data.rates);
            } else {
              throw new Error('Invalid Data');
            }
          })
      }, []);
   

    return ( 
        <div></div>
     );
}
 
export default HandleConvesrion;