import { useRef, useState , useEffect, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from '../src/Component/text'
import UseReducer from '../src/Component/UseReducer'

function App() {
  const [count, setCount] = useState(0);
  const [num , setNum] = useState(0);
 function NumCube(num) {
  return Math.pow(num , 2);
 }
 const result = useMemo(() => NumCube(num), [num] )
  const fake= useCallback(()=>{},[])

  return (
    <>
      <div className="bg-pink-400 h-full flex justify-center  ">
        
        <div className="flex flex-col gap-4">
          <Text text={fake} />
          <input type="text" className='w-40 h-5 bg-white border rounded px-2 text-black placeholder-black' placeholder='white' onChange={(e) =>{
            setNum(e.target.value)
          }}  />
        <div className="h-20 border rounded bg-white flex justify-center text-black">
          The cube is {result};
        </div>
         <UseReducer />
        </div>
       
      </div>

    </>
  )
}

export default App
