import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ResetStyled } from './styles/reset'
import { ProductsProvider } from "./context/index"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
      <ResetStyled/>
    </ProductsProvider>
  </React.StrictMode>,
)
