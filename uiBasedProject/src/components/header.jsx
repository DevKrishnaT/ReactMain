import React from 'react'
import Button from './Button'
import CrossButton from '../assets/cross.svg'
const Header = () => {
  return (
    <div className='h-16 box-border border border-[rgba(0,0,0,0.1)] shrink-0 sticky'>
        <div className="mx-5 h-full">
            <div className="h-full flex justify-between items-center">
                <div className='font-sans text-2xl font-medium'>Opal</div>
                <div className='font-sans text-1.5xl'>We ship worldwide.</div>
                <div className='font-sans text-2xl'>
                   <Button> <img
              src={CrossButton}
              alt="close"
              className="w-4 h-4 invert group-hover:invert-0 transition icon"
            /></Button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Header