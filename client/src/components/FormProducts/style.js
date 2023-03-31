import styled from "styled-components";

export const Container = styled.section `
    max-width: 32.0rem;
    margin: 0 auto;
    
    input {
        font-size: 1.4rem;
    }
    
    label {
        margin-top: 1.2rem;
        line-height: 1.2rem;
    }

    .error {
        color: red;
        display: block;
        position: absolute;
        font-size: 1.0rem;
        margin-top: .2rem;
    }
`; 