import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
  
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
  
  .card {
    max-width: 24.0rem;
    box-shadow: 0 0 .2rem black;
    cursor: pointer;
    transition: scale 300ms;
  }
  
  .card:hover {
    scale: 1.05;
  }
  
  .card img {
    width: 100%;
    display: grid;
    place-content: center;
  }

  .card :nth-child(2) {
    padding: .8rem;
    font-size: 1.2rem;
  }

  span {
    font-weight: 600;
  }
  
  .productName {
    font-size: 1.4rem;
    font-weight: 600;
    border-top: .1rem solid lightgray;
    padding-top: .4rem;
  }
  
  .productPrice {
    font-weight: 600; 
    font-size: 1.6rem;
    color: orange;
  }

  .productAmount {
    font-weight: 600; 
    color: gray;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;