import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Bgchanger from './Bgchanger.jsx'
import PasswordGenerator from './PasswordGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Bgchanger /> */}
    <PasswordGenerator />
  </StrictMode>,
)
