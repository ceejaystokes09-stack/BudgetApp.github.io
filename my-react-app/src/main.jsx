import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import New_task_form from './components/New-Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <New_task_form /> 
    <Header />
    <Footer /> 
  </StrictMode>,
)
