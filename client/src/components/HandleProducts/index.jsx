import { Container } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context";
import { useQuery } from '@tanstack/react-query'
import { ImSpinner2 } from "react-icons/im";

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
      {error && <p>Algo deu errado!</p>}
      {isLoading && <p><ImSpinner2 className="spinner"/></p>}
      {data && 
        data.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.link_image} alt="image-product" />
              <p>{product.id}</p>
              <p>{product.name}</p>
            </div>
          )
        })
      }
    </Container>
  )
}