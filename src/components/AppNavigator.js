import React from 'react'
import {Box, Typography, Toolbar, AppBar, Button} from "@material-ui/core"
import {Link} from 'react-router-dom'

export default function AppNavigator() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <Link to="/colorScreen/red" style={{textDecoration: "none"}} > 
           <Button color="inherit" >Red</Button>
          </Link>
          <Link to="/colorScreen/green" style={{textDecoration: "none"}}> 
           <Button color="inherit">Green</Button>
          </Link>  
          <Link to="/colorScreen/blue" style={{textDecoration: "none"}}> 
           <Button color="inherit">Blue</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>

  )
} 
