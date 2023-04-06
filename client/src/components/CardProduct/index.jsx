import { Container } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../context";

export function CardProduct({product}) {
  const { modalOpen } = useContext(ProductsContext);

  return(
    <Container>
      <article className="card" onClick={() => modalOpen({toUpdate: true}, product)}>
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
    </Container>
  )
}