/* eslint-disable */
import { useContext } from 'react';
import { multiStepContext } from '../../StepContext';


const DataDisplay = () => {
    const {finalData} = useContext(multiStepContext);


    return(
        <div>

{finalData.map((data) => (
              <div key={data.phone}>
                {data.firstname}
                {data.lastname}
                {data.street}
                {data.city}
                {data.state}
                {data.phone}
                {data.email}
                
              </div>
            ))}


        </div>




    )
}

export default DataDisplay;