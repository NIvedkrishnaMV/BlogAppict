import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material'
import axios from 'axios'

const Home = () => {
    var[values,setvalues]=useState()
    const innerText='Add Blog'
    const path='/add'
    const heading='HOME PAGE'

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data);
            setvalues(res.data)
        })
    },[])
  return (
    <div>
        <div>
      <Navbar 
        text={innerText}
        path={path} 
        heading={heading} 
        />  
        </div>
   
        <div container spacing={2} >
       <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650 , margin:"10px", border:'2px solid blue' }}>
            <TableHead  sx={{ border:'2px solid blue' }}>
                <TableRow >
                    <TableCell sx={{ border:'2px solid blue' }} ><b>ID</b></TableCell>
                    <TableCell sx={{ border:'2px solid blue' }} ><b>TITLE</b></TableCell>
                    <TableCell sx={{ border:'2px solid blue' }} ><b>BODY</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {values?.map((val,i)=>{
            return (

                <TableRow>
                    <TableCell sx={{ border:'2px solid blue' }} >{val.id}</TableCell>
                    <TableCell sx={{ border:'2px solid blue' }} >{val.title}</TableCell>
                    <TableCell sx={{ border:'2px solid blue' }} >{val.body}</TableCell>
                </TableRow>
                )

            })}
            </TableBody>
        </Table>
       </TableContainer>
       </div>
    </div>
  )
}

export default Home
