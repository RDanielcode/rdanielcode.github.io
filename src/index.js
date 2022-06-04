import React from 'react'
import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { Provider } from './components/Context/Context'
import './index.css'

// createRoot(document.getElementById('app')).render(
//   <Provider>
//     <App />
//   </Provider>
// )

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
)
