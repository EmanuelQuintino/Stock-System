import { Container } from "./style"
import { BsSearch } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ProductsContext } from "../../context";

export function InputSearch() {
  const { modalOpen } = useContext(ProductsContext);
  
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
            <label htmlFor="inputSearch" className="labelInputSearch">Search Product</label>
            <button className="searchIcon">
              <BsSearch onClick={handleSubmit}/>
            </button>
        </form>
      </div>
      <button className="addProductIcon">
        <IoIosAddCircleOutline onClick={() => modalOpen({toUpdate: false})}/>
      </button>
    </Container>
  )
}