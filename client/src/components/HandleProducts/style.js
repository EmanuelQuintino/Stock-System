import styled from "styled-components";

export const Container = styled.section`
    .titleSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .inputSection {
        position: relative;
    }
    
    .labelInputSearch {
        position: absolute;
        bottom: .2rem;
        left: .8rem;
        pointer-events: none;
        transition: 400ms;
        padding: 0 .4rem;
        color: gray;
        font-size: 1.6rem;
    }
    
    .srOnly {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        overflow: hidden;
        color: transparent;
    }
    
    #inputSearchProduct {
        width: 100%;
        background: none;
        border: .1rem solid lightgray;
        padding: .4rem 1.2rem .2rem;
        border-radius: .4rem;
        font-size: 1.6rem;
        color: lightgray;
    }
    
    #inputSearchProduct:focus {
        outline: .1rem solid orange;
        border: .1rem solid orange;
    }
    
    #inputSearchProduct:not(:placeholder-shown) + .labelInputSearch,
    #inputSearchProduct:focus + .labelInputSearch {
        bottom: 2.2rem;
        font-size: 1.2rem;
        background: white;
        color: lightgray;
    }
    
    .searchIcon {
        position: absolute;
        bottom: .8rem;
        right: 1.2rem;
        font-size: 1.6rem;
        color: lightgray;
    }
    
    .tableProducts {
        margin-top: 1.6rem;
    }
    
    .tableProducts table {
        font-size: 1.0rem;
        position: relative;
    }
    
    .spinner {
        animation: spinnerRotate 1s linear infinite;
        font-size: 2.4rem;
        position: absolute;
        margin: 50% 45%;
        color: lightgray;
    }
    
    th, td {
        text-align: center;
    }
    
    tr td:nth-child(2) {
        text-align: start;
    }
    
    .editIcon {
        font-size: 1.2rem;
        cursor: pointer;
    }
    
    .form-modal {
        color: red;
    }

    @keyframes spinnerRotate {
    to {
        transform: rotate(360deg);
    }
}
`;