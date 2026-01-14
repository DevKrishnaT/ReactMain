import React from 'react'
import TopName from './topName'
import ImageArea from './ImageArea';
import FooterArea from './FooterArea';
const Feed = (porps) => {
  return (
    <div className='PostArea'>
        <TopName name={porps.name} img={porps.img}/>
        <ImageArea />
        <FooterArea />
        
        
    </div>
  )
}

export default Feed