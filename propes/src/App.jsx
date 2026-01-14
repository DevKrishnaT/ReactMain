import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./component/card.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card  name="krishna"/>  
    <Card  name="junal"/>  
    </>
  )
}

export default App
