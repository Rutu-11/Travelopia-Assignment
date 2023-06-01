import React, { useEffect, useState } from "react";
import "./common.css";
import { Box, Flex, Input, Heading, Select, useToast, Spacer } from "@chakra-ui/react";
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
  const [formData, setFormData] = useState({});

  
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
        duration: 1000,
        isClosable: true,
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Coulden't Submit.",
        description: "Error Occured.",
        status: "error",
        duration: 1000,
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
          <FormText as="h1" size="xl" noOfLines={1}>
            Fill Your Details
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

            <Flex>
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
                as="h1"
                size="l"
                noOfLines={1}
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
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 85vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 55vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 50vw;
    height: 80vh;
  }
`;

const FormText = styled.h2`
  margin: 3rem 0 2rem 0;
`;
