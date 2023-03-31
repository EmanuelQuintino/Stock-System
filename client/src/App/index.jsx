import { Container } from "./style"
import { FormProducts } from "../components/FormProducts"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { ProductsContext } from "../context";

export function App() {
  const { test } = useContext(ProductsContext);
  console.log(test);
  return (
    <Container>
      <h1>App</h1>
      <main>
        <FormProducts/>
      </main>
    </Container>    
  )
}