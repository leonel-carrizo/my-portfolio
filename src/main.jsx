import ReactDOM from 'react-dom/client'
import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import App from './App.jsx'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
