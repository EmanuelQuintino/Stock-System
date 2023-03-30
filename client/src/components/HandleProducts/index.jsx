import { Container } from "./style"
import { BsSearch } from "react-icons/bs"
import Modal from 'react-bootstrap/Modal';
import { FormProducts } from "../FormProducts";
import {API} from"../../config/api";
import { ImSpinner2 } from 'react-icons/im'
import { useState, useEffect } from "react";

export function HandleProducts() {
    const [listProducts, setListProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [productData, setProductData] = useState({});
    const [searchProduct, setSearchProduct] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const filterProducts = listProducts.filter((Product) => {
        return (
            String(Product.id).toLowerCase().includes(searchProduct.toLowerCase())
        );
    })
    
    function fetchProducts() {
        setIsLoading(true);
        API.get("/products")
            .then((res) => setListProducts(res.data))
            .catch((error) => alert(error.response.data))
            .finally(setIsLoading(false));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    function modalOpen(ProductID) {
        setShowModal(true);
        const Product = listProducts.findIndex(Product => Product.id === ProductID);
        setProductData(listProducts[Product]);  
    }

    function modalClose() {
        setShowModal(false);
    }

    function onSubmitFetchProducts(event) {
        event.preventDefault();
        fetchProducts();
    }
    
    return (
        <Container>
            <article>
                <section className="titleSearch">
                    <h1>Produtos</h1>
                    <div className="inputSection">
                        <form onSubmit={onSubmitFetchProducts}>
                            <input
                                id="inputSearchProduct" 
                                type="text"
                                placeholder=" " 
                                onChange={(event) => setSearchProduct(event.target.value)}
                            />
                            <label htmlFor="inputSearchProduct" className="labelInputSearch">Buscar produto</label>
                            <BsSearch className="searchIcon"/>
                        </form>
                    </div>
                </section>

                <section className="tableProducts">
                    { isLoading ? <ImSpinner2 className="spinner"/> :
                        listProducts &&
                            filterProducts.map((product) => {
                                return (
                                    <div className="cardProduct" key={product.id} onClick={() => modalOpen(product.id)}>
                                        <div>{product.id}#</div>
                                        <div>{product.product}</div>
                                        <div>{product.description}</div>
                                        <div>{product.link_image}</div>
                                        <div>{product.expires_in}</div>
                                    </div>
                                )
                            }) 
                    }
                </section>

                <section>
                    <Modal show={showModal} onHide={modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Detalhes do Aluno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{padding: '.8rem 2.4rem'}}>
                            <FormProducts 
                                modalClose={modalClose} 
                                productData={productData}
                                fetchProducts={fetchProducts}
                            />
                        </Modal.Body>            
                    </Modal>
                </section>
            </article>
        </Container>
    )
}