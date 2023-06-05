import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IsLoggedProvider } from './context/IsLoggedContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedProvider>
      <App />
    </IsLoggedProvider>
  </React.StrictMode>
)
