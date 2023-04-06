import { Container } from "./style"
import { HandleProducts } from "../components/HandleProducts"
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <header>
        <img src="" alt="" />
      </header>
      <main>
        <h1>Stock-System</h1>
        <HandleProducts/>
      </main>
      <footer>
        <img src="" alt="" />
      </footer>
    </Container>    
  )
}