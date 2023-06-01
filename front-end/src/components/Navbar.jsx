import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
function Navbar() {
  const[url, setUrl] = useState('');
  const [userName, setUserName] = useState('')
  const { name, picture,given_name } = JSON.parse(localStorage.getItem("userDetail")) || {};

  function logout(){
    const { email, user_id } = localStorage.getItem('userDetail');
    localStorage.removeItem("userDetail");
    localStorage.removeItem("flag");
    localStorage.removeItem("token");
    window.open("/");
  }

  useEffect(()=>{
    setUserName(given_name)
    setUrl(picture)
  },[name])
  
  return (
    <Flex className="navbar">
      <Flex>
        <Heading
        color={'#ff0084'}
        letterSpacing= {"0.3rem"}
          as="h1"
          size="xl"
          noOfLines={1}
          display={["none", "none", "none", "block", "block", "block"]}
        >
          Tra<span style={{color:"#fff",letterSpacing: "0.4rem", fontWeight:"bold"}}>vel</span>opia
        </Heading>
      </Flex>
      <Spacer display={["none", "none", "none", "block", "block", "block"]} />
      <Flex
        width={["100%", "100%", "100%", "40%", "40%", "40%"]}
        justify={"space-around"}
      >
        <Link to="/">Home</Link>

        <Link to="/form">Form</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Flex className="login">
          {name ? (
            <>
            <img className="userImg" src={url} alt={name} />
            <span>{userName}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{curser:'pointer'}} onClick={logout}>Logout</span>
            </>
          ) : (
            <Link to={"/signin"}>Signin</Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
