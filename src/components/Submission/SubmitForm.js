/* eslint-disable */
import React from 'react';

const SubmitForm = ({data, back}) => {
  const formItems = Object.entries(data).map(([key, value]) => (
    <li>
      <strong>{key}:</strong> {value}
    </li>
  ))

  function handleSubmit(event){
    event.preventDefault();
    console.log(data);
  }
  
  return <div>
    <form onSubmit={handleSubmit}>
    <ul >{formItems}</ul>
    <button onClick={back}>Back</button> <button type="submit" >Submit</button>
    </form>
      
  </div>;
};

export default SubmitForm;
