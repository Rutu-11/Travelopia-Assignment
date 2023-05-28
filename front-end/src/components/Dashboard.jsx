import React, { useEffect, useState } from "react";
import "./common.css";
import wallpaper from "../assets/gradient1.jpeg";
import { Box, Flex, Input, Heading, Select } from "@chakra-ui/react";
import TableContainerComp from "./TableContainer";
import axios from "axios";

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

const styles = {
  background: `url(${wallpaper})`,

  /* Additional background properties */
};
// let data = await axios.get(`https://mushy-toad-costume.cyclic.app/api`);
function Dashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0); // Starting index of submissions on the current page
  useEffect(() => {
    fetchSubmissions();
  }, [currentPage]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get(`https://mushy-toad-costume.cyclic.app/api?page=${currentPage}`);
      const { submissions, totalPages } = response.data;
      // console.log(response)
      setSubmissions(submissions);
      setTotalPages(totalPages);
      setStartIndex((currentPage - 1) * 5); // Calculate the starting index based on the current page
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <Box className="table-container">
        <Box>
        <Heading
          as="h1"
          size="xl"
          noOfLines={1}
          textAlign={'center'}
          mb={'10px'}
        >
          Dashboard
        </Heading>
      <TableContainer w={"80%"} m={"auto"} background={"orange.100"}>
        <Table variant="striped" colorScheme="teal">
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
       
      </Box>
      <Box className="button-div">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              background : page == currentPage? "blue" : 'white',
              color: page === currentPage ? 'white' : 'black',
            }}
          >
            {page}
          </button>
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
  // const [submissions, setSubmissions] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   fetchSubmissions();
  // }, [currentPage]);

  // const fetchSubmissions = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/api?page=${currentPage}`);
  //     const { submissions, totalPages } = response.data;
  //     console.log(response)
  //     setSubmissions(submissions);
  //     setTotalPages(totalPages);
  //   } catch (error) {
  //     console.error('Error fetching submissions:', error);
  //   }
  // };

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

//   return (
//     <div>
//       <h1>Submissions</h1>
//       <ul>
//         {submissions.map((submission) => {
//           console.log("submission", submission)
//           return (
//           <li key={submission._id}>{submission.name}</li>
//         )
//       })
//         }
//       </ul>
      // <div>
      //   {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
      //     <button
      //       key={page}
      //       onClick={() => handlePageChange(page)}
      //       style={{
      //         fontWeight: page === currentPage ? 'bold' : 'normal',
      //       }}
      //     >
      //       {page}
      //     </button>
      //   ))}
      // </div>
//     </div>
//   );
// };

// export default Dashboard;
