import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesMain from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RoutesMain />
  </React.StrictMode>,
)
