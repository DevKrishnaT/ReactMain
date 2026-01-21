import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginProvider   from '../src/context/LoginContext'

function App() {
  

  return (
    <>
     <LoginProvider >
      <div className="parent h-100 flex justify-center items-center">
        <div className="loginStructure  border rounded flex flex-col items-center gap-4 py-5 px-5">
          <h1>login</h1>
         <input type="text" className='border rounded px-2' placeholder='userName' />
         <input type="text" className='border rounded px-2' placeholder='password'/>
        </div>

      </div>
      </LoginProvider >
    </>
  )
}

export default App
