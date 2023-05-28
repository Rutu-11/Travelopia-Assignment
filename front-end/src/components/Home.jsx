import React from "react";
import "./common.css";
import { Heading } from "@chakra-ui/react";
import styled from "styled-components";

function Home() {
  return <div className="container">
    <MainContainer>
    <Heading as="h1" size={["m","l","l","xl","xl"]} color={'white'} m={'auto'} w={'65%'}textAlign={'center'} >Travel far, travel wide, travel deep, and you'll discover the true beauty of this world.</Heading>
    <img src="https://media.giphy.com/media/w4gNrkGxMcBig/giphy.gif" alt="" />
  </MainContainer>;
  </div>
}

export default Home;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 50vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 80vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 80vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 65vw;
    height: 80vh;
  }
`;


const FormText = styled.h2`
  margin: 3rem 0 2rem 0;
`;