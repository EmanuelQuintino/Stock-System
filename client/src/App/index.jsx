import { Container } from "./style"
import { FormProducts } from "../components/FormProducts"
import { HandleProducts } from "../components/HandleProducts"
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <h1>App</h1>
      <main>
        <HandleProducts/>
        <FormProducts/>
      </main>
    </Container>    
  )
}