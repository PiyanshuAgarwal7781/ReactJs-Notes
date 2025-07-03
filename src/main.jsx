import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import CounterContex from './Context/CounterContex.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <App />
 </StrictMode> 
)
