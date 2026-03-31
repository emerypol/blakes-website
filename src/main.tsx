import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TwoBox from './TwoBox'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TwoBox />
  </StrictMode>,
)
