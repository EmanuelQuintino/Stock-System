import styled from "styled-components";

export const Container = styled.section`
  .cards{
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
  }
  
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
    background: #EEE4;
    border-radius: .4rem;
    padding: .8rem;
  }
  
  .card:hover {
    scale: 1.05;
  }

  .card :nth-child(1) {
    object-fit: cover;
    object-position: center;
  }

  .card img {
    width: 100%;
    display: grid;
    place-content: center;
    border-radius: .4rem .4rem 0 0;
  }
  
  .card :nth-child(2) {
    font-size: 1.4rem;
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
    color: orange;
  }
  
  .productAmount {
    font-weight: 600; 
    color: #888;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.6rem;
  }
  
  .productDescription {
    font-size: 1.2rem;
    color: #888;
  }
`;