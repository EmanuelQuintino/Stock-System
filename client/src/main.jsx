import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ResetStyled } from './styles/reset'
import { ProductsProvider } from "./context/index"
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <QueryClientProvider client={new QueryClient()}>
        <App />
        <ResetStyled/>
      </QueryClientProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
