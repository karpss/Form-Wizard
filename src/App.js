/* eslint-disable */
import {useState} from 'react';
import FormContainer from './components/FormContainer/FormContainer';
import './App.css';

import {multiStepContext} from './StepContext'

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);



  return (
    <div>
      <multiStepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        finalData,
        setFinalData,

      }}
      >
        <FormContainer/>

      </multiStepContext.Provider>
    </div>
  )
  
}

export default App;
