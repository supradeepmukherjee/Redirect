import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  window.location.href = import.meta.env.VITE_SERVER
  return <></>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)