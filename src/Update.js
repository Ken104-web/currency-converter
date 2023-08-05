import React, { useEffect, useState } from "react";

function UpdateCurrencyRate(){
    const [currency, setCurrency] = useState('');
    const [rate, setRate] = useState("");
    const [message, setMessage] =useState('');
    
    useEffect(() => {
        fetch('http://localhost:3000/rates', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(resp => resp.json())
        .then((data) =>     setMessage(data.message));
})

    function handleCurrencyChange(e) {
        setCurrency(e.target.value);
    };
    function handleRateChange(e) {
        setRate(e.target.value);
    }
        const postData = {
            currency : currency,
            rate: parseFloat(rate)
        };
    function handleUpdateRate(){
        setMessage(postData.message);
    }
       
    
    return (
        <div>
           <h2>Update Rate</h2>
           <label htmlFor="currency">Currency Code: </label> 
            <input type="text" id="currency" value={currency} onChange={handleCurrencyChange} />
        <br />
        <label htmlFor="rate">New Exchange Rate: </label>
      <input type="number" id="rate" value={rate} onChange={handleRateChange} />
      <br />
      <button onClick={handleUpdateRate}>Update Rate</button>
      <p>{message}</p>
        </div>
    )
}

export default UpdateCurrencyRate;