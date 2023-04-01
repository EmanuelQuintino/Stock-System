import styled from "styled-components";

export const Container = styled.section `
    .inputSection {
        position: relative;
        max-width: 36.0rem;
        margin: 0 auto;
        right: 1.25%;
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
        color: white;
    }
    
    #inputSearch:focus {
        outline: .15rem solid orange;
        border: .15rem solid orange;
    }
    
    #inputSearch:not(:placeholder-shown) + .labelInputSearch,
    #inputSearch:focus + .labelInputSearch {
        bottom: 3.4rem;
        font-size: 1.4rem;
        background: none;
        color: white;
    }

    .searchIcon {
        position: absolute;
        bottom: .4rem;
        right: -1.6rem;
        font-size: 2.0rem;
        color: lightgray;
        cursor: pointer;
    }

    @media (max-width: 36.0rem) {
        .inputSection {
            max-width: 28.0rem;
            margin: 0 auto;
            right: 2.5%;
        }
    }
`;