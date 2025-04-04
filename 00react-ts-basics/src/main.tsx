import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.querySelector('#koren')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
