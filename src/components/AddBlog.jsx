import React from 'react'
import Navbar from './Navbar'
import { Button, TextField, } from '@mui/material'

const AddBlog = () => {
    const innerText='Home'
    const path='/'
    const heading='Add Blog'
  return (
    <div>
      <Navbar text={innerText} path={path} heading={heading} />
      
        <TextField variant='outlined' label='Title'></TextField><br /><br /><br />
        <TextField variant='outlined' sx={{minWidth:'30%'}} label='Description'></TextField>
        <br /><br /><br />
        <TextField variant='outlined'  label='Author Name'></TextField>
        <br /><br /><br />
        <Button variant='contained' href='/'>Add Blog</Button>
      
    </div>
  )
}

export default AddBlog
