import { Container } from "./style"
import { BsSearch } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ProductsContext } from "../../context";

export function InputSearch() {
  const { modalOpen, searchInput, setSearchInput } = useContext(ProductsContext);
  return (
    <Container>
      <div className="inputSection">
        <form onSubmit={(event) => event.preventDefault()}>
            <input
                id="inputSearch" 
                type="text"
                placeholder=" "
                name="name"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)} 
            />
            <label htmlFor="inputSearch" className="labelInputSearch">Search Product</label>
            <button className="searchIcon">
              <BsSearch />
            </button>
        </form>
      </div>
      <button className="addProductIcon">
        <IoIosAddCircleOutline onClick={() => modalOpen({toUpdate: false})}/>
      </button>
    </Container>
  )
}