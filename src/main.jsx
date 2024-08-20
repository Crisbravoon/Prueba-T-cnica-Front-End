import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Shopping from './Shopping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopping/>
  </StrictMode>,
)
