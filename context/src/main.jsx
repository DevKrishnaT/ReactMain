import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from "./context/ContextCreater.jsx";
import ThemeProvider from './context/ThemeContext.jsx'



createRoot(document.getElementById('root')).render(
  <ThemeProvider  >
 <Name >
  <App />
  </Name>
  </ThemeProvider >
    
  ,
)
