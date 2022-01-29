/* eslint-disable */
import PersonalDetails from './components/Personal/PersonalDetails';
import Address from './components/Address/Address';
import Contact from './components/Contact/Contact';
import SubmitForm from './components/Submission/SubmitForm';
import './App.css';
import { useState } from 'react';

function App () {
const [currentStage, setCurrentStage] = useState(1);
const [form, setForm] = useState({
firstname: "",
lastname: "",
street: "",
city: "",
state: "",
phone: "",
email: "",

});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};



const next = () => {
  setCurrentStage(currentStage + 1);
};

const back = () => {
  setCurrentStage(currentStage - 1);
}

switch (currentStage){
case 1:

return (
  
    <PersonalDetails
data={form}
handleChange={handleChange}
next={next}

/>
);

case 2:
  return (
    <Address
    data={form}
    handleChange={handleChange}
    next={next}
    back={back}
    />
  );
  case 3:
    return(
      <Contact
      data={form}
      handleChange={handleChange}
      next={next}
      back={back}
      
       />
    );

    default:
      return(
      <SubmitForm  data={form} back={back}/>
      )
      
  
}

}

export default App;
