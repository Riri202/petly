/* eslint-disable no-undef */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import ThemeButton from './ThemeButton';
import Logo from '../assets/Logo.png'
//import {Container} from '@material-ui/core';
//import Toolbar from '@material-ui/core/Toolbar'




const useStyles = makeStyles( theme => {
  return {
    root: {
      height: 90,
   
  },
  logoContainer: {
    paddingLeft: 70,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 50
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 30
}

  },
  logo: {
    backgroundColor: '#0D75FF',
    width: 50,
    height: 50,
    borderRadius:50,
    [theme.breakpoints.down('sm')]: {
      width: 30,
      height: 30,
      marginBottom: 10
  }
    },
    logoImg: {
      [theme.breakpoints.down('sm')]: {
          width: 13,
          height: 13,
      }
  },
  logoTitle: {
      marginTop: 12, 
      marginLeft: 8,
      [theme.breakpoints.down('sm')]: {
          marginTop: -0
      }
  },
    
  
  }
});



function NavBar({toggleLight, darkMode, toggleDark} ) {
  const classes = useStyles()

  return <Box className={classes.root}>
   
 

  <AppBar elevation={0} color={darkMode ? 'theme.palette.background.paper' : '#fff'} style={{padding: 12 }}  position="fixed"  >

    
  

    <Box  sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Box sx={{display: 'flex', flexDirection: 'row'}} className={classes.logoContainer}>
          <Box className={classes.logo} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <img alt='petly-logo' src={Logo} className={classes.logoImg} />
          </Box>
                      
                   <Typography variant="h6" component="div" className={classes.logoTitle} >
                        Petly
                    </Typography>
                      
          </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <ThemeButton  toggleLight={toggleLight}  toggleDark={toggleDark} style={{paddingRight: 10}} />
                </Box> 
          
            
              
        </AppBar>
</Box>
};

export default NavBar;
