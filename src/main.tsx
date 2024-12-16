import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { DefaultStyle } from './styles/Global.styles'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DefaultStyle />
    <App />
  </StrictMode>,
)
