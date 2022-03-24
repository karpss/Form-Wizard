/* eslint-disable */
import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';


const PersonalDetails = () => {
  const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        name="firstname"
        value={userData.firstname}
        onChange={(e) =>
          setUserData({...userData, firstname: e.target.value})}
      />

      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        name="lastname"
        value={userData.lastname}
        onChange={(e) => setUserData({...userData, lastname: e.target.value})}
      />

      <button type="button" onClick={() => setCurrentStep(2)} >
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
