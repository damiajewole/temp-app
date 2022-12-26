import React from 'react';
import Select from "react-dropdown-select";
import Display from './Display';
import 'react-dropdown/style.css';
import './style.css';

function App() {
  const [formData, setFormData] = React.useState(
    {degree: "", value: "", answer:"", isConvert: false}
  )

  function handleChange(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const options = [{
    value: 1,
    label: "Fahrenheit"
  },
  {
    value: 2,
    label: "Kelvin"
  }]


  function setValues(values){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        value: values
      }
    })
  }

  function handleConvert(){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        isConvert: true
      }
    })
  }

  return(
    <div className='App'>
      <div className='input--area'>
        <div className="degree-area">
          <p>Degrees</p>
          <input 
            type="text"
            placeholder="Enter Degrees"
            onChange={handleChange}
            name="degree"
            value={formData.degree}
            className="degree-box"
          />
        </div>
        <div className='type-area'>
          <p>Type</p>
          <Select options={options} onChange={setValues} />
        </div>
        <div className='btn-area'>
          <button onClick={handleConvert} className="btn">Convert</button>
        </div>
      </div>
      <div>
        <p>Result</p>
        {(formData.isConvert) ? <Display data={formData}/> : <p></p>}
      </div>
    </div>
  )
}

export default App;


// t t 

// t t T
// t f T
// f t T
// f f F
