import React from 'react'
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
  } from '@chakra-ui/react'



function TableContainerComp({userData, ind}) {
    console.log('userData',userData)
    const {name, email, destination, travellerCount,budgetPerPerson} = userData;
  return (
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
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
      <Tr>
        <Td>ind</Td>
        <Td>name</Td>
        <Td>email</Td>
        <Td>destination</Td>
        <Td>travellerCount</Td>
        <Td>budgetPerPerson</Td>
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default TableContainerComp;
