import React, { useContext } from 'react'
import {ContextContainer} from '../Context/ContextContainer';

const Text = () => {
  const phone = useContext(ContextContainer);
  return (
   <div>
   {phone}
   </div>
  )
}

export default Text