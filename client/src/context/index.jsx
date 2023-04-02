import { createContext, useState } from "react";
import { API } from "../config/api";

export const ProductsContext = createContext({});

export function ProductsProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  const [modalToUpdate, setModalToUpdate ] = useState(true);
  const [searchInput, setSearchInput ] = useState("");
  
  function fetchProducts() {
    return (
      API.get("/products")
        .then((res) => res.data)
        .catch((error) => console.error(error))
      )
  }

  function createProduct(data) {
    return (
      API.post("/products", data)
        .then((res) => {
          alert(res.data);
          modalClose();
        })
        .catch((error) => alert(error.response.data))
    )
  }

  function updateProduct(data) {
    API.put(`/products/${data.id}`, data)
      .then((res) => {
        alert(res.data);
        modalClose();
      })    
      .catch((error) => alert(error.response.data));
  }

  function deleteProduct(data) {
    const isDelete = confirm("Deseja excluir o produto?");
    if (isDelete) {
      API.delete(`/products/${data.id}`)
        .then((res) => {
          alert(res.data);
          modalClose();
        })    
        .catch((error) => alert(error.response.data));
    }
  }

  function modalOpen(toUpdate = {toUpdate: false}, productID) {
    setShowModal(true);
    setModalToUpdate(toUpdate.toUpdate);
    console.log(productID);
  }

  function modalClose() {
      setShowModal(false);
  }

  return (
    <ProductsContext.Provider value={{
      fetchProducts, 
      showModal, 
      modalOpen, 
      modalClose,
      modalToUpdate,
      setModalToUpdate,
      createProduct,
      updateProduct,
      deleteProduct,
      searchInput,
      setSearchInput
    }}>
      {children}
    </ProductsContext.Provider>
  )
}