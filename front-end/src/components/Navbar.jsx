import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex className="navbar">
      <Flex>
        <Heading
          as="h1"
          size="xl"
          noOfLines={1}
          display={["none", "none", "none", "block", "block", "block"]}
        >
          Travelopia
        </Heading>
      </Flex>
      <Spacer display={["none", "none", "none", "block", "block", "block"]} />
      <Flex
        width={["100%", "100%", "100%", "40%", "40%", "40%"]}
        justify={"space-around"}
      >
        <Link to={"/"}>Home</Link>

        <Link to={"/form"}>Form</Link>

        <Link to={"/dashboard"}>Dashboard</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
