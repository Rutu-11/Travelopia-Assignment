import React from "react";
import "./common.css";
import wallpaper from "../assets/wallpaper.webp";
import { Heading } from "@chakra-ui/react";
const styles = {
  background: `url(${wallpaper})`,

  /* Additional background properties */
};
function Home() {
  return <div className="container">
    <Heading as="h1" size={["m","l","l","xl","xl"]} color={'white'} m={'auto'} w={'60%'}textAlign={'center'} >Travel far, travel wide, travel deep, and you'll discover the true beauty of this world.</Heading>
    <img src="https://media.giphy.com/media/w4gNrkGxMcBig/giphy.gif" alt="" />
  </div>;
}

export default Home;
