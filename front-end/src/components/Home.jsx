import React from "react";
import "./common.css";
import { Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./Navbar";
function Home() {

  const { name, email, picture,given_name } = JSON.parse(localStorage.getItem("userDetail")) || {};
  const text = useTypewriter({
    words: [`Wecome to Travelopia`],
    loop: {},
  });

  return (
  <>
  <Navbar/>
  <div className="container">
    <MainContainer>
    <Heading as="h1"color="white" size={'xl'}>Hey <span>{given_name}</span>! {text[0]} </Heading>
    <Heading as="h2" size={["m","l","xl","xl","xl"]} marginTop={'10px'}  color={'white'} m={'auto'} w={'65%'}textAlign={'center'} >Embrace the Extraordinary: Travelopia invites you to unlock a world of awe-inspiring travel adventures that will leave you breathless.</Heading>

  </MainContainer>;
  </div>
  </>
  )
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
  @media only screen and (max-width: 360px) {
    width: 80vw;
    height: 70vh;
    h1{
      font-size:small;
    }
    h2 {
      font-size:small;
    }
    h4 {
      font-size: large;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 70vh;
    h1{
      font-size:large;
      margin-bottom:-1rem
    }
    h2 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {

    width: 80vw;
    height: 70vh;
    h1{
      font-size:x-large;
       margin-bottom:-.8rem
    }
    h2 {
      font-size: large;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
    h1{
      font-size:xx-large;
      margin-bottom:-1rem
    
    }
    h2 {
      font-size: x-large;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 80vw;
    height: 80vh;
    h1{
      font-size:x-large;
      margin-bottom:-1.2rem
    }
    h2 {
      font-size: xx-large;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 65vw;
    height: 80vh;
    h1{
      font-size:xx-large;
      margin-bottom:-1.5rem
    }
    h2 {
      font-size: xx-large;
    }
  }
`;

