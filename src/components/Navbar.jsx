import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'


const Navbar = (props) => {

  return (
    <div>
      <AppBar style={{marginLeft:'5px' , marginRight:'5px' }}>
        <Toolbar >
            &nbsp;&nbsp;<Typography variant='h6' >Blog App</Typography>&nbsp;&nbsp;
            <Typography variant="h4" style={{fontFamily:'initial',color:'yellow'
            }} component="div" sx={{ flexGrow: 1 }}>
              {props.heading}   
          </Typography>
                <Button 
                    variant='contained'
                    color='warning'
                    href={props.path}
                    align="end"
                >{props.text}</Button>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br /><br />
    </div>
    
  )
}

export default Navbar
