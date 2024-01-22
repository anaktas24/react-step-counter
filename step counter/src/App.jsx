import { useState } from 'react';
import './App.css'

function App() {
  const [step,setStep] =  useState(1)
  const [count,setCounter] = useState(1)

  return(
    <>
      <div className='container'>
        <Counter/>
      </div>
    </>
  )
}<div className='buttons'>
        <button style={{backgroundColor: "#ff3645", color: "#fff"}} onClick={(handlePrevious)}>Previous</button>
        <button style={{backgroundColor: "#ff9954", color: "#fff"}} onClick={(handleNext)}>Next</button>
      </div>

 function Counter(){

}

export default App
