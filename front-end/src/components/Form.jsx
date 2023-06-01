import React, { useEffect, useState } from "react";
import "./common.css";
import { Flex, Input, Heading, Select, useToast, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

function Form() {
  const navigate = useNavigate();
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [totalNumber, setTotalNumber] = useState("");
  const [budgetPerPerson, setBudgetPerPerson] = useState("");
  const [budget, setBudget] = useState(0);

  
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      name: name,
      email: email,
      destination: destination,
      travellerCount: totalNumber,
      budgetPerPerson: budgetPerPerson,
    };
    console.log(payload);

    let data = await axios.post(
      `https://vivacious-lime-bandanna.cyclic.app/api/submissions`,
      payload
    );
    if (data) {
      toast({
        title: "Sucessfully Submitted.",
        description: "Form submitted sucessfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Coulden't Submit.",
        description: "Error Occured.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setName("");
    setEmail("");
    setDestination("");
    setTotalNumber("");
    setBudgetPerPerson("");

    // console.log('Submitted data:', name, email, destination, totalNumber, budgetPerPerson);
  };

useEffect(()=>{
  setBudget(Number(budgetPerPerson) * Number(totalNumber))
},[budgetPerPerson,totalNumber])

  return (
    <>
      <Navbar />
      <Flex
        className="form-container"
        display={["block", "block", "block", "flex", "flex"]}
      >
        <MainContainer>
          <FormText as="h1"  size={["m","l","xl","xl","xl"]} noOfLines={1}>
          Discover the Exciting Travel Adventures with Travelopia

          </FormText>

          <form action="" onSubmit={handleSubmit}>
            <Input
              variant="filled"
              placeholder="Enter Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              type="text"
            />

            <Input
              variant="filled"
              placeholder="Enter Your Email"
              name={"email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
            />

            <Select
              variant="filled"
              placeholder="Select Destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              required
              type="text"
            >
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
            </Select>

            <Input
              variant="filled"
              placeholder="Enter Total Number of Members"
              value={totalNumber}
              onChange={(event) => setTotalNumber(event.target.value)}
              required
              type="number"
            />

            <Input
              variant="filled"
              placeholder="Enter Budget per Member"
              value={budgetPerPerson}
              onChange={(event) => setBudgetPerPerson(event.target.value)}
              required
              type="number"
            />

            <Flex display={['block','block','flex','flex','flex']}>
              <Input
                variant="filled"
                htmlSize={4}
                width="auto"
                type="submit"
                background={"#ff0084"}
                required
              />

              <Spacer/>
              <Heading
                as="h2"
                size="l"
               
                textAlign={"center"}
                mb={"10px"}
                color={"#fff"}
              >{"Total Budget : $"+ budget } </Heading>
            </Flex>
          </form>
        </MainContainer>
      </Flex>
    </>
  );
}

export default Form;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 50vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 360px) {
    width: 90vw;
    height: 70vh;
    h1{
      font-size:.8rem;
    }
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
    input,select{
      height:30px;
      width:95%;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 90vw;
    height: 80vh;
    h1{
      font-size:.8rem;
    }
    input,select{
      height:35px;
      // width:95%;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 95vw;
    height: 80vh;
    h1{
      font-size:1.2rem;
    }
    input,select{
      height:35px;
      // width:75%;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 95vw;
    height: 80vh;
    h1{
      font-size:1.2rem;
    }
    input,select{
      height:40px;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 65vw;
    height: 80vh;
    h1{
      font-size:1.5rem;
    }
    input,select{
      height:40px;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 50vw;
    height: 80vh;
    h1{
      font-size:1.5rem;
    }
    input,select{
      height:40px;
    }
  }
`;

const FormText = styled.h2`
  margin: 3rem 0 2rem 0;
`;
