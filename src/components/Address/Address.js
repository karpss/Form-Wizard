/* eslint-disable */
import React from 'react';

const Address = ({data, handleChange, next, back}) => {
  return( 
   <form>
    <label htmlFor='street'>Street:</label>
      <input
      type="text"
      name="street"
      value={data.street}
      onChange={handleChange}
      />
      <label htmlFor='city'>City:</label>
      <input
      type="text"
      name="city"
      value={data.city}
      onChange={handleChange}
      />

<label htmlFor='state'>State:</label>
      <input
      type="text"
      name="state"
      value={data.state}
      onChange={handleChange}
      />
    <button onClick={back}>Back</button> <button onClick={next}>Next</button>
    
    </form>
  )
};

export default Address;
