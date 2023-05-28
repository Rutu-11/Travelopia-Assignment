import React, { useState } from "react";
import "./common.css";
import wallpaper from "../assets/gradient1.jpeg";
import { Box, Flex, Input, Heading, Select,useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const styles = {
  background: `url(${wallpaper})`,

  /* Additional background properties */
};
function Form() {

  const navigate = useNavigate();
  const toast = useToast()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [totalNumber, setTotalNumber] = useState("");
  const [budgetPerPerson, setBudgetPerPerson] = useState("");

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
      `https://nightgown-cocoon.cyclic.app/api/submissions`,
      payload
    );
    if(data){
      toast({
        title: 'Sucessfully Submitted.',
        description: "Form submitted sucessfully.",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      navigate('/dashboard')
    }
    else{
      toast({
        title: "Coulden't Submit.",
        description: "Error Occured.",
        status:'error',
        duration: 1000,
        isClosable: true,
      })
    }
    setName("")
    setEmail("")
    setDestination("")
    setTotalNumber("")
    setBudgetPerPerson("")
    
    // console.log('Submitted data:', name, email, destination, totalNumber, budgetPerPerson);
  };

  return (
    <Flex
      className="form-container"
      display={["block", "block", "block", "flex", "flex"]}
    >
      <Box w={["100%", "100%", "100%", "45%", "45%", "45%"]}>
        <Heading as="h1" size="xl" noOfLines={1}>
          Fill Your Details
        </Heading>

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
            type='text'
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

          <Input
            variant="filled"
            htmlSize={4}
            width="auto"
            type="submit"
            background={"red"}
            required
          />
        </form>
      </Box>
      <Box
        w={["100%", "100%", "100%", "45%", "45%", "45%"]}
        display={["none", "none", "none", "flex", "flex"]}
      >
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.Qyhne68aHpgFE0AJ_RllfwHaEk&pid=Api&P=0&h=180"
          alt=""
        />
      </Box>
    </Flex>
  );
}

export default Form;
