/* eslint-disable */
import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';


const Contact = () => {
  const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <form>
      <label htmlFor="phone">Phone:</label>
      <input
        type="number"
        name="phone"
        value={userData.phone}
        onChange={(e) => setUserData({...userData, phone: e.target.value})}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={(e) => setUserData({...userData, email: e.target.value})}
      />
      <button type="button" onClick={() => setCurrentStep(2)}>
        Back
      </button>{' '}
      <button type="button" >
       Submit
      </button>
    </form>
  );
};

export default Contact;
