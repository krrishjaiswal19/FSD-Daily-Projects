import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ConsoleDemo from './ConsoleDemo.jsx'
import CounterEffect from './CounterEffect.jsx'
import PageTitleApp from './PageTitleApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
