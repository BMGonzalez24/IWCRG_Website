import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// para utilizar o bootstrap apagou-se a linha que estava aqui e colocou-se esta
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
