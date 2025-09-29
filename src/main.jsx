import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importación correcta del CSS
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)