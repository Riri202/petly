/* eslint-disable no-undef */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import ThemeButton from './ThemeButton';
import Logo from '../assets/Logo.png'
//import Toolbar from '@material-ui/core/Toolbar'




const useStyles = makeStyles({
  root: {
      height: 90,
      
      
      
      
      
  },
  logo: {
    backgroundColor: '#0D75FF',
    width: 50,
    height: 50,
    borderRadius:50,
    },
    
  
});



function NavBar() {
  const classes = useStyles()

  return <Box className={classes.root}>
   
 

  <AppBar color="secondary" position="fixed" style={{padding: 12}} >

    
  

    <Box  sx={{display: 'flex', flexDirection: 'row'}}>
      <Box sx={{display: 'flex', flexDirection: 'row'}} style={{paddingLeft: 70}}>
          <Box className={classes.logo} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <img src={Logo}/>
          </Box>
                      
                   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginTop: 12, marginLeft: 8}}>
                        Petly
                      </Typography>
                      
          </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <ThemeButton style={{paddingRight: 10}}/>
                </Box> 
          
            
           
        </AppBar>
</Box>
};

export default NavBar;
