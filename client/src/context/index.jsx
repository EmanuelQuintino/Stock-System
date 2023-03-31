import { createContext } from "react";
import { API } from "../config/api";

export const ProductsContext = createContext({});

export function ProductsProvider({children}) {
  function fetchProducts() {
    return (
      API.get("/products")
        .then((res) => res.data)
        .catch((error) => console.error(error))
      )
  }

  return (
    <ProductsContext.Provider value={{fetchProducts, test: "test"}}>
      {children}
    </ProductsContext.Provider>
  )
}