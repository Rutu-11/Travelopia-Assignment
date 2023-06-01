import React, { useEffect, useState } from "react";
import "./common.css";
import { Box, Flex, Input, Heading, Select } from "@chakra-ui/react";
import TableContainerComp from "./TableContainer";
import axios from "axios";
import styled from "styled-components";
import { CSVLink, CSVDownload } from "react-csv";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Navbar from "./Navbar";


function Dashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0); // Starting index of submissions on the current page
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSubmissions();
    loadData();
  }, [currentPage]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get(`https://vivacious-lime-bandanna.cyclic.app/api?page=${currentPage}`);
      const { submissions, totalPages } = response.data;
      // console.log(response)
      setSubmissions(submissions);
      setTotalPages(totalPages);
      setStartIndex((currentPage - 1) * 5); // Calculate the starting index based on the current page
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };
const loadData =async ()=>{
    try{
        let res = await axios.get('https://vivacious-lime-bandanna.cyclic.app/api/csv');
        const data = res.data.submissions;
        console.log('data',data)
        setData(data);
    }
    catch(e){

    }
}
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <> 
    <Navbar/>
    <Box className="table-container">
        <MainContainer>
        <Heading
          as="h1"
          size="l"
          noOfLines={1}
          textAlign={'center'}
          mb={'10px'}
        >
          Dashboard
        </Heading>
        <CSVLink data={data} onClick={()=>{}} >Export Data</CSVLink>
      <TableContainer w={"90%"} m={"auto"} >
        <Table >
          {/* <TableCaption>Total Budget : {total}</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Destination</Th>
              <Th>Traveller's Count</Th>
              <Th>Budget per Person</Th>
            </Tr>
          </Thead>
          <Tbody>
            {submissions?.map((submission, ind) => {
              const {
                name,
                email,
                destination,
                travellerCount,
                budgetPerPerson,
              } = submission;
              return (
                <Tr key={submission._id}>
                  <Td>{startIndex + ind + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{destination}</Td>
                  <Td>{travellerCount}</Td>
                  <Td>{budgetPerPerson}</Td>
                </Tr>
              );
            })}
          </Tbody>
         
        </Table>
      </TableContainer>
       <TableContainer className="button-div">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              background : page == currentPage? "#ff0084" : 'white',
              color: page === currentPage ? 'white' : 'black',
            }}
          >
            {page}
          </button>
        ))}
      </TableContainer>
      </MainContainer>
      
    </Box>
    </>
  );
}


 const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 70vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 70vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 90vw;
    height: 75vh;
  }

  @media only screen and (min-width: 768px) {
    width: 85vw;
    height: 75vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 80vw;
    height: 70vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 75vw;
    height: 65vh;
  }
`;


const FormText = styled.h2`
  margin: 3rem 0 2rem 0;
`;
export default Dashboard;



