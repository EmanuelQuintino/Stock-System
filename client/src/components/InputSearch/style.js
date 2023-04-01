import styled from "styled-components";

export const Container = styled.section `
    .inputSection {
        position: relative;
        max-width: 42.0rem;
        margin: 2.4rem auto 0;
    }

    .labelInputSearch {
        position: absolute;
        bottom: .6rem;
        left: .8rem;
        pointer-events: none;
        transition: 400ms;
        padding: 0 .4rem;
        color: lightgray;
        font-size: 2.0rem;
    }
    
    #inputSearch {
        width: 100%;
        background: none;
        border: .15rem solid lightgray;
        padding: 1.2rem 1.2rem .4rem;
        border-radius: .4rem;
        font-size: 2.0rem;
        color: black;
    }
    
    #inputSearch:focus {
        outline: .15rem solid orange;
        border: .15rem solid orange;
    }
    
    #inputSearch:not(:placeholder-shown) + .labelInputSearch,
    #inputSearch:focus + .labelInputSearch {
        bottom: 3.8rem;
        font-size: 1.4rem;
        background: white;
        color: gray;
    }

    .searchIcon {
        position: absolute;
        bottom: 1.0rem;
        right: 1.6rem;
        font-size: 2.0rem;
        color: lightgray;
        cursor: pointer;
        background: none;
        border: none;
    }

    .addProductIcon {
        font-size: 4.2rem;
        color: lightgray;
        cursor: pointer;
        background: none;
        border: none;
    }

    .addProductIcon:hover {
        color: black;
    }

    @media (max-width: 36.0rem) {
        .inputSection {
            max-width: 28.0rem;
            margin: 0 auto;
            right: 2.5%;
        }
    }
`;