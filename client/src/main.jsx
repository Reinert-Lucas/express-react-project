import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/login/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section className='login'>
      <Login />
    </section>
  </StrictMode>,
)
