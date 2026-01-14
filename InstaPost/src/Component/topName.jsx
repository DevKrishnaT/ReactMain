import React from 'react'

const TopName = (porps) => {
  return (
    <div className='TopArea'>
<div className="AreaOfTop">
    <div className="left">
        <div className="imageProfile"><img className='ActualImage' src={porps.img} alt="" srcset="" /></div>
    <div className="Name">{porps.name}</div>
    </div>
    <div className="dots">...</div>
   
</div>
    </div>
  )
}

export default TopName