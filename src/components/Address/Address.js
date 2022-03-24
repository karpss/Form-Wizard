/* eslint-disable */
import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';


const Address = () => {
  const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
      <label htmlFor="street">Street:</label>
      <input
        type="text"
        name="street"
        value={userData.street}
        onChange={(e) => setUserData({...userData, street: e.target.value})}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={userData.city}
        onChange={(e) => setUserData({...userData, city: e.target.value})}
      />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        name="state"
        value={userData.state}
        onChange={(e) => setUserData({...userData, state: e.target.value})}
      />
      <button type="button" onClick={() => setCurrentStep(1)}>
        Back
      </button>{' '}
      <button type="button" onClick={() => setCurrentStep(3)}>
        Next
      </button>
    </div>
  );
};

export default Address;
