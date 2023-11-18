import { useState } from 'react'
import Weather from './components/Weather';
import './App.css'

function App() {

  const [city,setCity] = useState('');
  function handleInputChange(e){
      setCity(e.target.value);
  }
  return (
    <>
      <h1> Weather Application</h1>
      <p>Please type the city name below</p>
      <input type='text' onChange={handleInputChange} value={city}/>
      <div className='container' style={{marginTop:'50px'}}>
        <Weather city={city}></Weather>
        <Weather city={city}></Weather>
        <Weather city={city}></Weather>
        <Weather city={city}></Weather>

      </div>
    </>
    
  )
}

export default App
