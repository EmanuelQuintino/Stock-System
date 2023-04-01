import { Container } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context";
import { useQuery } from '@tanstack/react-query'
import { ImSpinner2 } from "react-icons/im";
import { InputSearch } from "../InputSearch";

export function HandleProducts() {
  const { fetchProducts } = useContext(ProductsContext);
  const {data, isLoading, error} = useQuery(
    ["products"], fetchProducts, {
      retry: 3
    }
  );

  // const filterProducts = data.filter((product) => {
    // return (
        // String(product.id).toLowerCase().includes(searchProduct.toLowerCase()) ||
        // product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
    // );
  // });

  
  return (
    <Container>
      <InputSearch/>
      <div className="cards">
        {error && <p>Algo deu errado!</p>}
        {isLoading && <p><ImSpinner2 className="spinner"/></p>}
        {data && 
          data.map((product) => {
            return (
              <article className="card" key={product.id}>
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
    </Container>
  )
}