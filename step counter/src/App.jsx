//import { useState } from 'react'
import './App.css'

const messages = [
  "Learn React",
  "Apply for job",
  "Money"
];


function App() {
  const step = 2

  return (
    <>
      <div className='steps'>
        <div className='numbers'>
          <div className={`${step >=1 ? "active" : ""}`}>1</div>
          <div className={`${step >=1 ? "active" : ""}`}>2</div>
          <div className={`${step >=1 ? "active" : ""}`}>3</div>
        </div>
      </div>

      <p className='message'>Step {step}: {messages[step<1]}</p>
      <div className='buttons'></div>
        <button style={{backgroundColor: "#ff3645", color: "#fff"}}>Previous</button>
        <button style={{backgroundColor: "#ff9954", color: "#fff"}}>Next</button>

    </>
  )
}

export default App
