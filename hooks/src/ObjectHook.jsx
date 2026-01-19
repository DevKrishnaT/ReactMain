import React from 'react'
import { useState } from 'react'

const ObjectHook = () => {
    const [about, setAbout] = useState({
        name: 'krishna',
        age: 23,
        car: 'bmw'
    })
  return (
    <div >my name is {about.name} and i am {about.age} old, fav car {about.car}</div>
  )
}

export default ObjectHook