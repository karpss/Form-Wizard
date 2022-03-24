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
                <br/>
                {data.lastname}
                <br/>
                {data.street}
                <br/>
                {data.city}
                <br/>
                {data.state}
                <br/>
                {data.phone}
                <br/>
                {data.email}
                
              </div>
            ))}


        </div>




    )
}

export default DataDisplay;