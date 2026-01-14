import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function decrementFun(){
    setCount(count -1)
  }
  function incrementFun() {
    setCount(count +1)
    
  }

  return (
    <>
     <button onClick={decrementFun}>-</button>
     <span >{count}</span>
     <button onClick={incrementFun}>+</button>
    </>
  )
}

export default App
