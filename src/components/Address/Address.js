/* eslint-disable */
import React from 'react';

const Address = () => {
  return( 
   <form>
    <label htmlFor='street'>Street:</label>
      <input
      type="text"
      name="street"
      value=""
      onChange=""
      />
      <label htmlFor='city'>City:</label>
      <input
      type="text"
      name="city"
      value=""
      onChange=""
      />

<label htmlFor='state'>State:</label>
      <input
      type="text"
      name="state"
      value=""
      onChange=""
      />
    <button onClick="">Back</button> <button onClick="">Next</button>
    
    </form>
  )
};

export default Address;
