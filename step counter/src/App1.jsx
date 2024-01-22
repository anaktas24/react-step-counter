/*import { useState } from 'react'
import { useState } from 'react';
import './App.css'

const messages = [
  "Learn React",
  "Apply for job",
  "Money"
];


function App() {
  const [step, setStep] = useState(1)
  const [isOpen,setIsOpen] = useState(true)

  function handlePrevious(){
    if (step >1)
     setStep((step)=> step -1)
  }
  function handleNext(){
    if (step < 3)
    setStep((step)=> step + 1)
  }


  return (
    <div>
      <button className='close' onClick={()=>setIsOpen((is)=> !is)}>&times;</button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >=1 ? "active" : ""}>1</div>
            <div className={step >=2 ? "active" : ""}>2</div>
            <div className={step >=3 ? "active" : ""}>3</div>
          </div>
          <p className='message'>
            Step {step}: {messages[step -1]}
          </p>
        <div className='buttons'>
          <button style={{backgroundColor: "#ff3645", color: "#fff"}} onClick={(handlePrevious)}>Previous</button>
          <button style={{backgroundColor: "#ff9954", color: "#fff"}} onClick={(handleNext)}>Next</button>
        </div>
      </div>
      )}
    </div>
  )
}

*/
