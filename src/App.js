
import React, { useState, useEffect } from "react";

function App() {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleInputChange = (event) => {
    const enteredCharacter = event.target.value;
    setPhoneNumber(formatPhone(enteredCharacter));
  };

  const formatPhone = (number) => {
    let formattedNumber = number.replace(
      /^(\d{3})(\d{3})(\d{0,4}).*/,
      "($1) $2-$3"
    );
    return formattedNumber;
  };

  return (
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="Mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={handleInputChange}
      />
      <div>
        <label htmlFor="phone" data-testid="phone-label">{phoneNumber}</label>
      </div>
    
      <div id="mocha"></div>
    </div>
  );
}

export default App;
