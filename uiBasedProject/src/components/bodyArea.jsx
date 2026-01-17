import React from 'react'
import Video from '../components/Video';
import BuyOption from '../components/BuyOption';
const BodyArea = () => {
  return (
    <div className='py-6 flex-1 flex min-h-0'>

      <div className="mx-4 flex-7">
       <Video>
  <div className="p-6 text-white">
    <h1 className="text-3xl font-semibold">
      Text on top of video
    </h1>

    <button className="mt-4 px-6 py-2 bg-black/70 rounded">
      Click me
    </button>
  </div>
</Video>
      </div>
      <div className="flex-3 h-full" >
        <BuyOption />
      </div>
    </div>
  )
}

export default BodyArea