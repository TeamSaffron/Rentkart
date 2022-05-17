import React, { useState } from "react";

export default function Filter() {
  const [city, setCity] = useState(0);
  const [type, setType] = useState(0);
  const [price, setPrice] = useState(0);
  
  return (
    <div className="buttons">
      <div className="cities">
      <button onClick={() => setCity(1)}>City</button>
        {city ? (
          <div>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Kanpur</p>
            <p>Chennai</p>
          </div>
        ) : null}
        
      </div>

      
      <div className="buttons">
      <div className="types">
      <button onClick={() => setType(1)}>Type</button>
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
      <button onClick={() => setPrice(1)}>Price</button>
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
