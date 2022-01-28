/* eslint-disable */

import React from 'react';

const Contact = ({data, handleChange, next, back}) => {
  return (
    <form>
    <label htmlFor='phone'>Phone:</label>
      <input
      type="number"
      name="phone"
      value={data.phone}
      onChange={handleChange}
      />
      <label htmlFor='email'>Email:</label>
      <input
      type="text"
      name="email"
      value={data.email}
      onChange={handleChange}
      />

<button onClick={back}>Back</button> <button onClick={next}>Next</button>


    
    
    </form>
  )
};

export default Contact;
