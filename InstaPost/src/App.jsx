import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feed from './Component/Feed'
import Image_1 from './assets/images/profile-1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="MobileArea">
      <Feed name="krishna" img={Image_1}/>
      <Feed name="lakshya" img={Image_1}/>
      <Feed name="yello" img={Image_1}/>
      <Feed name="green" img={Image_1}/>
      <Feed name="beluga" img={Image_1}/>
     </div>
    </>
  )
}

export default App
