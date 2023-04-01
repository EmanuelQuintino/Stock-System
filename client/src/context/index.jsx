import { createContext, useState } from "react";
import { API } from "../config/api";

export const ProductsContext = createContext({});

export function ProductsProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  
  function fetchProducts() {
    return (
      API.get("/products")
        .then((res) => res.data)
        .catch((error) => console.error(error))
      )
  }

  function modalOpen() {
    setShowModal(true);
  }

  function modalClose() {
      setShowModal(false);
  }

  return (
    <ProductsContext.Provider value={{
      fetchProducts, 
      showModal, 
      modalOpen, 
      modalClose
    }}>
      {children}
    </ProductsContext.Provider>
  )
}