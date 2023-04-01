import { Container } from "./style"
import { HandleProducts } from "../components/HandleProducts"
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <header>
        <img src="chocolate-header.jpg" alt="" />
      </header>
      <main>
        <h1>App</h1>
        <HandleProducts/>
      </main>
      <footer>
        <img src="chocolate-footer.jpg" alt="" />
      </footer>
    </Container>    
  )
}