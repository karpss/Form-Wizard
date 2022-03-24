/* eslint-disable */
import { useContext } from 'react';
import PersonalDetails from '../Personal/PersonalDetails';
import Address from '../Address/Address';
import Contact from '../Contact/Contact';
import DataDisplay from '../Display/DataDisplay'
import { multiStepContext } from '../../StepContext';

const FormContainer = () => {
    const {currentStep, finalData} = useContext(multiStepContext);

    function showCurrentStep(step){
        switch(step){
            case 1:
                return <PersonalDetails/>;
             case 2:
                 return <Address/>;
                 case 3:
                  return <Contact/>;      
        }
        return step;
    }
   

    return (
        <div>

{showCurrentStep(currentStep)}
{<DataDisplay /> }








        </div>







    )
  
};

export default FormContainer;
