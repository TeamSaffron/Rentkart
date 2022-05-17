import React, { useState } from "react";

export default function Filter() {
  const [city, setCity] = useState(0);
  const [type, setType] = useState(0);
  const [price, setPrice] = useState(0);

  function handleCityChange(event) {
    //const { value, name } = event.target;

    setCity(city ^ 1);
  }

  function handleTypeChange(event) {
    //const { value, name } = event.target;

    setType(type ^ 1);
  }

  function handlePriceChange(event) {
    //const { value, name } = event.target;

    setPrice(price ^ 1);
  }

  return (
    <div className="buttons">
      <div className="cities">
        <button onClick={handleCityChange}>City</button>
        {city ? (
          <div>
            <input />
            <button type="submit" placeholder="City Name">
              Submit
            </button>
          </div>
        ) : null}
      </div>

      <div className="buttons">
        <div className="types">
          <button onClick={handleTypeChange}>Type</button>
          {type ? (
            <div>
              <p>Furnished</p>
              <p>Semi-Furnished</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="buttons">
        <div className="Prices">
          <button onClick={handlePriceChange}>Price</button>
          {price ? (
            <div>
              <p>Less than 5000</p>
              <p>Less than 10000</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
