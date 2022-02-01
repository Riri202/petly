/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import footerImg1 from '../assets/Group 115.png'
import footerImg2 from '../assets/Group 117.png'
import footerImg3 from '../assets/Group 116.png'
import footerImg4 from '../assets/Group 193.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Logo from '../assets/Logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#0D75FF',
        borderRadius: 50,
        fontColor: 'white',
        padding: 20,
        fontSize:13,
        height: 50,
        padding: 5,
    },
    root: {
        backgroundColor:'#F3F5FB',
        height: 500,
        marginTop: 30,
    },
    logo: {
        backgroundColor: '#0D75FF',
        width: 50,
        height: 50,
        borderRadius:50,
        },
})


function Footer() {
    const classes = useStyles();
  return <div>
      <Box className={classes.root} sx={{display:'flex', flexDirection:'column'}}>
           
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div>
                        <img alt='footerImg1' src={footerImg1} />
                    </div>

                    <div>
                    <img alt='footerImg2' src={footerImg2} />
                    </div>
                </Box>

                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <div>
                        <img alt='footerImg3' src={footerImg3} />
                    </div>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography>
                            <span>Need</span> help with adopting a pet?
                        </Typography>
                        <Button className={classes.btn} variant="contained">
                            View all Pets
                        </Button>
                    </Box>
                    <div>
                        <img alt='footerImg4' src={footerImg4} />
                    </div>
                </Box>

                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>  
                        <Box className={classes.logo} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img alt='petly-logo' src={Logo}/>
                        </Box>
                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginTop: 12, marginLeft: 8}}>
                            Petly
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', ml:40}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-evenly', mb: 3}}>
                            <FaFacebook size={20}/> <FaInstagram size={20}/> <FaTwitter size={20}/> <FaLinkedin size={20}/>
                        </Box>
                        <Typography>
                            Copyright © 2021 Petly. All rights reserved.
                        </Typography>
                    </Box>
                    <Box  sx={{display: 'flex', flexDirection: 'row', ml: 20}}>
                        <Typography style={{margin: 10}}>Terms of use</Typography>
                        <Typography style={{margin: 10}}>Privacy policy</Typography>
                    </Box>
                </Box>
           
      </Box>
  </div>;
}

export default Footer;
