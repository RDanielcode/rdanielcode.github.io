import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { Provider } from './components/Context/Context'
import './index.css'

createRoot(document.getElementById('app')).render(
  <Provider>
    <App />
  </Provider>
)
