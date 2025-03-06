import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {CodeProvider} from "./context/CodeContenxt.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CodeProvider>
    <App />
    </CodeProvider>
  </StrictMode>,
)
