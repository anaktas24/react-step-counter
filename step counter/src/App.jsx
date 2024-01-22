// import { useState } from 'react';
// import './App.css'

// function App() {


//   return(
//     <>
//       <div className='container'>
//         <Counter/>
//       </div>
//     </>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   return (
//     <div>
//       <div>
//         <button onClick={() => setStep((c) => c - 1)}>-</button>
//         <span>Step: {step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>

//       <div>
//         <button onClick={() => setCount((c) => c - step)} style={{backgroundColor: "#ff3645", color: "#fff"}}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={() => setCount((c) => c + step)} style={{backgroundColor: "#3cb371", color: "#fff"}}>+</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }


// export default App
