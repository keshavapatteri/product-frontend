import React, { useState } from 'react'
import TableContainer from '@mui/material/TableContainer';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import products from '../assets/json/product';
import { useEffect } from 'react';



export default function Mytable() {

const [lists,setList] = useState([])

useEffect(()=>{
    console.log(products);
setList(products);
},[]);


    return (
        <Container>
        <TableContainer>
            <Table>
                {/* //table head */}
                <TableHead>
                    <TableRow>
                        <TableCell> sl no</TableCell>
                        <TableCell> Image</TableCell>
                        <TableCell> Title</TableCell>
                        <TableCell>category</TableCell>
                        <TableCell>quantity</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                {/* table head end here */}


                {/* adding data */}
                <TableBody>

                {lists.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.title}</TableCell>
             
              <TableCell>
                <img src={row.category} alt={row.title} style={{ width: '50px' }} />
              </TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}

                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    )
}
