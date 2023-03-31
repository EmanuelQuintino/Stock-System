import styled from "styled-components";

export const Container = styled.section`
  .spinner {
    animation: spinnerRotate 1s linear infinite;
    font-size: 4.2rem;
    display: block;
    margin: 25% auto 100%;
    color: lightgray;
  }
  
  @keyframes spinnerRotate {
    to {
        transform: rotate(360deg);
    }
  }
`;