import React from 'react'
import { useState } from 'react'
import ObjectHook from '../src/ObjectHook'
import { useEffect } from 'react';
import { useRef } from 'react';

const App = () => {
  const [count , setCount] = useState("krishna");

  const[Countnum, setCountnum] = useState(1);
  // useEffect(() =>{
  //   setTimeout(() =>{
  //     setCountnum(prev => prev +1);
  //   },1000)
  // })


  function ChangeName(){
     if (count == 'krishna') {
       setCount('vaani');
      }else{
        
        setCount('krishna');
     }

  }

  /////------------------useref------------//
  let input = useRef(null);
  let button = useRef(null);
  const [ButtonClick, setButtonClick] = useState(1);

 
    button.current.addEventListener("click" , () =>{
    if(ButtonClick == 1){
      hide();
      setButtonClick(0);
    }
    else{
      show();
      setButtonClick(1);
    }
    })
    
  
  click
  function hide() {
    input.current.type = "password";
  }
  function show() {
    input.current.type = "text";
  }

  return (
    <>
    <div className='flex h-full justify-center bg-black/30' >
       
    
    <div className='py-4 px-20'><button onClick={ChangeName}>PressMe</button></div>
    <ObjectHook />
    </div>
    <div className="w-full flex justify-center h-">
    <div className="bg-amber-100 text-black w-full text-center p-2">
      total {Countnum} death till you intered site  
    </div>
    </div>
    <div className="flex justify-center px-5">
    <div className="bg-red-500  py-20 flex justify-center h-full flex-col gap-5 px-5">
      <input ref={input} type="text" className='border border-white rounded-2xl flex text-white ' placeholder='Here enter'/>
      <button className='bg-white text-red-500 rounded-2xl px-2'  ref={button}>click Me to get safe!</button>
    </div>
</div>
    
    
</>


    
    
    
  )
}

export default App