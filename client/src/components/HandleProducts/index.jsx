import { Container } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context";
import { useQuery } from '@tanstack/react-query'
import { ImSpinner2 } from "react-icons/im";
import { InputSearch } from "../InputSearch";
import Modal from "react-bootstrap/Modal";
import { FormProducts } from "../FormProducts";

export function HandleProducts() {
  const { 
    fetchProducts, 
    showModal, 
    modalOpen, 
    modalClose,
    modalToUpdate,
    searchInput
  } = useContext(ProductsContext);

  const {data, isLoading, error} = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
    }, {
      retry: 3,
      staleTime: 5000,
    }
  );

  console.log(data);
  console.log(searchInput);

  const filterProducts = data?.filter((product) => {
    return (
        String(product.id).toLowerCase().includes(searchInput.toLowerCase()) ||
        product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });
  
  return (
    <Container>
      <article>
        <section>
          <InputSearch/>
          <div className="cards">
            {error && <p>Algo deu errado: {error}</p>}
            {isLoading && <p><ImSpinner2 className="spinner"/></p>}
            {filterProducts?.map((product) => {
                return (
                  <article className="card" key={product.id} onClick={() => modalOpen({toUpdate: true}, product.id)}>
                    <section>
                      <img src={product.link_image} alt="image-product" />
                    </section>
                    <section>
                      <h3 className="productName">{product.id}# - {product.name}</h3>
                      <div className="container">
                        <p className="productPrice">R$ {product.price}</p>
                        <p className="productAmount">Quantidade: {product.amount}</p>
                      </div>
                      <p className="productDescription"><span>Descrição:</span> {product.description}</p>
                    </section>
                  </article>
                )
              })
            }
          </div>
        </section>
        
        <section>
          <Modal show={showModal} onHide={modalClose}>
              <Modal.Header closeButton>
                  <Modal.Title>{modalToUpdate ? "Atualizar Produto" : "Cadastrar Produto"}</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{padding: '.8rem 2.4rem'}}>
                  <FormProducts 
                    modalClose={modalClose} 
                  />
              </Modal.Body>            
          </Modal>
        </section>
      </article>     
    </Container>
  )
}