import { useState, useContext  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ContextCreater} from './context/ContextCreater';
import {ThemeContext} from './context/ThemeContext';


function App() {
  const [count, setCount] = useState(0);
const { theme, setTheme } = useContext(ThemeContext);

  const user = useContext(ContextCreater);
  return (
    <>
      <div className={` h-full  flex flex-col items-center justify-center ${theme == "dark" ? "bg-black" :"bg-white"}`}>
        <div className="name h-20 bg-white flex items-center">
       {user}
        </div>
<button className='border rounded bg-white'  onClick={() =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }>{theme}</button>
      </div>
    </>
  )
}

export default App
