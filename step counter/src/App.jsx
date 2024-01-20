//import { useState } from 'react'
import './App.css'

const messages = [
  "Learn React",
  "Apply for job",
  "Money"
];


function App() {
  const step = 1

  function handlePrevious(){

  }
  function handleNext(){

  }


  return (
    <>
      <div className='steps'>
        <div className='numbers'>
          <div className={`${step >=1 ? "active" : ""}`}>1</div>
          <div className={`${step >=2 ? "active" : ""}`}>2</div>
          <div className={`${step >=3 ? "active" : ""}`}>3</div>
        </div>
      </div>

      <p className='message'>Step {step}: {messages[step -1]}</p>

      <div className='buttons'></div>
      //We use onClick and call an arrow function that does something specific
        <button style={{backgroundColor: "#ff3645", color: "#fff"}} onClick={(handlePrevious)}>Previous</button>
        <button style={{backgroundColor: "#ff9954", color: "#fff"}} onClick={(handleNext)}>Next</button>

    </>
  )
}

export default App
