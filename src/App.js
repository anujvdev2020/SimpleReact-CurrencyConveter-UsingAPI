import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [v, setValue] = useState(null);
  const [user, setUser] = useState("Enter Any Currency");
  const getValue = () => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then((response) => response.json())
      .then((data) => {
        setValue(data.rates[user]);
      });
      
  };

  return (
    <div className="App">
      <h1>Welcome to Currency Converter</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={() => getValue()}>Convert</button>
      {v != null ? <h1>1 USD is equal to {v.toFixed(3)} {user}</h1> : null}
    </div>
  );
}
