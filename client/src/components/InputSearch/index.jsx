import { Container } from "./style"
import { BsSearch } from "react-icons/bs";

export function InputSearch() {  
  function handleSubmit(event) {
    event.preventDefault();
  }
  
  function handleInput(event) {
    if (event.target.value == "") {
    }
  }

  return (
    <Container>
      <div className="inputSection" onSubmit={handleSubmit}>
        <form>
            <input
                id="inputSearch" 
                type="text"
                placeholder=" "
                name="name"
                onChange={handleInput} 
            />
            <label htmlFor="inputSearchCharacter" className="labelInputSearch">Search Character</label>
            <button className="searchIcon">
              <BsSearch onClick={handleSubmit}/>
            </button>
        </form>
      </div>
    </Container>
  )
}