import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PhoneNumber from '../src/Component/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <PhoneNumber >
     <App />
  </PhoneNumber>
   
 
)
