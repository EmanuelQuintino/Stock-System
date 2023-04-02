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
    searchInput,
  } = useContext(ProductsContext);

  const {data, isLoading, error} = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
    }, {
      retry: 3,
      staleTime: 5000,
    }
  );

  const filterProducts = data?.filter((product) => {
    return (
        String(product.id).includes(searchInput) ||
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase())
    );
  }).sort((a, b) => b.id - a.id);
  
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
                  <article className="card" key={product.id} onClick={() => modalOpen({toUpdate: true}, product)}>
                    <section>
                      <img src={product.link_image} alt="image-product" />
                    </section>
                    <section>
                      <h3 className="productName">{product.name}</h3>
                      <div className="container">
                        <p className="productPrice">{product.price.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}</p>
                      </div>
                        <p className="productAmount">Quantidade: {product.amount}</p>
                        <p className="productExpiresIn">
                          Validade: <span className={new Date >= new Date(product.expires_in) ? "dateExpiresInCaution" : ""}>
                            {new Date(
                              new Date(product.expires_in)
                                .setHours(new Date(product.expires_in)
                                .getHours() + 3)
                              ).toLocaleDateString("pt-BR")
                            }
                          </span>
                        </p>
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