import { createContext, useState } from "react";
import { API } from "../config/api";

export const ProductsContext = createContext({});

export function ProductsProvider({children}) {
  const [showModal, setShowModal] = useState(false);
  const [modalToUpdate, setModalToUpdate ] = useState(true);
  const [searchInput, setSearchInput ] = useState("");
  const [productData, setProductData ] = useState({});
  
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

  function deleteProduct(ID) {
    const isDelete = confirm("Deseja excluir o produto?");
    if (isDelete) {
      API.delete(`/products/${ID}`)
        .then((res) => {
          alert(res.data);
          modalClose();
        })    
        .catch((error) => alert(error.response.data));
    }
  }

  function modalOpen(toUpdate = {toUpdate: false}, productData) {
    setShowModal(true);
    setModalToUpdate(toUpdate.toUpdate);
    
    if (productData) {
      let expiresInSplit = productData.expires_in;
      if (String(productData.expires_in).includes('T')) {
        expiresInSplit = String(productData.expires_in).split('T')[0];
      }
      
      setProductData({...productData, expires_in: expiresInSplit});
    } else {
      setProduct({})
    }
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
      setSearchInput,
      productData, 
      setProductData
    }}>
      {children}
    </ProductsContext.Provider>
  )
}