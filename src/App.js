import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(prevCount => prevCount + 1)
  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div className="App">
       <span>{count}</span>
       <br />
    <button style={{background: "black", color: "white", padding: "10px", margin: "10px"}} onClick={increment}>increment</button>
   
    <button style={{background: "black", color: "white", padding: "10px", margin: "10px"}} onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
